// Batch 60 - Branduri-500 v3 (sept. 2026): VEM Motors, MGM Motori Elettrici, FIMET, Cantoni Group, Lafert, Gamak, Nicolini Motori, Cemer (Cosgra), Varvel.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
// Omise: "rotor" (identitate incertă, fără site oficial clar și fără echivoc identificat) și "electroprecizia" (electroprecizia.ro a respins toate încercările de acces în această sesiune, cod 403).
export const brandContentBatch60 = {
  vem: {
    name: "VEM Motors",
    founded: 1886,
    headquarters: "Wernigerode, Germania",
    overview: `VEM este un producător german de motoare electrice, generatoare și sisteme de acționare, cu sediul la Wernigerode și rădăcini care merg până în 1886. Gama acoperă practic tot spectrul de puteri industriale, de la motoare mici de 0,06 kW până la mașini electrice uriașe de 100 MW/300 MVA folosite în centrale și instalații industriale grele. Pentru piața din România putem oferta motoare standard IEC, motoare antiexplozive, motoare cu frână și motoare pentru role de laminor din gama VEM.

Ce diferențiază VEM e numărul mare de familii dedicate unor aplicații specifice — motoare pentru tracțiune feroviară, acționări navale principale și auxiliare, motoare cu rotor bobinat pentru cupluri mari de pornire, motoare răcite cu apă pentru puteri ridicate în spații compacte și motoare IP23 cu ventilație deschisă pentru hale industriale. La acestea se adaugă sistemele de acționare VEMoDRIVE și monitorizarea de stare VEMoDiAC, plus generatoare pentru eolian, feroviar și aplicații navale.

Pentru clienții din industria grea, energie, hârtie sau tratarea apei, VEM înseamnă acces la o gamă de inginerie germană cu peste un secol de experiență, utilă mai ales acolo unde motorul standard IEC nu acoperă condițiile de mediu sau puterea necesară.`,
    whyChoose: [
      "Plajă de putere extrem de largă, de la 0,06 kW la 100 MW/300 MVA, acoperind atât motoare standard cât și mașini electrice de foarte mare putere",
      "Peste 20 de familii dedicate — motoare antiexplozive, cu rotor bobinat, pentru role de laminor, tracțiune feroviară sau acționări navale",
      "Sisteme integrate VEMoDRIVE pentru acționare și VEMoDiAC pentru monitorizarea stării motorului în funcționare",
      "Generatoare dedicate pentru eolian, transport feroviar și aplicații navale, nu doar motoare",
      "Motoare răcite cu apă pentru puteri ridicate în spații unde răcirea cu aer nu e suficientă",
      "Istorie de peste 135 de ani în construcția de mașini electrice, cu producție concentrată la Wernigerode"
    ],
    keyProducts: [
      { name: "Explosionsgeschützte Motoren (motoare antiexplozive)", description: "Motoare electrice certificate pentru zone cu risc de explozie, construite pe platforma IEC standard a VEM, pentru instalații din chimie, petrol și gaze sau prelucrarea prafurilor combustibile." },
      { name: "Schleifringläufermotoren (motoare cu rotor bobinat)", description: "Motoare asincrone cu rotor bobinat pentru cupluri mari de pornire și posibilitatea de reglare a curentului de pornire prin reostat, folosite la utilaje cu inerție mare de tipul concasoarelor sau morilor." },
      { name: "IP23-Elektromotoren", description: "Motoare cu grad de protecție IP23, ventilate deschis, mai ușoare și mai compacte decât variantele IP55, pentru hale curate unde protecția totală la praf nu e necesară." },
      { name: "Wassergekühlte Motoren (motoare răcite cu apă)", description: "Motoare cu răcire prin circuit de apă, pentru puteri ridicate în spații compacte unde răcirea clasică cu aer ar necesita un motor mult mai mare." }
    ],
    industries: [
      "Chimie și gaze — motoare antiexplozive pentru instalații de proces",
      "Producție de energie — generatoare și motoare de mare putere pentru centrale",
      "Industria hârtiei și celulozei — acționări robuste pentru linii continue",
      "Metale — motoare pentru role de laminor și utilaje grele",
      "Tratarea apei și apelor uzate — motoare standard și antiexplozive pentru stații de pompare",
      "Transport feroviar și naval — motoare de tracțiune și acționări de bord"
    ],
    infinitrade: `Pentru VEM lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru gama germană — ce putem și ce nu putem confirma depinde de familia de motor cerută și de disponibilitatea la fabrica din Wernigerode. Aducem motoare VEM la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de puterea și configurația solicitate. Pentru o ofertă corectă avem nevoie de puterea în kW, turația, tensiunea de alimentare, gradul de protecție și, dacă e cazul, certificarea ATEX necesară. Nu promitem disponibilitate din depozit pentru nicio familie din gamă.`,
    limitation: "Nu putem confirma disponibilitatea în stoc a unei anumite mărimi sau configurații fără verificare punctuală la producător, în special pentru mașinile de putere foarte mare.",
    productCodes: [
      { code: "Brandgasmotoren", description: "motoare pentru gaze de incendiu, aplicații miniere" },
      { code: "Bremsmotoren", description: "motoare cu frână electromagnetică integrată" },
      { code: "Einbaumotoren", description: "motoare de încorporare fără carcasă proprie" },
      { code: "Einphasenmotoren", description: "motoare monofazate de puteri mici" },
      { code: "Explosionsgeschützte Motoren", description: "motoare antiexplozive certificate ATEX" },
      { code: "Drehstrom-Asynchronmotoren", description: "motoare asincrone trifazate standard" },
      { code: "Fahrmotoren für Verkehrstechnik", description: "motoare de tracțiune pentru vehicule feroviare" },
      { code: "Hauptantriebe für Schiffsanwendungen", description: "acționări principale pentru nave" },
      { code: "HighSpeed-Motor", description: "motoare de mare turație" },
      { code: "Hilfsantriebe für Schiffsanwendungen", description: "acționări auxiliare navale" },
      { code: "Hilfsantriebe für Verkehrstechnik", description: "acționări auxiliare pentru transport feroviar" },
      { code: "IEC-Normmotoren", description: "motoare standardizate IEC" },
      { code: "IP23-Elektromotoren", description: "motoare cu protecție IP23, ventilate deschis" },
      { code: "Motor-Getriebe-Einheiten", description: "unități combinate de motor și reductor" },
      { code: "Permanenterregte Synchronmotoren", description: "motoare sincrone cu magneți permanenți" },
      { code: "Rollgangsmotoren", description: "motoare pentru role de laminor" },
      { code: "Schleifringläufermotoren", description: "motoare cu rotor bobinat, cuplu mare de pornire" },
      { code: "Thruster für Schiffsanwendungen", description: "acționări tip thruster pentru nave" },
      { code: "Transnormmotoren", description: "motoare în standard Transnorm" },
      { code: "VEMoDRIVE Compact", description: "sistem de acționare compact integrat" },
      { code: "VEMoCustom", description: "motoare personalizate pe cerințe specifice" },
      { code: "VEMoModular", description: "platformă modulară de motoare" },
      { code: "Wassergekühlte Motoren", description: "motoare răcite cu circuit de apă" },
      { code: "Asynchrongeneratoren", description: "generatoare asincrone de uz general" },
      { code: "Generatoren für Schiffsanwendungen", description: "generatoare pentru aplicații navale" },
      { code: "Generatoren für Public Transportation", description: "generatoare pentru transport public și material rulant" },
      { code: "Windkraftgeneratoren", description: "generatoare pentru turbine eoliene" },
      { code: "VEMoDiAC", description: "sistem de monitorizare a stării motorului" }
    ],
    faq: [
      { q: "Ce game de motoare produce VEM Motors?", a: "VEM Motors produce motoare electrice de la 0,06 kW la 100 MW/300 MVA, generatoare pentru eolian, naval și feroviar, plus sisteme de acționare VEMoDRIVE și monitorizare VEMoDiAC. Gama include peste 20 de familii dedicate, de la motoare antiexplozive la motoare cu rotor bobinat pentru cupluri mari de pornire." },
      { q: "Livrați motoare VEM Motors în România și cât durează?", a: "Aducem motoare VEM Motors la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de disponibilitatea la fabrica din Germania și de configurația cerută." },
      { q: "Ce trebuie să trimit pentru o ofertă de motor VEM?", a: "Aveți nevoie să precizați puterea în kW, turația, tensiunea de alimentare, gradul de protecție (IP23 sau IP55), și dacă aplicația necesită certificare antiexplozivă ATEX sau rotor bobinat pentru cuplu mare de pornire." },
      { q: "Ce echivalent are un motor antiexploziv VEM față de alte branduri?", a: "VEM oferă familia Explosionsgeschützte Motoren, construită pe platforma sa IEC standard, comparabilă ca principiu cu liniile antiexplozive ale altor producători europeni; alegerea corectă depinde de zona de risc și de puterea necesară." },
      { q: "Produce VEM și generatoare, nu doar motoare?", a: "Da, VEM are o linie separată de generatoare — asincrone, pentru aplicații navale, pentru transport public și material rulant, și generatoare pentru turbine eoliene, distincte de gama de motoare electrice." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "VEM Group – Antriebstechnik & Elektromotoren", url: "https://vem-group.com", publisher: "VEM Group", accessed: "2026-09-22" },
      { title: "Unsere Produkte", url: "https://www.vem-group.com/produkte/", publisher: "VEM Group", accessed: "2026-09-22" },
      { title: "Impressum", url: "https://www.vem-group.com/impressum/", publisher: "VEM motors GmbH", accessed: "2026-09-22" }
    ]
  },

  mgm: {
    name: "MGM Motori Elettrici",
    founded: 1947,
    headquarters: "Serravalle Pistoiese (PT), Italia",
    overview: `MGM Motori Elettrici este un producător italian specializat, din 1947, pe motoare electrice autofrenante — motoare cu frână integrată folosite acolo unde utilajul trebuie să se oprească exact și rapid. Din Serravalle Pistoiese, lângă Pistoia, compania acoperă atât frâne de curent alternativ cât și de curent continuu, plus o gamă de motoare standard trifazate. Pentru clienții din România putem oferta atât motoarele autofrenante de bază, cât și variantele pentru medii marine sau ostile.

Structura gamei e clară: seriile BA și BAX au frână AC, BM și BMX au frână DC, iar BMBM adaugă un al doilea grup de frânare pentru aplicații care cer redundanță. Pentru medii dure — nave, saline, atmosfere umede — există liniile BAH și BAHX. Completează oferta seria SM/SMX de motoare asincrone trifazate standard, fără frână, și seria R, gândită pentru alimentare de la invertor. Fiecare motor trece prin peste 35 de controale de calitate înainte de livrare, conform informațiilor publicate de producător.

Pentru instalații din România — linii de ambalare, ascensoare, uși rapide, depozite automate — MGM înseamnă acces la o gamă italiană specializată exact pe frânare electromecanică, acolo unde o frână mecanică separată ar complica montajul.`,
    whyChoose: [
      "Specializare de peste 75 de ani exclusiv pe motoare cu frână integrată, nu pe gamă generalistă",
      "Alegere între frână AC (seriile BA, BAX) și frână DC (seriile BM, BMX), în funcție de precizia de oprire cerută",
      "Variantă cu dublu grup de frânare (BMBM) pentru aplicații care cer redundanță de siguranță",
      "Linii dedicate mediilor ostile — nave, umiditate, atmosfere saline — cu seriile BAH și BAHX",
      "Peste 35 de controale de calitate pe fiecare motor înainte de expediere",
      "Seria R gândită special pentru funcționare cu invertor, pentru aplicații cu turație variabilă"
    ],
    keyProducts: [
      { name: "Serie BA-BAX", description: "Motoare autofrenante cu frână de curent alternativ, gândite pentru opriri rapide și precise în aplicații industriale standard, unde simplitatea electrică a frânei AC e un avantaj de mentenanță." },
      { name: "Serie BM-BMX", description: "Motoare autofrenante cu frână de curent continuu, cu timp de răspuns mai rapid decât frâna AC, potrivite acolo unde poziționarea exactă a sarcinii contează mai mult decât costul." },
      { name: "Serie BAH-BAHX", description: "Variante de motoare autofrenante pentru medii marine și ostile, cu protecție suplimentară împotriva umidității și atmosferei saline, pentru instalații navale sau industriale expuse." },
      { name: "Serie SM-SMX", description: "Motoare asincrone trifazate standard, fără frână integrată, pentru aplicații industriale generale unde nu e nevoie de oprire controlată electric." }
    ],
    industries: [
      "Energie eoliană — motoare pentru sisteme auxiliare ale turbinelor",
      "Industria ceramicii și marmorei — acționări cu oprire precisă pentru linii de tăiere",
      "Ambalare și manipulare materiale — motoare autofrenante pentru poziționare exactă",
      "Depozitare automată — acționări pentru rafturi și transportoare cu opriri frecvente",
      "Construcții navale — motoare BAH/BAHX pentru medii marine",
      "Ascensoare și uși rapide industriale — frânare electromecanică integrată"
    ],
    infinitrade: `Aducem motoare MGM la comandă prin canale de aprovizionare din UE; lucrăm cu ce putem și ce nu putem confirma pe bază de surse publice ale producătorului, fără date proprii de stoc pentru gama italiană. Termenul orientativ este de 2-6 săptămâni de la confirmarea comenzii, în funcție de seria și mărimea de carcasă solicitate. Pentru ofertă avem nevoie de seria dorită (BA, BM, BAH, SM sau R), puterea în kW, tensiunea de alimentare a motorului și, separat, a frânei, și mărimea de carcasă. Nu promitem disponibilitate din depozit pentru nicio serie și nu confirmăm disponibilitatea fără verificare punctuală.`,
    limitation: "Nu putem confirma service în perioada de garanție a producătorului sau configurarea electronică a frânei fără o cerere punctuală transmisă către MGM.",
    productCodes: [
      { code: "BA", description: "motor autofrenant cu frână AC, serie de bază" },
      { code: "BAX", description: "variantă a seriei BA, frână de curent alternativ" },
      { code: "BM", description: "motor autofrenant cu frână DC" },
      { code: "BMX", description: "variantă a seriei BM, frână de curent continuu" },
      { code: "BMBM", description: "motor autofrenant cu dublu grup de frânare" },
      { code: "BAH", description: "motor autofrenant pentru medii marine și ostile" },
      { code: "BAHX", description: "variantă BAH pentru medii marine mai severe" },
      { code: "SM", description: "motor asincron trifazat standard, fără frână" },
      { code: "SMX", description: "variantă a seriei SM, motor standard trifazat" },
      { code: "Serie R", description: "serie de motoare gândite pentru alimentare de la invertor" }
    ],
    faq: [
      { q: "Ce produce MGM Motori Elettrici?", a: "MGM Motori Elettrici produce motoare electrice autofrenante — cu frână AC sau DC integrată — plus motoare trifazate standard fără frână (SM/SMX) și o serie dedicată alimentării de la invertor (R). Compania e specializată din 1947 exclusiv pe frânare electromecanică." },
      { q: "Cum aleg între seria BA și seria BM la MGM Motori Elettrici?", a: "Seria BA folosește frână de curent alternativ, mai simplă electric, iar seria BM folosește frână de curent continuu, cu timp de răspuns mai rapid și poziționare mai precisă a sarcinii. Alegerea depinde de cât de exactă trebuie să fie oprirea." },
      { q: "Ce serie MGM se potrivește pentru medii marine?", a: "Pentru nave și medii cu umiditate sau atmosferă salină, MGM oferă seriile BAH și BAHX, variante ale motoarelor autofrenante standard cu protecție suplimentară față de coroziune și umezeală." },
      { q: "Livrați motoare MGM în România și cât durează?", a: "Aducem motoare MGM la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de seria și configurația de frână solicitate." },
      { q: "Ce informații trebuie să trimit pentru o ofertă de motor autofrenant?", a: "Trimiteți seria dorită, puterea în kW, tensiunea motorului și a frânei separat, mărimea de carcasă și, dacă aplicația e specială, tipul de mediu de lucru (standard, umed sau marin)." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "MGM Motori Elettrici S.p.A.", url: "https://www.mgmrestop.com", publisher: "MGM Motori Elettrici S.p.A.", accessed: "2026-09-22" },
      { title: "Products - MGM Motor Stop", url: "https://www.mgmrestop.com/en/products/", publisher: "MGM Motori Elettrici S.p.A.", accessed: "2026-09-22" }
    ]
  },

  fimet: {
    name: "FIMET",
    headquarters: "Bra, Italia",
    overview: `FIMET Motori & Riduttori este un producător italian, cu sediul la Bra, în provincia Cuneo, activ de peste 100 de ani în construcția de motoare electrice, generatoare și reductoare. Gama e neobișnuit de largă pentru un singur producător: motoare de medie tensiune (HVM, HVC), motoare cu carcasă din oțel până la 1.000 kW (MCV, ACV), motoare cu alunecare mare (MPR), motoare antiexplozive pentru praf și gaze, motoare autofrenante (M2AO, MAO, M3AY, M2Y), generatoare în fontă (EM) și aluminiu (EMA), plus reductoare și invertoare. Pentru România putem oferta atât motoarele de uz general, cât și liniile speciale de medie tensiune sau autofrenante.

Ce diferențiază FIMET e integrarea pe verticală — motor, reductor și invertor din aceeași fabrică, ceea ce simplifică alegerea unui pachet complet de acționare. Seria MCV/ACV acoperă puteri neobișnuit de mari pentru o carcasă din oțel, până la 1.000 kW, acolo unde alți producători trec la carcasă din fontă. Producătorul oferă și o garanție de 48 de luni, dublu față de minimul legal european de 24 de luni.

Pentru instalații din marmoră, oțelării, energie hidro sau eolian, FIMET înseamnă o gamă italiană consacrată, utilă mai ales unde e nevoie de un pachet motor-reductor-invertor livrat coerent de la același producător.`,
    whyChoose: [
      "Gamă foarte largă pentru un singur producător — motoare de medie tensiune, autofrenante, antiexplozive și generatoare",
      "Motoare cu carcasă din oțel MCV/ACV până la 1.000 kW, putere neobișnuit de mare pentru acest tip de carcasă",
      "Pachet complet motor-reductor-invertor produs intern, nu asamblat din componente terțe",
      "Garanție de 48 de luni, dublu față de minimul legal de 24 de luni impus în UE",
      "Peste un secol de activitate în construcția de mașini electrice, cu producție concentrată la Bra"
    ],
    keyProducts: [
      { name: "Motori Media Tensiune HVM-HVC", description: "Motoare electrice de medie tensiune pentru aplicații industriale grele, unde puterea sau distanța de alimentare fac ineficientă folosirea joasei tensiuni standard." },
      { name: "Motori carcassa in acciaio MCV-ACV", description: "Motoare cu carcasă din oțel, disponibile până la 1.000 kW, o plajă de putere neobișnuit de mare pentru acest tip constructiv, potrivite pentru instalații industriale de proces." },
      { name: "Motori autofrenanti M2AO-MAO-M3AY-M2Y", description: "Familie de motoare autofrenante cu frână integrată, pentru aplicații care necesită oprire controlată — transportoare, mașini de ambalat, echipamente de ridicat." },
      { name: "Generatori EM-EMA", description: "Generatoare în carcasă de fontă (EM) sau aluminiu (EMA), pentru aplicații de producere a energiei la scară mică și medie, unde greutatea sau costul carcasei contează." }
    ],
    industries: [
      "Prelucrarea marmorei — motoare pentru utilaje de tăiere și șlefuire",
      "Oțelării — motoare de medie tensiune și carcasă oțel pentru puteri mari",
      "Petrol și gaze — motoare antiexplozive pentru zone cu risc",
      "Energie hidroelectrică — generatoare EM/EMA pentru centrale mici",
      "Energie eoliană — generatoare pentru turbine",
      "Alimentar și băuturi — motoare autofrenante pentru linii de ambalare",
      "Macarale și utilaje de ridicat — motoare cu frână integrată"
    ],
    infinitrade: `Pentru FIMET nu avem date proprii de stoc — lucrăm din surse publice ale producătorului și aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Ce putem și ce nu putem confirma depinde de familia de motor cerută: pentru gama standard de motoare autofrenante răspunsul e de regulă mai rapid decât pentru motoarele de medie tensiune sau carcasă specială. Pentru ofertă trimiteți seria dorită (HVM/HVC, MCV/ACV, M2AO/MAO/M3AY/M2Y sau EM/EMA), puterea, tensiunea și, dacă e cazul, cerința de mediu antiexploziv. Nu promitem disponibilitate din depozit.`,
    limitation: "Nu putem confirma termene ferme pentru motoarele de medie tensiune sau configurațiile speciale carcasă-oțel peste 1.000 kW fără verificare punctuală la fabrică.",
    productCodes: [
      { code: "HVM", description: "motor de medie tensiune, gama HVM" },
      { code: "HVC", description: "motor de medie tensiune, gama HVC" },
      { code: "WM", description: "generator răcit cu apă" },
      { code: "MCV", description: "motor cu carcasă din oțel, până la 1.000 kW" },
      { code: "ACV", description: "variantă a seriei MCV, carcasă oțel" },
      { code: "MPR", description: "motor cu alunecare (scorrimento) mărită" },
      { code: "EM", description: "generator în carcasă de fontă" },
      { code: "EMA", description: "generator în carcasă de aluminiu" },
      { code: "M2AO", description: "motor autofrenant, familia M2AO" },
      { code: "MAO", description: "motor autofrenant, familia MAO" },
      { code: "M3AY", description: "motor autofrenant, familia M3AY" },
      { code: "M2Y", description: "motor autofrenant, familia M2Y" }
    ],
    faq: [
      { q: "Ce produce FIMET Motori & Riduttori?", a: "FIMET produce motoare electrice de medie și joasă tensiune, motoare cu carcasă din oțel până la 1.000 kW, motoare autofrenante, generatoare în fontă sau aluminiu, plus reductoare și invertoare, toate din fabrica de la Bra, Italia." },
      { q: "Ce este seria MCV/ACV de la FIMET?", a: "MCV și ACV sunt motoare cu carcasă din oțel care ajung până la 1.000 kW, o putere neobișnuit de mare pentru acest tip constructiv, potrivite pentru instalații industriale de proces cu cerințe ridicate." },
      { q: "Livrați motoare FIMET în România și cât durează?", a: "Aducem motoare FIMET la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni, în funcție de seria aleasă și de confirmarea producătorului pentru configurația cerută." },
      { q: "Ce trebuie să trimit pentru o ofertă de motor FIMET?", a: "Aveți nevoie să precizați seria dorită (HVM/HVC, MCV/ACV, M2AO/MAO/M3AY/M2Y sau EM/EMA), puterea în kW, tensiunea de alimentare, turația și dacă aplicația necesită protecție antiexplozivă sau carcasă din oțel pentru puteri mari." },
      { q: "Ce garanție oferă FIMET pentru motoarele sale?", a: "Conform informațiilor publicate de producător, FIMET oferă o garanție de 48 de luni pentru motoarele sale, dublu față de minimul legal de 24 de luni impus în Uniunea Europeană." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "FIMET Motori & Riduttori", url: "https://www.fimet.it", publisher: "FIMET Motori & Riduttori S.p.A.", accessed: "2026-09-22" },
      { title: "I motori | FIMET", url: "https://www.fimet.com/motori", publisher: "FIMET Motori & Riduttori S.p.A.", accessed: "2026-09-22" }
    ]
  },

  cantoni: {
    name: "Cantoni Group",
    overview: `Cantoni Group este un grup polonez care reunește câteva dintre cele mai vechi fabrici europene de motoare electrice — Indukta (ateliere de reparații din 1878, producție de motoare din 1919), Celma (din 1920) și Emit (din 1921) — sub o structură comună de familie, condusă de Giampiero Cantoni. Gama acoperă motoare trifazate de la clasa de eficiență IE1 până la IE4, motoare monofazate, motoare de înaltă tensiune și motoare cu rotor bobinat. Pentru România putem oferta atât motoare standard de eficiență IE3, cât și variante speciale antiexplozive sau cu turații multiple.

Ce diferențiază Cantoni e acoperirea completă a claselor de siguranță pentru zone explozive — motoare antideflagrante certificate separat pentru industria chimică și pentru minerit — plus o linie de motoare cu siguranță mărită pentru medii cu risc redus de explozie. Grupul produce și motoare cu rotor bobinat, utile la utilaje cu pornire grea, și motoare cu mai multe turații, unde un singur motor înlocuiește două motoare cu turație fixă. Compania menționează prezența în peste 40 de țări și un portofoliu de peste 1.000 de produse.

Pentru clienți din industria oțelului, minerit, marină sau chimie, Cantoni oferă o alternativă central-europeană consacrată, cu o gamă tehnică mai variată decât un simplu catalog de motoare standard IE3.`,
    whyChoose: [
      "Acoperire completă a claselor de eficiență, de la IE1 la IE4, sub aceeași umbrelă de grup",
      "Două linii antiexplozive distincte — pentru industria chimică și separat pentru minerit",
      "Moștenire de fabrici poloneze centenare (Indukta din 1878/1919, Celma din 1920, Emit din 1921)",
      "Motoare cu rotor bobinat pentru utilaje cu pornire grea, nu doar motoare cu rotor în colivie",
      "Motoare cu mai multe turații, utile unde un motor trebuie să funcționeze la două viteze diferite",
      "Prezență declarată în peste 40 de țări, cu portofoliu de peste 1.000 de produse"
    ],
    keyProducts: [
      { name: "Motoare IE3 și IE4", description: "Motoare trifazate de eficiență premium (IE3) și ultra-premium (IE4), pentru instalații industriale unde costul energiei pe durata de viață a motorului depășește cu mult costul de achiziție." },
      { name: "Motoare antiexplozive (Flame Proof)", description: "Motoare certificate separat pentru aplicații chimice și pentru minerit, construite să reziste unei explozii interne fără să o transmită în exteriorul carcasei." },
      { name: "Motoare de înaltă tensiune", description: "Motoare pentru alimentare de înaltă tensiune, în variante de eficiență standard și ridicată, pentru instalații industriale mari unde joasa tensiune nu mai e eficientă." },
      { name: "Motoare cu rotor bobinat (Slip Ring)", description: "Motoare cu inele colectoare pentru cuplu mare de pornire și posibilitatea reglării curentului prin reostat rotoric, folosite la utilaje cu inerție mare." }
    ],
    industries: [
      "Industria oțelului — motoare speciale pentru porniri frecvente și cupluri mari",
      "Minerit — motoare antiexplozive certificate separat pentru acest sector",
      "Chimie și petrochimie — motoare antiexplozive pentru zone cu risc",
      "Marină — motoare de înaltă tensiune și rotor bobinat pentru instalații de bord",
      "Energie — motoare de mare putere pentru centrale și stații de pompare",
      "Construcții — motoare standard și cu turații multiple pentru utilaje de șantier"
    ],
    infinitrade: `Lucrăm cu Cantoni din surse publice ale producătorului, fără date proprii de stoc pentru gama poloneză — ce putem și ce nu putem confirma ține de familia de motor și de fabrica din grup care o produce. Aducem motoare Cantoni la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă avem nevoie de clasa de eficiență (IE1-IE4), puterea în kW, tensiunea, și dacă aplicația necesită certificare antiexplozivă pentru chimie sau pentru minerit — cele două linii nu sunt interschimbabile. Nu promitem disponibilitate din depozit pentru nicio familie.`,
    limitation: "Nu putem confirma din care fabrică a grupului (Indukta, Celma sau Emit) provine o anumită comandă și nici termenele pentru motoarele de înaltă tensiune fără verificare punctuală.",
    productCodes: [
      { code: "IE4 Motors", description: "motoare trifazate de eficiență ultra-premium" },
      { code: "IE3 Motors", description: "motoare trifazate de eficiență premium" },
      { code: "IE2 Motors", description: "motoare trifazate de eficiență ridicată" },
      { code: "IE1 Motors", description: "motoare trifazate de eficiență standard" },
      { code: "Flame Proof IE3", description: "motoare antiexplozive de eficiență IE3" },
      { code: "Flame Proof for Chemical Applications", description: "motoare antiexplozive pentru industria chimică" },
      { code: "Flame Proof for Mining Applications", description: "motoare antiexplozive pentru minerit" },
      { code: "Increased Safety Motors", description: "motoare cu siguranță mărită pentru risc redus" },
      { code: "Increased Safety IE3", description: "motoare cu siguranță mărită, eficiență IE3" },
      { code: "High Voltage Motors", description: "motoare pentru alimentare de înaltă tensiune" },
      { code: "Slip Ring Motors", description: "motoare cu rotor bobinat, cuplu mare de pornire" },
      { code: "Multi Speed Motors", description: "motoare cu mai multe turații" },
      { code: "Single Phase Motors", description: "motoare monofazate pentru aplicații de putere mică" },
      { code: "NEMA Motors", description: "motoare construite după standard NEMA" },
      { code: "SH5-24", description: "motor special pentru industria oțelului, 100 Nm, 250 rpm" }
    ],
    faq: [
      { q: "Ce grup de fabrici este în spatele Cantoni Group?", a: "Cantoni Group reunește fabrici poloneze istorice — Indukta, Celma și Emit, cu origini între 1878 și 1921 — sub o conducere de familie comună, producând motoare electrice de la clasa IE1 la IE4 și linii speciale antiexplozive." },
      { q: "Ce diferență e între motoarele antiexplozive Cantoni Group pentru chimie și pentru minerit?", a: "Cantoni produce două linii Flame Proof certificate separat — una pentru aplicații chimice și una specifică pentru minerit — pentru că normele de siguranță și tipurile de risc diferă între cele două medii." },
      { q: "Livrați motoare Cantoni în România și cât durează?", a: "Aducem motoare Cantoni la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de clasa de eficiență și de certificarea cerută." },
      { q: "Ce trebuie să trimit pentru o ofertă de motor Cantoni?", a: "Trimiteți clasa de eficiență dorită (IE1-IE4), puterea în kW, tensiunea de alimentare și, dacă e nevoie de protecție antiexplozivă, precizați dacă aplicația e chimică sau de minerit." },
      { q: "Ce este un motor cu rotor bobinat de la Cantoni?", a: "Este un motor asincron cu inele colectoare (Slip Ring) care permite reglarea curentului de pornire printr-un reostat exterior, util la utilaje cu inerție mare care au nevoie de cuplu de pornire ridicat fără șoc electric mare." }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "European Electric Motors Producer Cantoni Group", url: "https://www.cantonigroup.com", publisher: "Cantoni Group", accessed: "2026-09-22" },
      { title: "Electric Motor Catalogues Cantoni Group", url: "https://www.cantonigroup.com/en/page/download-motors-catalogues", publisher: "Cantoni Group", accessed: "2026-09-22" },
      { title: "Electric Motor production history Cantoni Group", url: "https://www.cantonigroup.com/en/page/our-history", publisher: "Cantoni Group", accessed: "2026-09-22" }
    ]
  },

  lafert: {
    name: "Lafert",
    headquarters: "San Donà di Piave, Italia",
    overview: `Lafert este un producător italian de motoare electrice și sisteme de acționare, cu sediul la San Donà di Piave, în Veneto. Gama acoperă tot spectrul de eficiență, de la motoare asincrone IE2/IE3 până la motoare sincrone cu magneți permanenți IE4/IE5, plus motoare autofrenante și servomotoare brushless pentru automatizare. Pentru România putem oferta atât motoare asincrone standard, cât și pachete integrate motor-variator din gama HP Combi.

Ce diferențiază Lafert e oferta de pachete complete motor-electronică — HP Combi și HPI combină motorul cu variatorul de frecvență într-un singur ansamblu, simplificând montajul față de componentele cumpărate separat. Linia Ultra Compact Servomotors acoperă aplicații de automatizare cu spațiu limitat, iar seria Smartris aduce funcții suplimentare de control. La polul opus, gama sincronă cu magneți permanenți IE5 vizează eficiență maximă pentru rulaj continuu, unde economia de energie pe durata de viață contează mai mult decât costul inițial.

Pentru instalații din HVAC, manipulare materiale sau industria alimentară din România, Lafert oferă o gamă italiană cu accent pe eficiență energetică ridicată și pe soluții integrate motor-acționare, nu doar pe motorul simplu.`,
    whyChoose: [
      "Acoperire completă de la IE2 la IE5, inclusiv motoare sincrone cu magneți permanenți pentru eficiență maximă",
      "Pachete integrate motor-variator sub marca HP Combi, care simplifică montajul și cablarea",
      "Servomotoare brushless ultra-compacte pentru automatizare cu spațiu limitat",
      "Motoare autofrenante și motoare cu cuplaj direct pentru aplicații de ridicare/ascensoare",
      "Gamă dedicată pentru compresoare, pompe de vid și suflante din tehnologia aerului",
      "Producție italiană concentrată la San Donà di Piave, Veneto"
    ],
    keyProducts: [
      { name: "HP Combi", description: "Pachet integrat motor plus variator de frecvență într-un singur ansamblu, care reduce spațiul de montaj și simplifică cablarea față de componentele achiziționate separat, pentru aplicații cu turație variabilă." },
      { name: "Ultra Compact Servomotors", description: "Servomotoare brushless de dimensiuni reduse, pentru aplicații de automatizare industrială și robotică unde spațiul de montaj e limitat și e nevoie de răspuns dinamic rapid." },
      { name: "Motoare sincrone cu magneți permanenți IE5", description: "Motoare de eficiență ultra-premium, pentru aplicații cu funcționare continuă unde economia de energie pe durata de viață a motorului justifică investiția inițială mai mare." },
      { name: "Motoare autofrenante", description: "Motoare cu frână integrată pentru aplicații de ridicare, transportoare sau ascensoare, unde oprirea controlată electric înlocuiește o frână mecanică separată." }
    ],
    industries: [
      "HVAC/R — motoare pentru pompe, ventilatoare și compresoare de răcire și climatizare",
      "Tehnologia aerului — compresoare, pompe de vid, suflante industriale",
      "Manipulare materiale — transportoare, sisteme AGV, aplicații de robotică",
      "Industria alimentară — motoare pentru linii de procesare și ambalare",
      "Ridicare — ascensoare, macarale, palane",
      "Energie regenerabilă — sisteme pentru turbine eoliene"
    ],
    infinitrade: `Furnizăm motoare Lafert din surse publice ale producătorului, fără date proprii de stoc pentru gama italiană — ce putem și ce nu putem confirma depinde de seria cerută și de configurația motor-variator. Aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru ofertă trimiteți clasa de eficiență dorită (IE2 până la IE5), puterea în kW, tensiunea, și dacă aveți nevoie de pachetul integrat motor-variator HP Combi sau de un motor simplu. Nu promitem disponibilitate din depozit și nu confirmăm termene mai scurte decât intervalul orientativ menționat.`,
    limitation: "Nu putem confirma configurarea software a variatoarelor integrate în pachetele HP Combi/HPI fără o cerere tehnică punctuală transmisă către Lafert.",
    productCodes: [
      { code: "HP Combi", description: "pachet integrat motor și variator de frecvență" },
      { code: "HPI", description: "linie de motoare cu variator integrat" },
      { code: "Ultra Compact Servomotors", description: "servomotoare brushless de dimensiuni reduse" },
      { code: "Smartris", description: "linie de motoare cu funcții suplimentare de control" },
      { code: "IE5", description: "motoare sincrone cu magneți permanenți, eficiență ultra-premium" },
      { code: "IE4", description: "motoare de eficiență ultra-premium" },
      { code: "IE3", description: "motoare asincrone de eficiență premium" },
      { code: "IE2", description: "motoare asincrone de eficiență ridicată" },
      { code: "Motori autofrenanti", description: "motoare cu frână integrată" },
      { code: "Motori con accoppiamento diretto", description: "motoare cu cuplaj direct pentru ascensoare" }
    ],
    faq: [
      { q: "Ce clase de eficiență acoperă gama Lafert?", a: "Lafert acoperă tot spectrul, de la motoare asincrone IE2 și IE3 până la motoare sincrone cu magneți permanenți IE4 și IE5, ultima fiind clasa de eficiență ultra-premium pentru funcționare continuă." },
      { q: "Ce este pachetul HP Combi de la Lafert?", a: "HP Combi este un ansamblu integrat care combină motorul cu variatorul de frecvență într-o singură unitate, reducând spațiul de montaj și simplificând cablarea față de componentele cumpărate și instalate separat." },
      { q: "Livrați motoare Lafert în România și cât durează?", a: "Aducem motoare Lafert la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de seria și clasa de eficiență solicitate." },
      { q: "Ce trebuie să trimit pentru o ofertă de motor Lafert?", a: "Precizați clasa de eficiență dorită (de la IE2 la IE5), puterea în kW, tensiunea de alimentare și dacă aveți nevoie de un motor simplu sau de un pachet integrat motor-variator." },
      { q: "Are Lafert servomotoare pentru automatizare?", a: "Da, gama Ultra Compact Servomotors cuprinde servomotoare brushless de dimensiuni reduse, gândite pentru aplicații de automatizare și robotică cu spațiu de montaj limitat și cerințe de răspuns dinamic rapid." }
    ],
    evidenceClass: "zero-evidence",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Lafert - Motori elettrici", url: "https://www.lafert.com/en", publisher: "Lafert S.p.A.", accessed: "2026-09-22" },
      { title: "Lafert Spa - Applicazioni e prodotti", url: "https://backup.lafert.com/ita/products-detail.php?id=72", publisher: "Lafert S.p.A.", accessed: "2026-09-22" }
    ]
  },

  gamak: {
    name: "Gamak",
    founded: 1961,
    headquarters: "Istanbul, Turcia",
    overview: `Gamak este un producător turc de motoare electrice, fondat în 1961 la Istanbul ca răspuns la nevoia industriei locale de a nu mai depinde de motoare importate. Astăzi gama acoperă practic tot spectrul de puteri industriale — de la 0,06 kW până la 4.000 kW — și include generatoare eoliene de 5 MW. Pentru România putem oferta motoare joasă tensiune din familia AGM, în variante monofazate, trifazate, antiexplozive sau pentru aplicații speciale.

Ce diferențiază Gamak e acoperirea combinată a joasei și mediei tensiuni sub același producător: motoare de joasă tensiune de la mărimea 56 la 630, respectiv motoare de medie tensiune între 150 și 3.000 kW la mărimi de carcasă 315-630. Gama de joasă tensiune include variante antiexplozive, motoare pentru extracția fumului, motoare pentru concasoare de piatră și motoare pentru instalații de muls — o listă de aplicații neobișnuit de variată pentru un singur catalog.

Pentru clienți din industrie sau agricultură din România, Gamak înseamnă acces la o fabrică turcă de peste 60 de ani, cu o gamă suficient de largă cât să acopere de la un motor standard de uz general până la o aplicație specială de proces.`,
    whyChoose: [
      "Plajă de putere foarte largă, de la 0,06 kW la 4.000 kW, acoperind atât joasa cât și media tensiune",
      "Mărimi de carcasă de la 56 la 630 pentru gama de joasă tensiune",
      "Linie dedicată de motoare antiexplozive, pentru extracție de fum și pentru concasoare de piatră",
      "Motoare specializate pentru instalații de muls, o nișă neobișnuită pentru un producător industrial",
      "Producție proprie de generatoare eoliene de 5 MW, dincolo de gama de motoare industriale",
      "Peste 60 de ani de fabricație la Istanbul, cu aproximativ 1.000 de angajați"
    ],
    keyProducts: [
      { name: "Motoare asincrone trifazate seria AGM", description: "Motoare trifazate de joasă tensiune, mărimi de carcasă între 56 și 630, disponibile în variante standard pentru majoritatea aplicațiilor industriale generale." },
      { name: "Motoare antiexplozive (Ex-proof)", description: "Motoare certificate pentru zone cu risc de explozie, parte din gama de joasă tensiune Gamak, pentru instalații din industria chimică sau prelucrarea materialelor combustibile." },
      { name: "Motoare de medie tensiune", description: "Motoare de medie tensiune între 150 și 3.000 kW, la mărimi de carcasă 315-630, pentru instalații industriale mari unde joasa tensiune nu mai e eficientă." },
      { name: "Motoare monofazate", description: "Motoare monofazate din gama de joasă tensiune, pentru aplicații de putere mai mică unde nu există alimentare trifazată disponibilă." }
    ],
    industries: [
      "Industrie generală — motoare trifazate standard pentru utilaje diverse",
      "Chimie — motoare antiexplozive pentru zone cu risc",
      "Extracție de fum — motoare speciale pentru sisteme de ventilație de siguranță",
      "Cariere și concasoare de piatră — motoare pentru condiții grele de lucru",
      "Agricultură — motoare pentru instalații de muls",
      "Energie eoliană — generatoare de 5 MW"
    ],
    infinitrade: `Pentru Gamak nu avem date proprii de stoc — furnizăm din surse publice ale producătorului și aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Ce putem și ce nu putem confirma ține de mărimea de carcasă și de tensiunea cerută: gama de joasă tensiune standard răspunde de regulă mai rapid decât motoarele de medie tensiune. Pentru ofertă trimiteți puterea în kW, mărimea de carcasă dacă o cunoașteți, tensiunea de alimentare și dacă aplicația necesită certificare antiexplozivă. Nu promitem disponibilitate din depozit pentru nicio mărime.`,
    limitation: "Nu putem confirma termenele pentru motoarele de medie tensiune (150-3.000 kW) fără o verificare punctuală la fabrica din Istanbul.",
    productCodes: [
      { code: "AGM", description: "familie de motoare trifazate de joasă tensiune" },
      { code: "AGM2E", description: "variantă a seriei AGM, motor trifazat" },
      { code: "AGM2EL", description: "variantă a seriei AGM, motor trifazat" },
      { code: "1-Phase Asynchronous Motors", description: "motoare asincrone monofazate" },
      { code: "3-Phase Asynchronous Motors", description: "motoare asincrone trifazate standard" },
      { code: "Ex-proof Motors", description: "motoare antiexplozive pentru zone cu risc" },
      { code: "Smoke Extraction Motors", description: "motoare pentru sisteme de extracție a fumului" },
      { code: "Stone Crushing Motors", description: "motoare pentru concasoare de piatră" },
      { code: "Milking Motors", description: "motoare pentru instalații de muls" },
      { code: "Medium Voltage Motors", description: "motoare de medie tensiune, 150-3.000 kW" }
    ],
    faq: [
      { q: "Ce plajă de puteri acoperă Gamak?", a: "Gamak produce motoare de la 0,06 kW până la 4.000 kW, combinând joasa tensiune (mărimi de carcasă 56-630) cu media tensiune (150-3.000 kW, mărimi 315-630), plus generatoare eoliene de 5 MW." },
      { q: "Are Gamak motoare pentru zone cu risc de explozie?", a: "Da, Gamak produce o linie de motoare antiexplozive (Ex-proof) în gama de joasă tensiune, alături de variante speciale pentru extracția fumului și pentru concasoare de piatră." },
      { q: "Livrați motoare Gamak în România și cât durează?", a: "Aducem motoare Gamak la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de tensiune și mărimea de carcasă." },
      { q: "Ce trebuie să trimit pentru o ofertă de motor Gamak?", a: "Trimiteți puterea în kW, mărimea de carcasă dacă o cunoașteți, tensiunea de alimentare (joasă sau medie), numărul de poli și dacă aplicația necesită certificare antiexplozivă sau variantă specială." },
      { q: "Produce Gamak și altceva în afară de motoare industriale standard?", a: "Da, pe lângă motoarele standard, Gamak produce generatoare eoliene de 5 MW și motoare speciale pentru nișe precum instalațiile de muls sau concasoarele de piatră." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Makina Sanayi Elektrik Motorları - GAMAK", url: "https://www.gamak.com/en", publisher: "Gamak", accessed: "2026-09-22" },
      { title: "History - GAMAK", url: "https://www.gamak.com/en/history", publisher: "Gamak", accessed: "2026-09-22" },
      { title: "Products - GAMAK", url: "https://www.gamak.com/en/products", publisher: "Gamak", accessed: "2026-09-22" }
    ]
  },

  nicolini: {
    name: "Nicolini Motori",
    founded: 1973,
    headquarters: "Campagnola Emilia (Reggio Emilia), Italia",
    overview: `Nicolini Motori este un producător italian de motoare asincrone trifazate, cu sediul la Campagnola Emilia, lângă Reggio Emilia, activ din 1973. Gama e organizată în patru linii — motoare standard, motoare pentru aplicații speciale, motoare cu electronică integrată și motoare speciale/sincrone — cu producție internă completă, de la bobinaj la asamblare finală. Pentru România putem oferta în special linia standard, în mărimi de carcasă IEC de la 63 la 180.

Ce diferențiază Nicolini e combinația dintre o gamă standard clasică și liniile de nișă: motoare cu electronică integrată, unde inverterul e montat direct pe motor, și motoare speciale pentru aplicații de e-mobilitate sau geometrii mecanice particulare, dezvoltate de biroul tehnic propriu al companiei. Motoarele standard sunt disponibile în versiuni trifazate cu 2, 4, 6 sau 8 poli și monofazate cu 2, 4 sau 6 poli, cu grad de protecție IP55 standard și variante până la IP67.

Pentru instalații din spălătorii, hidraulică sau ventilație industrială din România, Nicolini oferă o gamă italiană de nișă, utilă mai ales acolo unde e nevoie de o configurație mecanică sau electrică nestandardizată pe care marii producători generaliști nu o oferă din catalog.`,
    whyChoose: [
      "Producție internă completă, de la bobinaj la asamblare, cu trasabilitate pe fiecare motor",
      "Patru linii distincte — standard, aplicații speciale, electronică integrată, motoare speciale/sincrone",
      "Motoare cu electronică integrată, cu inverterul montat direct pe motor",
      "Configurații mecanice și electrice personalizate, dezvoltate de biroul tehnic propriu",
      "Grad de protecție de bază IP55, cu variante disponibile până la IP67",
      "Peste 50 de ani de experiență în construcția de motoare asincrone trifazate"
    ],
    keyProducts: [
      { name: "Motori asincroni standard", description: "Motoare trifazate și monofazate standard, mărimi de carcasă IEC de la 63 la 180, disponibile în variante cu 2, 4, 6 sau 8 poli pentru cele trifazate și 2, 4 sau 6 poli pentru cele monofazate." },
      { name: "Motori per applicazioni speciali", description: "Motoare gândite pentru pompe, sisteme hidraulice și mașini industriale specializate, unde motorul standard nu acoperă cerințele mecanice sau de mediu ale aplicației." },
      { name: "Motori con elettronica integrata", description: "Motoare cu inverter montat direct pe carcasă, pentru reglarea turației și eficiență energetică fără un dulap de comandă separat." },
      { name: "Motori speciali e sincroni", description: "Motoare dezvoltate la cerere, inclusiv soluții sincrone și aplicații de e-mobilitate, proiectate de biroul tehnic al companiei pentru geometrii mecanice particulare." }
    ],
    industries: [
      "OEM industriali — integrare de motoare în utilaje proprii",
      "Constructori de mașini — motoare pentru linii de producție",
      "Instalații de spălare — motoare pentru echipamente de curățare industrială",
      "Sector oleodinamic — motoare pentru pompe hidraulice",
      "Ventilație industrială — motoare pentru sisteme de aer"
    ],
    infinitrade: `Pentru Nicolini nu avem date proprii de stoc — lucrăm din surse publice ale producătorului și aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Ce putem și ce nu putem confirma depinde de linia cerută: gama standard, în mărimile IEC uzuale, e de regulă mai accesibilă decât motoarele cu electronică integrată sau configurațiile speciale dezvoltate la cerere. Pentru ofertă trimiteți mărimea de carcasă IEC, puterea în kW, numărul de poli și tensiunea de alimentare. Nu promitem disponibilitate din depozit pentru nicio linie din gamă.`,
    limitation: "Nu putem confirma termenele pentru motoarele speciale dezvoltate la cerere de biroul tehnic Nicolini fără o cerere punctuală transmisă producătorului.",
    productCodes: [
      { code: "IEC 63", description: "motor standard trifazat/monofazat, mărime carcasă 63" },
      { code: "IEC 71", description: "motor standard, mărime carcasă 71" },
      { code: "IEC 80", description: "motor standard, mărime carcasă 80" },
      { code: "IEC 90", description: "motor standard, 1,10-2,20 kW, 2 și 4 poli" },
      { code: "IEC 100", description: "motor standard, mărime carcasă 100" },
      { code: "IEC 112", description: "motor standard, mărime carcasă 112" },
      { code: "IEC 132", description: "motor standard, mărime carcasă 132" },
      { code: "IEC 160", description: "motor standard, mărime carcasă 160" },
      { code: "IEC 180", description: "motor standard, mărime carcasă 180" },
      { code: "Motori a doppia flangia", description: "motoare cu dublă flanșă pentru pompe de înaltă presiune" },
      { code: "Motori per applicazioni speciali", description: "motoare pentru aplicații hidraulice și speciale" },
      { code: "Motori con elettronica integrata", description: "motoare cu inverter integrat pe carcasă" },
      { code: "Motori speciali e sincroni", description: "motoare speciale, inclusiv soluții sincrone" }
    ],
    faq: [
      { q: "Ce mărimi de motoare standard produce Nicolini Motori?", a: "Nicolini Motori produce motoare asincrone standard în mărimi de carcasă IEC de la 63 la 180, în variante trifazate cu 2, 4, 6 sau 8 poli și monofazate cu 2, 4 sau 6 poli, cu protecție IP55 de bază." },
      { q: "Ce este un motor Nicolini cu electronică integrată?", a: "Este un motor care are inverterul montat direct pe carcasă, permițând reglarea turației și controlul motorului fără un dulap electric separat, util unde spațiul de montaj e limitat." },
      { q: "Livrați motoare Nicolini Motori în România și cât durează?", a: "Aducem motoare Nicolini la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de linia și configurația solicitate." },
      { q: "Ce trebuie să trimit pentru o ofertă de motor Nicolini?", a: "Trimiteți mărimea de carcasă IEC, puterea în kW, numărul de poli, tensiunea de alimentare și, dacă aplicația e specială, o descriere a cerinței mecanice sau electrice." },
      { q: "Face Nicolini motoare personalizate?", a: "Da, pe lângă gama standard, biroul tehnic Nicolini dezvoltă motoare speciale pentru geometrii mecanice particulare sau aplicații de e-mobilitate, adaptate exact la cererea tehnică a clientului final." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Nicolini Motori Elettrici", url: "https://www.nicolinimotori.it", publisher: "Nicolini & C. srl", accessed: "2026-09-22" },
      { title: "Gamma motori - Nicolini", url: "https://nicolinimotori.it/gamma-motori/", publisher: "Nicolini & C. srl", accessed: "2026-09-22" },
      { title: "Motori asincroni STANDARD - Nicolini", url: "https://nicolinimotori.it/gamma-motori/motori-standard-standard/", publisher: "Nicolini & C. srl", accessed: "2026-09-22" }
    ]
  },

  cemer: {
    name: "Cemer",
    headquarters: "Crespià (Girona), Spania",
    overview: `Cemer este un brand de motoare electrice al grupului spaniol Cosgra, cu producție la Crespià, în provincia Girona. Notă importantă pentru cumpărători: deși numele circulă și în contextul unor producători turci de motoare, brandul Cemer verificat prin sursa oficială citită în această sesiune este spaniol, parte din grupul Cosgra, alături de o linie de garnituri mecanice și cutii de viteze. Gama de motoare acoperă clasele de eficiență IE1-S3, IE2 monofazat, IE3 și IE4, plus motoare cu frână, motoare antiexplozive ATEX și motoare cu ventilație forțată.

Ce diferențiază Cemer e orientarea clară spre aplicații de proces — motoare pentru variator de frecvență (VFD), ventilație și aspirație, pompe/mixere/compresoare, unități de putere hidraulică, mașini pentru cariere, curățare sub presiune și echipamente pentru alimentarea animalelor. Toate motoarele sunt certificate CE, iar producătorul menționează garanție acoperită prin Cosgra. Pentru România putem oferta motoarele standard trifazate IE2/IE3, cele mai des cerute din gamă.

Pentru clienți din industrie sau agricultură din România, Cemer înseamnă o gamă spaniolă cu accent pe aplicații de proces industrial, utilă mai ales pentru echipamente hidraulice sau de ventilație unde motorul trebuie ales împreună cu restul instalației.`,
    whyChoose: [
      "Acoperire de la IE1-S3 până la IE4, plus motoare monofazate IE2 pentru puteri mici",
      "Linie dedicată de motoare pentru variator de frecvență (VFD), gândite pentru turație variabilă",
      "Motoare antiexplozive ATEX pentru zone cu risc, alături de gama standard",
      "Motoare cu ventilație forțată pentru funcționare la turație redusă fără supraîncălzire",
      "Orientare clară spre aplicații de proces — hidraulică, ventilație, pompe, compresoare",
      "Certificare CE pe întreaga gamă, cu garanție acoperită de grupul Cosgra"
    ],
    keyProducts: [
      { name: "Motoare trifazate IE3", description: "Motoare asincrone trifazate de eficiență premium, parte din gama standard Cemer, pentru aplicații industriale generale unde eficiența energetică e cerută de normele actuale." },
      { name: "Motoare trifazate IE4", description: "Motoare de eficiență ultra-premium, pentru instalații unde consumul de energie pe durata de viață a motorului justifică o investiție inițială mai mare." },
      { name: "Motoare antiexplozive ATEX", description: "Motoare certificate pentru zone cu risc de explozie, parte din gama Cemer pentru aplicații industriale în medii cu praf sau gaze combustibile." },
      { name: "Motoare cu ventilație forțată", description: "Motoare echipate cu ventilator auxiliar independent de turația arborelui, pentru funcționare corectă la turații reduse controlate prin variator de frecvență." }
    ],
    industries: [
      "Hidraulică industrială — motoare pentru unități de putere hidraulică",
      "Ventilație și aspirație — motoare pentru sisteme de exhaustare",
      "Pompe, mixere și compresoare — motoare de proces pentru instalații industriale",
      "Cariere — motoare pentru mașini de extracție și procesare a materialelor",
      "Curățare industrială sub presiune — motoare pentru echipamente de spălare",
      "Agricultură — motoare pentru echipamente de alimentare a animalelor"
    ],
    infinitrade: `Pentru Cemer nu avem date proprii de stoc — furnizăm din surse publice ale producătorului (grupul Cosgra) și aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Ce putem și ce nu putem confirma ține de clasa de eficiență și de aplicația specifică: motoarele standard IE2/IE3 sunt de regulă mai accesibile decât variantele ATEX sau cu ventilație forțată. Pentru ofertă trimiteți puterea în kW, clasa de eficiență dorită, tensiunea de alimentare și dacă aplicația necesită certificare ATEX. Nu promitem disponibilitate din depozit pentru nicio clasă din gamă.`,
    limitation: "Nu putem confirma dacă un motor Cemer solicitat provine din producția directă a grupului Cosgra sau este produs sub licență pentru o piață anume, fără verificare punctuală.",
    productCodes: [
      { code: "CEMER IE1 S3", description: "motor trifazat, eficiență IE1, serviciu S3" },
      { code: "CEMER IE2", description: "motor monofazat sau trifazat, eficiență IE2" },
      { code: "CEMER IE3", description: "motor trifazat, eficiență premium IE3" },
      { code: "CEMER IE4", description: "motor trifazat, eficiență ultra-premium IE4" },
      { code: "Motores con freno", description: "motoare cu frână electromagnetică integrată" },
      { code: "Motores ATEX", description: "motoare antiexplozive certificate" },
      { code: "Motores con ventilación forzada", description: "motoare cu ventilator auxiliar independent" },
      { code: "Motores para variador (VFD)", description: "motoare gândite pentru alimentare de la variator de frecvență" },
      { code: "Motores para bombas y compresores", description: "motoare pentru pompe, mixere și compresoare" },
      { code: "Motores para unidades hidráulicas", description: "motoare pentru unități de putere hidraulică" }
    ],
    faq: [
      { q: "Este Cemer o companie turcă sau spaniolă?", a: "Sursa oficială verificată în această sesiune arată că brandul Cemer de motoare electrice aparține grupului spaniol Cosgra, cu producție la Crespià, Girona; numele circulă și în alte contexte, dar identitatea confirmată prin site-ul citit este spaniolă." },
      { q: "Ce clase de eficiență acoperă motoarele Cemer?", a: "Gama Cemer include motoare IE1-S3, IE2 monofazat, IE3 și IE4, acoperind atât aplicațiile standard cât și cele unde eficiența energetică ridicată e obligatorie sau justificată economic." },
      { q: "Livrați motoare Cemer în România și cât durează?", a: "Aducem motoare Cemer la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de clasa de eficiență și de disponibilitate." },
      { q: "Ce trebuie să trimit pentru o ofertă de motor Cemer?", a: "Trimiteți puterea în kW, clasa de eficiență dorită, tensiunea de alimentare și, dacă aplicația e într-un mediu cu risc de explozie, cerința de certificare ATEX." },
      { q: "Are Cemer motoare pentru aplicații hidraulice?", a: "Da, gama Cemer include motoare dedicate unităților de putere hidraulică, pompelor, mixerelor și compresoarelor, orientate spre aplicații de proces industrial, nu doar spre uz general." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Electric motors - Cemer Innovation", url: "https://cemer-innovation.com/en/electric-motors/", publisher: "Cosgra / Cemer Innovation", accessed: "2026-09-22" },
      { title: "Cemer Innovation - Home", url: "https://cemer-innovation.com/en/", publisher: "Cosgra / Cemer Innovation", accessed: "2026-09-22" }
    ]
  },

  varvel: {
    name: "Varvel",
    founded: 1955,
    headquarters: "Valsamoggia (Bologna), Italia",
    overview: `Varvel este un producător italian de reductoare, motoreductoare și variatoare de viteză, cu sediul la Valsamoggia, lângă Bologna, activ din 1955. Gama e foarte largă pentru un producător de reductoare — melcate (RS, RT), melcate cu roată elicoidală (RA, TA), melcate în două trepte (RS/RS, RT/RT), coaxiale elicoidale (XA, RD), conice-elicoidale (RO, RO2), unghiulare conice-elicoidale (RV), cu axe paralele (RN) și planetare cu joc redus (RG). Pentru România putem oferta atât reductoarele melcate de bază, cât și variantele planetare de precizie.

Ce diferențiază Varvel e combinația dintre acoperirea tehnologică largă — de la melcat simplu la planetar de precizie — și disponibilitatea variantelor certificate ATEX pentru majoritatea liniilor, plus variatoare de viteză cu fricțiune uscată (VR) și planetare (VS). Producătorul menționează un procent constant din cifra de afaceri anuală reinvestit în cercetare și dezvoltare, ceea ce explică numărul mare de familii tehnice diferite din catalog.

Pentru instalații din industrie, ambalare sau manipulare materiale din România, Varvel oferă o gamă italiană completă de transmisii mecanice, utilă acolo unde alegerea între melcat, coaxial sau planetar depinde de spațiul de montaj și de precizia cerută, nu doar de raportul de reducere.`,
    whyChoose: [
      "Gamă tehnologică foarte largă — melcate, coaxiale elicoidale, conice-elicoidale, cu axe paralele și planetare",
      "Reductoare planetare cu joc redus (RG), pentru aplicații de poziționare precisă",
      "Variatoare de viteză mecanice, atât cu fricțiune uscată (VR) cât și planetare (VS)",
      "Variante certificate ATEX disponibile pe majoritatea liniilor din gamă",
      "Producție 100% italiană, cu reinvestire constantă în cercetare și dezvoltare",
      "Peste 60 de ani de activitate în construcția de reductoare și motoreductoare"
    ],
    keyProducts: [
      { name: "Riduttori a vite senza fine RS-RT", description: "Reductoare melcate, soluția clasică și cea mai răspândită din gamă, pentru rapoarte de reducere mari într-un gabarit compact, cu variante RS și RT după configurația constructivă." },
      { name: "Riduttori epicicloidali RG", description: "Reductoare planetare cu joc unghiular redus, pentru aplicații care cer poziționare precisă și rigiditate mecanică ridicată, superioare reductoarelor melcate din acest punct de vedere." },
      { name: "Riduttori ortogonali RV", description: "Reductoare unghiulare cu roți conice și elicoidale în trei trepte, pentru transmisii la 90 de grade unde e nevoie de raport de reducere mare și randament mai bun decât la melcat." },
      { name: "Variatori di velocità VR-VS", description: "Variatoare mecanice de viteză, în variantă cu fricțiune uscată (VR) sau planetară (VS), pentru reglarea turației de ieșire fără electronică de control suplimentară." }
    ],
    industries: [
      "Ambalare — motoreductoare pentru linii de ambalat cu precizie de poziționare",
      "Manipulare materiale — reductoare pentru transportoare și sisteme de sortare",
      "Agricultură — reductoare pentru echipamente de creștere și procesare",
      "Industria alimentară și a băuturilor — motoreductoare pentru linii de producție",
      "Energie eoliană și fotovoltaică — reductoare pentru sisteme de poziționare",
      "Textile — motoreductoare pentru utilaje de procesare continuă"
    ],
    infinitrade: `Pentru Varvel nu avem date proprii de stoc — lucrăm din surse publice ale producătorului și aducem la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Ce putem și ce nu putem confirma depinde de familia tehnologică cerută: reductoarele melcate standard răspund de regulă mai rapid decât variantele planetare de precizie sau cele certificate ATEX. Pentru ofertă trimiteți raportul de reducere dorit, cuplul de ieșire necesar, tipul de montaj și dacă aplicația necesită certificare ATEX. Disponibilitatea imediată pe stoc nu poate fi asumată pentru nicio familie tehnologică din catalogul Varvel.`,
    limitation: "Nu putem confirma combinația exactă motor-reductor pentru un motoreductor complet fără o cerere tehnică punctuală transmisă către Varvel.",
    productCodes: [
      { code: "RS", description: "reductor melcat, configurație de bază" },
      { code: "RT", description: "reductor melcat, variantă constructivă RT" },
      { code: "RA", description: "reductor melcat cu roată elicoidală" },
      { code: "TA", description: "reductor melcat cu roată elicoidală" },
      { code: "RS/RS", description: "reductor melcat în două trepte" },
      { code: "RT/RT", description: "reductor melcat în două trepte" },
      { code: "XA", description: "reductor coaxial elicoidal, o treaptă" },
      { code: "RD", description: "reductor coaxial elicoidal, în linie" },
      { code: "RO2", description: "reductor conic-elicoidal în două trepte" },
      { code: "RO", description: "reductor conic-elicoidal în trei trepte" },
      { code: "RV", description: "reductor unghiular conic-elicoidal, trei trepte" },
      { code: "RN", description: "reductor cu axe paralele" },
      { code: "RG", description: "reductor planetar cu joc redus" },
      { code: "FRP680", description: "reductor elicoidal pentru sisteme agricole" },
      { code: "VR", description: "variator de viteză cu fricțiune uscată" },
      { code: "VS", description: "variator de viteză planetar" }
    ],
    faq: [
      { q: "Ce tipuri de reductoare produce Varvel?", a: "Varvel produce reductoare melcate (RS, RT), coaxiale elicoidale (XA, RD), conice-elicoidale (RO, RO2, RV), cu axe paralele (RN) și planetare cu joc redus (RG), acoperind aproape toate configurațiile mecanice uzuale." },
      { q: "Ce este un reductor planetar RG de la Varvel?", a: "RG este un reductor epicicloidal cu joc unghiular redus, potrivit pentru aplicații care cer poziționare precisă și rigiditate mecanică mai mare decât la un reductor melcat clasic." },
      { q: "Livrați reductoare Varvel în România și cât durează?", a: "Aducem reductoare și motoreductoare Varvel la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2-6 săptămâni de la confirmarea comenzii, în funcție de familia tehnologică aleasă." },
      { q: "Ce trebuie să trimit pentru o ofertă de reductor Varvel?", a: "Trimiteți raportul de reducere dorit, cuplul de ieșire necesar, turația de intrare, tipul de montaj (coaxial, unghiular sau cu axe paralele) și dacă aplicația necesită certificare ATEX." },
      { q: "Are Varvel și variatoare de viteză, nu doar reductoare?", a: "Da, gama Varvel include variatoare mecanice de viteză, în variantă cu fricțiune uscată (VR) sau planetară (VS), pentru reglarea turației de ieșire fără electronică de control suplimentară." }
    ],
    evidenceClass: "zero-evidence",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Varvel - Riduttori, motoriduttori, variatori di velocità", url: "https://www.varvel.com", publisher: "Varvel S.p.A.", accessed: "2026-09-22" },
      { title: "Products - Varvel", url: "https://www.varvel.com/en/products", publisher: "Varvel S.p.A.", accessed: "2026-09-22" }
    ]
  }
};
