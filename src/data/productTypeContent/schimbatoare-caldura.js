// src/data/productTypeContent/schimbatoare-caldura.js — selection guides for the product types of
// /schimbatoare-caldura (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /schimbatoare-caldura/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "schimbatoare-caldura",
    "slug": "schimbatoare-placi-brazate-industriale",
    "name": "Schimbătoare Plăci Brazate Industriale",
    "shortName": "schimbătoare cu plăci brazate",
    "lede": "Schimbătorul cu plăci brazate este un schimbător de căldură compact format din plăci metalice ondulate, lipite (brazate) între ele sub vid, prin care circulă alternativ agentul cald și cel rece, transferând căldură fără amestecarea celor două fluide. Este soluția tipică pentru HVAC industrial, răcire de proces și pompe de căldură, unde spațiul de montaj e limitat.",
    "intro": "Placa ondulată creează canale înguste între fiecare pereche de plăci, ceea ce mărește turbulența și suprafața de transfer termic raportată la volum, comparativ cu un schimbător tubular clasic. Brazarea (de obicei cu cupru sau nichel, în funcție de fluid) înlocuiește garniturile, ceea ce face schimbătorul mai compact și fără riscul de scurgere prin garnitură — dar și nedemontabil pentru curățare mecanică internă. Numărul de plăci și modelul ondulației (unghi de chevron) se aleg în funcție de debit, cădere de presiune admisă și diferența de temperatură dorită.\nCe contează la un schimbător brazat bun: materialul de brazare compatibil cu fluidele (cuprul nu rezistă la amoniac, de exemplu, unde se cere brazare cu nichel), presiunea și temperatura maximă de proiectare a plăcilor din inox, precum și izolația termică exterioară pentru diferențe mari de temperatură. Fiindcă nu se poate deschide pentru curățare mecanică, calitatea filtrării fluidului la intrare și posibilitatea unei spălări chimice (CIP) prin racorduri dedicate devin criterii reale de alegere, nu detalii secundare.",
    "howToChoose": [
      {
        "criterion": "Puterea termică și debitele celor două fluide",
        "detail": "Sarcina termică necesară și debitele pe fiecare circuit stabilesc numărul de plăci și suprafața totală; se comunică ambele debite și temperaturile de intrare/ieșire dorite, nu doar puterea în kW."
      },
      {
        "criterion": "Fluidele vehiculate și compatibilitatea materialului de brazare",
        "detail": "Brazarea din cupru nu e compatibilă cu amoniacul și rezistă limitat la unele soluții cu clor; pentru aceste fluide se cere brazare din nichel sau o construcție alternativă cu garnituri."
      },
      {
        "criterion": "Presiunea și temperatura maximă de lucru",
        "detail": "Presiunea de proiectare a plăcilor și temperatura maximă admisă trebuie să acopere condițiile reale de proces, inclusiv vârfurile ocazionale, nu doar regimul normal de funcționare."
      },
      {
        "criterion": "Cădere de presiune admisă pe fiecare circuit",
        "detail": "O cădere de presiune prea mare crește consumul pompelor de circulație; se comunică presiunea disponibilă pe fiecare circuit, altfel producătorul alege un compromis care poate să nu convină instalației."
      },
      {
        "criterion": "Riscul de înfundare și necesitatea filtrării",
        "detail": "Canalele înguste dintre plăci se pot înfunda cu particule sau depuneri; pentru fluide cu impurități se recomandă filtrare la intrare, fiindcă schimbătorul brazat nu se poate deschide pentru curățare mecanică."
      },
      {
        "criterion": "Izolație termică și montaj",
        "detail": "Pentru diferențe mari de temperatură față de mediu se cere izolație termică exterioară dedicată; spațiul și orientarea de montaj (racorduri sus/jos) trebuie verificate față de desenul dimensional al producătorului."
      }
    ],
    "whatToSend": [
      "Cele două fluide vehiculate și eventualul conținut de particule sau depuneri",
      "Debitele și temperaturile de intrare/ieșire dorite pe fiecare circuit",
      "Puterea termică necesară, dacă e deja calculată",
      "Presiunea maximă de lucru și căderea de presiune admisă pe fiecare circuit",
      "Spațiul disponibil de montaj și orientarea racordurilor",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "HVAC industrial",
      "Răcire proces",
      "Pompe de căldură",
      "Recuperare energie",
      "Instalații frigorifice"
    ],
    "maintenance": "Principalul risc de degradare este depunerea de calcar sau nămol în canalele dintre plăci, care reduce transferul termic în timp; fiindcă schimbătorul brazat nu se demontează, curățarea se face de regulă chimic (CIP), prin racorduri dedicate sau printr-un circuit temporar de spălare. Se verifică periodic diferența de temperatură realizată față de valoarea de proiect — o abatere semnificativă indică înfundare sau depunere internă.",
    "faq": [
      {
        "q": "Ce diferență este între un schimbător cu plăci brazate și unul cu plăci demontabile?",
        "a": "Schimbătorul cu plăci brazate are plăcile lipite permanent, e mai compact și mai ieftin la aceeași putere, dar nu se poate deschide pentru curățare mecanică sau pentru a adăuga plăci ulterior. Cel cu plăci demontabile, strânse cu garnituri între bare, permite deschiderea pentru curățare și ajustarea numărului de plăci, cu prețul unui gabarit mai mare."
      },
      {
        "q": "Cum se dimensionează un schimbător cu plăci brazate?",
        "a": "Se pornește de la puterea termică necesară și temperaturile de intrare/ieșire dorite pe ambele circuite, apoi producătorul calculează numărul de plăci și modelul de ondulație care ating acea putere la o cădere de presiune acceptabilă. Debitele reale, nu doar cele nominale, trebuie confirmate, fiindcă un debit subestimat duce la o putere reală mai mică decât cea proiectată."
      },
      {
        "q": "Ce trebuie trimis pentru ofertă și cât durează livrarea unui schimbător cu plăci brazate?",
        "a": "Sunt necesare cele două fluide, debitele, temperaturile de intrare/ieșire dorite, presiunea de lucru și spațiul de montaj disponibil. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de producător, de mărimea schimbătorului cerută și de materialul de brazare solicitat."
      },
      {
        "q": "Se poate curăța un schimbător cu plăci brazate fără să fie demontat?",
        "a": "Da, prin spălare chimică (CIP) — se recirculă o soluție de curățare prin racordurile existente, fără deschiderea schimbătorului, ceea ce dizolvă majoritatea depunerilor de calcar sau nămol ușor. Pentru depuneri foarte vechi sau înfundare severă, eficiența spălării chimice scade și poate fi necesară înlocuirea schimbătorului."
      }
    ],
    "relatedTypes": [
      "schimbatoare-placi-demontabile-industriale",
      "schimbatoare-tubulare-industriale",
      "condensatoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "schimbatoare-caldura",
    "slug": "schimbatoare-placi-demontabile-industriale",
    "name": "Schimbătoare plăci demontabile industriale",
    "shortName": "schimbătoare cu plăci demontabile",
    "lede": "Schimbătorul cu plăci demontabile transferă căldură între două fluide printr-un pachet de plăci metalice ondulate, strânse cu buloane între două rame, fără sudură între ele. Se folosește acolo unde e nevoie de curățare mecanică frecventă sau de reglare a capacității prin adăugarea ori scoaterea de plăci.",
    "intro": "Plăcile ondulate creează canale înguste, alternate, prin care circulă fluidul cald și cel rece, separate de garnituri montate pe fiecare placă. Ondulațiile induc turbulență la debite relativ mici, ceea ce ridică semnificativ coeficientul de transfer termic față de un schimbător tubular clasic, la un gabarit mult mai redus. Capacitatea instalației se poate ajusta ulterior prin adăugarea sau scoaterea de plăci, fără a schimba întregul echipament, iar accesul la pachet se face prin desfacerea buloanelor de strângere.\nUn produs potrivit pentru procese industriale are plăci din inox sau, pentru fluide agresive, din materiale speciale, iar garniturile trebuie alese pe baza compatibilității chimice și a temperaturii de lucru (EPDM, NBR sau viton, în funcție de aplicație). Contează și ușurința demontării pachetului pentru curățare mecanică sau înlocuirea garniturilor, disponibilitatea plăcilor de schimb la același model și eficiența termică reală, nu doar suprafața nominală de transfer indicată în catalog.",
    "howToChoose": [
      {
        "criterion": "Sarcina termică și temperaturile de intrare/ieșire",
        "detail": "Debitul, temperatura de intrare și cea de ieșire dorită pentru ambele fluide stabilesc numărul de plăci necesar; o estimare aproximativă duce fie la subdimensionare, fie la un echipament inutil de mare."
      },
      {
        "criterion": "Compatibilitatea chimică a plăcilor și garniturilor",
        "detail": "Fluidele agresive sau cu conținut de cloruri cer materiale speciale pentru plăci și garnituri rezistente termic și chimic; alegerea greșită scurtează drastic durata de viață a echipamentului."
      },
      {
        "criterion": "Presiunea de lucru și presiunea de proiectare",
        "detail": "Presiunea maximă admisă a pachetului de plăci și a garniturilor trebuie să acopere cu marjă presiunea reală din instalație, inclusiv vârfurile la pornire."
      },
      {
        "criterion": "Riscul de colmatare al fluidului",
        "detail": "Fluidele cu particule sau vâscozitate ridicată pot colmata canalele înguste dintre plăci; în aceste cazuri se aleg plăci cu canale mai largi sau se optează pentru alt tip constructiv."
      },
      {
        "criterion": "Frecvența necesară de curățare mecanică",
        "detail": "Dacă procesul generează depuneri (calcar, grăsimi, produse alimentare), varianta demontabilă cu plăci are avantaj clar față de una brazată, tocmai pentru accesul la curățare fără scoaterea din instalație."
      },
      {
        "criterion": "Posibilitatea de extindere ulterioară a capacității",
        "detail": "Ramele și buloanele se aleg cu o rezervă de spațiu pentru plăci suplimentare, dacă există perspectiva creșterii sarcinii termice în viitor."
      },
      {
        "criterion": "Standardul de racorduri și spațiul disponibil la montaj",
        "detail": "Poziția și diametrul racordurilor trebuie să corespundă traseelor existente, iar spațiul lateral necesar demontării pachetului trebuie prevăzut încă din faza de proiectare a amplasamentului."
      }
    ],
    "whatToSend": [
      "Fluidele din ambele circuite și debitele de lucru",
      "Temperaturile de intrare și de ieșire dorite pentru fiecare fluid",
      "Presiunea de lucru și presiunea de proiectare a instalației",
      "Riscul de colmatare sau prezența particulelor în fluid",
      "Spațiul disponibil la montaj și tipul racordurilor",
      "Cantitatea necesară și termenul dorit de livrare"
    ],
    "applications": [
      "Industria chimică",
      "Termoficare",
      "Procese alimentare",
      "Pasteurizare",
      "Recuperare căldură din apă uzată industrială"
    ],
    "maintenance": "Piesele care se uzează sunt garniturile dintre plăci, care se întăresc și pierd etanșeitatea în timp, mai ales la temperaturi ridicate sau cicluri termice repetate. Curățarea mecanică periodică a plăcilor previne colmatarea și scăderea eficienței de transfer termic, iar la revizie se verifică strângerea corectă a buloanelor și starea garniturilor, care de regulă se înlocuiesc integral la fiecare demontare a pachetului.",
    "faq": [
      {
        "q": "Ce diferență e între un schimbător cu plăci demontabile și unul brazat?",
        "a": "Schimbătorul demontabil se poate deschide pentru curățare mecanică și permite adăugarea sau scoaterea de plăci pentru a ajusta capacitatea. Cel brazat este sudat compact, mai rezistent la presiune și mai ieftin la gabarit egal, dar nu se poate curăța mecanic și nici extinde ulterior."
      },
      {
        "q": "Cum se dimensionează un schimbător cu plăci demontabile industrial?",
        "a": "Se pornește de la sarcina termică reală, adică debitul și temperaturile dorite pentru ambele fluide, apoi se verifică presiunea de lucru și riscul de colmatare. Numărul de plăci rezultă din aceste date, nu se alege după gabaritul altui echipament similar."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de schimbător cu plăci și cât durează livrarea?",
        "a": "Fluidele, debitele și temperaturile de intrare/ieșire pentru ambele circuite, plus presiunea de lucru. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de complexitatea pachetului de plăci."
      },
      {
        "q": "Cât de des trebuie curățat mecanic un schimbător cu plăci demontabile?",
        "a": "Depinde de fluidul procesat: la fluide curate, intervalul poate fi anual, iar la cele cu tendință de depunere sau colmatare, curățarea se face de mai multe ori pe an. Scăderea vizibilă a diferenței de temperatură dintre intrare și ieșire e un semn clar că e nevoie de curățare."
      }
    ],
    "relatedTypes": [
      "schimbatoare-placi-brazate-industriale",
      "schimbatoare-tubulare-industriale",
      "racitoare-ulei-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "schimbatoare-caldura",
    "slug": "schimbatoare-tubulare-industriale",
    "name": "Schimbătoare tubulare industriale",
    "shortName": "schimbătoare tubulare",
    "lede": "Schimbătorul tubular industrial transferă căldură între două fluide separate fizic printr-un fascicul de țevi montat într-o manta cilindrică, fără amestecare directă a fluidelor. Este preferat în petrochimie, rafinării și industria chimică pentru capacitatea de a rezista la presiuni și temperaturi ridicate sau la fluide agresive, unde alte tipuri compacte nu fac față.",
    "intro": "Un fluid circulă prin interiorul țevilor, celălalt prin spațiul dintre țevi și manta, iar șicanele montate transversal dirijează fluidul din manta pentru a mări turbulența și transferul termic. Construcția cu cap flotant sau cu fascicul demontabil permite curățarea mecanică a țevilor, în timp ce varianta cu plăci tubulare fixe este mai simplă, dar mai greu de curățat la interior.\n\nUn schimbător tubular potrivit pentru procese industriale se alege și după materialul țevilor (oțel carbon, inox sau aliaje speciale rezistente la coroziune), grosimea de perete admisă la presiunea de lucru și tipul de etanșare dintre manta și capace. Standardele TEMA descriu clasele constructive uzuale, iar pentru recipiente sub presiune se aplică, de regulă, directiva PED 2014/68/UE; alegerea materialului greșit pentru fluidul vehiculat este cauza principală a coroziunii premature.",
    "howToChoose": [
      {
        "criterion": "Sarcina termică necesară (kW sau MW)",
        "detail": "Rezultă din debitul fluidelor și diferența de temperatură dorită la intrare și ieșire; subdimensionarea duce la o temperatură finală mai mare decât cea cerută de proces."
      },
      {
        "criterion": "Presiunea și temperatura de lucru ale fiecărui fluid",
        "detail": "Determină clasa constructivă, grosimea materialului și tipul de etanșare admis; presiunile ridicate cer, de regulă, o construcție cu fascicul fix și materiale mai groase."
      },
      {
        "criterion": "Compatibilitatea materialului cu fluidele vehiculate",
        "detail": "Fluidele corozive sau cu cloruri impun oțel inoxidabil sau aliaje speciale pentru țevi și manta; alegerea unui material obișnuit acolo unde e nevoie de rezistență chimică scurtează drastic durata de viață."
      },
      {
        "criterion": "Tendința fluidului de a colmata sau depune reziduuri",
        "detail": "Fluidele cu particule sau tendință de depunere cer o construcție cu fascicul demontabil, ușor de scos pentru curățare mecanică; fixarea greșită a acestui criteriu duce la pierderi de eficiență în timp."
      },
      {
        "criterion": "Pierderea de presiune admisă pe fiecare circuit",
        "detail": "O pierdere de presiune prea mare crește consumul pompelor din instalație; numărul de treceri și viteza fluidului în țevi influențează direct această valoare."
      },
      {
        "criterion": "Spațiul disponibil și modul de montaj",
        "detail": "Schimbătoarele tubulare sunt, de regulă, mai lungi decât cele cu plăci pentru aceeași sarcină termică, ceea ce contează la instalații cu spațiu limitat sau la retehnologizări."
      }
    ],
    "whatToSend": [
      "Datele fluidelor: tip, debit, temperatură de intrare și de ieșire dorită",
      "Presiunea de lucru pe fiecare circuit și eventuale reglementări aplicabile (PED)",
      "Prezența particulelor sau a tendinței de colmatare a fluidului",
      "Materialul preferat pentru țevi și manta, dacă există o cerință specifică",
      "Spațiul disponibil pentru montaj și orientarea preferată (orizontală/verticală)",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Petrochimie",
      "Rafinării",
      "Industria chimică",
      "Centrale electrice",
      "Recuperare de căldură din procese"
    ],
    "maintenance": "Fasciculul de țevi se colmatează treptat cu depuneri sau reziduuri, mai ales pe partea cu fluidul cu particule, motiv pentru care curățarea mecanică sau chimică periodică este necesară pentru a menține eficiența termică. Garniturile dintre manta și capace se uzează în timp și trebuie verificate la fiecare intervenție; monitorizarea pierderii de presiune pe cele două circuite indică din timp un fascicul colmatat.",
    "faq": [
      {
        "q": "Prin ce diferă un schimbător tubular de unul cu plăci demontabile?",
        "a": "Schimbătorul tubular rezistă la presiuni și temperaturi mai ridicate și tolerează mai bine fluidele agresive sau cu particule, datorită construcției robuste cu manta și fascicul de țevi. Schimbătorul cu plăci este mai compact și mai eficient termic la aceeași suprafață, dar are limite mai stricte de presiune și temperatură, fiind potrivit pentru fluide curate."
      },
      {
        "q": "Cum se dimensionează un schimbător tubular pentru o aplicație industrială?",
        "a": "Se pornește de la sarcina termică necesară, debitele și temperaturile de intrare și ieșire ale ambelor fluide, apoi se alege materialul în funcție de compatibilitatea chimică. Presiunea de lucru și pierderea de presiune admisă influențează numărul de treceri și diametrul mantalei."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de schimbător tubular și cât durează livrarea?",
        "a": "Sunt necesare datele fluidelor, presiunea și temperatura de lucru, materialul preferat și spațiul disponibil de montaj. Producția fiind adesea la comandă, termenul orientativ este de 2-6 săptămâni, în funcție de complexitatea constructivă și de producător."
      },
      {
        "q": "Cât de des trebuie curățat un schimbător tubular industrial?",
        "a": "Frecvența depinde de tendința fluidului de a depune reziduuri și de evoluția pierderii de presiune observate în exploatare, nu de un interval fix universal valabil. O creștere vizibilă a pierderii de presiune sau o scădere a eficienței termice sunt semnalele care indică nevoia de curățare."
      }
    ],
    "relatedTypes": [
      "schimbatoare-placi-demontabile-industriale",
      "racitoare-ulei-industriale",
      "condensatoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "schimbatoare-caldura",
    "slug": "racitoare-ulei-industriale",
    "name": "Răcitoare de ulei industriale",
    "shortName": "răcitoare de ulei",
    "lede": "Un răcitor de ulei industrial este un schimbător de căldură dedicat, care preia căldura acumulată de uleiul hidraulic sau de lubrifiere în timpul funcționării și o transferă către aer sau apă, menținând temperatura fluidului în limitele care păstrează vâscozitatea și proprietățile lubrifiante. Se folosește la prese hidraulice, mașini-unelte, compresoare și reductoare, unde supraîncălzirea uleiului degradează atât fluidul, cât și componentele lubrifiate.",
    "intro": "Construcția uzuală e cu radiator aer-ulei, cu ventilator montat direct pe circuit, potrivit acolo unde apa de răcire nu e disponibilă, sau cu schimbător ulei-apă (cu plăci sau tubular), mai compact și mai eficient acolo unde există un circuit de apă răcită. Alegerea între cele două depinde de temperatura mediului ambiant, de spațiul disponibil și de costul de operare pe termen lung, ventilatorul consumând energie electrică suplimentară, apa de răcire necesitând un circuit separat.\n\nUn răcitor bun are garnituri și plăci compatibile cu tipul de ulei (mineral sau sintetic), presiune de lucru suficientă pentru circuitul hidraulic în care se montează și o suprafață de schimb dimensionată pentru sarcina termică reală, nu doar pentru debitul nominal al pompei. Contează și accesul pentru curățare, deoarece depunerile pe suprafața de schimb reduc rapid eficiența, mai ales pe partea de aer, unde praful industrial colmatează radiatorul.",
    "howToChoose": [
      {
        "criterion": "Sarcina termică de disipat (puterea de răcire)",
        "detail": "Se calculează din pierderile de căldură ale sistemului hidraulic sau din diferența dintre temperatura de intrare și cea dorită la ieșire, la debitul nominal; subdimensionarea duce la supraîncălzirea uleiului chiar dacă răcitorul pare suficient de mare."
      },
      {
        "criterion": "Tipul de mediu de răcire disponibil (aer sau apă)",
        "detail": "Răcirea cu apă e mai eficientă și mai compactă, dar cere un circuit de apă răcită sau turn de răcire; răcirea cu aer e independentă de utilități, dar sensibilă la temperatura ambientală ridicată vara."
      },
      {
        "criterion": "Presiunea de lucru și debitul circuitului hidraulic",
        "detail": "Răcitorul trebuie să suporte presiunea maximă a circuitului pe care se montează, montat de regulă pe linia de retur, unde presiunea e mai mică decât pe refulare."
      },
      {
        "criterion": "Tipul și vâscozitatea uleiului vehiculat",
        "detail": "Uleiurile sintetice sau cu aditivi speciali pot cere garnituri diferite față de uleiurile minerale standard; incompatibilitatea chimică a garniturii duce la scurgeri sau la degradarea acesteia în timp."
      },
      {
        "criterion": "Temperatura ambientală maximă la locul de montaj",
        "detail": "Pentru răcitoarele cu aer, o temperatură ambientală ridicată reduce capacitatea reală de răcire față de valoarea nominală testată în condiții standard; se recomandă o marjă la dimensionare pentru zilele de vară."
      },
      {
        "criterion": "Accesul pentru curățare și mentenanță",
        "detail": "Radiatoarele cu aer se colmatează cu praf industrial, iar schimbătoarele cu plăci pot depune impurități din apă; un model cu acces facil la suprafața de schimb reduce timpul de oprire pentru curățare."
      }
    ],
    "whatToSend": [
      "Puterea termică de disipat sau diferența de temperatură dorită la debitul nominal",
      "Debitul și presiunea maximă din circuitul hidraulic pe care se montează răcitorul",
      "Mediul de răcire disponibil (aer ambiant sau apă) și temperatura acestuia",
      "Tipul de ulei folosit (mineral, sintetic) și vâscozitatea de lucru",
      "Temperatura ambientală maximă la locul de instalare, dacă răcirea e cu aer",
      "Spațiul disponibil de montaj și tensiunea disponibilă pentru ventilator, dacă e cazul"
    ],
    "applications": [
      "Prese hidraulice",
      "Mașini-unelte",
      "Compresoare",
      "Reductoare industriale"
    ],
    "maintenance": "Elementele care se degradează cel mai des sunt garniturile schimbătorului și rulmenții ventilatorului, la răcitoarele cu aer; la cele cu apă, depunerile de calcar sau impurități reduc treptat eficiența suprafeței de schimb. Se recomandă curățarea periodică a radiatorului de praf, verificarea etanșeității garniturilor și, la schimbătoarele cu plăci, o spălare chimică periodică atunci când temperatura de ieșire crește fără o cauză evidentă.",
    "faq": [
      {
        "q": "Ce diferență există între un răcitor de ulei și un schimbător de căldură cu plăci brazate obișnuit?",
        "a": "Un schimbător cu plăci brazate e o componentă generală de transfer termic, folosită pentru multe tipuri de fluide, inclusiv apă sau agenți frigorifici. Un răcitor de ulei este dimensionat și echipat specific pentru vâscozitatea și presiunea circuitelor hidraulice sau de lubrifiere, uneori integrând și ventilatorul, pompa sau tabloul electric într-un singur echipament compact."
      },
      {
        "q": "Cum se dimensionează corect un răcitor de ulei pentru o presă hidraulică?",
        "a": "Se pornește de la puterea termică generată de sistemul hidraulic în funcționare continuă și de la temperatura maximă admisă a uleiului, de regulă indicată de producătorul pompei sau al agregatului. Pe baza acestora se alege capacitatea de răcire, tipul de mediu (aer sau apă) și presiunea de lucru necesară pe circuitul de montaj."
      },
      {
        "q": "Ce informații trimiteți pentru o ofertă de răcitor de ulei industrial și cât durează livrarea?",
        "a": "Aveți nevoie de puterea termică sau debitul și temperaturile de intrare/ieșire dorite, tipul de ulei, presiunea circuitului și mediul de răcire disponibil. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de configurație (aer sau apă)."
      },
      {
        "q": "Poate fi montat un răcitor de ulei pe o instalație hidraulică existentă fără modificări majore?",
        "a": "În general da, dacă se respectă presiunea și debitul circuitului existent, iar racordurile sunt compatibile sau adaptate cu fitinguri corespunzătoare. Se recomandă verificarea temperaturii reale de funcționare înainte de montaj, pentru a alege o capacitate de răcire suficientă și a evita o investiție subdimensionată."
      }
    ],
    "relatedTypes": [
      "schimbatoare-placi-brazate-industriale",
      "schimbatoare-placi-demontabile-industriale",
      "schimbatoare-tubulare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "schimbatoare-caldura",
    "slug": "condensatoare-industriale",
    "name": "Condensatoare Industriale",
    "shortName": "condensatoare industriale",
    "lede": "Condensatorul industrial este un schimbător de căldură care transformă agentul frigorific din stare gazoasă în stare lichidă, cedând căldura preluată din procesul de răcire către aer sau apă. Este componenta care închide ciclul frigorific, montată de regulă după compresor, în instalații de frig industrial sau climatizare de capacitate mare.",
    "intro": "Cele mai răspândite variante constructive sunt condensatorul răcit cu aer, cu baterie de țevi și aripioare parcursă de ventilatoare, condensatorul răcit cu apă, de tip tubular sau cu plăci, mai compact dar dependent de o sursă de apă de răcire, și condensatorul evaporativ, care combină răcirea cu aer și pulverizarea de apă pentru un randament mai bun în climat cald. Alegerea între variante ține de spațiul disponibil, de accesul la apă și de temperatura ambientală a zonei unde funcționează instalația.\n\nUn condensator bine dimensionat pentru uz industrial se recunoaște după suprafața reală de schimb termic raportată la sarcina frigorifică, nu doar după gabarit, și după materialul țevilor (cupru, oțel sau, la agenți corozivi, aliaje speciale) rezistent la agentul frigorific folosit și la calitatea apei sau a aerului din zonă. Contează și presiunea maximă admisă de proiectare, corelată cu agentul frigorific folosit, plus accesul pentru curățarea periodică a suprafeței de schimb, care influențează direct eficiența în timp.",
    "howToChoose": [
      {
        "criterion": "Sarcina termică de evacuat",
        "detail": "Puterea de condensare trebuie corelată cu sarcina frigorifică reală a instalației, nu doar cu puterea compresorului; un condensator subdimensionat ridică presiunea de condensare și scade eficiența întregului sistem."
      },
      {
        "criterion": "Agentul frigorific folosit",
        "detail": "Materialele și presiunea de proiectare diferă în funcție de agentul frigorific, iar o compatibilitate greșită poate duce la coroziune rapidă a țevilor sau la funcționare sub parametri."
      },
      {
        "criterion": "Tipul de răcire disponibil (aer sau apă)",
        "detail": "Răcirea cu aer nu depinde de o sursă de apă, dar e mai sensibilă la temperatura ambientală ridicată; răcirea cu apă e mai eficientă, dar cere tratarea și circulația apei."
      },
      {
        "criterion": "Spațiul și accesul pentru montaj",
        "detail": "Condensatoarele răcite cu aer au nevoie de flux liber de aer și de distanță față de pereți sau alte surse de căldură, altfel randamentul scade vizibil față de datele de catalog."
      },
      {
        "criterion": "Materialul țevilor și al bateriei",
        "detail": "În medii cu aer sărat sau agenți corozivi, aripioarele și țevile necesită tratamente sau materiale speciale, altfel durata de viață scade mult față de o instalație în mediu curat."
      },
      {
        "criterion": "Nivelul de zgomot admis",
        "detail": "Ventilatoarele condensatoarelor răcite cu aer pot fi o sursă importantă de zgomot; în apropierea zonelor locuite sau de birouri se aleg variante cu ventilatoare turate lent sau carcase fonoabsorbante."
      }
    ],
    "whatToSend": [
      "Sarcina frigorifică sau puterea de condensare necesară, dacă este cunoscută",
      "Agentul frigorific folosit în instalație",
      "Tipul de răcire disponibil: aer sau apă",
      "Temperatura ambientală maximă din zona de montaj",
      "Spațiul disponibil sau gabaritul maxim admis",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Depozite frigorifice",
      "Industria alimentară",
      "Climatizare industrială",
      "Procese criogenice",
      "Camere frigorifice de mare capacitate"
    ],
    "maintenance": "La condensatoare cea mai frecventă problemă este murdărirea suprafeței de schimb — praf și scame la variantele răcite cu aer, depuneri de calcar sau nămol la cele răcite cu apă — care ridică presiunea de condensare și consumul întregului sistem. Se recomandă curățarea periodică a bateriei sau a fasciculului de țevi, verificarea ventilatoarelor și, la variantele cu apă, controlul calității apei de răcire.",
    "faq": [
      {
        "q": "Prin ce diferă un condensator industrial de un răcitor de ulei?",
        "a": "Condensatorul schimbă starea agentului frigorific din gaz în lichid, ca parte a ciclului frigorific, în timp ce răcitorul de ulei scade doar temperatura unui ulei hidraulic sau de ungere aflat în stare lichidă tot timpul. Construcția poate fi asemănătoare la nivel de baterie sau fascicul de țevi, dar rolul și dimensionarea termică sunt diferite."
      },
      {
        "q": "Cum se dimensionează un condensator industrial pentru o instalație frigorifică?",
        "a": "Punctul de plecare este sarcina frigorifică totală a instalației, la care se adaugă puterea absorbită de compresor, pentru a obține sarcina reală de evacuat la condensator. Se ține cont și de temperatura ambientală maximă din zonă, deoarece randamentul unui condensator răcit cu aer scade vizibil pe vreme foarte caldă."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de condensatoare industriale?",
        "a": "Sarcina frigorifică sau puterea de condensare, agentul frigorific, tipul de răcire disponibil (aer sau apă) și spațiul de montaj sunt datele de bază pentru o ofertă corectă. La comandă se confirmă și termenul de livrare, orientativ 2-6 săptămâni, în funcție de configurația aleasă."
      },
      {
        "q": "Cât de des trebuie curățate condensatoarele industriale răcite cu aer?",
        "a": "Frecvența depinde de mediul de montaj: în zone cu praf sau scame din procese industriale curățarea trebuie făcută mai des decât în aer liber curat, uneori lunar. Un semn clar că bateria s-a murdărit este creșterea presiunii de condensare peste valorile obișnuite ale instalației."
      }
    ],
    "relatedTypes": [
      "schimbatoare-placi-brazate-industriale",
      "schimbatoare-tubulare-industriale",
      "racitoare-ulei-industriale"
    ],
    "lastVerified": "2026-09-26"
  }
];
