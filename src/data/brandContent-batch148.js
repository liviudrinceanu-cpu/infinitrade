// Batch 148 - Branduri-500 val 9 EU (sept. 2026): STÖBER, Dunkermotoren, Faulhaber, Kollmorgen, Invertek Drives, Control Techniques, Elektrim Motors.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed`.
export const brandContentBatch148 = {
  stoeber: {
    name: "STÖBER",
    founded: 1934,
    headquarters: "Pforzheim, Germania",
    overview: `STÖBER este un producător german de motoreductoare, angrenaje cu cremalieră și pinion, servomotoare lean și variatoare de acționare, cu sediul la Pforzheim și activitate neîntreruptă din 1934. Compania construiește reductoare elicoidale industriale, sisteme liniare de mare precizie pentru axe de poziționare și servomotoare compacte gândite să funcționeze fără traductor de poziție montat separat. Pentru clienți din România putem oferta din gama de motoreductoare și servoacționări STÖBER, configurate pe cuplu, raport de transmisie și tip de montaj cerut de mașină.

Ce diferențiază gama e acoperirea largă: seria C de motoreductoare elicoidale merge de la 21 până la 6000 Nm cu rapoarte între 2 și 276, iar familia de angrenaje cu cremalieră ZR/ZTR/ZTRS acoperă module de la 2 la 8 mm și forțe de avans de până la 124 kN, pentru axe liniare de mare viteză pe mașini-unelte sau roboți portal. Motoarele lean din seria LM ajung la clasa de eficiență IE5 și determină poziția prin cablul de putere, în combinație cu variatoarele SC6 sau SI6, fără encoder extern montat pe carcasă.

Pentru instalații din România unde spațiul de montaj e limitat sau precizia axei contează mai mult decât costul inițial — celule robotizate, linii de ambalare, centre de prelucrare — gama STÖBER e o alternativă demnă de analizat la reductoarele și servomotoarele deja instalate.`,
    whyChoose: [
      "Motoreductoare elicoidale seria C, cupluri de la 21 la 6000 Nm și rapoarte de transmisie între 2 și 276.",
      "Angrenaje cu cremalieră și pinion seriile ZR, ZTR și ZTRS, module 2–8 mm, forțe de avans până la 124 kN.",
      "Motoare lean seria LM, clasă de eficiență IE5, poziționare fără traductor extern prin variatoarele SC6/SI6.",
      "Servomotoreductoare offset seria FEZ, cupluri de accelerare 21–1100 Nm, randament de 96–97%.",
    ],
    keyProducts: [
      {
        name: "Motoreductoare Elicoidale Seria C",
        description: "Motoreductoare industriale cu roți dințate elicoidale și construcție monobloc, cu rigiditate torsională ridicată și randament de 96–97%. Acoperă cupluri de la 21 la 6000 Nm și rapoarte de transmisie între 2 și 276, cu posibilitate de cuplare la motoare standard prin adaptoare scurte STÖBER. Sunt gândite pentru transmisii de putere în linii de producție și utilaje grele. Pentru ofertă, clientul trebuie să indice cuplul necesar, raportul de transmisie și tipul motorului de cuplat.",
      },
      {
        name: "Angrenaje cu Cremalieră și Pinion ZR/ZTR/ZTRS",
        description: "Familie de angrenaje liniare de precizie, cu module între 2 și 8 mm și forțe de avans între 3 și 124 kN, în funcție de serie. ZR e optimizată pentru viteză mare, ZTR pentru performanță ridicată, iar ZTRS pentru forța maximă, cu suport de lagăr înșurubat. Se folosesc la axele liniare ale mașinilor-unelte și roboților portal, unde cursa lungă contează mai mult decât la un șurub cu bile clasic.",
      },
      {
        name: "Motoare Lean Seria LM cu Variatoare SC6/SI6",
        description: "Servomotoare sincrone din clasa de eficiență IE5, cu cuplu nominal între 2,25 și 25,7 Nm, gândite să funcționeze fără traductor de poziție montat pe motor — poziția se determină prin cablul de putere, împreună cu variatoarele STÖBER SC6 sau SI6. Abaterea de turație rămâne sub 1%, iar precizia de poziționare la oprire e de circa ±1°. Clientul trebuie să precizeze cuplul de sarcină și variatorul existent în instalație.",
      },
    ],
    industries: [
      "Mașini-unelte — axe de poziționare și avans pe centre de prelucrare",
      "Automatizări și robotică — servoacționări pentru celule robotizate",
      "Ambalare — motoreductoare compacte pentru linii de ambalat de mare viteză",
      "Prelucrarea materialelor plastice — acționări pentru extrudere și mașini de injecție",
    ],
    certifications: ["IEC 62443-4-2 (nivel de securitate cibernetică 2, cerință de la producător pentru variatoarele conectate din 2027)"],
    infinitrade: `Pentru gama STÖBER lucrăm din surse publice ale producătorului pentru cupluri, rapoarte de transmisie și module de angrenare — nu avem instalații proprii testate cu aceste echipamente și spunem asta direct. Aducem la comandă, prin canale de aprovizionare din UE, motoreductoarele elicoidale, angrenajele cu cremalieră și servomotoarele lean din gama STÖBER, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii de către producător. Nu promitem o disponibilitate constantă din fabrică; fiecare configurație se verifică înainte de ofertare. Pentru o ofertă corectă avem nevoie de cuplul necesar, raportul de transmisie, turația și tipul de variator din instalația dumneavoastră.`,
    limitation: "Nu putem confirma termene de fabricație la producător și nu oferim configurare software pentru variatoarele SC6/SI6 dincolo de parametrii transmiși de client.",
    productCodes: [
      { code: "C Series", description: "Motoreductor elicoidal, cuplu 21–6000 Nm, raport 2–276" },
      { code: "F Series", description: "Reductor elicoidal offset, cuplu 44–1100 Nm, raport 4,3–552" },
      { code: "FEZ Series", description: "Servomotoreductor offset, cuplu accelerare 21–1100 Nm, randament 96–97%" },
      { code: "PLM Series", description: "Motor planetar lean premium, cuplu 13–1840 Nm, raport 3–70" },
      { code: "PELM Series", description: "Motor planetar lean economic, cuplu 13–310 Nm, raport 3–20" },
      { code: "LM Series", description: "Servomotor lean IE5, cuplu nominal 2,25–25,7 Nm, fără traductor extern" },
      { code: "ZV Series", description: "Angrenaj cremalieră-pinion flexibil, modul 2–4 mm, clasă danturare 6" },
      { code: "ZR Series", description: "Angrenaj cremalieră-pinion de mare viteză, modul 2–4 mm" },
      { code: "ZTR Series", description: "Angrenaj cremalieră-pinion de performanță, modul 2–6 mm" },
      { code: "ZTRS Series", description: "Angrenaj cremalieră-pinion de forță mare, modul 3–8 mm" },
      { code: "ZS Precision Racks", description: "Cremaliere de precizie, modul 2–8 mm, lungimi de 0,5–2 m" },
      { code: "SB6", description: "Variator principal pentru servomotoare și motoreductoare STÖBER" },
      { code: "SC6", description: "Variator compact pentru motoare lean fără traductor extern" },
      { code: "SI6", description: "Variator de servoacționare pentru gama de motoare lean" },
      { code: "SX6", description: "Modul de siguranță pentru variatoarele din gama STÖBER" },
      { code: "K-Series", description: "Reductor cu roți dințate conice, sarcină dinamică până la 26 tone" },
      { code: "KS", description: "Reductor unghiular pentru servomotoare, gamă extinsă de rapoarte" },
    ],
    faq: [
      { q: "Ce produce STÖBER?", a: "STÖBER produce motoreductoare industriale, angrenaje cu cremalieră și pinion pentru axe liniare, servomotoare lean și servomotoreductoare, plus variatoare și module de siguranță pentru acționarea acestora. Gama acoperă de la reductoare elicoidale de putere mare, cu cupluri de până la 6000 Nm, până la motoare compacte de precizie pentru axe de poziționare. Producătorul este german, cu sediul la Pforzheim, activ din 1934." },
      { q: "Cum aleg un motoreductor STÖBER seria C după cod?", a: "Pentru seria C trebuie precizate cuplul necesar la ieșire, raportul de transmisie dorit între 2 și 276, turația de intrare și tipul motorului electric care se cuplează la reductor. Codul complet indică mărimea carcasei și varianta de montaj, informații pe care le confirmăm împreună cu producătorul înainte de a pregăti oferta finală." },
      { q: "Ce echivalent are un reductor elicoidal offset față de o transmisie cu șurub cu bile?", a: "Seria F de reductoare elicoidale offset, cu cupluri între 44 și 1100 Nm, înlocuiește adesea o transmisie cu șurub cu bile acolo unde spațiul axial e limitat, dar rămâne nevoie de cuplu constant și randament ridicat, de 96–97%. Alegerea finală depinde de cursă, forța necesară și spațiul de montaj disponibil pe mașină." },
      { q: "Livrați echipamente STÖBER în România și cât durează?", a: "Aducem la comandă motoreductoare și servomotoare STÖBER prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii cu producătorul, în funcție de configurația exactă solicitată. Nu putem promite un termen mai scurt fără această confirmare." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "STÖBER Drive Technology – Home", url: "https://www.stoeber.de/en/", publisher: "STÖBER Antriebstechnik GmbH + Co. KG", accessed: "2026-09-26" },
      { title: "Rack and Pinion Gearboxes", url: "https://www.stoeber.de/en/solutions/rack-and-pinion-gearboxes/", publisher: "STÖBER Antriebstechnik GmbH + Co. KG", accessed: "2026-09-26" },
      { title: "Power Transmission Helical Gearboxes", url: "https://www.stoeber.de/en/solutions/power-transmission-helical-gearboxes/", publisher: "STÖBER Antriebstechnik GmbH + Co. KG", accessed: "2026-09-26" },
      { title: "Lean Motor", url: "https://www.stoeber.de/en/solutions/lean-motor/", publisher: "STÖBER Antriebstechnik GmbH + Co. KG", accessed: "2026-09-26" },
    ],
  },

  dunkermotoren: {
    name: "Dunkermotoren",
    founded: 1950,
    headquarters: "Bonndorf im Schwarzwald, Germania",
    overview: `Dunkermotoren este un producător german de motoare electrice de mică și medie putere, înființat în 1950 și cu sediul la Bonndorf im Schwarzwald. Astăzi face parte din grupul Ametek și fabrică motoare de curent continuu cu perii, motoare fără perii (BLDC) cu sau fără controler integrat, reductoare planetare, melcate și conice, plus frâne și encodere pentru completarea acționării. Pentru clienți din România putem oferta din gama de motoare și reductoare Dunkermotoren, alese pe putere, turație și tip de comandă necesar.

Ce ține gama relevantă e puterea maximă relativ mică, de până la 4000 W, combinată cu opțiunea de controler integrat direct în carcasa motorului — seria BLDC BG vine în mărimile 32, 45, 75 și 95, disponibile fie cu controler integrat, fie pentru comandă cu variator extern. Reductoarele planetare PLG ajung la 130 Nm cuplu continuu, cu rapoarte de transmisie între 4:1 și 512:1 și variante EP, HT sau LB în funcție de aplicație, completate de reductoare melcate SG și reductoare Spirotec STG pentru rapoarte de reducere mari într-un gabarit redus.

Pentru instalații din România cu spațiu redus și cerințe de comandă integrată — benzi transportoare, sisteme de sortare, echipamente medicale sau de laborator — gama Dunkermotoren acoperă o nișă diferită de motoarele industriale de putere mare deja prezente în portofoliu.`,
    whyChoose: [
      "Motoare BLDC seria BG, mărimile 32/45/75/95, disponibile cu controler integrat direct în carcasă.",
      "Putere maximă de până la 4000 W, potrivită pentru echipamente compacte, nu pentru acționări industriale grele.",
      "Reductoare planetare PLG cu cuplu continuu de până la 130 Nm și rapoarte de transmisie 4:1–512:1.",
      "Gamă completă de accesorii — frâne și encodere — pentru completarea motorului fără a schimba furnizorul.",
    ],
    keyProducts: [
      {
        name: "Motoare Fără Perii Seria BG (32/45/75/95)",
        description: "Motoare sincrone fără perii cu magnet permanent, disponibile în patru mărimi de carcasă, fie cu controler integrat în corpul motorului, fie pentru comandă printr-un variator extern. Sunt gândite pentru randament ridicat și accelerație dinamică la o densitate de putere mare raportat la volum. Seria a fost extinsă recent cu interfață PROFINET integrată pentru comunicare directă în rețeaua de automatizare. Pentru ofertă, clientul trebuie să indice mărimea BG, tensiunea de alimentare și dacă dorește varianta cu sau fără controler integrat.",
      },
      {
        name: "Reductoare Planetare Seria PLG",
        description: "Reductoare planetare cu cuplu continuu de până la 130 Nm și rapoarte de transmisie între 4:1 și 512:1, disponibile în variantele EP, HT sau LB, în funcție de nivelul de precizie și de sarcina radială admisă. Se cuplează direct la motoarele BG sau la seria de motoare cu perii GR/G, formând un ansamblu compact motor-reductor. Pentru configurare, clientul trebuie să transmită cuplul de ieșire necesar și raportul de transmisie dorit.",
      },
      {
        name: "Motoare cu Perii Seria GR/G",
        description: "Motoare de curent continuu cu perii, cu cuplu de cogging redus, construcție rugoasă și moment de inerție scăzut, potrivite pentru aplicații cu porniri și opriri frecvente. Modelul GR 63 a fost menționat de producător ca fiind folosit inclusiv în aplicații de competiție auto de mare performanță, ca dovadă a densității de putere obținute la un gabarit redus. Clientul trebuie să precizeze turația și cuplul de sarcină pentru selecția corectă a mărimii motorului.",
      },
    ],
    industries: [
      "Automatizarea depozitelor — motoare pentru sisteme de sortare și benzi transportoare",
      "Echipamente medicale și de laborator — acționări compacte cu comandă integrată",
      "Mașini de birou și echipamente electrocasnice profesionale — motoare de putere mică",
      "Robotică mobilă — motoare BLDC pentru module de propulsie compacte",
    ],
    infinitrade: `Faptele de mai sus vin din surse publice ale producătorului — nu avem un istoric propriu de instalări cu motoarele Dunkermotoren și preferăm să spunem clar ce putem și ce nu putem confirma din datele tehnice complete ale fiecărei mărimi BG sau PLG. Aducem la comandă motoare, reductoare și accesorii Dunkermotoren prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii de către producător. Nu promitem o disponibilitate constantă din fabrică pentru fiecare combinație motor-reductor. Pentru ofertă avem nevoie de mărimea motorului, tensiunea de alimentare, cuplul necesar și tipul de comandă dorit.`,
    limitation: "Nu putem confirma parametrii electrici compleți din cataloagele PDF ale producătorului și nu oferim programare a controlerelor integrate dincolo de setările transmise de client.",
    productCodes: [
      { code: "BG 32", description: "Motor BLDC compact, disponibil cu sau fără controler integrat" },
      { code: "BG 45", description: "Motor BLDC mărime medie, cu controler integrat opțional" },
      { code: "BG 75", description: "Motor BLDC, seria dMove, intrată recent în producție de serie" },
      { code: "BG 95", description: "Motor BLDC de putere mai mare din familia BG" },
      { code: "BG cu interfață PROFINET", description: "Variantă BG cu comunicare PROFINET integrată" },
      { code: "GR/G Series", description: "Motor de curent continuu cu perii, cogging redus" },
      { code: "GR 63", description: "Motor cu perii de putere mare la gabarit redus" },
      { code: "PLG-EP", description: "Reductor planetar de precizie, cuplu până la 130 Nm" },
      { code: "PLG-HT", description: "Reductor planetar de sarcină mare, raport 4:1–512:1" },
      { code: "PLG-LB", description: "Reductor planetar economic pentru sarcini reduse" },
      { code: "SG Series", description: "Reductor melcat pentru rapoarte de reducere mari" },
      { code: "STG Series", description: "Reductor Spirotec compact pentru gabarit redus" },
    ],
    faq: [
      { q: "Ce produce Dunkermotoren?", a: "Dunkermotoren produce motoare electrice de putere mică și medie, până la 4000 W — motoare cu perii, motoare fără perii (BLDC) cu sau fără controler integrat — plus reductoare planetare, melcate și Spirotec, frâne și encodere. Compania e germană, înființată în 1950, cu sediul la Bonndorf im Schwarzwald, și face parte din grupul Ametek." },
      { q: "Cum aleg un motor Dunkermotoren seria BG după mărime?", a: "Alegerea unei mărimi BG (32, 45, 75 sau 95) depinde de puterea și cuplul necesare la arbore, tensiunea de alimentare disponibilă și dacă instalația are deja un variator extern sau se dorește controler integrat în motor. Producătorul oferă și variante cu interfață PROFINET pentru integrare directă în rețeaua de automatizare a liniei." },
      { q: "Ce reductor Dunkermotoren se potrivește unui motor BG pentru cuplu mare?", a: "Pentru cuplu mărit la ieșire, seria de reductoare planetare PLG, cu cuplu continuu de până la 130 Nm și rapoarte între 4:1 și 512:1, se cuplează direct la motoarele BG sau GR/G. Varianta EP, HT sau LB se alege în funcție de precizia și sarcina radială cerute de aplicație." },
      { q: "Livrați motoare Dunkermotoren în România?", a: "Aducem la comandă motoare și reductoare Dunkermotoren prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii cu producătorul. Termenul exact depinde de mărimea motorului și de varianta de controler solicitată." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Dunkermotoren – Home", url: "https://www.dunkermotoren.com/en/", publisher: "Dunkermotoren GmbH", accessed: "2026-09-26" },
      { title: "Products Overview", url: "https://www.dunkermotoren.com/en/products", publisher: "Dunkermotoren GmbH", accessed: "2026-09-26" },
      { title: "Company", url: "https://www.dunkermotoren.com/en/company", publisher: "Dunkermotoren GmbH", accessed: "2026-09-26" },
      { title: "Gearboxes", url: "https://www.dunkermotoren.com/en/products/gearboxes/", publisher: "Dunkermotoren GmbH", accessed: "2026-09-26" },
    ],
  },

  faulhaber: {
    name: "Faulhaber",
    founded: 1947,
    overview: `Faulhaber este un producător german de micromotoare și sisteme de acționare de mare precizie, înființat în 1947, cu o rețea internațională de dezvoltare și producție care include, potrivit propriei pagini de locații, facilități în Germania, Elveția, SUA, România și Ungaria. Portofoliul acoperă micromotoare de curent continuu, servomotoare fără perii, reductoare planetare și cu roți drepte, plus actuatoare liniare, la diametre de doar câțiva milimetri. Pentru clienți din România putem oferta din gama Faulhaber de micromotoare și reductoare, aleasă pe diametru, cuplu și turație.

Ce diferențiază Faulhaber e miniaturizarea extremă combinată cu turații foarte mari — motoarele fără perii din seria B ajung la 100.000 rpm la un diametru de doar 6 mm, iar micromotoarele de curent continuu din seria S livrează cupluri de sub 1 mNm la diametre între 6 și 10 mm. Reductoarele planetare din seria /1 acoperă rapoarte de la 4:1 la 4096:1 la diametre de 6–10 mm, iar variantele de reductoare cu roți drepte din seria /2 și /3 oferă opțiunea de joc unghiular practic zero.

Pentru aplicații din România unde spațiul de montaj se măsoară în milimetri — echipamente medicale portabile, instrumentație de laborator, robotică de precizie — gama Faulhaber acoperă o nișă de miniaturizare pe care motoarele electrice industriale standard nu o pot atinge.`,
    whyChoose: [
      "Motoare fără perii seria B, diametre de la 3 la 10 mm, turații de până la 100.000 rpm.",
      "Micromotoare de curent continuu seria S, diametre de 6–10 mm, pentru aplicații cu spațiu extrem de redus.",
      "Reductoare planetare seria /1, rapoarte de transmisie de la 4:1 la 4096:1, la diametre de 6–10 mm.",
      "Actuatoare liniare seria L, forțe continue de la 3 la 40 N, pentru poziționare de precizie fără șurub extern.",
    ],
    keyProducts: [
      {
        name: "Motoare Fără Perii Seria B (0308…1028)",
        description: "Servomotoare sincrone fără perii, cu diametre între 3 și 10 mm, turații de până la 100.000 rpm la varianta de 6 mm și cupluri de la 18 µNm la modelul cel mai mic până la 2,2 mNm la varianta de 10 mm. Sunt gândite pentru viteze foarte mari la gabarit minim, în aplicații unde inerția redusă contează mai mult decât cuplul absolut. Pentru ofertă, clientul trebuie să transmită diametrul maxim admis, turația și cuplul necesar la arbore.",
      },
      {
        name: "Reductoare Planetare Seria /1",
        description: "Reductoare planetare cu diametre de 6, 8 și 10 mm, rapoarte de transmisie de la 4:1 până la 4096:1 și cuplu continuu de la 25 la 100 mNm, în funcție de mărime. Se cuplează direct la micromotoarele de curent continuu sau la motoarele fără perii din aceeași gamă de diametre, formând un ansamblu motor-reductor foarte compact. Clientul trebuie să indice diametrul dorit, raportul de transmisie și cuplul de sarcină la ieșire.",
      },
      {
        name: "Micromotoare de Curent Continuu Seria S",
        description: "Micromotoare de curent continuu cu diametre de 6 și 10 mm, tensiuni de alimentare între 1,5 și 12 V și turații de până la 24.000 rpm, cu cupluri de sub 2 mNm. Sunt varianta economică față de motoarele fără perii, acolo unde durata de viață și turația extremă contează mai puțin decât costul pe unitate. Pentru selecție, clientul trebuie să precizeze tensiunea disponibilă și turația de lucru dorită.",
      },
    ],
    industries: [
      "Echipamente medicale portabile — micromotoare pentru pompe și instrumente chirurgicale",
      "Instrumentație de laborator — actuatoare de precizie pentru poziționare fină",
      "Robotică de precizie — motoare fără perii de gabarit minim",
      "Optică și fotonică — poziționare fină cu reductoare de joc unghiular redus",
    ],
    infinitrade: `Informațiile despre diametre, turații și cupluri vin din surse publice ale producătorului; nu avem un istoric propriu de utilizare a micromotoarelor Faulhaber și preferăm să spunem asta din start, nu la finalul discuției. Aducem la comandă micromotoare, reductoare și actuatoare Faulhaber prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii de către producător. Nu promitem o disponibilitate constantă din fabrică pentru fiecare combinație de diametru și raport de transmisie. Pentru ofertă avem nevoie de diametrul maxim admis în aplicație, turația, cuplul necesar și tensiunea de alimentare disponibilă.`,
    limitation: "Nu putem confirma toleranțele mecanice exacte din cataloagele complete ale producătorului și nu oferim integrare software pentru electronica de comandă asociată dincolo de datele transmise de client.",
    productCodes: [
      { code: "0615 S", description: "Micromotor CC, diametru 6 mm, până la 24.000 rpm" },
      { code: "0816 SR", description: "Micromotor CC, diametru 8 mm, cuplu 0,6 mNm" },
      { code: "1016 SR", description: "Micromotor CC, diametru 10 mm, cuplu 0,94 mNm" },
      { code: "1024 SR", description: "Micromotor CC, diametru 10 mm, lungime 24 mm" },
      { code: "0308 B", description: "Motor fără perii, diametru 3 mm, până la 96.000 rpm" },
      { code: "0515 B", description: "Motor fără perii, diametru 5 mm, cuplu 0,13 mNm" },
      { code: "0620 B", description: "Motor fără perii, diametru 6 mm, până la 100.000 rpm" },
      { code: "0824 B", description: "Motor fără perii, diametru 8 mm, cuplu 1,1 mNm" },
      { code: "1028 B", description: "Motor fără perii, diametru 10 mm, cuplu 2,2 mNm" },
      { code: "06/1", description: "Reductor planetar, diametru 6 mm, raport 4:1–4096:1" },
      { code: "08/1", description: "Reductor planetar, diametru 8 mm, cuplu continuu 60 mNm" },
      { code: "10/1", description: "Reductor planetar, diametru 10 mm, cuplu 5–100 mNm" },
      { code: "03B", description: "Micro reductor planetar, diametru 3,4 mm, raport 25:1–125:1" },
      { code: "06A", description: "Micro reductor planetar, diametru 5,8 mm, cuplu 1,2–6 mNm" },
      { code: "08/2", description: "Reductor cu roți drepte, diametru 8 mm, raport 4:1–1518:1" },
      { code: "08/3", description: "Reductor cu roți drepte, joc unghiular zero, diametru 8 mm" },
      { code: "06L SL", description: "Actuator liniar, diametru 6 mm, forță continuă 3–12 N" },
      { code: "08L SL", description: "Actuator liniar, diametru 8 mm, forță continuă 4–23 N" },
      { code: "10L SL", description: "Actuator liniar, diametru 10 mm, forță continuă 5–40 N" },
    ],
    faq: [
      { q: "Ce produce Faulhaber?", a: "Faulhaber produce micromotoare de curent continuu, motoare fără perii de mare turație, reductoare planetare și cu roți drepte, plus actuatoare liniare, la diametre de la 3 la 10 mm. Este un producător german înființat în 1947, cu facilități de dezvoltare și producție inclusiv în România, potrivit paginii oficiale de locații." },
      { q: "Cum aleg un motor Faulhaber după cod?", a: "Codul indică de regulă diametrul motorului în milimetri și lungimea carcasei — de exemplu 0620 înseamnă diametru 6 mm, lungime 20 mm. Pentru alegerea corectă trebuie precizate diametrul maxim admis în aplicație, turația de lucru dorită și cuplul necesar, iar noi confirmăm varianta exactă împreună cu datele publicate de producător.", },
      { q: "Ce reductor Faulhaber se potrivește unui micromotor cu diametru de 8 mm?", a: "Pentru motoarele de 8 mm, seria de reductoare planetare 08/1 acoperă rapoarte de transmisie de la 4:1 la 4096:1 cu cuplu continuu de 60 mNm, iar seria cu roți drepte 08/2 sau 08/3 (joc zero) e opțiunea când poziționarea fină contează mai mult decât cuplul maxim." },
      { q: "Livrați micromotoare Faulhaber în România?", a: "Aducem la comandă micromotoare, reductoare și actuatoare Faulhaber prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii cu producătorul, în funcție de diametrul și varianta exactă solicitate." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "FAULHABER – Home", url: "https://www.faulhaber.com/en/", publisher: "Dr. Fritz Faulhaber GmbH & Co. KG", accessed: "2026-09-26" },
      { title: "About Us", url: "https://www.faulhaber.com/en/company/about-us/", publisher: "Dr. Fritz Faulhaber GmbH & Co. KG", accessed: "2026-09-26" },
      { title: "Locations", url: "https://www.faulhaber.com/en/about-us/locations/", publisher: "Dr. Fritz Faulhaber GmbH & Co. KG", accessed: "2026-09-26" },
      { title: "Products Catalogue", url: "https://eshop.faulhaber.com/en/Products", publisher: "Dr. Fritz Faulhaber GmbH & Co. KG", accessed: "2026-09-26" },
    ],
  },

  kollmorgen: {
    name: "Kollmorgen",
    founded: 1916,
    headquarters: "Radford, Virginia, SUA",
    overview: `Kollmorgen este un producător american de servomotoare, motoare pas cu pas și sisteme de mișcare pentru automatizare industrială, cu rădăcini din 1916 la înființarea companiei în New York și sediul actual la Radford, Virginia. Gama include servomotoare rotative de la câțiva Nm până la aplicații de cuplu mare, motoare cadru (frameless) pentru integrare directă în mecanism, motoare pas cu pas și sisteme de acționare directă, plus servodrivere și soluții pentru vehicule autonome de tip AGV. Pentru clienți din România putem oferta din gama Kollmorgen de servomotoare și drivere, aleasă pe cuplu, tensiune de alimentare și tip de mecanic.

Dacă majoritatea brandurilor de motoreductoare sau motoare electrice standard acoperă acționări industriale de uz general, Kollmorgen se concentrează pe mișcare de precizie — seria de servomotoare AKM2G, seria de motoare cadru TBM2G și KBM pentru integrare directă în ax, plus motoarele de acționare directă din familia Cartridge DDR, unde traductorul e integrat în motor și nu mai e nevoie de reductor mecanic separat. Seria AKMH e certificată pentru spălare (washdown), iar seria EP e proiectată pentru zone cu risc de explozie.

Pentru instalații din România cu cerințe de mișcare de precizie ridicată — linii de asamblare, roboți industriali, echipamente pentru industria alimentară cu spălare frecventă — gama Kollmorgen completează motoarele electrice de uz general deja disponibile în portofoliu.`,
    whyChoose: [
      "Servomotoare AKM2G și motoare cadru TBM2G/KBM pentru integrare directă în mecanismul clientului.",
      "Motoare de acționare directă Cartridge DDR, cu traductor integrat, fără reductor mecanic separat.",
      "Motoare pas cu pas seriile PMX și POWERMAX, pentru aplicații de poziționare fără buclă de control complexă.",
      "Variantă AKMH certificată pentru spălare (washdown) și serie EP pentru zone cu risc de explozie.",
    ],
    keyProducts: [
      {
        name: "Servomotoare Seria AKM2G",
        description: "Servomotoare rotative sincrone de generație recentă, gândite pentru densitate mare de cuplu la un volum redus, cu opțiuni multiple de traductor și conectică. Se folosesc ca motor principal pe axele de poziționare ale roboților industriali, mașinilor de asamblare și liniilor de ambalare de mare viteză. Fac parte din familia mai largă AKM, alături de variantele mai vechi de generație. Pentru ofertă, clientul trebuie să transmită cuplul necesar, turația maximă și tipul de traductor cerut de driverul existent.",
      },
      {
        name: "Servodrivere Seria AKD2G",
        description: "Drivere de servoacționare pentru controlul motoarelor din familia AKM, cu suport pentru rețele de automatizare industrială și funcții de siguranță integrate. Sunt gândite pentru cuplare directă cu servomotoarele Kollmorgen, dar acceptă și configurări pentru alte motoare compatibile. Se folosesc în celule robotizate și mașini de ambalare unde e nevoie de sincronizare fină între mai multe axe. Clientul trebuie să indice puterea motorului controlat și protocolul de rețea folosit în instalație.",
      },
      {
        name: "Motoare de Acționare Directă Cartridge DDR",
        description: "Motoare rotative de acționare directă, cu traductorul de poziție integrat în structura motorului, eliminând nevoia unui reductor mecanic separat între motor și sarcină. Sunt potrivite pentru mese rotative, axe de indexare și aplicații unde jocul mecanic al unui reductor ar afecta precizia de poziționare. Pentru configurare, clientul trebuie să precizeze diametrul disponibil, cuplul de sarcină și cerința de precizie a poziționării.",
      },
    ],
    industries: [
      "Robotică industrială — servomotoare de precizie pentru axele roboților",
      "Ambalare și asamblare — motoare cadru și de acționare directă",
      "Industria alimentară — motoare AKMH certificate pentru spălare",
      "Zone cu risc de explozie — motoare seria EP pentru medii periculoase",
    ],
    infinitrade: `Datele tehnice despre seriile Kollmorgen provin din surse publice ale producătorului; niciun fapt propriu despre performanța pe termen lung nu apare în acest text, pentru că nu avem instalații proprii cu aceste motoare. Aducem la comandă servomotoare, drivere și motoare de acționare directă Kollmorgen prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii de către producător. Nu promitem o disponibilitate constantă din fabrică pentru fiecare configurație de motor și driver. Pentru ofertă avem nevoie de cuplul necesar, tensiunea de alimentare, tipul de traductor și protocolul de rețea din instalație.`,
    limitation: "Nu putem confirma compatibilitatea exactă între driverele AKD2G și motoare de la alți producători și nu oferim programare a logicii de control dincolo de parametrii transmiși de client.",
    productCodes: [
      { code: "AKM2G", description: "Servomotor rotativ, densitate mare de cuplu, generație recentă" },
      { code: "AKM", description: "Familie de servomotoare rotative sincrone Kollmorgen" },
      { code: "Goldline", description: "Servomotor din gama istorică Kollmorgen" },
      { code: "EKM", description: "Servomotor rotativ pentru aplicații economice" },
      { code: "TBM2G", description: "Motor cadru (frameless) pentru integrare directă în ax" },
      { code: "KBM", description: "Motor cadru pentru montaj direct fără carcasă proprie" },
      { code: "RBE", description: "Motor cadru pentru aplicații de cuplu ridicat" },
      { code: "Cartridge DDR", description: "Motor de acționare directă cu traductor integrat" },
      { code: "PMX", description: "Motor pas cu pas pentru poziționare simplă" },
      { code: "POWERMAX M", description: "Motor pas cu pas din familia POWERMAX" },
      { code: "POWERMAX P", description: "Motor pas cu pas de putere mai mare" },
      { code: "POWERPAC K", description: "Motor pas cu pas compact POWERPAC" },
      { code: "POWERPAC N", description: "Motor pas cu pas POWERPAC, variantă N" },
      { code: "AKMH", description: "Servomotor certificat pentru spălare (washdown)" },
      { code: "EP Series", description: "Motor certificat pentru zone cu risc de explozie" },
      { code: "AKD2G", description: "Servodriver de generație recentă pentru motoarele AKM" },
      { code: "S700", description: "Servodriver din familia S pentru aplicații complexe" },
      { code: "S300", description: "Servodriver S de gamă medie" },
      { code: "P8000", description: "Driver pentru motoare pas cu pas, familia P" },
      { code: "P6000", description: "Driver pentru motoare pas cu pas, gamă medie" },
    ],
    faq: [
      { q: "Ce produce Kollmorgen?", a: "Kollmorgen produce servomotoare rotative, motoare cadru pentru integrare directă, motoare de acționare directă fără reductor, motoare pas cu pas și servodrivere pentru automatizare industrială. Este un producător american, cu rădăcini din 1916 și sediul actual la Radford, Virginia, specializat în mișcare de precizie pentru roboți și mașini de asamblare." },
      { q: "Cum aleg un servomotor Kollmorgen AKM2G după cod?", a: "Pentru AKM2G trebuie precizate cuplul necesar la arbore, turația maximă de lucru, tensiunea de alimentare disponibilă și tipul de traductor de poziție acceptat de driverul din instalație. Motorul se cuplează de regulă cu un servodriver din familia AKD2G, iar configurația exactă se confirmă împreună cu datele publicate de producător." },
      { q: "Ce este un motor Cartridge DDR de la Kollmorgen și când are sens?", a: "Cartridge DDR este un motor de acționare directă cu traductorul de poziție integrat în structură, fără reductor mecanic separat între motor și sarcină. Are sens la mese rotative sau axe de indexare unde jocul unui reductor clasic ar afecta precizia de poziționare cerută de aplicație." },
      { q: "Livrați motoare Kollmorgen în România?", a: "Aducem la comandă servomotoare, motoare cadru și drivere Kollmorgen prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii cu producătorul, în funcție de seria și configurația exactă solicitate." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Kollmorgen – Home", url: "https://www.kollmorgen.com/en-us/", publisher: "Kollmorgen Corporation", accessed: "2026-09-26" },
      { title: "Products", url: "https://www.kollmorgen.com/en-us/products/", publisher: "Kollmorgen Corporation", accessed: "2026-09-26" },
      { title: "Company History", url: "https://www.kollmorgen.com/en-us/company/history", publisher: "Kollmorgen Corporation", accessed: "2026-09-26" },
    ],
  },

  invertek: {
    name: "Invertek Drives",
    founded: 1998,
    headquarters: "Welshpool, Marea Britanie",
    overview: `Invertek Drives este un producător britanic de convertizoare de frecvență, înființat în 1998, cu sediul la Welshpool, unde compania a obținut recent aprobarea de urbanism pentru un nou centru de inovație și sediu global. Gama Optidrive acoperă de la variatoare de uz general, prin variante dedicate pentru pompe, ventilatoare, HVAC și lifturi, până la drivere de mare performanță pentru compresoare de refrigerare. Pentru clienți din România putem oferta din gama Optidrive, aleasă pe puterea motorului, tensiunea de rețea și aplicația de acționat.

Ce diferențiază gama Optidrive e acoperirea largă de putere cu design compact: seria de bază E3 acoperă 0,37–37 kW la tensiuni de 110–480 V, seria P2 de înaltă performanță merge de la 0,75 la 250 kW la tensiuni de până la 600 V și are protecție IP66/NEMA 4X pentru montaj în exterior, iar seria Coolvert e dedicată compresoarelor BLDC rotative și scroll din refrigerare, cu puteri de 1,5–40 kW. Seria E4 aduce comunicare BACnet integrată din fabrică, utilă pentru instalații HVAC conectate la sistemul de management al clădirii.

Pentru instalații din România unde variatorul trebuie montat direct lângă utilaj, fără dulap suplimentar de protecție — pompe, ventilatoare, lifturi, sisteme de refrigerare — gama Optidrive completează variatoarele industriale de uz general deja disponibile în portofoliu.`,
    whyChoose: [
      "Seria Optidrive E3, putere 0,37–37 kW, tensiuni 110–480 V, cu filtru EMC intern.",
      "Seria Optidrive P2, putere 0,75–250 kW, protecție IP66/NEMA 4X pentru montaj direct lângă utilaj.",
      "Seria Optidrive Coolvert, dedicată compresoarelor BLDC rotative și scroll, putere 1,5–40 kW.",
      "Seria Optidrive Elevator Core, putere 2,2–22 kW, cu recorder de zbor integrat pentru diagnoză.",
      "Fabricație în Marea Britanie, certificare ISO 9001 și ISO 14001, garanție extinsă de până la 5 ani.",
    ],
    keyProducts: [
      {
        name: "Optidrive E3 / E4",
        description: "Convertizoare de frecvență de uz general, cu E3 acoperind 0,37–37 kW la 110–480 V și E4 fiind orientat spre aplicații HVAC cu comunicare BACnet integrată din fabrică pentru puteri de 0,37–4 kW. Ambele oferă control vectorial fără senzor pentru mai multe tipuri de motoare, inclusiv motoare cu magnet permanent și cu reluctanță sincronă. Sunt gândite pentru instalare rapidă, cu doar 14 parametri de bază la comisionare. Clientul trebuie să transmită puterea motorului, tensiunea de rețea și tipul de motor acționat.",
      },
      {
        name: "Optidrive P2",
        description: "Convertizor de frecvență de înaltă performanță, cu putere de la 0,75 la 250 kW și tensiuni de alimentare între 200 și 600 V, cu protecție IP66/NEMA 4X pentru montaj direct pe utilaj, fără dulap suplimentar. Suportă suprasarcină de 150% timp de 60 de secunde, funcție de macara integrată și oprire sigură de cuplu (safe torque off). Se folosește la benzi transportoare, poduri rulante și mașini industriale de putere mare. Pentru ofertă, clientul trebuie să indice puterea motorului și tensiunea de rețea disponibilă.",
      },
      {
        name: "Optidrive Coolvert",
        description: "Convertizor de frecvență dedicat compresoarelor BLDC rotative și scroll din refrigerare, cu putere de 1,5–40 kW și tensiuni de alimentare între 200 și 480 V, monofazat sau trifazat. Este gândit special pentru compresoare de pompe de căldură și instalații frigorifice, unde controlul vectorial trebuie adaptat la caracteristicile specifice ale acestui tip de motor. Clientul trebuie să transmită tipul și puterea compresorului pentru configurarea corectă a variatorului.",
      },
    ],
    industries: [
      "HVAC și climatizare — variatoare pentru ventilatoare și pompe de căldură",
      "Refrigerare — Optidrive Coolvert pentru compresoare BLDC și scroll",
      "Lifturi — Optidrive Elevator Core și Elevator pentru control de mișcare",
      "Apă și ape uzate — variatoare pentru pompe cu funcție anti-blocaj",
    ],
    certifications: ["ISO 9001 — sistem de management al calității pentru fabricația din Marea Britanie", "ISO 14001 — sistem de management de mediu"],
    infinitrade: `Datele despre puterile și tensiunile fiecărei serii Optidrive vin din surse publice ale producătorului — fără date proprii despre performanța în instalații din România, pentru că nu am rulat teste proprii cu aceste variatoare. Aducem la comandă variatoare Optidrive prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii de către producător. Nu promitem o disponibilitate constantă din fabrică pentru fiecare mărime și serie. Pentru ofertă avem nevoie de puterea motorului acționat, tensiunea de rețea, aplicația concretă (pompă, ventilator, lift, compresor) și mediul de montaj.`,
    limitation: "Nu putem confirma parametrii de suprasarcină pentru fiecare mărime individuală din catalog și nu oferim programare avansată a funcțiilor PLC integrate dincolo de setările transmise de client.",
    productCodes: [
      { code: "Optidrive E3", description: "Variator uz general, putere 0,37–37 kW, tensiune 110–480 V" },
      { code: "Optidrive E3 Single Phase", description: "Variantă E3 pentru motoare monofazate" },
      { code: "Optidrive E4", description: "Variator HVAC, putere 0,37–4 kW, comunicare BACnet integrată" },
      { code: "Optidrive P2", description: "Variator de performanță, putere 0,75–250 kW, protecție IP66" },
      { code: "Optidrive Eco HVAC", description: "Variator pentru ventilatoare, putere 0,75–250 kW" },
      { code: "Optidrive Eco Pump", description: "Variator pentru pompe, cu funcție anti-blocaj" },
      { code: "Optidrive Elevator Core", description: "Variator pentru lifturi, putere 2,2–22 kW, cu recorder integrat" },
      { code: "Optidrive Elevator", description: "Variator dedicat sistemelor de lift" },
      { code: "Optidrive Compact 2", description: "Variator compact pentru integrare OEM" },
      { code: "Optidrive Coolvert", description: "Variator pentru compresoare BLDC și scroll, putere 1,5–40 kW" },
    ],
    faq: [
      { q: "Ce produce Invertek Drives?", a: "Invertek Drives produce convertizoare de frecvență (variatoare de turație) sub marca Optidrive, de la variatoare de uz general până la serii dedicate pentru pompe, ventilatoare, HVAC, lifturi și compresoare de refrigerare. Este un producător britanic înființat în 1998, cu sediul la Welshpool." },
      { q: "Cum aleg un variator Optidrive E3 după putere?", a: "Seria E3 acoperă puteri de la 0,37 la 37 kW, la tensiuni de alimentare între 110 și 480 V, cu opțiune monofazată sau trifazată. Alegerea depinde de puterea motorului acționat, tensiunea de rețea disponibilă și tipul de motor — inducție, magnet permanent sau reluctanță sincronă." },
      { q: "Ce echivalent Invertek Drives există pentru un compresor de refrigerare BLDC?", a: "Pentru compresoare BLDC rotative sau scroll, Optidrive Coolvert acoperă puteri de 1,5–40 kW la tensiuni de 200–480 V, monofazat sau trifazat, fiind gândit special pentru caracteristicile acestui tip de compresor, spre deosebire de variatoarele de uz general." },
      { q: "Livrați variatoare Invertek Drives în România?", a: "Aducem la comandă variatoare Optidrive prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii cu producătorul, în funcție de seria și puterea exactă solicitate." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Invertek Drives – Home", url: "https://www.invertekdrives.com/", publisher: "Invertek Drives Ltd", accessed: "2026-09-26" },
      { title: "Optidrive E3", url: "https://www.invertekdrives.com/variable-frequency-drives/optidrive-e3", publisher: "Invertek Drives Ltd", accessed: "2026-09-26" },
      { title: "Optidrive P2", url: "https://www.invertekdrives.com/variable-frequency-drives/optidrive-p2", publisher: "Invertek Drives Ltd", accessed: "2026-09-26" },
      { title: "Optidrive Coolvert", url: "https://www.invertekdrives.com/coolvert", publisher: "Invertek Drives Ltd", accessed: "2026-09-26" },
    ],
  },

  "control-techniques": {
    name: "Control Techniques",
    overview: `Control Techniques este o marcă britanică de convertizoare de frecvență, parte a grupului japonez Nidec, cu gama găzduită astăzi pe platforma comună Nidec Drives. Portofoliul acoperă de la variatoare de uz general din familia Commander, prin seriile de înaltă performanță Unidrive M600/M700/HS70, până la variatoare specializate pentru lifturi, pompe și HVAC și module de putere de mare capacitate pentru aplicații industriale grele. Pentru clienți din România putem oferta din gama Control Techniques, aleasă pe puterea motorului și tipul de aplicație.

Ce diferențiază gama e amploarea acoperirii de putere sub o singură umbrelă de produs: la un capăt sunt variatoarele compacte Commander S și NE200 pentru aplicații simple, iar la celălalt modulul de putere de 500 kW/700 CP pentru instalații industriale de mare capacitate. Seriile specializate — Elevator Drive E300 pentru lifturi, Pump Drive F600 pentru pompe și HVAC Drive H300 pentru climatizare — au funcții dedicate aplicației, spre deosebire de un variator de uz general configurat generic.

Pentru instalații din România cu cerințe specifice de aplicație — lifturi, stații de pompare, sisteme HVAC de clădire — gama Control Techniques oferă o alternativă cu funcții deja adaptate, spre deosebire de configurarea manuală a unui variator generic.`,
    whyChoose: [
      "Gamă largă de putere, de la variatoare compacte Commander până la module de 500 kW pentru aplicații industriale grele.",
      "Serii specializate pe aplicație — lifturi (E300), pompe (F600), HVAC (H300) — cu funcții dedicate din fabrică.",
      "Seria de înaltă performanță Unidrive M700/M600, pentru aplicații cu cerințe ridicate de control de mișcare.",
      "Parte din grupul Nidec, cu acces la o rețea globală de suport tehnic și piese de schimb.",
    ],
    keyProducts: [
      {
        name: "Unidrive M700 / M600",
        description: "Convertizoare de frecvență de înaltă performanță, gândite pentru aplicații cu cerințe ridicate de control de mișcare și sincronizare între axe. Fac parte din familia Unidrive, alături de variantele HS70 de mare viteză și M400/M608 pentru performanță medie. Se folosesc în mașini de ambalare, linii de producție automatizate și aplicații unde precizia buclei de control contează mai mult decât la un variator de uz general. Clientul trebuie să transmită puterea motorului și tipul de control necesar — vectorial, cu sau fără senzor.",
      },
      {
        name: "Elevator Drive E300",
        description: "Convertizor de frecvență dedicat sistemelor de lift, cu funcții specifice de control de mișcare pentru cabină, integrate din fabrică, spre deosebire de un variator de uz general reconfigurat pentru această aplicație. Este gândit pentru instalare de către firme de mentenanță de lifturi și integratori specializați. Pentru ofertă, clientul trebuie să indice puterea motorului de tracțiune și tipul de sistem de control al cabinei.",
      },
      {
        name: "Pump Drive F600 / HVAC Drive H300",
        description: "Variatoare specializate pentru aplicații de pompare și climatizare, cu funcții precum controlul mai multor pompe în cascadă și optimizarea energetică pentru sisteme de ventilație. Se deosebesc de un variator generic prin macrourile de aplicație precablate din fabrică, care reduc timpul de comisionare la punerea în funcțiune. Clientul trebuie să precizeze puterea motorului acționat și tipul de aplicație — pompare sau HVAC.",
      },
    ],
    industries: [
      "Lifturi și transport vertical — Elevator Drive E300 pentru control de cabină",
      "Stații de pompare — Pump Drive F600 cu control de cascadă",
      "HVAC și climatizare de clădiri — HVAC Drive H300",
      "Producție industrială automatizată — seria Unidrive de înaltă performanță",
    ],
    infinitrade: `Seriile și aplicațiile descrise mai sus vin din informațiile publice disponibile pe platforma Nidec Drives, fără date proprii despre instalări din portofoliul nostru cu aceste variatoare. Aducem la comandă variatoare Control Techniques prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii de către producător. Nu promitem o disponibilitate constantă din fabrică pentru fiecare serie și putere. Pentru ofertă avem nevoie de puterea motorului acționat, tipul de aplicație — uz general, lift, pompă sau HVAC — și tensiunea de rețea disponibilă.`,
    limitation: "Nu putem confirma puterile exacte pentru fiecare model din familiile Commander și Unidrive fără consultarea cataloagelor complete și nu oferim programare avansată a macro-urilor de aplicație dincolo de setările transmise de client.",
    productCodes: [
      { code: "Commander S", description: "Variator compact de uz general, aplicații simple" },
      { code: "Commander C", description: "Variator de uz general, gamă medie de putere" },
      { code: "NE200", description: "Variator de gamă medie pentru aplicații industriale" },
      { code: "NE300", description: "Variator de gamă medie, generație mai recentă" },
      { code: "Unidrive HS30", description: "Variator de intrare pentru aplicații de mare viteză" },
      { code: "Unidrive M400", description: "Variator de performanță medie, familia Unidrive" },
      { code: "Unidrive M608", description: "Variator industrial din familia Unidrive" },
      { code: "Unidrive M700", description: "Variator de înaltă performanță, control de mișcare avansat" },
      { code: "Unidrive M600", description: "Variator industrial de înaltă performanță" },
      { code: "Unidrive HS70", description: "Variator de mare viteză, performanță ridicată" },
      { code: "DFS Series", description: "Drivere de mare putere, montaj tip dulap liber-stătător" },
      { code: "Elevator Drive E300", description: "Variator dedicat sistemelor de lift" },
      { code: "Pump Drive F600", description: "Variator dedicat aplicațiilor de pompare" },
      { code: "HVAC Drive H300", description: "Variator dedicat aplicațiilor de climatizare" },
      { code: "Powerdrive F300", description: "Variator pentru aplicații industriale de putere" },
      { code: "KBVF", description: "Variator în configurație șasiu (chassis)" },
      { code: "KBWA", description: "Variator cu carcasă NEMA 1" },
      { code: "KBAC", description: "Variator cu carcasă NEMA 4" },
    ],
    faq: [
      { q: "Ce produce Control Techniques?", a: "Control Techniques produce convertizoare de frecvență pentru motoare electrice, de la variatoare compacte de uz general până la module de putere mare și serii specializate pentru lifturi, pompe și HVAC. Este o marcă britanică, parte a grupului japonez Nidec, cu gama găzduită pe platforma Nidec Drives." },
      { q: "Cum aleg un variator Control Techniques din familia Unidrive?", a: "Alegerea între M400, M600, M700 sau HS70 depinde de puterea motorului, complexitatea buclei de control necesare și viteza maximă de operare cerută de aplicație. Seriile M700 și HS70 sunt gândite pentru aplicații cu cerințe ridicate de sincronizare între axe, spre deosebire de variatoarele de uz general M400." },
      { q: "Ce variator Control Techniques se potrivește unei stații de pompare?", a: "Pentru pompare, Pump Drive F600 include funcții precablate de control al mai multor pompe în cascadă, detectare de blocaj și amorsare, spre deosebire de un variator generic reconfigurat manual pentru aceeași funcție. Alegerea puterii depinde de motorul pompei acționate." },
      { q: "Livrați variatoare Control Techniques în România?", a: "Aducem la comandă variatoare Control Techniques prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii cu producătorul, în funcție de seria și puterea exactă solicitate." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Nidec Drives", url: "https://moen.nidec.com/drives", publisher: "Nidec Corporation", accessed: "2026-09-26" },
      { title: "Control Techniques (redirect to Nidec Drives)", url: "https://www.controltechniques.com", publisher: "Nidec Corporation", accessed: "2026-09-26" },
    ],
  },

  elektrim: {
    name: "Elektrim Motors",
    headquarters: "Elgin, Illinois, SUA",
    overview: `Elektrim Motors este un producător american de motoare electrice AC monofazate și trifazate, cu sediul la Elgin, Illinois, și facilități de producție inclusiv în Polonia, potrivit informațiilor publicate pe site-ul oficial. Marca este o divizie a Toolmex Industrial Solutions și acoperă motoare NEMA și IEC (metrice), de la modele mici de uz general până la unități de mare putere, de până la 6300 CP conform propriei descrieri. Pentru clienți din România putem oferta din gama Elektrim de motoare NEMA și IEC, aleasă pe putere, turație și tip de montaj.

Ce diferențiază gama e acoperirea unor nișe specifice pe lângă motoarele standard: motoare de tip Severe Duty pentru medii petrochimice și rafinării, cu protecție IP55 și carcasă TEFC etanșă la apă și praf, motoare de tip Washdown pentru spălare frecventă, motoare X1 pentru suflante și uscătoare de spălătorii auto, și motoare inoxidabile pentru medii corozive. Motoarele metrice IEC sunt disponibile în montaj B3 (pe picioare), B35 (flanșă D) și B34 (flanșă C), la tensiuni de 230/460 V și 380/400 V.

Pentru instalații din România cu cerințe speciale de mediu — medii corozive, spălare frecventă, aplicații cu porniri dese — gama Elektrim completează motoarele electrice standard deja disponibile în portofoliu, acolo unde o carcasă TEFC obișnuită nu ar rezista în timp.`,
    whyChoose: [
      "Motoare Severe Duty, protecție IP55, carcasă TEFC etanșă, pentru medii petrochimice și rafinării.",
      "Motoare metrice IEC în montaj B3, B35 sau B34, la tensiuni de 230/460 V și 380/400 V.",
      "Motoare Washdown și inoxidabile pentru medii cu spălare frecventă sau risc de coroziune.",
      "Motoare Brake, disponibile în gama de 1–30 CP, cu frână integrată pentru oprire rapidă.",
      "Facilități de producție certificate ISO 9001, cu opțiuni de tensiuni multiple la cerere.",
    ],
    keyProducts: [
      {
        name: "Motoare Severe Duty",
        description: "Motoare trifazate TEFC, cu protecție IP55 etanșă la apă și praf, gândite pentru medii industriale dificile — petrochimie, rafinării, stații de pompare exterioare. Sunt disponibile în tensiune standard, cu opțiune de 575 V sau alte tensiuni la cerere, în mai multe mărimi de carcasă NEMA. Se montează pe pompe, transportoare și ventilatoare expuse la praf sau umiditate. Pentru ofertă, clientul trebuie să indice puterea necesară, turația și mărimea carcasei existente.",
      },
      {
        name: "Motoare Metrice IEC",
        description: "Motoare trifazate TEFC cu protecție IP55, în standard metric IEC, disponibile în montaj B3 pe picioare, B35 cu flanșă D sau B34 cu flanșă C. Tensiunile de fabrică sunt 230/460 V la 60 Hz și 380/400 V la 50 Hz, cu alte tensiuni disponibile la cerere. Sunt gândite ca înlocuitor direct pentru motoare metrice existente în instalații industriale europene. Clientul trebuie să transmită puterea, turația, tipul de montaj și frecvența de rețea.",
      },
      {
        name: "Motoare Brake (cu Frână Integrată)",
        description: "Motoare trifazate cu frână electromagnetică integrată, disponibile în gama de 1 până la 30 CP, pentru aplicații unde oprirea rapidă și menținerea poziției la oprire sunt esențiale — transportoare înclinate, macarale mici, uși industriale. Vin în variante cu tensiune standard sau 575 V. Pentru selecție, clientul trebuie să precizeze puterea necesară, turația și tipul de frână cerut de aplicație.",
      },
    ],
    industries: [
      "Petrochimie și rafinării — motoare Severe Duty rezistente la praf și umiditate",
      "Spălătorii auto — motoare X1 pentru suflante și uscătoare",
      "Industrie alimentară — motoare Washdown pentru spălare frecventă",
      "Manipulare și transport — motoare Brake pentru oprire rapidă și menținerea poziției",
    ],
    certifications: ["ISO 9001 — sistem de management al calității pentru facilitățile de producție"],
    infinitrade: `Gama de motoare, tensiuni și montaje de mai sus vine din informațiile publice disponibile pe site-ul producătorului, fără date proprii de utilizare a motoarelor Elektrim în instalații din România. Aducem la comandă motoare Elektrim prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii de către producător. Nu promitem o disponibilitate constantă din fabrică pentru fiecare combinație de putere și tensiune. Pentru ofertă avem nevoie de puterea necesară, turația, tipul de montaj (B3, B35, B34) și tensiunea de rețea din instalație.`,
    limitation: "Nu putem confirma disponibilitatea fiecărei combinații exacte de tensiune și frână din portofoliu fără verificare directă la producător și nu oferim recondiționare a motoarelor existente.",
    productCodes: [
      { code: "60NCS-3-1.5-36", description: "Motor Severe Duty TEFC, carcasă 36, IP55" },
      { code: "60NFS-3-1-18/575", description: "Motor Severe Duty, tensiune 575 V, carcasă 18" },
      { code: "20NCB-3-1-18", description: "Motor Brake, carcasă 18, cu frână integrată" },
      { code: "20NFB-3-1.5-36/575", description: "Motor Brake, tensiune 575 V, carcasă 36" },
      { code: "20MDM-3-1-36P", description: "Motor Premium Efficient, carcasă 36P" },
      { code: "38CR-3-1-36PA", description: "Motor Premium Efficient, carcasă 36PA" },
      { code: "79F-3-1-36", description: "Motor Premium Efficient, carcasă 79F" },
      { code: "20MCM-3-1-18P", description: "Motor Premium Efficient, carcasă 18P" },
      { code: "39CF-3-1-18P", description: "Motor Premium Efficient, carcasă 39CF" },
      { code: "X1 Series Blower Motors", description: "Motoare pentru suflante de spălătorii auto, carcasă aluminiu" },
      { code: "X1 Series Vacuum Motors", description: "Motoare pentru aspiratoare industriale de spălătorii auto" },
      { code: "Metric IEC Motors", description: "Motoare metrice, montaj B3/B35/B34, până la 4000 CP la cerere" },
      { code: "Close Coupled Pump Motors", description: "Motoare pentru pompe cu cuplare directă" },
      { code: "Stainless Steel Motors", description: "Motoare cu carcasă inoxidabilă pentru medii corozive" },
    ],
    faq: [
      { q: "Ce produce Elektrim Motors?", a: "Elektrim Motors produce motoare electrice AC monofazate și trifazate, în standard NEMA și IEC metric, de la modele de uz general până la unități de mare putere. Este o marcă americană cu sediul la Elgin, Illinois, și facilități de producție inclusiv în Polonia, parte din Toolmex Industrial Solutions." },
      { q: "Cum aleg un motor Elektrim Motors din gama Severe Duty după cod?", a: "Codul indică de regulă mărimea carcasei și tensiunea — de exemplu sufixul /575 arată o variantă de 575 V. Pentru alegerea corectă trebuie precizate puterea necesară, turația, mărimea carcasei existente și tensiunea de rețea, iar noi confirmăm disponibilitatea exactă cu producătorul înainte de ofertă." },
      { q: "Ce motor Elektrim se potrivește unei instalații europene cu montaj pe flanșă?", a: "Pentru montaj pe flanșă, gama de motoare metrice IEC oferă variante B35 cu flanșă D sau B34 cu flanșă C, la tensiuni de 230/460 V sau 380/400 V, ca înlocuitor direct pentru motoare metrice deja instalate în linia de producție." },
      { q: "Livrați motoare Elektrim în România?", a: "Aducem la comandă motoare Elektrim prin canale de aprovizionare din UE, cu un termen orientativ de 2–6 săptămâni de la confirmarea comenzii cu producătorul, în funcție de puterea și tensiunea exactă solicitate." },
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-26",
    changelog: [{ date: "2026-09-26", note: "pagină publicată; date verificate în sursele citate" }],
    sources: [
      { title: "Elektrim Motors – Home", url: "https://www.elektrimmotors.com/", publisher: "Elektrim Motors (Toolmex Industrial Solutions)", accessed: "2026-09-26" },
      { title: "Severe Duty Motors", url: "https://www.elektrimmotors.com/db-productlines/severe-duty-motors", publisher: "Elektrim Motors (Toolmex Industrial Solutions)", accessed: "2026-09-26" },
      { title: "Metric IEC Motors", url: "https://www.elektrimmotors.com/db-productlines/metric-iec-motors", publisher: "Elektrim Motors (Toolmex Industrial Solutions)", accessed: "2026-09-26" },
      { title: "Brake Motors", url: "https://www.elektrimmotors.com/db-productlines/brake-motors", publisher: "Elektrim Motors (Toolmex Industrial Solutions)", accessed: "2026-09-26" },
    ],
  },
};
