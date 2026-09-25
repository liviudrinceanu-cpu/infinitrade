// Batch 80 - Branduri-500 val 4 (sept. 2026): RBC Bearings, RUD Ketten, Reggiana Riduttori, Regina Catene Calibrate, Rollix.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch80 = {
  'rbc-bearings': {
    name: "RBC Bearings",
    founded: 1919,
    headquarters: "Oxford, Connecticut, SUA",
    overview: `RBC Bearings este un producător american de rulmenți de precizie inginerați, cu sediul la Oxford, Connecticut, și istorie din 1919. Compania construiește două game distincte: una pentru industrie și una pentru aerospațial și apărare, completate de mărci din grup precum Dodge Industrial, Climax Metal Products, PIC Design și Sargent Aerospace & Defense. Din portofoliul industrial putem oferta rulmenți sferici simpli, rulmenți cu secțiune subțire, cam followere, rulmenți radiali cu ace de tip greu și capete de bielă (rod ends), toate identificabile prin coduri de serie exacte publicate pe site-ul producătorului.

Ce diferențiază RBC în segmentul industrial e acoperirea largă de configurații: cam followerele din familia RBC Roller și HexLube au design cu ungere prelungită, iar rulmenții radiali cu ace din seria SJ (Pitchlign) și seria TJ (TandemRoller) cresc capacitatea de sarcină cu 10-40% față de un rulment radial cu ace clasic, în același gabarit. Rulmenții cu bile din familia NICE acoperă seriile 1600, 7500, 7600, 6900, 3000, 400, 500 și 600, în variante rectificate, semirectificate sau nerectificate — o zonă în care RBC concurează direct cu Timken pentru rulmenți de precizie folosiți în mașini-unelte.

Pentru piața din România, gama RBC are sens acolo unde toleranțele strânse contează mai mult decât gabaritul standard — linii de mișcare liniară de precizie, mașini-unelte și utilaje unde sarcina radial-axială combinată depășește ce acoperă un rulment obișnuit. Livrarea se face la comandă, prin lanțuri de aprovizionare din SUA sau din depozitele europene ale grupului.`,
    whyChoose: [
      "Game separate pentru industrial și aerospațial, fiecare cu propriile standarde de proiectare și testare",
      "Cam followere RBC Roller și HexLube cu ungere prelungită, pentru intervale mai lungi între relubrifieri",
      "Seria TJ TandemRoller crește capacitatea radială cu 10-40% față de un rulment cu ace clasic",
      "Rulmenți sferici simpli în variante standard, cu inel interior extins sau autolubrifiante, pentru dezaliniere mare",
      "Rulmenți cu secțiune subțire NICE, gradați ABEC 1-7, pentru echipamente unde spațiul radial e limitat",
      "Acces la mărcile din grup (Climax, PIC Design) pentru componente de precizie conexe"
    ],
    keyProducts: [
      { name: "Rulmenți Radiali cu Ace Seria SJ (Pitchlign)", description: "Rulmenți radiali cu ace de tip greu, în gabarite standard, cu diametru exterior între 0,5 și 12,25 inch. Concepuți pentru sarcini radiale mari la turații moderate, în utilaje industriale unde spațiul de montaj e strict impus de gabaritul standardizat al carcasei." },
      { name: "Rulmenți Radiali cu Ace Seria TJ (TandemRoller)", description: "Design brevetat cu ace dispuse pe două rânduri decalate, care crește capacitatea de sarcină radială cu 10-40% față de seria SJ, în același gabarit exterior. Recomandat acolo unde durabilitatea contează mai mult decât costul de achiziție." },
      { name: "Cam Followere (RBC Roller și HexLube)", description: "Cam followere cu tijă filetată, disponibile în variante standard, tip yoke sau cu role cușcă, în gabarite de la 0,5 la 10 inch diametru exterior. Familia HexLube adaugă un canal universal de ungere; RBC Roller vizează durată de funcționare extinsă." },
      { name: "Rulmenți Sferici Simpli", description: "Rulmenți cu inel interior sferic pentru compensarea dezalinierii unghiulare, în variante standard, cu inel interior extins, cu dezaliniere mare, cu contact unghiular sau autolubrifiante. Aplicație tipică: articulații de cilindri hidraulici și brațe oscilante." },
      { name: "Rulmenți cu Secțiune Subțire și Capete de Bielă", description: "Rulmenți cu secțiune subțire radiali, cu contact unghiular sau cu 4 puncte de contact, gradați ABEC 1-7, alături de capete de bielă (rod ends) cu două rânduri autoaliniante conform SAE-AS6039, pentru sisteme de comandă unde jocul axial trebuie minimizat." }
    ],
    industries: [
      "Mașini-unelte — rulmenți de precizie pentru axe și capete de frezare",
      "Aerospațial și apărare — rulmenți de comandă a suprafețelor de zbor și role de ghidaj",
      "Utilaje mobile și hidraulică — rulmenți sferici pentru articulații de cilindri",
      "Automatizări industriale — cam followere pentru came și ghidaje liniare",
      "Echipamente de manipulare — capete de bielă pentru sisteme de acționare"
    ],
    infinitrade: `Aducem produse RBC Bearings la comandă, prin canale de aprovizionare care pornesc din SUA și din rețeaua europeană a grupului; termenul orientativ este de 2-6 săptămâni de la confirmarea comenzii, fără promisiuni de disponibilitate imediată garantată pe loc. Ce putem și ce nu putem confirma ține strict de ce publică producătorul: pentru fiecare cerere avem nevoie de codul complet de serie (ex. seria SJ, TJ sau NICE), diametrul exterior și interior, și aplicația unde va funcționa rulmentul, ca să verificăm disponibilitatea exactă la sursă înainte de a trimite o ofertă fermă. Pentru piese din gama aerospațială, cerem și standardul de referință (AS7949, AS39901 sau AS6039) direct din desenul dumneavoastră.`,
    limitation: "Nu putem confirma stocuri locale pentru codurile din gama aerospațială RBC, unde certificarea și trasabilitatea completă vin exclusiv din SUA.",
    productCodes: [
      { code: "NICE 1600 Series", description: "Rulmenți cu bile de precizie, seria 1600" },
      { code: "NICE 7500 Series", description: "Rulmenți cu bile cu contact unghiular" },
      { code: "NICE 7600 Series", description: "Rulmenți cu bile, variantă rectificată" },
      { code: "NICE 6900 Series", description: "Rulmenți cu bile cu secțiune îngustă" },
      { code: "NICE 3000 Series", description: "Rulmenți cu bile miniaturali de precizie" },
      { code: "NICE 400 Series", description: "Rulmenți cu bile, gabarit standard" },
      { code: "NICE 500 Series", description: "Rulmenți cu bile, gabarit standard mediu" },
      { code: "NICE 600 Series", description: "Rulmenți cu bile, gabarit standard mare" },
      { code: "SJ Series (Pitchlign)", description: "Rulmenți radiali cu ace, tip greu" },
      { code: "TJ Series (TandemRoller)", description: "Rulmenți radiali cu ace, capacitate mărită 10-40%" },
      { code: "RBC Roller Cam Followers", description: "Cam followere cu durată extinsă de funcționare" },
      { code: "HexLube Cam Followers", description: "Cam followere cu canal universal de ungere" },
      { code: "Fiberglide Self-Lubricating Bearings", description: "Rulmenți autolubrifianți, radiali și axiali" },
      { code: "Airframe Control Ball Bearings AS7949", description: "Rulmenți de comandă pentru suprafețe de zbor" },
      { code: "Needle Track Rollers AS39901", description: "Role de ghidaj pe șină, tip aerospațial" },
      { code: "Ball Bearing Rod Ends AS6039", description: "Capete de bielă cu două rânduri autoaliniante" },
      { code: "Heim Rod Ends", description: "Capete de bielă cu insert din alamă" },
      { code: "Spherical Plain Bearings Standard", description: "Rulmenți sferici simpli, variantă standard" },
      { code: "Plain Bearings High-Misalignment", description: "Rulmenți sferici pentru dezaliniere unghiulară mare" },
      { code: "Thin Section Ball Bearings ABEC 1-7", description: "Rulmenți cu secțiune subțire, grade de precizie" }
    ],
    faq: [
      { q: "Ce produce RBC Bearings?", a: "RBC Bearings produce rulmenți de precizie inginerați pentru industrie și pentru aerospațial-apărare: rulmenți sferici simpli, rulmenți cu secțiune subțire, cam followere, rulmenți radiali cu ace de tip greu și capete de bielă, sub gama proprie și sub mărci precum NICE, Dodge Industrial sau Climax Metal Products." },
      { q: "Cum aleg rulmentul RBC potrivit după cod?", a: "Pornește de la seria exactă de pe desenul sau eticheta piesei existente (ex. SJ, TJ sau NICE urmat de numărul seriei), apoi confirmă diametrul exterior, interior și lățimea. Pentru aplicații critice, trimite și standardul de referință dacă piesa provine din echipamente aerospațiale sau militare." },
      { q: "Livrați rulmenți RBC Bearings în România și cât durează?", a: "Da, la comandă, prin canale de aprovizionare din SUA sau din rețeaua europeană a grupului. Termenul orientativ este 2-6 săptămâni, în funcție de disponibilitatea confirmată de producător pentru codul solicitat; nu promitem disponibilitate din depozit pe niciun cod." },
      { q: "Ce echivalent are seria TJ TandemRoller de la RBC?", a: "TJ TandemRoller e o soluție brevetată RBC cu ace pe două rânduri decalate, în același gabarit exterior ca seria SJ, dar cu 10-40% capacitate radială suplimentară; nu există un echivalent identic la alți producători, dar gabaritul rămâne interschimbabil cu SJ." },
      { q: "Ce trebuie să trimit pentru o ofertă de rulmenți RBC?", a: "Codul complet de serie sau desenul piesei, diametrul exterior și interior, lățimea, sarcina de lucru estimată și aplicația (mașină-unealtă, utilaj mobil, echipament aerospațial). Cu aceste date verificăm disponibilitatea la sursă și revenim cu termenul real de livrare." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "RBC Bearings — Corporate site", url: "https://www.rbcbearings.com/", publisher: "RBC Bearings Incorporated", accessed: "2026-09-23" },
      { title: "Industrial Products", url: "https://productinfo.rbcbearings.com/category/industrial", publisher: "RBC Bearings Incorporated", accessed: "2026-09-23" },
    ],
  },
  'rud-ketten': {
    name: "RUD Ketten",
    founded: 1875,
    headquarters: "Aalen, Germania",
    overview: `RUD Ketten Rieger & Dietz este un producător german de lanțuri și sisteme de ancorare, cu sediul la Aalen și activitate neîntreruptă din 1875. Gama acoperă patru direcții mari: lanțuri de ridicare și industriale din oțel rotund (călite sau tratate termic), sisteme de ancorare și asigurare a mărfii (puncte de ancorare, chingi, sistemul de identificare RUD BLUE-ID), lanțuri pentru anvelope (lanțuri de zăpadă, lanțuri forestiere) și componente pentru transport și antrenare tehnică.

Ce ține RUD relevant în lanțurile de ridicare e plaja de dimensiuni: de la cea mai mică verigă de lanț industrial, de 3×9 mm, până la un lanț de ridicare de dimensiuni maxime, catalogat de producător la 32×90 mm, toate proiectate conform standardului DIN EN 818-7 pentru echipamente de ridicare motorizate și manuale. Pe segmentul de ancorare a mărfii, RUD concurează cu Tsubaki și cu alți producători de lanțuri industriale japonezi, dar rămâne una dintre puținele mărci care acoperă în paralel și lanțurile pentru anvelope de utilaje forestiere.

Pentru piața din România, RUD are sens la ridicare grea în construcții și industrie, la ancorarea mărfii pe platforme de transport și la utilaje forestiere care circulă pe teren accidentat — segmente unde un lanț necertificat sau fără marcaj de trasabilitate nu poate fi folosit legal.`,
    whyChoose: [
      "Peste 150 de ani de fabricație continuă a lanțurilor din oțel rotund, cu tratament termic propriu",
      "Plajă de dimensiuni de la 3×9 mm până la 32×90 mm pentru lanțuri de ridicare",
      "Conformitate cu DIN EN 818-7 pentru echipamente de ridicare motorizate și manuale",
      "Sistem propriu de identificare și trasabilitate a lanțurilor (RUD BLUE-ID)",
      "Gamă separată de lanțuri pentru anvelope, dedicată utilajelor forestiere și de zăpadă",
      "Rețea de peste 1.700 de angajați și prezență în peste 120 de țări"
    ],
    keyProducts: [
      { name: "Lanțuri de Ridicare din Oțel Rotund (Rundstahlketten)", description: "Lanțuri călite sau tratate termic, în dimensiuni de la 3×9 mm la 32×90 mm, proiectate conform DIN EN 818-7 pentru macarale, poduri rulante și palane. Disponibile și în variantă din inox pentru medii corozive sau alimentare." },
      { name: "Puncte și Sisteme de Ancorare (Anschlagpunkte, Anschlagmittel)", description: "Puncte de ancorare filetate sau sudate și accesorii de prindere pentru sarcini suspendate, folosite la ridicarea pieselor grele în producție și montaj. Se aleg după sarcina de lucru maximă și tipul de filet al piesei." },
      { name: "Sisteme de Ancorare a Mărfii (Zurrpunkte, Zurrmittel)", description: "Puncte de ancorare fixe și chingi/lanțuri de ancorare pentru asigurarea mărfii pe platforme de transport rutier, conform cerințelor de siguranță a încărcăturii pentru transport greu." },
      { name: "Lanțuri pentru Anvelope (Reifenketten)", description: "Include lanțuri de zăpadă din gama Rotogrip și lanțuri forestiere (Forstketten), destinate utilajelor care circulă pe teren accidentat, în pantă sau pe zăpadă, unde aderența pneurilor standard nu e suficientă." }
    ],
    industries: [
      "Construcții și ridicare grea — lanțuri și puncte de ancorare pentru macarale",
      "Transport rutier de marfă — sisteme de ancorare și asigurare a încărcăturii",
      "Silvicultură — lanțuri forestiere pentru utilaje pe teren accidentat",
      "Energie eoliană — componente de ridicare pentru montajul turbinelor",
      "Industria alimentară — lanțuri din inox pentru medii cu cerințe igienice",
      "Turnătorii — lanțuri rezistente la temperaturi ridicate pentru manipulare"
    ],
    infinitrade: `Furnizăm lanțuri și sisteme de ancorare RUD la comandă, aducute prin rețeaua de distribuție europeană a producătorului german; orientativ, termenul e de 2-6 săptămâni, fără garanția unei disponibilități imediate garantat pe vreo dimensiune anume. Informația pe care o publicăm vine din surse publice ale producătorului, nu din evidențe proprii de stoc, așa că verificăm disponibilitatea exactă înainte de fiecare confirmare de comandă. Pentru o ofertă corectă avem nevoie de dimensiunea lanțului (grosime × pas), gradul de rezistență, lungimea totală și aplicația — ridicare, ancorare marfă sau montaj pe utilaj forestier — pentru că fiecare categorie are certificări și accesorii diferite.`,
    limitation: "Nu putem confirma disponibilitatea locală a certificatelor de încercare individuale (test certificate) pentru fiecare lanț RUD; acestea se solicită separat, direct la producător, pentru fiecare lot.",
    productCodes: [
      { code: "Rundstahlketten gehärtet", description: "Lanțuri din oțel rotund călit, pentru ridicare" },
      { code: "Rundstahlketten vergütet", description: "Lanțuri din oțel rotund tratat termic" },
      { code: "Edelstahlketten", description: "Lanțuri de ridicare din oțel inoxidabil" },
      { code: "Gussketten", description: "Lanțuri pentru turnătorii, rezistente la căldură" },
      { code: "D-Profil-Ketten", description: "Lanțuri cu profil D pentru transportoare" },
      { code: "Anschlagpunkte", description: "Puncte de ancorare filetate sau sudate" },
      { code: "Anschlagmittel", description: "Accesorii de prindere pentru sarcini suspendate" },
      { code: "Zurrpunkte", description: "Puncte fixe de ancorare a mărfii" },
      { code: "Zurrmittel", description: "Chingi și lanțuri de ancorare marfă" },
      { code: "RUD BLUE-ID", description: "Sistem electronic de identificare a lanțului" },
      { code: "Reifenketten Rotogrip", description: "Lanțuri de zăpadă pentru anvelope utilaje" },
      { code: "Forstketten", description: "Lanțuri forestiere pentru teren accidentat" },
      { code: "Hebezeug- und Industrieketten", description: "Lanțuri de ridicare și industriale, gama generală" },
      { code: "Fördertechnik", description: "Componente pentru sisteme de transport intern" },
      { code: "Antriebstechnik", description: "Componente pentru sisteme de antrenare cu lanț" }
    ],
    faq: [
      { q: "Ce produce RUD Ketten?", a: "RUD produce lanțuri de ridicare din oțel rotund, sisteme de ancorare pentru sarcini suspendate și pentru marfă pe platforme de transport, lanțuri pentru anvelope de utilaje forestiere și de zăpadă, plus componente pentru transport și antrenare tehnică." },
      { q: "Cum aleg un lanț RUD după dimensiune?", a: "Pornește de la grosimea și pasul verigii (ex. 8×24 mm), apoi verifică gradul de rezistență necesar și standardul aplicabil — DIN EN 818-7 pentru ridicare. Aplicația (macara, ancorare marfă, utilaj forestier) determină și tipul de accesorii compatibile." },
      { q: "Livrați lanțuri RUD Ketten în România și cât durează?", a: "Da, la comandă, prin rețeaua de distribuție europeană a producătorului. Termenul orientativ este 2-6 săptămâni, în funcție de dimensiune și de confirmarea de stoc primită de la producător; nu ținem pe raft propriu pentru toate dimensiunile." },
      { q: "Ce diferență e între lanțurile de ridicare și cele de ancorare marfă RUD?", a: "Lanțurile de ridicare (Rundstahlketten) sunt certificate pentru sarcini suspendate pe verticală conform DIN EN 818-7, în timp ce sistemele de ancorare marfă (Zurrpunkte, Zurrmittel) sunt gândite pentru fixarea încărcăturii pe platforme, cu solicitări predominant orizontale." },
      { q: "Ce trebuie să trimit pentru o ofertă de lanțuri RUD Ketten?", a: "Dimensiunea lanțului, lungimea sau numărul de zale, gradul de rezistență și aplicația exactă. Pentru sisteme de ancorare marfă, trimite și tipul vehiculului sau al platformei, ca să recomandăm configurația corectă de puncte de ancorare." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "RUD.com — corporate site", url: "https://www.rud.com/", publisher: "RUD Ketten Rieger & Dietz GmbH u. Co. KG", accessed: "2026-09-23" },
      { title: "Hoist Chains — RUD", url: "https://hoistchains.rud.com/", publisher: "RUD Ketten Rieger & Dietz GmbH u. Co. KG", accessed: "2026-09-23" },
    ],
  },
  'reggiana-riduttori': {
    name: "Reggiana Riduttori",
    headquarters: "San Polo d'Enza, Italia",
    overview: `Reggiana Riduttori este un producător italian de reductoare planetare, motoreductoare și roți de antrenare electrice, cu sediul la San Polo d'Enza, lângă Reggio Emilia. Gama de bază, Serie 2000, acoperă reductoare planetare liniare și unghiulare, completată de Plus Series pentru configurații suplimentare, Combined V-Series pentru reductoare combinate și W-Series pentru trolii de ridicare pe macarale. Producătorul include în portofoliu și linia Berma, dedicată aplicațiilor specifice, plus frâne cu lamele, angrenaje cilindrice (helical gears) și roți dințate.

Ce diferențiază Reggiana Riduttori e orientarea spre utilaje mobile grele — macarale, echipamente miniere, instalații marine și offshore — unde compania concurează cu Bonfiglioli pe segmentul de reductoare planetare pentru mecanisme de rotație și translație. Gama E-Drives adaugă roți de antrenare electrice, o direcție relativ nouă pentru producătorii tradiționali de reductoare planetare mecanice, orientată spre utilaje care trec la acționare electrică.

Pentru piața din România, Reggiana Riduttori are sens la mecanismele de rotație și translație ale macaralelor, la trolii de ridicare și la utilaje pentru minerit sau reciclare, acolo unde un reductor planetar compact trebuie să transmită cuplu mare într-un gabarit limitat.`,
    whyChoose: [
      "Portofoliu axat pe reductoare planetare pentru macarale, mașini mobile grele și aplicații marine",
      "Gama W-Series dedicată special troliilor de ridicare, separată de reductoarele de translație",
      "Combined V-Series pentru configurații de reductoare combinate, unde cuplul cerut e mai mare",
      "Linie E-Drives cu roți de antrenare electrice, pentru utilaje care migrează spre acționare electrică",
      "Frâne cu lamele integrate în gamă, nu doar reductoare individuale",
      "Medalie EcoVadis Bronze pentru practici de sustenabilitate în fabricație"
    ],
    keyProducts: [
      { name: "Reductoare Planetare Serie 2000", description: "Reductoare planetare liniare și unghiulare, gama de bază a producătorului, folosite pentru mecanisme de translație și rotație la utilaje mobile. Configurația unghiulară permite montaj compact acolo unde axul de intrare trebuie decalat față de cel de ieșire." },
      { name: "Reductoare Plus Series", description: "Extensie a gamei de bază, cu opțiuni suplimentare de raport de transmisie și configurație de montaj, pentru aplicații unde Seria 2000 standard nu acoperă cerința exactă de cuplu sau turație." },
      { name: "Reductoare Combined V-Series", description: "Reductoare planetare combinate, cu etaje suplimentare pentru rapoarte de transmisie mari, folosite acolo unde un singur etaj planetar nu ajunge pentru raportul de reducere cerut de aplicație." },
      { name: "Trolii W-Series pentru Macarale", description: "Reductoare dedicate mecanismelor de ridicare (trolii) de pe macarale, dimensionate pentru sarcini axiale și radiale specifice tamburului de cablu, distincte de reductoarele de translație din gama generală." },
      { name: "Roți de Antrenare Electrice E-Drives", description: "Roți de antrenare cu acționare electrică integrată, pentru utilaje mobile care trec de la acționare hidraulică sau mecanică la electrică, păstrând gabaritul de montaj al unei roți motrice convenționale." }
    ],
    industries: [
      "Macarale mobile și turn — reductoare de rotație și translație",
      "Minerit — reductoare planetare pentru utilaje grele de excavare",
      "Marină și offshore — reductoare pentru mecanisme de punte și macarale navale",
      "Reciclare — reductoare pentru linii de sortare și mărunțire",
      "Industria zahărului — reductoare pentru mixere și transportoare",
      "Agricultură — reductoare pentru utilaje și mixere agricole"
    ],
    infinitrade: `Aducem reductoare Reggiana Riduttori la comandă, prin canalele de aprovizionare din Italia ale producătorului; termenul orientativ e de 2-6 săptămâni de la confirmarea comenzii, fără garanția unei disponibilități imediate pe raporturile de transmisie mai puțin cerute. Lucrăm strict cu ce publică producătorul în cataloagele sale de serie, fără date proprii de stoc, așa că fiecare configurație se verifică individual înainte de ofertare. Pentru o ofertă corectă, trimiteți seria (2000, Plus, V sau W), raportul de transmisie sau cuplul de ieșire necesar, tipul de montaj și aplicația — macara, utilaj mobil sau linie de reciclare — pentru că fiecare serie are un interval propriu de rapoarte disponibile.`,
    limitation: "Nu putem confirma coduri de model individuale în cadrul fiecărei serii, deoarece producătorul publică raporturile de transmisie prin configuratorul propriu, nu într-un catalog numeric complet.",
    productCodes: [
      { code: "Serie 2000", description: "Reductoare planetare liniare și unghiulare, gama de bază" },
      { code: "Plus Series", description: "Reductoare planetare, opțiuni suplimentare de configurare" },
      { code: "Combined V-Series", description: "Reductoare planetare combinate, rapoarte mari de transmisie" },
      { code: "Winch Drives W-Series", description: "Reductoare pentru trolii de ridicare pe macarale" },
      { code: "E-Drives Series", description: "Roți de antrenare cu acționare electrică integrată" },
      { code: "Berma Line", description: "Linie de produse pentru aplicații specifice" },
      { code: "Brakes", description: "Frâne cu lamele pentru mecanisme de rotație" },
      { code: "Helical Gears", description: "Angrenaje cilindrice pentru transmisii auxiliare" },
      { code: "Wheel Gears", description: "Angrenaje pentru roți de antrenare mobile" },
      { code: "Slewing Drives", description: "Reductoare dedicate mecanismelor de rotație" }
    ],
    faq: [
      { q: "Ce produce Reggiana Riduttori?", a: "Reggiana Riduttori produce reductoare planetare pentru mecanisme de rotație și translație, reductoare dedicate troliilor de ridicare, roți de antrenare electrice și frâne cu lamele, orientate în special spre macarale, utilaje mobile grele și aplicații marine." },
      { q: "Cum aleg un reductor Reggiana Riduttori după serie?", a: "Pornește de la aplicație: Seria 2000 acoperă translația și rotația generală, W-Series e dedicată troliilor, iar Combined V-Series intervine când e nevoie de un raport de transmisie mai mare decât oferă un singur etaj planetar. Confirmă apoi cuplul de ieșire cerut." },
      { q: "Livrați reductoare Reggiana Riduttori în România și cât durează?", a: "Da, la comandă, prin canalele de aprovizionare din Italia ale producătorului. Termenul orientativ este 2-6 săptămâni, în funcție de configurația și raportul de transmisie solicitate; nu promitem disponibilitate din depozit pentru toate variantele." },
      { q: "Ce echivalent are gama Reggiana Riduttori la Bonfiglioli?", a: "Ambii producători oferă reductoare planetare pentru mecanisme de rotație și translație pe macarale și utilaje mobile, dar gamele nu sunt interschimbabile direct — fiecare cod are propriul raport de transmisie și interfață de montaj, verificate separat la ofertare." },
      { q: "Ce trebuie să trimit pentru o ofertă de reductoare Reggiana Riduttori?", a: "Seria dorită (2000, Plus, V sau W), cuplul de ieșire sau raportul de transmisie necesar, turația de intrare și tipul de montaj pe utilaj. Cu aceste date verificăm configurația disponibilă direct la producător." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Reggiana Riduttori — corporate site", url: "https://reggianariduttori.com", publisher: "Reggiana Riduttori S.p.A.", accessed: "2026-09-23" },
      { title: "Serie Prodotti — sitemap", url: "https://reggianariduttori.com/serie-prodotti-sitemap.xml", publisher: "Reggiana Riduttori S.p.A.", accessed: "2026-09-23" },
    ],
  },
  'regina-catene-calibrate': {
    name: "Regina Catene Calibrate",
    founded: 1919,
    headquarters: "Cernusco Lombardone, Italia",
    overview: `Regina Catene Calibrate este un producător italian de lanțuri cu role, cu sediul la Cernusco Lombardone, în provincia Lecco, activ neîntrerupt din 1919. Compania acoperă trei direcții de business: lanțuri industriale standard și speciale (inclusiv pentru câmpuri petroliere), lanțuri și benzi modulare de transport (gama Matveyor, sistemul e-F.A.S.T. pentru linii de îmbuteliere rapide) și lanțuri pentru motociclete, unde produce zeci de serii distincte pentru sport, turism, off-road și enduro.

Ce diferențiază Regina în lanțurile pentru motociclete e densitatea gamei — serii precum ZRP, ZRT, RT, RX3, RH2 sau ZSE acoperă practic fiecare combinație de pas (415, 420, 428, 520, 525, 530) și nivel de performanță, de la lanțuri urbane simple până la variante de competiție. Pe segmentul industrial, Regina concurează cu Renold și alți producători europeni de lanțuri cu role, cu certificări ISO 9001 și ISO 27001 pentru managementul calității și, respectiv, al securității informației.

Pentru piața din România, gama Regina are sens atât în service-uri și distribuție de piese moto, unde codul exact de lanț contează pentru compatibilitate, cât și în industrie, la linii de transport și ambalare unde lanțurile modulare Matveyor înlocuiesc benzile clasice.`,
    whyChoose: [
      "Peste un secol de fabricație de lanțuri cu role, din 1919, cu portofoliu pe trei piețe distincte",
      "Zeci de serii de lanțuri de motociclete, acoperind toate pasurile uzuale (415-530)",
      "Gama Matveyor de benzi modulare, alternativă la benzile de transport clasice",
      "Sistemul e-F.A.S.T. dedicat liniilor de îmbuteliere de mare viteză",
      "Certificări ISO 9001 și ISO 27001, pentru calitate și securitatea informației",
      "Lanțuri industriale speciale pentru câmpuri petroliere, pe lângă gama standard"
    ],
    keyProducts: [
      { name: "Lanțuri Moto Seria RX3", description: "Lanțuri pentru motociclete de cross și supermotard, disponibile în pasurile 420, 428 și 520, gândite pentru șocuri repetate și impurități de pe teren accidentat. Alegerea pasului depinde strict de motocicleta și pinionul original." },
      { name: "Lanțuri Moto Seria ZRT / ZRP", description: "Lanțuri de tip touring și sport, în pasurile 520, 525 și 530, cu inele de etanșare pentru păstrarea lubrifiantului intern. Seria ZRP e orientată spre motociclete sportive, ZRT spre uz mixt stradal." },
      { name: "Lanțuri Industriale Standard și pentru Câmpuri Petroliere", description: "Lanțuri cu role conforme standardelor ISO industriale, plus o linie dedicată de lanțuri pentru echipamente din câmpurile petroliere, unde rezistența la sarcini de șoc și la mediul abraziv e cerința principală." },
      { name: "Benzi Modulare Matveyor", description: "Sistem de benzi modulare din plastic, folosit ca alternativă la lanțurile de transport metalice clasice, pentru linii de ambalare și manipulare unde igiena și greutatea redusă contează." },
      { name: "Sistem e-F.A.S.T.", description: "Componente de lanț și transport dedicate liniilor de îmbuteliere de mare viteză, unde uzura accelerată a lanțului clasic ar impune opriri frecvente de mentenanță." }
    ],
    industries: [
      "Service-uri și distribuție moto — lanțuri de schimb pe cod exact",
      "Industria băuturilor — sisteme e-F.A.S.T. pentru linii de îmbuteliere",
      "Ambalare și logistică — benzi modulare Matveyor pentru transport",
      "Petrol și gaze — lanțuri industriale speciale pentru echipamente de câmp",
      "Producție industrială generală — lanțuri cu role standard ISO"
    ],
    infinitrade: `Furnizăm lanțuri Regina Catene Calibrate la comandă, prin distribuția europeană a producătorului italian; orientativ, termenul e de 2-6 săptămâni, fără stoc garantat permanent pe fiecare cod de lanț moto sau industrial. Ne bazăm exclusiv pe informațiile publice disponibile pe site-ul producătorului, nu pe evidențe proprii, așa că verificăm codul exact înainte de a confirma oferta. Pentru lanțuri de motociclete avem nevoie de codul complet (ex. seria și pasul, precum 520 RX3), iar pentru aplicații industriale sau de transport, de pasul lanțului, numărul de zale și aplicația — linie de îmbuteliere, transport sau echipament petrolier.`,
    limitation: "Nu putem confirma echivalențe exacte între codurile Regina și codurile altor producători de lanțuri moto; recomandăm verificarea pasului și a numărului de zale direct pe lanțul existent.",
    productCodes: [
      { code: "135 ZRP", description: "Lanț moto sport, pas 520" },
      { code: "137 ZRP", description: "Lanț moto sport, pas 525" },
      { code: "136 ZRP2", description: "Lanț moto sport, pas 530" },
      { code: "135 ZRT", description: "Lanț moto touring, pas 520" },
      { code: "137 ZRT", description: "Lanț moto touring, pas 525" },
      { code: "136 ZRT", description: "Lanț moto touring, pas 530" },
      { code: "135 RT", description: "Lanț moto uz stradal, pas 520" },
      { code: "136 RT", description: "Lanț moto uz stradal, pas 530" },
      { code: "137 RT", description: "Lanț moto uz stradal, pas 525" },
      { code: "135 RX3", description: "Lanț moto cross/supermotard, pas 520" },
      { code: "126 RX3", description: "Lanț moto cross/supermotard, pas 428" },
      { code: "124 RX3", description: "Lanț moto cross/supermotard, pas 420" },
      { code: "135 RH2", description: "Lanț moto uz general, pas 520" },
      { code: "126 RH2", description: "Lanț moto uz general, pas 428" },
      { code: "124 RH2", description: "Lanț moto uz general, pas 420" },
      { code: "90 RH2", description: "Lanț moto uz general, pas 415" },
      { code: "135 ZSE", description: "Lanț moto enduro, pas 520" },
      { code: "126 ZSE", description: "Lanț moto enduro, pas 428" },
      { code: "137 ZRE", description: "Lanț moto adventure, pas 525" },
      { code: "135 ZRE", description: "Lanț moto adventure, pas 520" },
      { code: "126 EB-ORO", description: "Lanț moto urban, pas 428" },
      { code: "124 OROY", description: "Lanț moto urban, pas 420" },
      { code: "90 ORO", description: "Lanț moto urban, pas 415" },
      { code: "Matveyor Modular Belts", description: "Bandă modulară din plastic pentru transport" },
      { code: "e-F.A.S.T.", description: "Sistem pentru linii de îmbuteliere rapidă" },
      { code: "FliteTop", description: "Lanț de transport cu placă superioară plată" }
    ],
    faq: [
      { q: "Ce produce Regina Catene Calibrate?", a: "Regina produce lanțuri cu role pentru trei piețe: lanțuri de motociclete în zeci de serii (sport, touring, cross, enduro), lanțuri și benzi modulare de transport pentru industrie și ambalare, și lanțuri industriale speciale, inclusiv pentru echipamente din câmpurile petroliere." },
      { q: "Cum aleg un lanț de motocicletă Regina după cod?", a: "Verifică pasul lanțului existent (415, 420, 428, 520, 525 sau 530) și numărul de zale, apoi alege seria potrivită tipului de utilizare: ZRP/ZRP2 pentru sport, ZRT/RT pentru touring, RX3/RH2 pentru cross, ZSE pentru enduro. Codul complet apare de obicei pe eticheta lanțului original." },
      { q: "Livrați lanțuri Regina Catene Calibrate în România și cât durează?", a: "Da, la comandă, prin distribuția europeană a producătorului italian. Termenul orientativ este 2-6 săptămâni, în funcție de codul și cantitatea solicitate; nu ținem această gamă pe raft pentru toate seriile de lanțuri moto sau industriale." },
      { q: "Ce este sistemul Matveyor de la Regina?", a: "Matveyor este gama de benzi modulare din plastic a Regina, folosită ca alternativă la lanțurile de transport metalice clasice în linii de ambalare și manipulare, unde greutatea redusă și igiena contează mai mult decât rezistența mecanică a oțelului." },
      { q: "Ce trebuie să trimit pentru o ofertă de lanțuri Regina?", a: "Pentru moto: codul complet sau pasul și numărul de zale de pe lanțul original. Pentru industrial sau transport: pasul lanțului, tipul de atașament (dacă există) și aplicația exactă — linie de îmbuteliere, transport sau echipament de câmp petrolier." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Regina Chain — corporate site", url: "https://www.reginachain.net/", publisher: "Regina Catene Calibrate S.p.A.", accessed: "2026-09-23" },
      { title: "Motorcycle Professional Line", url: "https://www.reginachain.net/business-unit/motorcycle/professional/", publisher: "Regina Catene Calibrate S.p.A.", accessed: "2026-09-23" },
      { title: "Industrial Chains", url: "https://www.reginachain.net/products-solutions/industrial/", publisher: "Regina Catene Calibrate S.p.A.", accessed: "2026-09-23" },
    ],
  },
  'rollix': {
    name: "Rollix",
    founded: 1969,
    headquarters: "La Bruffière, Franța",
    overview: `Rollix este un producător francez de inele de rotație (slewing rings), parte a grupului Defontaine, cu sediul la La Bruffière și activitate din 1969. Gama acoperă inele de rotație cu bile standard, o serie ușoară (Light Series) pentru reducerea greutății, inele cu role încrucișate pentru rigiditate mare la sarcini combinate, și inele de precizie pentru aplicații compacte. Toate variantele pot fi livrate cu sau fără angrenaj, cu dantură exterioară, interioară, dreaptă sau elicoidală.

Ce diferențiază Rollix e plaja de diametre — de la 100 mm până la 6.200 mm — și opțiunile de configurație multiple din aceeași familie de bază: inel monorând sau birând cu bile, inel cu role dispuse pe trei rânduri pentru sarcini extreme, execuție din oțel, aluminiu, titan sau aliaj 42CrMo4, cu tratamente de suprafață pentru protecție anticorozivă. Compania se poziționează în aceeași categorie tehnică cu Rothe Erde, pe segmentul de rulmenți de rotație de mari dimensiuni pentru energie eoliană și utilaje grele.

Pentru piața din România, Rollix are sens la mecanismele de rotație ale macaralelor, ale turbinelor eoliene și ale echipamentelor forestiere sau navale, unde un rulment radial-axial standard nu poate prelua simultan sarcina axială, radială și momentul de răsturnare specifice unei platforme rotative.`,
    whyChoose: [
      "Plajă de diametre de la 100 mm la 6.200 mm, în aceeași familie de bază de produse",
      "Inele cu bile monorând, birând sau cu role încrucișate, în funcție de sarcina combinată",
      "Serie ușoară (Light Series) cu profil L sau secțiune plină, pentru reducerea greutății",
      "Opțiuni de dantură exterioară, interioară, dreaptă sau elicoidală, sau execuție fără angrenaj",
      "Execuție din oțel, aluminiu, titan sau aliaj 42CrMo4, cu tratamente anticorozive",
      "Peste un milion de inele instalate global, conform datelor publicate de producător"
    ],
    keyProducts: [
      { name: "Inele de Rotație Standard cu Bile", description: "Inele cu bile în configurație monorând sau birând, disponibile în plaja de diametre de la 100 la 6.200 mm, cu sau fără angrenaj exterior sau interior. Soluția standard pentru macarale și platforme rotative cu sarcină moderată." },
      { name: "Serie Ușoară (Light Series)", description: "Inele de rotație cu profil L sau secțiune plină, gândite pentru aplicații unde greutatea totală a ansamblului contează la fel de mult ca sarcina admisă, precum echipamentele mobile sau montate pe structuri ușoare." },
      { name: "Inele cu Role Încrucișate", description: "Configurație cu role dispuse încrucișat pe aceeași cale de rulare, pentru rigiditate mare la sarcini combinate radiale, axiale și de moment, folosită acolo unde jocul admis trebuie să rămână minim." },
      { name: "Inele de Precizie", description: "Gamă compactă de inele de rotație pentru aplicații care cer precizie de poziționare ridicată, cu toleranțe strânse de fabricație, folosită în echipamente de precizie și instalații de testare rotativă." }
    ],
    industries: [
      "Energie eoliană — inele de rotație pentru mecanismul de orientare (yaw) al turbinelor",
      "Macarale mobile și turn — mecanisme de rotație a suprastructurii",
      "Utilaje forestiere — inele de rotație pentru cap de tăiere și braț",
      "Echipamente medicale — inele de precizie pentru aparatură rotativă",
      "Marină și transport — inele de rotație pentru macarale navale",
      "Ambalare și îmbuteliere — mese rotative echipate cu inele Rollix"
    ],
    infinitrade: `Aducem inele de rotație Rollix la comandă, prin canalele de aprovizionare franceze ale grupului Defontaine; termenul orientativ e de 2-6 săptămâni, fără garanția unei disponibilități imediate pe diametrele mai puțin uzuale. Informațiile din această pagină provin din surse publice ale producătorului, fără date proprii de stoc, motiv pentru care fiecare configurație — diametru, tip de angrenaj, material — se confirmă individual înainte de ofertare. Pentru o ofertă corectă avem nevoie de diametrul interior sau exterior al inelului, tipul de sarcină dominantă (radială, axială sau moment), prezența și tipul angrenajului, și aplicația finală, ca să direcționăm cererea către configurația potrivită din gama Rollix.`,
    limitation: "Nu putem confirma termene de fabricație pentru inele custom (Specific Slewing Rings) proiectate integral după cerințe unice de client, deoarece acestea depind de un proces de inginerie dedicat la producător.",
    productCodes: [
      { code: "Standard Ball Slewing Rings — monorând", description: "Inel de rotație cu bile, configurație cu un rând" },
      { code: "Standard Ball Slewing Rings — birând", description: "Inel de rotație cu bile, configurație cu două rânduri" },
      { code: "Light Series Ball Slewing Bearings", description: "Inel de rotație ușor, profil L sau plin" },
      { code: "Crossed Rollers Slewing Rings", description: "Inel cu role încrucișate, rigiditate mare" },
      { code: "Precision Slewing Rings", description: "Inel de rotație de precizie, toleranțe strânse" },
      { code: "Three-Row Roller Slewing Rings", description: "Inel cu role pe trei rânduri, sarcini extreme" },
      { code: "Slewing Rings with External Gear", description: "Inel de rotație cu dantură exterioară" },
      { code: "Slewing Rings with Internal Gear", description: "Inel de rotație cu dantură interioară" },
      { code: "Slewing Rings without Gear", description: "Inel de rotație fără angrenaj, simplu" },
      { code: "Custom-Engineered Slewing Rings", description: "Inel de rotație proiectat după cerințe unice" }
    ],
    faq: [
      { q: "Ce produce Rollix?", a: "Rollix produce inele de rotație (slewing rings) cu bile sau cu role, în configurații standard, ușoare, cu role încrucișate sau de precizie, cu diametre de la 100 mm la 6.200 mm, cu sau fără angrenaj integrat, pentru macarale, turbine eoliene și utilaje grele." },
      { q: "Cum aleg un inel de rotație Rollix după aplicație?", a: "Pentru sarcini moderate și diametre mici-medii, seria standard cu bile acoperă majoritatea cazurilor. Pentru rigiditate mare la sarcini combinate alege role încrucișate; pentru greutate redusă, Light Series; pentru precizie de poziționare, seria dedicată de precizie." },
      { q: "Livrați inele de rotație Rollix în România și cât durează?", a: "Da, la comandă, prin canalele de aprovizionare ale grupului Defontaine din Franța. Termenul orientativ este 2-6 săptămâni, în funcție de diametru și configurație; nu promitem disponibilitate din depozit pentru dimensiunile mai puțin cerute." },
      { q: "Ce echivalent are Rollix la Rothe Erde?", a: "Ambii producători fabrică inele de rotație de mari dimensiuni pentru energie eoliană și utilaje grele, cu game tehnice comparabile ca principiu, dar codurile și diametrele exacte nu sunt interschimbabile direct — fiecare configurație se verifică separat la comandă." },
      { q: "Ce trebuie să trimit pentru o ofertă de inele Rollix?", a: "Diametrul interior sau exterior al inelului, tipul de sarcină dominantă, dacă e necesar angrenaj (exterior, interior sau fără), materialul dorit și aplicația finală (macara, turbină eoliană, utilaj forestier). Cu aceste date verificăm configurația potrivită la producător." }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-23",
    changelog: [ { date: "2026-09-23", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Rollix — Defontaine Group", url: "https://www.defontaine.com/en/defontaine-group/rollix/", publisher: "Defontaine Group", accessed: "2026-09-23" },
      { title: "Slewing Rings — Products", url: "https://www.defontaine.com/en/product/slewing-rings/", publisher: "Defontaine Group", accessed: "2026-09-23" },
    ],
  },
};
