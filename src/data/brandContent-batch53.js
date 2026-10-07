// Batch 53 - Branduri-500 val 1 (sept. 2026): ReeR, Gimatic, GMN, Rollon, Nord-Lock, SGB-SMIT, UFI Filters, Dosatron, EWM, Kemppi, GW Instek, Vaisala.
// Sursa faptelor: site-urile oficiale ale producătorilor, accesate la data din `sources[].accessed` (plus Wikipedia pentru anul fondării la Kemppi și Vaisala, unde site-ul oficial nu-l indică direct).
export const brandContentBatch53 = {
  'reer': {
    name: "ReeR",
    founded: 1959,
    headquarters: "Torino, Italia",
    overview: `ReeR este un producător italian din Torino, activ de peste 60 de ani, specializat în senzori optoelectronici de siguranță pentru protecția mașinilor și a liniilor industriale. Divizia Sicurezza acoperă bariere fotoelectrice și cortine de lumină, controlere și interfețe de siguranță, dispozitive de protecție și cortine de măsurare optică, folosite acolo unde o mașină trebuie oprită automat când un operator ajunge într-o zonă periculoasă. Din gama ReeR putem oferta produse pentru integratori și utilizatori finali care au nevoie de sisteme de protecție optoelectronică pentru mașini industriale.

Gama de siguranță ReeR cuprinde cortine de lumină, controlere, interblocări, scanere laser, senzori fără contact, fotocelule și encodere de siguranță. Compania are și o a doua divizie, ReeR Lighting, dedicată iluminatului, separată de linia de siguranță industrială.

Pentru un integrator sau un utilizator final din România care proiectează protecția perimetrală a unei linii sau a unei mașini periculoase, gama ReeR e o opțiune de analizat alături de alte mărci de senzori de siguranță, mai ales la retrofit-uri unde trebuie înlocuit un senzor optoelectronic existent cu unul echivalent funcțional.`,
    whyChoose: [
      "Divizie dedicată exclusiv siguranței mașinilor, cu bariere fotoelectrice, cortine de lumină și controlere integrate în aceeași gamă",
      "Prezență italiană de peste 60 de ani, cu sediu și activitate concentrate la Torino",
      "Portofoliu care acoperă atât protecția perimetrală prin cortine de lumină, cât și cortine de măsurare optică pentru control dimensional",
      "Companie cu sediul la Torino, cu divizii separate pentru siguranță industrială și iluminat",
      "Divizie separată, ReeR Lighting, pentru iluminat, alături de linia de siguranță industrială"
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
    infinitrade: `Nu avem vizibilitate asupra stocului producătorului sau asupra termenelor lui de producție; le confirmăm la fiecare ofertă. Aducem senzori și module din gama Sicurezza la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de codul exact al produsului sau al referinței pe care o înlocuiți, tensiunea de alimentare și tipul de interfață de siguranță cu care trebuie să comunice noul senzor. Nu promitem disponibilitate permanentă din stoc pentru această gamă, tocmai pentru că vine dintr-o linie de siguranță unde configurația corectă contează mai mult decât viteza de livrare.`,
    limitation: "Nu putem confirma certificările complete de produs (categorie, PL) sau suportul tehnic pentru integrarea într-un circuit de siguranță deja existent în fabrică, dincolo de furnizarea echipamentului.",
    productCodes: [
      {
        "code": "SAFEREADY",
        "description": "Cortină fotoelectrică de siguranță pentru protecția zonelor de lucru"
      },
      {
        "code": "EOS2",
        "description": "Cortină fotoelectrică de siguranță din gama EOS"
      },
      {
        "code": "EOS4",
        "description": "Cortină fotoelectrică de siguranță compactă din gama EOS, cu funcții de siguranță integrate"
      },
      {
        "code": "Admiral",
        "description": "Cortină de siguranță din gama ReeR Safety"
      },
      {
        "code": "Safegate",
        "description": "Cortină de siguranță din gama ReeR Safety"
      },
      {
        "code": "Janus",
        "description": "Cortină de siguranță optoelectronică din gama ReeR Safety"
      },
      {
        "code": "Vision",
        "description": "Cortină de siguranță optoelectronică din gama ReeR Safety"
      },
      {
        "code": "Micron",
        "description": "Cortină de măsurare optică, pentru detectare și recunoaștere de obiecte"
      },
      {
        "code": "Mosaic",
        "description": "Controler de siguranță modular și configurabil"
      },
      {
        "code": "Safelock (SLK)",
        "description": "Dispozitiv de interblocare pentru protecții mobile"
      },
      {
        "code": "Encoder de siguranță incremental",
        "description": "Dispozitiv pentru monitorizarea sigură a mișcării axelor"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între cortinele ReeR EOS2 și EOS4?",
        "a": "Ambele fac parte din gama EOS de cortine fotoelectrice de siguranță. Producătorul descrie EOS4 ca gamă compactă, cu modele cu funcții de siguranță integrate: ieșiri statice autoverificate, control al contactoarelor externe (EDM) și repornire automată sau manuală selectabilă. Alegerea între cele două depinde de cerințele exacte ale mașinii protejate, de rezoluția de detecție necesară și de distanța la care trebuie amplasată cortina."
      },
      {
        "q": "Ce este controlerul Mosaic de la ReeR?",
        "a": "Mosaic este un controler de siguranță modular, folosit pentru a integra mai multe dispozitive de protecție, cortine, interblocări sau butoane de oprire de urgență, într-un singur sistem configurabil fără programare complexă. Este util în instalații unde numărul de intrări de siguranță crește în timp și se dorește o soluție ușor de extins ulterior."
      },
      {
        "q": "Livrați echipamente de siguranță ReeR în România?",
        "a": "Da, dispozitivele ReeR se comandă punctual din catalogul oficial, cu un termen estimat de 1–4 săptămâni, pentru că nu ținem această gamă de siguranță pe raft din cauza numărului mare de lungimi și rezoluții disponibile. Pentru o ofertă avem nevoie de înălțimea de protecție necesară, rezoluția de detecție și distanța de siguranță calculată pentru aplicația dumneavoastră."
      },
      {
        "q": "Ce rol are seria Safelock SLK de la ReeR?",
        "a": "Safelock SLK este o familie de interblocări de siguranță, folosită la uși sau apărători mobile. Variantele disponibile și caracteristicile lor le confirmăm pe cod, din documentația ReeR."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"ReeR - Home","url":"https://www.reer.it/en/","publisher":"ReeR","accessed":"2026-09-25"},
      {"title":"ReeR Safety - Products","url":"https://www.reersafety.com/en/products/","publisher":"ReeR","accessed":"2026-09-25"},
      { title: "ReeR — Safety and Lighting (Homepage)", url: "https://www.reer.it/en/", publisher: "ReeR S.p.A.", accessed: "2026-09-22" },
      { title: "ReeR — Safety Division (Sicurezza)", url: "https://www.reer.it/en/safety/", publisher: "ReeR S.p.A.", accessed: "2026-09-22" },
    ],
  },

  'gimatic': {
    name: "Gimatic",
    overview: `Gimatic este un producător italian de componente pentru automatizare industrială, cu accent pe prinderea și manipularea pieselor la capătul brațelor robotizate. Gama include gripere electrice unghiulare din seria MPBM, gripere electrice radiale din seria MPRM, module pneumatice culisante din seria ZV și capete de tăiere pentru debavurare precum MFI-A272, alături de o linie proprie de componente de vid. Din portofoliul Gimatic putem oferta atât gripere individuale, cât și componente de vid pentru celule robotizate.

Gimatic acoperă în paralel griparea mecanică — electrică și pneumatică — și tehnologia de vid, ceea ce simplifică alegerea când o celulă robotizată combină ambele principii de prindere. Seriile de gripere electrice MPBM (unghiulare) și MPRM (radiale) acoperă aplicațiile în care se preferă acționarea electrică celei pneumatice; comportamentul la întreruperea alimentării îl confirmăm pe cod, din documentația Gimatic.

Pentru integratorii din România care montează celule de sortare, debavurare sau injecție de mase plastice, gama Gimatic e o opțiune pentru componenta finală de prindere a robotului, acolo unde trebuie alese cursa, forța de strângere și interfața mecanică potrivite piesei manipulate.`,
    whyChoose: [
      "Gripere electrice unghiulare MPBM și radiale MPRM, pentru aplicații cu acționare electrică",
      "Portofoliu care acoperă atât prinderea mecanică (pneumatică și electrică), cât și componentele de vid, sub aceeași marcă",
      "Module pneumatice culisante din seria ZV, cu ghidaj cu bile recirculante, pentru mișcări liniare precise la capătul brațului robotic",
      "Suporturi reglabile precum MFI-A272, cu unghi ajustabil continuu, pentru poziționarea fină a lamei sau a griperului pe robot",
      "Gripere electrice și pneumatice pentru automatizare industrială, într-o singură gamă"
    ],
    keyProducts: [
      {
        name: "Gripere Electrice Unghiulare Seria MPBM",
        description: "Gripere acționate electric, cu deschidere unghiulară. Folosite la prinderea și extragerea pieselor din matriță în injecția de mase plastice sau la manipularea semifabricatelor în debavurare. Pentru ofertă avem nevoie de cursa de deschidere, forța de strângere necesară și tipul de interfață de montaj pe robot."
      },
      {
        name: "Gripere Electrice Radiale Seria MPRM",
        description: "Variantă radială a acelorași gripere electrice, cu fălcile deschizându-se radial, potrivită acolo unde geometria piesei sau spațiul disponibil în celulă nu permit deschiderea unghiulară. Selecția corectă depinde de dimensiunea și greutatea piesei manipulate."
      },
      {
        name: "Module Pneumatice Culisante Seria ZV",
        description: "Slide-uri pneumatice cu ghidaj cu bile recirculante și dublă acționare, folosite pentru mișcări liniare de scurtă cursă la capătul brațului robotic — de exemplu pentru a apropia sau retrage un griper dintr-o zonă îngustă. Se montează de obicei împreună cu un gripper sau un suport de lamă din aceeași gamă. Pentru ofertă avem nevoie de cursa necesară și presiunea de aer disponibilă în instalație."
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
    infinitrade: `Disponibilitatea și termenul pentru fiecare referință le confirmăm la fiecare ofertă. Furnizăm gripere și componente de vid din gama Gimatic la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni de la confirmarea comenzii. Ca să pregătim o ofertă corectă, avem nevoie de seria exactă a griperului sau modulului — MPBM, MPRM, ZV sau altă referință —, cursa ori forța necesară și interfața de montaj pe robot. Nu putem promite disponibilitate permanentă din stoc pentru fiecare referință din această gamă amplă de componente.`,
    limitation: "Nu putem confirma parametrii tehnici exacți — curse, forțe, diametre — pentru fiecare variantă din gama de gripere sau componente de vid fără specificația de comandă a clientului.",
    productCodes: [
      {
        "code": "MPBM",
        "description": "Griper electric angular"
      },
      {
        "code": "MPBM1640",
        "description": "Model din familia de gripere electrice angulare MPBM"
      },
      {
        "code": "MPRM",
        "description": "Griper electric radial cu autocentrare"
      },
      {
        "code": "MPLM",
        "description": "Griper electric paralel cu cursă lungă"
      },
      {
        "code": "MPPM",
        "description": "Griper electric paralel cu autocentrare"
      },
      {
        "code": "ZV",
        "description": "Modul pneumatic culisant, dublu efect, cu ghidaj cu bile recirculante reglabil"
      },
      {
        "code": "SGP-S",
        "description": "Griper pneumatic paralel cu autocentrare, două fălci"
      },
      {
        "code": "SZ",
        "description": "Griper pneumatic paralel cu autocentrare, gamă compactă"
      },
      {
        "code": "GM",
        "description": "Griper pneumatic paralel cu autocentrare, gamă standard"
      },
      {
        "code": "TH",
        "description": "Griper pneumatic cu trei fălci, acțiune paralelă și autocentrare"
      },
      {
        "code": "MAG",
        "description": "Griper pneumatic magnetic"
      },
      {
        "code": "MFI-A272",
        "description": "Cap de tăiere pentru debavurare, unghi reglabil între minus și plus 45 grade"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între griperele electrice Gimatic MPBM și MPRM?",
        "a": "MPBM este un griper electric angular, cu fălcile care se deschid ca un compas, în timp ce MPRM este un griper radial, cu fălcile care se mișcă liniar spre centru. Ambele sunt acționate electric, dar geometria de deschidere le face potrivite pentru forme diferite de piese."
      },
      {
        "q": "Ce este modulul pneumatic ZV de la Gimatic?",
        "a": "ZV este un modul pneumatic culisant, cu funcționare dublu efect și alimentare cu aer din partea din spate, montat pe un ghidaj cu bile recirculante reglabile. Poate fi echipat opțional cu limitatoare de cursă ajustabile sau cu un opritor de urgență, precum și cu senzori magnetici pentru confirmarea poziției la capetele cursei."
      },
      {
        "q": "Livrați gripere Gimatic în România?",
        "a": "Da, griperele Gimatic sunt procurate la cerere, într-un interval tipic de 1–4 săptămâni, deoarece nu păstrăm în permanență pe raft o gamă atât de variată de dimensiuni și curse. Pentru o ofertă corectă avem nevoie de greutatea piesei manipulate, cursa necesară și tipul de acționare dorit, electrică, pneumatică sau prin vid."
      },
      {
        "q": "Ce aplicații are capul de tăiere MFI-A272 de la Gimatic?",
        "a": "MFI-A272 este folosit pentru operații de trimming, degating și debavurare pe linii automatizate, cu unghiul lamei reglabil continuu între minus și plus 45 de grade, pentru a se adapta la geometria piesei prelucrate. Poate fi echipat opțional cu un sistem de încălzire, util atunci când materialul plastic prelucrat necesită o temperatură mai ridicată pentru o tăiere curată."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Gimatic - Products","url":"https://www.gimatic.com/en/products","publisher":"Gimatic","accessed":"2026-09-25"},
      { title: "Gimatic — Gripping and Vacuum Technology (Homepage)", url: "https://www.gimatic.com", publisher: "Gimatic S.r.l.", accessed: "2026-09-22" },
      { title: "Gimatic — Product Range: MPBM, MPRM, ZV, Vacuum Components", url: "https://www.gimatic.com", publisher: "Gimatic S.r.l.", accessed: "2026-09-22" },
    ],
  },

  'gmn': {
    name: "GMN",
    founded: 1908,
    headquarters: "Nürnberg, Germania",
    overview: `GMN este un producător german de componente de precizie pentru mașini-unelte de mare viteză, cu sediul la Nürnberg și activitate neîntreruptă din 1908, când a pornit ca atelier mecanic Georg Müller Nürnberg. Astăzi face parte din grupul familial Paul Müller Industrie, ajuns la a patra generație. Din gama GMN putem oferta rulmenți cu bile de precizie, spindle-uri de șlefuit și frezat, cuplaje cu roată liberă de tip sprag și etanșări fără contact, componente esențiale pentru arborii principali ai mașinilor de prelucrare.

GMN se concentrează pe segmentul de precizie și turație mare, unde spindle-ul complet — nu doar rulmentul izolat — face diferența de performanță la o mașină de șlefuit sau de frezat. Gama de etanșări fără contact e împărțită pe serii — CF, L/M și S/SA —, fiecare gândită pentru un tip diferit de aplicație de etanșare la turații mari, iar cuplajele cu roată liberă permit transmiterea mișcării într-un singur sens, utile la sisteme de indexare sau la protecția motorului împotriva rulării inverse.

Pentru ateliere de prelucrare din România care întrețin mașini de șlefuit sau de frezat de mare viteză, componentele GMN sunt relevante mai ales la înlocuirea spindle-urilor sau rulmenților uzați, unde compatibilitatea dimensională cu arborele existent contează cel mai mult.`,
    whyChoose: [
      "Continuitate de peste un secol în producția de componente de precizie pentru arbori principali, din 1908 până azi",
      "Gamă de etanșări fără contact pe serii CF, L/M și S/SA, pentru turații mari fără frecare suplimentară",
      "Cuplaje cu roată liberă de tip sprag, pentru transmiterea mișcării într-un singur sens la sisteme de indexare",
      "Parte din grupul familial Paul Müller Industrie, aflat la a patra generație, cu rulmenți, spindle-uri, cuplaje, etanșări și motoare în același portofoliu",
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
    infinitrade: `Disponibilitatea și termenul de fabricație ale unui spindle personalizat le confirmăm la fiecare ofertă. Aducem rulmenți, cuplaje, etanșări și spindle-uri GMN la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni din momentul confirmării comenzii. Pentru o ofertă utilizabilă, avem nevoie de dimensiunile arborelui existent, turația de lucru și, dacă e vorba de un spindle complet, modelul mașinii pe care se montează. Fiind componente de precizie, nu păstrăm stoc pe fiecare variantă și nu putem asigura termene mai scurte decât cele indicate de producător pentru piesele configurate special.`,
    limitation: "Nu putem confirma toleranțele exacte sau clasa de precizie a unui rulment fără codul complet de comandă transmis de client.",
    productCodes: [
      {
        "code": "IDEA-4S",
        "description": "Sistem de monitorizare a spindle-urilor, cu achiziție și evaluare integrată a datelor"
      },
      {
        "code": "UH",
        "description": "Serie de produse GMN; încadrarea și datele tehnice le confirmăm pe cod, din documentația producătorului"
      },
      {
        "code": "Seria CF",
        "description": "Etanșare fără contact pentru rulmenți și spindle-uri"
      },
      {
        "code": "Seria L/M",
        "description": "Etanșare fără contact, variantă din familia L/M"
      },
      {
        "code": "Seria S/SA",
        "description": "Etanșare fără contact, variantă din familia S/SA"
      },
      {
        "code": "Spindle de șlefuit",
        "description": "Spindle pentru operații de rectificare, cu schimbare manuală a sculei"
      },
      {
        "code": "Spindle de frezat",
        "description": "Spindle pentru operații de frezare, cu schimbare automată a sculei"
      },
      {
        "code": "Spindle de rectificat discuri (dressing)",
        "description": "Spindle folosit la pregătirea discurilor abrazive"
      },
      {
        "code": "Spindle pentru piesă",
        "description": "Susține și rotește piesa în timpul prelucrării"
      },
      {
        "code": "Rulment de siguranță (touchdown)",
        "description": "Rulment de rezervă pentru sisteme cu lagăre magnetice"
      },
      {
        "code": "Cuplaj cu roată liberă complet",
        "description": "Unitate completă de tip sprag pentru transmisia într-un singur sens"
      },
      {
        "code": "Cuplaj cu roată liberă cu bile",
        "description": "Variantă cu element de rulare cu bile integrat"
      },
      {
        "code": "Rulment cu bile pentru spindle",
        "description": "Rulment de precizie pentru arbori de mare turație"
      },
      {
        "code": "Rulment cu bile cu canal adânc",
        "description": "Rulment pentru sarcini radiale și axiale combinate"
      }
    ],
    faq: [
      {
        "q": "Ce tipuri de spindle-uri produce GMN?",
        "a": "GMN produce spindle-uri pentru mai multe operații: șlefuire, cu schimbare manuală a sculei, frezare, cu schimbare automată, precum și spindle-uri de rectificat discuri abrazive și spindle-uri dedicate susținerii piesei în timpul prelucrării. Alegerea depinde de turația necesară, de tipul de prelucrare și de puterea cerută de aplicația industrială."
      },
      {
        "q": "Ce este seria de etanșări CF de la GMN?",
        "a": "Seria CF face parte din gama de etanșări fără contact a GMN, gândită pentru a proteja rulmenții și spindle-urile de praf, umezeală sau alte contaminanți, fără frecare mecanică suplimentară asupra arborelui. Alături de CF, producătorul oferă și seriile L/M și S/SA, cu geometrii diferite pentru aplicații specifice de etanșare."
      },
      {
        "q": "Livrați rulmenți și spindle-uri GMN în România?",
        "a": "Da, componentele GMN se procură punctual din catalogul producătorului, cu un termen orientativ între 1 și 4 săptămâni, pentru că gama de spindle-uri și rulmenți de precizie nu este ținută pe raft din cauza complexității tehnice. Pentru o ofertă corectă avem nevoie de turația de lucru dorită, tipul de prelucrare și dimensiunile arborelui sau ale carcasei existente."
      },
      {
        "q": "Ce rol au rulmenții de siguranță touchdown la GMN?",
        "a": "Rulmenții touchdown funcționează ca rezervă mecanică în sistemele cu lagăre magnetice, preluând sarcina arborelui în cazul unei căderi de curent sau al unei defecțiuni a câmpului magnetic, pentru a evita contactul direct și deteriorarea componentelor. Sunt esențiali în aplicații de mare viteză, unde o oprire necontrolată ar putea distruge spindle-ul."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"GMN - Home","url":"https://www.gmn.de/en/","publisher":"GMN","accessed":"2026-09-25"},
      {"title":"GMN - Spindles","url":"https://www.gmn.de/en/products/spindles/","publisher":"GMN","accessed":"2026-09-25"},
      { title: "GMN Paul Müller Industrie — Homepage", url: "https://www.gmn.de/en/", publisher: "GMN Paul Müller Industrie GmbH & Co. KG", accessed: "2026-09-22" },
      { title: "GMN — Company History and Profile", url: "https://www.gmn.de/en/company/", publisher: "GMN Paul Müller Industrie GmbH & Co. KG", accessed: "2026-09-22" },
    ],
  },

  'rollon': {
    name: "Rollon",
    founded: 1975,
    headquarters: "Vimercate, Italia",
    overview: `Rollon este un producător italian de sisteme de mișcare liniară, fondat în 1975 de inginerul Pino Sacheli la Sesto San Giovanni și mutat, în 2001, cu sediul italian la Vimercate, lângă Milano. Din 2018 face parte din grupul american The Timken Company, alături de alte mărci de mișcare liniară precum Nadella sau Durbal. Din gama Rollon putem oferta ghidaje liniare, șine telescopice, actuatoare liniare, sisteme multi-axe și șuruburi cu bile din seriile XP, XL și XT, pentru aplicații unde piesele trebuie deplasate precis pe o cursă liniară.

Rollon este concentrat pe mișcarea liniară — ghidaje, șine telescopice și actuatoare —, cu șuruburi cu bile din seriile XP, XL și XT. Compania operează în 11 țări, cu 14 unități de producție, ceea ce înseamnă acces la mai multe linii de fabricație pentru aceeași familie de produse, nu doar la o singură fabrică centrală.

Pentru linii de automatizare sau depozitare din România, gama Rollon e relevantă la sisteme de extindere telescopică — sertare industriale, platforme de acces — și la axele liniare din celule robotizate, acolo unde greutatea sau cursa depășesc ce oferă un ghidaj liniar standard.`,
    whyChoose: [
      "Peste 50 de ani de specializare exclusivă pe sisteme de mișcare liniară, din 1975 până azi",
      "Șuruburi cu bile din seriile XP, XL și XT; caracteristicile fiecărei serii se confirmă pe cod, din documentația Rollon",
      "14 unități de producție în 11 țări, prin apartenența la grupul Timken",
      "Portofoliu extins în grupul Timken prin Nadella Group și Rosa Sistemi (achiziționate în 2023), alături de Durbal, cu acces la tehnologii complementare de mișcare liniară",
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
        description: "Șuruburi cu bile din seriile XP, XL și XT; caracteristicile fiecărei serii (sarcină, viteză, precizie) le confirmăm pe cod, din documentația Rollon. Selecția depinde de combinația specifică sarcină-viteză-precizie a aplicației."
      }
    ],
    industries: [
      "Aerospațial — sisteme de mișcare liniară pentru echipamente la bord",
      "Electronică — poziționare de precizie în linii de asamblare",
      "Robotică și automatizare — axe liniare pentru celule robotizate",
      "Manipulare materiale — șine telescopice pentru sertare și platforme de acces",
      "Calea ferată — componente de mișcare liniară pentru echipamente feroviare"
    ],
    infinitrade: `Disponibilitatea și termenul pentru fiecare referință Rollon le confirmăm la fiecare ofertă. Livrăm ghidaje, șine telescopice și șuruburi cu bile din gama Rollon la comandă, prin canale de aprovizionare din Uniunea Europeană, iar termenul orientativ este de 1–4 săptămâni de la confirmare. Pentru a pregăti o ofertă, avem nevoie de seria exactă — XP, XL sau XT —, cursa necesară și sarcina pe care trebuie să o susțină sistemul. Nu putem promite disponibilitate permanentă din stoc pentru fiecare lungime sau variantă din această gamă.`,
    limitation: "Nu putem confirma compatibilitatea unui ghidaj sau a unei șine telescopice cu un sistem existent fără desenul tehnic sau codul complet transmis de client.",
    productCodes: [
      {
        "code": "Compact Rail",
        "description": "Ghidaj liniar cu profil C, autoaliniere, oțel carbon călit"
      },
      {
        "code": "Plus 2",
        "description": "Ghidaj liniar cu profil C, generație îmbunătățită față de Compact Rail"
      },
      {
        "code": "V-Line 2",
        "description": "Ghidaj liniar cu profil V, pentru sarcini mari și cicluri intense"
      },
      {
        "code": "Rolbloc",
        "description": "Ghidaj liniar prismatic cu role conice"
      },
      {
        "code": "Heavy Line",
        "description": "Ghidaj liniar pentru sarcini mari, dinamică ridicată și medii cu praf"
      },
      {
        "code": "Base Line",
        "description": "Sistem de ghidare cu șine și role, pentru sarcini ușoare și medii"
      },
      {
        "code": "U-Line",
        "description": "Ghidaj liniar compact din aluminiu, cu căi de rulare interne"
      },
      {
        "code": "Speedy Rail",
        "description": "Ghidaj liniar autoportant din aluminiu extrudat, cu role acoperite cu plastic"
      },
      {
        "code": "MG Rail",
        "description": "Ghidaj cu role recirculante, rigiditate și capacitate de sarcină ridicate"
      },
      {
        "code": "Cross Roller Rails",
        "description": "Ghidaj cu patru rânduri de role cilindrice, pentru precizie ridicată"
      },
      {
        "code": "XP Xtrem Position",
        "description": "Șurub cu bile de precizie, pentru aplicații de poziționare"
      },
      {
        "code": "XL Xtrem Load",
        "description": "Șurub cu bile pentru sarcini mari"
      },
      {
        "code": "XT Xtrem Transport",
        "description": "Șurub cu bile pentru aplicații de transport"
      },
      {
        "code": "TMBS",
        "description": "Șurub cu bile de transport, cu eficiență ridicată"
      },
      {
        "code": "Actuator liniar cu curea",
        "description": "Actuator pentru curse lungi și viteze mari"
      },
      {
        "code": "Actuator liniar cu cremalieră și pinion",
        "description": "Actuator pentru curse foarte lungi"
      },
      {
        "code": "Actuator liniar cu șurub cu bile",
        "description": "Actuator pentru aplicații de precizie ridicată"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între ghidajele Rollon Compact Rail și V-Line 2?",
        "a": "Compact Rail este un ghidaj autoaliniabil cu rulmenți, cu profil C din oțel carbon tras la rece, cu căi de rulare călite prin inducție și rectificate, în timp ce V-Line 2 are profil în V, cu căi de rulare călite și rulmenți cu bile în V, pentru cicluri de funcționare intense chiar și la sarcini mari. Alegerea depinde de greutatea deplasată, de viteza de lucru și de spațiul disponibil pentru montaj."
      },
      {
        "q": "Ce este șurubul cu bile Rollon XT Xtrem Transport?",
        "a": "XT este o serie de șuruburi cu bile din gama Rollon. Alături de ea, gama include seriile XP și XL; destinația și caracteristicile fiecărei serii le confirmăm pe cod, din documentația Rollon."
      },
      {
        "q": "Livrați ghidaje liniare Rollon în România?",
        "a": "Da, ghidajele și actuatoarele Rollon sunt aduse la cerere, cu un timp de așteptare estimat la 1–4 săptămâni, întrucât nu menținem un stoc propriu pentru o gamă atât de amplă de lungimi și profile. Pentru o ofertă avem nevoie de sarcina de lucru, lungimea cursei dorite și mediul de funcționare, curat, cu praf sau cu umiditate ridicată."
      },
      {
        "q": "Ce actuator liniar Rollon recomandați pentru curse lungi?",
        "a": "Pentru curse lungi, gama Rollon include actuatoare cu antrenare prin curea, potrivite pentru viteze mari și sarcini moderate, precum și actuatoare cu cremalieră și pinion, folosite acolo unde lungimea depășește ce poate acoperi un șurub cu bile clasic. Actuatorul cu șurub cu bile rămâne opțiunea pentru situațiile unde precizia de poziționare contează mai mult decât viteza."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Rollon - Linear Rails and Guides","url":"https://www.rollon.com/usa/en/line/linear-guides/","publisher":"Rollon","accessed":"2026-09-25"},
      { title: "Rollon — Linear Motion Systems (Homepage)", url: "https://www.rollon.com/", publisher: "Rollon S.p.A.", accessed: "2026-09-22" },
      { title: "Rollon USA — About Us", url: "https://www.rollon.com/usa/en/about-us/", publisher: "Rollon S.p.A. / The Timken Company", accessed: "2026-09-22" },
    ],
  },

  'nord-lock': {
    name: "Nord-Lock",
    overview: `Nord-Lock Group este un grup de origine suedeză specializat exclusiv în fixarea sigură a îmbinărilor cu șurub, prin patru tehnologii de brand: șaibele Nord-Lock, sistemele de tensionare Superbolt, sistemul hidraulic Boltight și Expander System. Din portofoliul grupului putem oferta în principal gama de șaibe Nord-Lock, folosite acolo unde o îmbinare cu șurub e supusă la vibrații sau șocuri dinamice și nu își poate permite să se desfacă singură în timp.

Diferența față de o șaibă de asigurare obișnuită sau față de un adeziv pentru filet e că gama Nord-Lock adună sub aceeași umbrelă patru abordări diferite ale aceleiași probleme — de la șaiba individuală, până la sisteme de tensionare controlată pentru șuruburi mari, folosite la flanșe sau la asamblări industriale grele. Grupul are site-uri dedicate mai multor piețe, printre care SUA, Marea Britanie, Germania, Franța, Suedia, Australia, Japonia, China, India și Brazilia.

Pentru mentenanța industrială din România, gama Nord-Lock are sens mai ales la reasamblarea flanșelor și îmbinărilor supuse la vibrații — pompe, compresoare, utilaje grele — unde o șaibă obișnuită s-a dovedit insuficientă în timp.`,
    whyChoose: [
      "Patru tehnologii de brand distincte — Nord-Lock, Superbolt, Boltight, Expander System — pentru fixarea sigură a șuruburilor, sub același grup",
      "Soluție dedicată special problemei de desfacere a șuruburilor la vibrații, nu un accesoriu generic de fixare",
      "Sistemele Superbolt și Boltight se adresează șuruburilor mari, la flanșe și asamblări industriale grele",
      "Site-uri dedicate mai multor piețe, pentru documentație și contact local"
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
    infinitrade: `Disponibilitatea fiecărui brand din portofoliu — Nord-Lock, Superbolt, Boltight, Expander System — o confirmăm la fiecare ofertă. Comandăm pentru client produse din acest portofoliu, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni de la confirmare. Pentru o ofertă corectă, avem nevoie de diametrul șurubului, aplicația exactă — flanșă, fundație, cuplaj — și, dacă există, codul de referință al piesei pe care o înlocuiește. Nu promitem disponibilitate permanentă din stoc pentru vreuna din cele patru tehnologii ale grupului.`,
    limitation: "Nu putem confirma parametrii tehnici — cupluri, diametre, toleranțe — pentru niciuna din cele patru tehnologii fără fișa de produs specifică de la producător.",
    productCodes: [
      {
        "code": "NL8",
        "description": "Șaibă de asigurare din oțel, dimensiune mică"
      },
      {
        "code": "NL14",
        "description": "Șaibă de asigurare din oțel"
      },
      {
        "code": "NL16sp",
        "description": "Șaibă de asigurare din oțel, seria sp; caracteristicile se confirmă pe cod, din documentația Nord-Lock"
      },
      {
        "code": "NL20ss-254",
        "description": "Șaibă de asigurare din inox, aliaj 254"
      },
      {
        "code": "NL39",
        "description": "Șaibă de asigurare din oțel, dimensiune mare"
      },
      {
        "code": "NL1/4\"",
        "description": "Șaibă de asigurare pentru filet imperial de un sfert de țol"
      },
      {
        "code": "NL1/2\"",
        "description": "Șaibă de asigurare pentru filet imperial de o jumătate de țol"
      },
      {
        "code": "NL1/2\"sp",
        "description": "Șaibă de asigurare din seria sp pentru filet de o jumătate de țol"
      },
      {
        "code": "Superbolt tensionor tip piuliță (MJT)",
        "description": "Sistem de tensionare cu șuruburi periferice, montat ca o piuliță"
      },
      {
        "code": "Superbolt tensionor jamnut (SJ)",
        "description": "Tensionor cu profil redus, pentru cuplu mic de instalare"
      },
      {
        "code": "Superbolt HyFit",
        "description": "Bolț de cuplare cu expansiune hidraulică"
      },
      {
        "code": "Superbolt EzFit",
        "description": "Bolț de cuplare cu expansiune mecanică"
      }
    ],
    faq: [
      {
        "q": "Cum aleg dimensiunea corectă a șaibei Nord-Lock?",
        "a": "Dimensiunea se alege în funcție de diametrul șurubului folosit: pentru filet metric există coduri precum NL8, NL14 sau NL39, iar pentru filet imperial există variante dedicate precum NL1/4 sau NL1/2 țol. Materialul, oțel sau inox 254, se alege în funcție de mediul de lucru, coroziv sau nu, în care va funcționa îmbinarea."
      },
      {
        "q": "Ce diferență este între Superbolt HyFit și EzFit de la Nord-Lock?",
        "a": "HyFit folosește expansiune hidraulică pentru a fixa bolțul de cuplare în alezaj, oferind o precizie ridicată a ajustării, în timp ce EzFit realizează aceeași funcție prin expansiune mecanică, fără a fi nevoie de echipament hidraulic auxiliar. Alegerea depinde de infrastructura disponibilă la montaj și de toleranța de ajustare cerută de aplicație."
      },
      {
        "q": "Livrați șaibe și tensionoare Nord-Lock în România?",
        "a": "Da, șaibele și tensionoarele Nord-Lock se procură punctual, cu un termen tipic cuprins între 1 și 4 săptămâni, pentru că numărul mare de dimensiuni și materiale nu permite menținerea unui stoc propriu pe raft. Pentru o ofertă corectă avem nevoie de diametrul șurubului, materialul dorit și dacă aplicația necesită tensionare cu chei dinamometrice sau cu sistemul Superbolt."
      },
      {
        "q": "Ce este sistemul de tensionare Superbolt de la Nord-Lock?",
        "a": "Superbolt este un sistem de tensionare a șuruburilor mari prin intermediul mai multor șuruburi periferice mai mici, montate într-o piuliță specială, care permit atingerea unei forțe de strângere ridicate cu un cuplu de instalare redus. Este folosit acolo unde o cheie dinamometrică obișnuită nu ar putea genera forța necesară pentru un șurub de diametru mare."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"NL14, Lock Washer Steel","url":"https://www.nord-lock.com/en-gb/shop/washers/steel/nl14/","publisher":"Nord-Lock Group","accessed":"2026-09-25"},
      {"title":"Superbolt HyFit Hydraulic Expansion Coupling Bolts","url":"https://www.nord-lock.com/en-us/superbolt/products/hyfit/","publisher":"Nord-Lock Group","accessed":"2026-09-25"},
      { title: "Nord-Lock Group — Secure Bolting Solutions (Homepage)", url: "https://www.nord-lock.com", publisher: "Nord-Lock Group", accessed: "2026-09-22" },
      { title: "Nord-Lock Group — Brands: Nord-Lock, Superbolt, Boltight, Expander System", url: "https://www.nord-lock.com", publisher: "Nord-Lock Group", accessed: "2026-09-22" },
    ],
  },

  'sgb-smit': {
    name: "SGB-SMIT",
    founded: 1913,
    headquarters: "Regensburg, Germania",
    overview: `SGB-SMIT este un producător german de transformatoare electrice, cu sediul la Regensburg și activitate din 1913. Grupul acoperă toată plaja de puteri: transformatoare de mare putere de până la 765 kV (produse la Nijmegen, în Olanda), transformatoare de putere medie, transformatoare de distribuție în ulei între 50 și 2.500 kVA, transformatoare uscate în rășină turnată de până la 25 MVA la 40,5 kV, precum și stații compacte prefabricate din seriile LCS-E, NDV400/401 și NDV1600/2500.

SGB-SMIT acoperă simultan segmentul de putere mare, cel de distribuție și cel uscat, cu fabrici în Germania, Olanda, SUA, Malaysia, India, China, Cehia și Franța. Gama de transformatoare de distribuție în ulei, cu peste 60 de ani de experiență de fabricație declarată de producător, acoperă intervalul uzual 50-2.500 kVA pentru posturi de transformare industriale și de rețea, iar varianta uscată în rășină turnată e alegerea firească acolo unde uleiul mineral nu e acceptat din motive de siguranță sau spațiu.

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
        description: "Segment produs în fabricile grupului, pentru puteri intermediare între distribuția de bază și transformatoarele de mare putere, folosit la substații industriale și de rețea de dimensiune medie."
      },
      {
        name: "Transformatoare de Distribuție în Ulei",
        description: "Gamă de 50 până la 2.500 kVA, cu peste 60 de ani de experiență declarată de producător în acest segment. Reprezintă soluția standard pentru posturi de transformare industriale sau de rețea de joasă și medie tensiune. Pentru ofertă avem nevoie de puterea nominală, tensiunea primară și secundară și tipul de montaj (interior sau exterior)."
      },
      {
        name: "Transformatoare Uscate în Rășină Turnată",
        description: "Transformatoare fără ulei, de până la 25 MVA la 40,5 kV, disponibile și în variantă VPI (impregnare sub vid), produse în mai multe țări ale grupului. Alegerea firească acolo unde regulamentele de incendiu sau spațiul disponibil nu permit un transformator în ulei, de exemplu în clădiri sau spații interioare."
      },
      {
        name: "Stații Compacte",
        description: "Posturi de transformare prefabricate, din seriile LCS-E, NDV400/401 și NDV1600/2500, produse la fabrica din Neumark, Germania, pentru posturi de transformare prefabricate; configurația se confirmă pe cod."
      }
    ],
    industries: [
      "Producție și distribuție de energie electrică — transformatoare de rețea și de putere",
      "Industrie — posturi de transformare pentru consumatori industriali mari",
      "Industrie grea și utilități — transformatoare pentru alimentarea consumatorilor de putere mare",
      "Infrastructură — clădiri și instalații cu necesar propriu de transformare"
    ],
    infinitrade: `Programul de producție și disponibilitatea le confirmăm la fiecare ofertă. Aducem transformatoare din gama SGB-SMIT la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni pentru unități standard de catalog — proiectele speciale, configurate pe cerere, au termene stabilite direct de producător, pe care le comunicăm clientului odată confirmate. Pentru o ofertă, avem nevoie de puterea nominală, tensiunea primară și secundară și tipul de montaj dorit. Nu promitem disponibilitate permanentă din stoc, fiindcă majoritatea unităților se fabrică la comandă pe specificația proiectului.`,
    limitation: "Nu putem confirma termenul de fabricație pentru un transformator configurat special, în afara celui orientativ pe care îl comunicăm pentru unități de catalog.",
    productCodes: [
      {
        "code": "LCS-E",
        "description": "Stație compactă de distribuție"
      },
      {
        "code": "NDV400/NDV401",
        "description": "Stație compactă de distribuție din familia NDV"
      },
      {
        "code": "NDV1600/NDV2500",
        "description": "Stație compactă de distribuție, capacitate mai mare din familia NDV"
      },
      {
        "code": "Transformator elevator de generator",
        "description": "Transformator pentru centrale de producere a energiei"
      },
      {
        "code": "Autotransformator de mare putere",
        "description": "Autotransformator pentru rețele de înaltă tensiune"
      },
      {
        "code": "Transformator de rețea",
        "description": "Transformator pentru interconectarea rețelelor electrice de mare putere"
      },
      {
        "code": "Transformator defazor",
        "description": "Transformator pentru controlul fluxului de putere activă"
      },
      {
        "code": "Reactor de mare putere",
        "description": "Reactor pentru compensarea reactivă în rețea"
      },
      {
        "code": "Transformator de putere medie",
        "description": "Produs în fabricile grupului"
      },
      {
        "code": "Transformator de distribuție în ulei",
        "description": "Putere între 50 și 2500 kVA"
      },
      {
        "code": "Transformator uscat în rășină turnată",
        "description": "Putere de până la 25 MVA, tensiune de până la 40,5 kV"
      },
      {
        "code": "Transformator uscat cu impregnare VPI",
        "description": "Variantă alternativă de transformator uscat"
      },
      {
        "code": "Transformator uscat Gravity Line",
        "description": "Variantă din gama de transformatoare uscate"
      }
    ],
    faq: [
      {
        "q": "Ce este stația compactă LCS-E de la SGB-SMIT?",
        "a": "LCS-E este o stație compactă de distribuție produsă de SGB-SMIT, produsă la Neumark, Germania, iar configurația ei exactă o confirmăm pe cod. Alături de LCS-E, gama include și modelele NDV400, NDV401, NDV1600 și NDV2500, cu capacități diferite pentru proiecte de distribuție a energiei electrice."
      },
      {
        "q": "Ce diferență este între un transformator uscat în rășină turnată și unul VPI la SGB-SMIT?",
        "a": "Transformatorul în rășină turnată încapsulează bobinele într-un bloc solid de rășină epoxidică, oferind o rezistență bună la umiditate și o întreținere redusă, în timp ce varianta cu impregnare VPI folosește un proces de impregnare sub vid, potrivit pentru aplicații cu cerințe termice diferite. Alegerea depinde de mediul de instalare și de bugetul proiectului."
      },
      {
        "q": "Livrați transformatoare SGB-SMIT în România?",
        "a": "Da, transformatoarele SGB-SMIT se comandă la cerere: fiecare unitate se produce conform puterii și tensiunii solicitate, fără un stoc propriu pe raft, iar termenul se confirmă după analiza specificației (pentru unități configurate, de regulă peste 4 săptămâni). Pentru o ofertă avem nevoie de puterea nominală, nivelul de tensiune, tipul de montaj, în ulei sau uscat, și locul de instalare."
      },
      {
        "q": "Ce putere acoperă transformatoarele de distribuție în ulei SGB-SMIT?",
        "a": "Transformatoarele de distribuție în ulei produse de SGB-SMIT acoperă un interval de putere între 50 și 2500 kVA, fiind produse în fabricile grupului. Pentru puteri mai mari sau tensiuni ridicate, producătorul oferă transformatoare de putere medie și mare, respectiv autotransformatoare și transformatoare de rețea, dedicate proiectelor de infrastructură electrică."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"SGB-SMIT - Products","url":"https://www.sgb-smit.com/products/","publisher":"SGB-SMIT Group","accessed":"2026-09-25"},
      { title: "SGB-SMIT Group — Homepage", url: "https://www.sgb-smit.com/", publisher: "SGB-SMIT Group", accessed: "2026-09-22" },
      { title: "SGB-SMIT — Product Range (Transformers)", url: "https://www.sgb-smit.com/products/", publisher: "SGB-SMIT Group", accessed: "2026-09-22" },
    ],
  },

  'ufi-filters': {
    name: "UFI Filters",
    founded: 1971,
    headquarters: "Porto Mantovano (Mantova), Italia",
    overview: `UFI Filters este un producător italian de sisteme de filtrare, cu sediul la Porto Mantovano, lângă Mantova, și activitate din 1971. Gama acoperă filtre de aer, ulei, combustibil, habitaclu și hidraulice, plus sisteme de gestionare termică. Din portofoliul UFI Filters putem oferta filtre pentru motoare și pentru sisteme hidraulice industriale.

UFI Filters are și aplicații în motorsport și aerospațial: potrivit producătorului, produsele sale ajung de la echipe din Formula 1 până la nava spațială europeană ExoMars. Compania operează 21 de site-uri industriale în 21 de țări, cu peste 4.000 de angajați și trei centre proprii de cercetare, unde declară peste 280 de brevete înregistrate — un indiciu că nu doar asamblează filtre, ci și proiectează materialul filtrant.

Pentru flote auto, utilaje industriale sau echipamente hidraulice din România, gama UFI Filters e o opțiune la înlocuirea filtrelor de întreținere periodică sau la completarea unei linii hidraulice unde filtrul original nu mai e disponibil rapid.`,
    whyChoose: [
      "Filtre de aer, ulei, combustibil, habitaclu și hidraulice, plus sisteme termice, sub aceeași marcă",
      "Gamă hidraulică (filtre de aspirație, presiune, retur, off-line și de transmisie), utilă pentru echipamente industriale cu circuite hidraulice variate",
      "Certificări IATF 16949 pentru industria auto, EN 9100 pentru aerospațial și AQAP 2110 pentru apărare",
      "Aplicații în motorsport și aerospațial, dincolo de segmentul auto de bază",
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
        description: "Filtre pentru circuite hidraulice industriale, folosite la utilaje, prese sau echipamente cu sisteme hidraulice de putere. Din cauza numărului mare de referințe, avem nevoie de codul exact al filtrului original sau de datele complete ale echipamentului pentru a identifica varianta corectă."
      },
      {
        name: "Linii de Gestionare Termică",
        description: "Sisteme pentru managementul termic, complementare filtrării, orientate spre aplicații unde temperatura fluidului de lucru trebuie controlată alături de puritatea lui. Detaliile tehnice exacte depind de aplicația specifică a clientului."
      }
    ],
    industries: [
      "Automotive — vehicule ușoare, grele, motociclete și utilaje agricole",
      "Motorsport — filtrare pentru competiții auto",
      "Aerospațial și apărare — sisteme de calitate certificate EN 9100 și AQAP 2110",
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
    infinitrade: `Disponibilitatea o confirmăm la fiecare ofertă, în funcție de referința solicitată. Aducem filtre din gama UFI la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni de la confirmarea comenzii — pentru referințele curente de întreținere, termenul poate fi mai scurt, dar nu îl promitem în avans. Pentru o ofertă, avem nevoie de codul original al filtrului sau de datele echipamentului — marcă, model, motor — pe care se montează. Nu putem confirma disponibilitate permanentă din stoc pentru fiecare referință hidraulică din catalog.`,
    limitation: "Nu putem confirma echivalența exactă cu un filtru OEM concurent fără codul de referință transmis de client.",
    productCodes: [
      {
        "code": "ARGENTIUM",
        "description": "Mediu filtrant pentru filtrele de aer de habitaclu"
      },
      {
        "code": "UFI MULTITUBE",
        "description": "Sistem de filtrare a aerului pentru motor"
      },
      {
        "code": "Filtre OE pentru vehicule ușoare",
        "description": "Gamă de echipare originală pentru autoturisme"
      },
      {
        "code": "Filtre OE pentru vehicule grele",
        "description": "Gamă de echipare originală pentru camioane și utilaje"
      },
      {
        "code": "Sisteme termice OE",
        "description": "Componente pentru gestionarea termică a vehiculului"
      },
      {
        "code": "Sisteme pentru celule de combustibil",
        "description": "Filtre dedicate sistemelor cu celule de combustibil"
      },
      {
        "code": "Filtru de aspirație hidraulic",
        "description": "Pentru circuitul de aspirație al uleiului hidraulic"
      },
      {
        "code": "Filtru de presiune hidraulic",
        "description": "Pentru linia de presiune a circuitului hidraulic"
      },
      {
        "code": "Filtru de retur hidraulic",
        "description": "Pentru linia de retur a circuitului hidraulic"
      },
      {
        "code": "Filtru off-line hidraulic",
        "description": "Pentru filtrare suplimentară pe un circuit separat"
      },
      {
        "code": "Filtru de transmisie hidraulic",
        "description": "Pentru uleiul din sistemul de transmisie"
      },
      {
        "code": "Indicator de colmatare",
        "description": "Semnalizează gradul de înfundare al filtrului"
      },
      {
        "code": "Element filtrant de schimb",
        "description": "Cartuș de schimb pentru carcasele hidraulice existente"
      }
    ],
    faq: [
      {
        "q": "Ce este mediul filtrant ARGENTIUM de la UFI Filters?",
        "a": "ARGENTIUM este mediul filtrant folosit de UFI Filters în construcția filtrelor de aer de habitaclu, gândit pentru reținerea particulelor fine din aerul care intră în interiorul vehiculului. Este integrat în filtrele destinate atât echipării originale, cât și pieselor de schimb, alături de sistemul UFI MULTITUBE, folosit pentru filtrarea aerului admis în motor."
      },
      {
        "q": "Ce diferență este între filtrele de presiune și cele de retur la UFI Filters?",
        "a": "Filtrul de presiune se montează pe linia de refulare a pompei hidraulice, unde trebuie să reziste la valori ridicate de presiune, în timp ce filtrul de retur se montează pe linia prin care uleiul se întoarce în rezervor, la presiune scăzută. Ambele contribuie la menținerea curățeniei fluidului hidraulic, dar au construcție și rezistență mecanică diferite."
      },
      {
        "q": "Livrați filtre UFI Filters în România?",
        "a": "Da, filtrele UFI Filters se procură punctual, cu un termen orientativ cuprins între 1 și 4 săptămâni, întrucât gama acoperă un număr foarte mare de coduri pentru vehicule și echipamente și nu este ținută integral pe raft. Pentru o ofertă corectă avem nevoie de marca și modelul vehiculului sau echipamentului, precum și codul original ori codul UFI cunoscut."
      },
      {
        "q": "Ce este sistemul UFI MULTITUBE pentru filtrarea aerului motor?",
        "a": "UFI MULTITUBE este un sistem de filtrare a aerului admis în motor, conceput cu o structură din tuburi, care pot fi dispuse în configurații geometrice diferite, spre deosebire de panourile filtrante clasice. Este folosit atât pe filtrele pentru echipare originală, cât și pe cele destinate pieselor de schimb din aftermarket."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"UFI Filters - Products","url":"https://www.ufifilters.com/en/products/","publisher":"UFI Filters","accessed":"2026-09-25"},
      {"title":"UFI Hydraulics - Products","url":"https://www.ufihyd.com/en/products/","publisher":"UFI Filters","accessed":"2026-09-25"},
      { title: "UFI Filters — Homepage", url: "https://www.ufifilters.com/", publisher: "UFI Filters S.p.A.", accessed: "2026-09-22" },
      { title: "UFI Filters — The Group", url: "https://www.ufifilters.com/en/the-group/", publisher: "UFI Filters S.p.A.", accessed: "2026-09-22" },
      { title: "UFI Filters — Certifications", url: "https://www.ufifilters.com/en/the-group/certifications/", publisher: "UFI Filters S.p.A.", accessed: "2026-09-22" },
    ],
  },

  'dosatron': {
    name: "Dosatron",
    overview: `Dosatron este un producător francez de pompe dozatoare proporționale acționate hidraulic, fără nicio sursă de energie electrică. Pompa funcționează pe principiul unui motor hidraulic intern, pus în mișcare chiar de fluxul de apă care trece prin ea, și injectează un concentrat — îngrășământ, dezinfectant sau alt aditiv — proporțional cu acest debit. Din gama Dosatron putem oferta pompe pentru irigație, sănătate animală și tratarea apei.

Avantajul principal al gamei Dosatron e că funcționează și acolo unde nu există alimentare electrică — la o linie de irigație în câmp, la un adăpost de animale sau la un punct de tratare a apei izolat. Dozajul este proporțional cu debitul de apă care trece prin pompă.

Pentru ferme, sere sau stații de tratare a apei din România fără alimentare electrică la punctul de dozare, gama Dosatron e o soluție de luat în calcul, mai ales la instalații noi sau la extinderea uneia existente.`,
    whyChoose: [
      "Funcționare fără energie electrică, doar pe presiunea apei din rețea, utilă la puncte de dozare izolate",
      "Dozaj proporțional cu debitul de apă care trece prin pompă",
      "Aplicabilitate atât în agricultură (irigație, fertirigare), cât și în sănătate animală și tratarea apei",
      "Familii de pompe pentru instalații de dimensiuni diferite (D07RE, D3RE, D8RE, D25RE, D45RE)"
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
    infinitrade: `Disponibilitatea și termenul pentru fiecare model le confirmăm la fiecare ofertă. Procurăm pompele dozatoare Dosatron la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de debitul de apă disponibil, raportul de dozaj dorit și tipul de concentrat injectat, pentru a verifica compatibilitatea chimică. Nu promitem disponibilitate permanentă din stoc pentru fiecare model din gamă, mai ales pentru variantele mai puțin uzuale.`,
    limitation: "Nu putem confirma modelul exact recomandat pentru o instalație fără datele de debit și presiune trimise de client.",
    productCodes: [
      {
        "code": "D3RE2",
        "description": "Pompă dozatoare cu piston, acționată direct de presiunea apei, din familia D3RE"
      },
      {
        "code": "D3RE5VF",
        "description": "Variantă cu raport de dozare reglabil; intervalul și debitul se confirmă pe cod, din documentația Dosatron"
      },
      {
        "code": "D3RE10VF",
        "description": "Variantă cu raport de dozare reglabil; intervalul și debitul se confirmă pe cod, din documentația Dosatron"
      },
      {
        "code": "D3RE25IEVF",
        "description": "Variantă cu raport de dozare reglabil; intervalul și debitul se confirmă pe cod, din documentația Dosatron"
      },
      {
        "code": "D3RE3000",
        "description": "Pompă din familia D3RE dimensionată pentru debite mai mari de apă"
      },
      {
        "code": "D07RE5",
        "description": "Pompă dozatoare compactă din familia D07RE, pentru instalații de mici dimensiuni"
      },
      {
        "code": "D07RE125",
        "description": "Variantă a familiei D07RE cu un alt raport fix de dozare"
      },
      {
        "code": "D8RE2",
        "description": "Pompă dozatoare din familia D8RE, folosită pentru fertirigare și tratarea apei"
      },
      {
        "code": "D8RE5",
        "description": "Variantă a familiei D8RE cu un raport de dozare superior modelului D8RE2"
      },
      {
        "code": "D8RE3000",
        "description": "Pompă din familia D8RE gândită pentru debite ridicate de apă"
      },
      {
        "code": "D25RE2",
        "description": "Pompă dozatoare din familia D25RE; intervalul de dozare se confirmă pe cod, din documentația Dosatron"
      },
      {
        "code": "D25RE4",
        "description": "Variantă a familiei D25RE cu propriul interval de dozare"
      },
      {
        "code": "D25RE10",
        "description": "Variantă a familiei D25RE cu un raport de dozare mai ridicat"
      },
      {
        "code": "D45RE15",
        "description": "Pompă din familia D45RE, dimensionată pentru instalații de capacitate mare"
      },
      {
        "code": "D45RE3000",
        "description": "Variantă a familiei D45RE pentru cele mai mari debite de apă"
      }
    ],
    faq: [
      {
        "q": "Cum aleg pompa Dosatron potrivită pentru sistemul meu de fertirigare?",
        "a": "Alegerea pompei Dosatron pornește de la debitul de apă al instalației și de la raportul de dozare dorit, exprimat procentual: familia D3RE acoperă rapoarte mici și medii, iar D25RE sau D45RE sunt gândite pentru debite mai mari. Trebuie luate în calcul și presiunea disponibilă pe rețea, precum și tipul de substanță dozată, îngrășământ lichid sau produs pentru tratarea apei."
      },
      {
        "q": "Ce înseamnă litera VF la seria D3RE de la Dosatron?",
        "a": "Intervalul de dozare, debitul maxim și semnificația exactă a sufixului VF le confirmăm pe cod, din documentația Dosatron, pentru că depind de model."
      },
      {
        "q": "Livrați pompe Dosatron în România?",
        "a": "Da, pompele Dosatron ajung la comandă, de regulă în 1–4 săptămâni, deoarece nu ținem această gamă pe raft, având în vedere numărul mare de variante de debit și raport de dozare. La solicitarea unei oferte ne sunt utile debitul de apă disponibil, raportul de dozare dorit și aplicația exactă, irigație, sănătate animală sau tratarea apei."
      },
      {
        "q": "Ce diferență este între familiile D8RE și D25RE la Dosatron?",
        "a": "Diferența principală constă în debitul de apă acoperit: familia D8RE este gândită pentru instalații mai mici, cu variante precum D8RE2 sau D8RE5, în timp ce D25RE acoperă debite mai mari, utile la sisteme de fertirigare extinse sau la ferme cu consum ridicat de apă. Ambele familii funcționează hidraulic, fără alimentare electrică, folosind chiar presiunea apei din rețea."
      }
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Generic Dosing Pumps","url":"https://www.dosatron.com/en/products/generic-dosing-pumps/","publisher":"Dosatron International","accessed":"2026-09-25"},
      {"title":"Dosatron - Products","url":"https://www.dosatron.com/en/products/","publisher":"Dosatron International","accessed":"2026-09-25"},
      { title: "Dosatron — Water Powered Dosing Pumps (Homepage)", url: "https://www.dosatron.com", publisher: "Dosatron International", accessed: "2026-09-22" },
      { title: "Dosatron USA — Homepage", url: "https://www.dosatronusa.com/", publisher: "Dosatron International", accessed: "2026-09-22" },
    ],
  },

  'ewm': {
    name: "EWM",
    headquarters: "Mündersbach, Germania",
    overview: `EWM este un producător german de aparate de sudură, cu sediul la Mündersbach. Gama acoperă sudura MIG/MAG prin seriile XQ și Picomig, sudura WIG (TIG) prin seria XQ — cunoscută și ca Tetrix XQ — și familia Picotig, plus aparate pentru sudura manuală cu electrod (MMA). Din portofoliul EWM putem oferta atât aparate pentru service și ateliere mici, cât și sisteme pentru sudura robotizată.

EWM acoperă și zona de automatizare a sudurii, cu sisteme pentru roboți și cobot-uri prin linia React și cu software-ul propriu Xnet 3 pentru monitorizarea și documentarea proceselor de sudură — relevant pentru ateliere care trebuie să demonstreze trasabilitatea sudurilor. Producătorul are în ofertă o secțiune dedicată „WPQR EN 1090” (raport de calificare a procedurii de sudare), relevantă pentru structurile metalice executate conform EN 1090.

Pentru ateliere de sudură și confecții metalice din România, gama EWM are sens acolo unde trebuie documentată trasabilitatea sudurii pe structuri metalice conform EN 1090, sau unde se ia în calcul o primă automatizare a procesului cu un cobot de sudură.`,
    whyChoose: [
      "Gamă separată pentru MIG/MAG (XQ, Picomig) și pentru WIG (XQ, Picotig), fiecare cu variante dedicate",
      "Sisteme de automatizare a sudurii pentru roboți și cobot-uri, prin linia React",
      "Software propriu Xnet 3 pentru monitorizarea și documentarea proceselor de sudură",
      "Secțiune dedicată WPQR EN 1090 în oferta producătorului, relevantă pentru atelierele care lucrează la structuri metalice conform EN 1090",
      "Sediu la Mündersbach, Germania"
    ],
    keyProducts: [
      {
        name: "Aparate MIG/MAG Seria XQ",
        description: "Gamă a producătorului pentru sudură MIG/MAG, folosită atât la service industrial, cât și la producție de serie mică sau medie. Pentru ofertă avem nevoie de materialul de sudat, grosimea pieselor și curentul de sudură necesar."
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
    infinitrade: `Disponibilitatea și termenul pentru fiecare model le confirmăm la fiecare ofertă (Ewm). Aducem aparate de sudură EWM la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de procedeul de sudură dorit — MIG/MAG, WIG sau electrod —, curentul necesar și dacă echipamentul trebuie integrat într-o celulă robotizată. Nu promitem disponibilitate permanentă din stoc pentru fiecare model din gamă, mai ales pentru variantele robotizate configurate pe proiect.`,
    limitation: "Nu putem confirma disponibilitatea locală a service-ului în garanția producătorului pentru un aparat EWM adus prin comandă.",
    productCodes: [
      {
        "code": "XQ Series MIG/MAG",
        "description": "Aparate de sudură MIG/MAG din gama profesională EWM"
      },
      {
        "code": "Picomig Series",
        "description": "Aparate MIG/MAG compacte din gama EWM Pico"
      },
      {
        "code": "XQ Series TIG",
        "description": "Aparate de sudură TIG din gama profesională EWM"
      },
      {
        "code": "Picotig Series",
        "description": "Aparate TIG compacte și portabile din gama EWM Pico"
      },
      {
        "code": "TETRIX XQ",
        "description": "Aparat de sudură TIG din familia XQ a EWM"
      },
      {
        "code": "Titan XQ Puls",
        "description": "Aparat de sudură MIG/MAG cu impulsuri, din familia XQ"
      },
      {
        "code": "Picomax XQ",
        "description": "Aparat de sudură din oferta EWM; seria și procedeul se confirmă pe cod, din documentația producătorului"
      },
      {
        "code": "React",
        "description": "Sistem de sudură robotizată din gama de automatizare EWM"
      },
      {
        "code": "EWM Co-bot Welding",
        "description": "Soluție de sudură colaborativă cu robot pentru linii mici de producție"
      },
      {
        "code": "ewm Xnet 3",
        "description": "Software de monitorizare și gestionare a datelor de sudură EWM"
      },
      {
        "code": "Degaussing equipment",
        "description": "Echipament pentru demagnetizarea pieselor înainte de sudare"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între gamele EWM XQ și Picomig/Picotig?",
        "a": "Gama XQ cuprinde aparate EWM de sudură MIG/MAG și TIG gândite pentru utilizare profesională intensivă, cu funcții avansate de reglaj. Gama Picomig și Picotig oferă echipamente mai compacte, mai ușor de transportat, potrivite pentru ateliere mici sau lucrări la distanță. Alegerea corectă depinde de volumul de sudură zilnic și de necesitatea de a muta frecvent aparatul între șantiere."
      },
      {
        "q": "Livrează EWM aparate de sudură pentru clienți din România?",
        "a": "Da, comandăm pentru client aparate din gamele XQ, Picomig sau Picotig, pe baza denumirii complete confirmate din documentația oficială EWM. Gama nu se află pe raftul nostru; comanda pornește de la disponibilitatea publicată de EWM, cu un termen obișnuit de 1–4 săptămâni."
      },
      {
        "q": "Ce detalii sunt utile pentru o ofertă la un aparat de sudură EWM?",
        "a": "Menționați procesul dorit dintre gamele XQ sau Pico, puterea sursei în amperi, tensiunea rețelei disponibile în atelier și dacă echipamentul va fi integrat într-o celulă robotizată React sau folosit manual. Pentru un aparat de înlocuire, denumirea de pe plăcuța vechiului echipament ajută la găsirea unui corespondent direct în gama EWM actuală, fără a pierde funcțiile deja folosite de operator."
      },
      {
        "q": "Ce este sistemul EWM Co-bot Welding?",
        "a": "Este o soluție de sudură colaborativă, în care un robot lucrează alături de operator pentru sarcini repetitive, fără gardurile de protecție complexe ale roboților industriali clasici. Se folosește frecvent în producția de serie mică sau medie, unde flexibilitatea contează mai mult decât viteza maximă de sudare. Configurația exactă depinde de piesele sudate și de spațiul disponibil pe linia de producție."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"MIG/MAG Welding Machines | EWM","url":"https://www.ewm-group.com/en/products/mig-mag-welders","publisher":"EWM","accessed":"2026-09-26"},
      {"title":"Automation & Robotics | EWM","url":"https://www.ewm-group.com/en/products/automation","publisher":"EWM","accessed":"2026-09-26"},
      { title: "EWM GmbH — Homepage", url: "https://www.ewm-group.com", publisher: "EWM GmbH", accessed: "2026-09-22" },
      { title: "EWM — Products Overview", url: "https://www.ewm-group.com/en/products", publisher: "EWM GmbH", accessed: "2026-09-22" },
    ],
  },

  'kemppi': {
    name: "Kemppi",
    founded: 1949,
    headquarters: "Lahti, Finlanda",
    overview: `Kemppi este un producător finlandez de aparate de sudură, fondat în 1949 și cu sediul la Lahti. Gama include aparate MIG/MAG portabile din seria Minarc (Minarc M, sub 12 kg, la 220A), aparate TIG din seria Master (Master T, AC/DC) și echipamente pentru sudura robotizată — aparatul industrial AX MIG Welder. Din portofoliul Kemppi putem oferta atât aparate portabile pentru service, cât și sisteme pentru linii de sudură automatizată.

Kemppi acoperă atât capătul portabil al pieței — aparate ușoare pentru intervenții pe teren sau service — cât și capătul industrial, cu sisteme robotizate complete pentru producție de serie. Compania are prezență directă în 16 țări, ceea ce înseamnă documentație tehnică și suport disponibile pe mai multe piețe, nu doar în Finlanda.

Pentru service-uri mobile și ateliere de sudură din România, seria Minarc e relevantă ca aparat portabil de teren, iar Master T pentru sudura TIG de precizie unde calitatea cusăturii contează mai mult decât viteza.`,
    whyChoose: [
      "Aparat Minarc M portabil, sub 12 kg, la 220A, potrivit pentru intervenții de sudură pe teren",
      "Aparate Master T pentru TIG AC/DC de precizie, din gama Kemppi",
      "Sisteme dedicate sudurii robotizate, precum AX MIG Welder, pentru linii de producție automatizate",
      "Prezență directă în 16 țări, cu documentație tehnică și rețea de service disponibile pe mai multe piețe"
    ],
    keyProducts: [
      {
        name: "Aparat MIG/MAG Portabil Minarc M",
        description: "Aparat de sudură MIG/MAG portabil, cu o greutate de 11-12 kg și un curent de sudură de 220A, gândit pentru intervenții de service sau lucrări pe teren unde portabilitatea contează mai mult decât puterea maximă. Pentru ofertă avem nevoie de materialul și grosimea pieselor de sudat."
      },
      {
        name: "Aparat TIG Master T",
        description: "Aparat din gama Kemppi pentru sudura TIG în curent alternativ și continuu (AC/DC), folosit acolo unde calitatea și controlul cusăturii sunt prioritare — oțel inoxidabil, aluminiu, aliaje speciale."
      },
      {
        name: "Echipamente pentru sudura robotizată",
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
      "Producție de serie — sudură robotizată cu AX MIG Welder"
    ],
    infinitrade: `Pentru Kemppi ne bazăm pe informația de pe site-ul producătorului, fără acces la stocul lor real din Lahti. Punem la dispoziție aparatele de sudură Kemppi la comandă, prin canale de aprovizionare din Uniunea Europeană, cu termen orientativ de 1–4 săptămâni de la confirmare. Pentru o ofertă corectă, avem nevoie de procedeul dorit — MIG/MAG sau TIG —, curentul de sudură necesar și dacă aparatul e pentru uz portabil sau pentru integrare robotizată. Nu putem confirma disponibilitate permanentă din stoc pentru fiecare model din gamă, mai ales pentru sistemele robotizate configurate pe proiect.`,
    limitation: "Nu putem confirma configurația software sau parametrii de sudură presetați pentru sistemele robotizate Kemppi fără specificația tehnică a liniei clientului.",
    productCodes: [
      {
        "code": "X5 FastMig",
        "description": "Aparat multiproces modular pentru sudură MIG/MAG de înaltă performanță"
      },
      {
        "code": "X3 FastMig",
        "description": "Aparat MIG/MAG cu 420 A sinergic și 450 A puls la 60% factor de sarcină"
      },
      {
        "code": "Master M",
        "description": "Aparat compact pentru sudură manuală, sinergică și în puls"
      },
      {
        "code": "Kempact RA",
        "description": "Aparat compact pentru sudură MIG/MAG eficientă din punct de vedere al costului"
      },
      {
        "code": "Kempact MIG",
        "description": "Aparat MIG/MAG ușor, cu performanță ridicată a arcului"
      },
      {
        "code": "Minarc M",
        "description": "Aparat portabil cu putere de 220 A"
      },
      {
        "code": "Master M 205",
        "description": "Aparat portabil din familia Master M, variantă de 205 A"
      },
      {
        "code": "Master M 323",
        "description": "Aparat portabil din familia Master M, variantă de 323 A"
      },
      {
        "code": "Flexlite GXe",
        "description": "Pistolet de sudură profesional pentru lucrări solicitante"
      },
      {
        "code": "Flexlite GF",
        "description": "Pistolet de sudură cu funcție de extracție a fumului"
      },
      {
        "code": "Flexlite GXP Rotex",
        "description": "Pistolet de sudură industrial cu gât rotativ extensibil la 360°"
      },
      {
        "code": "SuperSnake",
        "description": "Sistem de subalimentare sincronizată a sârmei de sudură"
      },
      {
        "code": "SuperSnake GTX04HD",
        "description": "Sistem de subalimentare cu mecanism de antrenare a sârmei 4x4, pentru lucrări grele"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între aparatele Kemppi X5 FastMig și X3 FastMig?",
        "a": "X5 FastMig este un aparat multiproces modular, gândit pentru ateliere cu cerințe variate de sudură MIG/MAG, TIG sau electrod pe aceeași platformă, în timp ce X3 FastMig este orientat spre performanță ridicată la MIG/MAG, cu 420 A sinergic și 450 A în puls la 60% factor de sarcină. Alegerea depinde de nevoia de modularitate față de puterea brută necesară."
      },
      {
        "q": "Ce este sistemul SuperSnake de la Kemppi?",
        "a": "SuperSnake este un sistem de subalimentare sincronizată a sârmei de sudură, folosit atunci când distanța dintre sursa de sudură și piesa de lucru este mare, cum se întâmplă frecvent în construcții navale sau industria grea. Varianta GTX04HD folosește un mecanism de antrenare a sârmei de tip 4x4, pentru lucrări grele, la distanțe de până la 30 m față de derulatorul principal."
      },
      {
        "q": "Livrați aparate de sudură Kemppi în România?",
        "a": "Da, aparatele Kemppi ajung la comandă din catalogul producătorului, orientativ în 1–4 săptămâni, pentru că nu ținem în permanență această gamă pe raft. Pentru o ofertă corectă este util să menționați procesul de sudare dorit, puterea necesară în amperi și dacă aveți nevoie de un pistolet Flexlite anume."
      },
      {
        "q": "Ce diferență este între pistoalele Flexlite GXe și Flexlite GF de la Kemppi?",
        "a": "Flexlite GXe este un pistolet profesional destinat lucrărilor solicitante de sudură, cu accent pe ergonomie și durabilitate, în timp ce Flexlite GF adaugă o funcție de extracție a fumului direct la capul pistoletului, utilă în spații închise sau slab ventilate. Ambele fac parte din aceeași gamă de accesorii pentru sudură MIG/MAG."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"X5 FastMig – Professional multi-process welder","url":"https://www.kemppi.com/en/family/x5-fastmig","publisher":"Kemppi Oy","accessed":"2026-09-25"},
      {"title":"MIG/MAG Welding","url":"https://www.kemppi.com/en/categories/migmag-welding","publisher":"Kemppi Oy","accessed":"2026-09-25"},
      { title: "Kemppi — Arc Welding Equipment (Homepage)", url: "https://kemppi.com", publisher: "Kemppi Oy", accessed: "2026-09-22" },
      { title: "Kemppi", url: "https://en.wikipedia.org/wiki/Kemppi", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },

  'gw-instek': {
    name: "GW Instek",
    overview: `GW Instek (Good Will Instrument Co., Ltd.) este un producător taiwanez de instrumente de măsurare și testare electronică. Gama acoperă osciloscoape digitale din seria GDS-2000E, surse de alimentare AC/DC din seria ASR-6000, surse DC programabile din seriile PSW și GPP, sisteme de achiziție de date DAQ-9600 și sarcini electronice PEL-5000G, alături de analizoare de spectru, generatoare de semnal, multimetre digitale și testere LCR. Din portofoliul GW Instek putem oferta instrumentație de bancă pentru laboratoare tehnice și linii de testare.

GW Instek acoperă în principal instrumentația de bancă de laborator — osciloscoape, surse programabile și sisteme de achiziție de date — folosite la teste de siguranță electrică, testare de baterii, aplicații de tip Industry 4.0 și teste automotive de conversie a puterii.

Pentru laboratoare de service, control calitate sau linii de testare din România, gama GW Instek e o opțiune pentru instrumentație de bancă la teste standard de laborator.`,
    whyChoose: [
      "Gamă largă de osciloscoape digitale de bancă, inclusiv seria GDS-2000E, pentru laborator",
      "Surse de alimentare programabile pe mai multe game, de la DC simplu canal la AC/DC (seria ASR-6000)",
      "Sisteme de achiziție de date DAQ-9600 și sarcini electronice PEL-5000G pentru teste automatizate",
      "Aplicabilitate declarată pentru testare de siguranță electrică, baterii și conversie de putere"
    ],
    keyProducts: [
      {
        name: "Osciloscoape Digitale Seria GDS-2000E",
        description: "Osciloscoape digitale de bancă, folosite la depanare electronică, control calitate și dezvoltare de produs. Pentru ofertă avem nevoie de banda de frecvență necesară și numărul de canale dorit."
      },
      {
        name: "Surse de Alimentare AC/DC Seria ASR-6000",
        description: "Surse de alimentare care combină ieșiri AC și DC, folosite la testarea echipamentelor electronice ce trebuie verificate atât pe alimentare de rețea, cât și pe curent continuu."
      },
      {
        name: "Surse DC Programabile Seriile PSW și GPP",
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
    infinitrade: `Pentru GW Instek lucrăm cu categoriile de produse publicate pe site-ul producătorului, fără date proprii despre stocul din Taiwan sau despre termenele lor reale de fabricație. Aducem instrumentele GW Instek la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de modelul exact sau, dacă nu-l cunoașteți, de parametrii de test necesari — tensiune, curent, bandă de frecvență. Nu putem confirma disponibilitate permanentă din stoc pentru fiecare model din acest catalog extins de instrumentație.`,
    limitation: "Nu putem confirma calibrarea sau certificatul de etalonare pentru un instrument GW Instek adus prin comandă, dincolo de ce oferă producătorul standard.",
    productCodes: [
      {
        "code": "GDS-2000E",
        "description": "Osciloscop digital de bancă, 70–200 MHz, 2 sau 4 canale, din seria GDS-2000E"
      },
      {
        "code": "GDS-2204E",
        "description": "Osciloscop digital de bancă, 200 MHz, 4 canale, din seria GDS-2000E"
      },
      {
        "code": "GDS-3502",
        "description": "Osciloscop digital cu 2 canale, 500 MHz, din seria GDS-3000"
      },
      {
        "code": "GDS-3504",
        "description": "Osciloscop digital cu 4 canale, 500 MHz, din seria GDS-3000"
      },
      {
        "code": "GDS-912",
        "description": "Osciloscop digital portabil, din gama GDS-900"
      },
      {
        "code": "GDS-912G",
        "description": "Osciloscop digital portabil, variantă G a gamei GDS-900"
      },
      {
        "code": "GDS-1000B",
        "description": "Osciloscop digital de intrare, seria GDS-1000B"
      },
      {
        "code": "MDO-2000A",
        "description": "Osciloscop cu domenii multiple, seria 2000A"
      },
      {
        "code": "MSO-2000E",
        "description": "Osciloscop cu semnal mixt, seria 2000E"
      },
      {
        "code": "MDO-2000E",
        "description": "Osciloscop cu domenii multiple, seria 2000E"
      },
      {
        "code": "PPH-1503D",
        "description": "Sursă de alimentare DC de laborator, seria PPH"
      },
      {
        "code": "AFG-3032",
        "description": "Generator de funcții arbitrare, seria AFG-3000"
      },
      {
        "code": "PEL-3041",
        "description": "Sarcină electronică DC de laborator, seria PEL-3000"
      },
      {
        "code": "GSP-9330",
        "description": "Analizor de spectru, seria GSP-9330"
      },
      {
        "code": "DAQ-9600",
        "description": "Sistem de achiziție de date, seria DAQ-9600"
      },
      {
        "code": "GDM-8351",
        "description": "Multimetru digital de banc, seria GDM-8351"
      }
    ],
    faq: [
      {
        "q": "Ce diferență este între osciloscoapele GW Instek din seria GDS-2000E și seria GDS-3000?",
        "a": "Seria GDS-2000E (70, 100 și 200 MHz, cu 2 sau 4 canale) acoperă nevoile generale de depanare și verificare din laborator, în timp ce seria GDS-3000 oferă benzi de frecvență mai mari, de până la 500 MHz, tot cu 2 sau 4 canale. Alegerea depinde de numărul de semnale care trebuie urmărite în paralel pe același ecran."
      },
      {
        "q": "Ce este un osciloscop MDO la GW Instek?",
        "a": "MDO înseamnă osciloscop cu domenii multiple, adică un instrument care combină funcția clasică de osciloscop cu analiza de spectru pe aceeași unitate, util atunci când trebuie verificate atât forma de undă în timp, cât și componentele de frecvență ale unui semnal. Seriile MDO-2000A și MDO-2000E se folosesc frecvent la depanarea circuitelor de radiofrecvență."
      },
      {
        "q": "Livrați instrumente GW Instek în România?",
        "a": "Da, instrumentele GW Instek, de la osciloscoape la surse de alimentare sau multimetre, ajung la comandă în circa 1–4 săptămâni; nu păstrăm pe raft o selecție atât de amplă de modele. Ca să pregătim o ofertă, ne este util codul exact al aparatului sau aplicația de măsurare vizată."
      },
      {
        "q": "Ce diferență este între sursa PPH-1503D și sarcina electronică PEL-3041 de la GW Instek?",
        "a": "PPH-1503D este o sursă de alimentare DC de laborator, folosită pentru a furniza tensiune și curent controlat unui circuit testat, în timp ce PEL-3041 este o sarcină electronică, care simulează un consumator variabil pentru a testa comportamentul unei surse sau al unei baterii. Cele două instrumente se folosesc adesea împreună la testarea alimentatoarelor."
      }
    ],
    evidenceClass: "market-signal-ro",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"GDS-3000 Series Digital Storage Oscilloscopes","url":"https://www.gwinstek.com/en-US/products/detail/GDS-3000","publisher":"GW Instek","accessed":"2026-09-25"},
      {"title":"GDS-2000E Series Digital Storage Oscilloscopes","url":"https://www.gwinstek.com/en-global/products/detail/GDS-2000E","publisher":"GW Instek","accessed":"2026-09-25"},
      {"title":"GW Instek - Products","url":"https://www.gwinstek.com/en-global/products","publisher":"GW Instek","accessed":"2026-09-25"},
      { title: "GW Instek — Test and Measurement Instruments (Homepage)", url: "https://www.gwinstek.com", publisher: "Good Will Instrument Co., Ltd.", accessed: "2026-09-22" },
      { title: "GW Instek — Products", url: "https://www.gwinstek.com/en-global/products", publisher: "Good Will Instrument Co., Ltd.", accessed: "2026-09-22" },
    ],
  },

  'vaisala': {
    name: "Vaisala",
    founded: 1936,
    headquarters: "Vantaa, Finlanda",
    overview: `Vaisala este un producător finlandez de instrumente de măsurare, cu rădăcini din 1936 în lucrările profesorului Vilho Väisälä pe principiile radiosondei meteorologice, și sediul actual la Vantaa. Compania a funcționat sub numele Mittari Oy până în 1955, când a adoptat denumirea Vaisala. Din gama Vaisala putem oferta senzori de umiditate, punct de rouă și CO2, precum și tehnologie de măsurare a vântului pentru aplicații meteorologice și industriale.

Vaisala acoperă aplicații diverse — de la senzori industriali de proces, precum transmițătorul de punct de rouă DMP370, cu siguranță intrinsecă, până la sisteme de măsurare a vântului pentru energie eoliană prin tehnologia WindCube și software de meteorologie aviatică AviMet 10. Producătorul oferă și servicii de mentenanță dedicate, precum Vaisala Care for Data Centers.

Pentru centre de date, ferme eoliene sau instalații industriale din România unde controlul umidității sau al punctului de rouă e critic pentru proces, gama Vaisala e o opțiune pentru senzori de precizie la înlocuirea sau completarea instrumentației existente.`,
    whyChoose: [
      "Aproape un secol de activitate în măsurarea parametrilor de mediu, cu rădăcini în radiosonda meteorologică",
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
    infinitrade: `Pentru Vaisala lucrăm cu fișele de produs de pe site-ul producătorului, fără date proprii despre stocul din Vantaa. Aducem senzori și instrumente Vaisala la comandă, prin canale de aprovizionare din Uniunea Europeană, cu un termen orientativ de 1–4 săptămâni de la confirmarea comenzii. Pentru o ofertă corectă, avem nevoie de aplicația exactă — proces industrial, mediu exterior, zonă cu risc de explozie — și de parametrul măsurat: umiditate, punct de rouă, CO2 sau vânt. Nu promitem disponibilitate permanentă din stoc pentru fiecare senzor din acest portofoliu amplu de instrumentație.`,
    limitation: "Nu putem confirma certificarea ATEX sau alte aprobări de zonă explozivă pentru un model Vaisala fără fișa tehnică specifică a variantei comandate.",
    productCodes: [
      {
        "code": "DMP370",
        "description": "Transmițător de punct de rouă cu certificare de siguranță intrinsecă"
      },
      {
        "code": "HMP113",
        "description": "Sondă de umiditate și temperatură pentru aplicații industriale"
      },
      {
        "code": "HMP110",
        "description": "Sondă de umiditate și temperatură, versiune de bază"
      },
      {
        "code": "PDT101",
        "description": "Transmițător de presiune diferențială"
      },
      {
        "code": "HMD60",
        "description": "Transmițător umiditate/temperatură, montaj în canal de aer"
      },
      {
        "code": "TMI110",
        "description": "Transmițător de temperatură pentru imersie în lichide"
      },
      {
        "code": "HMD110",
        "description": "Transmițător de umiditate și temperatură pentru canal, variantă superioară"
      },
      {
        "code": "HMW110",
        "description": "Transmițător umiditate/temperatură, montaj pe perete"
      },
      {
        "code": "HMT120/130",
        "description": "Transmițător de umiditate și temperatură pentru spații curate sau muzee"
      },
      {
        "code": "XMP10",
        "description": "Sondă de umiditate și temperatură din seria XMP10"
      },
      
      {
        "code": "WM80",
        "description": "Senzor ultrasonic de măsurare a vântului"
      },
      {
        "code": "MHT410",
        "description": "Instrument pentru măsurarea umidității, hidrogenului și temperaturii"
      },
      {
        "code": "RM60",
        "description": "Senzor radar pentru măsurarea precipitațiilor"
      },
      {
        "code": "RWS200",
        "description": "Sistem de monitorizare a condițiilor meteo pe drumuri și piste"
      },
      {
        "code": "AWS830",
        "description": "Sistem de date meteo și oceanografice pentru mediul maritim"
      },
      {
        "code": "WindCube 2.1 XP",
        "description": "Lidar vertical pentru măsurarea profilului vântului"
      }
    ],
    faq: [
      {
        "q": "Ce este un transmițător de punct de rouă Vaisala precum DMP370?",
        "a": "DMP370 este un transmițător Vaisala destinat măsurării punctului de rouă în medii industriale, cu certificare de siguranță intrinsecă, adică poate fi montat în zone unde există risc de explozie. Se folosește acolo unde umiditatea reziduală dintr-un gaz sau proces trebuie controlată foarte precis, cum sunt instalațiile de producție de hidrogen, infrastructura de gaz natural sau instalațiile de biometan."
      },
      {
        "q": "Ce diferență este între sondele Vaisala HMD60 și HMW110?",
        "a": "HMD60 este un transmițător de umiditate și temperatură gândit pentru montaj direct pe canalul de ventilație, măsurând aerul care circulă prin conductă, în timp ce HMW110 se montează pe perete, pentru monitorizarea condițiilor din încăpere. Alegerea depinde de locul exact unde trebuie citită valoarea, în fluxul de aer sau în ambientul spațiului."
      },
      {
        "q": "Livrați instrumente Vaisala în România?",
        "a": "Da, instrumentele Vaisala pentru măsurarea umidității, temperaturii sau presiunii se aduc punctual la comandă, cu un termen tipic de 1–4 săptămâni; gama nu este păstrată pe raft din cauza numărului mare de variante disponibile. Pentru o propunere adaptată, indicați-ne parametrul măsurat, domeniul dorit și tipul de montaj, canal, perete sau imersie."
      },
      
    ],
    evidenceClass: "market-signal-intl",
    tier: 3,
    lastVerified: "2026-10-05",
    changelog: [{ date: '2026-10-05', note: 'Date tehnice reverificate pe sursele oficiale ale producătorului.' },  { date: "2026-09-22", note: "pagină publicată; date verificate în sursele citate" } ],
    sources: [
      {"title":"Products","url":"https://www.vaisala.com/en/products","publisher":"Vaisala Oyj","accessed":"2026-09-25"},
      { title: "Vaisala — Measurement Instruments (Homepage)", url: "https://www.vaisala.com", publisher: "Vaisala Oyj", accessed: "2026-09-22" },
      { title: "Vaisala — About Us", url: "https://www.vaisala.com/en/about-us", publisher: "Vaisala Oyj", accessed: "2026-09-22" },
      { title: "Vaisala", url: "https://en.wikipedia.org/wiki/Vaisala", publisher: "Wikipedia", accessed: "2026-09-22" },
    ],
  },
};
