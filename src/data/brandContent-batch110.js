// Batch 110 - Branduri-500 val 7 (sept. 2026): JAX, Molydal, Molyslip, Pressol, SCIGRIP, AC Motoren, ICM Motori, Alco Valves, BESA Valves, C.K Tools.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
// OMISE: divinol (sursa oficială divinol.de/divinol.com inaccesibilă prin WebFetch — robots/TLS; doar 1 sursă confirmată, fără coduri reale de produs),
//        schischek (pagina Rotork despre brand e randată dinamic — nu s-au putut extrage coduri/familii de produse reale din conținutul citit).
export const brandContentBatch110 = {
  jax: {
    name: "JAX",
    founded: 1955,
    headquarters: "Menomonee Falls, Wisconsin, SUA",
    overview: `JAX este un producător american de lubrifianți speciali, cu sediul la Menomonee Falls, Wisconsin, activ din 1955. Compania fabrică uleiuri, unsori, aerosoli, pelicule uscate, solvenți și degresanți pentru industrii unde un lubrifiant obișnuit nu face față condițiilor de proces. Din gama JAX putem oferta unsori pentru rulmenți la temperaturi ridicate, uleiuri hidraulice și produse de grad alimentar certificate, potrivite pentru linii unde contactul incidental cu alimentul este posibil.

Ce diferențiază JAX de un producător generalist de lubrifianți este segmentarea fină a gamei — pe lângă uleiurile și unsorile clasice, compania are linii dedicate exclusiv industriei alimentare (seria Halo-Guard FG, uleiul hidraulic Pyro-Flow FG), lubrifianți biodegradabili sub marca Bio-Guard și pelicule uscate din familia Magna-Plate pentru aplicații fără posibilitate de relubrifiere. În categoria lubrifianților industriali speciali, JAX se poziționează alături de branduri precum Klüber Lubrication, cu accent pe soluții pentru medii curate și temperaturi extreme, mai degrabă decât pe uleiuri de uz general.

Pentru piața din România, JAX are sens acolo unde auditurile alimentare sau farmaceutice cer lubrifianți certificați NSF, sau unde echipamentele funcționează la temperaturi peste ce tolerează un ulei mineral standard — linii de ambalare, compresoare de aer și gaz, utilaje din industria cosmetică.`,
    whyChoose: [
      "Gamă segmentată pe aplicație — linii separate pentru industria alimentară, biodegradabile și pelicule uscate, nu un singur ulei universal",
      "Certificare ISO 9001:2015 pentru procesul de fabricație, verificabilă direct pe site-ul producătorului",
      "Membru ILMA și NLGI, asociații de profil pentru industria lubrifianților și a unsorilor",
      "Unsori și uleiuri de grad alimentar NSF, potrivite pentru linii cu contact incidental cu produsul",
      "Peste 180 de produse catalogate pe categorii clare — uleiuri, unsori, aerosoli, pelicule uscate, solvenți"
    ],
    keyProducts: [
      { name: "Seria Bio-Guard", description: "Bio-Guard este linia de lubrifianți acceptabili din punct de vedere ecologic a JAX, formulată pentru aplicații unde scurgerile ajung în sol sau apă — echipamente forestiere, agricole sau marine. Gama include unsori multifuncționale și un ulei dedicat pentru cabluri metalice (Bio-Guard Wire Rope Oil), gândit să reducă impactul asupra mediului fără să compromită protecția anti-uzură. Clienții care cer ofertă trebuie să indice tipul de echipament, temperatura de lucru și dacă produsul intră în contact cu apa sau solul." },
      { name: "H-P Industrial Gear Oil", description: "Seria de uleiuri de transmisie industrială a JAX, pentru reductoare și cutii de viteze supuse la sarcini mari și șocuri. Face parte din gama de uleiuri industriale generale a producătorului, alături de uleiurile hidraulice premium. Pentru ofertă avem nevoie de vâscozitatea ISO cerută de fabricantul reductorului, temperatura ambiantă de funcționare și dacă echipamentul are istoric de spumare sau contaminare cu apă." },
      { name: "Halo-Guard FG", description: "Familia de lubrifianți de grad alimentar a JAX, formulată pentru linii din industria alimentară unde există risc de contact incidental între lubrifiant și produs. Completează seria uleiul hidraulic Pyro-Flow FG ISO 46, tot de grad alimentar. Pentru comandă, clientul trebuie să confirme dacă echipamentul necesită certificare NSF H1 și punctul de aplicare — lanțuri, lagăre sau sisteme hidraulice." }
    ],
    industries: [
      "Industria alimentară și băuturi — lubrifianți NSF pentru linii cu contact incidental",
      "Marină și echipamente offshore — unsori și uleiuri biodegradabile Bio-Guard",
      "Compresoare de aer și gaz — fluide Compresyn pentru cilindri și supape",
      "Agricultură și forestier — unsori și uleiuri hidraulice cu impact redus asupra solului",
      "Cosmetică și sănătate — lubrifianți curați pentru linii de ambalare"
    ],
    certifications: ["ISO 9001:2015 — sistem de management al calității"],
    infinitrade: `Pentru gama JAX lucrăm din surse publice ale producătorului, fără date proprii de stoc pe teritoriul României — spunem clar ce am confirmat pe site și ce rămâne de verificat direct cu fabrica la momentul comenzii. Aducem produsele JAX prin canale de aprovizionare din SUA sau UE, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de disponibilitatea la producător. Pentru ofertă, avem nevoie de codul exact al produsului sau al seriei, cantitatea estimată anual și, pentru variantele alimentare, confirmarea cerinței de certificare NSF. Nu facem promisiuni de disponibilitate constantă pe niciun produs din gamă.`,
    limitation: "Nu confirmăm timpi exacți de livrare pentru variantele de aerosoli, care depind de reglementările de transport pentru produse presurizate.",
    productCodes: [
      { code: "Compresyn HFC", description: "Fluid sintetic pentru compresoare de gaz" },
      { code: "Bio-Guard Grease Series", description: "Unsori multifuncționale cu impact redus asupra mediului" },
      { code: "Bio-Guard Wire Rope Oil", description: "Ulei biodegradabil pentru cabluri metalice și trolii" },
      { code: "Food Grade Penetrating Oil", description: "Ulei penetrant certificat pentru zone cu contact alimentar" },
      { code: "Food-Grade Anti-Seize", description: "Pastă anti-gripaj de grad alimentar" },
      { code: "H-P Industrial Gear Oil Series", description: "Uleiuri de transmisie pentru reductoare industriale" },
      { code: "Halo-Guard FG Series", description: "Lubrifianți de grad alimentar pentru linii de procesare" },
      { code: "Heavy Duty Chain & Cable Lubricant", description: "Lubrifiant pentru lanțuri și cabluri solicitate intens" },
      { code: "Magna-Plate 22", description: "Peliculă uscată lubrifiantă pentru piese cu acces dificil" },
      { code: "Magna-Plate 80 Series", description: "Familie de pelicule uscate pentru relubrifiere dificilă" },
      { code: "Premium Hydraulic Oil Series", description: "Uleiuri hidraulice pentru sisteme industriale de presiune" },
      { code: "Pyro-Flow FG ISO 46", description: "Ulei hidraulic de grad alimentar, clasă de vâscozitate ISO 46" },
      { code: "Pyro-Kote Series", description: "Acoperire protectoare pentru suprafețe metalice expuse" },
      { code: "Ampra-Guard", description: "Lubrifiant special din gama JAX pentru aplicații industriale" }
    ],
    faq: [
      { q: "Ce produce JAX?", a: "JAX fabrică lubrifianți industriali americani — uleiuri, unsori, aerosoli, pelicule uscate și degresanți — cu linii dedicate industriei alimentare, aplicațiilor marine și echipamentelor la temperaturi extreme, conform informațiilor publicate pe site-ul producătorului." },
      { q: "Ce înseamnă certificarea NSF la unsorile JAX?", a: "NSF H1 arată că lubrifiantul poate fi folosit în zone unde există risc de contact incidental cu alimentul, fără să pună în pericol siguranța produsului — relevant pentru seria Halo-Guard FG și pentru uleiul hidraulic Pyro-Flow FG ISO 46 din gama JAX." },
      { q: "Cât durează livrarea pentru un lubrifiant JAX în România?", a: "Termenul orientativ este de 2–6 săptămâni la comandă, în funcție de disponibilitatea produsului la producător și de ruta de aprovizionare din SUA sau UE; nu putem confirma un termen fix înainte de verificarea codului exact." },
      { q: "Ce trebuie să trimit pentru o ofertă de lubrifiant JAX?", a: "Codul exact al produsului sau al seriei, cantitatea estimată anual, temperatura de lucru a echipamentului și, pentru variantele alimentare, confirmarea cerinței de certificare NSF H1 înainte de a pregăti oferta." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "JAX — Industrial, Marine & Food Grade Lubricants", url: "https://jax.com", publisher: "JAX Inc.", accessed: "2026-09-25" },
      { title: "Products — JAX", url: "https://jax.com/products/", publisher: "JAX Inc.", accessed: "2026-09-25" }
    ],
  },
  molydal: {
    name: "Molydal",
    overview: `Molydal este un producător francez de lubrifianți industriali speciali, cu peste 60 de ani de activitate în domeniu, conform propriei prezentări. Gama acoperă unsori și paste tehnice, lubrifianți de întreținere, degresanți, fluide pentru prelucrarea metalului și uleiuri hidraulice, inclusiv variante de grad alimentar. Din portofoliul Molydal putem oferta unsori pentru temperaturi înalte sau viteze mari, degresanți fără solvenți și uleiuri hidraulice certificate pentru contact alimentar incidental.

Ce diferențiază gama Molydal e diviziunea clară pe familii tehnice: unsorile multifuncționale (seria Multi) stau lângă unsori pentru temperaturi extreme (seria AGL, formulate cu baze sintetice) și unsori pentru viteze mari (seria LCH/TGV), fiecare cu compoziție dedicată, nu o singură rețetă adaptată. Uleiurile hidraulice de grad alimentar din seria Hydro AL respectă cerințele NSF/PMUC menționate de producător. În segmentul lubrifianților tehnici de nișă, Molydal se compară cu Klüber Lubrication, cu accent pe soluții pentru industrii specifice — siderurgie, granulare plastic, industrie alimentară — mai degrabă decât pe un catalog generalist.

Pentru piața din România, Molydal are sens la linii de producție care cer un lubrifiant cu compatibilitate alimentară certificată sau la utilaje care rulează la temperaturi peste ce tolerează o unsoare minerală obișnuită — extrudere plastic, linii de ambalare, cuptoare industriale.`,
    whyChoose: [
      "Familii tehnice separate pentru fiecare condiție de lucru — temperatură, viteză, rezistență la apă — nu o rețetă universală",
      "Uleiuri hidraulice de grad alimentar seria Hydro AL, menționate ca fiind conforme cerințelor NSF/PMUC",
      "Degresanți fără solvenți, potriviți pentru ateliere care limitează expunerea la vapori organici",
      "Peste 60 de ani de activitate în lubrifianți industriali, conform prezentării producătorului",
      "Gamă completă de la unsori la fluide de prelucrare a metalului, sub un singur brand"
    ],
    keyProducts: [
      { name: "Unsori Seria AGL/AL", description: "Familia de unsori Molydal pentru temperaturi ridicate și condiții severe, cu variante precum AGL 75 AL și AGL 80 AL formulate cu baze sintetice pentru a rezista la oxidare termică prelungită. Completează gama unsoarea AL SI 55, pe bază de silicon, pentru contact cu elastomeri sensibili. Pentru ofertă avem nevoie de temperatura maximă de lucru a lagărului sau angrenajului și de intervalul de relubrifiere dorit." },
      { name: "Uleiuri Hidraulice Seria Hydro AL", description: "Gama de uleiuri hidraulice de grad alimentar Molydal, cu variante de vâscozitate Hydro 32 AL, Hydro 46 AL și Hydro 68 AL, menționate ca fiind conforme cerințelor de calitate alimentară ale producătorului. Clientul trebuie să confirme clasa de vâscozitate ISO cerută de pompa hidraulică și dacă instalația necesită certificare de contact alimentar." },
      { name: "Degresanți Seria KL", description: "Familie de degresanți industriali Molydal, cu variante pe bază de apă (KL BIO, KLW 10) și variante pe bază de solvent (KL 114, KL 111) pentru curățare intensă în ateliere mecanice. Pentru ofertă, precizați dacă preferați o formulă fără solvenți și tipul de murdărie de îndepărtat — ulei, grăsime, reziduuri de prelucrare." }
    ],
    industries: [
      "Prelucrarea metalului — fluide de tăiere și ambutisare din seriile Luba și Solcut",
      "Industria alimentară — uleiuri hidraulice și unsori de grad alimentar",
      "Siderurgie — unsori pentru temperaturi înalte și sarcini mecanice mari",
      "Industria plasticului — degresanți și lubrifianți pentru linii de granulare și injecție",
      "Industria auto — lubrifianți de întreținere pentru linii de asamblare"
    ],
    infinitrade: `Pentru Molydal ne bazăm pe informațiile publice disponibile pe site-ul producătorului, fără date proprii despre stocul din fabrica franceză. Aducem lubrifianții Molydal prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de familia de produs și de confirmarea producătorului. Pentru ofertă, avem nevoie de codul exact al unsorii sau uleiului, cantitatea estimată și, pentru variantele alimentare, cerința de certificare NSF. Nu facem promisiuni de disponibilitate constantă pentru niciun produs din gamă — verificăm fiecare comandă direct cu fabrica.`,
    limitation: "Nu putem confirma certificări specifice la nivel de companie dincolo de mențiunile generice PMUC și NSF de pe unele fișe de produs.",
    productCodes: [
      { code: "AGL 65 AL", description: "Unsoare sintetică multifuncțională pentru temperaturi ridicate" },
      { code: "MULTI TP", description: "Unsoare multifuncțională pentru aplicații industriale generale" },
      { code: "MULTI 110", description: "Unsoare de uz general pentru lagăre și articulații" },
      { code: "AGR 100", description: "Unsoare industrială pentru sarcini mecanice moderate" },
      { code: "AL SI 55", description: "Unsoare siliconică pentru contact cu elastomeri sensibili" },
      { code: "AGL 75 AL", description: "Unsoare sintetică pentru temperaturi înalte și sarcini mari" },
      { code: "AGL 80 AL", description: "Variantă de unsoare sintetică pentru condiții severe de temperatură" },
      { code: "LUZOL AL", description: "Unsoare specială pentru aplicații la temperatură extremă" },
      { code: "TGV 2000", description: "Unsoare pentru viteze mari și frecare redusă" },
      { code: "LCH 600", description: "Unsoare pentru lagăre rapide, vâscozitate medie" },
      { code: "LCH 250", description: "Variantă de unsoare pentru viteze mari, vâscozitate redusă" },
      { code: "OG 844", description: "Unsoare rezistentă la apă pentru medii umede" },
      { code: "TPC 950 G", description: "Pastă rezistentă la apă pentru etanșări și îmbinări" },
      { code: "KL 9 H", description: "Degresant industrial pentru curățare de atelier" },
      { code: "KL BIO", description: "Degresant pe bază de apă, fără solvenți" },
      { code: "KLW 10", description: "Degresant apos pentru suprafețe metalice" },
      { code: "KL 114", description: "Degresant pe bază de solvent pentru curățare intensă" },
      { code: "KL 111", description: "Variantă de degresant solvent pentru piese murdare de ulei" },
      { code: "KL 93 E", description: "Degresant industrial pentru echipamente și piese metalice" },
      { code: "HYDRO 32 AL", description: "Ulei hidraulic de grad alimentar, vâscozitate ISO 32" },
      { code: "HYDRO 46 AL", description: "Ulei hidraulic de grad alimentar, vâscozitate ISO 46" },
      { code: "HYDRO 68 AL", description: "Ulei hidraulic de grad alimentar, vâscozitate ISO 68" },
      { code: "H 125 AL", description: "Ulei integral pentru operații de tăiere a metalului" },
      { code: "LUBA 216 AL", description: "Ulei ecologic pentru operații de ambutisare" },
      { code: "LUBA 21", description: "Ulei de prelucrare pentru tăiere și ștanțare" },
      { code: "SOLCUT 700 BS", description: "Ulei solubil pentru răcire și lubrifiere la prelucrare" },
      { code: "SOLESTER 77", description: "Emulsie de răcire pentru operații de prelucrare a metalului" }
    ],
    faq: [
      { q: "Ce produce Molydal?", a: "Molydal este un producător francez de lubrifianți industriali — unsori, degresanți, fluide de prelucrare a metalului și uleiuri hidraulice, inclusiv variante de grad alimentar, conform informațiilor publicate pe site-ul companiei." },
      { q: "Ce înseamnă seria Hydro AL de la Molydal?", a: "Hydro AL este gama de uleiuri hidraulice de grad alimentar a Molydal, disponibilă în clasele de vâscozitate ISO 32, 46 și 68, menționată de producător ca fiind conformă cerințelor de calitate pentru industria alimentară." },
      { q: "Cum aleg unsoarea Molydal potrivită după cod?", a: "Codul indică familia tehnică — AGL pentru temperaturi înalte, LCH/TGV pentru viteze mari, MULTI pentru uz general — și trebuie corelat cu temperatura de lucru și sarcina mecanică a lagărului sau angrenajului dumneavoastră." },
      { q: "Livrați produse Molydal în România și cât durează?", a: "Aducem produsele Molydal la comandă prin canale din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de familia de produs și de confirmarea disponibilității la producător." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Molydal — Solutions de lubrification industrielle", url: "https://www.molydal.com", publisher: "Molydal", accessed: "2026-09-25" },
      { title: "Molydal — Company", url: "https://www.molydal.com/en", publisher: "Molydal", accessed: "2026-09-25" }
    ],
  },
  molyslip: {
    name: "Molyslip",
    headquarters: "Irlam, Manchester, Marea Britanie",
    overview: `Molyslip este un producător britanic de lubrifianți industriali de specialitate, cu sediul la Irlam, lângă Manchester, și peste 85 de ani de activitate în domeniu, conform prezentării proprii. Gama acoperă unsori pentru rulmenți la temperaturi extreme, compuși anti-gripaj, unsori pentru angrenaje deschise și produse certificate pentru industria alimentară. Din portofoliul Molyslip putem oferta unsori Arvina pentru aplicații cu sarcini mari sau temperaturi ridicate, potrivite acolo unde o unsoare minerală standard se degradează rapid.

Ce diferențiază gama Molyslip e granularea fină a familiei Arvina — fiecare variantă (EP2, HX2, MX2, XT2, XK1) are o combinație specifică de bază și îngroșător pentru o condiție de lucru precisă: sarcină mare, viteză mare, temperatură extremă sau contact alimentar. Compusul anti-gripaj Copaslip, cunoscut sub numele companiei, completează gama pentru asamblări expuse la coroziune și gripaj. În segmentul unsorilor industriale de specialitate, Molyslip se poziționează alături de Klüber Lubrication, cu accent pe soluții pentru rulmenți și lagăre solicitate, nu pe un catalog generalist de unsori.

Pentru piața din România, Molyslip are sens la utilaje cu rulmenți expuși la temperaturi extreme, la asamblări filetate predispuse la gripaj sau la linii alimentare care cer unsori certificate NSF — nave, echipamente portuare, linii de procesare a alimentelor.`,
    whyChoose: [
      "Familia Arvina împarte peste 15 variante pe condiții de lucru precise — temperatură, sarcină, viteză, contact alimentar",
      "Compusul anti-gripaj Copaslip, un nume consacrat în asamblările expuse la coroziune",
      "Variante NSF certificate — Arvina FM2 și FX2 — pentru industria alimentară",
      "Peste 85 de ani de experiență în unsori industriale, conform prezentării producătorului",
      "Unsoare siliconică Arvina SG3, certificată WRAS pentru contact cu apa potabilă"
    ],
    keyProducts: [
      { name: "Copaslip", description: "Compusul anti-gripaj pe bază de aluminiu al Molyslip, folosit la asamblări filetate și îmbinări expuse la temperaturi ridicate sau coroziune, pentru a preveni griparea la demontare. Pentru ofertă, precizați temperatura maximă de expunere a îmbinării și dacă aplicația implică contact cu apă sărată sau agenți corozivi." },
      { name: "Familia Arvina", description: "Seria de unsori pentru rulmenți a Molyslip, cu variante dedicate — EP2 pentru uz general la sarcini mari, HX2 și MX2 pentru sarcini extreme, XT2 pentru temperaturi și viteze ridicate, FM2 și FX2 certificate NSF pentru industria alimentară. Pentru ofertă avem nevoie de temperatura de lucru a rulmentului, viteza de rotație și dacă aplicația necesită certificare alimentară." },
      { name: "Arvina OG0/OG2", description: "Unsori pentru angrenaje deschise ale Molyslip, cu varianta OG0 sub formă sprayabilă pentru aplicare rapidă și OG2 pentru aplicare manuală, destinate angrenajelor expuse la praf și condiții dure. Pentru comandă, precizați metoda de aplicare dorită și dimensiunea angrenajului." }
    ],
    industries: [
      "Marină și porturi — unsori Arvina pentru rulmenți expuși la apă sărată",
      "Industria alimentară — unsori Arvina FM2/FX2 certificate NSF",
      "Sticlă — unsori pentru temperaturi ridicate din familia Arvina",
      "Textile — lubrifianți pentru utilaje cu viteze mari de rotație",
      "Petrol și gaze — compusul anti-gripaj Copaslip pentru asamblări filetate"
    ],
    certifications: ["NSF — pentru variantele alimentare Arvina FM2 și FX2", "WRAS — pentru unsoarea siliconică Arvina SG3"],
    infinitrade: `Pentru Molyslip nu avem, la acest brand, date proprii despre stocul din fabrica britanică — informațiile de mai sus vin din materialele publicate de producător. Aducem produsele Molyslip prin canale de aprovizionare din Regatul Unit sau Uniunea Europeană, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de varianta cerută. Pentru ofertă, trimiteți denumirea exactă a produsului (ex. Arvina EP2, Copaslip), temperatura de lucru și, dacă e cazul, cerința de certificare NSF sau WRAS. Nu facem promisiuni de disponibilitate constantă pe nicio variantă din gamă.`,
    limitation: "Nu putem confirma anul exact al fondării companiei, doar mențiunea generică de peste 85 de ani de activitate de pe site-ul producătorului.",
    productCodes: [
      { code: "Copaslip", description: "Compus anti-gripaj pe bază de aluminiu pentru asamblări filetate" },
      { code: "Alumslip", description: "Compus anti-gripaj pe bază de aluminiu, variantă industrială" },
      { code: "Aquatest", description: "Inhibitor de coroziune concentrat pentru sisteme cu apă" },
      { code: "Aquavap", description: "Inhibitor de coroziune solubil în apă, cu protecție în fază de vapori" },
      { code: "Arvina AK2", description: "Unsoare pentru temperaturi ridicate" },
      { code: "Arvina AW", description: "Unsoare pentru sarcini mari în medii extreme" },
      { code: "Arvina AW ECO", description: "Unsoare cu impact redus pentru angrenaje deschise și cricuri hidraulice" },
      { code: "Arvina EH2", description: "Unsoare pentru temperaturi ridicate și sarcini mari pe rulmenți" },
      { code: "Arvina EP2", description: "Unsoare multifuncțională de înaltă performanță pentru rulmenți" },
      { code: "Arvina EX2", description: "Unsoare pentru rulmenți la temperaturi extreme" },
      { code: "Arvina FK1", description: "Unsoare sintetică de grad alimentar pentru temperaturi ridicate" },
      { code: "Arvina FM2", description: "Unsoare certificată NSF pentru rulmenți în industria alimentară" },
      { code: "Arvina FX2", description: "Unsoare cu PTFE, certificată NSF, pentru rulmenți alimentari" },
      { code: "Arvina HX2", description: "Unsoare pentru rulmenți supuși la sarcini mari" },
      { code: "Arvina MB2", description: "Unsoare nefuzibilă pentru rulmenți la sarcini mari" },
      { code: "Arvina MX2", description: "Unsoare multifuncțională pentru performanțe extreme" },
      { code: "Arvina OG0", description: "Unsoare sprayabilă pentru angrenaje deschise" },
      { code: "Arvina OG2", description: "Unsoare pentru angrenaje deschise, aplicare manuală" },
      { code: "Arvina SG3", description: "Unsoare siliconică pentru asamblare, certificată pentru contact cu apa potabilă" },
      { code: "Arvina XK1", description: "Unsoare sintetică pentru temperaturi ridicate pe rulmenți" },
      { code: "Arvina XR Range", description: "Familie de unsori de performanță extremă pentru rulmenți" },
      { code: "Arvina XT2", description: "Unsoare pentru temperaturi și viteze ridicate pe rulmenți" },
      { code: "Arvina FG2", description: "Unsoare sintetică multifuncțională de grad alimentar" },
      { code: "Arvina FS2", description: "Unsoare sintetică de grad alimentar pentru performanțe extreme" },
      { code: "AS40", description: "Pastă anti-zgâriere pentru asamblare de piese metalice" }
    ],
    faq: [
      { q: "Ce produce Molyslip?", a: "Molyslip fabrică unsori industriale de specialitate, compuși anti-gripaj precum Copaslip și lubrifianți certificați NSF pentru industria alimentară, la fabrica din Irlam, lângă Manchester, conform materialelor publicate de producătorul britanic." },
      { q: "Ce echivalent Molyslip există pentru o unsoare EP2 obișnuită?", a: "Arvina EP2 este varianta multifuncțională de performanță ridicată din gama Molyslip, recomandată de producător pentru rulmenți supuși la sarcini mari; alegerea exactă depinde de temperatura și viteza de lucru a aplicației." },
      { q: "Ce este Copaslip și la ce se folosește?", a: "Copaslip este compusul anti-gripaj pe bază de aluminiu al Molyslip, folosit la asamblări filetate expuse la temperaturi ridicate sau coroziune, pentru a preveni blocarea la demontare." },
      { q: "Livrați produse Molyslip în România?", a: "Da, la comandă, prin canale de aprovizionare din Regatul Unit sau Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de produsul și cantitatea solicitată." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Molyslip — Speciality Lubricants Manufacturer", url: "https://www.molyslip.co.uk", publisher: "Molyslip", accessed: "2026-09-25" },
      { title: "Shop — Molyslip", url: "https://molyslip.co.uk/shop/", publisher: "Molyslip", accessed: "2026-09-25" }
    ],
  },
  pressol: {
    name: "Pressol",
    founded: 1914,
    overview: `Pressol este un producător german de tehnică de ungere și echipamente de atelier, activ din 1914, conform site-ului propriu. Gama acoperă pompe de gresat manuale și cu aer comprimat, recipiente și rezervoare pentru lubrifianți și combustibili, sisteme de gestiune a motorinei și a uleiului, precum și echipamente pentru soluția AdBlue. Din portofoliul Pressol putem oferta pompe de ungere manuale, recipiente pentru transfer de lubrifianți și echipamente de dozare pentru ateliere auto și industriale.

Ce diferențiază Pressol de un simplu furnizor de recipiente este integrarea sistemelor de management — motorina, uleiul și AdBlue-ul sunt tratate ca fluxuri gestionate, cu sisteme dedicate de urmărire a consumului (DMS pentru motorină, ÖMS pentru ulei), nu doar cu rezervoare pasive. Compania menționează pe site producția a milioane de piese anual, cu un catalog amplu de referințe pentru tehnica de ungere și de atelier. Ca profil, Pressol e mai degrabă un partener complementar în echipamente de atelier, alături de branduri de scule și lubrifianți, decât un concurent direct pe o singură categorie.

Pentru piața din România, Pressol are sens la ateliere auto și service-uri industriale care vor pompe de gresat fiabile, recipiente etanșe pentru transferul lubrifianților sau un sistem simplu de gestiune a consumului de motorină și AdBlue.`,
    whyChoose: [
      "Peste un secol de activitate în tehnica de ungere, din 1914, conform prezentării producătorului",
      "Sisteme dedicate de gestiune a consumului de motorină (DMS) și ulei (ÖMS), nu doar rezervoare pasive",
      "Gamă amplă de pompe de gresat, de la variante cu o mână la modele cu aer comprimat",
      "Certificare ISO 9001:2015 pentru procesele de fabricație, menționată pe site",
      "Echipamente dedicate pentru AdBlue, separate de linia de combustibili tradiționali"
    ],
    keyProducts: [
      { name: "Pompe de Gresat (Fettpressen)", description: "Familia de pompe de gresat manuale a Pressol, disponibile în variante de acționare cu o mână sau cu două mâini, pentru aplicarea unsorii la rulmenți, articulații și puncte de gresare din ateliere auto sau industriale. Pentru ofertă, precizați tipul de acționare dorit și capacitatea cartușului sau rezervorului necesar." },
      { name: "Sisteme de Management Combustibil (DMS/ÖMS)", description: "Sistemele Dieselmanagementsystem și Ölmanagementsystem ale Pressol urmăresc consumul de motorină, respectiv ulei, la nivel de flotă sau atelier, integrate cu rezervoarele și pompele de distribuție ale producătorului. Pentru configurare, precizați numărul de puncte de alimentare și dacă doriți raportare electronică a consumului." },
      { name: "Recipiente pentru Lubrifianți și AdBlue", description: "Gama de recipiente și rezervoare Pressol pentru depozitarea și transferul lubrifianților, combustibililor și soluției AdBlue, în variante staționare sau portabile. Pentru comandă, precizați capacitatea necesară, fluidul depozitat și dacă instalația necesită pompă integrată." }
    ],
    industries: [
      "Ateliere auto — pompe de gresat și recipiente pentru transferul lubrifianților",
      "Transport și logistică — sisteme de gestiune AdBlue pentru flote",
      "Agricultură — echipamente de gresat pentru utilaje de teren",
      "Construcții — recipiente pentru motorină pe șantier",
      "Industrie generală — sisteme de dozare a uleiului la puncte fixe de mentenanță"
    ],
    certifications: ["ISO 9001:2015 — sistem de management al calității", "ISO 14001:2015 — sistem de management de mediu"],
    infinitrade: `Pentru gama Pressol lucrăm din surse publice ale producătorului, fără date proprii despre stocul din fabrica germană. Aducem pompele de gresat, recipientele și sistemele de management Pressol prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de configurație. Pentru ofertă, avem nevoie de tipul de echipament dorit (pompă, recipient, sistem de management), capacitatea necesară și fluidul manipulat. Nu facem promisiuni de disponibilitate constantă pentru nicio referință din catalogul producătorului.`,
    limitation: "Nu putem confirma coduri de model exacte pentru fiecare pompă sau recipient din catalogul Pressol, doar categoriile și familiile publicate pe site.",
    productCodes: [
      { code: "Schmiertechnik (Lubrication Equipment)", description: "Categorie de pompe și echipamente de ungere manuale" },
      { code: "Werkstatttechnik (Garage Technology)", description: "Categorie de echipamente și dispozitive pentru ateliere auto" },
      { code: "Diesel und Heizöl", description: "Categorie de echipamente pentru motorină și combustibil de încălzire" },
      { code: "Urea/AdBlue", description: "Categorie de echipamente pentru soluția AdBlue" },
      { code: "Tanks", description: "Categorie de recipiente și rezervoare pentru fluide" },
      { code: "PRELIxx PRO", description: "Echipament din gama de tehnică de ungere Pressol" },
      { code: "LubeFILL 10 PRO", description: "Sistem de umplere pentru lubrifianți, lansat recent de Pressol" },
      { code: "Dieselmanagementsystem (DMS)", description: "Sistem de gestiune și urmărire a consumului de motorină" },
      { code: "Ölmanagementsystem (ÖMS)", description: "Sistem de gestiune și urmărire a consumului de ulei" },
      { code: "Fettpresse - o mână", description: "Pompă de gresat cu acționare manuală, o mână" },
      { code: "Fettpresse - două mâini", description: "Pompă de gresat cu acționare manuală, două mâini" }
    ],
    faq: [
      { q: "Ce produce Pressol?", a: "Pressol fabrică echipamente pentru tehnica de ungere și ateliere — pompe de gresat, recipiente pentru lubrifianți și combustibili, sisteme de gestiune a motorinei, uleiului și AdBlue, conform categoriilor publicate pe site-ul producătorului german." },
      { q: "Ce este sistemul DMS de la Pressol?", a: "Dieselmanagementsystem (DMS) este sistemul Pressol de urmărire a consumului de motorină la nivel de flotă sau atelier, integrat cu rezervoarele și pompele de distribuție ale producătorului." },
      { q: "Livrați echipamente Pressol în România?", a: "Da, la comandă, prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de tipul de pompă, recipient sau sistem de management solicitat." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Pressol — Schmier- und Werkstatttechnik", url: "https://www.pressol.com", publisher: "Pressol Maschinenfabrik", accessed: "2026-09-25" },
      { title: "Pressol — Product Categories", url: "https://www.pressol.com/en/", publisher: "Pressol Maschinenfabrik", accessed: "2026-09-25" }
    ],
  },
  scigrip: {
    name: "SCIGRIP",
    headquarters: "Durham, Carolina de Nord, SUA",
    overview: `SCIGRIP este un producător american de adezivi structurali metacrilici (MMA), cu sediul la Durham, Carolina de Nord, și facilități de producție în Statele Unite și Regatul Unit. Gama acoperă adezivi pentru asamblări marine, feroviare, auto și industriale, plus adezivi acrilici cu conținut redus de compuși organici volatili. Din portofoliul SCIGRIP putem oferta adezivi structurali pentru metal, plastic și compozite, potriviți acolo unde sudura sau șuruburile nu sunt o opțiune practică.

Ce diferențiază adezivii SCIGRIP e segmentarea pe timp de priză și tip de substrat: seria SG100 e gândită pentru structuri mici cu timp de lucru de 12–18 minute, seria SG230HV pentru structuri mari cu timp de lucru de până la 70 de minute, iar seria SG3000 pentru asamblarea metalelor galvanizate fără primer sau pregătire prealabilă a suprafeței. Adezivii cu VOC redus (SG42, SG46C) răspund la cerințe de mediu tot mai stricte în ateliere. Ca profil tehnic, SCIGRIP e mai degrabă complementar unei game de lubrifianți și adezivi industriali decât un concurent direct pe categoria de unsori.

Pentru piața din România, SCIGRIP are sens la asamblarea compozitelor din construcția de ambarcațiuni, la panouri din materiale mixte pentru vehicule sau la structuri metalice unde sudura ar deforma piesa sau nu e permisă de proiectant.`,
    whyChoose: [
      "Adezivi MMA fără primer pentru metale galvanizate — seria SG3000 elimină o etapă din procesul de asamblare",
      "Timp de lucru variat, de la 1 minut (SG400LSE) până la 70 de minute (SG230HV), pentru orice ritm de asamblare",
      "Recunoașteri de la organisme de clasificare navală — DNV GL, Lloyd's Register",
      "Adezivi cu VOC redus (SG42, SG46C) pentru ateliere cu cerințe stricte de mediu",
      "Certificare GREENGUARD Gold pentru emisii reduse în spații ocupate"
    ],
    keyProducts: [
      { name: "Seria SG100/SG200", description: "Adezivi MMA rezistenți la UV, gândiți pentru structuri de dimensiuni mici sau medii, cu timp de lucru între 8 și 47 de minute în funcție de variantă. Compatibili cu multiple substraturi metalice și plastice. Pentru ofertă, precizați materialele de îmbinat și timpul de lucru dorit în funcție de ritmul de producție." },
      { name: "Seria SG3000", description: "Adeziv structural MMA pentru asamblarea metalelor galvanizate și zincate, fără primer sau pregătire prealabilă a suprafeței, cu timp de lucru de 6–15 minute. Reduce numărul de etape din procesul de asamblare față de un adeziv clasic cu primer. Pentru comandă, precizați tipul de metal și grosimea stratului de zinc." },
      { name: "Seria SG600/SG800", description: "SG600 este adezivul SCIGRIP dedicat lipirii materialelor plastice, iar SG800 e formulat pentru temperaturi ridicate cu tratament termic ulterior (post bake). Pentru ofertă, precizați tipurile de plastic sau metal de îmbinat și dacă asamblarea va trece printr-un proces termic ulterior." }
    ],
    industries: [
      "Construcții navale — adezivi structurali pentru panouri compozite și metal",
      "Feroviar — asamblări structurale pentru vagoane și componente",
      "Auto — lipire de panouri și componente din plastic",
      "Energie eoliană — asamblare de componente pentru turbine",
      "Vehicule off-highway — structuri asamblate fără sudură"
    ],
    certifications: ["GREENGUARD Gold — pentru emisii reduse în spații ocupate", "UL Recognized Component — pentru anumite produse din gamă"],
    infinitrade: `Pentru SCIGRIP lucrăm din informațiile publice disponibile pe site-ul producătorului, fără date proprii despre stocul din fabricile din SUA sau Regatul Unit. Aducem adezivii SCIGRIP prin canale de aprovizionare din Uniunea Europeană sau direct din SUA, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de serie și cantitate. Pentru ofertă, avem nevoie de materialele de îmbinat, timpul de lucru dorit și, dacă e cazul, cerința de tratament termic ulterior. Nu facem promisiuni de disponibilitate constantă pentru nicio serie din gamă.`,
    limitation: "Nu putem confirma anul fondării companiei, informație care nu apare explicit pe paginile citate ale producătorului.",
    productCodes: [
      { code: "SG100", description: "Adeziv MMA rezistent la UV pentru structuri mici" },
      { code: "SG200", description: "Adeziv MMA pentru structuri mici, timp de lucru variabil" },
      { code: "SG230HV", description: "Adeziv MMA pentru structuri mari, timp de lucru extins" },
      { code: "SG300", description: "Adeziv MMA pentru lipirea metalelor, fără primer necesar" },
      { code: "SG3000", description: "Adeziv MMA pentru metale galvanizate, fără primer" },
      { code: "SG350L", description: "Adeziv MMA pentru îmbinarea materialelor mixte" },
      { code: "SG400LSE", description: "Adeziv pentru substraturi cu energie de suprafață scăzută" },
      { code: "SG600", description: "Adeziv MMA pentru lipirea materialelor plastice" },
      { code: "SG800", description: "Adeziv MMA pentru temperaturi ridicate, cu tratament termic ulterior" },
      { code: "SG5000", description: "Adeziv MMA de uz general pentru reparații de mulaje" },
      { code: "SG42", description: "Adeziv acrilic cu conținut redus de VOC" },
      { code: "SG46C", description: "Variantă de adeziv acrilic cu VOC redus" },
      { code: "MP100", description: "Primer metalic pentru pregătirea suprafețelor înainte de lipire" }
    ],
    faq: [
      { q: "Ce produce SCIGRIP?", a: "SCIGRIP fabrică adezivi structurali metacrilici (MMA) pentru asamblări marine, feroviare, auto și industriale, cu facilități de producție în SUA și Regatul Unit, conform site-ului producătorului." },
      { q: "Cum aleg adezivul SCIGRIP potrivit după cod?", a: "Codul indică familia și timpul de lucru — SG100/SG200 pentru structuri mici, SG230HV pentru structuri mari, SG3000 pentru metale galvanizate fără primer — alegerea finală depinde de materialele îmbinate și ritmul de asamblare." },
      { q: "Are SCIGRIP adezivi fără primer pentru metal galvanizat?", a: "Da, seria SG3000 este formulată special pentru asamblarea metalelor galvanizate și zincate fără primer sau pregătire prealabilă a suprafeței, cu timp de lucru de 6–15 minute, conform descrierii producătorului." },
      { q: "Livrați adezivi SCIGRIP în România?", a: "Da, la comandă, prin canale de aprovizionare din Uniunea Europeană sau direct din SUA, cu termen orientativ de 2–6 săptămâni, în funcție de seria și cantitatea solicitate." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SCIGRIP Adhesives — Structural Adhesives", url: "https://scigripadhesives.com/", publisher: "SCIGRIP", accessed: "2026-09-25" },
      { title: "Products — SCIGRIP Adhesives", url: "https://scigripadhesives.com/products/", publisher: "SCIGRIP", accessed: "2026-09-25" }
    ],
  },
  "ac-motoren": {
    name: "AC Motoren",
    overview: `AC Motoren este un producător german de motoare electrice standard IEC, cu game de joasă și înaltă tensiune, motoare monofazate, motoare cu comutare de poli și variante antiexplozive. Conform site-ului propriu, compania acoperă clasele de eficiență energetică IE2, IE3, IE4 și IE5. Din gama AC Motoren putem oferta motoare trifazate standard, motoare cu frână integrată și motoare pentru zone cu risc de explozie, pentru aplicații industriale cu cerințe variate de eficiență.

Ce diferențiază AC Motoren e acoperirea întregii plaje de clase de eficiență, de la IE2 la IE5, în aceeași familie constructivă — de exemplu seria ACM 100 L, disponibilă atât în variantă IE3 (PHE) cât și IE4 (SPE), cu aceleași dimensiuni de montare (B3, B5, B14a, B34a, B35) și clasă de protecție IP55. Această flexibilitate permite înlocuirea unui motor existent cu o clasă de eficiență superioară fără modificarea bazei de montaj. În categoria motoarelor electrice standard IEC, AC Motoren se compară cu ATB, cu accent pe eficiență energetică ridicată pe toată gama de puteri.

Pentru piața din România, AC Motoren are sens la retehnologizări unde clientul vrea o clasă de eficiență superioară (IE4/IE5) fără schimbarea dimensiunilor de montaj, sau la aplicații cu risc de explozie care cer motoare certificate corespunzător.`,
    whyChoose: [
      "Acoperă toate clasele de eficiență IE2 până la IE5, în aceeași familie constructivă de motor",
      "Dimensiuni de montaj compatibile (B3, B5, B14a, B34a, B35) între clasele de eficiență, pentru înlocuire simplă",
      "Variante pentru tensiuni multiple (230/400V, 400/690V) în aceeași serie de motor",
      "Motoare antiexplozive disponibile pentru zone cu risc, alături de gama standard industrială",
      "Protecție IP55 și clasă de izolație F pe seriile verificate de noi"
    ],
    keyProducts: [
      { name: "Seria ACM 100 L", description: "Familia de motoare asincrone trifazate AC Motoren în carcasă mărimea 100, disponibilă în variante IE3 (sufix PHE) și IE4 (sufix SPE), cu puteri de până la 3 kW și turații între aproximativ 950 și 2.900 rot/min, în funcție de numărul de poli. Protecție IP55, clasă de izolație F, montare B3/B5/B14a/B34a/B35. Pentru ofertă, precizați puterea necesară, turația, clasa de eficiență dorită și tipul de montare." },
      { name: "Motoare Antiexplozive", description: "Gama de motoare AC Motoren certificate pentru zone cu risc de explozie, construite pe aceeași platformă constructivă ca motoarele standard IEC. Pentru comandă, precizați zona de clasificare Ex a instalației și cerințele specifice de certificare ale proiectului." },
      { name: "Motoare cu Frână", description: "Motoare electrice AC Motoren cu frână electromagnetică integrată, pentru aplicații care cer oprire rapidă și controlată — transportoare, macarale, utilaje de ridicat. Pentru ofertă, precizați cuplul de frânare necesar și tensiunea de alimentare a frânei." }
    ],
    industries: [
      "Tehnică de transport — motoare pentru benzi transportoare și sisteme de manipulare",
      "Pompe și ventilație — motoare de eficiență ridicată pentru echipamente hidraulice",
      "Compresoare — motoare trifazate standard pentru acționare directă",
      "Mașini-unelte — motoare cu turații variate pentru acționare de precizie",
      "Apă și apă uzată — motoare pentru pompe de proces"
    ],
    infinitrade: `Pentru AC Motoren lucrăm din surse publice ale producătorului, fără date proprii de stoc pentru gama de motoare electrice. Aducem motoarele AC Motoren prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de puterea și clasa de eficiență solicitate. Pentru ofertă, avem nevoie de puterea necesară (kW), turația, tensiunea de alimentare, dimensiunea de montare și dacă aplicația necesită certificare antiexplozivă. Nu facem promisiuni de disponibilitate constantă pentru nicio putere sau turație din gamă.`,
    limitation: "Nu putem confirma anul fondării sau sediul exact al companiei, informații care nu apar explicit pe paginile citate ale producătorului.",
    productCodes: [
      { code: "ACM 100 L 2/PHE", description: "Motor trifazat IE3, 3 kW, aproximativ 2895 rot/min" },
      { code: "ACM 100 L 6/PHE", description: "Motor trifazat IE3, 1,5 kW, aproximativ 949 rot/min" },
      { code: "ACM 100 L 2/SPE", description: "Motor trifazat IE4, 3 kW, turație ridicată" },
      { code: "ACM 100 L 6/SPE", description: "Motor trifazat IE4, variantă cu turație redusă" },
      { code: "Niederspannungsmotoren", description: "Familia de motoare de joasă tensiune din gama AC Motoren" },
      { code: "Hochspannungsmotoren", description: "Familia de motoare de înaltă tensiune din gama AC Motoren" },
      { code: "Einphasenmotoren", description: "Familia de motoare monofazate din gama AC Motoren" },
      { code: "Polumschaltbare Motoren", description: "Familia de motoare cu comutare de poli" },
      { code: "Explosionsgeschützte Motoren", description: "Familia de motoare antiexplozive din gama AC Motoren" },
      { code: "Bremsmotoren", description: "Familia de motoare cu frână integrată" }
    ],
    faq: [
      { q: "Ce produce AC Motoren?", a: "AC Motoren fabrică motoare electrice standard IEC — de joasă și înaltă tensiune, monofazate, cu comutare de poli și antiexplozive — în clasele de eficiență IE2 până la IE5, conform site-ului producătorului german." },
      { q: "Ce înseamnă sufixele PHE și SPE la motoarele AC Motoren?", a: "PHE marchează varianta IE3 (Premium Efficiency), iar SPE varianta IE4 (Super Premium Efficiency) din aceeași serie constructivă de motor, cu aceleași dimensiuni de montare, conform seriei ACM 100 L verificate de noi." },
      { q: "Livrați motoare AC Motoren în România?", a: "Da, la comandă, prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de puterea, turația și clasa de eficiență solicitate." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "AC Motoren — Elektromotoren", url: "https://www.ac-motoren.com", publisher: "AC Motoren GmbH", accessed: "2026-09-25" },
      { title: "AC Motoren — Homepage", url: "https://www.ac-motoren.com/en/", publisher: "AC Motoren GmbH", accessed: "2026-09-25" }
    ],
  },
  "icm-motori": {
    name: "ICM Motori",
    founded: 1965,
    headquarters: "Opera, Milano, Italia",
    overview: `ICM Motori este un producător italian de motoare electrice asincrone, cu sediul la Opera, lângă Milano, activ din 1965. Gama acoperă motoare trifazate și monofazate standard, motoare cu poli comutabili, motoare de alunecare pentru aplicații cu cuplu variabil și motoare de cuplu constant pentru înfășurare și derulare. Din portofoliul ICM Motori putem oferta motoare de eficiență ridicată IE2 și IE3, motoare cu frână și motoare compacte din seria R, pentru spații cu gabarit redus.

Ce diferențiază ICM Motori e gama dedicată de motoare speciale, dincolo de motorul asincron standard — seria de alunecare SC/SCN, bazată pe cuplul indus electromagnetic, permite reglarea continuă a turației la mașini textile sau de ambalat, iar motoarele de cuplu constant C/CF mențin tensiunea constantă în firul sau folia derulată, indiferent de diametrul bobinei. Seria extrudată E și seria compactă R răspund la nevoia de gabarit redus în utilaje unde spațiul de montaj e limitat. În motoare electrice industriale, ICM Motori se compară cu ATB, cu accent pe soluții de nișă pentru mașini de proces, nu doar pe motorul standard de catalog.

Pentru piața din România, ICM Motori are sens la linii de ambalare, mașini textile sau utilaje de înfășurare care cer reglare de turație sau tensiune constantă de derulare, precum și la retehnologizări unde gabaritul motorului existent limitează alegerea unui motor standard.`,
    whyChoose: [
      "Motoare de alunecare seria SC/SCN pentru reglare continuă a turației, fără convertizor de frecvență",
      "Motoare de cuplu constant seria C/CF pentru tensiune constantă la înfășurare și derulare",
      "Seria compactă R pentru montaje cu spațiu redus, alături de gama standard",
      "Peste 60 de ani de activitate în motoare electrice, din 1965, conform site-ului producătorului",
      "Clase de eficiență IE2 și IE3 disponibile pe gama de motoare trifazate standard"
    ],
    keyProducts: [
      { name: "Motoare de Alunecare Seria SC/SCN", description: "Motoare bazate pe principiul cuplului indus electromagnetic, folosite pentru reglarea continuă a turației la mașini textile, de ambalat sau de bobinat, fără convertizor de frecvență separat. Turații tipice între 200 și 1.200 rot/min, în funcție de numărul de poli (4, 6 sau 8). Pentru ofertă, precizați turația de lucru necesară și tipul de sarcină antrenată." },
      { name: "Motoare de Cuplu Constant Seria C/CF", description: "Motoare ICM Motori pentru aplicații de înfășurare și derulare unde tensiunea materialului trebuie să rămână constantă indiferent de diametrul bobinei — 6, 8 sau 12 poli, izolație clasă F sau H. Pentru comandă, precizați cuplul necesar și diametrul minim/maxim al bobinei de lucru." },
      { name: "Motoare de Eficiență Ridicată IE2/IE3", description: "Gama standard de motoare trifazate asincrone ICM Motori, disponibilă în clasele de eficiență IE2 și IE3, conform standardelor IEC 60034-30. Pentru ofertă, precizați puterea necesară, turația, tensiunea de alimentare și tipul de montare al motorului." }
    ],
    industries: [
      "Textile — motoare de alunecare pentru reglarea turației la mașini de filat și țesut",
      "Ambalare — motoare de cuplu constant pentru înfășurarea foliei",
      "Industria hârtiei — motoare pentru bobinare și derulare",
      "Mașini-unelte — motoare standard de eficiență ridicată",
      "HVAC — motoare pentru ventilatoare și unități de tratare a aerului"
    ],
    certifications: ["Conformitate cu IEC 60034-30 pentru clasele de eficiență energetică"],
    infinitrade: `Pentru ICM Motori ne bazăm pe surse publice ale producătorului italian, fără date proprii de stoc pentru gama de motoare speciale sau standard. Aducem motoarele ICM Motori prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de serie și configurație. Pentru ofertă, avem nevoie de tipul de motor (standard, alunecare, cuplu constant), puterea sau cuplul necesar, turația și tipul de montare. Nu facem promisiuni de disponibilitate constantă pentru nicio configurație de motor din gamă.`,
    limitation: "Nu putem confirma parametri tehnici compleți (curbe de cuplu, eficiențe exacte) pentru fiecare variantă din seriile speciale SC/SCN și C/CF.",
    productCodes: [
      { code: "Seria SC", description: "Motor de alunecare pentru reglarea continuă a turației" },
      { code: "Seria SCN Va-V", description: "Variantă de motor de alunecare cu reglare de turație" },
      { code: "Seria C", description: "Motor de cuplu constant pentru înfășurare și derulare" },
      { code: "Seria CF", description: "Variantă de motor de cuplu constant, izolație clasă F/H" },
      { code: "Traductor 80/15/B01", description: "Traductor de turație pentru motoarele de alunecare" },
      { code: "Traductor 80/EA/02", description: "Variantă de traductor pentru motoarele ICM Motori" },
      { code: "Motoare IE2", description: "Motoare trifazate de eficiență ridicată, 2, 4 și 6 poli" },
      { code: "Motoare IE3", description: "Motoare trifazate de eficiență superioară, 2, 4 și 6 poli" },
      { code: "Motoare Trifazate Standard", description: "Motoare asincrone trifazate de uz general" },
      { code: "Motoare Monofazate", description: "Motoare pentru alimentare monofazată, uz general" },
      { code: "Motoare cu Polaritate Dublă", description: "Motoare cu două turații comutabile" },
      { code: "Seria R", description: "Motoare compacte cu gabarit redus" },
      { code: "Motoare cu Frână", description: "Motoare cu frână electromagnetică integrată" },
      { code: "Seria E", description: "Motoare extrudate pentru montaj compact" },
      { code: "Motoare pentru Invertor", description: "Motoare adaptate pentru alimentare prin convertizor de frecvență" }
    ],
    faq: [
      { q: "Ce produce ICM Motori?", a: "ICM Motori fabrică motoare electrice asincrone standard și speciale — trifazate, monofazate, de alunecare și de cuplu constant — din 1965, la Opera, lângă Milano, conform site-ului producătorului." },
      { q: "Ce este un motor de alunecare ICM Motori?", a: "Este un motor din seria SC/SCN care folosește cuplul indus electromagnetic pentru a permite reglarea continuă a turației, util la mașini textile sau de ambalat, fără un convertizor de frecvență separat." },
      { q: "Cum aleg motorul ICM Motori potrivit după serie?", a: "Seria indică principiul de funcționare — SC/SCN pentru reglare de turație, C/CF pentru cuplu constant la derulare, R pentru gabarit redus — iar alegerea finală depinde de puterea, turația și tipul de sarcină antrenată." },
      { q: "Livrați motoare ICM Motori în România?", a: "Da, la comandă, prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de seria, puterea și turația solicitate de proiectul dumneavoastră." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ICM Motori — Electric Motors", url: "https://www.icmmotori.it", publisher: "ICM Motori", accessed: "2026-09-25" },
      { title: "ICM Motori — Homepage", url: "https://www.icmmotori.it/en", publisher: "ICM Motori", accessed: "2026-09-25" }
    ],
  },
  "alco-valves": {
    name: "Alco Valves",
    founded: 1977,
    headquarters: "Brighouse, West Yorkshire, Marea Britanie",
    overview: `Alco Valves este un producător britanic de robineți industriali, cu sediul la Brighouse, West Yorkshire, activ din 1977. Grupul reunește mai multe branduri — Alco pentru robineți de instrumentație, HI-TEK pentru robineți de înaltă presiune și aplicații subsea, Sabre pentru robineți manuali și sisteme de manifold. Din gama Alco Valves putem oferta robineți cu bilă, robineți cu ac, robineți de reținere și sisteme de manifold pentru instrumentație de proces.

Ce diferențiază grupul Alco Valves e acoperirea completă a lanțului de instrumentație — de la robineții de bază pentru montarea manometrelor (seria A) până la robineți subsea certificați pentru adâncimi de până la 3.000 de metri și robineți Sabre pentru presiuni foarte mari, inclusiv variante pentru hidrogen pe toate cele trei branduri. Robineții cu design ready-to-go (RTG) vin preasamblați pentru instalare rapidă în panouri de instrumentație. În categoria robineților industriali de instrumentație, Alco Valves se compară cu Velan, cu accent pe soluții pentru petrol și gaze, energie și hidrogen.

Pentru piața din România, Alco Valves are sens la panouri de instrumentație pentru rafinării sau stații de gaz, la aplicații subsea pentru operatori din larg sau la proiecte de hidrogen care cer robineți certificați pentru acest fluid specific.`,
    whyChoose: [
      "Trei branduri complementare sub un singur grup — Alco, HI-TEK și Sabre — pentru toată gama de presiuni",
      "Robineți subsea certificați pentru adâncimi de până la 3.000 de metri",
      "Variante certificate pentru hidrogen pe toate cele trei branduri ale grupului",
      "Certificare ISO 9001 din 2007, plus acreditare BS5750 din 1982",
      "Design ready-to-go (RTG) pentru montare rapidă în panouri de instrumentație"
    ],
    keyProducts: [
      { name: "Robineți de Instrumentație Seria A", description: "Robineți cu bilă din bară plină (bar stock), gândiți pentru aplicații de presiune joasă până la medie în panouri de instrumentație. Fac parte din gama de bază Alco pentru montarea manometrelor și traductoarelor de presiune. Pentru ofertă, precizați presiunea de lucru, diametrul conexiunii și fluidul din instalație." },
      { name: "Robineți cu Ac Seria UN-V/N/UN", description: "Robineți cu ac cu scaun metal-pe-metal pentru etanșare fără scurgeri, cu vârf întărit și nerotativ pentru durată de viață extinsă la deschidere-închidere repetată. Pentru comandă, precizați presiunea maximă de lucru și tipul de conexiune necesar la panou." },
      { name: "Gama Subsea HI-TEK", description: "Robineți cu bilă flotantă, cu ac și de reținere, certificați pentru instalare subacvatică la adâncimi de până la 3.000 de metri, plus robineți montați pe trunion pentru presiuni ridicate. Pentru ofertă, precizați adâncimea de instalare și clasa de presiune cerută de proiect." }
    ],
    industries: [
      "Petrol și gaze — robineți de instrumentație pentru platforme și rafinării",
      "Energie și hidrogen — variante certificate pentru fluide cu hidrogen",
      "Subsea — robineți certificați pentru adâncimi mari",
      "Biocombustibili — robineți pentru instalații de procesare",
      "Regenerabile — robineți de instrumentație pentru sisteme auxiliare"
    ],
    certifications: ["ISO 9001 — din 2007", "BS5750 — acreditare din 1982"],
    infinitrade: `Pentru Alco Valves nu deținem date proprii despre stocul global al grupului britanic — informațiile provin din materialele publicate de producător. Aducem robineții Alco, HI-TEK și Sabre prin canale de aprovizionare din Regatul Unit sau Uniunea Europeană, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de model și certificare cerută. Pentru ofertă, avem nevoie de brandul dorit (Alco, HI-TEK sau Sabre), presiunea de lucru, diametrul conexiunii și fluidul din instalație. Nu facem promisiuni de disponibilitate constantă pentru niciun model din gamă.`,
    limitation: "Nu putem confirma dimensiunile exacte de conexiune pentru fiecare model din seriile Sabre, doar categoriile generale publicate pe site.",
    productCodes: [
      { code: "A Series Ball Valve", description: "Robinet cu bilă din bară plină, presiune joasă spre medie" },
      { code: "UN-V Series Needle Valve", description: "Robinet cu ac, scaun metal-pe-metal, etanșare fără scurgeri" },
      { code: "N/UN Series Needle Valve", description: "Robinet cu ac, vârf întărit și nerotativ" },
      { code: "EUC Series Check Valve", description: "Robinet de reținere în două piese, debit mare" },
      { code: "EC Series Check Valve", description: "Robinet de reținere pentru gaze sau lichide" },
      { code: "UB Series Ball Valve RTG", description: "Robinet cu bilă preasamblat, montabil pe panou" },
      { code: "PB Series Ball Valve RTG", description: "Robinet cu bilă în trei piese, presiune înaltă" },
      { code: "DBB-N-Series Manifold RTG", description: "Manifold cu robineți cu ac pentru montarea manometrelor" },
      { code: "DBB-B-Series Manifold RTG", description: "Manifold cu configurație bilă-ac-bilă" },
      { code: "HI-TEK XB Range", description: "Gamă de robineți de înaltă presiune din brandul HI-TEK" },
      { code: "HI-TEK XC Range", description: "Variantă de robineți de înaltă presiune HI-TEK" },
      { code: "Subsea Floating Ball Valve", description: "Robinet cu bilă flotantă pentru instalare subacvatică" },
      { code: "Subsea Needle Valve", description: "Robinet cu ac certificat pentru aplicații subsea" },
      { code: "Subsea Check Valve", description: "Robinet de reținere certificat pentru instalare subacvatică" },
      { code: "Subsea Trunnion Ball Valve", description: "Robinet cu bilă montată pe trunion, presiune ridicată subsea" },
      { code: "Sabre Hand Valves", description: "Robineți manuali din brandul Sabre pentru instrumentație" },
      { code: "Sabre Forged Valves", description: "Variantă forjată de robineți din gama Sabre" },
      { code: "Sabre Rising Plug Valves", description: "Robineți cu tijă ascendentă din gama Sabre" },
      { code: "Sabre High-Pressure Ball Valves", description: "Robineți cu bilă de înaltă presiune din gama Sabre" },
      { code: "Sabre Manifold Systems", description: "Sisteme de manifold cu 2, 3 sau 5 robineți" }
    ],
    faq: [
      { q: "Ce produce Alco Valves?", a: "Alco Valves este un grup britanic care produce robineți de instrumentație (brandul Alco), robineți de înaltă presiune și subsea (HI-TEK) și robineți manuali de proces (Sabre), conform site-ului propriu." },
      { q: "Ce robineți Alco Valves sunt certificați pentru subsea?", a: "Gama HI-TEK Subsea include robineți cu bilă flotantă, cu ac, de reținere și montați pe trunion, certificați pentru instalare la adâncimi de până la 3.000 de metri, conform informațiilor producătorului." },
      { q: "Ce înseamnă RTG la robineții Alco Valves?", a: "RTG (ready to go) marchează robineții preasamblați, gata de montare directă pe panoul de instrumentație, precum seriile UB și PB Ball Valve sau manifoldurile DBB-N și DBB-B." },
      { q: "Livrați robineți Alco Valves în România?", a: "Da, la comandă, prin canale de aprovizionare din Regatul Unit sau Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de brandul, modelul și certificarea solicitate." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Alco Valves Group — About Us", url: "https://www.alco-valves.com", publisher: "Alco Valves Group", accessed: "2026-09-25" },
      { title: "Products — Alco Valves Group", url: "https://www.alco-valves.com/products/?product_type=valves-instrumentation&brand=alco", publisher: "Alco Valves Group", accessed: "2026-09-25" }
    ],
  },
  "besa-valves": {
    name: "BESA",
    founded: 1946,
    headquarters: "Settala, Milano, Italia",
    overview: `BESA este un producător italian de supape de siguranță industriale, cu sediul la Settala, lângă Milano, activ din 1946. Gama acoperă supape cu conexiuni filetate, flanșate și de înaltă presiune, plus variante conforme standardului american API 526 și supape căptușite cu PFA pentru medii corozive. Din portofoliul BESA putem oferta supape de siguranță pentru presiuni de la 0,2 până la 400 de bar, în materiale de la fontă la oțel inoxidabil.

Ce diferențiază gama BESA e acoperirea largă de standarde și certificări pe aceeași platformă constructivă — seriile 250 și 260 ating 160, respectiv 400 de bar, seriile 280 și 290 respectă API 526 pentru piața americană, iar seria 271 e căptușită cu PFA și burduf din PTFE pentru fluide agresive chimic. Certificările includ PED, ATEX și aprobări de la societăți de clasificare navală precum RINA, DNV, LR și ABS. Ca profil, BESA e complementar unei game de robineți industriali — supapele de siguranță completează, nu concurează, robineții de închidere sau control.

Pentru piața din România, BESA are sens la instalații sub presiune care cer supape de siguranță certificate PED, la nave care cer aprobări de clasificare navală sau la linii chimice cu fluide corozive care necesită căptușeală PFA.`,
    whyChoose: [
      "Zece serii de supape de siguranță, de la 0,2 până la 400 de bar, pe o singură platformă constructivă",
      "Serii conforme API 526 pentru proiecte care cer acest standard american",
      "Aprobări de la societăți de clasificare navală — RINA, DNV, LR, ABS, Bureau Veritas",
      "Serie căptușită cu PFA pentru fluide chimic agresive, fără compromis pe etanșare",
      "Peste 75 de ani de activitate în supape de siguranță, din 1946"
    ],
    keyProducts: [
      { name: "Seriile 130/240/250", description: "Supape de siguranță BESA cu conexiuni flanșate, seria 130 pentru DN 15–150 și presiuni de 0,2–40 bar, seria 240 pentru debite mai mari, seria 250 pentru presiuni de 3–160 bar. Materiale disponibile: fontă, oțel carbon, oțel inoxidabil. Pentru ofertă, precizați presiunea de deschidere necesară, diametrul conexiunii și fluidul protejat." },
      { name: "Seriile 280/290 API 526", description: "Supape de siguranță BESA conforme standardului american API 526, cu conexiuni de la DN 1 inch la DN 8 inch la intrare, pentru presiuni de până la 300 de bar. Seria 290 adaugă inel de reglaj și duză completă. Pentru comandă, precizați standardul cerut de proiect și presiunea de tarare." },
      { name: "Seria 271 Căptușită PFA", description: "Supapă de siguranță BESA cu căptușeală PFA și burduf din PTFE, pentru fluide chimic agresive la presiuni de 0,8–10 bar. Pentru ofertă, precizați natura chimică a fluidului și compatibilitatea materialelor de etanșare necesare." }
    ],
    industries: [
      "Energie — supape de siguranță pentru circuite sub presiune",
      "Chimie — seria 271 căptușită PFA pentru fluide agresive",
      "Naval — supape cu aprobări de clasificare RINA, DNV, LR",
      "Petrochimie — supape conforme API 526 pentru rafinării",
      "Criogenie — supape de siguranță pentru instalații la temperaturi joase"
    ],
    certifications: ["PED — pentru echipamente sub presiune", "ATEX — pentru zone cu risc de explozie", "API 526 — pentru seriile 280 și 290"],
    infinitrade: `Pentru BESA nu avem, pentru acest brand, date proprii despre stocul din fabrica italiană — descrierile de mai sus vin din materialele publicate de producător. Aducem supapele BESA prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de serie, presiune și certificare cerută. Pentru ofertă, avem nevoie de seria dorită, diametrul conexiunii, presiunea de tarare și standardul de certificare aplicabil proiectului (PED, ATEX, API 526). Nu facem promisiuni de disponibilitate constantă pentru nicio serie de supape din gamă.`,
    limitation: "Nu putem confirma timpii de fabricație pentru variante custom sau certificările pe navă specifice fiecărui proiect, doar seriile standard publicate pe site.",
    productCodes: [
      { code: "Seria 130", description: "Supapă de siguranță flanșată, DN 15–150, 0,2–40 bar" },
      { code: "Seria 139", description: "Supapă de siguranță cu conexiuni filetate" },
      { code: "Seria 240", description: "Supapă de siguranță flanșată, debit mare, 0,2–40 bar" },
      { code: "Seria 240F", description: "Variantă de supapă cu conexiuni filetate" },
      { code: "Seria 249", description: "Supapă de siguranță pentru înaltă presiune" },
      { code: "Seria 250", description: "Supapă flanșată semi-nozzle, presiune 3–160 bar" },
      { code: "Seria 260", description: "Supapă flanșată full-nozzle, presiune 3–400 bar" },
      { code: "Seria 271", description: "Supapă căptușită cu PFA și burduf PTFE, 0,8–10 bar" },
      { code: "Seria 280", description: "Supapă conformă API 526, presiune până la 250 bar" },
      { code: "Seria 290", description: "Supapă API 526 cu inel de reglaj, până la 300 bar" }
    ],
    faq: [
      { q: "Ce produce BESA?", a: "BESA fabrică supape de siguranță industriale — cu conexiuni filetate, flanșate, de înaltă presiune și conforme API 526 — la fabrica din Settala, lângă Milano, conform site-ului producătorului." },
      { q: "Ce serie BESA respectă standardul API 526?", a: "Seriile 280 și 290 sunt conforme standardului american API 526, cu conexiuni de la DN 1 la DN 8 inch la intrare și presiuni de până la 300 de bar, conform datelor publicate de producător." },
      { q: "Ce echivalent are seria 271 de la BESA pentru fluide corozive?", a: "Seria 271 este varianta căptușită cu PFA și burduf din PTFE, gândită special pentru fluide chimic agresive la presiuni de 0,8–10 bar, acolo unde o supapă metalică standard s-ar coroda." },
      { q: "Livrați supape BESA în România?", a: "Da, la comandă, prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de seria, presiunea și certificarea solicitate pentru proiectul dumneavoastră." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "BESA — Safety Valves Manufacturer", url: "https://www.besa.it", publisher: "BESA S.p.A.", accessed: "2026-09-25" },
      { title: "Flanged Safety Valves — BESA", url: "https://www.besa.it/flanged-safety-valves.html", publisher: "BESA S.p.A.", accessed: "2026-09-25" }
    ],
  },
  "c-k-tools": {
    name: "C.K Tools",
    headquarters: "Pwllheli, Țara Galilor, Marea Britanie",
    overview: `C.K Tools este un producător britanic de scule de mână pentru electricieni și tehnicieni, cu sediul la Pwllheli, în Țara Galilor, operat de Carl Kammerling International Limited. Gama include linia C.K Classic (unelte de mână clasice), C.K Magma (curele și depozitare scule) și seriile dedicate electricienilor — dezizolatoare, clești de tăiat cablu, chei tubulare. Din portofoliul C.K Tools putem oferta clești de tăiat cabluri certificate VDE, dezizolatoare și camere de inspecție pentru medii cu acces dificil.

Ce diferențiază C.K Tools de un producător generalist de scule e specializarea pe trusa electricianului — categorii dedicate pentru dezizolare automată, tăiere de cabluri, capsare, chei tubulare și instalații electrice, alături de gama clasică de scule de mână și grădinărit. Produse precum cleștele Redline VDE sunt certificate pentru lucrul sub tensiune. Camera de inspecție MightyScope completează gama pentru diagnoză în spații greu accesibile. În categoria sculelor de mână profesionale, C.K Tools se compară cu Knipex, cu accent pe trusa completă a electricianului, nu doar pe clești și clupe.

Pentru piața din România, C.K Tools are sens la echipe de electricieni și tehnicieni de mentenanță care au nevoie de scule certificate VDE pentru lucrul sub tensiune sau de trusa completă pentru instalații electrice — dezizolatoare, clești, chei tubulare, capsatoare de cablu.`,
    whyChoose: [
      "Gamă dedicată electricienilor — dezizolatoare, clești VDE, capsatoare de cablu, chei tubulare",
      "Clești Redline certificate VDE pentru lucrul sub tensiune la 1000V",
      "Camera de inspecție MightyScope pentru diagnoză în spații greu accesibile",
      "Parte din grupul industrial ITW, cu acces la rețeaua sa de distribuție",
      "Linii separate C.K Classic și C.K Magma pentru scule, respectiv curele și depozitare"
    ],
    keyProducts: [
      { name: "Clești Redline VDE", description: "Clești de tăiat cabluri certificate VDE pentru lucrul sub tensiune, disponibili în varianta de 160 mm verificată de noi pe site-ul producătorului. Fac parte din gama de scule pentru electricieni C.K Tools. Pentru ofertă, precizați lungimea dorită și tipul de cablu de tăiat — cupru, aluminiu, cu izolație." },
      { name: "MightyScope", description: "Cameră de inspecție portabilă C.K Tools, pentru vizualizarea spațiilor greu accesibile — tablouri electrice, conducte, spații tehnice înguste. Pentru comandă, precizați lungimea de cablu necesară și dacă doriți afișaj integrat sau conectare la telefon." },
      { name: "Dezizolatoare LS0H/LSF", description: "Dezizolatoare de cablu C.K Tools pentru izolații LS0H (low smoke zero halogen) și LSF, folosite la instalații electrice unde siguranța la incendiu e o cerință. Pentru ofertă, precizați diametrul cablului și tipul de izolație de dezizolat." }
    ],
    industries: [
      "Instalații electrice — dezizolatoare, clești VDE, chei tubulare",
      "Telecomunicații — clești de capsare și cabluri de rețea",
      "Mentenanță industrială — camere de inspecție și scule de mână",
      "Construcții — trusa completă pentru electricieni de șantier",
      "Automotive — accesorii pentru scule electrice și depozitare"
    ],
    infinitrade: `Pentru gama C.K Tools ținem să spunem deschis ce putem și ce nu putem confirma — informațiile de mai sus vin din materialele publicate de producătorul britanic. Aducem sculele C.K Tools prin canale de aprovizionare din Regatul Unit sau Uniunea Europeană, cu termen orientativ de 2–6 săptămâni la comandă, în funcție de produs și cantitate. Pentru ofertă, avem nevoie de denumirea exactă a produsului sau categoriei (clește, dezizolator, cameră de inspecție), lungimea sau dimensiunea necesară și, pentru scule VDE, tensiunea de lucru. Nu facem promisiuni de disponibilitate constantă pe nicio referință din gamă.`,
    limitation: "Nu putem confirma coduri de catalog exacte pentru fiecare produs din categoriile C.K Classic și C.K Magma, doar denumirile de familie și câteva produse specifice publicate pe site.",
    productCodes: [
      { code: "Redline VDE Cable Cutter 160mm", description: "Clește de tăiat cabluri certificat VDE, lungime 160 mm" },
      { code: "MightyScope Inspection Camera", description: "Cameră de inspecție portabilă pentru spații greu accesibile" },
      { code: "LS0H Cable Stripper", description: "Dezizolator pentru cabluri cu izolație low smoke zero halogen" },
      { code: "LSF Cable Stripper", description: "Dezizolator pentru cabluri cu izolație LSF" },
      { code: "C.K Classic Cutlery", description: "Categorie de cuțitărie și scule de tăiat din gama Classic" },
      { code: "C.K Classic Gardening", description: "Categorie de scule de grădinărit din gama Classic" },
      { code: "C.K Classic Hardware", description: "Categorie de scule de fierărie din gama Classic" },
      { code: "C.K Classic Pliers & Cutters", description: "Categorie de clești și foarfece din gama Classic" },
      { code: "C.K Magma Belts & Accessories", description: "Categorie de curele și accesorii pentru scule" },
      { code: "C.K Magma Tool Storage", description: "Categorie de soluții de depozitare a sculelor" },
      { code: "Auto Wire Strippers", description: "Dezizolatoare automate de sârmă pentru electricieni" },
      { code: "Cable Cutters", description: "Categorie de clești pentru tăiat cabluri" },
      { code: "Cable Tackers", description: "Capsatoare pentru fixarea cablurilor" },
      { code: "Cable Tie Gun", description: "Pistol pentru strângerea colierelor de cablu" },
      { code: "Deburring Tools", description: "Scule pentru debavurarea capetelor de cablu sau conductă" },
      { code: "Hex Keys", description: "Chei hexagonale din gama de scule electricieni" },
      { code: "Mainstesters", description: "Testere de tensiune pentru instalații electrice" },
      { code: "Soldering Equipment", description: "Echipamente de lipit pentru instalații electrice" },
      { code: "Tap & Die", description: "Seturi de tarozi și filiere pentru filetare" },
      { code: "Wire Strippers", description: "Dezizolatoare manuale de sârmă și cablu" }
    ],
    faq: [
      { q: "Ce produce C.K Tools?", a: "C.K Tools fabrică scule de mână pentru electricieni și tehnicieni — clești VDE, dezizolatoare, camere de inspecție și chei tubulare — sub liniile C.K Classic și C.K Magma, conform site-ului producătorului britanic." },
      { q: "Sunt cleștii C.K Tools certificați pentru lucrul sub tensiune?", a: "Da, seria Redline include clești de tăiat cabluri certificate VDE, precum modelul de 160 mm verificat de noi pe site-ul producătorului, gândite pentru lucrul sub tensiune la instalații electrice." },
      { q: "Ce este camera MightyScope de la C.K Tools?", a: "MightyScope este camera de inspecție portabilă a C.K Tools, folosită pentru vizualizarea spațiilor greu accesibile — tablouri electrice, conducte sau spații tehnice înguste — fără demontarea echipamentului." },
      { q: "Livrați scule C.K Tools în România?", a: "Da, la comandă, prin canale de aprovizionare din Regatul Unit sau Uniunea Europeană, cu termen orientativ de 2–6 săptămâni, în funcție de produsul și cantitatea solicitate." }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-25",
    changelog: [ { date: "2026-09-25", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "C.K Tools — Professional Hand Tools", url: "https://www.ck-tools.com", publisher: "Carl Kammerling International Limited", accessed: "2026-09-25" },
      { title: "Electricians Tools — C.K Tools", url: "https://www.ck-tools.com/products/ck-tools/electricians-tools/", publisher: "Carl Kammerling International Limited", accessed: "2026-09-25" }
    ],
  },
};
