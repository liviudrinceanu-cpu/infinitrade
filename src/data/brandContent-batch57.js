// Batch 57 - Branduri-500 v3 (sept. 2026): Lutz, Flux, Wilden, Sandpiper, Yamada, Kamat, Schwing, Viking Pump, Maag, IMI Hydronic, Crane.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch57 = {
  lutz: {
    name: "Lutz",
    overview: `Lutz este un nume german specializat în pompe pentru golirea și transferul lichidelor din butoaie și containere IBC, parte din grupul Lutz care include și Lutz-Jesco pentru tehnica de dozare. Gama de bază acoperă pompe de butoi cu motor electric, pneumatic sau pe acumulator, completate de pompe cu diafragmă acționate cu aer comprimat, pompe centrifuge și debitmetre pentru monitorizarea transferului. Pentru piața din România, Lutz înseamnă acces la pompe portabile certificate pentru lichide agresive, inflamabile sau corozive, acolo unde o pompă fixă de proces nu e practică sau nu poate fi mutată între recipiente diferite.

Ce diferențiază gama Lutz e varietatea de motoare interschimbabile cu același tub de pompă — de la motorul universal MI 4 pentru lichide apoase, la seriile ME II certificate ATEX pentru zone cu risc de explozie, până la motoarele pe acumulator B1/B2/B3 pentru lucru fără sursă fixă de curent. Certificările menționate de producător includ ATEX, UL, PTB, VDE și CE. În aceeași categorie de pompe de butoi concurează și Flux, pe segmentul chimic și industrial.

Pentru un cumpărător din România, Lutz are sens unde transferul se face din butoaie de 200 l sau IBC-uri direct la punctul de utilizare — laboratoare, producție sau depozite chimice, unde portabilitatea și certificarea ATEX contează mai mult decât debitul mare.`,
    whyChoose: [
      "Motoare interschimbabile pe același tub de pompă — de la MI universal la ME II certificat ATEX, fără a schimba întregul ansamblu",
      "Variante pe acumulator (B1, B2, B3) pentru pompare portabilă fără sursă de alimentare fixă, utile pe șantier sau în teren",
      "Certificări multiple recunoscute — ATEX, UL, PTB, VDE, CE — pentru conformitate atât pe piața europeană cât și americană",
      "Gamă completă pentru un singur furnizor — pompe de butoi, pompe cu diafragmă, pompe centrifuge și debitmetre din aceeași familie",
      "Concepute pentru lichide dificile — corozive, inflamabile sau cu vâscozitate ridicată, tipice industriei chimice"
    ],
    keyProducts: [
      { name: "Motoare Electrice Seria MI/MA II/ME II", description: "Motoare de acționare pentru tuburile de pompă de butoi, de la modelul universal MI 4 pentru lichide apoase, la seria MA II (3/5/7) cu ventilație externă pentru utilizare intensivă, până la seria ME II (3/5/7/8) certificată ATEX pentru zone cu risc de explozie din industria chimică. Toate se montează pe același sistem de tub de pompă, ceea ce simplifică inventarul de piese de schimb și permite adaptarea rapidă la un lichid diferit." },
      { name: "Motoare pe Acumulator Seria B", description: "Motoare BLDC alimentate cu acumulator, gândite pentru pompare portabilă fără cablu sau furtun de aer comprimat: B1 pentru medii cu vâscozitate redusă, cu autonomie de aproximativ 25 de minute, B2 cu autonomie de circa 35 de minute și capacitate de golire pentru mai multe butoaie de 200 l per încărcare, B3 pentru medii mai vâscoase cu debit de până la 180 l/min. Utile în depozite sau puncte de lucru fără priză disponibilă." },
      { name: "Motoare Pneumatice Seria MD", description: "Motoare cu aer comprimat fără ulei, model MD1xL cu putere de 1000 W și certificare ATEX pentru zone cu risc de explozie, și varianta MD2xL cu mâner ergonomic pentru utilizare prelungită. Recomandate acolo unde alimentarea electrică nu e permisă din motive de siguranță sau unde aerul comprimat e deja disponibil în instalație." },
      { name: "Pompe Cu Diafragmă Cu Aer Comprimat", description: "Pompe pneumatice cu diafragmă pentru transfer de lichide agresive sau vâscoase direct din butoaie sau containere, fără componente electrice care ar putea genera scântei. Utile acolo unde certificarea ATEX trebuie să acopere întregul ansamblu, nu doar motorul." }
    ],
    industries: [
      "Chimie și petrochimie — transfer de lichide corozive sau inflamabile din butoaie și IBC-uri",
      "Laboratoare — dozare și transfer controlat de reactivi în cantități mici",
      "Producție industrială — golirea containerelor de materii prime lichide direct la linia de fabricație",
      "Zone ATEX — pompare în spații cu risc de explozie cu motoare din seria ME II"
    ],
    infinitrade: `Aducem pompe de butoi și motoare Lutz prin canale de aprovizionare din UE, la comandă — pentru acest brand lucrăm din surse publice ale producătorului, fără date proprii de stoc pe modelele electrice, pneumatice sau pe acumulator. Termenul orientativ este de 2-6 săptămâni de la confirmarea comenzii, în funcție de disponibilitatea la producător. Pentru o ofertă corectă avem nevoie de: lichidul pompat (denumire, vâscozitate, densitate, temperatură), materialul de contact necesar, tipul de motor dorit (electric, pneumatic sau acumulator) și dacă e nevoie de certificare ATEX. Nu promitem disponibilitate din depozit pe nicio combinație motor-tub și recomandăm confirmarea codului exact înainte de emiterea comenzii ferme.`,
    limitation: "Nu putem confirma stocul permanent sau termenele de livrare pentru combinații specifice motor-tub care nu apar explicit în cataloagele publice ale producătorului.",
    productCodes: [
      { code: "MI 4", description: "Motor universal electric pentru lichide apoase, slab vâscoase" },
      { code: "MI 4-E", description: "Variantă a motorului MI 4 cu control electronic" },
      { code: "B4/GT", description: "Motor cu reductor trifazat, 0,75 kW, pentru funcționare îndelungată" },
      { code: "MA II 3", description: "Motor electric extern ventilat, gamă de putere medie" },
      { code: "MA II 5", description: "Motor electric extern ventilat, treaptă de putere superioară" },
      { code: "MA II 7", description: "Motor electric extern ventilat, treaptă superioară din serie" },
      { code: "ME II 3", description: "Motor certificat ATEX pentru zone cu risc de explozie" },
      { code: "ME II 5", description: "Motor ATEX, treaptă de putere medie din seria explozie-protejată" },
      { code: "ME II 7", description: "Motor ATEX, treaptă de putere ridicată" },
      { code: "ME II 8", description: "Motor ATEX, cea mai puternică variantă din seria ME II" },
      { code: "B2 Vario", description: "Controler de turație infinit variabilă pentru containere mici" },
      { code: "MD1xL", description: "Motor pneumatic fără ulei, 1000 W, certificat ATEX" },
      { code: "MD2xL", description: "Motor pneumatic fără ulei, cu mâner ergonomic pentru confort" },
      { code: "B1 Battery", description: "Motor pe acumulator BLDC, circa 25 min autonomie" },
      { code: "B2 Battery", description: "Motor pe acumulator BLDC, autonomie pentru mai multe butoaie" },
      { code: "B3 Battery", description: "Motor pe acumulator pentru medii vâscoase, debit 180 l/min" }
    ],
    faq: [
      { q: "Ce produce Lutz?", a: "Lutz produce pompe portabile pentru golirea butoaielor și containerelor IBC — motoare electrice, pneumatice și pe acumulator montate pe tuburi de pompă interschimbabile, plus pompe cu diafragmă, pompe centrifuge și debitmetre pentru transferul controlat al lichidelor industriale." },
      { q: "Cum aleg motorul Lutz potrivit pentru lichidul meu?", a: "Alegerea depinde de vâscozitate, de riscul de explozie al mediului și de sursa de alimentare disponibilă: pentru lichide apoase e suficient motorul universal MI, pentru zone ATEX e nevoie de seria ME II, iar pentru lucru fără priză electrică există variantele pe acumulator B1-B3." },
      { q: "Livrați pompe Lutz în România și cât durează?", a: "Da, aducem pompe și motoare Lutz la comandă prin canale de aprovizionare din UE; termenul orientativ este de 2-6 săptămâni, în funcție de confirmarea producătorului pentru codul exact solicitat." },
      { q: "Ce trebuie să trimit pentru o ofertă de pompă Lutz?", a: "Aveți nevoie să precizați lichidul pompat, vâscozitatea și temperatura de lucru, materialul de contact necesar, tipul de motor preferat și dacă aplicația impune certificare ATEX; pe baza acestor date confirmăm codul potrivit cu producătorul." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Lutz Pumpen – Drum pumps and IBC pumps", url: "https://www.lutz-pumpen.de/en/", publisher: "Lutz Pumpen GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "Drum and container pump motors", url: "https://www.lutz-jesco.com/en/products/drum-and-container-pumps/motors", publisher: "Lutz-Jesco GmbH", accessed: "2026-09-22" }
    ],
  },

  flux: {
    name: "Flux",
    founded: 1950,
    headquarters: "Maulbronn, Germania",
    overview: `FLUX-GERÄTE GmbH este producătorul german din Maulbronn cunoscut pentru pompele de butoi și container electrice și pneumatice, cu peste 75 de ani de activitate în transferul de lichide industriale. Gama de bază, seria F/FP 400, acoperă pompe fără etanșare (sealless, ex. F 424) și pompe cu etanșare mecanică (ex. F 430) pentru lichide de la apoase la vâscoase, completată de sisteme mobile de golire VISCOFLUX pentru vâscozități extreme și pompe cu șurub excentric VISCOPOWER. Pentru piața din România, Flux înseamnă o alternativă directă la Lutz pe segmentul pompelor de butoi, cu o gamă orientată explicit spre chimie și farmacie.

Ce diferențiază Flux e plaja largă de vâscozitate acoperită: seria F 430 pompează până la 1200 cPs cu o înălțime de pompare de până la 98 ft (circa 30 m) și debit maxim de 63 GPM (aprox. 240 l/min), pe imersii standard de 700-1500 mm, disponibilă în polipropilenă, PVDF, inox, aluminiu sau Hastelloy C. Sistemele VISCOPOWER și VISCOFLUX merg mult mai departe, până la 100.000, respectiv 500.000 mPas, pentru golirea completă a butoaielor cu produse foarte vâscoase — un segment unde concurează direct cu Lutz.

Pentru un cumpărător din România, Flux are sens unde compatibilitatea chimică a materialului de contact contează la fel de mult ca debitul — laboratoare, linii de îmbuteliere sau stații de dozare din industria cosmetică și alimentară.`,
    whyChoose: [
      "Plajă largă de vâscozitate — de la lichide apoase la 500.000 mPas pe sistemele VISCOFLUX, fără schimbarea principiului de pompare",
      "Variante sealless și cu etanșare mecanică în aceeași serie F/FP 400, alese după compatibilitatea chimică a lichidului",
      "Materiale de contact multiple — polipropilenă, PVDF, inox, aluminiu sau Hastelloy C — pentru medii corozive diferite",
      "Sisteme de umplere calibrate SAFETEC și FLUX-FILL GT pentru manipulare sigură a substanțelor periculoase",
      "Peste 75 de ani de fabricație germană specializată exclusiv pe transferul de lichide din butoaie și containere"
    ],
    keyProducts: [
      { name: "Pompă de Butoi F 424 (Sealless)", description: "Pompă de butoi fără etanșare mecanică, concepută pentru funcționare continuă cu lichide agresive unde o garnitură clasică s-ar uza rapid. Face parte din seria Type 400, alături de variante specializate precum F 425 (Liquid Saver, pentru golire completă) și F 426 (pompă cu funcție de amestecare). Recomandată pentru chimicale corozive și aplicații AdBlue, unde absența etanșării reduce riscul de scurgere." },
      { name: "Pompă de Butoi F 430 (Cu Etanșare Mecanică)", description: "Pompă de înaltă performanță cu etanșare mecanică, debit maxim de 63 GPM, vâscozitate maximă acceptată de 1200 cPs, înălțime de pompare de până la 98 ft și temperatură de lucru de până la 120°C. Disponibilă cu lungimi de imersie de 700, 1000, 1200 sau 1500 mm și, pe variantele cu miez metalic în tub de plastic, până la 3000 mm. Materiale: PP, PVDF, inox, aluminiu sau Hastelloy C." },
      { name: "Sistem Mobil de Golire VISCOFLUX", description: "Sistem complet de golire a butoaielor pentru produse extrem de vâscoase, cu capacitate de până la 500.000 mPas și volum rezidual sub 1% — util acolo unde pierderea de produs la fundul butoiului contează financiar. Aplicație tipică: golirea completă a ambalajelor cu adezivi, paste sau produse cosmetice vâscoase înainte de reciclarea containerului." },
      { name: "Pompă Cu Șurub Excentric VISCOPOWER", description: "Pompă cu șurub excentric pentru fluide foarte vâscoase, cu capacitate de până la 100.000 mPas și presiune de refulare de până la 15 bar; modelul VISCOPOWER F 570 include un dispozitiv anti-rotație pentru operare stabilă. Recomandată pentru transfer continuu, nu doar golire punctuală, de paste, geluri sau produse alimentare groase." }
    ],
    industries: [
      "Chimie și petrochimie — transfer de lichide corozive sau inflamabile din butoaie",
      "Cosmetice și farmacie — dozare precisă de produse vâscoase în condiții de igienă",
      "Industria alimentară — transfer de siropuri, uleiuri sau paste groase",
      "Protecție împotriva incendiilor — sisteme dedicate cu componente ATEX",
      "Agricultură și tehnologie de suprafață — transfer de soluții și tratamente lichide"
    ],
    infinitrade: `Furnizăm pompe de butoi FLUX din seria F/FP 400 și sisteme VISCOPOWER/VISCOFLUX prin canale de aprovizionare din UE, la comandă. Pentru acest brand ne bazăm pe surse publice ale producătorului și nu avem date proprii de stoc — fiecare configurație (material de contact, lungime de imersie, tip de etanșare) se confirmă direct cu FLUX-GERÄTE înainte de emiterea comenzii ferme. Termenul orientativ pentru livrare e de 2-6 săptămâni din momentul confirmării cu producătorul. Pentru ofertă avem nevoie de: lichidul transferat, vâscozitatea aproximativă, lungimea de imersie necesară pentru butoiul sau containerul dumneavoastră și dacă aplicația impune certificare ATEX. Nu promitem disponibilitate din depozit pe variantele cu materiale speciale precum Hastelloy C.`,
    limitation: "Nu putem confirma configurarea electronică FLUXTRONIC® sau disponibilitatea imediată a variantelor din materiale speciale (Hastelloy C) fără verificare directă cu producătorul.",
    productCodes: [
      { code: "F 424", description: "Pompă de butoi sealless pentru lichide agresive continue" },
      { code: "F 425", description: "Variantă Liquid Saver pentru golire completă a butoiului" },
      { code: "F 426", description: "Pompă de butoi cu funcție suplimentară de amestecare" },
      { code: "F 427", description: "Pompă de butoi în variantă sanitară" },
      { code: "F 430", description: "Pompă cu etanșare mecanică, debit max. 63 GPM, 1200 cPs" },
      { code: "F 430 MINIFLUX", description: "Variantă compactă a pompei F 430 pentru containere mici" },
      { code: "F 430 Tote Pump", description: "Variantă F 430 dedicată containerelor IBC (tote)" },
      { code: "VISCOPOWER F 570", description: "Pompă cu șurub excentric, până la 100.000 mPas, 15 bar" },
      { code: "VISCOFLUX", description: "Sistem mobil de golire, până la 500.000 mPas, reziduu sub 1%" },
      { code: "MAGSON", description: "Pompă centrifugă cu cuplaj magnetic, fără etanșare, zero scurgeri" },
      { code: "FLUX-FILL GT", description: "Sistem de umplere cu dozare calibrată precis" },
      { code: "SAFETEC", description: "Set de pompare pentru manipularea substanțelor periculoase" }
    ],
    faq: [
      { q: "Ce produce FLUX (Flux-Geräte)?", a: "FLUX produce pompe electrice și pneumatice pentru golirea butoaielor și containerelor — de la modele sealless și cu etanșare mecanică din seria F/FP 400, la sisteme pentru vâscozități extreme (VISCOPOWER, VISCOFLUX) și pompe centrifuge magnetice MAGSON." },
      { q: "Ce diferență e între F 424 și F 430 de la Flux?", a: "F 424 e o pompă sealless, fără etanșare mecanică, potrivită pentru funcționare continuă cu lichide agresive, în timp ce F 430 folosește etanșare mecanică și oferă un debit mai mare, până la 63 GPM, pentru vâscozități de până la 1200 cPs." },
      { q: "Ce vâscozitate maximă poate pompa un sistem Flux VISCOFLUX?", a: "Sistemul mobil VISCOFLUX este conceput pentru produse cu vâscozitate de până la 500.000 mPas, cu un volum rezidual sub 1% în butoi, util acolo unde pierderea de produs la golire contează." },
      { q: "Livrați pompe Flux în România și cât durează?", a: "Da, aducem pompe Flux la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, în funcție de configurația exactă confirmată cu producătorul." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "FLUX-GERÄTE GmbH – Home", url: "https://www.flux-pumps.com/en/", publisher: "FLUX-GERÄTE GmbH", accessed: "2026-09-22" },
      { title: "F430 Sealed Pump", url: "https://www.fluxpumpsusa.com/en-US/products/drum-and-container-pumps/type-400/f430-sealed-pump.html", publisher: "FLUX Pumps Corp. USA", accessed: "2026-09-22" }
    ],
  },

  wilden: {
    name: "Wilden",
    founded: 1955,
    headquarters: "Grand Terrace, California, SUA",
    overview: `Wilden este producătorul american care a inventat pompa cu membrană operată pneumatic (AODD) în 1955 și rămâne astăzi unul dintre numele de referință ale categoriei, ca parte a grupului PSG (Pump Solutions Group, Dover Corporation). Gama principală, seria Pro-Flo, acoperă modele clampate (P.025 până la P8) și modele cu flanșe boltate (P100 până la P1500 în variantă plastic, P220-P830 în variantă metal), pentru transfer de lichide fără etanșare dinamică, direct din vase, cisterne sau linii de proces. Pentru România, Wilden înseamnă acces la o tehnologie de pompare fără rulmenți sau etanșări rotative — utilă acolo unde întreținerea trebuie să fie simplă și rapidă.

Ce diferențiază seria Pro-Flo SHIFT, versiunea avansată a gamei, e sistemul de distribuție a aerului care aduce, conform producătorului, până la 60% economie de aer și 34% debit suplimentar față de un Pro-Flo clasic la același consum de aer comprimat. Alături de seria standard, Wilden oferă și pompe specializate — Saniflo pentru industria alimentară și farmaceutică, variante FDA, de înaltă presiune sau pentru minerit — plus certificări FDA, 3-A, EHEDG pentru aplicații igienice și CSA/UL pentru zone speciale. În aceeași categorie AODD, Wilden concurează cu Sandpiper, tot din portofoliul unor grupuri industriale americane mari.

Pentru un cumpărător din România, Wilden are sens acolo unde lichidul conține particule solide, e abraziv sau necesită auto-amorsare fără pompă centrifugală suplimentară — transfer de vopsele, adezivi, nămoluri sau produse alimentare vâscoase, în instalații unde oprirea pentru mentenanță trebuie minimizată.`,
    whyChoose: [
      "Pompă fără etanșare dinamică — nicio garnitură rotativă expusă la uzură, potrivită pentru lichide abrazive sau cu solide",
      "Seria Pro-Flo SHIFT reduce consumul de aer cu până la 60% și crește debitul cu până la 34% față de Pro-Flo standard",
      "Game specializate certificate — Saniflo (FDA, 3-A, EHEDG) pentru alimentar/farmaceutic, plus variante de înaltă presiune și minerit",
      "Compatibilitate cu materiale metalice și plastice pe aceeași dimensiune de conexiune, pentru medii chimice diferite",
      "Parte din grupul PSG/Dover — acces la rețea internațională de piese de schimb și documentație tehnică"
    ],
    keyProducts: [
      { name: "Pro-Flo Clamped Metal/Plastic (P1-P8)", description: "Familia de bază a gamei Wilden, cu conexiuni de la 13 mm (1/2\") la 51 mm (2\"), disponibilă atât în variantă metalică cât și plastică, cu design clampat pentru demontare rapidă fără scule speciale la intervenții de service. Recomandată ca punct de plecare pentru majoritatea aplicațiilor industriale de transfer unde nu e nevoie de o gamă de debit foarte mare." },
      { name: "Pro-Flo Bolted Plastic (P100-P1500)", description: "Variantă cu flanșe boltate a gamei plastic, de la 13 mm (P100) până la 76 mm/3\" (P1500), pentru instalații unde etanșarea la flanșă boltată e preferată față de sistemul clampat. Acoperă un domeniu mai larg de dimensiuni decât seria clampată, util la debite mai mari sau la conducte de diametru mai generos." },
      { name: "Pro-Flo Bolted Metal (P220/P420/P820)", description: "Variantă metalică boltată, în trepte de 25 mm (P220/P230), 38 mm (P420/P430) și 51 mm (P820/P830), pentru medii unde rezistența mecanică a carcasei metalice contează mai mult decât greutatea redusă a plasticului. Alegere tipică pentru instalații industriale fixe cu presiune de linie ridicată." },
      { name: "Turbo-Flo (Seria Specialty, ex. T4)", description: "Pompă din seria Specialty pentru aplicații utilitare, cu conexiune de 38 mm (1-1/2\") pe modelul T4 în variantă metal clampat. Face parte din gama de pompe dedicate unor nișe specifice (utilitare, sanitare, înaltă presiune, minerit) care completează seria Pro-Flo standard." }
    ],
    industries: [
      "Industrial general — transfer de lichide diverse în procese de fabricație",
      "Petrol și gaze — manipulare fluide de proces și produse petroliere",
      "Vopsele și adezivi — pompare produse vâscoase fără etanșare dinamică",
      "Alimentar și farmaceutic — seria Saniflo, certificată FDA/3-A/EHEDG",
      "Tratarea apei și apelor uzate — transfer nămol și fluide cu solide",
      "Minerit — variante specializate pentru medii abrazive"
    ],
    certifications: [
      "FDA — conformitate pentru contact cu produse alimentare pe seria Saniflo",
      "3-A și EHEDG — standarde de igienă pentru echipamente sanitare",
      "CSA / UL — certificări pentru piața nord-americană pe variante specializate"
    ],
    infinitrade: `Furnizăm pompe Wilden din seria Pro-Flo și game specializate (Saniflo, înaltă presiune) prin canale de aprovizionare din UE și SUA, la comandă. Pentru acest brand lucrăm din surse publice ale producătorului — fără date proprii de stoc — și confirmăm fiecare configurație (material, dimensiune conexiune, tip membrană) direct cu rețeaua de distribuție PSG înainte de ofertă. Termenul orientativ este de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă avem nevoie de: lichidul pompat, dimensiunea conexiunii dorite, materialul de contact necesar și dacă aplicația impune certificare FDA sau altă normă sanitară. Nu promitem disponibilitate din depozit pe variantele Saniflo sau de înaltă presiune.`,
    limitation: "Nu putem confirma disponibilitatea imediată a membranelor sau kiturilor de service pentru fiecare variantă de material fără verificare directă în rețeaua de distribuție PSG.",
    productCodes: [
      { code: "P.025", description: "Pompă clampată, conexiune 6 mm (1/4\"), cea mai mică din serie" },
      { code: "P1", description: "Pompă clampată, conexiune 13 mm (1/2\")" },
      { code: "P2", description: "Pompă clampată, conexiune 25 mm (1\")" },
      { code: "P4", description: "Pompă clampată, conexiune 38 mm (1-1/2\")" },
      { code: "P8", description: "Pompă clampată, conexiune 51 mm (2\")" },
      { code: "P100", description: "Pompă plastic boltată, conexiune 13 mm (1/2\")" },
      { code: "P200", description: "Pompă plastic boltată, conexiune 25 mm (1\")" },
      { code: "P400", description: "Pompă plastic boltată, conexiune 38 mm (1-1/2\")" },
      { code: "P800", description: "Pompă plastic boltată, conexiune 51 mm (2\")" },
      { code: "P1500", description: "Pompă plastic boltată, conexiune 76 mm (3\")" },
      { code: "P220/P230", description: "Pompă metal boltată, conexiune 25 mm (1\")" },
      { code: "P420/P430", description: "Pompă metal boltată, conexiune 38 mm (1-1/2\")" },
      { code: "P820/P830", description: "Pompă metal boltată, conexiune 51 mm (2\")" },
      { code: "T4", description: "Pompă Turbo-Flo metal clampat, conexiune 38 mm, seria Specialty" }
    ],
    faq: [
      { q: "Ce produce Wilden?", a: "Wilden produce pompe cu membrană operate pneumatic (AODD), fără etanșare dinamică, în seria de bază Pro-Flo, versiunea avansată Pro-Flo SHIFT și game specializate pentru industria alimentară, farmaceutică sau aplicații de înaltă presiune." },
      { q: "Ce diferență e între Pro-Flo și Pro-Flo SHIFT la Wilden?", a: "Pro-Flo SHIFT folosește un sistem de distribuție a aerului mai eficient, care aduce, conform producătorului, până la 60% economie de aer comprimat și până la 34% debit suplimentar față de seria Pro-Flo standard, la aceeași dimensiune de pompă." },
      { q: "Cum aleg dimensiunea potrivită dintr-o pompă Wilden?", a: "Dimensiunea se alege după debitul necesar și diametrul conexiunii din instalație: seria Pro-Flo acoperă de la 6 mm (P.025) până la 76 mm (P1500), iar alegerea materialului (metal sau plastic) depinde de compatibilitatea chimică a lichidului." },
      { q: "Livrați pompe Wilden în România și cât durează?", a: "Da, aducem pompe Wilden la comandă prin canale de aprovizionare din UE și SUA; termenul orientativ este de 2-6 săptămâni, în funcție de configurația confirmată cu rețeaua de distribuție a producătorului." }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Wilden – PSG Brands", url: "https://www.psgdover.com/wilden", publisher: "PSG, a Dover Company", accessed: "2026-09-22" },
      { title: "13 mm (1/2 in.) Pro-Flo Clamped Metal AODD Pump (P1)", url: "https://www.psgdover.com/wilden/products/pro-flo-series/clamped-metal/13-mm-(1-2-)-pro-flo-clamped-metal-pump-(p1)", publisher: "PSG, a Dover Company", accessed: "2026-09-22" }
    ],
  },

  sandpiper: {
    name: "Sandpiper",
    headquarters: "Mansfield, Ohio, SUA",
    overview: `Sandpiper este brandul american de pompe AODD (cu membrană operată pneumatic) al Warren Rupp, Inc., companie deținută de grupul industrial IDEX, cu peste 60 de ani de activitate în transferul de lichide industriale. Gama standard acoperă modele de la S05 (1/2") până la S30 (3"), completată de linii Heavy-Duty Ball și Heavy-Duty Flap pentru fluide vâscoase sau suspensii abrazive, plus modele specializate FDA/sanitare, pentru medii periculoase (Containment Duty) și cu acționare pe gaz (GODD). Pentru piața din România, Sandpiper e o alternativă directă la Wilden pe segmentul pompelor AODD industriale.

Ce diferențiază gama Sandpiper e diversitatea de tipuri de supapă pe aceeași platformă de pompă: supape cu bilă pentru fluide standard, supape cu clapetă (flap) pentru suspensii abrazive, și modele Cognito din seria EODD (electric operated double diaphragm) cu motor electric în locul aerului comprimat, pentru eficiență energetică mai mare — disponibile în variante metalice și nemetalice, de la 1" la 4". Modelul de referință pentru sarcini grele, SPB20, oferă până la 208 gpm în variantă metalică. Gama completează segmentul acoperit de Wilden și Yamada în pompele AODD.

Pentru un cumpărător din România, Sandpiper are sens unde trebuie aleasă geometria supapei potrivită conținutului solid al lichidului — nămoluri, vopsele, adezivi sau chimicale cu particule — și unde certificarea CSA contează pentru proiecte industriale.`,
    whyChoose: [
      "Gamă completă de tipuri de supapă (bilă, clapetă, poppet) pe aceeași platformă, aleasă după conținutul de solide al lichidului",
      "Model Heavy-Duty dedicat suspensiilor abrazive — seria HDF/SPB, cu debite de până la 310 gpm",
      "Serie electrică Cognito (EODD) pentru eficiență energetică superioară față de acționarea pneumatică clasică",
      "Pompe certificate CSA și cu declarații de conformitate la export pentru proiecte industriale reglementate",
      "Game specializate FDA/sanitare, de înaltă presiune, submersibile și pentru medii periculoase (Containment Duty)"
    ],
    keyProducts: [
      { name: "Standard Duty Seria S (S05-S30)", description: "Familia de bază Sandpiper cu supapă tip bilă, de la S05 (1/2\", 0-15 gpm) până la S30 (3\", 0-285 gpm în variantă metalică), disponibilă în variante metalice și nemetalice. Recomandată pentru lichide ușoare, cu conținut redus de solide, ca soluție standard de transfer industrial fără cerințe speciale de material sau supapă." },
      { name: "Heavy-Duty Ball (HDB/SB)", description: "Serie pentru fluide vâscoase și dense, cu supapă cu bilă întărită, de la SB1/SB25 (1\", 0-42 gpm) până la HDB3/HDB4 (3\"-4\", 0-300 gpm). Concepută pentru cicluri de lucru intense, unde uzura supapei standard ar fi prea rapidă la vâscozitate mare sau presiune de linie ridicată." },
      { name: "Heavy-Duty Flap (HDF/SPB)", description: "Serie cu supapă tip clapetă, potrivită pentru suspensii abrazive și nămoluri cu particule solide mari, de la HDF1/HDF25 (1\", 0-70 gpm) la HDF3/HDF4 (3\", 0-310 gpm), cu modelul de referință SPB20 (2\", până la 208 gpm în variantă metalică). Geometria clapetei reduce blocarea pe particule solide față de o supapă cu bilă clasică." },
      { name: "EODD Seria Cognito", description: "Pompă cu membrană dublă acționată electric, nu pneumatic, disponibilă în dimensiuni de la 1\" la 4\", în variante metalice și nemetalice. Elimină nevoia de compresor de aer în instalație și reduce costul energetic per litru transferat față de o pompă AODD clasică, păstrând principiul fără etanșare dinamică al membranei duble." }
    ],
    industries: [
      "Minerit — transfer de suspensii abrazive și nămoluri de proces",
      "Chimie și tratarea apelor — pompare fluide corozive și nămol de epurare",
      "Automotive și baterii litiu — manipulare fluide de proces industrial",
      "Petrol și gaze — transfer produse petroliere și fluide de foraj",
      "Industria alimentară — procesare carne și produse cu variante sanitare dedicate",
      "Ambalaje și vopsele/acoperiri — transfer produse vâscoase cu solide"
    ],
    infinitrade: `Aducem pompe Sandpiper din seriile Standard Duty, Heavy-Duty Ball/Flap și Cognito (EODD) prin canale de aprovizionare din UE și SUA, la comandă. Pentru acest brand ne bazăm pe surse publice ale producătorului — fără date proprii de stoc — și verificăm fiecare configurație (tip supapă, material, dimensiune) direct cu rețeaua Warren Rupp/IDEX înainte de a confirma oferta. Termenul orientativ este de 2-6 săptămâni de la comandă. Pentru o ofertă corectă avem nevoie de: lichidul pompat, conținutul de solide (dacă există), dimensiunea conexiunii și dacă aplicația necesită certificare CSA sau variantă sanitară. Nu promitem disponibilitate din depozit pe variantele metalice speciale sau pe seria Cognito.`,
    limitation: "Nu putem confirma disponibilitatea imediată sau termenul exact pentru variantele metalice speciale (Hastelloy, titan) fără verificare directă cu rețeaua de distribuție Warren Rupp/IDEX.",
    productCodes: [
      { code: "S05", description: "Pompă standard, conexiune 1/2\", debit 0-15 gpm" },
      { code: "S1F", description: "Pompă standard, conexiune 1\", debit până la 53 gpm" },
      { code: "S15", description: "Pompă standard, conexiune 1-1/2\", debit 0-100 gpm" },
      { code: "S20", description: "Pompă standard, conexiune 2\", debit până la 200 gpm" },
      { code: "S30", description: "Pompă standard, conexiune 3\", debit până la 285 gpm" },
      { code: "HDB3", description: "Pompă Heavy-Duty Ball, conexiune 3\", debit 0-300 gpm" },
      { code: "HDB4", description: "Pompă Heavy-Duty Ball, conexiune 4\", debit 0-300 gpm" },
      { code: "HDF3/HDF4", description: "Pompă Heavy-Duty Flap, conexiune 3\", debit până la 310 gpm" },
      { code: "SPB20", description: "Pompă flap de referință, conexiune 2\", până la 208 gpm" },
      { code: "SPB30/SPB40", description: "Pompă flap, conexiuni 3\"/4\", debit până la 303 gpm" },
      { code: "F20", description: "Pompă sanitară/FDA, conexiune 2\"" },
      { code: "G20", description: "Pompă acționată pe gaz (GODD), conexiune 2\"" },
      { code: "HP20", description: "Pompă de înaltă presiune, conexiune 2\"" },
      { code: "SMA3", description: "Pompă submersibilă SludgeMaster, conexiune 3\"" },
      { code: "Cognito", description: "Pompă EODD acționată electric, dimensiuni 1\"-4\"" }
    ],
    faq: [
      { q: "Ce produce Sandpiper?", a: "Sandpiper (Warren Rupp, parte din IDEX) produce pompe AODD cu membrană dublă operată pneumatic, cu variante de supapă tip bilă, clapetă și poppet, plus seria electrică Cognito (EODD), pentru transfer de lichide de la apoase la suspensii abrazive." },
      { q: "Ce diferență e între HDB și HDF la Sandpiper?", a: "HDB folosește supapă cu bilă și e recomandată pentru fluide vâscoase și dense, în timp ce HDF folosește supapă cu clapetă, mai potrivită pentru suspensii abrazive și nămoluri cu particule solide mari, unde o bilă clasică s-ar bloca mai ușor." },
      { q: "Ce este seria Cognito de la Sandpiper?", a: "Cognito e seria EODD (electric operated double diaphragm) a Sandpiper — o pompă cu membrană dublă acționată electric, nu pneumatic, disponibilă în dimensiuni de 1\" până la 4\", care elimină nevoia de compresor de aer din instalație." },
      { q: "Livrați pompe Sandpiper în România și cât durează?", a: "Da, aducem pompe Sandpiper la comandă prin canale de aprovizionare din UE și SUA, cu un termen orientativ de 2-6 săptămâni, în funcție de configurația exactă confirmată cu producătorul." }
    ],
    evidenceClass: "history-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SANDPIPER Pump Company", url: "https://www.sandpiperpump.com/", publisher: "Warren Rupp, Inc. (IDEX Corporation)", accessed: "2026-09-22" },
      { title: "SANDPIPER Pumps – Product Overview", url: "https://www.sandpiperpump.com/pumps/", publisher: "Warren Rupp, Inc. (IDEX Corporation)", accessed: "2026-09-22" }
    ],
  },

  yamada: {
    name: "Yamada",
    founded: 1905,
    headquarters: "Arlington Heights, Illinois, SUA",
    overview: `Yamada este un producător cu rădăcini japoneze, activ din 1905, cunoscut pentru pompele pneumatice cu membrană (AODD) din seria NDP, cu operațiuni nord-americane la Arlington Heights, Illinois. Gama de bază acoperă de la NDP-5 (port de 0,25", 3,4 gpm) până la NDP-80/800 (port de 3", 305 gpm), completată de seria de înaltă puritate DP-F (DP-5F până la DP-38F) pentru aplicații unde contaminarea trebuie evitată strict. Pentru piața din România, Yamada e o alternativă la Wilden și Sandpiper pe segmentul pompelor AODD, cu accent pe puritate și certificări.

Ce diferențiază seria DP-F e electro-polizarea și designul dedicat industriilor cu cerințe FDA, farmaceutice sau electronice, unde reziduurile de suprafață pot compromite produsul final. Gama standard NDP oferă și variante SolidPRO pentru solide, pompe de înaltă presiune și modele certificate UL/CSA pentru piața nord-americană, cu certificare ISO 9001 la nivel de companie. În aceeași categorie de pompe AODD japoneze/americane, Yamada concurează cu Wilden și Sandpiper, ambele acoperind game de dimensiuni similare.

Pentru un cumpărător din România, Yamada are sens acolo unde puritatea lichidului transferat contează la fel de mult ca debitul — industrie farmaceutică, electronică, cosmetică sau alimentară — și acolo unde certificările UL/CSA sunt cerute explicit de proiect.`,
    whyChoose: [
      "Gamă largă de dimensiuni NDP — de la port 0,25\" (3,4 gpm) la port 3\" (305 gpm) — pe același principiu constructiv AODD",
      "Serie dedicată de înaltă puritate DP-F, electro-polizată, pentru aplicații farmaceutice, electronice și alimentare",
      "Certificări recunoscute — ISO 9001 la nivel de companie, plus modele UL Listed și CSA Certified",
      "Variante specializate SolidPRO pentru lichide cu solide și modele de înaltă presiune în aceeași familie NDP",
      "Peste un secol de activitate în fabricația de pompe, cu prezență directă pe piața nord-americană"
    ],
    keyProducts: [
      { name: "Seria NDP-15/NDP-20/NDP-25", description: "Segmentul mediu al gamei NDP, cu port de fluid de la 0,5\" (NDP-15, 13,5 gpm) la 1\" (NDP-25, până la 46,2 gpm). Reprezintă dimensiunile cele mai des solicitate pentru transfer industrial general — vopsele, adezivi, produse chimice de proces — unde debitul mediu și portabilitatea contează mai mult decât capacitatea maximă." },
      { name: "Seria NDP-40/NDP-50/NDP-80", description: "Segmentul de debit mare al gamei, cu port de fluid de la 1,5\" (NDP-40, 107 gpm) la 3\" (NDP-80/800, 305 gpm). Recomandată pentru transfer de volum ridicat în instalații industriale sau stații de tratare, unde o singură pompă trebuie să acopere un debit pe care variantele mici NDP nu îl pot atinge." },
      { name: "Seria De Înaltă Puritate DP-F", description: "Familie de pompe electro-polizate pentru aplicații unde contaminarea de suprafață trebuie evitată strict, de la DP-5F la DP-38F, plus variante speciale precum DP-C25F. Utilizate în farmaceutică, electronică sau cosmetică, acolo unde o pompă AODD standard nu îndeplinește cerințele de curățenie ale procesului." },
      { name: "Modele Specializate SolidPRO și Înaltă Presiune", description: "Variante ale gamei NDP adaptate pentru lichide cu conținut de solide (SolidPRO) sau pentru aplicații care necesită presiune de refulare mai mare decât standardul AODD. Completează portofoliul acolo unde nici seria de bază, nici seria de înaltă puritate nu acoperă cerința specifică a procesului." }
    ],
    industries: [
      "Farmaceutică și cosmetică — transfer de produse cu cerințe stricte de puritate, seria DP-F",
      "Electronică — manipulare fluide de proces fără contaminare de suprafață",
      "Energie alternativă și baterii — inclusiv aplicații pentru litiu și EV",
      "Chimie și vopsele/acoperiri — transfer industrial general cu seria NDP",
      "Alimentar și bere/vin — pompe cu certificare FDA din gama standard",
      "Petrol și gaze, minerit — variante de proces industrial general"
    ],
    certifications: [
      "ISO 9001 — sistem de management al calității la nivel de companie",
      "UL Listed / CSA Certified — pentru modele destinate pieței nord-americane",
      "FDA — pentru variantele dedicate industriei alimentare"
    ],
    infinitrade: `Aducem pompe Yamada din seria NDP și seria de înaltă puritate DP-F prin canale de aprovizionare din UE și SUA, la comandă. Pentru acest brand lucrăm din surse publice ale producătorului, fără date proprii de stoc, și confirmăm fiecare configurație (dimensiune port, material, certificare) cu rețeaua de distribuție Yamada înainte de ofertă. Livrarea efectivă durează, orientativ, 2-6 săptămâni din momentul confirmării comenzii. Pentru o ofertă corectă precizați lichidul pompat, dimensiunea portului dorită, dacă e nevoie de certificare UL/CSA sau FDA și dacă aplicația impune electro-polizare (seria DP-F). Nu promitem disponibilitate din depozit pe variantele de înaltă puritate.`,
    limitation: "Nu putem confirma disponibilitatea imediată a variantelor DP-F electro-polizate sau a certificărilor specifice de proiect fără verificare directă cu rețeaua de distribuție Yamada.",
    productCodes: [
      { code: "NDP-5", description: "Pompă AODD, port 0,25\", debit 3,4 gpm" },
      { code: "NDP-15", description: "Pompă AODD, port 0,5\", debit 13,5 gpm" },
      { code: "NDP-20", description: "Pompă AODD, port 0,75\", debit 31,7 gpm" },
      { code: "NDP-25", description: "Pompă AODD, port 1\", debit până la 46,2 gpm" },
      { code: "NDP-32", description: "Pompă AODD, port 1,5\"/1,25\", debit 50,2 gpm" },
      { code: "NDP-40", description: "Pompă AODD, port 1,5\", debit 107 gpm" },
      { code: "NDP-50/500/G50", description: "Pompă AODD, port 2\", debit 164-193 gpm" },
      { code: "NDP-80/800", description: "Pompă AODD, port 3\", debit 305 gpm" },
      { code: "DP-5F", description: "Pompă de înaltă puritate, electro-polizată" },
      { code: "DP-10F", description: "Pompă de înaltă puritate, dimensiune medie-mică" },
      { code: "DP-20F", description: "Pompă de înaltă puritate, dimensiune medie" },
      { code: "DP-25F", description: "Pompă de înaltă puritate, dimensiune medie-mare" },
      { code: "DP-38F", description: "Pompă de înaltă puritate, cea mai amplă din seria F" },
      { code: "DP-C25F", description: "Variantă specială a seriei de înaltă puritate" }
    ],
    faq: [
      { q: "Ce produce Yamada?", a: "Yamada produce pompe pneumatice cu membrană (AODD) din seria NDP, în dimensiuni de la port 0,25\" la 3\", plus o serie dedicată de înaltă puritate (DP-F), electro-polizată, pentru aplicații farmaceutice, electronice și alimentare." },
      { q: "Cum aleg dimensiunea potrivită dintr-o pompă Yamada?", a: "Dimensiunea se alege după debitul necesar și diametrul conexiunii disponibile: gama NDP acoperă de la 3,4 gpm (NDP-5) la 305 gpm (NDP-80), iar pentru cerințe de puritate strictă se alege seria DP-F în locul seriei standard." },
      { q: "Ce certificări are gama Yamada?", a: "Compania are certificare ISO 9001 la nivel general, iar modelele destinate pieței nord-americane pot fi UL Listed sau CSA Certified; variantele pentru alimentar au și certificare FDA." },
      { q: "Livrați pompe Yamada în România și cât durează?", a: "Da, aducem pompe Yamada la comandă prin canale de aprovizionare din UE și SUA, cu un termen orientativ de 2-6 săptămâni, în funcție de configurația confirmată cu producătorul." }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Yamada Pump – Home", url: "https://www.yamadapump.com/", publisher: "Yamada Corporation", accessed: "2026-09-22" },
      { title: "Yamada Pump – Products", url: "https://www.yamadapump.com/products", publisher: "Yamada Corporation", accessed: "2026-09-22" }
    ],
  },

  kamat: {
    name: "Kamat",
    founded: 1974,
    headquarters: "Witten, Germania",
    overview: `Kamat este un producător german specializat exclusiv în pompe triplex și quintuplex cu piston pentru înaltă presiune, cu sediul la Witten și activitate din 1974. Gama acoperă de la modelul compact K100-3 (2000 bar, 6,8 l/min) până la treapta cea mai amplă din portofoliu, K300000-5G (1000 bar, peste 10.500 l/min), cu trepte intermediare precum K8000-3G, K18000-3G sau K45000-3G. Pentru piața din România, Kamat înseamnă acces la pompe de proces la presiuni pe care o pompă centrifugală sau cu șurub nu le poate atinge.

Ce diferențiază gama Kamat e amploarea plajei de presiune și putere: modelele triplex (3 pistoane) acoperă până la circa 3500 bar, iar cele quintuplex (5 pistoane) merg până la debite de peste 10.000 l/min la presiuni mai moderate, cu putere instalată de la 15 până la 3000 kW pe întreaga gamă. Certificarea ISO 9001:2015 acoperă managementul calității în fabricație. Pe segmentul pompelor de înaltă presiune, Kamat concurează cu producători precum Uraca sau Hammelmann, ambii germani, pe aplicații similare de curățare industrială și testare hidrostatică.

Pentru un cumpărător din România, Kamat are sens la aplicații de curățare industrială cu jet de apă la presiune foarte mare, testare hidrostatică a conductelor și recipientelor sub presiune, sau injecție de fluide în procese chimice și miniere unde presiunea de lucru depășește ce poate oferi o pompă convențională.`,
    whyChoose: [
      "Plajă de presiune foarte largă — de la 1000 bar la peste 3500 bar, în funcție de model, pe design triplex sau quintuplex",
      "Putere instalată de la 15 la 3000 kW pe întreaga gamă, pentru aplicații de la mici la industriale mari",
      "Certificare ISO 9001:2015 pentru managementul calității în fabricație",
      "Specializare exclusivă pe pompe de înaltă presiune — inginerie dedicată, nu o linie secundară de produs",
      "Acoperire de industrii diverse — construcții, chimie, minerit, energie, petrol și gaze, curățare industrială"
    ],
    keyProducts: [
      { name: "Seria K100-3/K4500-3 (Triplex Compact)", description: "Pompe triplex de dimensiuni mai mici din gama Kamat, de la K100-3 (2000 bar, 6,8 l/min) la K4500-3 (2125 bar, 232 l/min). Recomandate pentru aplicații de laborator, testare sau instalații mobile unde spațiul și puterea instalată disponibilă sunt limitate, dar presiunea de lucru trebuie să rămână foarte ridicată." },
      { name: "Seria K8000-3G/K18000-3G (Triplex Industrial)", description: "Segmentul industrial al gamei triplex, cu debite de la 283 l/min (K8000-3G, 2950 bar) până la 522 l/min (K18000-3G, 3500 bar). Utilizate în curățare industrială la presiune foarte mare și în aplicații de proces din chimie sau petrol și gaze, unde debitul mediu trebuie combinat cu presiune de vârf." },
      { name: "Seria K25000-3G/K45000-3G (Triplex Mare)", description: "Vârful gamei triplex, cu debite de 1148 l/min (K25000-3G) și 1310 l/min (K45000-3G), ambele la presiuni de până la 3500 bar. Recomandate pentru injecție de fluide la scară mare sau curățare industrială intensivă pe instalații mari, unde debitul devine la fel de important ca presiunea." },
      { name: "Seria K55000-5G/K100000-5G/K300000-5G (Quintuplex)", description: "Gama quintuplex, cu 5 pistoane, orientată spre debite foarte mari: de la 1913 l/min (K55000-5G, 3500 bar) până la 10.529 l/min (K300000-5G, 1000 bar). Design ales acolo unde volumul de fluid transferat pe unitatea de timp contează mai mult decât presiunea maximă absolută." }
    ],
    industries: [
      "Construcții — curățare industrială și pregătire suprafețe la presiune înaltă",
      "Petrol și gaze — injecție de fluide de proces și testare a echipamentelor",
      "Minerit — aplicații de tăiere și curățare cu jet de apă la presiune mare",
      "Chimie și energie — pompare fluide de proces la presiuni ridicate",
      "Testare hidrostatică — verificarea rezistenței conductelor și recipientelor sub presiune",
      "Metalurgie și hârtie — aplicații industriale specifice cu cerințe de presiune ridicată"
    ],
    certifications: [
      "ISO 9001:2015 — sistem de management al calității"
    ],
    infinitrade: `Aducem pompe de înaltă presiune Kamat prin canale de aprovizionare din UE, la comandă, pentru proiecte de curățare industrială, testare hidrostatică sau injecție de fluide de proces. Pentru acest brand lucrăm din surse publice ale producătorului, fără date proprii de stoc — fiecare model din gama triplex sau quintuplex se configurează și se confirmă direct cu Kamat înainte de ofertă, în funcție de presiunea și debitul necesare aplicației. Ca termen orientativ, socotiți 2-6 săptămâni din momentul confirmării comenzii de către producător. Pentru o ofertă corectă avem nevoie de: fluidul pompat, presiunea de lucru necesară, debitul dorit și puterea de antrenare disponibilă. Nu promitem disponibilitate din depozit pentru niciun model din gamă.`,
    limitation: "Nu putem confirma termene de fabricație personalizate sau configurații speciale de antrenare pentru pompele Kamat fără o cerere tehnică transmisă direct producătorului.",
    productCodes: [
      { code: "K100-3", description: "Pompă triplex, 2000 bar, 6,8 l/min" },
      { code: "K4500-3", description: "Pompă triplex, 2125 bar, 232 l/min" },
      { code: "K8000-3G", description: "Pompă triplex, 2950 bar, 283 l/min" },
      { code: "K9000-3G", description: "Pompă triplex, 3140 bar, 283 l/min" },
      { code: "K11000-3G", description: "Pompă triplex, 2665 bar, 454 l/min" },
      { code: "K18000-3G", description: "Pompă triplex, 3500 bar, 522 l/min" },
      { code: "K25000-3G", description: "Pompă triplex, 3185 bar, 1148 l/min" },
      { code: "K45000-3G", description: "Pompă triplex, 3500 bar, 1310 l/min" },
      { code: "K55000-5G", description: "Pompă quintuplex, 3500 bar, 1913 l/min" },
      { code: "K100000-5G", description: "Pompă quintuplex, 3500 bar, 3482 l/min" },
      { code: "K300000-5G", description: "Pompă quintuplex, 1000 bar, 10.529 l/min" }
    ],
    faq: [
      { q: "Ce produce Kamat?", a: "Kamat produce exclusiv pompe triplex și quintuplex cu piston pentru înaltă presiune, cu modele de la 1000 bar la peste 3500 bar și debite de la câțiva litri pe minut până la peste 10.000 l/min, pentru aplicații industriale, curățare și testare hidrostatică." },
      { q: "Ce diferență e între seria triplex și quintuplex la Kamat?", a: "Seria triplex (3 pistoane) acoperă în general presiuni mai mari, până la circa 3500 bar, la debite moderate, în timp ce seria quintuplex (5 pistoane) e orientată spre debite foarte mari, până la peste 10.000 l/min, la presiuni relativ mai reduse." },
      { q: "Cum aleg modelul Kamat potrivit pentru aplicația mea?", a: "Alegerea se face pe baza combinației presiune-debit necesară procesului: pentru curățare la presiune foarte mare cu debit mic se aleg modele precum K100-3 sau K4500-3, iar pentru debite mari la presiune moderată se aleg modelele quintuplex din seria K55000-5G în sus." },
      { q: "Livrați pompe Kamat în România și cât durează?", a: "Da, aducem pompe Kamat la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, în funcție de modelul și configurația confirmate cu producătorul." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "KAMAT – High Pressure Solutions", url: "https://www.kamat.de/en/", publisher: "KAMAT GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "High-Pressure Pumps", url: "https://www.kamat.de/en/high-pressure-solutions/high-pressure-pumps/", publisher: "KAMAT GmbH & Co. KG", accessed: "2026-09-22" }
    ],
  },

  schwing: {
    name: "Schwing",
    overview: `Schwing este brandul german de pompe pentru beton, parte a grupului Schwing-Stetter, cu o gamă largă de pompe staționare (seria SP), pompe montate pe camion (seria TP) și pompe pe șenile (seria CP) pentru transferul betonului la distanțe și înălțimi mari pe șantier. Gama staționară acoperă de la modele mai mici precum SP 500 D/E până la vârful gamei SP 9500 D/E, cu variante D (diesel) și E (electric) pentru fiecare treaptă de putere. Pentru piața din România, Schwing înseamnă acces la echipamente de turnare beton pentru proiecte de construcții de anvergură.

Ce diferențiază gama Schwing e acoperirea completă a modurilor de montaj: pompe staționare pentru șantiere fixe sau tuneluri, pompe pe camion (TP) pentru mobilitate pe teren, inclusiv variantă cu duză pentru șpriț de beton torcretat (TP 100 TC D), și pompe pe șenile (CP) pentru teren dificil, inclusiv o variantă electrică (CP 2800 BE). Fiecare treaptă de debit are variantă diesel sau electrică, ceea ce permite alegerea sursei de energie potrivite pentru șantierul respectiv — un aspect tot mai relevant unde regulile de emisii pe șantier devin mai stricte.

Pentru un cumpărător din România, Schwing are sens la proiecte de infrastructură sau construcții civile unde betonul trebuie transportat la distanță mare sau înălțime, tuneluri unde manevrabilitatea pe șenile contează, sau șantiere urbane unde varianta electrică reduce emisiile și zgomotul.`,
    whyChoose: [
      "Trei moduri de montaj în aceeași gamă — staționar (SP), pe camion (TP), pe șenile (CP) — pentru orice tip de șantier",
      "Variante diesel și electrice pe majoritatea treptelor de putere, pentru alegerea sursei de energie potrivite",
      "Variantă dedicată de șpriț beton torcretat (TP 100 TC D), utilă pentru lucrări de tuneluri și stabilizare",
      "Gamă staționară cu trepte fine de putere, de la SP 500 la SP 9500, pentru dimensionare precisă a proiectului",
      "Pompe pe șenile pentru teren dificil, inclusiv variantă electrică CP 2800 BE cu emisii reduse pe șantier"
    ],
    keyProducts: [
      { name: "Pompe Staționare Seria SP (500-2800)", description: "Segmentul de putere medie al gamei staționare, cu modele precum SP 500 D/E, SP 750 E și SP 1800 D/E/SP 2800 D/E, fiecare disponibil în variantă diesel (D) sau electrică (E). Recomandate pentru șantiere de dimensiune medie sau tuneluri unde e nevoie de o pompă fixă, nu mobilă pe camion, pentru turnare continuă de beton." },
      { name: "Pompe Staționare Seria SP (3800-9500)", description: "Vârful gamei staționare, cu modelele SP 3800, SP 7000, SP 7500 și SP 9500, toate în variante D și E. Destinate proiectelor mari de infrastructură — baraje, poduri, fundații industriale — unde volumul de beton turnat pe oră depășește ce pot livra modelele din segmentul mediu." },
      { name: "Pompe Montate Pe Camion Seria TP", description: "Familie de pompe mobile pe șasiu de camion, cu modelul de bază TP 100 E/D și varianta specializată TP 100 TC D pentru șpriț de beton torcretat (shotcrete). Recomandate pentru șantiere unde pompa trebuie să se deplaseze frecvent între puncte de turnare diferite, fără instalare fixă." },
      { name: "Pompe Pe Șenile Seria CP", description: "Familie de pompe montate pe șenile pentru teren dificil sau spații înguste, cu modelele CP 1800 D, CP 2800 D și varianta electrică CP 2800 BE. Utile în tuneluri, mine sau zone unde un camion nu poate accesa punctul de turnare, dar mobilitatea pe teren accidentat rămâne necesară." }
    ],
    industries: [
      "Construcții civile — turnare beton la fundații, plăci și structuri",
      "Infrastructură — poduri, baraje, tuneluri unde distanța de pompare e mare",
      "Construcții subterane — pompe pe șenile pentru acces în tuneluri și mine",
      "Șantiere urbane — variante electrice pentru emisii și zgomot reduse"
    ],
    infinitrade: `Aducem pompe de beton Schwing din seriile SP, TP și CP prin canale de aprovizionare din UE, la comandă, pentru proiecte de construcții și infrastructură. Pentru acest brand ne bazăm pe surse publice ale producătorului, fără date proprii de stoc — configurația exactă (mod de montaj, variantă diesel sau electrică, treaptă de putere) se stabilește împreună cu dumneavoastră și se confirmă cu producătorul înainte de ofertă. Termenul orientativ este de 2-6 săptămâni de la comanda confirmată, echipamentele de acest tip fiind în general configurate la cerere. Pentru o ofertă corectă avem nevoie de: distanța și înălțimea de pompare necesare, volumul orar dorit, tipul de șantier și dacă e preferată o sursă electrică sau diesel.`,
    limitation: "Nu putem confirma termenele de fabricație pentru configurații personalizate sau disponibilitatea pieselor de schimb pentru modele mai vechi fără verificare directă cu producătorul.",
    productCodes: [
      { code: "SP 500 D", description: "Pompă staționară beton, variantă diesel" },
      { code: "SP 500 E", description: "Pompă staționară beton, variantă electrică" },
      { code: "SP 750 E", description: "Pompă staționară beton, treaptă medie, electrică" },
      { code: "SP 1800 D", description: "Pompă staționară beton, variantă diesel" },
      { code: "SP 1800 E", description: "Pompă staționară beton, variantă electrică" },
      { code: "SP 2800 D", description: "Pompă staționară beton, treaptă mare, diesel" },
      { code: "SP 3800 D", description: "Pompă staționară beton, treaptă mare, diesel" },
      { code: "SP 7000 D", description: "Pompă staționară beton, vârf de gamă, diesel" },
      { code: "SP 7500 D", description: "Pompă staționară beton, vârf de gamă, diesel" },
      { code: "SP 9000 D", description: "Pompă staționară beton, treaptă superioară, diesel" },
      { code: "SP 9500 D", description: "Pompă staționară beton, treaptă superioară, diesel" },
      { code: "TP 100 E", description: "Pompă montată pe camion, variantă electrică" },
      { code: "TP 100 D", description: "Pompă montată pe camion, variantă diesel" },
      { code: "TP 100 TC D", description: "Pompă pe camion pentru șpriț beton torcretat" },
      { code: "CP 1800 D", description: "Pompă pe șenile, teren dificil, diesel" },
      { code: "CP 2800 D", description: "Pompă pe șenile, treaptă mare, diesel" },
      { code: "CP 2800 BE", description: "Pompă pe șenile, variantă electrică cu baterie" }
    ],
    faq: [
      { q: "Ce produce Schwing?", a: "Schwing produce pompe pentru beton în trei moduri de montaj — staționar (seria SP), pe camion (seria TP) și pe șenile (seria CP) — cu variante diesel și electrice pe majoritatea treptelor de putere, pentru turnare de beton pe șantiere de construcții și infrastructură." },
      { q: "Ce diferență e între seriile SP, TP și CP la Schwing?", a: "SP sunt pompe staționare pentru instalare fixă pe șantier, TP sunt montate pe șasiu de camion pentru mobilitate rapidă între puncte de turnare, iar CP sunt montate pe șenile, pentru teren dificil sau spații înguste precum tunelurile." },
      { q: "Ce este modelul TP 100 TC D de la Schwing?", a: "TP 100 TC D este varianta de pe camion a pompei TP 100, echipată special pentru șpriț de beton torcretat (shotcrete), folosită la stabilizarea pereților de tunel sau la reparații de suprafață unde betonul se aplică prin pulverizare." },
      { q: "Livrați pompe Schwing în România și cât durează?", a: "Da, aducem pompe Schwing la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, echipamentul fiind configurat de la producător după parametrii proiectului dumneavoastră." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SCHWING-Stetter – Stationary Concrete Pumps", url: "https://schwing-stetter.com/de_en/products/stationary-concrete-pumps/sp-500-d.html", publisher: "SCHWING-Stetter", accessed: "2026-09-22" },
      { title: "SCHWING Truck-Mounted Concrete Pumps", url: "https://schwing-stetter.com/de_en/products/truck-mounted-concrete-pumps.html", publisher: "SCHWING-Stetter", accessed: "2026-09-22" }
    ],
  },

  viking: {
    name: "Viking Pump",
    founded: 1911,
    overview: `Viking Pump este un producător american de pompe rotative volumetrice, activ din 1911, cu o gamă foarte extinsă de pompe cu roți dințate interne și externe, folosite pentru transferul a peste 1.400 de lichide diferite conform producătorului, de la combustibili la produse alimentare. Portofoliul acoperă serii pentru fontă, oțel și inox, de la modele mici precum SG-04 (0,5 gpm) la modele mari cum e GB-425 pentru debite foarte ridicate, plus serii dedicate industriei alimentare și farmaceutice (Hygienic). Pentru piața din România, Viking Pump înseamnă acces la o tehnologie matură de pompare rotativă, cu peste un secol de rafinare a designului.

Ce diferențiază Viking Pump e diversitatea extremă a gamei: zeci de serii diferite, fiecare optimizată pentru un domeniu de debit, material de carcasă sau tip de aplicație, de la seria 4124C (până la 500 gpm, fontă) la seria REVOLUTION (până la 400 gpm, inox, pentru aplicații igienice) sau seria GB-410/414/425 (fontă nodulară, până la debite foarte mari, exprimate uneori în barrels per day pentru aplicații petroliere). Compania face parte din grupul IDEX, alături de Warren Rupp (Sandpiper), ceea ce oferă acces la o rețea comună de distribuție și piese de schimb.

Pentru un cumpărător din România, Viking Pump are sens acolo unde debitul trebuie să rămână constant indiferent de variațiile de vâscozitate — transfer de combustibili, uleiuri, produse chimice sau alimentare — și unde o gamă foarte largă de materiale (fontă, oțel, inox, ductil) permite alegerea exactă pentru fluidul respectiv.`,
    whyChoose: [
      "Gamă extrem de largă — zeci de serii diferite, pentru aproape orice combinație de debit, material și aplicație",
      "Peste un secol de rafinare a designului cu roți dințate — pompare cu debit constant, indiferent de vâscozitate",
      "Serii dedicate industriei igienice (REVOLUTION®, STERILOBE®) pentru aplicații farmaceutice și alimentare",
      "Materiale multiple de carcasă — fontă, oțel, inox, fontă ductilă — pentru compatibilitate cu fluide diferite",
      "Parte din grupul IDEX, alături de Sandpiper — acces la o rețea comună de distribuție și suport tehnic"
    ],
    keyProducts: [
      { name: "Seria 4124A/4124C (Fontă, Uz General)", description: "Familie de pompe cu roți dințate interne din fontă, cu debite de până la 420-500 gpm în funcție de variantă. Reprezintă segmentul de uz general al gamei Viking Pump, folosit pe scară largă pentru transfer de combustibili, uleiuri și produse chimice de proces în instalații industriale standard." },
      { name: "Seria 1124A/1224A (Fontă, Compact)", description: "Variante mai compacte din familia de pompe cu roți dințate interne, cu debite de până la 400-500 gpm, disponibile și în variante speciale precum 1224A-CHC® (cu cameră de încălzire/răcire jacketed) pentru fluide care necesită control termic în timpul pompării." },
      { name: "Seria GB-410/414/425 (Fontă Ductilă, Debit Mare)", description: "Segmentul de debit foarte mare al gamei, din fontă ductilă, cu GB-410 (67 gpm) și GB-414 (136 gpm) pentru debite medii-mari, și GB-425 pentru cel mai ridicat debit din serie, exprimat de producător în barrels per day pentru aplicații tipice industriei petroliere de transfer în vrac." },
      { name: "Seria REVOLUTION® și STERILOBE® (Inox, Igienic)", description: "Familii dedicate aplicațiilor cu cerințe stricte de igienă, în inox, cu REVOLUTION® la debite de până la 400 gpm și STERILOBE® la până la 753 gpm. Recomandate pentru industria alimentară, a băuturilor sau farmaceutică, unde curățarea internă completă a pompei (CIP) e o cerință de proces." }
    ],
    industries: [
      "Petrol și gaze — transfer combustibili și produse petroliere cu seriile GB și 4124",
      "Alimentar și băuturi — serii igienice REVOLUTION® și STERILOBE® cu curățare CIP",
      "Farmaceutică și biotehnologie — pompare fluide de proces în condiții sterile",
      "Chimie — transfer de fluide vâscoase și corozive cu materiale de carcasă adaptate",
      "Militar și aerospațial — aplicații industriale specializate menționate de producător"
    ],
    infinitrade: `Aducem pompe Viking Pump din gama sa foarte extinsă de serii prin canale de aprovizionare din UE și SUA, la comandă. Pentru acest brand lucrăm din surse publice ale producătorului, fără date proprii de stoc — dată fiind diversitatea gamei, confirmăm seria și materialul exact direct cu rețeaua de distribuție Viking Pump/IDEX înainte de a emite oferta. Orientativ, livrarea durează 2-6 săptămâni de la confirmarea comenzii cu producătorul. Pentru o ofertă corectă avem nevoie de: lichidul pompat, debitul necesar, materialul de carcasă dorit (fontă, oțel, inox) și dacă aplicația impune cerințe igienice de tip CIP. Nu promitem disponibilitate din depozit pe nicio serie din gama Viking Pump.`,
    limitation: "Nu putem confirma echivalența exactă între o serie Viking Pump și un model concurent fără o cerere tehnică transmisă direct producătorului, dată fiind diversitatea foarte mare a gamei.",
    productCodes: [
      { code: "1124A Series", description: "Pompă roți dințate interne, fontă, până la 500 gpm" },
      { code: "1124C Series", description: "Pompă roți dințate interne, fontă, până la 400 gpm" },
      { code: "1224A-CHC", description: "Pompă cu cameră de încălzire/răcire jacketed" },
      { code: "124A Series", description: "Pompă roți dințate, fontă, până la 420 gpm" },
      { code: "124E Series", description: "Pompă roți dințate, fontă, până la 1600 gpm" },
      { code: "4124A Series", description: "Pompă roți dințate, fontă, până la 420 gpm" },
      { code: "4124C Series", description: "Pompă roți dințate, fontă, până la 500 gpm" },
      { code: "4127C Series", description: "Pompă roți dințate, inox, până la 320 gpm" },
      { code: "GB-410 Series", description: "Pompă debit mare, fontă ductilă, 67 gpm" },
      { code: "GB-414 Series", description: "Pompă debit mare, fontă ductilă, 136 gpm" },
      { code: "GB-425 Series", description: "Pompă debit foarte mare, fontă ductilă" },
      { code: "REVOLUTION Series", description: "Pompă igienică, inox, până la 400 gpm" },
      { code: "STERILOBE Series", description: "Pompă igienică, inox, până la 753 gpm" },
      { code: "RTPg Series", description: "Pompă tanc, fontă, până la 170 gpm" },
      { code: "CLASSIC+ Series", description: "Pompă inox, până la 832 gpm" },
      { code: "TRA 20 Series", description: "Pompă inox, până la 450 gpm" }
    ],
    faq: [
      { q: "Ce produce Viking Pump?", a: "Viking Pump produce pompe rotative volumetrice cu roți dințate, într-o gamă foarte extinsă de zeci de serii, în fontă, oțel sau inox, pentru transfer de combustibili, uleiuri, produse chimice și alimentare, cu debite de la sub 1 gpm până la peste 1000 gpm." },
      { q: "Cum aleg seria Viking Pump potrivită pentru aplicația mea?", a: "Alegerea depinde de debitul necesar, materialul compatibil cu fluidul (fontă, oțel, inox) și de cerințele de igienă ale aplicației — pentru alimentar sau farmaceutic se aleg seriile igienice REVOLUTION® sau STERILOBE®, pentru uz general seriile 4124 sau 1124." },
      { q: "Ce este seria GB-425 de la Viking Pump?", a: "GB-425 este o serie de pompe din fontă ductilă din segmentul de debit foarte mare al gamei Viking Pump, cu capacitate exprimată de producător în barrels per day, tipică aplicațiilor de transfer în vrac din industria petrolieră." },
      { q: "Livrați pompe Viking Pump în România și cât durează?", a: "Da, aducem pompe Viking Pump la comandă prin canale de aprovizionare din UE și SUA, cu un termen orientativ de 2-6 săptămâni, în funcție de seria și configurația confirmate cu producătorul." }
    ],
    evidenceClass: "transactional",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Viking Pump – Home", url: "https://www.vikingpump.com/", publisher: "Viking Pump, Inc. (IDEX Corporation)", accessed: "2026-09-22" },
      { title: "Browse Viking Pumps", url: "https://www.vikingpump.com/pumps", publisher: "Viking Pump, Inc. (IDEX Corporation)", accessed: "2026-09-22" }
    ],
  },

  maag: {
    name: "Maag",
    headquarters: "Elveția",
    overview: `Maag este un grup elvețian specializat în pompe cu roți dințate pentru transportul polimerilor topiți, cu operațiuni în peste 16 locații la nivel mondial, completat de sisteme de filtrare, granulare și măsurare pentru industria materialelor plastice. Gama de pompe acoperă aplicații distincte — de la producția de rășini virgine (seriile flexinox, dosix, refinex, cinox) la extrudare de termoplaste (seria extrex) și compoundare/reciclare (seriile polyrex, thermorex) — fiecare familie fiind optimizată pentru un punct diferit al procesului de producție a polimerilor. Pentru piața din România, Maag înseamnă acces la echipamente specializate pentru linii de extrudare și reciclare a plasticului.

Ce diferențiază gama Maag e specializarea foarte fină pe aplicație: familia extrex are variante GU (uz general), EP, SP, MP, ER și una dedicată exclusiv reciclării, în timp ce familia thermorex acoperă mai multe variante (TR/TB/TP/TO și TRO/TRP) pentru producția de rășini și compoundare. Alături de pompe, Maag oferă sisteme de filtrare a topiturii (Continuous Melt Filter BRF, Single Cartridge Filter SCF) și sisteme de granulare subacvatică (PEARLO) sau prin fir (EBG), ceea ce permite echiparea unei linii complete de la extrudare la peletizare dintr-o singură sursă.

Pentru un cumpărător din România, Maag are sens la linii de extrudare de plastic, compoundare de masterbatch sau instalații de reciclare mecanică, unde pompa cu roți dințate trebuie să mențină un debit constant al topiturii vâscoase, indiferent de variațiile de presiune din amonte.`,
    whyChoose: [
      "Familii de pompe specializate pe etapă de proces — producție rășină, extrudare, compoundare sau reciclare — nu o gamă generică",
      "Sisteme complete pentru linia de plastic — pompe cu roți dințate, filtrare a topiturii și granulare, din același grup",
      "Variante extrex multiple (GU, EP, SP, MP, ER, Recycling) pentru cerințe diferite de extrudare a termoplastelor",
      "Prezență în peste 16 locații la nivel mondial, pentru suport tehnic și piese de schimb pe mai multe continente",
      "Aplicabilitate în polimeri, chimie, petrochimie, farmaceutic și alimentar, conform descrierii producătorului"
    ],
    keyProducts: [
      { name: "Pompe Extrex⁶ (Extrudare Termoplaste)", description: "Familie de pompe cu roți dințate pentru extrudarea termoplastelor, cu variante GU (uz general, folosită și în masterbatch, compoundare și reciclare), EP, SP, MP și ER, plus o variantă dedicată exclusiv liniilor de reciclare. Recomandată acolo unde topitura de plastic trebuie transportată la presiune constantă către matriță sau granulator, indiferent de fluctuațiile din amonte." },
      { name: "Pompe Cinox/Therminox (Producție Rășină și Adezivi)", description: "Familie de pompe pentru producția de rășini virgine și adezivi hot-melt, disponibilă în variantele cinox/therminox și cinox-V/therminox-V. Folosită în etapele de proces unde temperatura topiturii trebuie menținută constantă pe durata transportului, tipic pentru rășini termosensibile sau adezivi aplicați la cald." },
      { name: "Sisteme De Filtrare BRF și SCF", description: "Sisteme de filtrare continuă a topiturii — Continuous Melt Filter (BRF) pentru filtrare fără oprirea liniei și Single Cartridge Filter (SCF) pentru aplicații cu volum mai mic de contaminanți. Completează linia de extrudare acolo unde topitura de plastic reciclat sau virgin conține impurități care ar deteriora matrița sau ar afecta calitatea produsului final." },
      { name: "Sisteme De Granulare PEARLO și EBG", description: "Sisteme de granulare subacvatică (PEARLO 350, PEARLO CS, M²-USG) pentru producție de peleți uniformi direct la ieșirea din extruder, și sistem de granulare prin fir (EBG 200) pentru aplicații unde răcirea în bandă e preferată variantei subacvatice. Alegerea între cele două depinde de tipul de material și de forma dorită a granulei finale." }
    ],
    industries: [
      "Producție de polimeri și rășini — pompare topitură la presiune constantă",
      "Compoundare și masterbatch — transport topitură pentru amestecuri colorate sau aditivate",
      "Reciclare mecanică de plastic — pompe și filtre dedicate materialului reciclat",
      "Chimie și petrochimie — procese de extrudare specifice industriei",
      "Farmaceutic și alimentar — aplicații de extrudare cu cerințe speciale de proces"
    ],
    infinitrade: `Furnizăm pompe cu roți dințate Maag și sistemele conexe de filtrare sau granulare prin canale de aprovizionare din UE, la comandă. Pentru acest brand ne bazăm pe surse publice ale producătorului — fără date proprii de stoc — și confirmăm familia exactă (extrex, cinox, thermorex etc.) și configurația tehnică direct cu Maag înainte de a emite oferta, dată fiind specializarea foarte fină a fiecărei serii. Orientativ, așteptați 2-6 săptămâni de la confirmarea comenzii pentru livrare. Pentru o ofertă corectă avem nevoie de: materialul procesat, etapa de proces (extrudare, compoundare, reciclare), debitul de topitură necesar și dacă e nevoie și de sistem de filtrare sau granulare. Nu promitem disponibilitate din depozit pentru niciun echipament din gamă.`,
    limitation: "Nu putem confirma parametrii tehnici de presiune și temperatură pentru fiecare variantă extrex/cinox fără o cerere tehnică transmisă direct producătorului, aceștia nefiind publicați integral pe pagina generală de produse.",
    productCodes: [
      { code: "extrex GU", description: "Pompă roți dințate, uz general, extrudare/compoundare/reciclare" },
      { code: "extrex EP", description: "Pompă roți dințate pentru extrudare termoplaste" },
      { code: "extrex SP", description: "Pompă roți dințate pentru extrudare termoplaste" },
      { code: "extrex MP", description: "Pompă roți dințate pentru extrudare termoplaste" },
      { code: "extrex ER", description: "Pompă roți dințate pentru extrudare termoplaste" },
      { code: "extrex Recycling", description: "Pompă roți dințate dedicată liniilor de reciclare" },
      { code: "extrex RV/RB", description: "Pompă roți dințate pentru aplicații de extrudare" },
      { code: "flexinox", description: "Pompă pentru producție de rășină și polimer virgin" },
      { code: "dosix", description: "Pompă de dozare pentru producție de rășină" },
      { code: "refinex refitherm", description: "Pompă pentru rafinare polimer, control termic" },
      { code: "cinox therminox", description: "Pompă pentru rășini și adezivi hot-melt" },
      { code: "cinox-V therminox-V", description: "Variantă a pompei cinox/therminox" },
      { code: "hydrolub", description: "Pompă pentru soluții industriale de pompare" },
      { code: "vacorex6 VX", description: "Pompă pentru producție de rășină virgină" },
      { code: "thermorex6 TR/TB/TP/TO", description: "Pompă pentru rășină, masterbatch, compoundare, reciclare" },
      { code: "polyrex6 PR", description: "Pompă pentru masterbatch și compoundare" },
      { code: "PEARLO 350", description: "Sistem de granulare subacvatică" },
      { code: "EBG 200", description: "Sistem de granulare prin fir (strand)" }
    ],
    faq: [
      { q: "Ce produce Maag?", a: "Maag produce pompe cu roți dințate pentru transportul polimerilor topiți, în familii specializate pe etapă de proces (producție rășină, extrudare, compoundare, reciclare), plus sisteme de filtrare a topiturii și de granulare pentru linii complete de plastic." },
      { q: "Cum aleg familia de pompe Maag potrivită pentru linia mea?", a: "Alegerea depinde de etapa procesului: pentru extrudare de termoplaste se folosește familia extrex (cu variante GU, EP, SP, MP, ER), pentru producție de rășină virgină familiile flexinox sau vacorex, iar pentru reciclare varianta dedicată extrex Recycling." },
      { q: "Ce sunt sistemele PEARLO și EBG de la Maag?", a: "PEARLO este sistemul de granulare subacvatică al Maag, care produce peleți uniformi direct la ieșirea din extruder, în timp ce EBG este sistemul de granulare prin fir (strand), cu răcire în bandă, pentru materiale unde varianta subacvatică nu e potrivită." },
      { q: "Livrați echipamente Maag în România și cât durează?", a: "Da, aducem pompe și sisteme conexe Maag la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, configurația exactă fiind stabilită împreună cu producătorul pentru linia dumneavoastră de proces." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "MAAG Group – Home", url: "https://www.maag.com/en/", publisher: "MAAG Group", accessed: "2026-09-22" },
      { title: "MAAG Group – Gear Pumps", url: "https://maag.com/categories/gear-pumps/", publisher: "MAAG Group", accessed: "2026-09-22" }
    ],
  },

  "imi-hydronic": {
    name: "IMI Hydronic",
    founded: 1897,
    headquarters: "Ljung, Suedia (rădăcini istorice)",
    overview: `IMI Hydronic Engineering este un grup cu rădăcini suedeze din 1897, cunoscut pentru sistemele de echilibrare hidraulică și control al debitului din instalațiile HVAC, sub brandurile IMI TA, IMI Pneumatex și IMI Flow Design. Gama IMI TA a introdus, conform producătorului, primul robinet de echilibrare manuală din lume în 1957 (seria STAD) și acoperă astăzi robineți de echilibrare clasici (STAD, STAF, STAF-SG) și robineți independenți de presiune (PICV) precum TA-Modulator și TA-COMPACT-P. Pentru piața din România, IMI Hydronic înseamnă acces la echipamente-cheie pentru echilibrarea corectă a instalațiilor de încălzire și răcire.

Ce diferențiază gama e combinația de robineți manuali de echilibrare, cu domeniu DN 20-400 și presiuni nominale PN 16/PN 25 pe seria STAF/STAF-SG, cu robineți independenți de presiune din familia PICV, care reglează automat debitul indiferent de variațiile de presiune din rețea — o tehnologie mai avansată decât echilibrarea manuală clasică. Brandul IMI Pneumatex completează portofoliul cu echipamente de presurizare și degazare (seria Statico, Compresso Connect), pentru controlul complet al circuitului hidraulic, nu doar al debitului.

Pentru un cumpărător din România, IMI Hydronic are sens la instalații de încălzire/răcire centralizate, clădiri de birouri sau ansambluri rezidențiale mari, unde echilibrarea hidraulică corectă între circuite reduce consumul de energie și elimină zonele supra- sau sub-alimentate cu agent termic.`,
    whyChoose: [
      "Companie cu peste 125 de ani de istorie în fitinguri și robineți pentru instalații de încălzire",
      "A introdus, conform producătorului, primul robinet de echilibrare manuală din lume, în 1957",
      "Gamă completă — robineți de echilibrare manuală (STAD/STAF) și independenți de presiune (PICV, TA-Modulator)",
      "Brand dedicat presurizării (IMI Pneumatex) pentru controlul complet al circuitului hidraulic, nu doar al debitului",
      "Domeniu larg DN 20-400 pe seria STAF/STAF-SG, cu presiuni nominale PN 16 și PN 25"
    ],
    keyProducts: [
      { name: "Robineți De Echilibrare STAD/STAF/STAF-SG", description: "Familie de robineți manuali de echilibrare hidraulică, cu STAF și STAF-SG acoperind un domeniu DN 20-400 la presiuni nominale PN 16 și PN 25, STAF fiind din fontă și STAF-SG din fontă nodulară. STAD este robinetul original al gamei, introdus în 1957 ca prim robinet de echilibrare manuală comercializat. Recomandați pentru echilibrarea circuitelor de încălzire/răcire unde debitul se reglează o singură dată, la punerea în funcțiune." },
      { name: "Robinet Independent De Presiune TA-Modulator", description: "Robinet PICV (pressure independent control valve) care combină funcția de echilibrare cu cea de control automat al debitului, indiferent de variațiile de presiune din rețea. Recomandat pentru instalații cu presiune variabilă, unde un robinet de echilibrare manual clasic ar necesita reechilibrare la fiecare modificare a sarcinii din sistem." },
      { name: "Robinet PIBCV TA-COMPACT-P", description: "Robinet de echilibrare și control independent de presiune (PIBCV), descris de producător ca având capacitate maximă de debit ajustabilă și funcție de prevenire a debitului excesiv (overflow). Disponibil și în variantă cu conexiuni NPT/SWT pentru instalații nord-americane. Compatibil cu instrumente de măsurare pentru diagnostic avansat al circuitului." },
      { name: "Sisteme De Presurizare Statico și Compresso Connect", description: "Echipamente ale brandului IMI Pneumatex pentru menținerea presiunii corecte în circuitul hidraulic — Statico ca sistem de vase de expansiune, Compresso Connect ca unitate de presurizare conectată. Completează robineții de echilibrare acolo unde presiunea de sistem trebuie controlată activ, nu doar debitul pe fiecare circuit." }
    ],
    industries: [
      "HVAC rezidențial și comercial — echilibrarea circuitelor de încălzire și răcire",
      "Clădiri de birouri și ansambluri mari — control al debitului pe circuite multiple",
      "Instalații industriale cu agent termic — presurizare și degazare a circuitului",
      "Retrofit de clădiri existente — înlocuirea echilibrării manuale cu soluții PICV"
    ],
    infinitrade: `Aducem robineți de echilibrare și control IMI (STAD, STAF, TA-Modulator, TA-COMPACT-P) prin canale de aprovizionare din UE, la comandă. Pentru acest brand lucrăm din surse publice ale producătorului — informațiile publice disponibile pe pagina oficială nu includ un catalog complet de coduri, așa că fiecare comandă se confirmă cu dimensiunea DN, presiunea nominală și tipul exact direct cu rețeaua de distribuție IMI. Orientativ, livrarea durează 2-6 săptămâni din momentul confirmării comenzii cu producătorul. Pentru o ofertă corectă avem nevoie de: dimensiunea DN necesară, presiunea nominală a instalației (PN 16 sau PN 25), dacă e nevoie de echilibrare manuală sau de control independent de presiune (PICV) și dacă instalația necesită și componente de presurizare. Nu promitem disponibilitate din depozit pe nicio gamă.`,
    limitation: "Nu putem confirma codurile complete de comandă sau disponibilitatea variantelor cu actuatoare electrice pentru gama TA fără verificare directă cu rețeaua de distribuție IMI Hydronic.",
    productCodes: [
      { code: "STAD", description: "Robinet de echilibrare manuală, primul din gamă, 1957" },
      { code: "STAF", description: "Robinet de echilibrare, fontă, DN 20-400, PN 16/25" },
      { code: "STAF-SG", description: "Robinet de echilibrare, fontă nodulară, DN 20-400" },
      { code: "TA-Smart", description: "Instrument de diagnosticare și echilibrare a circuitelor" },
      { code: "ICSS", description: "Regulator automat de debit pentru instalații HVAC" },
      { code: "TA-Modulator", description: "Robinet PICV independent de presiune" },
      { code: "TA-COMPACT-P", description: "Robinet PIBCV cu debit maxim ajustabil" },
      { code: "Statico", description: "Sistem de vase de expansiune, brand IMI Pneumatex" },
      { code: "Compresso Connect", description: "Unitate de presurizare conectată, brand IMI Pneumatex" },
      { code: "IMI TA", description: "Gama de robineți de echilibrare și control a grupului" },
      { code: "IMI Pneumatex", description: "Gama de presurizare și degazare a grupului" }
    ],
    faq: [
      { q: "Ce produce IMI Hydronic?", a: "IMI Hydronic produce robineți de echilibrare hidraulică și control al debitului pentru instalații HVAC, sub brandurile IMI TA (robineți STAD, STAF, TA-Modulator) și IMI Pneumatex (presurizare, cu sisteme precum Statico și Compresso Connect)." },
      { q: "Ce diferență e între un robinet STAF și unul TA-Modulator de la IMI?", a: "STAF este un robinet de echilibrare manuală, reglat o singură dată la punerea în funcțiune, în timp ce TA-Modulator este un robinet PICV, care reglează automat debitul indiferent de variațiile de presiune ulterioare din instalație." },
      { q: "Ce domeniu DN acoperă gama STAF de la IMI?", a: "Seria STAF și varianta din fontă nodulară STAF-SG acoperă un domeniu DN 20-400, la presiuni nominale PN 16 și PN 25, conform informațiilor publicate de producător." },
      { q: "Livrați robineți IMI Hydronic în România și cât durează?", a: "Da, aducem robineți IMI la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, în funcție de dimensiunea și tipul confirmate cu rețeaua de distribuție a producătorului." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "IMI Climate Control – Home", url: "https://climatecontrol.imiplc.com/en-us", publisher: "IMI Hydronic Engineering", accessed: "2026-09-22" },
      { title: "STAF & STAF-SG – Manual Balancing Valves for HVAC", url: "https://climatecontrol.imiplc.com/product/staf-staf-sg", publisher: "IMI Hydronic Engineering", accessed: "2026-09-22" }
    ],
  },

  crane: {
    name: "Crane",
    headquarters: "The Woodlands, Texas, SUA",
    overview: `Crane, prin divizia Crane ChemPharma & Energy, este un grup american de armături industriale cu o istorie de peste 170 de ani, care reunește sub un singur acoperiș branduri specializate precum XOMOX (robinete cu sertar înmănușat, seria Tufline), SAUNDERS (robinete cu diafragmă), CENTER LINE și FLOWSEAL (robinete fluture), KROMBACH (robinete cu bilă), DEPA (pompe cu diafragmă) și ELRO (pompe peristaltice). Pentru piața din România, Crane înseamnă acces la o gamă foarte largă de robinete și pompe industriale, fiecare brand acoperind o nișă tehnică diferită.

Ce diferențiază Crane e specializarea fiecărui brand component: robinetele XOMOX Tufline vin în variante Full Port, Multiport, Lined, Jacketed, Severe Service sau Tertiary Top Seal, pentru medii diferite de la standard la extrem de agresive, în timp ce robinetele cu diafragmă SAUNDERS acoperă domeniul DN008-DN350 în tipurile A și KB, cu materiale de garnitură precum neopren, nitril, cauciuc natural sau Hypalon. Certificările menționate de grup includ ISO 9001, conformitate TA-Luft 2021 pentru emisii și ISO 15848-1 pentru etanșare fugitivă — relevante pentru instalații chimice și petrochimice cu cerințe stricte de mediu.

Pentru un cumpărător din România, Crane are sens la instalații din chimie, petrochimie, rafinării sau farmaceutică, unde alegerea tipului exact de robinet (sertar înmănușat pentru medii abrazive, diafragmă pentru izolare completă, fluture pentru spațiu redus) depinde de proprietățile fluidului și de cerințele de etanșare ale procesului.`,
    whyChoose: [
      "Portofoliu de branduri specializate (XOMOX, SAUNDERS, CENTER LINE, KROMBACH, FLOWSEAL, DEPA, ELRO) sub un singur furnizor",
      "Robinete XOMOX Tufline în variante multiple — Full Port, Jacketed, Severe Service — pentru medii de la standard la extrem de agresive",
      "Robinete cu diafragmă SAUNDERS pe domeniu larg DN008-DN350, cu materiale de garnitură adaptate chimic",
      "Certificări relevante pentru industrie — ISO 9001, TA-Luft 2021 pentru emisii, ISO 15848-1 pentru etanșare fugitivă",
      "Peste 170 de ani de istorie combinată a brandurilor din grup în armături industriale"
    ],
    keyProducts: [
      { name: "Robinete Cu Sertar Înmănușat XOMOX Tufline", description: "Familie de robinete cu sertar din elastomer înmănușat, în variante Full Port (debit maxim), XP, Multiport (mai multe căi pe același corp), Lined (căptușit pentru medii corozive), Jacketed (cu manta de încălzire/răcire) și Severe Service sau Tertiary Top Seal pentru medii extrem de agresive, inclusiv acid fluorhidric. Recomandate acolo unde etanșarea perfectă la închidere contează mai mult decât viteza de acționare." },
      { name: "Robinete Cu Diafragmă SAUNDERS", description: "Robinete cu diafragmă în tipurile A (DN008-DN350) și KB (DN015-DN350), cu materiale de garnitură disponibile în neopren, nitril, cauciuc natural (Q și AA) sau Hypalon 237, alese în funcție de compatibilitatea chimică cu fluidul. Recomandate pentru izolare completă a mediului de proces față de mecanismul robinetului, tipic în industria chimică și farmaceutică." },
      { name: "Pompe Cu Diafragmă DEPA și Pompe Peristaltice ELRO", description: "Pompe cu diafragmă DEPA pentru transfer de lichide agresive fără contact cu piese metalice în mișcare, și pompe peristaltice ELRO pentru fluide abrazive sau cu solide, unde tubul flexibil e singura piesă în contact cu lichidul. Completează gama de robinete Crane cu soluții de pompare pentru aceleași industrii chimice și farmaceutice." },
      { name: "Robinete Fluture CENTER LINE și FLOWSEAL", description: "Robinete fluture din portofoliul Crane, folosite pentru izolare și reglare de debit în spații unde un robinet cu sertar sau diafragmă ar fi prea mare. CENTER LINE și FLOWSEAL acoperă aplicații industriale generale, completând gama de robinete de proces alături de familiile XOMOX și SAUNDERS pentru cerințe mai specializate." }
    ],
    industries: [
      "Chimie și petrochimie — robinete și pompe pentru medii corozive sau agresive",
      "Farmaceutică — robinete cu diafragmă SAUNDERS pentru izolare completă a procesului",
      "Rafinării și energie — robinete XOMOX Tufline pentru medii severe, inclusiv acid fluorhidric",
      "Tratarea apei — robinete fluture și cu diafragmă pentru reglare de debit",
      "Industria alimentară și a băuturilor — componente compatibile cu cerințe de igienă"
    ],
    certifications: [
      "ISO 9001 — sistem de management al calității",
      "TA-Luft 2021 — conformitate pentru controlul emisiilor fugitive",
      "ISO 15848-1 — standard de testare a etanșării fugitive pentru robinete industriale"
    ],
    infinitrade: `Aducem robinete și pompe din portofoliul Crane ChemPharma & Energy (XOMOX, SAUNDERS, CENTER LINE, KROMBACH, FLOWSEAL, DEPA, ELRO) prin canale de aprovizionare din UE, la comandă. Pentru acest brand ne bazăm pe surse publice ale producătorului, fără date proprii de stoc — dată fiind diversitatea foarte mare a gamei, confirmăm brandul, seria și dimensiunea exactă direct cu rețeaua Crane înainte de ofertă. Ca reper, livrarea durează orientativ 2-6 săptămâni din momentul confirmării comenzii. Pentru o ofertă corectă avem nevoie de: tipul de armătură necesar (sertar, diafragmă, fluture, bilă), dimensiunea DN, materialul de contact cu fluidul și dacă aplicația impune certificare specifică (TA-Luft, ISO 15848-1). Nu promitem disponibilitate din depozit pentru niciun brand din portofoliu.`,
    limitation: "Nu putem confirma codurile complete de comandă sau echivalențele exacte între branduri concurente pentru gama Crane fără o cerere tehnică transmisă direct producătorului.",
    productCodes: [
      { code: "XOMOX Tufline Full Port", description: "Robinet cu sertar înmănușat, debit maxim prin corp" },
      { code: "XOMOX Tufline XP", description: "Robinet cu sertar înmănușat, variantă XP" },
      { code: "XOMOX Tufline Multiport", description: "Robinet cu sertar cu mai multe căi pe un corp" },
      { code: "XOMOX Tufline Lined", description: "Robinet cu sertar căptușit pentru medii corozive" },
      { code: "XOMOX Tufline Jacketed", description: "Robinet cu sertar cu manta de încălzire/răcire" },
      { code: "XOMOX Tufline Severe Service", description: "Robinet cu sertar pentru medii extrem de agresive" },
      { code: "XOMOX Tufline Tertiary Top Seal", description: "Robinet cu sertar cu etanșare terțiară suplimentară" },
      { code: "XOMOX Tufline Hydrofluoric", description: "Robinet cu sertar pentru servicii cu acid fluorhidric" },
      { code: "SAUNDERS A Type", description: "Robinet cu diafragmă, domeniu DN008-DN350" },
      { code: "SAUNDERS KB Type", description: "Robinet cu diafragmă, domeniu DN015-DN350" },
      { code: "SAUNDERS IDV", description: "Gama de robinete industriale cu diafragmă" },
      { code: "CENTER LINE", description: "Brand de robinete fluture din portofoliul Crane" },
      { code: "FLOWSEAL", description: "Brand de robinete fluture din portofoliul Crane" },
      { code: "KROMBACH", description: "Brand de robinete cu bilă din portofoliul Crane" },
      { code: "DEPA", description: "Brand de pompe cu diafragmă din portofoliul Crane" },
      { code: "ELRO", description: "Brand de pompe peristaltice din portofoliul Crane" },
      { code: "RESISTOFLEX", description: "Brand de țevi și furtunuri căptușite din portofoliul Crane" }
    ],
    faq: [
      { q: "Ce produce Crane (Crane ChemPharma & Energy)?", a: "Crane ChemPharma & Energy produce armături industriale sub mai multe branduri specializate — robinete cu sertar înmănușat XOMOX, robinete cu diafragmă SAUNDERS, robinete fluture CENTER LINE și FLOWSEAL, robinete cu bilă KROMBACH și pompe DEPA/ELRO — pentru chimie, petrochimie și energie." },
      { q: "Ce diferență e între un robinet XOMOX și unul SAUNDERS de la Crane?", a: "XOMOX este un robinet cu sertar cilindric înmănușat în elastomer, potrivit pentru medii abrazive și acțiune rapidă de sfert de tură, în timp ce SAUNDERS este un robinet cu diafragmă, care izolează complet mecanismul de fluid, recomandat pentru medii extrem de corozive sau aplicații farmaceutice." },
      { q: "Ce este seria Tufline de la XOMOX (Crane)?", a: "Tufline este familia de robinete cu sertar înmănușat a brandului XOMOX, cu variante precum Full Port, Lined, Jacketed sau Severe Service, alese în funcție de agresivitatea chimică a mediului și de cerințele de temperatură ale aplicației." },
      { q: "Livrați robinete Crane în România și cât durează?", a: "Da, aducem robinete și pompe din portofoliul Crane la comandă prin canale de aprovizionare din UE, cu un termen orientativ de 2-6 săptămâni, în funcție de brandul, seria și dimensiunea confirmate cu producătorul." }
    ],
    evidenceClass: "gsc-only",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Crane ChemPharma & Energy – Home", url: "https://www.cranecpe.com/", publisher: "Crane ChemPharma & Energy", accessed: "2026-09-22" },
      { title: "SAUNDERS® Standard Diaphragm Ranges", url: "https://cranecpe.com/product/saunders-standard-diaphragm-ranges/", publisher: "Crane ChemPharma & Energy", accessed: "2026-09-22" }
    ],
  },
};
