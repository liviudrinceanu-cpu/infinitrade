// src/data/productTypeContent/suflante-ventilatoare.js — selection guides for the product types of
// /suflante-ventilatoare (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /suflante-ventilatoare/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "suflante-ventilatoare",
    "slug": "suflante-canal-lateral-industriale",
    "name": "Suflante canal lateral industriale",
    "shortName": "suflante canal lateral",
    "lede": "Suflanta cu canal lateral este un echipament care generează un debit de aer constant la presiune joasă sau vid moderat, folosind un rotor cu palete montat excentric într-un canal circular. Se folosește acolo unde e nevoie de aer curat, fără ulei, în flux continuu, nu de presiune ridicată.",
    "intro": "Rotorul suflantei cu canal lateral învârte aerul printr-o mișcare regenerativă în canalul lateral al carcasei, fără contact mecanic între rotor și carcasă în afara etanșărilor axului, ceea ce înseamnă aer complet fără ulei la ieșire. Există variante cu o singură treaptă, pentru presiuni sau depresiuni moderate, și variante cu două trepte în serie, pentru presiuni mai mari, precum și variante cu canal dublu care pot funcționa simultan ca suflantă și ca pompă de vid pe circuite separate.\n\nO suflantă bună pentru mediul industrial se recunoaște după calitatea rulmenților și a etanșărilor axului (care determină zgomotul și durata de viață), materialul rotorului și al carcasei în raport cu agresivitatea aerului sau gazului vehiculat, și clasa de izolație a motorului electric care o antrenează. Pentru funcționare continuă contează și proiectarea răcirii carcasei, deoarece temperatura aerului crește vizibil la comprimare; standardul relevant pentru motor este IEC 60034-30, iar pentru medii cu risc de explozie se cere certificare ATEX 2014/34/UE.",
    "howToChoose": [
      {
        "criterion": "Debitul de aer necesar",
        "detail": "Se stabilește din consumul echipamentului deservit (agitare, transport pneumatic, aerare); o suflantă subdimensionată nu atinge presiunea necesară la debitul cerut, iar una supradimensionată consumă inutil energie."
      },
      {
        "criterion": "Presiunea sau depresiunea de lucru",
        "detail": "Suflantele cu canal lateral acoperă un domeniu limitat de presiune joasă și vid moderat; peste acest domeniu devine necesară o soluție cu suflantă Roots sau compresor, mai potrivită tehnic pentru cerința respectivă."
      },
      {
        "criterion": "Numărul de trepte (simplă sau dublă)",
        "detail": "O singură treaptă e suficientă pentru presiuni mici, dar la cerințe mai mari se alege varianta cu două trepte în serie, care menține randamentul fără a supraîncălzi motorul."
      },
      {
        "criterion": "Puritatea aerului cerută de proces",
        "detail": "Fiind fără ulei prin construcție, suflanta cu canal lateral e potrivită pentru aerare biologică sau transport alimentar, dar filtrarea aerului de admisie trebuie totuși dimensionată după mediul de lucru real."
      },
      {
        "criterion": "Nivelul de zgomot admis",
        "detail": "Suflantele cu canal lateral sunt relativ zgomotoase la debite mari; în spații ocupate se ia în calcul carcasa fonoizolată sau montarea într-un spațiu tehnic separat de zona de lucru."
      },
      {
        "criterion": "Temperatura aerului vehiculat și a mediului ambiant",
        "detail": "Comprimarea încălzește aerul, iar temperatura ambiantă ridicată reduce capacitatea de răcire a motorului; ambele valori trebuie comunicate pentru o dimensionare corectă."
      }
    ],
    "whatToSend": [
      "Debitul de aer necesar (Nm³/h sau m³/h) și presiunea sau depresiunea de lucru",
      "Aplicația (aerare, transport pneumatic, aspirație) și tipul de mediu vehiculat",
      "Temperatura ambiantă și temperatura maximă admisă a aerului la ieșire",
      "Tensiunea de alimentare și clasa de protecție IP necesară",
      "Nivelul de zgomot admis, dacă există o limită impusă de amplasament",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Stații epurare",
      "Transport pneumatic",
      "Aspirație industrială",
      "Uscătoare industriale",
      "Sisteme de ambalare în vid"
    ],
    "maintenance": "Componentele cele mai solicitate sunt rulmenții și etanșările axului, expuse la uzură termică din cauza încălzirii aerului comprimat, plus filtrul de admisie, care se colmatează în timp și reduce debitul. Se recomandă verificarea periodică a temperaturii carcasei, a vibrațiilor și a stării filtrului de aspirație, mai ales la funcționare continuă în medii cu praf.",
    "faq": [
      {
        "q": "Ce diferență este între o suflantă cu canal lateral și o suflantă Roots industrială?",
        "a": "Suflanta cu canal lateral funcționează fără contact mecanic între rotor și carcasă, oferă aer fără ulei dar la presiuni mai joase; suflanta Roots are rotoare cu lobi și acoperă presiuni mai mari, la debite constante indiferent de contrapresiune. Alegerea depinde de nivelul de presiune cerut de proces."
      },
      {
        "q": "Cum se dimensionează o suflantă cu canal lateral pentru o aplicație industrială?",
        "a": "Se pornește de la debitul de aer necesar procesului și de la presiunea sau depresiunea de lucru cerută, apoi se alege numărul de trepte în funcție de cât de aproape este cerința de limita superioară a domeniului acestui tip de echipament."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de suflante cu canal lateral și în cât timp se livrează?",
        "a": "Sunt necesare debitul, presiunea de lucru, aplicația și temperatura ambiantă. Termenul de livrare este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de existența variantei cerute în configurația standard sau ca proiect special."
      },
      {
        "q": "Cât de des trebuie curățat sau schimbat filtrul de admisie al unei suflante cu canal lateral?",
        "a": "Depinde de cantitatea de praf din mediul de lucru; un filtru colmatat reduce debitul și forțează motorul să lucreze la o presiune diferențială mai mare decât cea normală. Verificarea vizuală periodică și măsurarea presiunii de admisie arată din timp nevoia de intervenție."
      }
    ],
    "relatedTypes": [
      "suflante-roots-industriale",
      "pompe-vid-suflante",
      "compresoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "suflante-ventilatoare",
    "slug": "suflante-roots-industriale",
    "name": "Suflante Roots industriale",
    "shortName": "suflante Roots",
    "lede": "Suflanta Roots industrială este un echipament volumetric care deplasează aer sau gaz între doi rotori cu profil special, fără compresie internă, generând un debit constant la presiuni moderate. Se folosește pentru aerarea bazinelor, transportul pneumatic al materialelor granulare și fluidizare.",
    "intro": "Funcționarea este volumetrică: doi rotori cu lobi, de obicei doi sau trei, sincronizați printr-o transmisie cu roți dințate, se rotesc fără să se atingă în interiorul unei carcase, împingând un volum fix de aer la fiecare rotație; presiunea se formează abia la ieșire, prin rezistența circuitului, nu în interiorul suflantei. Există variante cu carcasă simplă, mai simple și mai ieftine, și variante cu amortizare acustică internă, adică o carcasă insonorizată, pentru instalații unde nivelul de zgomot contează.\n\nUn produs potrivit pentru aplicații industriale se recunoaște după toleranțele de fabricație ale rotorilor, un joc minim pentru randament ridicat și zgomot redus, calitatea rulmenților și a etanșărilor pe arbore, și existența unui sistem de răcire adecvat pentru funcționare continuă. Curelele sau cutia de transmisie trebuie dimensionate pentru puterea reală transmisă, iar accesul facil pentru schimbarea uleiului din carter și verificarea jocului rotorilor reduce timpul de oprire. Nivelul de zgomot generat este relevant pentru amplasare, mai ales fără carcasă insonorizată.",
    "howToChoose": [
      {
        "criterion": "Debitul de aer necesar",
        "detail": "Debitul, exprimat în m³/h sau Nm³/h, rezultă din necesarul procesului deservit — aerare, transport pneumatic, fluidizare; o suflantă subdimensionată nu susține procesul, iar una supradimensionată consumă inutil și se uzează mai repede la funcționare parțială."
      },
      {
        "criterion": "Presiunea de lucru necesară",
        "detail": "Presiunea diferențială cerută de rețeaua de conducte și de punctul de utilizare determină numărul de lobi ai rotorului și turația necesară; o suflantă Roots are, de regulă, o limită de presiune mai mică decât un compresor cu șurub."
      },
      {
        "criterion": "Nivelul de zgomot admis la amplasare",
        "detail": "Fără carcasă insonorizată, o suflantă Roots poate depăși nivelurile acceptate în hale cu personal permanent; varianta cu izolare fonică sau montarea într-o cameră tehnică separată rezolvă problema."
      },
      {
        "criterion": "Puterea și tipul motorului de acționare",
        "detail": "Puterea motorului trebuie corelată cu punctul real de presiune și debit, ținând cont de randamentul transmisiei, prin curele sau angrenaj; tensiunea și clasa de protecție se aleg în funcție de mediul de montaj."
      },
      {
        "criterion": "Calitatea aerului vehiculat",
        "detail": "Prezența prafului, a umidității sau a substanțelor corozive în aerul vehiculat impune filtrare la aspirație și materiale rezistente la coroziune pentru rotori și carcasă."
      },
      {
        "criterion": "Cerințele de mentenanță și acces",
        "detail": "Accesul ușor la carter pentru schimbul uleiului de ungere a angrenajului și la rotori pentru verificarea jocului reduce durata opririlor programate."
      }
    ],
    "whatToSend": [
      "Debitul de aer necesar (m³/h sau Nm³/h).",
      "Presiunea diferențială necesară la punctul de utilizare (mbar sau bar).",
      "Tipul de aplicație (aerare, transport pneumatic, fluidizare etc.).",
      "Nivelul de zgomot admis la locul de montaj.",
      "Tensiunea de alimentare disponibilă și puterea motorului dorită.",
      "Cantitatea necesară și termenul dorit pentru livrare."
    ],
    "applications": [
      "Aerare bazine",
      "Transport cereale",
      "Fluidizare",
      "Industria cimentului"
    ],
    "maintenance": "Elementele expuse uzurii sunt rulmenții rotorilor, etanșările pe arbore și angrenajul de sincronizare, care necesită ulei de calitate corespunzătoare și schimbat la intervalul recomandat. Verificarea periodică a jocului dintre rotori, a temperaturii de funcționare și a stării curelelor de transmisie, acolo unde există, previne avariile majore. Piesele de schimb cerute frecvent sunt kitul de etanșare și rulmenții.",
    "faq": [
      {
        "q": "Ce diferență este între o suflantă Roots industrială și un compresor industrial?",
        "a": "Suflanta Roots este un echipament volumetric care livrează un debit constant la presiuni relativ joase, fără a comprima efectiv aerul în interiorul ei, presiunea formându-se din rezistența circuitului. Compresorul industrial, în schimb, comprimă activ aerul la presiuni mult mai mari, fiind potrivit pentru aer comprimat de uz general, nu pentru debite mari la presiune joasă."
      },
      {
        "q": "Cum se dimensionează o suflantă Roots industrială?",
        "a": "Se pornește de la debitul de aer necesar procesului și de la presiunea diferențială cerută de rețeaua de conducte, la care se adaugă pierderile de sarcină reale ale instalației. Din aceste două valori rezultă turația și puterea motorului necesare, iar numărul de lobi ai rotorului influențează uniformitatea debitului livrat."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de suflantă Roots industrială și cât durează livrarea?",
        "a": "Sunt necesare debitul de aer, presiunea diferențială necesară, tipul de aplicație, nivelul de zgomot admis și puterea motorului dorită. Termenul de livrare se confirmă la comandă, în general 2-6 săptămâni, în funcție de producător și de opțiunea de insonorizare aleasă."
      },
      {
        "q": "Ce compatibilitate trebuie verificată între o suflantă Roots și rețeaua de conducte existentă?",
        "a": "Diametrul racordurilor și materialul conductelor trebuie să corespundă presiunii și temperaturii aerului livrat, iar prezența unui filtru la aspirație este esențială dacă mediul conține praf, deoarece particulele pot deteriora rapid jocul fin dintre rotori."
      }
    ],
    "relatedTypes": [
      "suflante-canal-lateral-industriale",
      "compresoare-industriale",
      "ventilatoare-centrifugale-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "suflante-ventilatoare",
    "slug": "ventilatoare-centrifugale-industriale",
    "name": "Ventilatoare centrifugale industriale",
    "shortName": "ventilatoare centrifugale",
    "lede": "Ventilatorul centrifugal industrial este un echipament care deplasează aerul sau gazele printr-un rotor cu palete montat într-o carcasă în formă de melc, aerul intrând axial și ieșind radial sub presiune. Se folosește la ventilația halelor, hote industriale, sisteme de filtrare și transport pneumatic de materiale.",
    "intro": "Principiul de funcționare se bazează pe forța centrifugă imprimată aerului de rotorul aflat în mișcare; forma paletelor, curbate înainte, curbate înapoi sau radiale, determină relația dintre debit, presiune și consum de energie. Ventilatoarele cu palete curbate înapoi ating randamente mai bune la debite mari, cele cu palete radiale sunt mai potrivite pentru aer cu praf sau particule, iar cele curbate înainte dau presiune mare la gabarit redus, cu randament mai modest.\n\nCeea ce diferențiază un ventilator centrifugal potrivit pentru uz industrial ține de echilibrarea dinamică a rotorului, pentru că vibrația crește uzura lagărelor și zgomotul, de materialul carcasei și rotorului atunci când aerul transportat conține praf abraziv sau substanțe corozive, și de tipul transmisiei, direct cuplat sau prin curele, care permite ajustarea turației. Motorul trebuie dimensionat pe curba reală de funcționare a rețelei de canale, nu doar pe debitul nominal de catalog.",
    "howToChoose": [
      {
        "criterion": "Debitul de aer necesar",
        "detail": "Se calculează din numărul de schimburi de aer pe oră cerute de spațiu sau din procesul deservit; subdimensionarea lasă concentrații de praf sau căldură peste limita admisă."
      },
      {
        "criterion": "Presiunea statică a rețelei de canale",
        "detail": "Lungimea canalelor, coturile și filtrele montate pe traseu consumă presiune; alegerea ventilatorului doar după debit, fără a calcula pierderile de presiune, e o greșeală frecventă."
      },
      {
        "criterion": "Tipul de aer sau gaz vehiculat",
        "detail": "Aer curat, cu praf abraziv, cu vapori corozivi sau cu particule fine cer forme de paletă și materiale diferite pentru rotor și carcasă."
      },
      {
        "criterion": "Temperatura de lucru",
        "detail": "Aerul cald evacuat din procese termice cere materiale și rulmenți rezistenți la temperatură ridicată, altfel durata de viață a ventilatorului scade semnificativ."
      },
      {
        "criterion": "Tipul transmisiei, directă sau cu curele",
        "detail": "Transmisia cu curele permite ajustarea ulterioară a turației prin schimbarea diametrului roților, util când debitul real diferă de calculul inițial."
      },
      {
        "criterion": "Nivelul de zgomot admis",
        "detail": "În spații cu personal permanent, forma paletelor și turația influențează direct nivelul de zgomot; un ventilator supradimensionat și strangulat e adesea mai zgomotos decât unul bine dimensionat."
      }
    ],
    "whatToSend": [
      "Debitul de aer necesar (m³/h)",
      "Presiunea statică estimată a rețelei de canale",
      "Tipul aerului vehiculat: curat, cu praf, coroziv, cald",
      "Temperatura maximă de lucru",
      "Transmisie directă sau cu curele, tensiune motor",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Hote industriale",
      "Sisteme filtrare",
      "Transport materiale",
      "Ventilație hale"
    ],
    "maintenance": "Componentele care cer atenție periodică sunt rulmenții rotorului, curelele de transmisie, acolo unde există, și echilibrarea rotorului, care se poate strica prin depunerea de praf pe palete. Vibrația crescută sau zgomotul neobișnuit anunță de obicei un rulment uzat sau un rotor dezechilibrat; curățarea periodică a paletelor păstrează atât debitul cât și randamentul aproape de valorile inițiale.",
    "faq": [
      {
        "q": "Ce diferență este între un ventilator centrifugal și unul axial industrial?",
        "a": "Ventilatorul centrifugal schimbă direcția aerului cu 90 de grade și dezvoltă presiuni mai mari, fiind potrivit pentru rețele de canale cu pierderi importante. Cel axial deplasează aerul în linie dreaptă, la debite mari și presiuni mici, fiind preferat pentru ventilație directă de hale fără canalizare complexă."
      },
      {
        "q": "Cum se dimensionează un ventilator centrifugal pentru o hală industrială?",
        "a": "Se pornește de la numărul de schimburi de aer necesare pe oră, înmulțit cu volumul spațiului, pentru a obține debitul minim. Apoi se calculează presiunea statică totală a rețelei de canale, filtre și guri de refulare, iar punctul de funcționare rezultat se caută pe curba ventilatorului, nu doar pe debitul de catalog."
      },
      {
        "q": "Ce date trimiteți pentru o ofertă de ventilator centrifugal și cât durează livrarea?",
        "a": "Aveți nevoie de debitul de aer, presiunea statică estimată, tipul aerului vehiculat și temperatura de lucru. Ventilatoarele standard se livrează la comandă, orientativ în câteva săptămâni, termenul exact depinzând de model și de producătorul ales."
      },
      {
        "q": "Se poate folosi un ventilator centrifugal pentru transport pneumatic de materiale, nu doar pentru aer?",
        "a": "Da, dar rotorul și carcasa trebuie proiectate special pentru vehicularea de particule solide, cu paletă radială și uzură redusă, altfel un ventilator standard de ventilație se uzează rapid sau se înfundă. Materialul transportat și granulația lui trebuie precizate încă din faza de ofertă."
      }
    ],
    "relatedTypes": [
      "ventilatoare-axiale-industriale",
      "suflante-canal-lateral-industriale",
      "compresoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "suflante-ventilatoare",
    "slug": "ventilatoare-axiale-industriale",
    "name": "Ventilatoare Axiale Industriale",
    "shortName": "ventilatoare axiale",
    "lede": "Ventilatorul axial industrial deplasează aerul paralel cu axul de rotație, prin palete montate pe un rotor asemănător unei elice, oferind debite mari la presiuni statice relativ mici. Este soluția uzuală pentru răcirea echipamentelor, turnuri de răcire, ventilația tunelurilor și condensatoare, acolo unde trebuie mișcat un volum mare de aer fără rezistență semnificativă pe traseu.",
    "intro": "Spre deosebire de un ventilator centrifugal, unde aerul intră axial și iese radial, ventilatorul axial păstrează direcția fluxului de-a lungul axului, ceea ce îi dă un randament bun la presiuni statice mici, dar o cădere rapidă a debitului dacă rezistența pe traseu (filtre, baterii, canale) crește. Variantele constructive uzuale diferă prin unghiul paletelor (fix sau reglabil, uneori chiar în funcționare — pitch variabil), prin numărul de trepte (unul sau două rotoare în serie, pentru presiuni mai mari) și prin poziția motorului — integrat pe ax sau exterior, cu transmisie prin curea.\nCe diferențiază un ventilator bun pentru uz industrial: clasa de eficiență a motorului (IE2/IE3), echilibrarea dinamică a rotorului (contează direct pentru vibrații și durata de viață a rulmenților), materialul paletelor față de mediul de lucru (aluminiu, oțel galvanizat sau compozit pentru medii corozive) și clasa de protecție IP a motorului față de praf sau umiditate din amplasament. Pentru zone cu risc de explozie se verifică certificarea ATEX a întregului ansamblu, nu doar a motorului.",
    "howToChoose": [
      {
        "criterion": "Debitul de aer necesar la presiunea statică reală",
        "detail": "Debitul cerut trebuie corelat cu presiunea statică pe care ventilatorul trebuie să o învingă (filtre, baterii, canale); un ventilator ales doar după debitul de catalog, fără presiunea reală a instalației, poate livra mult mai puțin aer decât se așteaptă."
      },
      {
        "criterion": "Diametrul rotorului și turația",
        "detail": "Diametrul disponibil de montaj limitează debitul maxim posibil; la același debit, un rotor mai mare la turație mai mică e de regulă mai silențios decât unul mic la turație mare."
      },
      {
        "criterion": "Mediul de lucru și materialul paletelor",
        "detail": "Praful, umiditatea sau agenții corozivi din aer stabilesc materialul paletelor și tratamentul de protecție al carcasei; medii cu praf abraziv reduc mai repede echilibrarea rotorului dacă materialul nu e potrivit."
      },
      {
        "criterion": "Nivelul de zgomot admis",
        "detail": "Amplasarea lângă spații ocupate sau limite de vecinătate impune un nivel maxim de zgomot; la debit egal, alegerea unui rotor mai mare la turație mai mică reduce zgomotul generat."
      },
      {
        "criterion": "Clasa de protecție și certificarea ATEX, dacă e cazul",
        "detail": "Praful sau vaporii inflamabili din zona de montaj impun clasa de protecție IP și, dacă riscul de explozie e real, certificare ATEX pentru întregul ansamblu motor-rotor, nu doar pentru motor."
      },
      {
        "criterion": "Poziția de montaj și tipul de acționare",
        "detail": "Montajul orizontal, vertical sau înclinat, plus alegerea între motor integrat pe ax sau transmisie prin curea, influențează atât gabaritul cât și accesul pentru mentenanță ulterioară."
      }
    ],
    "whatToSend": [
      "Debitul de aer necesar și presiunea statică pe care trebuie să o învingă ventilatorul",
      "Diametrul de montaj disponibil și orientarea (orizontală, verticală, înclinată)",
      "Temperatura și caracteristicile mediului (praf, umiditate, agenți corozivi)",
      "Tensiunea de alimentare disponibilă și dacă se cere certificare ATEX",
      "Nivelul de zgomot maxim admis, dacă există o limită impusă",
      "Cantitatea și termenul dorit de livrare"
    ],
    "applications": [
      "Turnuri răcire",
      "Răcire echipamente",
      "Ventilație tuneluri",
      "Condensatoare",
      "Ventilație hale industriale"
    ],
    "maintenance": "Rulmenții motorului și echilibrarea rotorului sunt punctele care se uzează cel mai vizibil, mai ales în medii cu praf sau vibrații de la structura pe care e montat ventilatorul. Piesele cerute frecvent ca schimb sunt rulmenții, paletele individuale (la modelele cu palete demontabile) și cureaua de transmisie, unde există. Verificările periodice utile: vibrațiile rotorului, curățenia paletelor (depunerile dezechilibrează rotorul) și strângerea șuruburilor de fixare.",
    "faq": [
      {
        "q": "Ce diferență este între ventilatoare axiale și ventilatoare centrifugale industriale?",
        "a": "Ventilatorul axial mișcă aerul de-a lungul axului și oferă debite mari la presiune statică mică, fiind potrivit pentru răcire deschisă sau ventilație de spații. Ventilatorul centrifugal schimbă direcția fluxului la 90 de grade și dezvoltă presiuni statice mult mai mari, fiind ales acolo unde aerul trebuie împins prin filtre, canale lungi sau baterii cu rezistență semnificativă."
      },
      {
        "q": "Cum se dimensionează corect un ventilator axial industrial?",
        "a": "Se pornește de la debitul de aer necesar la presiunea statică reală a instalației, nu presiunea zero de catalog, apoi se alege diametrul rotorului care atinge acel punct de funcționare fără turație excesivă. Ignorarea presiunii statice reale este cea mai frecventă cauză a unui ventilator care livrează mult mai puțin aer decât cel calculat pe hârtie."
      },
      {
        "q": "Ce date trimitem pentru ofertă și cât durează livrarea unor ventilatoare axiale?",
        "a": "Sunt necesare debitul de aer, presiunea statică a instalației, diametrul de montaj, tensiunea de alimentare și caracteristicile mediului de lucru. Livrarea se face la comandă, orientativ în 2–6 săptămâni, în funcție de producător și de eventuala certificare ATEX solicitată."
      },
      {
        "q": "Se poate monta un ventilator axial existent pe o instalație cu filtre noi, mai restrictive?",
        "a": "Trebuie verificat întâi punctul de funcționare: filtrele noi cresc presiunea statică pe traseu, iar un ventilator dimensionat pentru presiune mică poate livra mult mai puțin aer decât înainte sau poate deveni instabil. De multe ori soluția corectă e un ventilator cu curbă de presiune mai ridicată, nu păstrarea celui vechi."
      }
    ],
    "relatedTypes": [
      "ventilatoare-centrifugale-industriale",
      "suflante-canal-lateral-industriale",
      "compresoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "suflante-ventilatoare",
    "slug": "pompe-vid-suflante",
    "name": "Pompe de vid industriale",
    "shortName": "pompe de vid",
    "lede": "Pompa de vid industrială extrage aerul sau gazul dintr-un spațiu închis pentru a crea depresiune, folosită la manipularea cu ventuze, ambalarea sub vid și procese care necesită eliminarea aerului dintr-o incintă. Nivelul de vid și debitul de aspirație diferă mult între tipurile constructive.",
    "intro": "Cele mai întâlnite variante industriale sunt pompele cu inel de lichid, cele cu palete culisante lubrifiate cu ulei și pompele uscate (fără ulei, cu șurub sau cu piston). Pompa cu inel de lichid tolerează vapori și particule fine, fiind robustă dar cu consum energetic mai mare; cea cu palete lubrifiate atinge niveluri de vid înalte la un preț de achiziție moderat, dar cere schimb regulat de ulei; varianta uscată elimină riscul de contaminare a procesului cu ulei, cerută adesea în alimentar sau farmaceutic. Nivelul de vid se exprimă în milibari absolut sau în procent față de presiunea atmosferică, iar debitul de aspirație în metri cubi pe oră.\nUn produs potrivit pentru uz industrial are o cameră de lucru rezistentă la particulele sau vaporii din procesul respectiv, un sistem de răcire dimensionat pentru funcționare continuă și acces facil la piesele de uzură (palete, garnituri, filtre de aspirație). Contează și nivelul de zgomot, mai ales în spații ocupate de personal, precum și eficiența energetică la nivelul de vid real necesar procesului, nu la vidul maxim teoretic al pompei.",
    "howToChoose": [
      {
        "criterion": "Nivelul de vid necesar procesului",
        "detail": "Se exprimă în milibari absolut; multe aplicații nu au nevoie de vid înalt, iar alegerea unei pompe supradimensionate crește inutil consumul energetic și costul de achiziție."
      },
      {
        "criterion": "Debitul de aspirație (viteza de pompare)",
        "detail": "Determină cât de repede se atinge nivelul de vid dorit; la cicluri rapide de ambalare sau manipulare, un debit insuficient alungește timpul de ciclu al utilajului."
      },
      {
        "criterion": "Compatibilitatea cu vaporii sau particulele din gazul aspirat",
        "detail": "Prezența vaporilor de apă, solvenți sau praf fin exclude anumite tipuri constructive; pompa cu inel de lichid tolerează mai bine vaporii, cea uscată cere filtrare suplimentară la particule."
      },
      {
        "criterion": "Cerința de proces fără ulei",
        "detail": "Alimentar, farmaceutic și electronică cer adesea pompe uscate, pentru a elimina orice risc de contaminare a produsului sau a incintei de vid cu picături de ulei."
      },
      {
        "criterion": "Nivelul de zgomot admis la locul de montaj",
        "detail": "În hale ocupate de personal sau lângă birouri, nivelul de zgomot al pompei poate impune o carcasă fonoizolată sau un tip constructiv mai silențios."
      },
      {
        "criterion": "Funcționarea continuă sau intermitentă",
        "detail": "Ciclurile scurte și repetate solicită diferit pompa față de vidul menținut constant; regimul de lucru real trebuie comunicat, nu doar nivelul de vid dorit."
      },
      {
        "criterion": "Racordul și diametrul conductei de aspirație",
        "detail": "Un diametru prea mic pe traseul de aspirație limitează debitul real, indiferent cât de performantă e pompa aleasă."
      }
    ],
    "whatToSend": [
      "Nivelul de vid necesar (mbar absolut sau % din presiunea atmosferică)",
      "Debitul de aspirație dorit sau timpul de ciclu impus",
      "Gazul aspirat: aer curat, cu vapori, praf sau alte particule",
      "Cerința de proces fără ulei, dacă este cazul",
      "Regimul de funcționare: continuu sau intermitent",
      "Diametrul și lungimea conductei de aspirație existente",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Ambalare vid",
      "Manipulare cu vid",
      "Procese chimice",
      "Industria lemnului",
      "Formare termică a materialelor plastice"
    ],
    "maintenance": "La pompele cu palete lubrifiate, uleiul și filtrul de ulei se schimbă la intervale regulate, iar paletele se uzează progresiv și necesită înlocuire periodică. La toate tipurile contează starea filtrului de aspirație, care oprește particulele înainte să ajungă în camera de lucru, precum și etanșeitatea racordurilor, o simplă infiltrare de aer reducând vizibil nivelul de vid atins.",
    "faq": [
      {
        "q": "Ce diferență e între o pompă de vid cu inel de lichid și una cu palete?",
        "a": "Pompa cu inel de lichid folosește apă sau alt lichid drept element de etanșare și tolerează vapori sau particule fine, fiind mai robustă dar mai puțin eficientă energetic. Pompa cu palete lubrifiate cu ulei atinge niveluri de vid mai înalte la consum mai mic, dar cere ulei curat și schimburi regulate."
      },
      {
        "q": "Cum se alege corect o pompă de vid pentru o aplicație industrială?",
        "a": "Se pornește de la nivelul de vid necesar și de la debitul de aspirație cerut de timpul de ciclu al procesului, apoi se verifică ce ajunge efectiv în pompă: aer curat, vapori sau particule. Cerința de proces fără ulei restrânge suplimentar opțiunile constructive potrivite."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de pompă de vid și cât durează livrarea?",
        "a": "Nivelul de vid dorit, debitul necesar și tipul de gaz aspirat sunt datele esențiale pentru o propunere corectă. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de tipul constructiv ales."
      },
      {
        "q": "Se poate folosi aceeași pompă de vid și pentru aplicații alimentare?",
        "a": "Doar dacă este o variantă uscată, fără ulei, certificată pentru contact indirect cu procese sensibile; o pompă lubrifiată cu ulei nu este potrivită acolo unde există risc de contaminare a produsului sau a incintei de vid."
      }
    ],
    "relatedTypes": [
      "suflante-canal-lateral-industriale",
      "suflante-roots-industriale",
      "compresoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "suflante-ventilatoare",
    "slug": "compresoare-industriale",
    "name": "Compresoare industriale",
    "shortName": "compresoare de aer",
    "lede": "Compresorul industrial crește presiunea aerului sau a unui gaz prin reducerea volumului acestuia, livrând aer comprimat pentru acționări pneumatice, procese industriale sau aplicații care cer aer curat sub presiune. Alegerea corectă depinde de debitul necesar, presiunea de lucru și calitatea aerului cerută de aplicație (cu ulei sau fără ulei).",
    "intro": "Compresoarele cu piston comprimă aerul prin mișcarea alternativă a unui piston într-un cilindru, fiind potrivite pentru debite mici și presiuni ridicate; cele cu șurub folosesc două rotoare elicoidale angrenate, oferind un debit continuu și mai puțină vibrație, potrivite pentru funcționare îndelungată. Compresoarele centrifugale, folosite la debite foarte mari, comprimă aerul prin forța centrifugă a unui rotor cu palete, la o scară industrială mai mare.\n\nUn compresor potrivit pentru procese industriale se alege și după clasa de puritate a aerului livrat (fără ulei pentru industria alimentară sau farmaceutică, conform ISO 8573-1), nivelul de zgomot, eficiența energetică la sarcină parțială și posibilitatea de recuperare a căldurii degajate de compresie. Uscarea și filtrarea ulterioară a aerului comprimat sunt la fel de importante ca alegerea compresorului, întrucât umiditatea și particulele afectează echipamentele din aval.",
    "howToChoose": [
      {
        "criterion": "Debitul de aer necesar (l/min sau m³/min)",
        "detail": "Se calculează din suma consumatorilor pneumatici simultani, cu o rezervă pentru extinderi viitoare; subdimensionarea duce la scăderea presiunii în rețea la vârf de consum."
      },
      {
        "criterion": "Presiunea de lucru necesară (bar)",
        "detail": "Trebuie să acopere cel mai pretențios consumator din instalație, plus o marjă pentru pierderile pe rețea; o presiune supradimensionată consumă energie inutil."
      },
      {
        "criterion": "Calitatea aerului cerută (cu ulei sau fără ulei)",
        "detail": "Industria alimentară, farmaceutică și electronică cer, de regulă, aer fără ulei, conform claselor ISO 8573-1; alegerea unui compresor cu ulei acolo unde nu e permis contaminează produsul finit."
      },
      {
        "criterion": "Regimul de funcționare (continuu sau intermitent)",
        "detail": "Funcționarea continuă favorizează compresoarele cu șurub, mai potrivite pentru cicluri lungi, în timp ce cele cu piston pot fi suficiente pentru consum ocazional. Alegerea greșită scurtează durata de viață a echipamentului."
      },
      {
        "criterion": "Nivelul de zgomot admis la locul de instalare",
        "detail": "Compresoarele instalate în hale ocupate permanent sau aproape de birouri cer, de regulă, o carcasă insonorizată; ignorarea acestui criteriu duce adesea la reamplasări costisitoare ulterior."
      },
      {
        "criterion": "Posibilitatea de recuperare a căldurii de compresie",
        "detail": "O parte însemnată din energia consumată se transformă în căldură, care poate fi recuperată pentru încălzirea spațiilor sau a apei; nu toate modelele oferă din fabrică acest kit."
      }
    ],
    "whatToSend": [
      "Debitul necesar (l/min sau m³/min) și presiunea de lucru (bar)",
      "Calitatea aerului cerută (cu ulei sau fără ulei) și aplicația deservită",
      "Regimul de funcționare (continuu, intermitent, ore pe zi)",
      "Tensiunea de alimentare disponibilă și spațiul de instalare",
      "Dacă se dorește recuperare de căldură sau doar producție de aer comprimat",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Automatizări pneumatice",
      "Industria alimentară",
      "Procese medicale",
      "Laborator",
      "Vopsire și sablare industrială"
    ],
    "maintenance": "Filtrele de admisie, uleiul de ungere (la modelele cu ulei) și elementele de separare ulei-aer sunt componentele care se schimbă cel mai des, la intervale stabilite de orele de funcționare, nu doar de calendar. Curelele de transmisie, la modelele care le folosesc, și radiatoarele de răcire trebuie verificate periodic pentru a preveni supraîncălzirea și scăderea de eficiență.",
    "faq": [
      {
        "q": "Prin ce diferă un compresor cu șurub de unul cu piston?",
        "a": "Compresorul cu șurub oferă un debit continuu, cu mai puține vibrații și, de regulă, o durată de viață mai mare la funcționare îndelungată, fiind potrivit pentru consum constant de aer comprimat. Cel cu piston este mai simplu și mai ieftin la debite mici, dar solicitat continuu se uzează mai rapid și cere pauze de răcire."
      },
      {
        "q": "Cum se dimensionează corect un compresor pentru o hală de producție?",
        "a": "Se însumează consumul de aer al tuturor consumatorilor pneumatici care pot funcționa simultan, se adaugă o rezervă pentru viitor și se verifică presiunea maximă necesară pe rețea. Pierderile pe conductele lungi sau cu diametru mic trebuie compensate printr-o presiune de lucru puțin mai mare la compresor."
      },
      {
        "q": "Ce date sunt necesare pentru o ofertă de compresor industrial și în cât timp se livrează?",
        "a": "Sunt necesare debitul, presiunea de lucru, calitatea aerului cerută și regimul de funcționare zilnic. Livrarea depinde de configurație și de producător, orientativ 2-6 săptămâni de la comandă pentru modelele care nu sunt stocate ca produs standard."
      },
      {
        "q": "Cât de des trebuie schimbat uleiul la un compresor cu șurub?",
        "a": "Intervalul depinde de tipul de ulei folosit și de orele de funcționare, fiind indicat de producător în manualul echipamentului, nu de un calendar fix. Funcționarea la temperaturi ridicate sau într-un mediu cu praf scurtează, de regulă, intervalul recomandat între schimburi."
      }
    ],
    "relatedTypes": [
      "suflante-roots-industriale",
      "ventilatoare-centrifugale-industriale",
      "pompe-vid-suflante"
    ],
    "lastVerified": "2026-09-26"
  }
];
