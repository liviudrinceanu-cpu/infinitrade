// Batch 125 - Branduri-500 val 8 (sept. 2026): HIWIN.
// Sursa faptelor: site-ul oficial al producătorului (hiwin.de), accesate la data din `sources[].accessed`.
export const brandContentBatch125 = {
  hiwin: {
    name: "HIWIN",
    founded: 1989,
    headquarters: "Taichung, Taiwan",
    overview: `HIWIN e un producător taiwanez de componente de mișcare liniară și de precizie, cu filială europeană HIWIN GmbH la Offenburg, în Germania. Gama pe care o putem oferta acoperă ghidaje liniare cu bile și cu role, șuruburi cu bile (arbori laminați și piulițe), module și axe liniare complete, plus rulmenți liniari pentru arbori de șurub. Componentele sunt gândite pentru mașini-unelte, linii de automatizare și celule robotizate, acolo unde precizia de poziționare contează mai mult decât costul brut al piesei.

Catalogul HIWIN acoperă o gamă largă de dimensiuni sub aceeași marcă: de la ghidaje miniaturale seria MGN/MGW, cu șine de 6–32 mm, până la ghidaje seria HG/QH cu blocuri capabile de sarcini dinamice de zeci de mii de newtoni. Seria QH/QE/QW adaugă tehnologia SynchMotion™, cu lanț de bile în locul separatoarelor individuale, pentru rulaj mai silențios la turații mari. Arborii de șurub cu bile laminați acoperă diametre de la 8 la 63 mm, cu piulițe cu flanșă sau cilindrice montate pe capătul filetat.

Pentru piața din România, HIWIN înseamnă acces la o gamă fină de dimensiuni pentru retehnologizări de mașini-unelte, unde clientul are deja un ghidaj sau un șurub montat și caută echivalentul exact după cod.`,
    whyChoose: [
      "Gamă fină de dimensiuni — de la ghidaje miniaturale de 6 mm până la blocuri de peste 60 mm lățime",
      "Tehnologie SynchMotion cu lanț de bile — rulaj mai silențios la seriile QH/QE/QW",
      "Șuruburi cu bile de la 8 la 63 mm — acoperă axe mici de poziționare și structuri grele",
      "Module și axe liniare complete — variante cu curea, șurub, cremalieră sau motor liniar",
    ],
    keyProducts: [
      {
        name: "Ghidaje liniare cu bile seria HG/QH și EG/QE",
        description: "Blocuri și șine profilate pentru ghidare liniară, cu variante de bloc înalt (HGH/EGH), jos (HGL) sau cu flanșă (HGW/EGW). La seria EG, blocul EGH15SA are 24×34×40,1 mm cu sarcină dinamică de 5.350 N, iar EGH35CA ajunge la 33.350 N dinamic și 64.840 N static. Varianta QH/QE cu tehnologie SynchMotion înlocuiește separatoarele individuale dintre bile cu un lanț continuu, pentru rulaj mai silențios. Aplicație tipică: axe pe mașini-unelte și centre de prelucrare.",
      },
      {
        name: "Ghidaje liniare miniaturale seria MGN/MGW HIRES",
        description: "Ghidaje mici, cu șine de 6 până la 32 mm lățime, în variante bloc înalt (MGN) sau flanșă (MGW), fiecare în tip standard (C) sau cu sarcină mărită (H). Modelul MGN15H, cu sarcina de vârf din serie, are dinamic 6.370 N și static 9.110 N, iar dimensiunile scad până la MGN02C. Potrivite pentru echipamente compacte, unde spațiul de montaj e limitat.",
      },
      {
        name: "Șuruburi cu bile — arbori laminați și piulițe FSCDIN/RSIT",
        description: "Arbori de șurub cu bile laminați, în diametre de la 8 la 63 mm și pasuri de la 2,5 la 40 mm, cu piulițe cu flanșă (FSCDIN/FSIDIN, DEB, DDB) sau cilindrice (RSIT, RSI, ZE, SE), plus siguranță SEM și unitate antrenată AME. Un exemplu din catalog: R20-05K4-FSCDIN, diametru 20 mm, pas 5 mm. Se folosesc la axe de translație și mese XY unde rotația trebuie convertită în deplasare liniară cu joc redus.",
      },
      {
        name: "Module și axe liniare complete seria HM/HT/HB/HC",
        description: "Axe gata asamblate, cu antrenare prin curea dințată (HM-B, HT-B, HB-B, HC-B), prin șurub cu bile (HM-S, HT-S), prin cremalieră (HB-R, HC-R) sau prin motor liniar (HT-L, HB-L, CV), plus axe de precizie KK/KF. Cursa se alege liber, în trepte de milimetri. Se completează cu module tip masă în cruce (LMX, LMSSA). Utile ca subansamble complete, fără montaj separat de ghidaj, șurub și motor.",
      },
    ],
    industries: [
      "Mașini-unelte — axe de poziționare pentru centre de frezare și strunjire",
      "Automatizare industrială — module liniare pentru manipulare și pick & place",
      "Robotică — axe liniare compatibile cu brațe robotizate uzuale",
      "Ambalare și tipărire — ghidaje de precizie pentru mecanisme de transport",
      "Inspecție și dispensare — module compacte cu ghidaje miniaturale MGN/MGW",
      "Retehnologizare mașini-unelte — înlocuire ghidaje și șuruburi uzate după codul original",
    ],
    infinitrade: `Lucrăm din sursele publice ale producătorului; nu avem date proprii de stoc pentru gama HIWIN, așa că spunem clar ce putem și ce nu putem confirma înainte de ofertă. Aducem ghidaje și șuruburi cu bile HIWIN la comandă prin canale de aprovizionare din UE, termen orientativ 2–6 săptămâni — nu ținem această gamă pe raft. Pentru o ofertă corectă avem nevoie de codul complet de pe bloc sau arbore (ex. HGW25CCH, MGN12H, R20-05K4-FSCDIN), lungimea piesei și, la o reparație, poza montajului existent. Nu promitem disponibilitate din depozit.`,
    limitation: "Nu putem confirma disponibilitatea pe stoc a unui cod anume înainte de a verifica direct cu furnizorul, mai ales pentru dimensiunile mai puțin uzuale din gama miniaturală sau din arborii laminați lungi.",
    productCodes: [
      { code: "HGH35HA", description: "Bloc ghidaj înalt seria HG, sarcină dinamică 77.900 N" },
      { code: "HGW25CCH", description: "Bloc flanșă seria HGW, montaj de sus sau de jos" },
      { code: "HGR15RH", description: "Șină profilată pentru ghidajul cu bile HG, lățime 15 mm" },
      { code: "EGH15SA", description: "Bloc ghidaj seria EG, 24×34×40,1 mm, dinamic 5.350 N" },
      { code: "QEH20CA", description: "Bloc SynchMotion cu lanț de bile, dinamic 16.500 N" },
      { code: "EGH35CA", description: "Bloc ghidaj seria EG, dinamic 33.350 N, static 64.840 N" },
      { code: "MGN15H", description: "Bloc miniatural seria MGN, dinamic 6.370 N, static 9.110 N" },
      { code: "MGN12H", description: "Bloc ghidaj miniatural, lățime șină 27 mm, tip greu" },
      { code: "MGN09H", description: "Bloc ghidaj miniatural, lățime șină 20 mm, tip greu" },
      { code: "MGN07C", description: "Bloc ghidaj miniatural, lățime șină 17 mm, tip standard" },
      { code: "MGW9H", description: "Bloc ghidaj miniatural cu flanșă, seria MGW HIRES" },
      { code: "R12-05K4-FSCDIN", description: "Piuliță cu flanșă, diametru 12 mm, pas 5 mm" },
      { code: "R20-05K4-FSCDIN", description: "Piuliță cu flanșă, diametru 20 mm, pas 5 mm" },
      { code: "R32-10K5-FSCDIN", description: "Piuliță cu flanșă, diametru 32 mm, pas 10 mm" },
      { code: "R08-02,5-800-800-0,052-RSIT", description: "Arbore laminat, diametru 8 mm, pas 2,5 mm, piuliță RSIT" },
      { code: "R12-05-1500-1500-0,052-FSC", description: "Arbore laminat, diametru 12 mm, pas 5 mm, piuliță FSC" },
      { code: "SEM", description: "Piuliță de siguranță pentru șuruburi cu bile" },
      { code: "AME", description: "Unitate de piuliță antrenată pentru șurub cu bile" },
      { code: "RSIT", description: "Familie de piulițe cilindrice simple, montaj direct" },
      { code: "KK", description: "Axă de precizie cu antrenare prin șurub cu bile" },
      { code: "HT-S", description: "Axă liniară de masă cu antrenare prin șurub" },
      { code: "HB-B", description: "Axă liniară tip punte cu antrenare prin curea dințată" },
    ],
    faq: [
      { q: "Ce produce HIWIN?", a: "HIWIN produce ghidaje liniare cu bile și cu role, șuruburi cu bile, module și axe liniare complete, plus rulmenți liniari, folosite mai ales pe mașini-unelte, linii de automatizare și celule robotizate. Gama merge de la ghidaje miniaturale de câțiva milimetri lățime până la blocuri industriale capabile de sarcini de zeci de mii de newtoni." },
      { q: "Cum aleg un ghidaj liniar HIWIN după cod?", a: "Codul complet de pe bloc (de exemplu HGW25CCH sau MGN12H) indică seria, lățimea șinei și varianta de montaj; îl transcrieți exact așa cum apare gravat, împreună cu lungimea șinei existente, iar noi verificăm echivalentul disponibil pentru comandă." },
      { q: "Ce diametre de șurub cu bile oferă HIWIN?", a: "Arborii laminați HIWIN acoperă diametre de la 8 la 63 mm, cu pasuri de la 2,5 la 40 mm, montați cu piulițe cu flanșă (seria FSCDIN) sau cilindrice (RSIT, RSI). Alegerea corectă depinde de sarcina axială și de viteza de deplasare cerută de aplicație." },
      { q: "Livrați produse HIWIN în România și în cât timp?", a: "Aducem produse HIWIN la comandă prin canale de aprovizionare din UE, cu termen orientativ de 2–6 săptămâni de la confirmare; nu ținem această gamă pe raft, așa că termenul exact depinde de disponibilitatea confirmată de producător pentru codul cerut." },
      { q: "Ce trebuie să trimit pentru o ofertă de ghidaj sau șurub HIWIN?", a: "Aveți nevoie să trimiteți codul complet gravat pe bloc sau pe arbore, lungimea șinei sau a arborelui și, dacă înlocuiți o piesă uzată, o fotografie a montajului. Cu aceste date verificăm echivalentul exact în gama HIWIN înainte de a confirma oferta." },
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [ { date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "HIWIN GmbH — Homepage", url: "https://www.hiwin.de/en/", publisher: "HIWIN GmbH", accessed: "2026-09-26" },
      { title: "Linear Guideways — Product Category", url: "https://www.hiwin.de/en/c/4354", publisher: "HIWIN GmbH", accessed: "2026-09-26" },
      { title: "Ball Screws — Product Category", url: "https://www.hiwin.de/en/c/4355", publisher: "HIWIN GmbH", accessed: "2026-09-26" },
      { title: "MGN HIRES Series — Miniature Guides", url: "https://www.hiwin.de/en/c/4500", publisher: "HIWIN GmbH", accessed: "2026-09-26" },
      { title: "Flange Nut FSCDIN/FSIDIN", url: "https://www.hiwin.de/en/c/4491", publisher: "HIWIN GmbH", accessed: "2026-09-26" },
      { title: "Hiwin", url: "https://en.wikipedia.org/wiki/Hiwin", publisher: "Wikipedia", accessed: "2026-09-26" },
    ],
  },
};
