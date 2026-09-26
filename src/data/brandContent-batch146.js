// Batch 146 - Branduri-500 val 9 EU (sept. 2026): Rosenberg, Comefri, Helios Ventilatoren, Kongskilde, Howden, Mapro, Continental Industrie.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch146 = {
  rosenberg: {
    name: "Rosenberg",
    founded: 1981,
    headquarters: "Künzelsau, Germania",
    overview: `Rosenberg este un producător german de ventilatoare cu sediul la Künzelsau, fondat în 1981 de Karl Rosenberg și trecut din 2023 în proprietatea unei fundații care îi păstrează independența familială. Gama acoperă ventilatoare OEM (axiale, centrifugale, plug fan-uri) pentru integrare în unități de climatizare ale altor producători și ventilatoare pentru instalații tehnice de clădire (tubulare, de canal, de acoperiș), plus soluții de retrofit pentru motoarele vechi din unitățile AHU existente. Pentru piața din România putem oferta atât componente OEM pentru integratori, cât și ventilatoare de canal sau de acoperiș pentru instalații HVAC finite.

Ce diferențiază Rosenberg e paleta largă de motoare EC și AC integrate direct în corpul ventilatorului: seria axială AKFG (EC) ajunge la 32.000 m³/h la diametre de rotor de 500-1000 mm, iar AKFE/AKFD (AC) acoperă până la 24.000 m³/h la aceleași diametre. La plug fan-uri, GKHB cu reglaj continuu 5-100% urcă până la 25.000 m³/h, iar DKNB cu motor IEC ajunge la 60.000 m³/h. Ventilatoarele centrifugale sunt organizate după seriile normate DIN 323 (curbă înapoi) și DIN 232 (curbă înainte), un nomenclator comun și la alți producători germani OEM.

Pentru instalatorii din România, Rosenberg înseamnă acces la componente certificate Eurovent și fabricate conform ISO 9001, utile acolo unde proiectul cere date de performanță verificabile independent.`,
    whyChoose: [
      "Gamă EC și AC completă — de la 12.000 la 60.000 m³/h, motoare integrate în corpul ventilatorului, fără cutii de comandă separate",
      "Nomenclator normat DIN 323/DIN 232 — codurile de tip permit comparație directă cu alți producători OEM de ventilatoare centrifugale",
      "Certificare Eurovent și ISO 9001 — parametrii de debit și presiune declarați sunt verificabili independent, nu doar catalog intern",
      "Plug fan-uri cu reglaj EC continuu — seria GKHB susține control 5-100% fără trepte, util la debite variabile în timp real",
      "Retrofit ECFanGrid pentru AHU vechi — motoare noi montate pe structura existentă, fără înlocuirea întregii unități de climatizare"
    ],
    keyProducts: [
      { name: "Ventilatoare Axiale OEM Seria AKFG/AKFE/AKSE", description: "Ventilatoare axiale cu motor extern-rotor, în variante EC (AKFG, până la 32.000 m³/h) și AC (AKFE/AKFD până la 24.000 m³/h, AKSE/AKSD compact până la 12.000 m³/h), cu diametre de rotor între 315 și 1000 mm. Motor asincron clasa termică F, protecție IP54. Destinate integrării în unități de climatizare și turnuri de răcire ale altor producători OEM." },
      { name: "Ventilatoare Centrifugale OEM Seria EHA/ERA/DHA/DRA", description: "Ventilatoare centrifugale cu palete curbate înapoi (EHAG, EHA, DHA, EHN, serie DIN 323 R20) sau curbate înainte (ERA, DRA, ERN, serie DIN 232), cu motor extern-rotor sau motor IEC standard. Nomenclatorul normat permite integratorilor să compare direct raportul debit-presiune cu alte mărci OEM europene." },
      { name: "Plug Fan-uri Seria GKH/DKH/DKNB", description: "Ventilatoare cu rotor liber, în variante EC cu controler integrat (GKHR, GKHM, GKHS — până la 17.000 m³/h), EC de mare debit (GKHB, până la 25.000 m³/h, reglaj continuu 5-100%) și AC cu motor IEC standard (DKNB, până la 60.000 m³/h). Aplicație tipică: unități de tratare a aerului unde spațiul de montaj e limitat." },
      { name: "Ventilatoare de Canal, Tavan și Acoperiș (gama TBE)", description: "Ventilatoare tubulare și de canal cu motor EC sau AC, ventilatoare de acoperiș, cutii de ventilație tip Airbox (F40, S60, T60) pentru unități compacte de climatizare, plus perdele de aer. Variante rezistente la temperaturi de până la 120°C pentru evacuarea aerului viciat din bucătării industriale." }
    ],
    industries: [
      "HVAC comercial — ventilație mecanică pentru clădiri de birouri și retail",
      "Industrie de proces — integrare OEM în echipamente de climatizare industrială",
      "Refrigerare — ventilatoare axiale pentru condensatoare și evaporatoare",
      "Centre de date — ventilatoare de mare debit pentru răcire tehnică",
      "Transport feroviar — variante certificate pentru climatizarea vagoanelor",
      "Camere curate — ventilatoare cu debit constant pentru filtrare HEPA"
    ],
    infinitrade: `Spunem cinstit: lucrăm cu informațiile publice de pe site-ul Rosenberg și nu avem date proprii de stoc pentru gama lor de ventilatoare. Pentru componente OEM (axiale, centrifugale, plug fan-uri) și pentru ventilatoare de canal sau de acoperiș din gama TBE, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni în funcție de confirmarea producătorului. Ca să pregătim o ofertă corectă avem nevoie de codul de tip exact (de exemplu AKFG, GKHB, EHA), diametrul de rotor și, dacă e cazul, tensiunea de alimentare sau tipul de comandă EC/AC. Nu promitem disponibilitate din depozit pe nicio serie — fiecare comandă se confirmă în avans cu producătorul înainte de a intra în termenul de livrare.`,
    limitation: "Nu putem confirma service în perioada de garanție a producătorului și nici configurarea software a controlerelor EC proprietare — acestea rămân în sarcina rețelei tehnice Rosenberg.",
    productCodes: [
      { code: "AKFG", description: "ventilator axial EC, debit până la 32.000 m³/h, diametru 500-1000 mm" },
      { code: "AKFE / AKFD", description: "ventilator axial AC, debit până la 24.000 m³/h, diametru 500-1000 mm" },
      { code: "AKSE / AKSD", description: "ventilator axial AC compact, debit până la 12.000 m³/h, diametru 315-630 mm" },
      { code: "EHAG", description: "ventilator centrifugal curbat înapoi, serie normată DIN 323 R20" },
      { code: "EHA / DHA", description: "ventilator centrifugal curbat înapoi, motor extern-rotor sau IEC" },
      { code: "EHN", description: "ventilator centrifugal curbat înapoi, variantă compactă seria EH" },
      { code: "ERA / DRA", description: "ventilator centrifugal curbat înainte, serie normată DIN 232" },
      { code: "ERN", description: "ventilator centrifugal curbat înainte, variantă compactă" },
      { code: "GKHR / GKHM / GKHS", description: "plug fan EC curbat înapoi, debit până la 17.000 m³/h" },
      { code: "DKHR / DKHM", description: "plug fan AC curbat înapoi, debit până la 15.000 m³/h" },
      { code: "GKHB", description: "plug fan EC, debit până la 25.000 m³/h, reglaj continuu 5-100%" },
      { code: "DKNB", description: "plug fan cu motor IEC, debit până la 60.000 m³/h" },
      { code: "Airbox F40", description: "unitate compactă de tratare a aerului, gamă mică" },
      { code: "Airbox S60", description: "unitate modulară de tratare a aerului, gamă medie" },
      { code: "Airbox T60", description: "unitate modulară de tratare a aerului, gamă mare" },
      { code: "ECFanGrid", description: "perete de ventilatoare EC pentru retrofit unități AHU existente" }
    ],
    faq: [
      { q: "Ce tipuri de ventilatoare produce Rosenberg?", a: "Rosenberg produce ventilatoare axiale, centrifugale și plug fan-uri pentru integrare OEM, plus ventilatoare de canal, tavan și acoperiș pentru instalații tehnice de clădire. Gama OEM acoperă debite de la câteva mii până la 60.000 m³/h, cu motoare EC sau AC integrate direct în corpul ventilatorului. Compania e din Künzelsau, Germania, și fabrică inclusiv unități compacte de tratare a aerului sub numele Airbox." },
      { q: "Cum aleg tipul corect de ventilator axial Rosenberg pentru un AHU?", a: "Pornești de la debitul necesar (m³/h) și presiunea statică a instalației, apoi verifici diametrul de rotor compatibil cu spațiul disponibil. Seria AKFG (EC) acoperă până la 32.000 m³/h la diametre 500-1000 mm, iar AKSE/AKSD (AC compact) rămân sub 12.000 m³/h la 315-630 mm. Pentru o selecție corectă, trimite-ne codul curent al ventilatorului de înlocuit sau parametrii proiectului." },
      { q: "Ce diferență e între seriile EC și AC la Rosenberg?", a: "Seriile EC (electronic comutate) au controler integrat și permit reglaj continuu de turație fără echipament extern, util la debite variabile. Seriile AC folosesc motor asincron extern-rotor, mai simplu și adesea suficient pentru instalații cu debit constant. Alegerea depinde de cât de des variază sarcina termică sau de proces a instalației tale." },
      { q: "Livrați ventilatoare Rosenberg în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE; termenul orientativ este de 2-6 săptămâni, în funcție de confirmarea producătorului pentru codul de tip solicitat. Nu ținem aceste game pe raft propriu, deci fiecare comandă pornește cu o verificare de disponibilitate la Rosenberg înainte de confirmarea termenului final." },
      { q: "Ce trebuie să trimit pentru o ofertă pe un plug fan Rosenberg?", a: "Ai nevoie de codul de tip (de exemplu GKHB sau DKNB), debitul și presiunea necesare, diametrul de montaj disponibil și tipul de alimentare electrică. Dacă înlocuiești un plug fan existent, o poză cu plăcuța de tip a unității vechi ne ajută să identificăm rapid echivalentul corect din gama Rosenberg." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "OEM Axial Fans", url: "https://www.rosenberg-gmbh.com/en/oem-products/oem-axialfans/", publisher: "Rosenberg Ventilatoren GmbH", accessed: "2026-09-26" },
      { title: "Plugfans", url: "https://www.rosenberg-gmbh.com/en/oem-products/plugfans/", publisher: "Rosenberg Ventilatoren GmbH", accessed: "2026-09-26" },
      { title: "OEM Centrifugal Fans", url: "https://www.rosenberg-gmbh.com/en/oem-products/oem-centrifugal-fans/", publisher: "Rosenberg Ventilatoren GmbH", accessed: "2026-09-26" },
      { title: "About Us", url: "https://www.rosenberg-gmbh.com/en/about-us/", publisher: "Rosenberg Ventilatoren GmbH", accessed: "2026-09-26" }
    ]
  },
  comefri: {
    name: "Comefri",
    headquarters: "Udine, Italia",
    overview: `Comefri e un producător italian de ventilatoare centrifugale și axiale, cu sediul la Udine și fabrici proprii în Italia, Germania, Marea Britanie, Franța, SUA, China și Turcia. Portofoliul acoperă ventilatoare centrifugale cu dublu flux de tip TLZ și TLI, folosite în unități de climatizare și ventilație de proces, plus ventilatoare axiale de mare diametru pentru aplicații industriale. Pentru clienții din România, gama Comefri e relevantă mai ales acolo unde un proiect cere un ventilator centrifugal compact, cu debit mare la gabarit redus, sau un axial de diametru foarte mare pentru turnuri de răcire.

Seria TLZ, cu rotoare cu paletă curbată înainte, acoperă dimensiuni de la 160 la 1000 mm, cu debite între 500 și 100.000 m³/h la configurație simplă și până la 180.000 m³/h la montaj dublu (twin), presiuni de până la 2200 Pa și puteri de motor de până la 40 kW. Seria TLI, echivalentul dimensionat în inch (7"-18"), acoperă un interval similar de debit, exprimat de producător în cfm. Ventilatoarele axiale Comefri sunt împărțite pe trei clase de diametru — 500-1250 mm, 1400-2450 mm și 2150-4900 mm — fiecare clasă cu propriul plafon de debit și presiune, ultima ajungând la aproape 600.000 m³/h la presiuni joase, tipic pentru condensatoare evaporative de mari dimensiuni.

Prezența fabricilor pe șase continente face din Comefri o opțiune pentru proiecte cu componentă de export sau pentru linii OEM care au nevoie de aceeași specificație tehnică în mai multe țări. În România, gama se pretează la climatizare de proces, ventilație industrială și aplicații unde compactitatea rotorului dublu-flux contează mai mult decât la un ventilator axial clasic.`,
    whyChoose: [
      "Rotor dublu-flux TLZ/TLI — debit mare la gabarit axial redus, util unde spațiul de montaj e limitat",
      "Trei clase de axiale pe diametru — de la 500 mm până la 4900 mm, acoperă și aplicații de mare capacitate",
      "Fabricație pe șapte locații — specificații tehnice identice indiferent de țara de livrare a proiectului",
      "Materiale rezistente la coroziune — pale din aliaj de aluminiu anticorodal la seriile axiale",
      "Game normate pe pași de diametru — comparație directă cu alte serii europene de ventilatoare centrifugale"
    ],
    keyProducts: [
      { name: "Ventilatoare Centrifugale Seria TLZ", description: "Ventilatoare centrifugale cu dublu flux și paletă curbată înainte, în 17 dimensiuni de la TLZ 160 la TLZ 1000, plus configurații twin (BL, BP, BT) pe mai multe diametre combinate. Debit între 500 și 100.000 m³/h la fan simplu, până la 180.000 m³/h la twin, presiune maximă 2200 Pa și putere de motor de până la 40 kW. Carcasă din tablă galvanizată, gură de aspirație profilată aerodinamic pentru randament ridicat." },
      { name: "Ventilatoare Centrifugale Seria TLI", description: "Varianta dimensionată în inch a seriei TLZ, cu mărimi între 7 și 18 țoli și aceleași configurații twin BL, BP, BT. Debit publicat între 400 și 91.000 cfm la fan simplu și 800-135.000 cfm la twin, cu presiuni de până la 8 in. wg simplu și 4,5 in. wg twin. Aplicație tipică: proiecte de export unde specificația e cerută în unități imperiale." },
      { name: "Ventilatoare Axiale de Proces", description: "Ventilatoare axiale cu pale din aliaj de aluminiu extrudat sau turnat, împărțite pe trei clase de diametru: 500-1250 mm (până la 152.000 m³/h, 2000 Pa), 1400-2450 mm (până la 280.000 m³/h, 1500 Pa) și 2150-4900 mm (până la 595.000 m³/h, 870 Pa). Butuc și ax din oțel galvanizat sau inoxidabil, potrivite pentru condensatoare evaporative și turnuri de răcire de mare capacitate." }
    ],
    industries: [
      "Climatizare de proces — ventilatoare centrifugale pentru unități de tratare a aerului",
      "Marină și offshore — variante rezistente la mediul salin",
      "Industria alimentară — ventilatoare pentru linii de proces cu cerințe de igienă",
      "Farmaceutic și medical — debite constante pentru camere cu presiune controlată",
      "Automotive — ventilatoare axiale pentru linii de vopsire și uscare",
      "Rezidențial și comercial — ventilatoare de evacuare pentru clădiri mari"
    ],
    infinitrade: `Ce putem și ce nu putem confirma vine strict din paginile publice Comefri, fără cifre interne de stoc de partea noastră. Pentru seriile TLZ, TLI și pentru axialele de proces aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă, în funcție de dimensiune și de confirmarea fabricii care preia comanda. Pentru o ofertă corectă avem nevoie de codul seriei (de exemplu TLZ 500 sau clasa de diametru la axiale), debitul și presiunea cerute de proiect. Nu ținem această gamă pe raft — fiecare comandă pornește cu verificarea disponibilității la fabrica desemnată de Comefri pentru regiunea noastră.`,
    limitation: "Nu putem confirma din ce fabrică anume (Italia, Germania sau altă locație) va fi livrată o comandă anume, decizia aparținând rețelei Comefri.",
    productCodes: [
      { code: "TLZ 200", description: "ventilator centrifugal dublu-flux, curbă înainte, seria mică" },
      { code: "TLZ 250", description: "ventilator centrifugal dublu-flux, debit mediu" },
      { code: "TLZ 315", description: "ventilator centrifugal dublu-flux, seria intermediară" },
      { code: "TLZ 355", description: "ventilator centrifugal dublu-flux, debit mediu-mare" },
      { code: "TLZ 400", description: "ventilator centrifugal dublu-flux, seria de proces" },
      { code: "TLZ 450", description: "ventilator centrifugal dublu-flux, presiune ridicată" },
      { code: "TLZ 500", description: "ventilator centrifugal dublu-flux, debit mare" },
      { code: "TLZ 560", description: "ventilator centrifugal dublu-flux, seria industrială" },
      { code: "TLZ 630", description: "ventilator centrifugal dublu-flux, gabarit mare" },
      { code: "TLZ 710", description: "ventilator centrifugal dublu-flux, debit foarte mare" },
      { code: "TLZ 800", description: "ventilator centrifugal dublu-flux, seria de capacitate mare" },
      { code: "TLZ 900", description: "ventilator centrifugal dublu-flux, aproape de vârful gamei" },
      { code: "TLZ 1000", description: "ventilator centrifugal dublu-flux, mărimea de vârf a seriei" },
      { code: "TLZ 160-450 BL", description: "configurație twin, montaj în linie, presiune joasă" },
      { code: "TLZ 160-560 BP", description: "configurație twin, montaj paralel, presiune medie" },
      { code: "TLZ 315-1000 BT", description: "configurație twin, montaj în tandem, debit mare" },
      { code: "TLI 7-18 BL/BP/BT", description: "serie centrifugală dimensionată în inch, echivalent TLZ" },
      { code: "Axial clasa 500-1250 mm", description: "ventilator axial, debit până la 152.000 m³/h" },
      { code: "Axial clasa 1400-2450 mm", description: "ventilator axial, debit până la 280.000 m³/h" },
      { code: "Axial clasa 2150-4900 mm", description: "ventilator axial de mare diametru, presiune joasă" }
    ],
    faq: [
      { q: "Ce tip de ventilatoare produce Comefri?", a: "Comefri produce ventilatoare centrifugale dublu-flux (seriile TLZ și TLI) și ventilatoare axiale de diametru mare, de la 500 până la aproape 4900 mm. Compania e italiană, cu sediul la Udine, și are fabrici proprii pe șapte locații din Europa, America și Asia. Gama e orientată spre climatizare de proces și ventilație industrială, nu spre ventilatoare rezidențiale mici." },
      { q: "Cum aleg dimensiunea corectă din seria TLZ Comefri?", a: "Pornești de la debitul necesar în m³/h și presiunea disponibilă a instalației; seria TLZ acoperă de la 500 m³/h (TLZ 160) până la 100.000 m³/h (TLZ 1000) la configurație simplă. Dacă proiectul cere debit peste acest plafon, se trece la o configurație twin (BL, BP sau BT), care dublează practic capacitatea instalată." },
      { q: "Ce diferență e între seria TLZ și TLI la Comefri?", a: "Diferența e sistemul de unități: TLZ e dimensionată în milimetri și debit în m³/h, iar TLI folosește țoli și cfm, fiind gândită pentru piețe unde specificația tehnică vine în unități imperiale. Performanța relativă pe aceeași treaptă de mărime e comparabilă, alegerea ținând de standardul cerut de proiectul tău." },
      { q: "Livrați ventilatoare Comefri în România și în cât timp?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de mărimea ventilatorului și de fabrica Comefri care confirmă comanda. Nu promitem disponibilitate din depozit pe nicio serie, așa că verificăm întâi disponibilitatea exactă înainte de a confirma termenul final clientului." },
      { q: "Ce informații trebuie să trimit pentru o ofertă pe un ventilator axial Comefri?", a: "Ai nevoie de clasa de diametru (500-1250, 1400-2450 sau 2150-4900 mm), debitul și presiunea necesare aplicației, plus materialul cerut pentru pale dacă mediul e coroziv. Pentru condensatoare evaporative sau turnuri de răcire, trimite și temperatura de lucru, ca să confirmăm compatibilitatea materialului de ax și butuc." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "TLZ Serie", url: "https://www.comefri.com/TLZ-serie", publisher: "Comefri S.p.A.", accessed: "2026-09-26" },
      { title: "TLI Serie", url: "https://www.comefri.com/tli-serie", publisher: "Comefri S.p.A.", accessed: "2026-09-26" },
      { title: "Axial Fans", url: "https://www.comefri.com/axial", publisher: "Comefri S.p.A.", accessed: "2026-09-26" }
    ]
  },
  helios: {
    name: "Helios Ventilatoren",
    headquarters: "Villingen-Schwenningen, Germania",
    overview: `Helios Ventilatoren este un producător german de sisteme de ventilație, cu sediul la Villingen-Schwenningen, activ atât pe rezidențial (ventilatoare mici de cameră, ventilație cu recuperare de căldură) cât și pe comercial și industrial (ventilatoare de canal, de acoperiș, antiex, pentru evacuare de fum). Pentru piața din România, gama relevantă e cea de ventilatoare de canal și de acoperiș pentru clădiri comerciale, plus unitățile compacte cu recuperare de căldură.

Tehnic, Helios acoperă un interval larg de presiune: axialele de joasă presiune ajung la 150.000 m³/h și 1100 Pa, cele de medie presiune urcă la 1400 Pa la debite de până la 32.000 m³/h, iar seria VAR de mare presiune e disponibilă în 14 mărimi. Ventilatoarele de acoperiș ajung la 70.000 m³/h, cu variante de evacuare verticală, orizontală sau diagonală și opțiuni certificate pentru temperaturi ridicate (clasa T120, 120°C) sau pentru evacuare de fum. Unitatea Helios AIR1, cu recuperare de căldură, acoperă până la 15.000 m³/h cu peste 100 de opțiuni de configurare.

Pentru instalatori din România, Helios Ventilatoren oferă acces la ventilatoare certificate ATEX pentru zone cu risc de explozie și la variante conforme ecodesign UE, utile la retehnologizarea instalațiilor de ventilație din clădiri comerciale sau parcări subterane.`,
    whyChoose: [
      "Interval de presiune larg — de la axiale de joasă presiune (1100 Pa) la seria VAR de mare presiune, 14 mărimi disponibile",
      "Variante certificate pentru foc și fum — ventilatoare de acoperiș și de canal în clase de temperatură F300 până la F600",
      "Ventilatoare antiex ATEX — pentru amestecuri explozive de gaz sau vapori în medii industriale",
      "Unități compacte cu recuperare de căldură — Helios AIR1 acoperă până la 15.000 m³/h, cu peste 100 de configurații",
      "Conformitate ecodesign UE — util la înlocuirea ventilatoarelor vechi în clădiri care trebuie să respecte normele actuale de eficiență"
    ],
    keyProducts: [
      { name: "Ventilatoare de Cameră MiniVent M1", description: "Ventilator mic pentru montaj pe perete, tavan sau fereastră, gândit pentru presiune ridicată, funcționare silențioasă și consum redus. Aplicație tipică: băi, bucătării mici sau spații fără sistem de ventilație centralizată, unde e nevoie de o soluție punctuală de extracție a aerului viciat." },
      { name: "Unități Compacte cu Recuperare de Căldură AIR1 și KWL EC", description: "Unități de ventilație controlată cu recuperare de căldură, cu motor EC, pentru clădiri rezidențiale sau nerezidențiale. Helios AIR1 acoperă până la 15.000 m³/h cu peste 100 de opțiuni de configurare a carcasei și a schimbătorului de căldură; gama KWL EC completează oferta cu variante centralizate și descentralizate." },
      { name: "Ventilatoare de Canal GigaBox, MegaBox, InlineVent, SlimVent, SilentBox", description: "Familie de ventilatoare radiale montate pe conductă, pentru debite medii-mari împotriva unor rezistențe aeraulice ridicate. GigaBox T120 și MegaBox tratează aer murdar, gras sau fierbinte până la 120°C; SilentBox adaugă fonoizolare; InlineVent și SlimVent acoperă variantele compacte." },
      { name: "Ventilatoare de Acoperiș și Axiale de Presiune Medie/Mare", description: "Ventilatoare de acoperiș cu evacuare verticală, orizontală sau diagonală, până la 70.000 m³/h, disponibile în variante T120, antiex sau pentru evacuare de fum. Seria de axiale de presiune medie acoperă până la 32.000 m³/h la 1400 Pa, iar seria VAR de mare presiune vine în 14 mărimi pentru instalații cu rezistență ridicată a rețelei de canale." }
    ],
    industries: [
      "Rezidențial — ventilație controlată cu recuperare de căldură pentru locuințe noi",
      "Comercial — ventilatoare de canal și de acoperiș pentru clădiri de birouri",
      "Industrial — ventilatoare antiex pentru zone cu risc de explozie",
      "Sănătate — debite constante pentru spații cu cerințe de calitate a aerului",
      "Parcări subterane — ventilatoare pentru evacuare de fum și gaze de eșapament",
      "Retail — unități compacte de tratare a aerului pentru spații comerciale"
    ],
    infinitrade: `Nu deținem date proprii despre stocurile Helios; tot ce scriem aici provine din surse publice ale producătorului german. Pentru ventilatoarele de canal, de acoperiș și pentru unitățile cu recuperare de căldură aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă. Pentru o ofertă corectă avem nevoie de seria sau familia de produs (de exemplu GigaBox, MegaBox sau AIR1), debitul necesar și, la variantele antiex sau rezistente la temperatură, cerințele de certificare ale proiectului. Nu ținem această gamă pe raft pe nicio gamă Helios — fiecare comandă se confirmă întâi cu producătorul.`,
    limitation: "Nu putem confirma configurarea exactă în instrumentul HeliosSelect al producătorului și nici disponibilitatea unei anumite variante regionale de motor pentru piața din România.",
    productCodes: [
      { code: "MiniVent M1", description: "ventilator de cameră mic, montaj perete, tavan sau fereastră" },
      { code: "Helios AIR1", description: "unitate compactă cu recuperare de căldură, debit până la 15.000 m³/h" },
      { code: "KWL EC", description: "unitate de ventilație controlată cu recuperare de căldură, motor EC" },
      { code: "GigaBox", description: "ventilator de canal tip cutie, debite medii-mari" },
      { code: "GigaBox T120", description: "variantă pentru aer murdar și fierbinte, până la 120°C" },
      { code: "MegaBox", description: "ventilator radial pentru aer gras, cald și umed" },
      { code: "MegaBox Ex", description: "variantă antiex pentru amestecuri explozive de gaz sau vapori" },
      { code: "InlineVent", description: "ventilator tubular de linie, montaj direct pe conductă" },
      { code: "SlimVent", description: "ventilator tubular compact, gabarit redus" },
      { code: "SilentBox", description: "ventilator radial-tubular fonoizolat, presiune ridicată" },
      { code: "VAR", description: "ventilator de mare presiune, 14 mărimi disponibile" },
      { code: "Axial-Niederdruckventilatoren", description: "ventilator axial de joasă presiune, debit până la 150.000 m³/h la 1100 Pa" },
      { code: "Axial-Mitteldruckventilatoren", description: "ventilator axial de medie presiune, debit până la 32.000 m³/h la 1400 Pa" },
      { code: "VD", description: "ventilator de acoperiș cu evacuare verticală, seria de bază Helios" },
      { code: "RD", description: "ventilator de acoperiș cu evacuare orizontală" },
      { code: "DVEC", description: "ventilator de acoperiș cu evacuare diagonală, carcasă din plastic rezistentă la intemperii" },
      { code: "EX", description: "variantă antiex a ventilatoarelor de acoperiș, conform ATEX 2014/34/UE, până la 13.000 m³/h" }
    ],
    faq: [
      { q: "Ce produce Helios Ventilatoren?", a: "Helios produce ventilatoare pentru locuințe (ventilatoare mici de cameră, unități cu recuperare de căldură) și pentru clădiri comerciale sau industriale (ventilatoare de canal, de acoperiș, antiex, pentru evacuare de fum). Compania e germană, cu sediul la Villingen-Schwenningen, și acoperă debite de la câțiva metri cubi pe oră până la 70.000 m³/h la ventilatoarele de acoperiș." },
      { q: "Cum aleg un ventilator de acoperiș Helios pentru o hală industrială?", a: "Pornești de la debitul de aer necesar pentru hala respectivă și de la direcția de evacuare dorită — verticală, orizontală sau diagonală; gama Helios de acoperiș acoperă până la 70.000 m³/h. Dacă hala are risc de explozie sau cerințe de evacuare a fumului, trebuie precizat acest lucru din start, pentru varianta certificată corespunzătoare." },
      { q: "Ce este seria VAR de la Helios Ventilatoren?", a: "VAR este seria de ventilatoare de mare presiune a Helios, disponibilă în 14 mărimi, gândită pentru instalații unde rețeaua de canale are o rezistență aeraulică ridicată și unde un ventilator axial standard nu ar mai fi eficient. Se folosește de obicei în combinație cu tubulatură lungă sau cu filtre care introduc pierdere de presiune suplimentară." },
      { q: "Livrați ventilatoare Helios în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de familia de produs și de confirmarea producătorului. Nu ținem această gamă pe raft propriu, așa că verificăm disponibilitatea exactă a variantei cerute înainte de a confirma termenul de livrare." },
      { q: "Ce trebuie să trimit pentru o ofertă pe o unitate Helios AIR1?", a: "Ai nevoie de debitul de aer proaspăt necesar (până la 15.000 m³/h pentru AIR1), tipul clădirii (rezidențială sau nerezidențială) și dacă instalația cere montaj central sau descentralizat. Cu peste 100 de opțiuni de configurare disponibile la această unitate, cu cât detaliezi mai clar aplicația, cu atât oferta va fi mai apropiată de nevoia reală." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Axial- und VAR-Ventilatoren", url: "https://www.heliosventilatoren.de/de/produkte/axial-und-var-ventilatoren", publisher: "Helios Ventilatoren GmbH + Co KG", accessed: "2026-09-26" },
      { title: "Dachventilatoren", url: "https://www.heliosventilatoren.de/de/produkte/dachventilatoren", publisher: "Helios Ventilatoren GmbH + Co KG", accessed: "2026-09-26" },
      { title: "Boxventilatoren", url: "https://www.heliosventilatoren.de/de/produkte/boxventilatoren", publisher: "Helios Ventilatoren GmbH + Co KG", accessed: "2026-09-26" },
      { title: "Rohrventilatoren", url: "https://www.heliosventilatoren.de/de/produkte/rohrventilatoren", publisher: "Helios Ventilatoren GmbH + Co KG", accessed: "2026-09-26" }
    ]
  },
  kongskilde: {
    name: "Kongskilde",
    headquarters: "Sorø, Danemarca",
    overview: `Kongskilde Industries este un producător danez de suflante și sisteme de transport pneumatic, cu sediul la Sorø, orientat spre manipularea materialelor în industria maselor plastice, hârtiei și ambalajelor. Gama acoperă unități cu turație fixă (TRL, FRL, FEA), unități cu turație variabilă (MultiAir) și suflante de presiune medie-mare pentru transport pe distanțe lungi (MTD, BTD/BTK/BPD/BPK). Pentru clienții din România, Kongskilde înseamnă acces la suflante de linie și componente pentru transport pneumatic al granulelor de plastic sau al deșeurilor de proces.

Tehnic, seria MTD acoperă debite între 750 și 11.000 m³/h la o presiune maximă de 440 mm coloană de apă, cu puteri între 1,1 și 22 kW. Familia BTD/BTK/BPD/BPK, în patru variante de cuplare, urcă până la 37.000 m³/h la presiuni de până la 1170 mm coloană de apă. Seria MultiAir, cu turație variabilă între 0 și 4800 rpm, acoperă puteri de la 1,5 kW (MultiAir 1000) până la 55 kW (MultiAir 4000).

Pentru fabricile din România cu linii de extrudare, injecție sau reciclare a plasticului, gama Kongskilde acoperă atât suflanta principală, cât și piesele de bază ale acesteia, cu mențiunea că orice comandă trece printr-o verificare de disponibilitate la producător.`,
    whyChoose: [
      "Turație variabilă la seria MultiAir — reglaj de putere între 1,5 și 55 kW, util la debite de proces variabile",
      "Presiune ridicată la familia BTD/BTK/BPD/BPK — până la 1170 mm coloană de apă, pentru rețele de transport cu rezistență mare",
      "Serie MTD dedicată transportului pneumatic — 750-11.000 m³/h la presiune maximă normată de 440 mm coloană de apă",
      "Patru variante de cuplare la aceeași familie de presiune — alegere directă în funcție de spațiul de montaj disponibil",
      "Sisteme complete de aspirație — SUC, MultiEvacuator și PolyVac completează suflanta cu partea de captare și separare a materialului"
    ],
    keyProducts: [
      { name: "Suflante cu Turație Variabilă Seria MultiAir", description: "Suflante cu convertizor de frecvență integrat, turație reglabilă între 0 și 4800 rpm, în patru trepte de putere: MultiAir 1000 (1,5-5,5 kW), MultiAir FC 2000 (7,5-22 kW), MultiAir FCE 3500 (37 kW) și MultiAir 4000/FC 4000/FCE 4000 (22-55 kW). Utile unde debitul de transport pneumatic variază pe parcursul zilei de producție, fără să fie nevoie de o suflantă supradimensionată permanent." },
      { name: "Suflante cu Turație Fixă Seria TRL, FRL, FEA", description: "Suflante compacte cu motor la turație fixă, în douăsprezece trepte de putere pentru seria TRL (de la TRL 20, 1,5 kW, la TRL 1000, 75 kW) și trepte mai mici la FRL/FEA (de la 0,75 kW la seria 10). Aplicație tipică: transport pneumatic de scurtă distanță sau aspirație locală în linii de producție." },
      { name: "Suflante de Presiune Medie Seria MTD", description: "Suflante cu rotor drept, în șase mărimi de la MTD 20 la MTD 40, cu debite între 750 și 11.000 m³/h și presiune maximă de 440 mm coloană de apă, puteri de motor între 1,1 și 22 kW. Folosite frecvent la transportul pneumatic al granulelor de plastic sau al pulberilor ușoare pe distanțe medii." },
      { name: "Suflante de Presiune Înaltă și Sisteme de Aspirație", description: "Familia BTD/BTK/BPD/BPK acoperă 800-37.000 m³/h la presiuni de până la 1170 mm coloană de apă, disponibilă în variante 50 sau 60 Hz. Completează gama sistemele SUC de aspirație-transport, MultiEvacuator pentru evacuarea centralizată a deșeurilor de proces și PolyVac pentru manipularea granulelor de plastic direct de la utilajul de producție." }
    ],
    industries: [
      "Industria maselor plastice — transport pneumatic al granulelor și pulberilor",
      "Ambalaje — alimentarea liniilor de extrudare film și folie",
      "Reciclare — aspirația și transportul deșeurilor de producție",
      "Industria hârtiei — transport pneumatic de material fibros",
      "Injecție mase plastice — alimentarea automată a preselor cu granulat",
      "Producție de folie suflată — sisteme de aspirație centralizată a deșeului de linie"
    ],
    infinitrade: `Fără date proprii de stoc pentru Kongskilde — informațiile tehnice de mai jos vin direct din paginile oficiale ale producătorului danez. Pentru suflante și componentele sistemelor de transport pneumatic aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă. Ca să pregătim o ofertă, avem nevoie de seria și mărimea suflantei (de exemplu MTD 30 sau TRL 200), presiunea de lucru necesară și, dacă înlocuiești o unitate existentă, plăcuța de tip a suflantei vechi. Nu promitem disponibilitate din depozit pe nicio serie Kongskilde.`,
    limitation: "Nu putem confirma compatibilitatea automată a pieselor de schimb cu suflante Kongskilde mai vechi de câteva generații, fără verificare directă a numărului de serie.",
    productCodes: [
      { code: "MultiAir 1000", description: "suflantă cu turație variabilă, putere 1,5-5,5 kW" },
      { code: "MultiAir FC 2000", description: "suflantă cu turație variabilă, putere 7,5-22 kW" },
      { code: "MultiAir FCE 3500", description: "suflantă cu turație variabilă, putere 37 kW" },
      { code: "MultiAir 4000 / FC 4000 / FCE 4000", description: "suflantă cu turație variabilă, putere 22-55 kW" },
      { code: "TRL 20", description: "suflantă turație fixă, putere 1,5 kW" },
      { code: "TRL 55", description: "suflantă turație fixă, putere 4 kW" },
      { code: "TRL 100", description: "suflantă turație fixă, putere 7,5 kW" },
      { code: "TRL 200", description: "suflantă turație fixă, putere 15 kW" },
      { code: "TRL 500", description: "suflantă turație fixă, putere 37 kW" },
      { code: "TRL 1000", description: "suflantă turație fixă, putere 75 kW" },
      { code: "FRL 10", description: "suflantă mică turație fixă, putere 0,75 kW" },
      { code: "FEA 10", description: "aspirator turație fixă, putere 0,75 kW" },
      { code: "MTD 20", description: "suflantă presiune medie, debit 750-2.500 m³/h" },
      { code: "MTD 25", description: "suflantă presiune medie, debit 1.500-5.000 m³/h" },
      { code: "MTD 30", description: "suflantă presiune medie, debit 2.500-7.000 m³/h" },
      { code: "MTD 35", description: "suflantă presiune medie, debit 4.000-9.000 m³/h" },
      { code: "MTD 40", description: "suflantă presiune medie, debit 6.000-11.000 m³/h" },
      { code: "BTD/BTK/BPD/BPK", description: "familie suflante presiune înaltă, până la 37.000 m³/h" },
      { code: "SUC", description: "sistem de aspirație și transport pneumatic combinat" },
      { code: "PolyVac", description: "sistem de aspirație a granulelor direct de la utilaj" }
    ],
    faq: [
      { q: "Ce produce Kongskilde?", a: "Kongskilde produce suflante pentru transport pneumatic și sisteme complete de aspirație a materialelor, folosite mai ales în industria maselor plastice, a hârtiei și a ambalajelor. Compania e daneză, cu sediul la Sorø, și acoperă atât suflante cu turație fixă cât și variantele cu turație variabilă din seria MultiAir, plus sisteme de aspirație precum PolyVac." },
      { q: "Cum aleg suflanta corectă din seria MTD Kongskilde?", a: "Pornești de la debitul de transport necesar, între 750 și 11.000 m³/h în funcție de mărime, și de presiunea maximă a instalației, care nu depășește 440 mm coloană de apă pe această serie. Dacă rețeaua de transport are rezistență mai mare, seria BTD/BTK/BPD/BPK acoperă presiuni de până la 1170 mm coloană de apă." },
      { q: "Ce diferență e între seriile TRL și MultiAir la Kongskilde?", a: "TRL are turație fixă, e mai simplă și potrivită acolo unde debitul de transport rămâne constant. MultiAir are convertizor de frecvență integrat și turație reglabilă până la 4800 rpm, utilă unde producția variază și vrei să eviți supradimensionarea permanentă a suflantei." },
      { q: "Livrați suflante Kongskilde în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de seria și mărimea suflantei confirmate de producător. Nu ținem aceste suflante pe raft propriu, deci fiecare comandă pornește cu o verificare de disponibilitate înainte de termenul final." },
      { q: "Ce trebuie să trimit pentru o ofertă la o suflantă Kongskilde?", a: "Ai nevoie de seria și mărimea (de exemplu TRL 200 sau MTD 30), debitul și presiunea de lucru ale instalației, plus frecvența rețelei electrice (50 sau 60 Hz). Dacă înlocuiești o suflantă existentă, plăcuța de tip a unității vechi ne ajută să identificăm rapid echivalentul potrivit." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "MultiAir Blowers", url: "https://kongskilde-industries.com/industrial/product/multiair-blowers/", publisher: "Kongskilde Industries", accessed: "2026-09-26" },
      { title: "TRL Blowers", url: "https://kongskilde-industries.com/industrial/product/trl-blowers/", publisher: "Kongskilde Industries", accessed: "2026-09-26" },
      { title: "MTD Blowers", url: "https://kongskilde-industries.com/industrial/product/mtd-blowers/", publisher: "Kongskilde Industries", accessed: "2026-09-26" },
      { title: "Conveying Blowers", url: "https://www.kongskilde-industries.com/products/", publisher: "Kongskilde Industries", accessed: "2026-09-26" }
    ]
  },
  howden: {
    name: "Howden",
    overview: `Howden este un grup britanic cu peste 160 de ani de activitate în ventilatoare industriale, suflante și compresoare, trecut din 2023 în componența grupului american Chart Industries. Sub umbrela Howden funcționează branduri istorice — Spencer (suflante centrifugale), HV-TURBO și Turblex (suflante turbo), Kühnle Kopp Kausch (compresoare turbo), Rothemühle (schimbătoare rotative de căldură) și Peter Brotherhood (compresoare cu piston, turbine cu abur). Pentru România, gama relevantă e cea de ventilatoare industriale și suflante centrifugale sau cu lobi, pentru procese cu cerințe ridicate de debit sau rezistență la temperatură.

Portofoliul de ventilatoare acoperă variante axiale pentru alimentare critică cu aer, centrifugale pentru curenți de aer contaminat sau la temperatură ridicată, și turbo fans pentru presiuni mari. Familia Spencer acoperă suflante monoetajate cu debit de până la 50.000 ICFM și presiune de 3,5 PSIG, respectiv multietajate cu diametre de carcasă între 14 și 88 țoli, capabile de până la 25.000 ICFM sau 15 inch Hg vacuum. Suflantele volumetrice tip Roots completează gama la presiune joasă-medie.

Pentru instalațiile industriale din România, Howden înseamnă acces la echipamente certificate ISO 9001, cu mențiunea că disponibilitatea exactă pe fiecare familie se confirmă direct cu rețeaua producătorului la momentul comenzii.`,
    whyChoose: [
      "Portofoliu multi-brand sub Howden — Spencer, HV-TURBO, Turblex și Kühnle Kopp Kausch acoperă diverse tipuri de suflante și compresoare",
      "Suflante multietajate de mare capacitate — diametre de carcasă între 14 și 88 țoli, până la 25.000 ICFM",
      "Suflante monoetajate pentru aerare și ventilație — până la 50.000 ICFM la presiune joasă",
      "Certificare ISO 9001 pe divizia de ventilatoare axiale — relevantă pentru proiecte cu cerințe de calitate documentată",
      "Gamă completă de compresoare — de la piston (Peter Brotherhood) la șurub și turbo (Kühnle Kopp Kausch)"
    ],
    keyProducts: [
      { name: "Ventilatoare Industriale Axiale, Centrifugale și Turbo", description: "Ventilatoare axiale pentru alimentare critică cu aer în procese industriale, ventilatoare centrifugale pentru curenți de aer contaminat sau cu temperatură ridicată și turbo fans pentru presiuni mari, folosite în petrol și gaze, generare de energie, metale și minerit. Divizia de ventilatoare axiale a grupului deține certificări ISO 9001, ISO 14001 și ISO 45001." },
      { name: "Suflante Centrifugale Spencer, HV-TURBO și Turblex", description: "Suflante monoetajate (scroll, aerare-ventilație, presiune RB) cu debit de până la 50.000 ICFM și presiune de 3,5 PSIG, respectiv suflante multietajate în trei variante constructive, cu diametre de carcasă între 14 și 88 țoli, capabile de până la 25.000 ICFM, 20 PSIG sau vacuum de 15 inch Hg. Suflantele și gaz boosterele personalizate acoperă temperaturi de până la 1100°F și presiuni de proiectare de până la 1000 PSIG." },
      { name: "Suflante Roots și Compresoare cu Șurub", description: "Suflante volumetrice cu lobi (tip Roots) pentru transport pneumatic și aerare la presiune joasă-medie, alături de compresoare rotative cu două șuruburi pentru petrol și gaze, generare de energie și refrigerare industrială. Completează gama compresoarele turbo mono și multietajate Kühnle Kopp Kausch pentru aplicații industriale de mare capacitate." },
      { name: "Compresoare cu Piston și Schimbătoare Rotative de Căldură", description: "Compresoare cu piston Peter Brotherhood pentru gaze industriale, compresoare cu membrană Burton Corblin pentru separarea ermetică a gazelor și schimbătoare rotative de căldură Rothemühle (preîncălzitoare de aer, schimbătoare gaz-gaz) pentru centrale electrice și instalații industriale mari. Aceeași familie Peter Brotherhood acoperă și turbine cu abur între 75 kW și 40 MWe." }
    ],
    industries: [
      "Petrol și gaze — suflante și compresoare pentru procese de extracție și rafinare",
      "Generare de energie — ventilatoare și schimbătoare de căldură pentru centrale",
      "Metalurgie și minerit — ventilatoare turbo de mare presiune",
      "Tratarea apei și apelor uzate — suflante de aerare pentru stații de epurare",
      "Ciment și sticlă — ventilatoare industriale rezistente la temperatură",
      "Valorificare energetică a deșeurilor — turbine cu abur de capacitate medie"
    ],
    infinitrade: `Recunoaștem limita: nu putem confirma disponibilitatea reală a fiecărei game Howden, ci doar ce arată sursele publice ale producătorului. Pentru ventilatoare industriale, suflante centrifugale sau cu lobi din portofoliul Howden aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă. Pentru o ofertă corectă avem nevoie de brandul și familia de produs (de exemplu suflantă Spencer monoetajată sau ventilator axial), debitul și presiunea necesare aplicației. Nu ținem această gamă pe raft pe nicio familie Howden — fiecare comandă pornește cu o verificare directă la rețeaua producătorului.`,
    limitation: "Nu putem confirma parametrii tehnici exacți (debit, presiune, putere) pentru fiecare model din portofoliul Howden, informația publică fiind organizată pe branduri și categorii, nu pe fișe tehnice individuale de model.",
    productCodes: [
      { code: "Tuf-Lite", description: "ventilator axial industrial, brand Howden pentru alimentare critică cu aer" },
      { code: "Spencer — Single Stage Scroll Blowers", description: "suflante centrifugale monoetajate, până la 50.000 ICFM și 3,5 PSIG" },
      { code: "Spencer Multistage Blowers", description: "suflante multietajate (variante SOH, 4BOH, 4BOB), diametre carcasă 14-88 țoli, până la 25.000 ICFM" },
      { code: "Spencer RB Pressure Blowers", description: "suflante centrifugale de presiune, serie RB pentru servicii grele" },
      { code: "HV-TURBO", description: "brand Howden de suflante turbo de presiune ridicată" },
      { code: "TURBLEX", description: "brand Howden de suflante centrifugale industriale" },
      { code: "Kuehnle, Kopp and Kausch", description: "brand Howden de compresoare turbo mono și multietajate" },
      { code: "Peter Brotherhood", description: "brand Howden de compresoare cu piston și turbine cu abur" },
      { code: "Burton Corblin", description: "brand Howden de compresoare cu membrană, separare ermetică a gazelor" },
      { code: "TFC90", description: "pachet standardizat de compresor cu membrană Burton Corblin" },
      { code: "TFC180", description: "pachet standardizat de compresor cu membrană Burton Corblin, capacitate mai mare" },
      { code: "Rothemühle", description: "brand Howden de schimbătoare rotative de căldură — preîncălzitoare de aer" },
      { code: "DELTA WING", description: "sistem de amestec (mixere de gaz) din portofoliul Howden" }
    ],
    faq: [
      { q: "Ce produce grupul Howden?", a: "Howden produce ventilatoare industriale, suflante centrifugale și cu lobi, compresoare cu piston, cu șurub sau turbo, plus schimbătoare rotative de căldură pentru centrale electrice. Grupul e britanic, cu peste 160 de ani de activitate, și include branduri precum Spencer, HV-TURBO, Turblex, Kühnle Kopp Kausch și Rothemühle, integrate din 2023 în Chart Industries (SUA)." },
      { q: "Ce este seria de suflante Spencer de la Howden?", a: "Spencer este brandul Howden dedicat suflantelor centrifugale, cu variante monoetajate (până la 50.000 ICFM la 3,5 PSIG) și multietajate (diametre de carcasă 14-88 țoli, până la 25.000 ICFM sau vacuum de 15 inch Hg). Sunt folosite la aerare, ventilație industrială și transport pneumatic de proces." },
      { q: "Ce diferență e între o suflantă Roots și una centrifugală Howden?", a: "Suflanta Roots (volumetrică, cu lobi) livrează un debit relativ constant indiferent de contrapresiune și e potrivită la presiuni joase-medii, în timp ce o suflantă centrifugală Howden (Spencer, HV-TURBO) e mai eficientă la debite mari și presiuni variabile. Alegerea depinde de profilul exact al instalației tale de proces." },
      { q: "Livrați echipamente Howden în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de familia de produs și de confirmarea rețelei Howden. Nu ținem aceste echipamente pe raft propriu, așa că verificăm disponibilitatea exactă înainte de a confirma termenul final clientului." },
      { q: "Ce trebuie să trimit pentru o ofertă pe un ventilator Howden?", a: "Ai nevoie de tipul de ventilator (axial, centrifugal sau turbo fan), debitul și presiunea necesare procesului, temperatura de lucru a aerului sau gazului vehiculat și, dacă aplicabil, cerințele de certificare pentru zona de instalare. Cu cât detaliezi mai clar aplicația, cu atât identificăm mai repede familia potrivită din portofoliul Howden." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Howden | Chart Industries", url: "https://www.chartindustries.com/Businesses-Brands/Howden", publisher: "Chart Industries / Howden", accessed: "2026-09-26" },
      { title: "Reliable Industrial Centrifugal Blowers", url: "https://www.spencerturbine.com/products/blowers/", publisher: "Spencer Turbine Company (Howden / Chart Industries)", accessed: "2026-09-26" }
    ]
  },
  mapro: {
    name: "Mapro",
    founded: 1959,
    headquarters: "Nova Milanese (MB), Italia",
    overview: `Mapro este un producător italian de suflante și compresoare pentru aer și gaz, cu sediul la Nova Milanese, activ din 1959 — inițial ca atelier de service pentru pompe de vid și compresoare cu palete, iar din 1977 și ca producător propriu de suflante cu canal lateral. Gama actuală acoperă compresoare rotative cu palete, ventilatoare centrifugale pentru biogaz, suflante cu canal lateral (seria CL, tipul TBT), suflante multietajate, suflante cu lobi rotativi, pompe de vid și sisteme de amestec secvențial de gaz pentru digestoare anaerobe. Pentru România, Mapro e relevant în stații de epurare, instalații de biogaz și linii industriale cu nevoie de aer comprimat la presiune joasă-medie.

Seria CL are zeci de mărimi grupate pe clase — de la CL 3.6/01, motor sub 0,5 CP, până la CL 98/1, motoare de 10-20 CP — plus variante de mare turație (HS), rotative (1R/2R) sau în două trepte (/21). Tipul TBT acoperă 226-1114 cfm la presiuni de 4-11,5 psig, cu puteri de până la 73 CP. Seria MCF (390 și 500), pentru biogaz, funcționează la presiuni de până la 2600 hPa și puteri de 1,5-18,5 kW. Suflantele cu lobi rotativi completează gama la debite de până la 20.000 m³/h.

Pentru instalațiile din România, gama Mapro acoperă atât echipamentul principal, cât și componentele funcționale ale acestuia, cu mențiunea că orice comandă se confirmă în prealabil cu fabrica din Nova Milanese sau cu o filială europeană a grupului.`,
    whyChoose: [
      "Gamă foarte extinsă de suflante cu canal lateral — zeci de mărimi în seria CL, de la sub 30 cfm la peste 1000 cfm",
      "Ventilatoare centrifugale dedicate biogazului — seria MCF, presiune de până la 2600 hPa, turație reglabilă",
      "Suflante cu lobi rotativi de mare debit — până la 20.000 m³/h, pentru aplicații unde canalul lateral nu mai ajunge",
      "Peste 65 de ani de fabricație proprie — din 1959, cu extindere în Germania (2007) și Franța (2010)",
      "Sisteme complete pentru digestoare anaerobe — suflante plus sisteme de amestec secvențial de gaz din aceeași gamă"
    ],
    keyProducts: [
      { name: "Suflante și Aspiratoare cu Canal Lateral Seria CL și Tipul TBT", description: "Familie extinsă de suflante cu canal lateral, de la CL 3.6/01 la CL 98/1, completată de variantele de mare turație (HS), rotative (1R/2R) și în două trepte (/21). Tipul TBT acoperă presiuni mai mari, 4-11,5 psig, la debite de 226-1114 cfm. Aplicație tipică: aerare, transport pneumatic ușor, vid industrial de nivel mediu." },
      { name: "Ventilatoare Centrifugale pentru Biogaz Seria MCF", description: "Ventilatoare centrifugale seria MCF 390 și MCF 500, în variantă standard sau close-coupled, cu presiune de refulare de până la 2600 hPa și putere de motor între 1,5 și 18,5 kW. Construcție fără contact între rotor și carcasă, fără ungere internă, potrivită pentru gaz de digestor sau biogaz de depozit." },
      { name: "Suflante și Aspiratoare cu Lobi Rotativi", description: "Suflante volumetrice cu lobi, pentru debite mai mari decât cele acoperite de canalul lateral — până la 20.000 m³/h — cu presiune de refulare de până la 1 bar sau depresiune de până la -500 mbar. Folosite la transport pneumatic de materiale granulare sau la aerarea bazinelor mari din stațiile de epurare." },
      { name: "Compresoare Rotative cu Palete și Pompe de Vid", description: "Compresoare rotative cu palete pentru aer sau gaz și pompe de vid cu lubrifiere prin recirculare de ulei, moștenind activitatea originală a companiei din 1959. Completează oferta suflantele cu membrană și sistemele de amestec secvențial de gaz, dezvoltate pentru digestoarele anaerobe din stațiile de biogaz." }
    ],
    industries: [
      "Biogaz — ventilatoare centrifugale MCF și suflante pentru digestoare anaerobe",
      "Gaz natural — suflante și compresoare pentru manipulare gaz de proces",
      "Tratarea apelor uzate — suflante cu lobi pentru aerarea bazinelor",
      "Industrie textilă — vid industrial pentru echipamente de călcat",
      "Construcții — vid pentru prese de filtrare la deshidratarea nămolului",
      "Industria alimentară — vid și presiune joasă pentru linii de ambalare"
    ],
    infinitrade: `La Mapro nu ținem pe raft propriu și nu avem cum să-l confirmăm; ne bazăm pe surse publice ale producătorului italian. Pentru suflantele cu canal lateral, ventilatoarele MCF sau suflantele cu lobi rotativi aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă. Pentru o ofertă corectă avem nevoie de codul mărimii (de exemplu CL 34/1 sau MCF 390), presiunea sau depresiunea de lucru și tipul de gaz vehiculat, dacă e altul decât aer. Nu promitem disponibilitate din depozit pe nicio serie Mapro.`,
    limitation: "Nu putem confirma din ce fabrică a grupului (Italia, Germania sau Franța) va fi livrată o comandă anume, decizia aparținând rețelei de producție Mapro.",
    productCodes: [
      { code: "CL 3.6/01", description: "suflantă canal lateral, mărime mică, motor sub 0,5 CP" },
      { code: "CL 22/01", description: "suflantă canal lateral, motor 3-5,4 CP" },
      { code: "CL 34/1", description: "suflantă canal lateral, motor 4-7,4 CP" },
      { code: "CL 60/1", description: "suflantă canal lateral, motor 5,4-10 CP" },
      { code: "CL 98/1", description: "suflantă canal lateral, capacitatea maximă din seria /1" },
      { code: "CL 40 HS", description: "suflantă canal lateral de mare turație, 1,2 CP" },
      { code: "CL 720 HS", description: "suflantă canal lateral de mare turație, 4-5,8 CP" },
      { code: "CL 1R9", description: "suflantă canal lateral rotativă, 11,4 CP" },
      { code: "CL 2R9", description: "suflantă canal lateral rotativă, 16,7 CP" },
      { code: "CL 30/21", description: "suflantă canal lateral în două trepte, 4 CP" },
      { code: "CL 49/21", description: "suflantă canal lateral în două trepte, 7,4 CP" },
      { code: "TBT/M", description: "suflantă de presiune medie, 226-1114 cfm la 4-11,5 psig" },
      { code: "MCF 390", description: "ventilator centrifugal biogaz, până la 2400 hPa" },
      { code: "MCF 500", description: "ventilator centrifugal biogaz, până la 2600 hPa" },
      { code: "Rotating Lobe Blowers and Vacuums", description: "suflante volumetrice cu lobi, debit până la 20.000 m³/h" },
      { code: "Sliding Vane Rotary Compressors", description: "compresoare rotative cu palete pentru aer sau gaz (AIR/GAS), activitatea originală a companiei" },
      { code: "Sliding Vane Rotary Vacuum Pumps", description: "pompe de vid rotative cu palete, lubrifiere prin recirculare de ulei" },
      { code: "Membrane Blowers", description: "familie dedicată aplicațiilor de presiune foarte joasă" },
      { code: "Sequential Gas Mixing Systems", description: "pentru digestoare anaerobe din stații de biogaz" }
    ],
    faq: [
      { q: "Ce produce Mapro?", a: "Mapro produce suflante cu canal lateral, ventilatoare centrifugale pentru biogaz, suflante cu lobi rotativi, compresoare rotative cu palete și pompe de vid. Compania e italiană, cu sediul la Nova Milanese, activă din 1959, și are gama orientată spre biogaz, gaz natural și tratarea apelor uzate, nu spre aer comprimat de uz general la presiune înaltă." },
      { q: "Cum aleg mărimea corectă din seria CL Mapro?", a: "Pornești de la debitul de aer necesar (exprimat de producător în cfm) și de la presiunea sau depresiunea de lucru a instalației; seria CL acoperă zeci de mărimi, de la CL 3.6/01, sub 30 cfm, până la CL 98/1, peste 650 cfm. Dacă ai nevoie de presiune mai mare decât acoperă canalul lateral, tipul TBT urcă până la 11,5 psig." },
      { q: "Ce este seria MCF de la Mapro?", a: "MCF este seria de ventilatoare centrifugale Mapro dedicată biogazului, disponibilă în mărimile 390 și 500, cu presiune de refulare de până la 2600 hPa și motoare de 1,5-18,5 kW. Rotorul nu atinge carcasa în timpul funcționării, deci nu are nevoie de ungere internă, un avantaj la gazul de digestor, care poate fi coroziv." },
      { q: "Livrați echipamente Mapro în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de seria și mărimea confirmate de fabrica Mapro. Nu ținem această gamă pe raft propriu, așa că verificăm disponibilitatea exactă a codului solicitat înainte de a confirma termenul de livrare." },
      { q: "Ce trebuie să trimit pentru o ofertă pe o suflantă Mapro?", a: "Ai nevoie de codul mărimii dacă îl cunoști (de exemplu CL 60/1), debitul necesar în m³/h sau cfm, presiunea sau depresiunea de lucru și tipul de gaz vehiculat, dacă nu e aer curat. Pentru aplicații de biogaz sau digestor, menționează și temperatura gazului, relevantă pentru alegerea materialului rotorului." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "La Storia", url: "https://maproint.com/la-storia/", publisher: "MAPRO S.p.A.", accessed: "2026-09-26" },
      { title: "Regenerative Blowers and Exhausters — CL Series and TBT Type", url: "https://maproint.com/wp-content/uploads/2021/03/Cod_0121_US_1120.pdf", publisher: "MAPRO S.p.A.", accessed: "2026-09-26" },
      { title: "MCF Serie für Luft, Biogas und Erdgas", url: "https://maproint.com/wp-content/uploads/2022/09/COD0112_MCF_2016-10_D-GB.pdf", publisher: "MAPRO S.p.A.", accessed: "2026-09-26" }
    ]
  },
  'continental-industrie': {
    name: "Continental Industrie",
    overview: `Continental Industrie este un producător francez specializat exclusiv în suflante centrifugale multietajate, cu peste 40 de ani de experiență declarată în cercetarea, dezvoltarea și fabricația acestui tip de mașină centrifugală. Gama e organizată pe modele numerotate — de la Model 008, cu capacitatea cea mai redusă, până la Model 700, cu capacitatea maximă din portofoliu — folosite unde procesul are nevoie de presiune moderată-ridicată la debite constante, fără pulsații. Pentru piața din România, gama e relevantă în stații de epurare, rafinării, instalații de biogaz și linii industriale unde suflanta trebuie să funcționeze continuu, fără întreținere frecventă.

Constructiv, suflantele Continental Industrie folosesc până la 10 trepte de compresie la mașinile mici și până la 7 trepte la cele mari, cu un nivel de vibrație declarat sub 4,5 mm/s în funcționare. Modelul 151, documentat public de producător, funcționează la o turație de 3550 rpm în antrenare directă (rețea 60 Hz), cu o viteză periferică a turbinei de aproximativ 119 m/s și diametre de turbină între 25 și 27 de țoli, configurabil de la 1 la 7 trepte în funcție de presiunea cerută. Mașinile de capacitate mai mică, până la 5000 m³/h, folosesc lubrifiere cu unsoare, o soluție constructivă mai simplă decât ungerea cu ulei sub presiune folosită la unele suflante centrifugale concurente de aceeași categorie.

Pentru instalațiile industriale din România, suflantele Continental Industrie sunt relevante mai ales unde procesul cere un debit stabil pe termen lung — aerare de bazin, susținere a arderii, transport de gaz de proces — cu mențiunea că certificarea constructivă e verificată de un organism independent, Bureau Veritas.`,
    whyChoose: [
      "Specializare exclusivă pe suflante centrifugale multietajate — peste 40 de ani de experiență declarată în acest tip de mașină",
      "Configurare pe trepte — de la 1 la 7 trepte de compresie, ajustabile după presiunea cerută de proces",
      "Vibrație scăzută în funcționare — sub 4,5 mm/s, relevant pentru instalații cu montaj rigid",
      "Lubrifiere cu unsoare la mașinile mici — soluție constructivă simplă până la 5000 m³/h",
      "Certificare verificată de organism independent — construcție inspectată de Bureau Veritas"
    ],
    keyProducts: [
      { name: "Suflante Centrifugale Multietajate, Gamă Mică (Modelele 008-077)", description: "Suflante compacte cu până la 10 trepte de compresie, folosind lubrifiere cu unsoare pentru mașinile cu debit sub 5000 m³/h. Potrivite pentru aplicații de laborator, gaz de analiză sau linii industriale mici, unde nu e nevoie de presiune foarte ridicată, dar continuitatea funcționării contează mai mult decât la o suflantă cu lobi." },
      { name: "Suflante Centrifugale Multietajate, Gamă Medie (Modelul 151)", description: "Model documentat public cu turație de 3550 rpm în antrenare directă la 60 Hz, viteză periferică a turbinei de circa 119 m/s și diametre de turbină între 25 și 27 țoli. Configurabil de la 1 la 7 trepte de compresie (variante 151.01 până la 151.08), în funcție de presiunea finală necesară procesului." },
      { name: "Suflante Centrifugale Multietajate, Gamă Mare (Modelele 500-700)", description: "Suflante de capacitate mare din vârful gamei Continental Industrie, cu până la 7 trepte de compresie la construcțiile cele mai mari. Aplicație tipică: aerarea bazinelor de mari dimensiuni din stațiile de epurare sau susținerea arderii în cuptoare industriale de capacitate ridicată." },
      { name: "Aplicații Speciale de Proces", description: "Suflante configurate pentru unități de recuperare a sulfului (SRU) în rafinării, pentru extracția biogazului din depozitele de deșeuri, pentru linii de cuțit de aer (air knife) în manufactură și pentru procese de flotație în minerit. Construcția e verificată de Bureau Veritas ca organism independent de certificare." }
    ],
    industries: [
      "Rafinare petrol — unități de recuperare a sulfului (SRU)",
      "Tratarea apelor uzate — aerarea bazinelor biologice",
      "Incinerare deșeuri — susținerea arderii în cuptoare cu pat fluidizat",
      "Biogaz — extracția gazului din depozite de deșeuri",
      "Desalinizare — pretratare prin filtrare membranară",
      "Minerit — procese de flotație pentru separarea mineralelor",
      "Acoperiri metalice — alimentare cu aer pentru linii de galvanizare"
    ],
    infinitrade: `Pentru Continental Industrie nu deținem date proprii de stoc, iar parametrii tehnici de mai jos provin din surse publice ale producătorului francez. Aducem suflante centrifugale multietajate din această gamă la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni la comandă, în funcție de model și de confirmarea fabricii. Pentru o ofertă corectă avem nevoie de numărul modelului (de exemplu Model 151 sau Model 500), presiunea și debitul necesare procesului, plus temperatura și compoziția gazului vehiculat. Nu promitem disponibilitate din depozit pe niciun model din gamă.`,
    limitation: "Nu putem confirma performanțele exacte de debit și presiune pentru fiecare model din gamă, fișele publice disponibile detaliind mai ales caracteristicile constructive și mecanice, nu curbele complete de funcționare.",
    productCodes: [
      { code: "Model 008", description: "suflantă centrifugală multietajată, cea mai mică din gamă" },
      { code: "Model 020", description: "suflantă centrifugală multietajată, gamă mică, joasă presiune" },
      { code: "Model 051", description: "suflantă centrifugală multietajată, gamă mică-medie" },
      { code: "Model 077", description: "suflantă centrifugală multietajată, gamă medie" },
      { code: "Model 151", description: "suflantă multietajată, turbină 25-27 țoli, configurabilă 1-7 trepte" },
      { code: "Model 151.01", description: "variantă cu o treaptă a modelului 151, turbină 25-27 țoli" },
      { code: "Model 151.02", description: "variantă cu două trepte a modelului 151" },
      { code: "Model 151.04", description: "variantă cu patru trepte a modelului 151" },
      { code: "Model 151.06", description: "variantă cu șase trepte a modelului 151" },
      { code: "Model 151.08", description: "variantă cu opt trepte a modelului 151, presiune maximă" },
      { code: "Model 500", description: "suflantă centrifugală multietajată, gamă mare" },
      { code: "Model 600", description: "suflantă centrifugală multietajată, gamă mare, presiune ridicată" },
      { code: "Model 700", description: "suflantă centrifugală multietajată, capacitatea maximă din gamă" }
    ],
    faq: [
      { q: "Ce produce Continental Industrie?", a: "Continental Industrie produce exclusiv suflante centrifugale multietajate, organizate pe modele numerotate de la Model 008, capacitatea cea mai redusă, până la Model 700, capacitatea maximă din portofoliu. Compania e franceză, cu peste 40 de ani de experiență declarată în acest tip de mașină, folosită în rafinării, stații de epurare, instalații de biogaz și alte procese industriale continue." },
      { q: "Cum aleg modelul corect de suflantă Continental Industrie?", a: "Pornești de la presiunea și debitul cerute de proces, apoi de la numărul de trepte de compresie necesar — modelul 151, de exemplu, e configurabil de la 1 la 7 trepte în funcție de presiunea finală dorită. Pentru mașini mici, sub 5000 m³/h, construcția folosește lubrifiere cu unsoare, mai simplă de întreținut." },
      { q: "Ce înseamnă numărul de trepte la o suflantă Continental Industrie?", a: "Fiecare treaptă de compresie crește presiunea gazului cu un increment suplimentar; modelele mici folosesc până la 10 trepte, iar cele mari până la 7. Cu cât ai nevoie de o presiune finală mai mare la același debit, cu atât modelul ales va avea mai multe trepte configurate." },
      { q: "Livrați suflante Continental Industrie în România și cât durează?", a: "Da, aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de model și de confirmarea fabricii franceze. Nu ținem aceste suflante pe raft propriu, deci fiecare comandă pornește cu o verificare de disponibilitate înainte de a confirma termenul final." },
      { q: "Ce trebuie să trimit pentru o ofertă pe o suflantă Continental Industrie?", a: "Ai nevoie de numărul modelului dacă îl cunoști, debitul și presiunea cerute de proces, temperatura și compoziția gazului vehiculat și, dacă e cazul, cerințele de certificare ale instalației. Pentru aplicații de rafinărie sau biogaz, menționează și dacă gazul e coroziv, relevant pentru materialul turbinei." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Multistage centrifugal blower model 151", url: "https://www.continental-industrie.com/en/producto/compresor-centrifugo-multietapa/modelos-compresor-centrifugo-multietapa/multistage-centrifugal-blower-model-151/", publisher: "Continental Industrie", accessed: "2026-09-26" },
      { title: "Multistage Centrifugal Compressor — Construction", url: "https://www.continental-industrie.com/en/producto/compresor-centrifugo-multietapa/construccion-compresor-centrifugo-multietapa/", publisher: "Continental Industrie", accessed: "2026-09-26" }
    ]
  },
};
