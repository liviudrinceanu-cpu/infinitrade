// src/data/productTypeContent/motoare-electrice.js — selection guides for the product types of
// /motoare-electrice (Branduri-500 v13, D-2026-09-26). One entry per product type in
// products.js / equipmentCategories.js; rendered at /motoare-electrice/<type>. Educational
// content only: no brand facts, no prices, no stock; the brands that make each
// type come from src/data/brandCategoryLinks.js at render time.
export const productTypes = [
  {
    "category": "motoare-electrice",
    "slug": "motoare-asincrone-industriale",
    "name": "Motoare asincrone industriale",
    "shortName": "motoare asincrone",
    "lede": "Motorul asincron industrial transformă energia electrică în mișcare de rotație folosind principiul inducției electromagnetice între un stator alimentat trifazat și un rotor în scurtcircuit, fără perii sau contacte alunecătoare. Este soluția standard pentru acționarea pompelor, ventilatoarelor, compresoarelor și transportoarelor, alegerea corectă depinzând de putere, turație, clasa de eficiență și condițiile de mediu în care funcționează.",
    "intro": "Rotorul în colivie de veveriță se rotește la o turație ușor sub cea sincronă a câmpului învârtitor din stator, diferența numindu-se alunecare; motoarele pot avea 2, 4, 6 sau mai mulți poli, ceea ce determină turația nominală (de la aproximativ 3000 la sub 1000 rot/min la 50 Hz). Clasele de eficiență IE2, IE3 și IE4, standardizate prin IEC 60034-30, arată cât din energia electrică se transformă efectiv în putere mecanică, restul pierzându-se în căldură.\n\nUn motor potrivit pentru aplicații industriale se alege și după clasa de protecție IP (praf și umiditate), clasa de izolație termică, tipul de rulmenți și posibilitatea de relubrifiere, nu doar după putere. Pentru medii cu praf combustibil sau vapori inflamabili este necesară o construcție certificată ATEX 2014/34/UE; funcționarea cu convertizor de frecvență cere, de regulă, izolație de bobinaj adaptată la solicitările de comutație rapidă.",
    "howToChoose": [
      {
        "criterion": "Puterea nominală (kW) și cuplul necesar",
        "detail": "Se determină din sarcina reală a mașinii antrenate, nu din puterea motorului înlocuit fără verificare; un motor supradimensionat funcționează ineficient la sarcină parțială, iar unul subdimensionat se poate supraîncălzi."
      },
      {
        "criterion": "Turația și numărul de poli",
        "detail": "Turația nominală trebuie să corespundă cerinței mecanismului antrenat, direct sau prin reductor; alegerea greșită a numărului de poli înseamnă fie viteză insuficientă, fie una excesivă, cu uzură mai rapidă a componentelor mecanice."
      },
      {
        "criterion": "Clasa de eficiență energetică (IE2/IE3/IE4)",
        "detail": "O clasă superioară reduce costul de energie pe durata de viață a motorului, relevant mai ales la funcționare continuă. Diferența de preț la achiziție se recuperează, de regulă, din facturile de energie mai mici."
      },
      {
        "criterion": "Clasa de protecție IP și condițiile de mediu",
        "detail": "Praful, umiditatea sau vaporii corozivi din hală impun o clasă IP adecvată și, uneori, un tratament special al bobinajului; instalarea unui motor cu protecție insuficientă scurtează drastic durata de viață."
      },
      {
        "criterion": "Modul de pornire și compatibilitatea cu convertizorul de frecvență",
        "detail": "Pornirea directă, stea-triunghi sau prin convertizor de frecvență influențează solicitarea rețelei și a izolației bobinajului; nu orice motor standard este potrivit pentru turație variabilă fără verificarea izolației."
      },
      {
        "criterion": "Tipul de montaj și dimensiunile de racordare (talpă, flanșă)",
        "detail": "Dimensiunile carcasei (IEC) trebuie să corespundă spațiului și cuplajului existent, mai ales la înlocuirea unui motor vechi. O nepotrivire de câțiva milimetri la flanșă poate bloca montajul."
      }
    ],
    "whatToSend": [
      "Plăcuța motorului existent, cu putere, turație și cod IEC de carcasă",
      "Puterea necesară (kW), turația dorită și tipul de sarcină antrenată",
      "Tensiunea de alimentare și dacă funcționează cu convertizor de frecvență",
      "Clasa de protecție IP cerută de mediul de instalare",
      "Tipul de montaj (pe talpă sau pe flanșă) și dimensiunile disponibile",
      "Cantitatea necesară și termenul dorit"
    ],
    "applications": [
      "Pompe industriale",
      "Ventilatoare",
      "Compresoare",
      "Transportoare",
      "Mașini-unelte"
    ],
    "maintenance": "Rulmenții și etanșările de arbore sunt componentele care cedează cel mai des, mai ales la funcționare continuă sau la vibrații necorectate prin aliniere; ventilatorul de răcire și grilajul acestuia trebuie curățate periodic pentru a evita supraîncălzirea. Verificarea periodică a izolației bobinajului și a temperaturii de funcționare previne majoritatea opririlor neplanificate.",
    "faq": [
      {
        "q": "Prin ce diferă un motor asincron de un servomotor industrial?",
        "a": "Motorul asincron funcționează la o turație apropiată de cea sincronă, determinată de frecvența rețelei și numărul de poli, fiind potrivit pentru acționări continue fără cerințe de poziționare fină. Servomotorul are un sistem de control în buclă închisă și oferă precizie de poziție și cuplu, dar la un cost și o complexitate mai mari, justificate doar când aplicația chiar cere asta."
      },
      {
        "q": "Cum se alege corect puterea unui motor asincron pentru o mașină industrială?",
        "a": "Se pornește de la cuplul rezistent al mașinii antrenate la turația de lucru, se adaugă o rezervă rezonabilă pentru pornire și regimuri tranzitorii, apoi se verifică dacă motorul rezultat se încadrează într-o clasă de eficiență acceptabilă. Supradimensionarea sistematică din prudență excesivă crește costul de achiziție și de energie fără beneficiu real."
      },
      {
        "q": "Ce informații sunt necesare pentru o ofertă de motor asincron și în cât timp se livrează?",
        "a": "Sunt necesare puterea, turația, tensiunea de alimentare, clasa de protecție și tipul de montaj, plus plăcuța motorului înlocuit dacă există. Termenul de livrare este la comandă, de regulă între 2 și 6 săptămâni, în funcție de putere și de producătorul ales."
      },
      {
        "q": "Un motor asincron standard poate fi folosit cu un convertizor de frecvență?",
        "a": "Nu orice motor standard suportă fără probleme funcționarea cu convertizor de frecvență, din cauza solicitărilor suplimentare asupra izolației bobinajului la comutații rapide; la turații variabile frecvente se recomandă motoare cu izolație adaptată sau filtre de ieșire pe convertizor. Verificarea compatibilității înainte de achiziție evită defectarea prematură a bobinajului."
      }
    ],
    "relatedTypes": [
      "motoare-atex-industriale",
      "convertizoare-frecventa-industriale",
      "motoreductoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "motoare-electrice",
    "slug": "motoare-atex-industriale",
    "name": "Motoare ATEX industriale",
    "shortName": "motoare ATEX",
    "lede": "Un motor ATEX industrial este un motor electric certificat pentru funcționare în atmosfere cu risc de explozie (gaze, vapori sau praf combustibil), construit astfel încât suprafața și componentele interne să nu poată aprinde mediul din jur. Se folosește în petrochimie, rafinării, industria chimică și silozuri, unde un motor standard ar reprezenta un risc de incendiu sau explozie.",
    "intro": "Certificarea ATEX (directiva 2014/34/UE) clasifică echipamentele după zona de risc (0/1/2 pentru gaze, 20/21/22 pentru praf) și după modul de protecție: carcasă antideflagrantă „Ex d\", care conține o eventuală explozie internă fără să o transmită în exterior, sau siguranță mărită „Ex e\", care elimină scânteile și supraîncălzirile prin proiectare. Alegerea modului de protecție depinde strict de zona în care va funcționa motorul, nu de preferința cumpărătorului.\n\nUn motor ATEX de calitate are marcaj complet (grup, categorie, clasă de temperatură), documentație tehnică cu certificat de tip emis de un organism notificat și materiale rezistente la mediul respectiv (vopsele anticorozive, presetupe certificate pentru cablu). Contează și clasa de eficiență energetică, reglementată prin IEC 60034-30, și disponibilitatea unei game complete de turații și puteri, pentru a evita supradimensionarea inutilă a instalației.",
    "howToChoose": [
      {
        "criterion": "Zona de risc și tipul de atmosferă explozivă",
        "detail": "Zonele 1/2 pentru gaze și 21/22 pentru praf cer module de protecție diferite (Ex d, Ex e, Ex t); zona exactă se stabilește printr-un studiu de clasificare realizat de client sau proiectant, nu se aproximează."
      },
      {
        "criterion": "Clasa de temperatură (T1-T6)",
        "detail": "Indică temperatura maximă de suprafață admisă a motorului, raportată la temperatura de autoaprindere a substanței din zonă; o clasă greșit aleasă poate anula certificarea instalației, chiar dacă motorul funcționează corect mecanic."
      },
      {
        "criterion": "Puterea și turația necesară procesului",
        "detail": "Se calculează din cuplul cerut de utilajul antrenat (pompă, ventilator, compresor) și din turația de lucru; un motor subdimensionat se supraîncălzește constant, ceea ce e periculos suplimentar în zone ATEX."
      },
      {
        "criterion": "Modul de protecție constructiv",
        "detail": "Ex d antideflagrant e mai robust dar mai greu, Ex e siguranță mărită e mai ușor dar cu toleranțe mai stricte la montaj; alegerea depinde de spațiul disponibil și de cerințele proiectantului."
      },
      {
        "criterion": "Alimentarea electrică și compatibilitatea cu variatorul de turație",
        "detail": "Nu orice motor ATEX acceptă funcționare pe convertizor de frecvență; dacă se dorește reglaj de turație, certificarea trebuie să acopere explicit funcționarea variabilă, altfel se pierde protecția."
      },
      {
        "criterion": "Documentația și organismul de certificare",
        "detail": "Certificatul de tip trebuie emis de un organism notificat recunoscut în UE, cu marcaj CE și Ex vizibil pe plăcuță; lipsa documentației complete blochează recepția instalației la punerea în funcțiune."
      }
    ],
    "whatToSend": [
      "Zona de clasificare ATEX (grup, categorie, zonă de gaz sau praf) stabilită de proiectant",
      "Puterea necesară, turația și tipul de utilaj antrenat (pompă, ventilator, compresor)",
      "Clasa de temperatură cerută (T1-T6), dacă e specificată în studiul de clasificare",
      "Tensiunea de alimentare și dacă motorul va funcționa cu convertizor de frecvență",
      "Poziția de montaj și condițiile de mediu (temperatură ambientală, umiditate, praf)",
      "Standardul sau clasa de eficiență energetică cerută, dacă există o specificație de proiect"
    ],
    "applications": [
      "Petrochimie",
      "Rafinării",
      "Industria chimică",
      "Silozuri"
    ],
    "maintenance": "Componentele care necesită verificare periodică sunt rulmenții, presetupele de cablu (etanșeitatea lor certificată se poate degrada) și ventilatorul de răcire; la motoarele Ex d se verifică suplimentar integritatea îmbinărilor antideflagrante, care nu trebuie niciodată șlefuite sau modificate. Piesele de schimb (rulmenți, garnituri, presetupe) trebuie să fie cele certificate de producător, nu echivalente generice, altfel certificarea ATEX a motorului își pierde valabilitatea.",
    "faq": [
      {
        "q": "Ce diferență există între un motor ATEX și un motor asincron industrial obișnuit?",
        "a": "Un motor asincron standard nu are nicio protecție împotriva aprinderii unei atmosfere explozive și nu poate fi montat legal în zone clasificate. Motorul ATEX are certificare conform directivei 2014/34/UE, marcaj de zonă și clasă de temperatură, și o construcție (carcasă antideflagrantă sau siguranță mărită) gândită să nu devină sursă de aprindere."
      },
      {
        "q": "Cum se alege corect un motor ATEX pentru o instalație din industria chimică?",
        "a": "Punctul de plecare e studiul de clasificare a zonelor, realizat de proiectant, care stabilește grupul, categoria și clasa de temperatură necesare. Pe baza acestora se alege modul de protecție (Ex d sau Ex e), apoi puterea și turația din cerințele utilajului antrenat, verificând compatibilitatea cu un eventual convertizor de frecvență."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de motor ATEX și cât durează livrarea?",
        "a": "Sunt necesare zona de clasificare, puterea, turația și tensiunea de alimentare, plus clasa de temperatură dacă e impusă de proiect. Livrarea este la comandă, orientativ 2-6 săptămâni, în funcție de producător, deoarece motoarele certificate ATEX rareori se țin ca stoc standard."
      },
      {
        "q": "Poate fi reparat local un motor ATEX defect sau trebuie înlocuit?",
        "a": "Reparația e posibilă doar la ateliere certificate pentru echipamente ATEX, care păstrează integritatea protecției constructive; o reparație necertificată anulează marcajul Ex și devine un risc de siguranță. De multe ori înlocuirea cu un motor nou certificat e soluția mai rapidă și mai sigură."
      }
    ],
    "relatedTypes": [
      "motoare-asincrone-industriale",
      "motoreductoare-industriale",
      "convertizoare-frecventa-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "motoare-electrice",
    "slug": "servomotoare-industriale",
    "name": "Servomotoare Industriale",
    "shortName": "servomotoare industriale",
    "lede": "Servomotorul industrial este un motor electric cuplat cu un traductor de poziție (encoder sau resolver) și controlat printr-o buclă închisă, capabil să urmărească precis o poziție, o viteză sau un cuplu impus de un driver dedicat. Se folosește acolo unde mișcarea trebuie să fie rapidă, repetabilă și foarte precisă, nu doar constantă ca la un motor obișnuit.",
    "intro": "Construcția tipică are un rotor cu magneți permanenți (la servomotoarele sincrone, cele mai răspândite azi) sau un rotor bobinat, un encoder optic sau magnetic montat pe ax pentru semnal de poziție, și o carcasă dimensionată pentru disiparea căldurii la cupluri mari în spații compacte. Servomotorul funcționează întotdeauna împreună cu un driver (servoamplificator) care închide bucla de reglare pe baza semnalului de la encoder, spre deosebire de un motor asincron clasic, comandat direct sau printr-un convertizor de frecvență fără acest tip de reacție.\n\nUn servomotor potrivit pentru automatizări industriale se recunoaște după raportul cuplu-inerție (important pentru accelerații rapide, cum sunt cele din ambalare sau robotică), după rezoluția encoder-ului și după clasa de protecție a carcasei (IP54 sau mai mare în medii cu praf sau umezeală). Contează și tipul de frână de imobilizare integrată, necesară la axele verticale, precum și compatibilitatea electrică și de comunicație (EtherCAT, CANopen sau alt protocol de fieldbus / rețea de câmp) cu driverul și controllerul existente în linie; o nepotrivire de protocol blochează integrarea chiar dacă motorul în sine este potrivit.",
    "howToChoose": [
      {
        "criterion": "Cuplul nominal și cel de vârf",
        "detail": "Cuplul nominal susține mișcarea continuă, iar cel de vârf, disponibil doar câteva secunde, acoperă accelerările; alegerea doar după cuplul nominal duce frecvent la un motor subdimensionat pentru cicluri rapide."
      },
      {
        "criterion": "Viteza maximă și rezoluția poziției",
        "detail": "Aplicațiile de mare precizie (robotică, mașini CNC) cer o rezoluție mare a encoder-ului, în timp ce liniile de ambalare pun accent mai mult pe viteza de răspuns și pe repetabilitate."
      },
      {
        "criterion": "Inerția sarcinii cuplate",
        "detail": "Raportul dintre inerția sarcinii și cea a rotorului influențează stabilitatea buclei de reglare; o sarcină mult mai grea decât rotorul poate produce vibrații sau supraîncălzirea driverului la reglaje greșite."
      },
      {
        "criterion": "Tipul și protocolul driverului",
        "detail": "Servomotorul și driverul trebuie să comunice pe același protocol de fieldbus (EtherCAT, CANopen, Profinet) cu restul automatizării; schimbarea unui singur motor dintr-o linie existentă impune verificarea compatibilității."
      },
      {
        "criterion": "Clasa de protecție și mediul de montaj",
        "detail": "În medii cu praf, umezeală sau spălare frecventă este nevoie de o carcasă cu protecție IP54 sau mai mare și, uneori, de un tratament anticoroziv suplimentar al carcasei."
      },
      {
        "criterion": "Frâna de imobilizare",
        "detail": "La axele verticale sau la sarcinile care pot cădea la oprirea alimentării, o frână electromagnetică integrată este obligatorie, nu opțională."
      }
    ],
    "whatToSend": [
      "Codul sau seria motorului existent, dacă este o înlocuire",
      "Cuplul necesar (nominal și de vârf) și viteza maximă de rotație",
      "Tensiunea de alimentare și protocolul de comunicație al driverului",
      "Tipul de flanșă și lungimea axului pentru cuplare mecanică",
      "Prezența sau nu a unei frâne de imobilizare integrate",
      "Cantitatea necesară și termenul dorit pentru livrare"
    ],
    "applications": [
      "Mașini CNC",
      "Robotică industrială",
      "Linii ambalare",
      "Mașini speciale",
      "Axe de poziționare"
    ],
    "maintenance": "La servomotoare uzura principală apare la rulmenții axului și, dacă există, la garniturile de etanșare a carcasei; encoder-ul este de regulă fără mentenanță, dar sensibil la șocuri și la umiditate pătrunsă prin cabluri deteriorate. Se recomandă verificarea periodică a jocului axial, a temperaturii carcasei în funcționare și a stării cablurilor de putere și de feedback, care se uzează mai des la axele mobile.",
    "faq": [
      {
        "q": "Care este diferența dintre un servomotor și un motor asincron clasic?",
        "a": "Servomotorul lucrează în buclă închisă, cu un encoder care raportează permanent poziția reală a axului către driver, ceea ce îi permite să urmărească precis o traiectorie impusă. Motorul asincron clasic, chiar comandat printr-un convertizor de frecvență, nu are acest tip de reacție și e potrivit pentru viteze constante sau variabile, nu pentru poziționare de precizie."
      },
      {
        "q": "Cum se alege cuplul potrivit pentru un servomotor industrial?",
        "a": "Se pornește de la profilul de mișcare cerut de aplicație (masă de mutat, accelerație, timp de ciclu) și se calculează atât cuplul necesar în regim continuu, cât și vârful din accelerare. Un servomotor ales doar după cuplul nominal, fără marjă pentru vârfuri, se poate supraîncălzi sau opri din protecție în cicluri rapide repetate."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de servomotoare industriale și cât durează livrarea?",
        "a": "Cuplul necesar, viteza maximă, tensiunea de alimentare, protocolul de comunicație al driverului și tipul de flanșă pentru montaj sunt datele minime pentru o ofertă corectă. Livrarea nu este din stoc; se confirmă la comandă, orientativ în 2-6 săptămâni, în funcție de producător."
      },
      {
        "q": "Se pot integra servomotoare industriale noi cu un driver mai vechi din linia existentă?",
        "a": "Depinde de protocolul de comunicație și de tensiunea encoder-ului; multe servoamplificatoare acceptă doar anumite tipuri de encoder sau protocoale specifice producătorului. Înainte de comandă merită verificate manualul driverului existent și compatibilitatea electrică, altfel integrarea poate cere și înlocuirea driverului."
      }
    ],
    "relatedTypes": [
      "motoare-asincrone-industriale",
      "motoreductoare-industriale",
      "convertizoare-frecventa-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "motoare-electrice",
    "slug": "motoreductoare-industriale",
    "name": "Motoreductoare industriale",
    "shortName": "motoreductoare industriale",
    "lede": "Motoreductorul industrial este un ansamblu motor electric plus reductor de turație montate compact într-o singură carcasă, folosit acolo unde utilajul are nevoie de cuplu ridicat la turație redusă. Elimină necesitatea unui reductor separat montat pe cuplaj, reducând gabaritul și punctele de aliniere din instalație.",
    "intro": "Reducerea turației se obține printr-un tren de angrenaje – de regulă melcat, cilindric, planetar sau o combinație coaxială/în unghi – ales în funcție de raportul de transmisie necesar, de randament și de spațiul de montaj disponibil; reductoarele melcate sunt compacte și ieftine dar cu randament mai scăzut, în timp ce cele planetare sau cilindrice oferă randament ridicat și durată de viață mai mare la solicitări grele. Motorul poate fi montat direct (motoreductor integrat) sau atașat printr-un adaptor tip IEC pe un reductor standard, soluție utilă când motorul trebuie înlocuit independent.\n\nUn motoreductor bun pentru aplicații industriale se recunoaște după clasa de eficiență a motorului (IE3 sau superioară, conform IEC 60034-30), calitatea rulmenților și a etanșărilor axului de ieșire, tratamentul termic al roților dințate și clasa de protecție IP adecvată mediului (praf, umezeală, spălare cu jet de apă). Pentru medii cu risc de explozie este necesară certificarea ATEX 2014/34/UE, iar pentru sarcini variabile sau pornire/oprire frecventă contează factorul de serviciu declarat de producător, nu doar puterea nominală.",
    "howToChoose": [
      {
        "criterion": "Cuplul necesar la arborele de ieșire",
        "detail": "Se calculează din sarcina utilajului antrenat (transportor, mixer, ascensor de marfă) și din turația dorită; o greșeală frecventă este dimensionarea doar după puterea motorului, ignorând vârfurile de cuplu la pornire sub sarcină."
      },
      {
        "criterion": "Raportul de transmisie și turația de ieșire",
        "detail": "Stabilește cât de mult trebuie redusă turația motorului pentru a obține turația de lucru a utilajului; rapoartele foarte mari cresc gabaritul reductorului sau impun o treaptă suplimentară de reducere."
      },
      {
        "criterion": "Tipul constructiv al reductorului",
        "detail": "Melcat pentru rapoarte mari și spațiu redus, cilindric sau planetar pentru randament ridicat și sarcini grele continue; alegerea greșită duce fie la supraîncălzire, fie la costuri inutile pentru o aplicație ușoară."
      },
      {
        "criterion": "Factorul de serviciu și regimul de funcționare",
        "detail": "Un motoreductor care pornește și oprește des sau lucrează cu șocuri de sarcină are nevoie de un factor de serviciu mai mare decât unul care rulează continuu la sarcină constantă."
      },
      {
        "criterion": "Poziția de montaj și tipul de fixare",
        "detail": "Montajul pe picioare, cu flanșă sau suspendat pe arbore influențează solicitările asupra rulmenților și lagărelor; poziția trebuie precizată de la început, nu adaptată ulterior la instalare."
      },
      {
        "criterion": "Clasa de protecție și mediul de funcționare",
        "detail": "Praful, umezeala sau spălarea cu jet de apă impun o clasă IP mai ridicată și, eventual, tratamente anticorozive suplimentare pentru carcasă și șuruburi."
      }
    ],
    "whatToSend": [
      "Cuplul sau puterea necesară și turația de ieșire dorită",
      "Raportul de transmisie aproximativ sau turația motorului de antrenare",
      "Tipul de sarcină (continuă, cu șocuri, pornire/oprire frecventă) și numărul de porniri pe oră",
      "Poziția de montaj (pe picioare, cu flanșă, suspendat pe arbore)",
      "Tensiunea de alimentare și clasa de protecție IP necesară mediului",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Transportoare grele",
      "Mixere industriale",
      "Dozatoare",
      "Ascensoare marfă",
      "Linii de ambalare"
    ],
    "maintenance": "Cele mai solicitate componente sunt uleiul de transmisie, garniturile axului de ieșire și rulmenții, supuși la uzură prin frecare și la degradarea termică a lubrifiantului. Se recomandă verificarea periodică a nivelului și stării uleiului, a temperaturii de funcționare și a eventualelor scurgeri pe la simeringuri, mai ales la reductoarele montate în poziții verticale sau expuse la vibrații.",
    "faq": [
      {
        "q": "Ce diferență este între un motoreductor și un motor cu reductor montat separat pe cuplaj?",
        "a": "Motoreductorul integrează motorul și reductorul într-o carcasă comună, aliniate din fabrică, ceea ce reduce riscul de dezaliniere și gabaritul total al instalației. Soluția cu reductor separat pe cuplaj permite înlocuirea independentă a motorului, dar necesită aliniere atentă la montaj și ocupă mai mult spațiu pe utilaj."
      },
      {
        "q": "Cum se dimensionează corect motoreductoarele industriale pentru un utilaj?",
        "a": "Se pornește de la cuplul și turația necesare la arborele de ieșire, se alege raportul de transmisie corespunzător, apoi se verifică factorul de serviciu în funcție de regimul de sarcină al utilajului. Ignorarea vârfurilor de cuplu la pornire este cea mai frecventă cauză de dimensionare insuficientă."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de motoreductoare industriale și cât durează livrarea?",
        "a": "Sunt necesare cuplul sau puterea, turația de ieșire, tipul de sarcină și poziția de montaj dorită. Livrarea unui motoreductor industrial este la comandă, orientativ 2-6 săptămâni, în funcție de producător și de configurația exactă aleasă (raport de transmisie, poziție de montaj, clasă de protecție IP, tip de flanșă de ieșire)."
      },
      {
        "q": "Se poate schimba doar motorul unui motoreductor industrial, fără reductorul?",
        "a": "Depinde de construcție: la variantele cu adaptor IEC standardizat, motorul poate fi înlocuit independent de reductor; la motoreductoarele complet integrate, cu carcasă comună turnată din fabrică, înlocuirea separată a motorului nu este de regulă posibilă și se schimbă ansamblul întreg."
      }
    ],
    "relatedTypes": [
      "motoare-asincrone-industriale",
      "convertizoare-frecventa-industriale",
      "servomotoare-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "motoare-electrice",
    "slug": "convertizoare-frecventa-industriale",
    "name": "Convertizoare de frecvență industriale",
    "shortName": "convertizoare de frecvență",
    "lede": "Convertizorul de frecvență industrial este un echipament electronic care modifică frecvența și tensiunea curentului alimentat unui motor electric, controlând astfel turația și cuplul acestuia în mod continuu. Se folosește pentru pornirea lină și reglarea vitezei motoarelor asincrone în procese industriale variate.",
    "intro": "Funcționarea se bazează pe conversia curentului alternativ de la rețea în curent continuu, printr-o redresare, urmată de generarea unui nou curent alternativ cu frecvență și tensiune variabile, printr-un invertor, care este trimis motorului; variind frecvența, se variază direct turația motorului. Există variante compacte, pentru puteri mici și montaj apropiat de motor, și variante de tip dulap, pentru puteri mari sau montaj centralizat în tablou electric; unele modele includ filtre integrate pentru reducerea perturbațiilor electromagnetice, altele necesită filtre externe.\n\nUn convertizor potrivit pentru mediul industrial se recunoaște după clasa de protecție a carcasei (IP20 pentru montaj în tablou, IP54 sau mai mult pentru montaj direct pe utilaj), capacitatea de a gestiona supraîncărcări scurte fără declanșare și opțiunile de comunicare cu sistemul de automatizare existent, prin protocoale industriale standard. Eficiența energetică a motorului acționat contează la fel de mult ca a convertizorului însuși, iar compatibilitatea electromagnetică, adică filtrarea armonicilor, previne perturbarea altor echipamente din instalație. Reglementarea relevantă pentru motoarele acționate este IEC 60034-30, referitoare la clasele de eficiență energetică.",
    "howToChoose": [
      {
        "criterion": "Puterea și curentul motorului acționat",
        "detail": "Convertizorul se dimensionează după puterea și curentul nominal al motorului, nu invers; o subdimensionare produce declanșări repetate, iar o supradimensionare exagerată crește costul fără beneficiu real."
      },
      {
        "criterion": "Tipul de aplicație (cuplu constant sau variabil)",
        "detail": "Pompele și ventilatoarele au nevoie de cuplu variabil cu turația, în timp ce benzile transportoare sau mașinile-unelte cer cuplu constant pe tot domeniul de viteză; alegerea greșită a modului de control reduce eficiența."
      },
      {
        "criterion": "Tensiunea de alimentare disponibilă",
        "detail": "Alimentarea monofazată sau trifazată, precum și nivelul de tensiune, de exemplu 230V sau 400V, trebuie confirmate înainte de comandă, deoarece nu toate modelele acceptă ambele variante."
      },
      {
        "criterion": "Clasa de protecție și mediul de montaj",
        "detail": "Un montaj în tablou electric climatizat permite o clasă de protecție mai redusă, în timp ce montajul direct pe utilaj, în hală cu praf sau umezeală, cere IP54 sau mai mult."
      },
      {
        "criterion": "Necesitatea comunicării cu automatizarea existentă",
        "detail": "Dacă instalația are deja un PLC sau un sistem SCADA, convertizorul trebuie să suporte protocolul de comunicare folosit, altfel integrarea necesită module suplimentare sau rămâne limitată la comandă manuală."
      },
      {
        "criterion": "Filtrarea armonicilor și compatibilitatea electromagnetică",
        "detail": "În instalații cu mai multe convertizoare sau echipamente sensibile alimentate din același tablou, filtrele de armonici reduc riscul de perturbații care afectează alte aparate din rețea."
      }
    ],
    "whatToSend": [
      "Puterea și curentul nominal al motorului care va fi acționat.",
      "Tensiunea de alimentare disponibilă (monofazat sau trifazat, nivel de tensiune).",
      "Tipul de aplicație (pompă, ventilator, bandă transportoare, mașină-unealtă etc.).",
      "Mediul de montaj (tablou electric sau direct pe utilaj, praf, umezeală).",
      "Necesitatea comunicării cu un PLC sau sistem SCADA existent.",
      "Cantitatea necesară și termenul dorit."
    ],
    "applications": [
      "Optimizare consum",
      "Control proces",
      "Pornire lină",
      "Automatizări"
    ],
    "maintenance": "Componentele cele mai expuse uzurii sunt ventilatoarele de răcire și condensatoarele din circuitul intermediar, mai ales în medii cu praf sau temperaturi ridicate. Verificarea periodică a curățeniei radiatorului, a strângerii conexiunilor electrice și a parametrilor de funcționare afișați, precum curentul și temperatura internă, previne opririle neplanificate. Piesa de schimb cerută cel mai des este ventilatorul de răcire.",
    "faq": [
      {
        "q": "Ce diferență este între un convertizor de frecvență industrial și un soft-starter?",
        "a": "Convertizorul de frecvență controlează continuu turația motorului pe tot ciclul de funcționare, prin variația frecvenței curentului, în timp ce soft-starterul limitează doar curentul la pornire și oprire, motorul funcționând apoi la turația fixă a rețelei. Pentru procese care au nevoie de reglare fină a vitezei este necesar un convertizor, nu un soft-starter."
      },
      {
        "q": "Cum se alege puterea unui convertizor de frecvență industrial?",
        "a": "Punctul de plecare este puterea și curentul nominal al motorului acționat, la care se adaugă o marjă pentru vârfurile de curent specifice aplicației, de exemplu pornirea sub sarcină a unei benzi transportoare. Se verifică apoi tensiunea de alimentare disponibilă și dacă aplicația cere cuplu constant sau variabil, pentru a alege modul de control potrivit."
      },
      {
        "q": "Ce informații trebuie trimise pentru o ofertă de convertizor de frecvență industrial și cât durează livrarea?",
        "a": "Sunt necesare puterea motorului, tensiunea de alimentare, tipul de aplicație, mediul de montaj și clasa de protecție dorită. Livrarea se stabilește la comandă, orientativ 2-6 săptămâni, în funcție de producător și de complexitatea opțiunilor de comunicare cerute."
      },
      {
        "q": "Ce compatibilitate trebuie verificată între un convertizor de frecvență și motorul existent?",
        "a": "Trebuie verificate puterea și curentul nominal, dar și dacă motorul este proiectat pentru alimentare de la convertizor, cu izolație corespunzătoare a bobinajului, deoarece un motor vechi poate fi deteriorat de tensiunile rapide generate de invertor la turații reduse pe cabluri lungi."
      }
    ],
    "relatedTypes": [
      "motoreductoare-industriale",
      "servomotoare-industriale",
      "motoare-asincrone-industriale"
    ],
    "lastVerified": "2026-09-26"
  },
  {
    "category": "motoare-electrice",
    "slug": "motoare-monofazate-industriale",
    "name": "Motoare monofazate industriale",
    "shortName": "motoare monofazate",
    "lede": "Motorul monofazat industrial este un motor electric alimentat de la rețeaua de 230V monofazat, folosit acolo unde nu există alimentare trifazată sau puterea necesară este mică. Se întâlnește la utilaje auxiliare, pompe mici și echipamente de atelier unde trifazatul ar fi disproporționat.",
    "intro": "Principiul de funcționare diferă de motorul trifazat prin modul de creare a câmpului magnetic învârtitor: monofazatul are nevoie de o înfășurare auxiliară de pornire și, în majoritatea cazurilor, de un condensator de pornire sau de funcționare care defazează curentul. Variantele uzuale sunt cu condensator de pornire, cuplu mare la pornire, potrivit pentru sarcini grele, cu condensator permanent, funcționare mai silențioasă, cuplu de pornire mai mic, și cu spiră în scurtcircuit, construcție simplă, pentru puteri mici.\n\nCeea ce diferențiază un motor monofazat potrivit pentru uz industrial ține de calitatea condensatorului, a cărui durată de viață scade mult la cicluri dese de pornire, de clasa de izolație a bobinajului și de protecția termică internă, care oprește motorul înainte de ardere la suprasarcină sau blocaj mecanic. Carcasa trebuie să aibă o clasă de protecție adecvată mediului, praf sau umiditate, iar rulmenții de calitate reduc vibrația și zgomotul în funcționare continuă.",
    "howToChoose": [
      {
        "criterion": "Puterea și cuplul de pornire necesare",
        "detail": "Sarcinile care pornesc încărcate, precum unele compresoare sau pompe, au nevoie de condensator de pornire cu cuplu mare; un motor doar cu spiră în scurtcircuit la asemenea sarcini duce la blocaj."
      },
      {
        "criterion": "Turația și numărul de poli",
        "detail": "Motoarele cu 2, 4 sau 6 poli dau turații diferite, aproximativ 2800, 1400 sau 900 rot/min; turația greșită înseamnă fie subdimensionare, fie uzură prematură a transmisiei."
      },
      {
        "criterion": "Regimul de funcționare (S1, S2, S3)",
        "detail": "Un motor pentru funcționare continuă diferă constructiv de unul pentru funcționare intermitentă; folosirea unui motor intermitent în regim continuu duce la supraîncălzire rapidă."
      },
      {
        "criterion": "Clasa de protecție IP și mediul de montaj",
        "detail": "Praful, umiditatea sau vaporii dintr-un atelier obișnuit cer minimum IP54; mediile cu spălare frecventă sau umezeală ridicată cer clase superioare."
      },
      {
        "criterion": "Tipul condensatorului, de pornire sau permanent",
        "detail": "Condensatorul de pornire dă cuplu mare, dar se deconectează după pornire; cel permanent rămâne în circuit și oferă funcționare mai stabilă la sarcină variabilă."
      },
      {
        "criterion": "Dimensiunile de montaj și tipul de flanșă",
        "detail": "Talpa sau flanșa trebuie să corespundă exact utilajului existent la o înlocuire; diferențele mici de gabarit pot obliga la modificarea suportului."
      }
    ],
    "whatToSend": [
      "Puterea necesară (kW sau CP) și turația dorită",
      "Tipul sarcinii: pornire în gol sau încărcată",
      "Regimul de funcționare: continuu sau intermitent",
      "Dimensiunile de montaj ale motorului înlocuit",
      "Mediul de montaj: interior, exterior, praf, umiditate",
      "Cantitatea și termenul dorit"
    ],
    "applications": [
      "Ateliere",
      "Utilaje auxiliare",
      "Echipamente service"
    ],
    "maintenance": "Piesa care cedează cel mai des la motoarele monofazate este condensatorul, mai ales la utilaje cu porniri frecvente; un condensator degradat se manifestă prin pornire greoaie sau zgomot de bâzâit fără rotire. Rulmenții și periile, la variantele cu perii, merită verificați periodic pentru joc și uzură, iar ventilația motorului trebuie păstrată liberă de praf pentru a evita supraîncălzirea.",
    "faq": [
      {
        "q": "Ce diferență este între un motor monofazat și unul asincron trifazat de aceeași putere?",
        "a": "Motorul monofazat are nevoie de condensator pentru a porni și oferă de regulă un cuplu de pornire mai mic la aceeași putere nominală; cel trifazat pornește direct, fără condensator, și are randament ceva mai bun. Monofazatul rămâne opțiunea logică doar acolo unde nu există alimentare trifazată disponibilă."
      },
      {
        "q": "Cum se alege puterea corectă a unui motor monofazat industrial?",
        "a": "Se pornește de la puterea cerută de utilaj la sarcină nominală, la care se adaugă o rezervă pentru vârfurile de pornire, mai ales dacă sarcina pornește încărcată. Turația necesară, dată de numărul de poli, și regimul de funcționare, continuu sau intermitent, completează dimensionarea corectă."
      },
      {
        "q": "Ce trebuie trimis pentru o ofertă de motor monofazat și cât durează livrarea?",
        "a": "Trimiteți puterea, turația, dimensiunile de montaj și tipul sarcinii deservite; pe baza lor identificăm un model compatibil sau echivalent. Livrarea depinde de model și producător, fiind la comandă, cu termene orientative de ordinul săptămânilor, mai scurte pentru puterile uzuale și mai lungi pentru variantele speciale."
      },
      {
        "q": "Poate un motor monofazat să fie controlat cu un convertizor de frecvență?",
        "a": "Da, dar doar cu convertizoare special concepute pentru monofazat sau prin convertizoare trifazate alimentate monofazat, cu ieșire trifazată către un motor trifazat; un motor monofazat obișnuit cu condensator nu se pretează la reglaj fin de turație prin convertizor standard."
      }
    ],
    "relatedTypes": [
      "motoare-asincrone-industriale",
      "motoreductoare-industriale",
      "convertizoare-frecventa-industriale"
    ],
    "lastVerified": "2026-09-26"
  }
];
