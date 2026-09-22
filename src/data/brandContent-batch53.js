// Batch 53 - Branduri-500 val 1 (sept. 2026): ReeR, Gimatic, GMN, Rollon, Nord-Lock, SGB-SMIT, UFI Filters, Dosatron, EWM, Kemppi, GW Instek, Vaisala.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed` (plus Wikipedia pentru anul fondării la Kemppi și Vaisala, unde site-ul oficial nu-l indică direct).
export const brandContentBatch53 = {
  'reer': {
    name: "ReeR",
    founded: 1959,
    headquarters: "Torino, Italia",
    overview: `ReeR este un producător italian din Torino, activ din 1959, specializat în senzori optoelectronici de siguranță pentru protecția mașinilor și a liniilor industriale. Divizia Sicurezza acoperă bariere fotoelectrice și cortine de lumină, controlere și interfețe de siguranță, dispozitive de protecție și cortine de măsurare optică, folosite acolo unde o mașină trebuie oprită automat când un operator ajunge într-o zonă periculoasă. Din gama ReeR putem oferta produse pentru integratori și utilizatori finali care au nevoie de sisteme de protecție optoelectronică pentru mașini industriale.

ReeR concurează pe acest segment cu nume precum Pilz, dar rămâne o companie de dimensiune medie, concentrată aproape exclusiv pe cortine de lumină și controlere de siguranță, spre deosebire de portofoliile mult mai largi de automatizare ale unor concurenți generaliști. Compania operează și o a doua divizie, dedicată iluminatului profesional și becurilor în miniatură, complet separată de linia de siguranță industrială — un indiciu că inginerie optică aplicată există în firmă dincolo de senzorii de siguranță.

Pentru un integrator sau un utilizator final din România care proiectează protecția perimetrală a unei linii sau a unei mașini periculoase, gama ReeR e o opțiune de analizat alături de alte mărci de senzori de siguranță, mai ales la retrofit-uri unde trebuie înlocuit un senzor optoelectronic existent cu unul echivalent funcțional.`,
    whyChoose: [
      "Divizie dedicată exclusiv siguranței mașinilor, cu bariere fotoelectrice, cortine de lumină și controlere integrate în aceeași gamă",
      "Prezență italiană continuă din 1959, cu sediu și activitate concentrate în zona Torino",
      "Portofoliu care acoperă atât protecția perimetrală prin cortine de lumină, cât și cortine de măsurare optică pentru control dimensional",
      "Companie de dimensiune medie și specializată, cu cicluri de decizie mai scurte pentru cereri tehnice punctuale",
      "A doua divizie, de iluminat profesional, confirmă o cultură de inginerie optică aplicată dincolo de siguranța industrială"
    ],
    keyProducts: [
      {
        name: "Bariere Fotoelectrice și Cortine de Lumină de Siguranță",
        description: "Senzori optoelectronici montați la punctele de acces ale unei mașini sau la perimetrul unei linii, care opresc automat echipamentul când fasciculul e întrerupt de un operator sau de un obiect. Se integrează cu controlerele de siguranță din aceeași gamă pentru a forma un circuit complet de oprire de urgență. Site-ul producătorului nu detaliază pe pagina generală distanțele de detecție sau clasele de siguranță (categorie, PL) pentru fiecare model; pentru o ofertă corectă avem nevoie de înălțimea zonei de protejat, distanța minimă de montaj și categoria de siguranță cerută de analiza de risc a mașinii."
      },
      {
        name: "Controlere și Interfețe de Siguranță",
        description: "Module electronice care preiau semnalul de la barierele fotoelectrice sau de la alte dispozitive de protecție și comandă oprirea sigură a mașinii, de regulă prin integrare cu circuitul de siguranță al automatului programabil. Sunt gândite să funcționeze împreună cu senzorii din gama Sicurezza, nu ca piese universale de interfațare. Pentru o selecție corectă, clientul trebuie să indice tipul de senzor cu care trebuie să comunice controlerul și tensiunea de alimentare disponibilă pe mașină."
      },
      {
        name: "Cortine de Măsurare Optică",
        description: "Spre deosebire de cortinele de siguranță, care opresc mașina, această gamă servește la măsurare și poziționare — detectarea prezenței sau poziției unei piese pe o linie, fără funcție de oprire de urgență. Parametrii exacți de rezoluție nu apar pe pagina generală a producătorului, așa că avem nevoie de aplicația concretă pentru a recomanda modelul potrivit."
      }
    ],
    industries: [
      "Automatizare industrială — protecția punctelor periculoase la mașini-unelte și linii de asamblare",
      "Construcția de mașini — integrarea barierelor de siguranță încă din faza de proiectare a utilajului",
      "Industria auto — perimetre de siguranță la celule robotizate",
      "Ambalare și paletizare — oprirea automată a liniei la intrarea unui operator în zona de lucru"
    ],
    infinitrade: `Pentru ReeR lucrăm strict cu informațiile publice de pe site-ul producătorului și spunem clar ce putem și ce nu putem confirma: fără date proprii despre stocul din depozitele ReeR sau despre termenele reale de producție din Torino. Aducem senzori și module din gama Sicurezza la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de codul exact al produsului sau al referinței pe care o înlocuiți, tensiunea de alimentare și tipul de interfață de siguranță cu care trebuie să comunice noul senzor. Nu promitem disponibilitate permanentă din stoc pentru această gamă, tocmai pentru că vine dintr-o linie de siguranță unde configurația corectă contează mai mult decât viteza de livrare.`,
    limitation: "Nu putem confirma certificările complete de produs (categorie, PL) sau suportul tehnic pentru integrarea într-un circuit de siguranță deja existent în fabrică, dincolo de furnizarea echipamentului.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "ReeR — Safety and Lighting (Homepage)", url: "https://www.reer.it/en/", publisher: "ReeR S.p.A.", accessed: "2026-09-22" },
      { title: "ReeR — Safety Division (Sicurezza)", url: "https://www.reer.it/en/safety/", publisher: "ReeR S.p.A.", accessed: "2026-09-22" },
    ],
  },

  'gimatic': {
    name: "Gimatic",
    overview: `Gimatic este un producător italian de componente pentru automatizare industrială, cu accent pe prinderea și manipularea pieselor la capătul brațelor robotizate. Gama include gripere electrice unghiulare din seria MPBM, gripere electrice radiale din seria MPRM, module pneumatice culisante din seria ZV și suporturi de prindere precum MFI-A272, alături de o linie proprie de componente de vid. Din portofoliul Gimatic putem oferta atât gripere individuale, cât și componente de vid pentru celule robotizate.

Spre deosebire de furnizorii axați exclusiv pe vid, precum Vuototecnica, Gimatic acoperă în paralel griparea mecanică — electrică și pneumatică — și tehnologia de vid, ceea ce simplifică alegerea când o celulă robotizată combină ambele principii de prindere. Griperele electrice din seriile MPBM și MPRM rămân închise fără consum electric în starea de prindere și nu necesită programare suplimentară, păstrând piesa prinsă chiar și la o eventuală întrerupere de curent — un argument relevant pentru linii unde o cădere de tensiune nu trebuie să însemne și scăparea piesei manipulate.

Pentru integratorii din România care montează celule de sortare, debavurare sau injecție de mase plastice, gama Gimatic e o opțiune pentru componenta finală de prindere a robotului, acolo unde trebuie alese cursa, forța de strângere și interfața mecanică potrivite piesei manipulate.`,
    whyChoose: [
      "Gripere electrice MPBM și MPRM care rămân închise fără curent electric, utile la linii unde o cădere de tensiune nu trebuie să elibereze piesa",
      "Portofoliu care acoperă atât prinderea mecanică (pneumatică și electrică), cât și componentele de vid, sub aceeași marcă",
      "Module pneumatice culisante din seria ZV, cu ghidaj cu bile recirculante, pentru mișcări liniare precise la capătul brațului robotic",
      "Suporturi reglabile precum MFI-A272, cu unghi ajustabil continuu, pentru poziționarea fină a lamei sau a griperului pe robot",
      "Griperele electrice nu necesită programare suplimentară, ceea ce scurtează timpul de punere în funcțiune a unei celule noi"
    ],
    keyProducts: [
      {
        name: "Gripere Electrice Unghiulare Seria MPBM",
        description: "Gripere acționate electric, cu deschidere unghiulară, care nu consumă energie în starea de prindere și nu necesită o programare separată pentru funcționare — piesa rămâne prinsă chiar dacă mașina pierde alimentarea. Folosite la prinderea și extragerea pieselor din matriță în injecția de mase plastice sau la manipularea semifabricatelor în debavurare. Pentru ofertă avem nevoie de cursa de deschidere, forța de strângere necesară și tipul de interfață de montaj pe robot."
      },
      {
        name: "Gripere Electrice Radiale Seria MPRM",
        description: "Variantă radială a acelorași gripere electrice, cu fălcile deschizându-se pe direcție paralelă cu axa griperului, potrivită acolo unde geometria piesei sau spațiul disponibil în celulă nu permit deschiderea unghiulară. Păstrează aceleași avantaje de funcționare fără programare și fără consum electric la prindere. Selecția corectă depinde de dimensiunea și greutatea piesei manipulate."
      },
      {
        name: "Module Pneumatice Culisante Seria ZV",
        description: "Slide-uri pneumatice cu ghidaj cu bile recirculante și dublă acționare, folosite pentru mișcări liniare de scurtă cursă la capătul brațului robotic — de exemplu pentru a apropia sau retrage un grippers dintr-o zonă îngustă. Se montează de obicei împreună cu un gripper sau un suport de lamă din aceeași gamă. Pentru ofertă avem nevoie de cursa necesară și presiunea de aer disponibilă în instalație."
      },
      {
        name: "Componente de Vid",
        description: "Linie separată de componente pentru prindere prin vid, prezentată de producător drept gama nouă din portofoliu, complementară griperelor mecanice pentru aplicații unde piesa nu permite o prindere mecanică clasică — de exemplu cutii, folii sau plăci. Avem nevoie de tipul de suprafață și greutatea piesei pentru a recomanda soluția potrivită."
      }
    ],
    industries: [
      "Automatizare industrială — prinderea și manipularea pieselor la capătul brațului robotic",
      "Injecție de mase plastice — extragerea automată a pieselor din matriță",
      "Prelucrare prin așchiere — îndepărtarea bavurilor și manipularea semifabricatelor",
      "Ambalare și paletizare — prindere prin vid pentru cutii sau folii"
    ],
    infinitrade: `Pentru Gimatic ne bazăm exclusiv pe informațiile publice de pe site-ul producătorului, fără date proprii despre stocul din fabrica italiană sau despre termenele lor interne de producție. Furnizăm gripere și componente de vid din gama Gimatic la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Ca să pregătim o ofertă corectă, avem nevoie de seria exactă a griperului sau modulului — MPBM, MPRM, ZV sau altă referință —, cursa ori forța necesară și interfața de montaj pe robot. Nu putem promite disponibilitate permanentă din stoc pentru fiecare referință din această gamă amplă de componente.`,
    limitation: "Nu putem confirma parametrii tehnici exacți — curse, forțe, diametre — pentru fiecare variantă din gama de gripere sau componente de vid fără specificația de comandă a clientului.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Gimatic — Gripping and Vacuum Technology (Homepage)", url: "https://www.gimatic.com", publisher: "Gimatic S.r.l.", accessed: "2026-09-22" },
      { title: "Gimatic — Product Range: MPBM, MPRM, ZV, Vacuum Components", url: "https://www.gimatic.com", publisher: "Gimatic S.r.l.", accessed: "2026-09-22" },
    ],
  },

  'gmn': {
    name: "GMN",
    founded: 1908,
    headquarters: "Nürnberg, Germania",
    overview: `GMN este un producător german de componente de precizie pentru mașini-unelte de mare viteză, cu sediul la Nürnberg și activitate neîntreruptă din 1908, când a pornit ca atelier mecanic Georg Müller Nürnberg. Astăzi face parte din grupul familial Paul Müller Industrie, ajuns la a patra generație. Din gama GMN putem oferta rulmenți cu bile de precizie, spindle-uri de șlefuit și frezat, cuplaje cu roată liberă de tip sprag și etanșări fără contact, componente esențiale pentru arborii principali ai mașinilor de prelucrare.

Spre deosebire de producătorii generaliști de rulmenți, precum FAG Schaeffler, GMN se concentrează pe segmentul de precizie și turație mare, unde spindle-ul complet — nu doar rulmentul izolat — face diferența de performanță la o mașină de șlefuit sau de frezat. Gama de etanșări fără contact e împărțită pe serii — CF, L/M și S/SA —, fiecare gândită pentru un tip diferit de aplicație de etanșare la turații mari, iar cuplajele cu roată liberă permit transmiterea mișcării într-un singur sens, utile la sisteme de indexare sau la protecția motorului împotriva rulării inverse.

Pentru ateliere de prelucrare din România care întrețin mașini de șlefuit sau de frezat de mare viteză, componentele GMN sunt relevante mai ales la înlocuirea spindle-urilor sau rulmenților uzați, unde compatibilitatea dimensională cu arborele existent contează cel mai mult.`,
    whyChoose: [
      "Continuitate de peste un secol în producția de componente de precizie pentru arbori principali, din 1908 până azi",
      "Gamă completă de etanșări fără contact pe serii CF, L/M și S/SA, pentru turații mari fără frecare suplimentară",
      "Cuplaje cu roată liberă de tip sprag, pentru transmiterea mișcării într-un singur sens la sisteme de indexare",
      "Parte din grupul familial Paul Müller Industrie, cu inginerie proprie de spindle, nu doar de rulment cumpărat din altă parte",
      "Portofoliu care acoperă atât rulmentul individual, cât și spindle-ul complet de șlefuit sau frezat"
    ],
    keyProducts: [
      {
        name: "Rulmenți cu Bile de Precizie",
        description: "Rulmenți standard și speciali, inclusiv variante de siguranță, gândiți pentru turații mari și precizie de rotație ridicată în arborii principali ai mașinilor-unelte. Se folosesc atât ca piese individuale de schimb la spindle-uri existente, cât și integrați în spindle-urile complete GMN. Pentru ofertă avem nevoie de dimensiunile exacte ale rulmentului sau ale arborelui pe care se montează și clasa de precizie cerută."
      },
      {
        name: "Spindle-uri de Șlefuit și Frezat",
        description: "Unități complete de arbore principal pentru mașini de rectificat sau de frezat de mare viteză, care integrează rulmenții, etanșările și, după caz, motorul electric de antrenare într-un singur ansamblu. Alegerea unui spindle depinde de turația maximă necesară și de modelul mașinii pe care se montează, informații pe care le cerem clientului înainte de a pregăti o ofertă."
      },
      {
        name: "Cuplaje cu Roată Liberă (Sprag)",
        description: "Cuplaje care transmit mișcarea de rotație într-un singur sens, blocând rotația inversă — folosite la sisteme de indexare, la protecția unui motor împotriva rulării înapoi sau la mecanisme unde piesa antrenată nu trebuie să se întoarcă la oprirea motorului. Dimensionarea corectă depinde de cuplul transmis și de turația de lucru a aplicației."
      },
      {
        name: "Etanșări Fără Contact Seriile CF, L/M, S/SA",
        description: "Etanșări care nu ating fizic arborele în mișcare, eliminând uzura prin frecare specifică etanșărilor de contact clasice, potrivite la turații mari unde o garnitură obișnuită s-ar încălzi sau uza rapid. Cele trei serii acoperă geometrii și cerințe de etanșare diferite; selecția corectă depinde de diametrul arborelui și de mediul de lucru (praf, lichid de răcire, ulei)."
      },
      {
        name: "Motoare Electrice de Mare Viteză",
        description: "Motoare dedicate antrenării directe a spindle-urilor de mare turație, integrate în ansamblul de arbore principal la varianta de spindle motorizat complet."
      }
    ],
    industries: [
      "Prelucrare prin așchiere — arbori principali pentru mașini de frezat și strunjit",
      "Șlefuire de precizie — spindle-uri dedicate operațiilor de rectificare",
      "Foraj de precizie — componente pentru capete de găurire de mare viteză",
      "Aplicații de vid — etanșări și rulmenți pentru echipamente de vacuum"
    ],
    infinitrade: `Lucrăm cu gama GMN pe baza informațiilor publicate de producător pe site-ul oficial, fără acces la date proprii despre stocul din Nürnberg sau la termenele reale de fabricație ale unui spindle personalizat. Aducem rulmenți, cuplaje, etanșări și spindle-uri GMN la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni din momentul confirmării comenzii. Pentru o ofertă utilizabilă, avem nevoie de dimensiunile arborelui existent, turația de lucru și, dacă e vorba de un spindle complet, modelul mașinii pe care se montează. Fiind componente de precizie, nu păstrăm stoc pe fiecare variantă și nu putem asigura termene mai scurte decât cele indicate de producător pentru piesele configurate special.`,
    limitation: "Nu putem confirma toleranțele exacte sau clasa de precizie a unui rulment fără codul complet de comandă transmis de client.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "GMN Paul Müller Industrie — Homepage", url: "https://www.gmn.de/en/", publisher: "GMN Paul Müller Industrie GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "GMN — Company History and Profile", url: "https://www.gmn.de/en/company/", publisher: "GMN Paul Müller Industrie GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  'rollon': {
    name: "Rollon",
    founded: 1975,
    headquarters: "Vimercate, Italia",
    overview: `Rollon este un producător italian de sisteme de mișcare liniară, fondat în 1975 de inginerul Pino Sacheli la Sesto San Giovanni și mutat, în 2001, cu sediul italian la Vimercate, lângă Milano. Din 2018 face parte din grupul american The Timken Company, alături de alte mărci de mișcare liniară precum Nadella sau Durbal. Din gama Rollon putem oferta ghidaje liniare, șine telescopice, actuatoare liniare, sisteme multi-axe și șuruburi cu bile din seriile XP, XL și XT, pentru aplicații unde piesele trebuie deplasate precis pe o cursă liniară.

Spre deosebire de Bosch Rexroth, care acoperă întreaga gamă de automatizare hidraulică și electrică, Rollon rămâne concentrat pe mișcarea liniară — ghidaje, șine telescopice și actuatoare —, cu variante dedicate pentru sarcini mari în seria XL Xtrem Load, poziționare de precizie în seria XP Xtrem Position sau transport în seria XT Xtrem Transport. Compania operează în 11 țări, cu 14 unități de producție, ceea ce înseamnă acces la mai multe linii de fabricație pentru aceeași familie de produse, nu doar la o singură fabrică centrală.

Pentru linii de automatizare sau depozitare din România, gama Rollon e relevantă la sisteme de extindere telescopică — sertare industriale, platforme de acces — și la axele liniare din celule robotizate, acolo unde greutatea sau cursa depășesc ce oferă un ghidaj liniar standard.`,
    whyChoose: [
      "Peste 50 de ani de specializare exclusivă pe sisteme de mișcare liniară, din 1975 până azi",
      "Trei familii de șuruburi cu bile — XP pentru poziționare, XL pentru sarcini mari, XT pentru transport — pentru cerințe diferite pe aceeași platformă mecanică",
      "14 unități de producție în 11 țări, prin apartenența la grupul Timken",
      "Portofoliu extins prin achizițiile Nadella și Durbal, cu acces la tehnologii complementare de mișcare liniară",
      "Șine telescopice folosite atât la sertare industriale, cât și la sisteme de acces pentru mentenanță"
    ],
    keyProducts: [
      {
        name: "Ghidaje Liniare",
        description: "Sisteme de ghidare pentru mișcare liniară pe un singur ax, folosite la poziționarea preciselor sarcini în mașini industriale, linii de asamblare sau echipamente de manipulare. Alegerea variantei potrivite depinde de sarcina de susținut, cursa necesară și mediul de lucru (praf, umiditate, temperatură)."
      },
      {
        name: "Șine Telescopice",
        description: "Sisteme de extindere telescopică folosite la sertare industriale, platforme de acces pentru mentenanță sau mecanisme de tragere/împingere unde spațiul de lucru trebuie extins temporar dincolo de gabaritul static al echipamentului. Capacitatea de sarcină și numărul de segmente de extensie variază în funcție de aplicație."
      },
      {
        name: "Actuatoare Liniare și Sisteme Multi-Axe",
        description: "Module motorizate de mișcare liniară, disponibile și în configurații multi-axe pentru deplasarea unei sarcini pe mai multe direcții simultan — folosite la unități de transfer pentru roboți sau la stații de poziționare automatizată. Pentru ofertă avem nevoie de cursa pe fiecare ax, sarcina transportată și viteza de deplasare dorită."
      },
      {
        name: "Șuruburi cu Bile Seriile XP, XL, XT",
        description: "Trei familii de șuruburi cu bile gândite pentru cerințe diferite: XP Xtrem Position pentru repetabilitate mare de poziționare, XL Xtrem Load pentru sarcini radiale sau axiale ridicate, și XT Xtrem Transport pentru viteze mari de deplasare pe curse lungi. Selecția depinde de combinația specifică sarcină-viteză-precizie a aplicației."
      }
    ],
    industries: [
      "Aerospațial — sisteme de mișcare liniară pentru echipamente la bord",
      "Electronică — poziționare de precizie în linii de asamblare",
      "Robotică și automatizare — axe liniare pentru celule robotizate",
      "Manipulare materiale — șine telescopice pentru sertare și platforme de acces",
      "Calea ferată — componente de mișcare liniară pentru echipamente feroviare"
    ],
    infinitrade: `Pentru Rollon ne ghidăm după informațiile publicate pe site-ul global al producătorului și pe pagina americană a companiei, fără vizibilitate proprie asupra stocului din fabricile din Italia sau din celelalte țări unde Rollon produce. Livrăm ghidaje, șine telescopice și șuruburi cu bile din gama Rollon la comandă, prin canale de aprovizionare din Uniunea Europeană, iar termenul orientativ este de 2-6 săptămâni de la confirmare. Pentru a pregăti o ofertă, avem nevoie de seria exactă — XP, XL sau XT —, cursa necesară și sarcina pe care trebuie să o susțină sistemul. Nu putem promite disponibilitate permanentă din stoc pentru fiecare lungime sau variantă din această gamă.`,
    limitation: "Nu putem confirma compatibilitatea unui ghidaj sau a unei șine telescopice cu un sistem existent fără desenul tehnic sau codul complet transmis de client.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Rollon — Linear Motion Systems (Homepage)", url: "https://www.rollon.com/", publisher: "Rollon S.p.A.", accessed: "2026-09-22" },
      { title: "Rollon USA — About Us", url: "https://www.rollon.com/usa/en/about-us/", publisher: "Rollon S.p.A. / The Timken Company", accessed: "2026-09-22" },
    ],
  },

  'nord-lock': {
    name: "Nord-Lock",
    overview: `Nord-Lock Group este un grup de origine suedeză specializat exclusiv în fixarea sigură a îmbinărilor cu șurub, prin patru tehnologii de brand: șaibele Nord-Lock, sistemele de tensionare Superbolt, sistemul hidraulic Boltight și Expander System. Din portofoliul grupului putem oferta în principal gama de șaibe Nord-Lock, folosite acolo unde o îmbinare cu șurub e supusă la vibrații sau șocuri dinamice și nu își poate permite să se desfacă singură în timp.

Diferența față de o șaibă de asigurare obișnuită sau față de un adeziv pentru filet e că gama Nord-Lock adună sub aceeași umbrelă patru abordări diferite ale aceleiași probleme — de la șaiba individuală, până la sisteme de tensionare controlată pentru șuruburi mari, folosite la flanșe sau la asamblări industriale grele. Grupul e prezent, prin distribuție și producție, în zeci de țări (printre care SUA, Marea Britanie, Germania, Franța, Suedia, Australia, Japonia, China, India și Brazilia), ceea ce înseamnă acces relativ ușor la documentație tehnică pentru oricare din cele patru branduri.

Pentru mentenanța industrială din România, gama Nord-Lock are sens mai ales la reasamblarea flanșelor și îmbinărilor supuse la vibrații — pompe, compresoare, utilaje grele — unde o șaibă obișnuită s-a dovedit insuficientă în timp.`,
    whyChoose: [
      "Patru tehnologii de brand distincte — Nord-Lock, Superbolt, Boltight, Expander System — pentru fixarea sigură a șuruburilor, sub același grup",
      "Soluție dedicată special problemei de desfacere a șuruburilor la vibrații, nu un accesoriu generic de fixare",
      "Sistemele Superbolt și Boltight se adresează șuruburilor mari, la flanșe și asamblări industriale grele",
      "Prezență prin distribuție și producție în zeci de țări, utilă pentru continuitatea aprovizionării cu piese din aceeași gamă"
    ],
    keyProducts: [
      {
        name: "Șaibe de Asigurare Nord-Lock",
        description: "Șaiba de bază a grupului, gândită pentru îmbinări cu șurub expuse la vibrații sau șocuri, unde o șaibă simplă sau un inel elastic nu mai țin strângerea în timp. Pagina generală a grupului nu detaliază pe secțiunea principală toleranțele sau diametrele exacte disponibile; pentru o selecție corectă, clientul trebuie să ne indice diametrul șurubului, clasa de rezistență și tipul de vibrație la care e expusă îmbinarea."
      },
      {
        name: "Sistem de Tensionare Superbolt",
        description: "Sistem alternativ la strângerea clasică cu cheie dinamometrică a șuruburilor mari, folosit la flanșe și asamblări grele unde cuplul necesar ar fi greu de aplicat uniform manual. Ca și la șaibele Nord-Lock, pagina generală a grupului nu oferă parametri tehnici expliciți; pentru o ofertă avem nevoie de diametrul șurubului existent și de aplicația — flanșă, cuplaj, fundație — unde se montează sistemul."
      },
      {
        name: "Sistem Hidraulic Boltight",
        description: "Tehnologie de tensionare hidraulică a șuruburilor mari, gândită pentru situații unde strângerea trebuie controlată precis și repetabil, fără dependența de forța fizică a operatorului. Se adresează aceluiași tip de aplicații industriale grele ca sistemul Superbolt, dar printr-un principiu hidraulic în loc de mecanic."
      },
      {
        name: "Expander System",
        description: "A patra tehnologie din portofoliul grupului, dedicată tot fixării sigure a îmbinărilor cu șurub, complementară celorlalte trei branduri. Pentru fiecare cerere legată de Expander System avem nevoie de aplicația exactă pentru a stabili dacă soluția se potrivește proiectului clientului."
      }
    ],
    industries: [
      "Energie și petrochimie — flanșe și asamblări supuse la vibrații și presiune",
      "Industria grea — șuruburi mari la utilaje și fundații",
      "Mentenanță industrială — înlocuirea sistemelor de fixare care s-au desprins în timp",
      "Construcția de mașini — îmbinări cu șurub în subansamble vibrante"
    ],
    infinitrade: `Pentru Nord-Lock Group lucrăm cu informația publică de pe pagina grupului, fără acces la cataloage tehnice complete sau la stocul real al fiecărui brand din portofoliu — Nord-Lock, Superbolt, Boltight, Expander System. Comandăm pentru client produse din acest portofoliu, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă, avem nevoie de diametrul șurubului, aplicația exactă — flanșă, fundație, cuplaj — și, dacă există, codul de referință al piesei pe care o înlocuiește. Nu promitem disponibilitate permanentă din stoc pentru vreuna din cele patru tehnologii ale grupului.`,
    limitation: "Nu putem confirma parametrii tehnici — cupluri, diametre, toleranțe — pentru niciuna din cele patru tehnologii fără fișa de produs specifică de la producător.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Nord-Lock Group — Secure Bolting Solutions (Homepage)", url: "https://www.nord-lock.com", publisher: "Nord-Lock Group", accessed: "2026-09-22" },
      { title: "Nord-Lock Group — Brands: Nord-Lock, Superbolt, Boltight, Expander System", url: "https://www.nord-lock.com", publisher: "Nord-Lock Group", accessed: "2026-09-22" },
    ],
  },

  'sgb-smit': {
    name: "SGB-SMIT",
    founded: 1913,
    headquarters: "Regensburg, Germania",
    overview: `SGB-SMIT este un producător german de transformatoare electrice, cu sediul la Regensburg și activitate din 1913. Grupul acoperă toată plaja de puteri: transformatoare de mare putere de până la 765 kV (produse la Nijmegen, în Olanda), transformatoare de putere medie, transformatoare de distribuție în ulei între 50 și 2.500 kVA, transformatoare uscate în rășină turnată de până la 25 MVA la 40,5 kV, precum și stații compacte prefabricate din seriile LCS-E, NDV400/401 și NDV1600/2500.

Spre deosebire de un furnizor axat pe un singur tip de transformator, SGB-SMIT acoperă simultan segmentul de putere mare, cel de distribuție și cel uscat, cu fabrici în Germania, Olanda, SUA, Malaysia, India, China, Cehia și Franța. Gama de transformatoare de distribuție în ulei, cu peste 60 de ani de experiență de fabricație declarată de producător, acoperă intervalul uzual 50-2.500 kVA pentru posturi de transformare industriale și de rețea, iar varianta uscată în rășină turnată e alegerea firească acolo unde uleiul mineral nu e acceptat din motive de siguranță sau spațiu.

Pentru proiecte de rețea sau posturi de transformare din România, gama SGB-SMIT e relevantă la înlocuirea sau completarea capacității de transformare, mai ales acolo unde e nevoie de o putere sau o tensiune specifică, în afara standardului de catalog.`,
    whyChoose: [
      "Peste un secol de fabricație de transformatoare, cu sediul la Regensburg din 1913",
      "Acoperire completă, de la transformatoare de distribuție (50-2.500 kVA) până la unități de mare putere, la 765 kV",
      "Gamă uscată în rășină turnată de până la 25 MVA, pentru spații unde uleiul mineral nu e acceptat",
      "Stații compacte prefabricate — seriile LCS-E, NDV400/401, NDV1600/2500 — pentru posturi de transformare gata de montaj",
      "Fabrici pe trei continente, utile pentru continuitatea aprovizionării la proiecte cu termene strânse"
    ],
    keyProducts: [
      {
        name: "Transformatoare de Putere Mare",
        description: "Transformatoare de tip step-up, auto-transformatoare, transformatoare de rețea și de defazare, cu tensiuni de până la 765 kV, produse la fabrica din Nijmegen, Olanda. Se folosesc la stații de transformare majore, în generarea și distribuția de energie la scară largă. Configurația fiecărei unități se stabilește pe baza cerințelor specifice de proiect, nu din catalog standard."
      },
      {
        name: "Transformatoare de Putere Medie",
        description: "Segment produs în mai multe fabrici ale grupului — Germania, Malaysia, SUA —, pentru puteri intermediare între distribuția de bază și transformatoarele de mare putere, folosit la substații industriale și de rețea de dimensiune medie."
      },
      {
        name: "Transformatoare de Distribuție în Ulei",
        description: "Gamă de 50 până la 2.500 kVA, produsă în Germania și Malaysia, cu peste 60 de ani de experiență declarată de producător în acest segment. Reprezintă soluția standard pentru posturi de transformare industriale sau de rețea de joasă și medie tensiune. Pentru ofertă avem nevoie de puterea nominală, tensiunea primară și secundară și tipul de montaj (interior sau exterior)."
      },
      {
        name: "Transformatoare Uscate în Rășină Turnată",
        description: "Transformatoare fără ulei, de până la 25 MVA la 40,5 kV, disponibile și în variantă VPI (impregnare sub vid), produse în mai multe țări ale grupului. Alegerea firească acolo unde regulamentele de incendiu sau spațiul disponibil nu permit un transformator în ulei, de exemplu în clădiri sau spații interioare."
      },
      {
        name: "Stații Compacte",
        description: "Posturi de transformare prefabricate, din seriile LCS-E, NDV400/401 și NDV1600/2500, produse la fabrica din Neumark, Germania, gândite pentru montaj rapid acolo unde nu se justifică o clădire dedicată de post de transformare."
      }
    ],
    industries: [
      "Producție și distribuție de energie electrică — transformatoare de rețea și de putere",
      "Industrie — posturi de transformare pentru consumatori industriali mari",
      "Căi ferate — transformatoare pentru alimentarea infrastructurii feroviare",
      "Infrastructură — porturi, clădiri înalte și centre de date cu necesar propriu de transformare"
    ],
    infinitrade: `Pentru SGB-SMIT ne bazăm pe fișele de produs publicate de producător, fără date proprii despre programul lor de producție sau despre stocul disponibil în fiecare fabrică a grupului. Aducem transformatoare din gama SGB-SMIT la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni pentru unități standard de catalog — proiectele speciale, configurate pe cerere, au termene stabilite direct de producător, pe care le comunicăm clientului odată confirmate. Pentru o ofertă, avem nevoie de puterea nominală, tensiunea primară și secundară și tipul de montaj dorit. Nu promitem disponibilitate permanentă din stoc, fiindcă majoritatea unităților se fabrică la comandă pe specificația proiectului.`,
    limitation: "Nu putem confirma termenul de fabricație pentru un transformator configurat special, în afara celui orientativ pe care îl comunicăm pentru unități de catalog.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "SGB-SMIT Group — Homepage", url: "https://www.sgb-smit.com/", publisher: "SGB-SMIT Group", accessed: "2026-09-22" },
      { title: "SGB-SMIT — Product Range (Transformers)", url: "https://www.sgb-smit.com/products/", publisher: "SGB-SMIT Group", accessed: "2026-09-22" },
    ],
  },

  'ufi-filters': {
    name: "UFI Filters",
    founded: 1971,
    headquarters: "Porto Mantovano (Mantova), Italia",
    overview: `UFI Filters este un producător italian de sisteme de filtrare, cu sediul la Porto Mantovano, lângă Mantova, și activitate din 1971. Gama acoperă șapte linii de filtrare — aer motor, aer multitub, ulei, combustibil, transmisie, aer de habitaclu și filtre HEPA — plus șapte linii de gestionare termică și peste 6.000 de referințe de filtre hidraulice. Din portofoliul UFI Filters putem oferta filtre pentru motoare și pentru sisteme hidraulice industriale.

Spre deosebire de Mann+Hummel, care acoperă în principal segmentul auto și industrial general, UFI Filters are și o linie dedicată motorsport-ului și aerospațialului, cu proceduri conforme cerințelor EASA pentru componentele destinate aviației. Compania operează 21 de site-uri industriale în 21 de țări, cu peste 4.000 de angajați și trei centre proprii de cercetare, unde declară peste 280 de brevete înregistrate — un indiciu că nu doar asamblează filtre, ci și proiectează materialul filtrant.

Pentru flote auto, utilaje industriale sau echipamente hidraulice din România, gama UFI Filters e o opțiune la înlocuirea filtrelor de întreținere periodică sau la completarea unei linii hidraulice unde filtrul original nu mai e disponibil rapid.`,
    whyChoose: [
      "Șapte linii de filtrare — aer motor, aer multitub, ulei, combustibil, transmisie, aer habitaclu, HEPA — sub aceeași marcă",
      "Peste 6.000 de referințe de filtre hidraulice, utile pentru echipamente industriale cu circuite hidraulice variate",
      "Certificări IATF 16949 pentru industria auto, EN 9100 pentru aerospațial și AQAP 2110 pentru apărare",
      "Proceduri conforme cerințelor EASA pentru componentele destinate aviației, dincolo de segmentul auto de bază",
      "Trei centre proprii de cercetare și peste 280 de brevete declarate, semn de inginerie proprie a materialului filtrant"
    ],
    keyProducts: [
      {
        name: "Filtre de Aer Motor",
        description: "Filtre pentru admisia de aer a motoarelor, disponibile atât pentru vehicule ușoare cât și pentru cele grele, motociclete sau utilaje agricole. Pentru identificarea corectă a referinței avem nevoie de codul original al filtrului sau de datele echipamentului — marcă, model, motorizare."
      },
      {
        name: "Filtre de Ulei și Combustibil",
        description: "Linii separate pentru filtrarea uleiului de motor și a combustibilului, parte din pachetul standard de întreținere periodică pentru vehicule și utilaje industriale echipate cu motoare termice. Compatibilitatea se verifică pe baza codului original sau a datelor complete ale motorului."
      },
      {
        name: "Filtre de Transmisie și Aer de Habitaclu",
        description: "Filtre pentru circuitul de transmisie automată și filtre de aer de habitaclu (inclusiv variante HEPA), completând pachetul de filtrare al unui vehicul dincolo de motor. Utile la revizii complete unde se schimbă simultan mai multe tipuri de filtre."
      },
      {
        name: "Filtre Hidraulice",
        description: "Peste 6.000 de referințe pentru circuite hidraulice industriale, folosite la utilaje, prese sau echipamente cu sisteme hidraulice de putere. Din cauza numărului mare de referințe, avem nevoie de codul exact al filtrului original sau de datele complete ale echipamentului pentru a identifica varianta corectă."
      },
      {
        name: "Linii de Gestionare Termică",
        description: "Șapte linii de produse pentru managementul termic, complementare filtrării, orientate spre aplicații unde temperatura fluidului de lucru trebuie controlată alături de puritatea lui. Detaliile tehnice exacte depind de aplicația specifică a clientului."
      }
    ],
    industries: [
      "Automotive — vehicule ușoare, grele, motociclete și utilaje agricole",
      "Motorsport — filtrare pentru competiții auto",
      "Aerospațial și apărare — componente conforme EASA și AQAP 2110",
      "Marină — filtrare pentru motoare și sisteme hidraulice navale",
      "Aplicații hidraulice industriale — filtre pentru circuite hidraulice de utilaj"
    ],
    certifications: [
      "ISO 9001 — management al calității",
      "ISO 14001 — management de mediu",
      "ISO 45001 — sănătate și securitate ocupațională",
      "IATF 16949 — standard pentru industria auto",
      "EN 9100 — management de calitate pentru industria aerospațială",
      "AQAP 2110 — standard de calitate în domeniul apărării"
    ],
    infinitrade: `Pentru UFI Filters lucrăm cu fișele publice de produs și cu pagina de certificări a producătorului, fără date proprii despre stocul din cele 21 de site-uri ale grupului. Aducem filtre din gama UFI la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii — pentru referințele curente de întreținere, termenul poate fi mai scurt, dar nu îl promitem în avans. Pentru o ofertă, avem nevoie de codul original al filtrului sau de datele echipamentului — marcă, model, motor — pe care se montează. Nu putem confirma disponibilitate permanentă din stoc pentru fiecare din cele peste 6.000 de referințe hidraulice din catalog.`,
    limitation: "Nu putem confirma echivalența exactă cu un filtru OEM concurent fără codul de referință transmis de client.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "UFI Filters — Homepage", url: "https://www.ufifilters.com/", publisher: "UFI Filters S.p.A.", accessed: "2026-09-22" },
      { title: "UFI Filters — The Group", url: "https://www.ufifilters.com/en/the-group/", publisher: "UFI Filters S.p.A.", accessed: "2026-09-22" },
      { title: "UFI Filters — Certifications", url: "https://www.ufifilters.com/en/the-group/certifications/", publisher: "UFI Filters S.p.A.", accessed: "2026-09-22" },
    ],
  },

  'dosatron': {
    name: "Dosatron",
    overview: `Dosatron este un producător francez de pompe dozatoare proporționale acționate hidraulic, fără nicio sursă de energie electrică. Pompa funcționează pe principiul unui motor hidraulic intern, pus în mișcare chiar de fluxul de apă care trece prin ea, și injectează un concentrat — îngrășământ, dezinfectant sau alt aditiv — proporțional cu acest debit. Din gama Dosatron putem oferta pompe pentru irigație, sănătate animală și tratarea apei.

Spre deosebire de ProMinent, care se bazează pe pompe electrice de dozare, avantajul principal al gamei Dosatron e că funcționează și acolo unde nu există alimentare electrică — la o linie de irigație în câmp, la un adăpost de animale sau la un punct de tratare a apei izolat. Raportul de dozaj rămâne practic constant indiferent de variațiile de presiune din rețea, iar producătorul pune la dispoziție și o aplicație mobilă de suport pentru selecția și mentenanța pompelor.

Pentru ferme, sere sau stații de tratare a apei din România fără alimentare electrică la punctul de dozare, gama Dosatron e o soluție de luat în calcul, mai ales la instalații noi sau la extinderea uneia existente.`,
    whyChoose: [
      "Funcționare fără energie electrică, doar pe presiunea apei din rețea, utilă la puncte de dozare izolate",
      "Raport de dozaj proporțional și constant, indiferent de variațiile de debit din amonte",
      "Aplicabilitate atât în agricultură (irigație, fertirigare), cât și în sănătate animală și tratarea apei",
      "Aplicație mobilă de suport pusă la dispoziție de producător pentru selecția și mentenanța pompelor"
    ],
    keyProducts: [
      {
        name: "Pompe Dozatoare pentru Irigație și Fertirigare",
        description: "Pompe acționate hidraulic, montate pe conducta principală de apă a unei instalații de irigație, care injectează îngrășământ lichid proporțional cu debitul de apă ce trece prin ele. Nu necesită alimentare electrică la punctul de montaj, fiind potrivite pentru capete de câmp sau sere fără racord electric. Pentru ofertă avem nevoie de debitul de apă disponibil și raportul de dozaj dorit."
      },
      {
        name: "Pompe Dozatoare pentru Sănătate Animală",
        description: "Variantă a aceleiași tehnologii, folosită pentru dozarea vitaminelor, dezinfectanților sau altor aditivi în apa de băut din adăposturile de animale, unde consistența dozajului contează pentru sănătatea efectivului. Selecția depinde de debitul de apă al instalației și de tipul de concentrat injectat."
      },
      {
        name: "Pompe Dozatoare pentru Tratarea Apei",
        description: "Pompe folosite pentru injectarea de dezinfectant sau alt reactiv chimic în rețele de apă, acolo unde punctul de dozare nu are alimentare electrică disponibilă sau unde se preferă o soluție fără componente electronice. Compatibilitatea chimică a pompei cu substanța dozată trebuie verificată înainte de comandă."
      }
    ],
    industries: [
      "Agricultură — irigație și fertirigare proporțională",
      "Zootehnie — dozarea aditivilor și dezinfectanților în adăposturile de animale",
      "Tratarea apei — dozare de dezinfectant sau reactiv fără sursă electrică",
      "Industrie — dozare de concentrat unde nu există alimentare electrică la punctul de injecție"
    ],
    infinitrade: `Pentru Dosatron lucrăm cu descrierile publice de pe site-ul producătorului, versiunea globală și cea americană, fără date proprii despre stocul din fabrica franceză. Procurăm pompele dozatoare Dosatron la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de debitul de apă disponibil, raportul de dozaj dorit și tipul de concentrat injectat, pentru a verifica compatibilitatea chimică. Nu promitem disponibilitate permanentă din stoc pentru fiecare model din gamă, mai ales pentru variantele mai puțin uzuale.`,
    limitation: "Nu putem confirma modelul exact recomandat pentru o instalație fără datele de debit și presiune trimise de client.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Dosatron — Water Powered Dosing Pumps (Homepage)", url: "https://www.dosatron.com", publisher: "Dosatron International", accessed: "2026-09-22" },
      { title: "Dosatron USA — Homepage", url: "https://www.dosatronusa.com/", publisher: "Dosatron International", accessed: "2026-09-22" },
    ],
  },

  'ewm': {
    name: "EWM",
    headquarters: "Mündersbach, Germania",
    overview: `EWM este un producător german de aparate de sudură, cu sediul la Mündersbach. Gama acoperă sudura MIG/MAG prin seriile XQ și Picomig, sudura WIG (TIG) prin seria XQ — cunoscută și ca Tetrix XQ — și familia Picotig, plus echipamente portabile pentru sudura manuală cu electrod (E-Hand). Din portofoliul EWM putem oferta atât aparate pentru service și ateliere mici, cât și sisteme pentru sudura robotizată.

EWM acoperă și zona de automatizare a sudurii, cu sisteme pentru roboți și cobot-uri prin linia React și cu software-ul propriu Xnet 3 pentru monitorizarea și documentarea proceselor de sudură — relevant pentru ateliere care trebuie să demonstreze trasabilitatea sudurilor. Producătorul declară conformitate cu standardul EN 1090 pentru calificarea procedurilor de sudură (WPQR), cerut la structurile metalice destinate construcțiilor.

Pentru ateliere de sudură și confecții metalice din România, gama EWM are sens acolo unde trebuie documentată trasabilitatea sudurii pe structuri metalice conform EN 1090, sau unde se ia în calcul o primă automatizare a procesului cu un cobot de sudură.`,
    whyChoose: [
      "Gamă separată pentru MIG/MAG (XQ, Picomig) și pentru WIG (XQ, Picotig), fiecare cu variante dedicate",
      "Sisteme de automatizare a sudurii pentru roboți și cobot-uri, prin linia React",
      "Software propriu Xnet 3 pentru monitorizarea și documentarea proceselor de sudură",
      "Conformitate declarată cu EN 1090, relevantă pentru atelierele care lucrează la structuri metalice certificate",
      "Producție descrisă de producător ca fiind integral din Germania"
    ],
    keyProducts: [
      {
        name: "Aparate MIG/MAG Seria XQ",
        description: "Gama de vârf a producătorului pentru sudura MIG/MAG, folosită atât la service industrial, cât și la producție de serie mică sau medie. Pentru ofertă avem nevoie de materialul de sudat, grosimea pieselor și curentul de sudură necesar."
      },
      {
        name: "Aparate MIG/MAG Seria Picomig",
        description: "Variantă mai compactă pentru sudura MIG/MAG, potrivită pentru ateliere mici sau intervenții unde un aparat de gamă mare ar fi supradimensionat pentru volumul de lucru."
      },
      {
        name: "Aparate WIG Seria XQ (Tetrix XQ)",
        description: "Aparate pentru sudura TIG de precizie, din aceeași familie XQ ca varianta MIG/MAG, folosite unde calitatea și controlul cusăturii contează mai mult decât viteza de sudare — table subțiri, oțel inoxidabil, aliaje speciale."
      },
      {
        name: "Familia Picotig",
        description: "Aparate TIG compacte, echivalentul familiei Picomig pentru procedeul WIG, gândite pentru ateliere de dimensiune mică sau intervenții punctuale de sudură de precizie."
      },
      {
        name: "Sisteme de Sudură Robotizată React",
        description: "Linie dedicată integrării sudurii MIG/MAG sau TIG în celule robotizate sau cu cobot, completată de software-ul Xnet 3 pentru monitorizarea procesului. Pentru o ofertă avem nevoie de specificația celulei robotizate și de procedeul de sudură dorit."
      }
    ],
    industries: [
      "Construcții metalice — sudură cu trasabilitate conform EN 1090",
      "Industria auto — sudură MIG/MAG în producție de serie",
      "Construcții navale — sudură WIG pentru elemente de precizie",
      "Căi ferate — sudură pentru structuri metalice feroviare",
      "Conducte și lucrări industriale generale — sudură TIG și MIG/MAG"
    ],
    infinitrade: `Pentru EWM lucrăm cu ce publică producătorul pe site-ul oficial și pe pagina lor de produse, fără date proprii despre stocul din Mündersbach. Aducem aparate de sudură EWM la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de procedeul de sudură dorit — MIG/MAG, WIG sau electrod —, curentul necesar și dacă echipamentul trebuie integrat într-o celulă robotizată. Nu promitem disponibilitate permanentă din stoc pentru fiecare model din gamă, mai ales pentru variantele robotizate configurate pe proiect.`,
    limitation: "Nu putem confirma disponibilitatea locală a service-ului în garanția producătorului pentru un aparat EWM adus prin comandă.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "EWM GmbH — Homepage", url: "https://www.ewm-group.com", publisher: "EWM GmbH", accessed: "2026-09-22" },
      { title: "EWM — Products Overview", url: "https://www.ewm-group.com/en/products", publisher: "EWM GmbH", accessed: "2026-09-22" },
    ],
  },

  'kemppi': {
    name: "Kemppi",
    founded: 1949,
    headquarters: "Lahti, Finlanda",
    overview: `Kemppi este un producător finlandez de aparate de sudură, fondat în 1949 și cu sediul la Lahti. Gama include aparate MIG/MAG portabile din seria Minarc (Minarc M, sub 12 kg, la 220A), aparate TIG premium din seria Master (Master T, AC/DC) și echipamente pentru sudura robotizată — torța robotizată GX-R System și aparatul industrial AX MIG Welder. Din portofoliul Kemppi putem oferta atât aparate portabile pentru service, cât și sisteme pentru linii de sudură automatizată.

Kemppi acoperă atât capătul portabil al pieței — aparate ușoare pentru intervenții pe teren sau service — cât și capătul industrial, cu sisteme robotizate complete pentru producție de serie. Compania are prezență directă în 16 țări, ceea ce înseamnă documentație tehnică și suport disponibile pe mai multe piețe, nu doar în Finlanda.

Pentru service-uri mobile și ateliere de sudură din România, seria Minarc e relevantă ca aparat portabil de teren, iar Master T pentru sudura TIG de precizie unde calitatea cusăturii contează mai mult decât viteza.`,
    whyChoose: [
      "Aparat Minarc M portabil, sub 12 kg, la 220A, potrivit pentru intervenții de sudură pe teren",
      "Aparate Master T pentru TIG AC/DC de precizie, la nivel premium în gama Kemppi",
      "Sisteme dedicate sudurii robotizate — GX-R System, AX MIG Welder — pentru linii de producție automatizate",
      "Prezență directă în 16 țări, cu documentație tehnică și rețea de service disponibile pe mai multe piețe"
    ],
    keyProducts: [
      {
        name: "Aparat MIG/MAG Portabil Minarc M",
        description: "Aparat de sudură MIG/MAG portabil, cu o greutate de 11-12 kg și un curent de sudură de 220A, gândit pentru intervenții de service sau lucrări pe teren unde portabilitatea contează mai mult decât puterea maximă. Pentru ofertă avem nevoie de materialul și grosimea pieselor de sudat."
      },
      {
        name: "Aparat TIG Master T",
        description: "Aparat premium din gama Kemppi pentru sudura TIG în curent alternativ și continuu (AC/DC), folosit acolo unde calitatea și controlul cusăturii sunt prioritare — oțel inoxidabil, aluminiu, aliaje speciale."
      },
      {
        name: "Torța Robotizată GX-R System",
        description: "Torță dedicată sudurii MIG/MAG robotizate, integrată în celule de producție automatizată. Pentru o ofertă avem nevoie de specificația celulei robotizate și de procedeul de sudură utilizat."
      },
      {
        name: "Aparat Industrial AX MIG Welder",
        description: "Aparat de sudură MIG destinat producției industriale de serie, folosit inclusiv în combinație cu echipament robotizat pentru linii cu volum ridicat de sudură."
      }
    ],
    industries: [
      "Industria minieră — aparate portabile pentru intervenții și reparații pe teren",
      "Mașini industriale complexe — sudură de precizie TIG",
      "Apărare — echipamente de sudură pentru mentenanță specializată",
      "Producție de serie — sudură robotizată cu GX-R System și AX MIG Welder"
    ],
    infinitrade: `Pentru Kemppi ne bazăm pe informația de pe site-ul producătorului și pe anul de fondare confirmat separat, fără acces la stocul lor real din Lahti. Punem la dispoziție aparatele de sudură Kemppi la comandă, prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 2-6 săptămâni de la confirmare. Pentru o ofertă corectă, avem nevoie de procedeul dorit — MIG/MAG sau TIG —, curentul de sudură necesar și dacă aparatul e pentru uz portabil sau pentru integrare robotizată. Nu putem confirma disponibilitate permanentă din stoc pentru fiecare model din gamă, mai ales pentru sistemele robotizate configurate pe proiect.`,
    limitation: "Nu putem confirma configurația software sau parametrii de sudură presetați pentru sistemele robotizate Kemppi fără specificația tehnică a liniei clientului.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Kemppi — Arc Welding Equipment (Homepage)", url: "https://kemppi.com", publisher: "Kemppi Oy", accessed: "2026-09-22" },
      { title: "Kemppi", url: "https://en.wikipedia.org/wiki/Kemppi", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  'gw-instek': {
    name: "GW Instek",
    overview: `GW Instek este un producător taiwanez de instrumente de măsurare și testare electronică, prezent în cataloagele mai multor distribuitori de profil din România. Gama acoperă osciloscoape digitale din seria GDS-2000HD/HG, surse de alimentare AC/DC din seria ASR-6000, surse DC programabile PSW-Multi și GPP-3060/6030, sisteme de achiziție de date DAQ-9600 și sarcini electronice PEL-5000G, alături de analizoare de spectru, generatoare de semnal, multimetre digitale și testere LCR. Din portofoliul GW Instek putem oferta instrumentație de bancă pentru laboratoare tehnice și linii de testare.

Spre deosebire de Fluke, cunoscut mai ales pentru multimetre și instrumente de teren, GW Instek acoperă în principal instrumentația de bancă de laborator — osciloscoape, surse programabile și sisteme de achiziție de date — folosite la teste de siguranță electrică, testare de baterii, aplicații de tip Industry 4.0 și teste automotive de conversie a puterii.

Pentru laboratoare de service, control calitate sau linii de testare din România, gama GW Instek e o opțiune pentru instrumentație de bancă la un cost mai accesibil decât mărcile premium, la teste standard de laborator.`,
    whyChoose: [
      "Gamă largă de osciloscoape digitale din seria GDS-2000HD/HG pentru bancul de laborator",
      "Surse de alimentare programabile pe mai multe game, de la DC simplu canal la AC/DC (seria ASR-6000)",
      "Sisteme de achiziție de date DAQ-9600 și sarcini electronice PEL-5000G pentru teste automatizate",
      "Aplicabilitate declarată pentru testare de siguranță electrică, baterii și conversie de putere"
    ],
    keyProducts: [
      {
        name: "Osciloscoape Digitale Seria GDS-2000HD/HG",
        description: "Osciloscoape digitale de bancă, folosite la depanare electronică, control calitate și dezvoltare de produs. Pentru ofertă avem nevoie de banda de frecvență necesară și numărul de canale dorit."
      },
      {
        name: "Surse de Alimentare AC/DC Seria ASR-6000",
        description: "Surse de alimentare care combină ieșiri AC și DC, folosite la testarea echipamentelor electronice ce trebuie verificate atât pe alimentare de rețea, cât și pe curent continuu."
      },
      {
        name: "Surse DC Programabile PSW-Multi / GPP-3060/6030",
        description: "Surse DC cu unul sau mai multe canale programabile, folosite la alimentarea controlată a circuitelor în timpul dezvoltării sau testării de produs. Selecția corectă depinde de tensiunea și curentul maxim necesar."
      },
      {
        name: "Sisteme de Achiziție de Date DAQ-9600",
        description: "Echipamente pentru colectarea automată de date de la senzori sau instrumente în cadrul unor teste automatizate, relevante pentru linii de testare de tip Industry 4.0."
      },
      {
        name: "Sarcini Electronice PEL-5000G",
        description: "Sarcini electronice programabile, folosite la testarea surselor de alimentare, bateriilor sau altor echipamente care trebuie verificate sub o sarcină controlată electronic."
      }
    ],
    industries: [
      "Testare de siguranță electrică — verificare Hi-Pot și rezistență de izolație",
      "Industria bateriilor — testare de încărcare și descărcare",
      "Industry 4.0 — achiziție de date pentru linii automatizate",
      "Automotive — teste de conversie a puterii pentru componente electrice",
      "Laboratoare de service — instrumentație de bancă pentru diagnoză și reparații"
    ],
    infinitrade: `Pentru GW Instek lucrăm cu categoriile de produse publicate pe site-ul producătorului, fără date proprii despre stocul din Taiwan sau despre termenele lor reale de fabricație. Aducem instrumentele GW Instek la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de modelul exact sau, dacă nu-l cunoașteți, de parametrii de test necesari — tensiune, curent, bandă de frecvență. Nu putem confirma disponibilitate permanentă din stoc pentru fiecare model din acest catalog extins de instrumentație.`,
    limitation: "Nu putem confirma calibrarea sau certificatul de etalonare pentru un instrument GW Instek adus prin comandă, dincolo de ce oferă producătorul standard.",
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "GW Instek — Test and Measurement Instruments (Homepage)", url: "https://www.gwinstek.com", publisher: "Good Will Instrument Co., Ltd.", accessed: "2026-09-22" },
      { title: "GW Instek — Products", url: "https://www.gwinstek.com/en-global/products", publisher: "Good Will Instrument Co., Ltd.", accessed: "2026-09-22" },
    ],
  },

  'vaisala': {
    name: "Vaisala",
    founded: 1936,
    headquarters: "Vantaa, Finlanda",
    overview: `Vaisala este un producător finlandez de instrumente de măsurare, cu rădăcini din 1936 în lucrările profesorului Vilho Väisälä pe principiile radiosondei meteorologice, și sediul actual la Vantaa. Compania a funcționat sub numele Mittari Oy până în 1955, când a adoptat denumirea Vaisala. Din gama Vaisala putem oferta senzori de umiditate, punct de rouă și CO2, precum și tehnologie de măsurare a vântului pentru aplicații meteorologice și industriale.

Spre deosebire de Rotronic, axat în principal pe umiditate și temperatură, Vaisala acoperă o plajă mai largă — de la senzori industriali de proces, precum transmițătorul de punct de rouă DMP370, cu siguranță intrinsecă, până la sisteme de măsurare a vântului pentru energie eoliană prin tehnologia WindCube și software de meteorologie aviatică AviMet 10. Producătorul oferă și servicii de mentenanță dedicate, precum Vaisala Care for Data Centers.

Pentru centre de date, ferme eoliene sau instalații industriale din România unde controlul umidității sau al punctului de rouă e critic pentru proces, gama Vaisala e o opțiune pentru senzori de precizie la înlocuirea sau completarea instrumentației existente.`,
    whyChoose: [
      "Aproape un secol de activitate în măsurarea umidității, punctului de rouă și CO2, din 1936 până azi",
      "Transmițător de punct de rouă DMP370 cu siguranță intrinsecă, pentru zone cu cerințe stricte de siguranță",
      "Tehnologie proprie de măsurare a vântului (WindCube), relevantă pentru proiecte de energie eoliană",
      "Software dedicat meteorologiei aviatice (AviMet 10), pentru aeroporturi și servicii de trafic aerian",
      "Servicii de mentenanță dedicate pentru centre de date, prin programul Vaisala Care for Data Centers"
    ],
    keyProducts: [
      {
        name: "Transmițător de Punct de Rouă DMP370",
        description: "Transmițător industrial cu siguranță intrinsecă, folosit pentru măsurarea punctului de rouă în procese industriale, inclusiv în zone cu risc de explozie unde cerințele de siguranță sunt stricte. Pentru ofertă avem nevoie de aplicația exactă și de clasificarea zonei unde se montează."
      },
      {
        name: "Senzori de Umiditate și CO2 pentru Industrie",
        description: "Senzori pentru monitorizarea umidității relative și a concentrației de CO2 în procese industriale sau spații controlate, folosiți la optimizarea proceselor sensibile la variații de mediu."
      },
      {
        name: "Tehnologie de Măsurare a Vântului WindCube",
        description: "Tehnologie proprie de măsurare a vântului, relevantă pentru evaluarea resursei eoliene la proiecte de energie regenerabilă, atât pe uscat cât și offshore."
      },
      {
        name: "Software de Meteorologie Aviatică AviMet 10",
        description: "Software dedicat observării condițiilor meteorologice pentru aeroporturi și servicii de trafic aerian, complementar senzorilor Vaisala instalați la sol."
      }
    ],
    industries: [
      "Aviație — meteorologie aeroportuară și software AviMet 10",
      "Energie eoliană — măsurarea vântului cu tehnologia WindCube",
      "Centre de date — monitorizare umiditate și servicii de mentenanță dedicate",
      "Industrie de proces — senzori de umiditate, punct de rouă și CO2"
    ],
    infinitrade: `Pentru Vaisala lucrăm cu fișele de produs de pe site-ul oficial și cu anul de fondare confirmat independent, fără date proprii despre stocul din Vantaa. Aducem senzori și instrumente Vaisala la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 2-6 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de aplicația exactă — proces industrial, mediu exterior, zonă cu risc de explozie — și de parametrul măsurat: umiditate, punct de rouă, CO2 sau vânt. Nu promitem disponibilitate permanentă din stoc pentru fiecare senzor din acest portofoliu amplu de instrumentație.`,
    limitation: "Nu putem confirma certificarea ATEX sau alte aprobări de zonă explozivă pentru un model Vaisala fără fișa tehnică specifică a variantei comandate.",
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-09-22",
    changelog: [ { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      { title: "Vaisala — Measurement Instruments (Homepage)", url: "https://www.vaisala.com", publisher: "Vaisala Oyj", accessed: "2026-09-22" },
      { title: "Vaisala — About Us", url: "https://www.vaisala.com/en/about-us", publisher: "Vaisala Oyj", accessed: "2026-09-22" },
      { title: "Vaisala", url: "https://en.wikipedia.org/wiki/Vaisala", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
};
