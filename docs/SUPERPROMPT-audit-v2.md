# SUPERPROMPT v2 — Audit adversarial infinitrade.ro („ce vede clientul”, 100% acoperire)

Versiune 2.0 — 30.09.2026. Înlocuiește v1 (26.09). Scop: să găsim ORICE problemă pe care o vede un client, un cumpărător B2B, Google sau un asistent AI, nu doar problemele din liste cunoscute.

## 0. De ce v1 a ratat erori (cauze, cu exemple reale)
| # | Cauză | Ce a scăpat |
|---|---|---|
| 1 | **Datorii „acceptate” ascunse din raport.** v1 spunea „datoriile de gate G5/G6/G7/G10/G12/G14 preexistente NU se raportează”. | Cifre identice la Grundfos și Wilo, 51 de fraze copiate între branduri (erau chiar în G14). |
| 2 | **Audit pe cod și pe liste de cuvinte, nu pe pagina afișată.** Câmpul `changelog.note` era considerat metadată internă. | 175 de pagini afișau clienților „reparație: … declarație de aprovizionare onestă”, „429”, „Wikipedia”. |
| 3 | **„Are sursă” ≠ „sursa confirmă afirmația”.** Se verifica existența listei de surse, nu fiecare afirmație. | Atos, SMC, Kobold, Grundfos: specificații și acronime inventate („UPS = Uninterrupted Pumping System”, CETOP 07/400 l/min în loc de ISO 4401-06/40 l/min). |
| 4 | **Eșantion în loc de totalitate.** Se citeau câteva pagini pe șablon. | 59 de linkuri spre branduri comasate (301); „Schneider Electric” de două ori pe categorii. |
| 5 | **Formulare verificate „structural”** (există label, există zod), nu testate cu valori reale. | Telefon incomplet acceptat, „nume@firma” acceptat în pagină și respins de server, generatorul de parole producea parole respinse. |
| 6 | **Autor = auditor.** Același tip de model a scris și a verificat conținutul; punctele oarbe coincid. | Afirmații plauzibile, dar false, trec de o citire „de stil”. |
| 7 | **Calcule „aproape corecte”.** | „17+ ani” calculat ca an curent − 2009 (firma împlinește 17 ani pe 11.11.2026). |
| 8 | **Text tăiat mecanic.** | „efi...”, „iar si...” pe /industrii și studii de caz. |

## 1. Reguli de lucru (obligatorii)
1. **Totul, nu eșantion**: toate URL-urile din sitemap + toate linkurile interne descoperite (inclusiv paginile noindex).
2. **Pe HTML-ul afișat**, nu doar pe cod: orice câmp ajuns pe pagină e conținut public.
3. **Nimic nu se ascunde din raport.** Datoriile acceptate se raportează mereu, cu număr și exemplu; proprietarul decide din nou.
4. **Fiecare afirmație verificabilă → sursă oficială care o confirmă** (nu doar „are surse”). Neconfirmat ⇒ se scoate sau se generalizează onest.
5. **Testare comportamentală**: formulare cu matrice de valori (valide, la limită, invalide), fără trimiteri reale (cereri oprite intenționat sau interceptate).
6. **Auditor diferit de autor**: verificarea faptelor o face un agent cu instrucțiuni de fact-checker (scripts/audit/fact-check-brief.md), nu cel care a scris textul.
7. **Căutare de „necunoscute”**: pe lângă liste, se caută tipare statistice: fraze sau cifre identice între entități diferite, texte în altă limbă, fragmente tehnice (identificatori, căi, coduri de eroare), valori care se contrazic între pagini.
8. **Fiecare reparație se re-verifică live** după publicare.

## 2. Straturi
**Strat 1 — detectoare deterministe live** (`scripts/audit/live-audit.browser.js`, rulat în browser pe www.infinitrade.ro): status, title/description (lungime, unicitate), canonical, robots vs sitemap, un singur H1, salturi de titluri, JSON-LD valid, imagini fără alt, linkuri spre 301/404, jargon intern, entități HTML vizibile, sedile ş/ţ, fraze interzise (cu excepțiile de negație), text trunchiat, termene în afara politicii, fraze în engleză, specificații identice la branduri diferite.
**Strat 2 — teste comportamentale**: `node scripts/test-form-validation.mjs` + matricea din `audit-formulare.md`, testată live pe /contact și pe o categorie (fetch interceptat), 3 cereri live oprite (mesaj „scurt”); coș de cerere; căutare; 404; redirecturi legacy.
**Strat 3 — verificare de fapte** (agenți Sonnet cu `scripts/audit/fact-check-brief.md`, 10 branduri/agent, ieșire JSON `{slug,file,type,old,new,evidence}`); orchestratorul verifică eșantionul, aplică doar corecturi cu dovadă oficială sau eliminări, apoi build + gates. Prioritate: branduri din loturile vechi 1–18 (cele mai multe erori), apoi după cererea de căutare.
**Strat 4 — gates în repo**: `node scripts/gates/run.mjs` (G1–G4, G11, G14–G16, G18, G19 trebuie PASS).

## 3. Clasificare și ieșire
Fiecare constatare: `{strat, detector, gravitate: BLOCKER|MAJOR|MINOR, url/fișier, dovadă, corectură}`. BLOCKER = fals despre firmă sau producător, date personale, securitate; MAJOR = vizibil clientului și dăunător încrederii; MINOR = formă. Toate BLOCKER + MAJOR se repară în aceeași trecere; MINOR când costul e mic.

## 4. Ritm
- După fiecare publicare: Strat 1 + Strat 4 (≈ 5 minute).
- Săptămânal: Strat 2.
- Continuu până la acoperire completă: Strat 3 pe câte 80 de branduri/rundă; evidența în `STARE-branduri-500.md` (branduri verificate / rămase).
