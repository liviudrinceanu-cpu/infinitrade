/**
 * src/data/brandCategoryLinks.js — GENERATED FILE. Do not hand-edit.
 *
 * Regenerate with:  node scripts/build-brand-category-links.mjs
 * Source: .planning/brands-500/brand-classification-v11.json
 *
 * Branduri-500 v11 (D-2026-09-26): a brand lives at ONE URL (/brand/<slug>,
 * unchanged) but may belong to more than one category. SECONDARY_CATEGORIES
 * lists, per category, the brands whose primary category is elsewhere and
 * which also manufacture that category's products (classified from the
 * brand's own published keyProducts / product codes, never from web claims).
 * allBrandsIndex.js appends them to category.brands (flag secondary: true),
 * so category pages, the A–Z index, header dropdowns and related-brand
 * blocks list them. BRAND_PRODUCT_TYPES maps a brand to the product-type
 * slugs (from its categories' productTypes) it actually makes.
 *
 * 196 secondary memberships across 14 categories; 791 brands with product types.
 */
export const SECONDARY_CATEGORIES = {
  "pompe-industriale": [
    "caleffi-thermal",
    "coval",
    "grundfos-hvac",
    "kessel",
    "piab",
    "schmalz",
    "steel-o-brien-manufacturing",
    "vaccon",
    "valcor-engineering",
    "wilo-hvac"
  ],
  "robineti-industriali": [
    "armstrong",
    "azbil",
    "blacoh-industries",
    "bsb-safety-systems",
    "burkert-sensors",
    "caleffi-thermal",
    "emerson",
    "fike",
    "gemels",
    "holmbury",
    "ksb",
    "rembe",
    "richter-chemie-technik",
    "spirax-sarco-thermal",
    "tlv"
  ],
  "motoare-electrice": [
    "aucom",
    "autonics",
    "bauer-gear-motor",
    "benshaw",
    "br-automation",
    "bray",
    "chiaravalli-group",
    "danfoss",
    "ebm-papst",
    "estun-automation",
    "fuji-electric",
    "gemels",
    "gmn",
    "inovance",
    "invt",
    "jvl-industri-elektronik",
    "keb-automation",
    "linmot",
    "lutz",
    "megmeet",
    "mitsubishi-electric",
    "omron",
    "power-electronics",
    "radicon",
    "reggiana-riduttori",
    "rockwell-automation",
    "santerno",
    "siemens",
    "siti",
    "stm-spa",
    "veichi",
    "ziehl-abegg"
  ],
  "schimbatoare-caldura": [
    "akg-group",
    "danfoss",
    "e-j-bowman",
    "gea",
    "hydac",
    "senior-flexonics",
    "spirax-sarco-thermal",
    "spx-flow",
    "xylem"
  ],
  "suflante-ventilatoare": [
    "almig",
    "becker",
    "busch-vacuum-solutions",
    "corken",
    "elmag",
    "gast-manufacturing",
    "koganei",
    "leybold",
    "mouvex",
    "pedro-gil",
    "pfeiffer-vacuum",
    "sanyo-denki",
    "sulzer",
    "tuthill",
    "worthington-creyssensac"
  ],
  "automatizari-industriale": [
    "afriso",
    "aris-stellantriebe",
    "ascon-tecnologic",
    "azbil",
    "beckhoff",
    "belimo",
    "duplomatic-ms",
    "emerson",
    "exlar",
    "hayward-flow-control",
    "honeywell",
    "ifm",
    "kendrion",
    "koganei",
    "metal-work",
    "mindman",
    "nook-industries",
    "omal",
    "phd-inc",
    "phoenix",
    "rafi",
    "regada",
    "rollon",
    "rotex-automation",
    "schiebel-antriebstechnik",
    "schischek",
    "schneider",
    "seneca",
    "servomech",
    "siemens",
    "sipos-aktorik",
    "thomson-industries",
    "tolomatic",
    "wago",
    "yokogawa"
  ],
  "senzori-instrumentatie": [
    "blue-white-industries",
    "buhler-technologies",
    "bunting-magnetics",
    "burkert",
    "drager",
    "eriez",
    "flir",
    "gefran",
    "gestra",
    "gok",
    "honeywell",
    "hydac",
    "kral-ag",
    "msa-safety",
    "pietro-fiorentini",
    "prominent-dosing",
    "suco",
    "te-connectivity",
    "turck",
    "voss-fluid",
    "xylem"
  ],
  "componente-hidraulice-pneumatice": [
    "burkert-sensors",
    "deublin",
    "festo",
    "gates",
    "hine-group",
    "john-guest",
    "norgren",
    "semperit",
    "smc",
    "stauff",
    "tolomatic",
    "univer",
    "witzenmann"
  ],
  "echipamente-electrice": [
    "circutor",
    "schneider-electric"
  ],
  "componente-mecanice": [
    "birkosit",
    "hansa-flex",
    "igus",
    "kastas",
    "regal",
    "walterscheid"
  ],
  "filtre-consumabile": [
    "aignep",
    "airtac",
    "argo-hytos",
    "atos",
    "aventics",
    "camozzi",
    "dropsa",
    "eaton-hydraulics",
    "elmag",
    "friulair",
    "hansa-flex",
    "hine-group",
    "kessel",
    "parker-hannifin",
    "pneumatech",
    "pneumax",
    "trico-corporation",
    "waircom"
  ],
  "scule-instrumente": [
    "fluke",
    "megmeet"
  ],
  "echipamente-termice": [
    "alfa-laval",
    "duplomatic-ms",
    "rittal",
    "watts"
  ],
  "echipamente-auxiliare": [
    "ansell",
    "bolle-safety",
    "cofra",
    "delta-plus",
    "faggiolati-pumps",
    "jsp",
    "kern",
    "landia",
    "portwest",
    "radwag",
    "savino-barbera",
    "spx-flow",
    "sulzer",
    "uvex"
  ]
};

export const BRAND_PRODUCT_TYPES = {
  "3m-safety": [
    "protectie-munca"
  ],
  "a-r-wilfley-sons": [
    "pompe-centrifugale-industriale"
  ],
  "a-w-chesterton": [
    "garnituri-simering"
  ],
  "ab-trasmissioni": [
    "cuplaje-mecanice"
  ],
  "abb": [
    "motoare-asincrone-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "abb-electrical": [
    "intrerupatoare-automate",
    "contactoare-relee",
    "tablouri-electrice"
  ],
  "abb-instrumentation": [
    "debitimetre",
    "analizoare",
    "senzori-presiune"
  ],
  "absolent": [
    "elemente-filtrante"
  ],
  "ac-motoren": [
    "motoare-asincrone-industriale",
    "motoare-atex-industriale"
  ],
  "addinol": [
    "uleiuri-transmisie",
    "uleiuri-hidraulice"
  ],
  "aerzen": [
    "suflante-roots-industriale",
    "compresoare-industriale"
  ],
  "aesseal": [
    "garnituri-simering"
  ],
  "afriso": [
    "manometre",
    "senzori-temperatura",
    "analizoare",
    "debitimetre",
    "actuatoare-electrice"
  ],
  "aignep": [
    "furtunuri-racorduri",
    "valve-pneumatice",
    "filtre-aer"
  ],
  "aim-tti": [
    "echipamente-testare"
  ],
  "airpot": [
    "cilindri-pneumatici"
  ],
  "airtac": [
    "cilindri-pneumatici",
    "valve-pneumatice",
    "filtre-aer"
  ],
  "akg-group": [
    "racitoare-ulei-industriale"
  ],
  "alco-valves": [
    "robineti-bila-industriali",
    "robineti-reglare-industriali",
    "clapete-retinere-industriale"
  ],
  "alfa-laval": [
    "schimbatoare-placi-demontabile-industriale",
    "schimbatoare-placi-brazate-industriale",
    "schimbatoare-tubulare-industriale",
    "recuperatoare"
  ],
  "allied-motion": [
    "servomotoare-industriale"
  ],
  "allweiler": [
    "pompe-surub-excentric-industriale",
    "pompe-centrifugale-industriale"
  ],
  "almig": [
    "compresoare-industriale"
  ],
  "ametek-drexelbrook": [
    "traductoare-nivel"
  ],
  "ametek-jofra": [
    "echipamente-testare"
  ],
  "ametek-magnetrol": [
    "traductoare-nivel"
  ],
  "amiad": [
    "elemente-filtrante"
  ],
  "amk-arnold-muller": [
    "servomotoare-industriale"
  ],
  "ammeraal-beltech": [
    "benzi-transportoare",
    "curele-transmisie"
  ],
  "ampco-pumps": [
    "pompe-centrifugale-industriale"
  ],
  "anderson-negele": [
    "analizoare",
    "traductoare-nivel"
  ],
  "andritz": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "annovi-reverberi": [
    "pompe-hidraulice"
  ],
  "ansell": [
    "protectie-munca"
  ],
  "applied-analytics": [
    "analizoare"
  ],
  "arca-caldaie": [
    "cazane-industriale"
  ],
  "ares": [
    "schimbatoare-placi-demontabile-industriale",
    "schimbatoare-placi-brazate-industriale"
  ],
  "argal": [
    "pompe-centrifugale-industriale"
  ],
  "argo-hytos": [
    "distribuitoare-hidraulice",
    "filtre-hidraulice"
  ],
  "ari-armaturen": [
    "robineti-fluture-industriali",
    "supape-siguranta-industriale",
    "robineti-reglare-industriali"
  ],
  "aris-stellantriebe": [
    "actuatoare-electrice"
  ],
  "armstrong": [
    "oale-condens-industriale",
    "robineti-reglare-industriali"
  ],
  "as-schneider": [
    "robineti-bila-industriali",
    "robineti-reglare-industriali"
  ],
  "asahi-america": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "asahi-seiko": [
    "rulmenti-industriali"
  ],
  "asco": [
    "robineti-reglare-industriali"
  ],
  "ascon-tecnologic": [
    "module-io"
  ],
  "ashcroft": [
    "manometre",
    "senzori-presiune",
    "senzori-temperatura"
  ],
  "asv-stubbe": [
    "robineti-fluture-industriali",
    "robineti-bila-industriali",
    "robineti-reglare-industriali",
    "clapete-retinere-industriale"
  ],
  "atlas-copco": [
    "compresoare-industriale"
  ],
  "atos": [
    "distribuitoare-hidraulice",
    "pompe-hidraulice",
    "cilindri-hidraulici",
    "filtre-hidraulice"
  ],
  "aucom": [
    "convertizoare-frecventa-industriale"
  ],
  "autonics": [
    "servomotoare-industriale"
  ],
  "aventics": [
    "cilindri-pneumatici",
    "valve-pneumatice",
    "filtre-aer"
  ],
  "avk": [
    "robineti-fluture-industriali",
    "clapete-retinere-industriale"
  ],
  "aw-lake": [
    "debitimetre"
  ],
  "azbil": [
    "senzori-presiune",
    "robineti-reglare-industriali",
    "module-io"
  ],
  "azcue": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale",
    "pompe-surub-excentric-industriale"
  ],
  "bacharach": [
    "analizoare"
  ],
  "badger-meter": [
    "debitimetre"
  ],
  "bahco": [
    "scule-mana"
  ],
  "baldor": [
    "motoare-asincrone-industriale",
    "servomotoare-industriale",
    "motoare-atex-industriale"
  ],
  "baltur": [
    "arzatoare",
    "cazane-industriale"
  ],
  "bando": [
    "curele-transmisie"
  ],
  "bardiani-valvole": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "barksdale": [
    "senzori-presiune"
  ],
  "barmesa-pumps": [
    "pompe-submersibile-industriale"
  ],
  "bauer-gear-motor": [
    "motoreductoare-industriale",
    "motoare-asincrone-industriale"
  ],
  "baumer": [
    "senzori-presiune"
  ],
  "baur": [
    "echipamente-testare"
  ],
  "bd-sensors": [
    "senzori-presiune",
    "traductoare-nivel"
  ],
  "becker": [
    "pompe-vid-industriale",
    "suflante-canal-lateral-industriale",
    "compresoare-industriale"
  ],
  "beckhoff": [
    "servomotoare-industriale",
    "module-io",
    "plc-controllere"
  ],
  "beijer-electronics": [
    "hmi-panouri",
    "plc-controllere",
    "module-io"
  ],
  "beko-technologies": [
    "filtre-aer",
    "uscatoare-aer",
    "separatoare"
  ],
  "belden": [
    "cabluri-industriale"
  ],
  "belimo": [
    "robineti-reglare-industriali",
    "actuatoare-electrice"
  ],
  "benshaw": [
    "convertizoare-frecventa-industriale"
  ],
  "benzlers": [
    "cuplaje-mecanice"
  ],
  "bermad": [
    "robineti-reglare-industriali"
  ],
  "besa-valves": [
    "supape-siguranta-industriale"
  ],
  "bessey": [
    "scule-mana"
  ],
  "beta-utensili": [
    "scule-mana",
    "scule-pneumatice",
    "scule-electrice"
  ],
  "bezares": [
    "pompe-hidraulice"
  ],
  "birkosit": [
    "garnituri-simering"
  ],
  "bishop-wisecarver": [
    "rulmenti-industriali"
  ],
  "blacoh-industries": [
    "supape-siguranta-industriale"
  ],
  "blaser-swisslube": [
    "fluide-racire"
  ],
  "blue-white-industries": [
    "pompe-dozatoare-industriale",
    "debitimetre"
  ],
  "bodine-electric": [
    "motoreductoare-industriale",
    "motoare-monofazate-industriale"
  ],
  "boll-kirch": [
    "elemente-filtrante"
  ],
  "bolle-safety": [
    "protectie-munca"
  ],
  "bombas-hasa": [
    "pompe-submersibile-industriale",
    "grupuri-pompare-industriale"
  ],
  "bombas-ideal": [
    "pompe-submersibile-industriale",
    "grupuri-pompare-industriale",
    "pompe-centrifugale-industriale"
  ],
  "bominox": [
    "pompe-centrifugale-industriale"
  ],
  "bondioli-pavesi": [
    "pompe-hidraulice"
  ],
  "bonfiglioli": [
    "motoreductoare-industriale",
    "servomotoare-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "bonomi": [
    "robineti-bila-industriali"
  ],
  "bopp-reuther": [
    "supape-siguranta-industriale"
  ],
  "bosch-professional": [
    "scule-electrice"
  ],
  "bosch-rexroth": [
    "pompe-hidraulice",
    "cilindri-hidraulici",
    "distribuitoare-hidraulice"
  ],
  "bostik": [
    "adezivi-industriali",
    "spray-tehnice"
  ],
  "br-automation": [
    "plc-controllere",
    "hmi-panouri",
    "module-io",
    "servomotoare-industriale"
  ],
  "bray": [
    "robineti-fluture-industriali",
    "robineti-bila-industriali",
    "servomotoare-industriale"
  ],
  "brevini": [
    "motoreductoare-industriale"
  ],
  "brinkmann": [
    "pompe-submersibile-industriale",
    "pompe-centrifugale-industriale"
  ],
  "broen": [
    "robineti-bila-industriali"
  ],
  "bronkhorst": [
    "debitimetre",
    "senzori-presiune"
  ],
  "brook": [
    "motoare-atex-industriale",
    "motoare-asincrone-industriale"
  ],
  "bsb-safety-systems": [
    "supape-siguranta-industriale"
  ],
  "bucher-hydraulics": [
    "pompe-hidraulice",
    "distribuitoare-hidraulice"
  ],
  "buhler-technologies": [
    "analizoare"
  ],
  "bungartz": [
    "pompe-centrifugale-industriale"
  ],
  "bunting-magnetics": [
    "analizoare"
  ],
  "burkert": [
    "robineti-reglare-industriali",
    "debitimetre"
  ],
  "burkert-sensors": [
    "debitimetre",
    "senzori-presiune",
    "valve-pneumatice",
    "robineti-reglare-industriali"
  ],
  "busch-vacuum-solutions": [
    "pompe-vid-industriale",
    "suflante-roots-industriale"
  ],
  "bwf-envirotec": [
    "elemente-filtrante"
  ],
  "c-k-tools": [
    "scule-mana"
  ],
  "caleffi": [
    "robineti-reglare-industriali"
  ],
  "caleffi-thermal": [
    "robineti-reglare-industriali",
    "grupuri-pompare-industriale"
  ],
  "calpeda": [
    "pompe-centrifugale-industriale"
  ],
  "camozzi": [
    "cilindri-pneumatici",
    "valve-pneumatice",
    "furtunuri-racorduri",
    "filtre-aer"
  ],
  "cantoni": [
    "motoare-asincrone-industriale",
    "motoare-atex-industriale"
  ],
  "caprari": [
    "pompe-submersibile-industriale",
    "pompe-centrifugale-industriale"
  ],
  "carlo-gavazzi": [
    "relee-industriale"
  ],
  "carrier": [
    "chillere-industriale",
    "sisteme-climatizare"
  ],
  "casappa": [
    "pompe-hidraulice"
  ],
  "cashco": [
    "robineti-reglare-industriali"
  ],
  "castel": [
    "clapete-retinere-industriale",
    "supape-siguranta-industriale",
    "robineti-reglare-industriali"
  ],
  "castrol": [
    "fluide-racire",
    "unsori-industriale",
    "uleiuri-hidraulice",
    "uleiuri-transmisie"
  ],
  "cebora": [
    "echipamente-sudura"
  ],
  "cejn": [
    "furtunuri-racorduri"
  ],
  "ceme": [
    "valve-pneumatice"
  ],
  "cemer": [
    "motoare-asincrone-industriale",
    "motoare-atex-industriale",
    "motoare-monofazate-industriale"
  ],
  "cemp": [
    "motoare-atex-industriale",
    "motoare-asincrone-industriale"
  ],
  "cepex": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "chauvin-arnoux": [
    "echipamente-testare"
  ],
  "check-all-valve": [
    "clapete-retinere-industriale"
  ],
  "chelic": [
    "cilindri-pneumatici",
    "valve-pneumatice",
    "furtunuri-racorduri"
  ],
  "chesterton": [
    "garnituri-simering"
  ],
  "chiaravalli-group": [
    "lanturi-industriale",
    "motoreductoare-industriale"
  ],
  "chicago-pneumatic": [
    "scule-pneumatice",
    "scule-electrice"
  ],
  "chint": [
    "contactoare-relee",
    "intrerupatoare-automate"
  ],
  "chiorino": [
    "benzi-transportoare",
    "curele-transmisie"
  ],
  "chr-mayr": [
    "cuplaje-mecanice"
  ],
  "cidat": [
    "furtunuri-racorduri"
  ],
  "cimberio": [
    "robineti-bila-industriali",
    "robineti-reglare-industriali"
  ],
  "circle-seal-controls": [
    "robineti-reglare-industriali",
    "clapete-retinere-industriale",
    "supape-siguranta-industriale"
  ],
  "circutor": [
    "relee-industriale",
    "protectii-electrice"
  ],
  "citel": [
    "protectii-electrice"
  ],
  "cjc": [
    "filtre-ulei",
    "filtre-hidraulice"
  ],
  "ckd-corporation": [
    "valve-pneumatice",
    "cilindri-pneumatici"
  ],
  "cla-val": [
    "robineti-reglare-industriali"
  ],
  "clint": [
    "chillere-industriale"
  ],
  "clippard": [
    "valve-pneumatice",
    "cilindri-pneumatici"
  ],
  "cofra": [
    "protectie-munca"
  ],
  "comet": [
    "pompe-hidraulice"
  ],
  "concentric-ab": [
    "pompe-hidraulice"
  ],
  "condat": [
    "fluide-racire"
  ],
  "continental-belts": [
    "curele-transmisie"
  ],
  "continental-disc-corporation": [
    "supape-siguranta-industriale"
  ],
  "continental-hydraulics": [
    "pompe-hidraulice",
    "distribuitoare-hidraulice"
  ],
  "corken": [
    "compresoare-industriale"
  ],
  "coval": [
    "pompe-vid-industriale"
  ],
  "cp-pumpen": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "crane": [
    "robineti-fluture-industriali"
  ],
  "cri-pumps": [
    "pompe-submersibile-industriale",
    "grupuri-pompare-industriale"
  ],
  "crosby": [
    "supape-siguranta-industriale"
  ],
  "crouzet": [
    "servomotoare-industriale"
  ],
  "crowcon-detection-instruments": [
    "analizoare"
  ],
  "csf-inox": [
    "pompe-centrifugale-industriale"
  ],
  "dab": [
    "pompe-submersibile-industriale",
    "pompe-centrifugale-industriale",
    "grupuri-pompare-industriale"
  ],
  "daikin": [
    "chillere-industriale",
    "sisteme-climatizare"
  ],
  "danfoss": [
    "robineti-reglare-industriali",
    "convertizoare-frecventa-industriale",
    "schimbatoare-placi-brazate-industriale"
  ],
  "dataforth": [
    "module-io"
  ],
  "debem": [
    "pompe-centrifugale-industriale"
  ],
  "degson-electronics": [
    "contactoare-relee"
  ],
  "dehn": [
    "protectii-electrice"
  ],
  "delta-plus": [
    "protectie-munca"
  ],
  "deublin": [
    "furtunuri-racorduri"
  ],
  "dewalt": [
    "scule-electrice"
  ],
  "dickow-pumpen": [
    "pompe-centrifugale-industriale"
  ],
  "divinol": [
    "uleiuri-transmisie",
    "unsori-industriale",
    "uleiuri-hidraulice"
  ],
  "dixon-valve": [
    "furtunuri-racorduri"
  ],
  "doepke": [
    "protectii-electrice"
  ],
  "donadon-sdd": [
    "supape-siguranta-industriale"
  ],
  "donaldson": [
    "filtre-aer",
    "filtre-hidraulice"
  ],
  "dorot": [
    "robineti-reglare-industriali"
  ],
  "dosatron": [
    "pompe-dozatoare-industriale"
  ],
  "doseuro": [
    "pompe-dozatoare-industriale"
  ],
  "drager": [
    "protectie-munca",
    "analizoare"
  ],
  "dropsa": [
    "filtre-ulei"
  ],
  "dst-chemicals": [
    "spray-tehnice"
  ],
  "duker": [
    "robineti-fluture-industriali",
    "clapete-retinere-industriale"
  ],
  "dungs": [
    "supape-siguranta-industriale",
    "robineti-reglare-industriali"
  ],
  "duplomatic-ms": [
    "distribuitoare-hidraulice",
    "actuatoare-electrice",
    "chillere-industriale"
  ],
  "dwyer": [
    "manometre",
    "senzori-presiune",
    "debitimetre"
  ],
  "dymax": [
    "adezivi-industriali"
  ],
  "dynex": [
    "pompe-hidraulice",
    "distribuitoare-hidraulice"
  ],
  "e-j-bowman": [
    "racitoare-ulei-industriale"
  ],
  "eagleburgmann": [
    "garnituri-simering"
  ],
  "eaton": [
    "intrerupatoare-automate",
    "contactoare-relee",
    "convertizoare-frecventa"
  ],
  "eaton-filtration": [
    "elemente-filtrante"
  ],
  "eaton-hydraulics": [
    "pompe-hidraulice",
    "cilindri-hidraulici",
    "distribuitoare-hidraulice",
    "filtre-hidraulice"
  ],
  "ebara": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "ebm-papst": [
    "ventilatoare-axiale-industriale",
    "ventilatoare-centrifugale-industriale"
  ],
  "ebro": [
    "robineti-fluture-industriali",
    "robineti-bila-industriali"
  ],
  "ecoflam": [
    "arzatoare"
  ],
  "ekoval": [
    "robineti-bila-industriali",
    "clapete-retinere-industriale"
  ],
  "elecon": [
    "cuplaje-mecanice"
  ],
  "elektror": [
    "suflante-canal-lateral-industriale",
    "ventilatoare-centrifugale-industriale",
    "ventilatoare-axiale-industriale"
  ],
  "elesa-ganter": [
    "cuplaje-mecanice"
  ],
  "elmag": [
    "echipamente-sudura",
    "compresoare-industriale",
    "uscatoare-aer"
  ],
  "elmo": [
    "suflante-canal-lateral-industriale",
    "pompe-vid-suflante"
  ],
  "elprom-harmanli": [
    "motoare-asincrone-industriale"
  ],
  "emec": [
    "pompe-dozatoare-industriale"
  ],
  "emerson": [
    "senzori-presiune",
    "debitimetre",
    "robineti-reglare-industriali",
    "scada"
  ],
  "emg-elettromeccanica": [
    "motoare-asincrone-industriale"
  ],
  "emmegi": [
    "racitoare-ulei-industriale"
  ],
  "end": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali",
    "robineti-reglare-industriali"
  ],
  "endress-hauser": [
    "traductoare-nivel",
    "debitimetre",
    "senzori-presiune",
    "analizoare"
  ],
  "enotec": [
    "analizoare"
  ],
  "erhard": [
    "robineti-fluture-industriali",
    "clapete-retinere-industriale"
  ],
  "eriez": [
    "analizoare"
  ],
  "esab": [
    "echipamente-sudura"
  ],
  "escha": [
    "cabluri-industriale"
  ],
  "esders": [
    "manometre",
    "analizoare",
    "debitimetre"
  ],
  "esi-technology": [
    "senzori-presiune"
  ],
  "estun-automation": [
    "servomotoare-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "etatron": [
    "pompe-dozatoare-industriale"
  ],
  "eti-elektroelement": [
    "protectii-electrice",
    "intrerupatoare-automate"
  ],
  "ewm": [
    "echipamente-sudura"
  ],
  "exlar": [
    "actuatoare-electrice"
  ],
  "exor-international": [
    "hmi-panouri"
  ],
  "facom": [
    "scule-mana"
  ],
  "fafnir": [
    "traductoare-nivel"
  ],
  "fag-schaeffler": [
    "rulmenti-industriali"
  ],
  "faggiolati-pumps": [
    "pompe-submersibile-industriale",
    "agitatoare"
  ],
  "fantinelli": [
    "manometre"
  ],
  "far-rubinetterie": [
    "robineti-reglare-industriali"
  ],
  "faro-technologies": [
    "masura-dimensionala"
  ],
  "farris-engineering": [
    "supape-siguranta-industriale"
  ],
  "faster": [
    "furtunuri-racorduri"
  ],
  "fatek-automation": [
    "plc-controllere",
    "hmi-panouri"
  ],
  "fein": [
    "scule-electrice"
  ],
  "felm": [
    "motoare-asincrone-industriale"
  ],
  "fenner-drives": [
    "curele-transmisie"
  ],
  "fenner-dunlop": [
    "benzi-transportoare"
  ],
  "ferroli": [
    "cazane-industriale"
  ],
  "festo": [
    "cilindri-pneumatici",
    "valve-pneumatice"
  ],
  "festool": [
    "scule-electrice"
  ],
  "fike": [
    "supape-siguranta-industriale"
  ],
  "filtrec": [
    "filtre-hidraulice"
  ],
  "fimet": [
    "motoare-asincrone-industriale",
    "motoare-atex-industriale"
  ],
  "finder": [
    "contactoare-relee"
  ],
  "finish-thompson": [
    "pompe-centrifugale-industriale"
  ],
  "fisher": [
    "robineti-reglare-industriali"
  ],
  "fleetguard": [
    "filtre-ulei",
    "filtre-hidraulice"
  ],
  "flender": [
    "motoreductoare-industriale"
  ],
  "flir": [
    "echipamente-testare",
    "analizoare"
  ],
  "fluimac": [
    "pompe-dozatoare-industriale"
  ],
  "fluiten": [
    "garnituri-simering"
  ],
  "fluke": [
    "echipamente-testare"
  ],
  "flux": [
    "pompe-surub-excentric-industriale"
  ],
  "forbes-marshall": [
    "oale-condens-industriale"
  ],
  "forbo-siegling": [
    "benzi-transportoare",
    "curele-transmisie"
  ],
  "fpz": [
    "suflante-canal-lateral-industriale"
  ],
  "franke-gmbh": [
    "rulmenti-industriali"
  ],
  "franklin-electric": [
    "pompe-submersibile-industriale"
  ],
  "frenzelit": [
    "garnituri-simering"
  ],
  "freudenberg": [
    "garnituri-simering"
  ],
  "fristam-pumpen": [
    "pompe-centrifugale-industriale"
  ],
  "friulair": [
    "uscatoare-aer"
  ],
  "fromme-armaturen": [
    "robineti-fluture-industriali",
    "robineti-bila-industriali",
    "robineti-reglare-industriali"
  ],
  "fuchs-lubricants": [
    "uleiuri-hidraulice",
    "unsori-industriale",
    "fluide-racire",
    "uleiuri-transmisie"
  ],
  "fuji-electric": [
    "scada",
    "servomotoare-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "funke": [
    "schimbatoare-placi-demontabile-industriale",
    "schimbatoare-placi-brazate-industriale",
    "schimbatoare-tubulare-industriale",
    "racitoare-ulei-industriale"
  ],
  "fyh": [
    "rulmenti-industriali"
  ],
  "galltec-mela": [
    "senzori-temperatura"
  ],
  "gamak": [
    "motoare-asincrone-industriale",
    "motoare-atex-industriale",
    "motoare-monofazate-industriale"
  ],
  "gardner-denver": [
    "suflante-roots-industriale",
    "compresoare-industriale"
  ],
  "garlock": [
    "garnituri-simering"
  ],
  "gast-manufacturing": [
    "pompe-vid-industriale",
    "suflante-canal-lateral-industriale"
  ],
  "gates": [
    "curele-transmisie",
    "furtunuri-racorduri"
  ],
  "gea": [
    "pompe-centrifugale-industriale",
    "pompe-vid-industriale",
    "schimbatoare-placi-demontabile-industriale",
    "schimbatoare-placi-brazate-industriale"
  ],
  "gedore": [
    "scule-mana"
  ],
  "gefran": [
    "relee-industriale",
    "senzori-presiune"
  ],
  "gemels": [
    "furtunuri-racorduri",
    "robineti-bila-industriali",
    "servomotoare-industriale"
  ],
  "gems-sensors": [
    "senzori-presiune",
    "traductoare-nivel"
  ],
  "gemu": [
    "robineti-reglare-industriali"
  ],
  "georg-fischer": [
    "robineti-bila-industriali"
  ],
  "gesipa": [
    "scule-electrice"
  ],
  "gestra": [
    "oale-condens-industriale",
    "traductoare-nivel"
  ],
  "gewiss": [
    "intrerupatoare-automate",
    "protectii-electrice",
    "tablouri-electrice"
  ],
  "gfg-instrumentation": [
    "analizoare"
  ],
  "giacomini": [
    "robineti-bila-industriali"
  ],
  "gimatic": [
    "cilindri-pneumatici"
  ],
  "gmn": [
    "rulmenti-industriali",
    "cuplaje-mecanice",
    "garnituri-simering",
    "servomotoare-industriale"
  ],
  "gok": [
    "robineti-reglare-industriali",
    "supape-siguranta-industriale",
    "traductoare-nivel"
  ],
  "gorman-rupp": [
    "pompe-centrifugale-industriale",
    "grupuri-pompare-industriale"
  ],
  "griswold-pump": [
    "pompe-centrifugale-industriale"
  ],
  "groschopp": [
    "motoreductoare-industriale",
    "motoare-monofazate-industriale"
  ],
  "grundfos": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale",
    "pompe-dozatoare-industriale",
    "grupuri-pompare-industriale"
  ],
  "grundfos-dosing": [
    "sisteme-dozare"
  ],
  "grundfos-hvac": [
    "pompe-centrifugale-industriale",
    "grupuri-pompare-industriale"
  ],
  "gruppo-aturia": [
    "pompe-centrifugale-industriale"
  ],
  "gusher-pumps": [
    "pompe-centrifugale-industriale"
  ],
  "gw-instek": [
    "echipamente-testare"
  ],
  "habasit": [
    "benzi-transportoare",
    "curele-transmisie"
  ],
  "hach": [
    "analizoare"
  ],
  "hager": [
    "intrerupatoare-automate",
    "tablouri-electrice"
  ],
  "hanna-instruments": [
    "analizoare"
  ],
  "hansa-flex": [
    "furtunuri-racorduri",
    "filtre-hidraulice",
    "garnituri-simering"
  ],
  "hansen": [
    "motoreductoare-industriale"
  ],
  "hayward-flow-control": [
    "robineti-fluture-industriali",
    "clapete-retinere-industriale",
    "actuatoare-electrice"
  ],
  "hazet": [
    "scule-mana",
    "scule-pneumatice",
    "scule-electrice"
  ],
  "hcp-pumps": [
    "pompe-submersibile-industriale"
  ],
  "helukabel": [
    "cabluri-industriale"
  ],
  "hengst": [
    "filtre-ulei",
    "filtre-hidraulice"
  ],
  "hermetic-pumpen": [
    "pompe-centrifugale-industriale"
  ],
  "herose": [
    "supape-siguranta-industriale"
  ],
  "hexagon-manufacturing-intelligence": [
    "masura-dimensionala"
  ],
  "heytec": [
    "scule-mana"
  ],
  "hidrostal": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "hilti": [
    "scule-electrice"
  ],
  "hine-group": [
    "pompe-hidraulice",
    "distribuitoare-hidraulice",
    "furtunuri-racorduri",
    "cilindri-hidraulici",
    "filtre-hidraulice",
    "filtre-aer"
  ],
  "hioki": [
    "echipamente-testare"
  ],
  "hoke": [
    "robineti-bila-industriali"
  ],
  "holmbury": [
    "furtunuri-racorduri",
    "robineti-bila-industriali"
  ],
  "homa-pumpenfabrik": [
    "pompe-submersibile-industriale"
  ],
  "honeywell": [
    "senzori-presiune",
    "senzori-temperatura",
    "scada"
  ],
  "honeywell-analytics": [
    "analizoare"
  ],
  "honeywell-safety": [
    "protectie-munca"
  ],
  "hongfa": [
    "contactoare-relee"
  ],
  "hopkinsons": [
    "robineti-reglare-industriali"
  ],
  "horner-automation": [
    "plc-controllere",
    "hmi-panouri"
  ],
  "hoyer-motors": [
    "motoare-asincrone-industriale",
    "motoare-atex-industriale"
  ],
  "ht-hydrotechnik": [
    "traductoare-nivel"
  ],
  "ht-italia": [
    "echipamente-testare"
  ],
  "huhnseal": [
    "garnituri-simering"
  ],
  "humphrey-products": [
    "valve-pneumatice"
  ],
  "hutchinson": [
    "cuplaje-mecanice",
    "curele-transmisie",
    "garnituri-simering"
  ],
  "hy-lok": [
    "robineti-bila-industriali",
    "robineti-reglare-industriali"
  ],
  "hydac": [
    "racitoare-ulei-industriale",
    "senzori-presiune"
  ],
  "hydac-filtration": [
    "filtre-hidraulice",
    "separatoare"
  ],
  "hydro-leduc": [
    "pompe-hidraulice"
  ],
  "hydroline": [
    "cilindri-hidraulici"
  ],
  "hypertherm": [
    "echipamente-sudura"
  ],
  "hyva": [
    "cilindri-hidraulici"
  ],
  "ici-caldaie": [
    "cazane-industriale"
  ],
  "icm-motori": [
    "motoare-asincrone-industriale"
  ],
  "icp-das": [
    "module-io",
    "plc-controllere",
    "hmi-panouri"
  ],
  "idec-corporation": [
    "hmi-panouri",
    "relee-industriale",
    "plc-controllere"
  ],
  "ifm": [
    "senzori-presiune",
    "debitimetre",
    "module-io"
  ],
  "igus": [
    "cabluri-industriale",
    "rulmenti-industriali"
  ],
  "iko": [
    "rulmenti-industriali"
  ],
  "imi-herion": [
    "robineti-reglare-industriali"
  ],
  "imi-hydronic": [
    "robineti-reglare-industriali"
  ],
  "imi-pbm": [
    "robineti-bila-industriali"
  ],
  "imo": [
    "rulmenti-industriali"
  ],
  "indufil": [
    "filtre-hidraulice",
    "elemente-filtrante"
  ],
  "industrial-scientific": [
    "analizoare"
  ],
  "ingersoll-rand": [
    "compresoare-industriale"
  ],
  "injecta": [
    "pompe-dozatoare-industriale"
  ],
  "inor": [
    "senzori-temperatura"
  ],
  "inovance": [
    "plc-controllere",
    "convertizoare-frecventa-industriale"
  ],
  "insize": [
    "masura-dimensionala"
  ],
  "intensiv-filter": [
    "elemente-filtrante"
  ],
  "interflon": [
    "unsori-industriale",
    "uleiuri-hidraulice",
    "uleiuri-transmisie"
  ],
  "internormen": [
    "filtre-hidraulice"
  ],
  "interpump-group": [
    "cilindri-hidraulici",
    "distribuitoare-hidraulice",
    "furtunuri-racorduri"
  ],
  "invt": [
    "convertizoare-frecventa-industriale"
  ],
  "irwin-tools": [
    "scule-mana"
  ],
  "italvibras": [
    "motoare-atex-industriale"
  ],
  "itap": [
    "robineti-bila-industriali",
    "clapete-retinere-industriale"
  ],
  "itt-goulds": [
    "pompe-centrifugale-industriale"
  ],
  "iwaki": [
    "pompe-centrifugale-industriale",
    "pompe-dozatoare-industriale"
  ],
  "iwis": [
    "lanturi-industriale"
  ],
  "jakob-antriebstechnik": [
    "cuplaje-mecanice"
  ],
  "james-walker": [
    "garnituri-simering"
  ],
  "jax": [
    "unsori-industriale",
    "uleiuri-transmisie"
  ],
  "jean-muller": [
    "protectii-electrice"
  ],
  "john-crane": [
    "garnituri-simering",
    "cuplaje-mecanice"
  ],
  "john-guest": [
    "furtunuri-racorduri"
  ],
  "johnson-pump": [
    "pompe-centrifugale-industriale"
  ],
  "jokari": [
    "scule-mana"
  ],
  "jsp": [
    "protectie-munca"
  ],
  "jumo": [
    "senzori-temperatura",
    "senzori-presiune"
  ],
  "jung-pumpen": [
    "pompe-submersibile-industriale"
  ],
  "jvl-industri-elektronik": [
    "servomotoare-industriale"
  ],
  "kaeser": [
    "compresoare-industriale",
    "pompe-vid-suflante"
  ],
  "karcher-industrial": [
    "curatenie-industriala"
  ],
  "kastas": [
    "garnituri-simering"
  ],
  "katronic": [
    "debitimetre"
  ],
  "kawasaki-precision-machinery": [
    "pompe-hidraulice"
  ],
  "keb-automation": [
    "convertizoare-frecventa-industriale"
  ],
  "keller": [
    "senzori-presiune",
    "traductoare-nivel"
  ],
  "kelvion": [
    "schimbatoare-placi-demontabile-industriale",
    "schimbatoare-placi-brazate-industriale",
    "schimbatoare-tubulare-industriale"
  ],
  "kem-kuppers": [
    "debitimetre"
  ],
  "kemppi": [
    "echipamente-sudura"
  ],
  "kendrion": [
    "cuplaje-mecanice",
    "actuatoare-electrice"
  ],
  "kern": [
    "echipamente-laborator"
  ],
  "kessel": [
    "pompe-submersibile-industriale",
    "separatoare"
  ],
  "kettenwulf": [
    "lanturi-industriale"
  ],
  "keysight-technologies": [
    "echipamente-testare"
  ],
  "kinex-bearings": [
    "rulmenti-industriali"
  ],
  "kirloskar-brothers": [
    "pompe-submersibile-industriale"
  ],
  "kitz": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "klauke": [
    "scule-mana",
    "scule-electrice"
  ],
  "klaus-union": [
    "pompe-centrifugale-industriale"
  ],
  "klay-instruments": [
    "senzori-presiune",
    "traductoare-nivel"
  ],
  "klein-tools": [
    "scule-mana"
  ],
  "klemsan": [
    "contactoare-relee"
  ],
  "kluber": [
    "unsori-industriale",
    "uleiuri-transmisie"
  ],
  "knipex": [
    "scule-mana"
  ],
  "kobold": [
    "debitimetre",
    "traductoare-nivel",
    "senzori-presiune"
  ],
  "koganei": [
    "cilindri-pneumatici",
    "valve-pneumatice",
    "compresoare-industriale",
    "actuatoare-electrice"
  ],
  "koso": [
    "robineti-reglare-industriali",
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "kral-ag": [
    "debitimetre"
  ],
  "krohne": [
    "debitimetre"
  ],
  "ksb": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale",
    "robineti-fluture-industriali"
  ],
  "ktr": [
    "cuplaje-mecanice"
  ],
  "kyb-corporation": [
    "pompe-hidraulice"
  ],
  "kyoritsu": [
    "echipamente-testare"
  ],
  "lafert": [
    "servomotoare-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "landia": [
    "pompe-submersibile-industriale",
    "agitatoare"
  ],
  "landustrie": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "lapp": [
    "cabluri-industriale"
  ],
  "legrand": [
    "tablouri-electrice"
  ],
  "leitenberger": [
    "senzori-temperatura"
  ],
  "lenze": [
    "convertizoare-frecventa-industriale",
    "motoreductoare-industriale",
    "servomotoare-industriale"
  ],
  "leroy": [
    "motoreductoare-industriale"
  ],
  "leser": [
    "supape-siguranta-industriale"
  ],
  "lewa": [
    "pompe-dozatoare-industriale"
  ],
  "leybold": [
    "pompe-vid-industriale",
    "suflante-roots-industriale"
  ],
  "liberty-pumps": [
    "pompe-submersibile-industriale"
  ],
  "linak": [
    "actuatoare-electrice"
  ],
  "lincoln-electric": [
    "echipamente-sudura"
  ],
  "linde-hydraulics": [
    "pompe-hidraulice"
  ],
  "linmot": [
    "servomotoare-industriale"
  ],
  "littelfuse": [
    "protectii-electrice",
    "contactoare-relee"
  ],
  "loctite": [
    "adezivi-industriali"
  ],
  "lorentz": [
    "pompe-submersibile-industriale"
  ],
  "lovato": [
    "contactoare-relee",
    "intrerupatoare-automate"
  ],
  "lowara": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "ls-electric": [
    "intrerupatoare-automate",
    "contactoare-relee",
    "convertizoare-frecventa",
    "cabluri-industriale"
  ],
  "lutz": [
    "motoare-atex-industriale",
    "motoreductoare-industriale"
  ],
  "mac-valves": [
    "valve-pneumatice"
  ],
  "madas": [
    "supape-siguranta-industriale",
    "robineti-reglare-industriali"
  ],
  "magnatex-pumps": [
    "pompe-centrifugale-industriale"
  ],
  "mahle": [
    "filtre-ulei"
  ],
  "mahr": [
    "masura-dimensionala"
  ],
  "makita": [
    "scule-electrice"
  ],
  "mankenberg": [
    "robineti-reglare-industriali"
  ],
  "mann-hummel": [
    "elemente-filtrante"
  ],
  "manuli-hydraulics": [
    "furtunuri-racorduri"
  ],
  "march-pump": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "marelli": [
    "motoare-asincrone-industriale"
  ],
  "matra": [
    "grupuri-pompare-industriale",
    "pompe-submersibile-industriale",
    "pompe-centrifugale-industriale"
  ],
  "mattei": [
    "compresoare-industriale"
  ],
  "maximator": [
    "pompe-hidraulice",
    "furtunuri-racorduri"
  ],
  "maxon": [
    "servomotoare-industriale"
  ],
  "mayr": [
    "cuplaje-mecanice"
  ],
  "meccanotecnica-umbra": [
    "garnituri-simering"
  ],
  "megadyne": [
    "curele-transmisie"
  ],
  "megger": [
    "echipamente-testare"
  ],
  "megmeet": [
    "plc-controllere",
    "convertizoare-frecventa-industriale",
    "echipamente-sudura"
  ],
  "menzel-elektromotoren": [
    "motoare-asincrone-industriale",
    "motoare-atex-industriale"
  ],
  "mersen": [
    "protectii-electrice"
  ],
  "metabo": [
    "scule-electrice"
  ],
  "metal-work": [
    "cilindri-pneumatici",
    "valve-pneumatice",
    "actuatoare-electrice"
  ],
  "metraflex": [
    "clapete-retinere-industriale"
  ],
  "metrel": [
    "echipamente-testare"
  ],
  "metrohm": [
    "analizoare"
  ],
  "mgm": [
    "motoare-asincrone-industriale"
  ],
  "micropump": [
    "pompe-centrifugale-industriale"
  ],
  "migatronic": [
    "echipamente-sudura"
  ],
  "miki-pulley": [
    "cuplaje-mecanice"
  ],
  "milwaukee-tool": [
    "scule-electrice"
  ],
  "mindman": [
    "valve-pneumatice",
    "cilindri-pneumatici",
    "actuatoare-electrice"
  ],
  "minebea-mitsumi": [
    "rulmenti-industriali"
  ],
  "mitsubishi-electric": [
    "plc-controllere",
    "hmi-panouri",
    "servomotoare-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "mitutoyo": [
    "masura-dimensionala"
  ],
  "miyawaki": [
    "oale-condens-industriale",
    "robineti-reglare-industriali"
  ],
  "mobil-industrial": [
    "uleiuri-hidraulice",
    "unsori-industriale",
    "uleiuri-transmisie"
  ],
  "molydal": [
    "unsori-industriale",
    "uleiuri-hidraulice",
    "spray-tehnice"
  ],
  "molykote": [
    "unsori-industriale"
  ],
  "molyslip": [
    "unsori-industriale"
  ],
  "mono": [
    "pompe-surub-excentric-industriale"
  ],
  "moog": [
    "distribuitoare-hidraulice",
    "pompe-hidraulice"
  ],
  "mouvex": [
    "compresoare-industriale"
  ],
  "mp-filtri": [
    "filtre-hidraulice"
  ],
  "mp-pumps": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "msa-safety": [
    "protectie-munca",
    "analizoare"
  ],
  "munsch-chemie-pumpen": [
    "pompe-centrifugale-industriale"
  ],
  "murr-elektronik": [
    "module-io"
  ],
  "nachi": [
    "rulmenti-industriali"
  ],
  "nanotec": [
    "servomotoare-industriale"
  ],
  "neles": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "neptune-chemical-pump": [
    "pompe-dozatoare-industriale"
  ],
  "neri-motori": [
    "motoare-asincrone-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "netzsch": [
    "pompe-surub-excentric-industriale",
    "pompe-dozatoare-industriale"
  ],
  "newco": [
    "clapete-retinere-industriale",
    "robineti-bila-industriali"
  ],
  "newtons4th": [
    "echipamente-testare"
  ],
  "nexans": [
    "cabluri-industriale"
  ],
  "nibco": [
    "clapete-retinere-industriale"
  ],
  "nicolini": [
    "motoare-asincrone-industriale",
    "motoare-monofazate-industriale"
  ],
  "nidec": [
    "motoare-asincrone-industriale"
  ],
  "nikkiso": [
    "pompe-centrifugale-industriale"
  ],
  "nilfisk": [
    "curatenie-industriala"
  ],
  "nitto-kohki": [
    "furtunuri-racorduri"
  ],
  "nke-austria": [
    "rulmenti-industriali"
  ],
  "noark-electric": [
    "intrerupatoare-automate",
    "contactoare-relee",
    "protectii-electrice"
  ],
  "nokeval": [
    "senzori-temperatura"
  ],
  "nook-industries": [
    "actuatoare-electrice"
  ],
  "norbar": [
    "scule-mana"
  ],
  "nord": [
    "motoreductoare-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "norgren": [
    "cilindri-pneumatici",
    "valve-pneumatice"
  ],
  "noshok": [
    "manometre",
    "senzori-presiune",
    "traductoare-nivel"
  ],
  "nsk": [
    "rulmenti-industriali"
  ],
  "ntn": [
    "rulmenti-industriali"
  ],
  "nuova-fima": [
    "manometre",
    "senzori-presiune"
  ],
  "obo-bettermann": [
    "protectii-electrice"
  ],
  "ode": [
    "valve-pneumatice"
  ],
  "ogura-clutch": [
    "cuplaje-mecanice"
  ],
  "oks-spezialschmierstoffe": [
    "unsori-industriale",
    "spray-tehnice"
  ],
  "oleodinamica-marchesini": [
    "distribuitoare-hidraulice",
    "furtunuri-racorduri"
  ],
  "oli-vibrators": [
    "motoare-atex-industriale"
  ],
  "omal": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali",
    "actuatoare-electrice"
  ],
  "omfb": [
    "pompe-hidraulice"
  ],
  "omicron-electronics": [
    "echipamente-testare"
  ],
  "omron": [
    "plc-controllere",
    "servomotoare-industriale"
  ],
  "optibelt": [
    "curele-transmisie"
  ],
  "opto-22": [
    "module-io",
    "plc-controllere"
  ],
  "oriental-motor": [
    "servomotoare-industriale"
  ],
  "orion": [
    "robineti-reglare-industriali",
    "clapete-retinere-industriale",
    "robineti-bila-industriali"
  ],
  "ortlinghaus": [
    "cuplaje-mecanice"
  ],
  "osecoelfab": [
    "supape-siguranta-industriale"
  ],
  "oval-corporation": [
    "debitimetre"
  ],
  "oventrop": [
    "robineti-reglare-industriali"
  ],
  "pall": [
    "elemente-filtrante",
    "separatoare"
  ],
  "panasonic-motor-drive": [
    "servomotoare-industriale"
  ],
  "parker-filtration": [
    "filtre-hidraulice",
    "separatoare",
    "filtre-ulei"
  ],
  "parker-hannifin": [
    "cilindri-hidraulici",
    "pompe-hidraulice",
    "distribuitoare-hidraulice",
    "cilindri-pneumatici",
    "furtunuri-racorduri",
    "filtre-hidraulice",
    "filtre-aer"
  ],
  "pcb-piezotronics": [
    "senzori-presiune"
  ],
  "pedro-gil": [
    "pompe-vid-industriale",
    "suflante-roots-industriale",
    "compresoare-industriale"
  ],
  "pedrollo": [
    "pompe-submersibile-industriale",
    "grupuri-pompare-industriale"
  ],
  "permatex": [
    "adezivi-industriali",
    "unsori-industriale"
  ],
  "permco": [
    "pompe-hidraulice"
  ],
  "pettinaroli": [
    "robineti-reglare-industriali",
    "robineti-fluture-industriali"
  ],
  "pewag": [
    "lanturi-industriale"
  ],
  "pfeiffer-vacuum": [
    "pompe-vid-industriale",
    "pompe-vid-suflante"
  ],
  "phd-inc": [
    "cilindri-pneumatici",
    "actuatoare-electrice"
  ],
  "phoenix": [
    "contactoare-relee",
    "protectii-electrice",
    "plc-controllere"
  ],
  "piab": [
    "pompe-vid-industriale"
  ],
  "pietro-fiorentini": [
    "robineti-reglare-industriali",
    "debitimetre"
  ],
  "pilz": [
    "relee-industriale",
    "plc-controllere"
  ],
  "pneumatech": [
    "uscatoare-aer",
    "filtre-aer"
  ],
  "pneumax": [
    "cilindri-pneumatici",
    "valve-pneumatice",
    "filtre-aer"
  ],
  "poclain-hydraulics": [
    "pompe-hidraulice",
    "distribuitoare-hidraulice"
  ],
  "portwest": [
    "protectie-munca"
  ],
  "powell-valves": [
    "clapete-retinere-industriale"
  ],
  "power-electronics": [
    "convertizoare-frecventa-industriale"
  ],
  "praher": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali",
    "clapete-retinere-industriale"
  ],
  "precision-polymer-engineering": [
    "garnituri-simering"
  ],
  "proco-products": [
    "clapete-retinere-industriale"
  ],
  "prominent": [
    "pompe-dozatoare-industriale"
  ],
  "prominent-dosing": [
    "sisteme-dozare",
    "analizoare"
  ],
  "prysmian-group": [
    "cabluri-industriale"
  ],
  "pulsafeeder": [
    "pompe-dozatoare-industriale",
    "pompe-centrifugale-industriale"
  ],
  "r-w-antriebselemente": [
    "cuplaje-mecanice"
  ],
  "radicon": [
    "motoreductoare-industriale"
  ],
  "radwag": [
    "echipamente-laborator"
  ],
  "rafi": [
    "hmi-panouri"
  ],
  "rbc-bearings": [
    "rulmenti-industriali"
  ],
  "red-lion-controls": [
    "hmi-panouri",
    "plc-controllere",
    "module-io"
  ],
  "regada": [
    "actuatoare-electrice"
  ],
  "regal": [
    "motoare-asincrone-industriale",
    "motoreductoare-industriale",
    "rulmenti-industriali",
    "curele-transmisie",
    "lanturi-industriale",
    "cuplaje-mecanice"
  ],
  "reggiana-riduttori": [
    "motoreductoare-industriale"
  ],
  "regina-catene-calibrate": [
    "lanturi-industriale",
    "benzi-transportoare"
  ],
  "relpol": [
    "contactoare-relee"
  ],
  "rembe": [
    "supape-siguranta-industriale"
  ],
  "renishaw": [
    "masura-dimensionala"
  ],
  "renk": [
    "cuplaje-mecanice"
  ],
  "rennsteig": [
    "scule-mana"
  ],
  "renold": [
    "lanturi-industriale",
    "cuplaje-mecanice"
  ],
  "rexnord": [
    "rulmenti-industriali",
    "cuplaje-mecanice",
    "lanturi-industriale"
  ],
  "richter-chemie-technik": [
    "pompe-centrifugale-industriale",
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "rickmeier": [
    "pompe-hidraulice",
    "distribuitoare-hidraulice"
  ],
  "riello": [
    "arzatoare",
    "cazane-industriale"
  ],
  "rigol-technologies": [
    "echipamente-testare"
  ],
  "ringfeder": [
    "cuplaje-mecanice"
  ],
  "ringspann": [
    "cuplaje-mecanice"
  ],
  "rittal": [
    "tablouri-electrice",
    "chillere-industriale",
    "sisteme-climatizare"
  ],
  "rittmeyer": [
    "debitimetre",
    "traductoare-nivel"
  ],
  "rki-instruments": [
    "analizoare"
  ],
  "robuschi": [
    "suflante-roots-industriale",
    "compresoare-industriale",
    "pompe-vid-suflante"
  ],
  "rockwell-automation": [
    "plc-controllere",
    "hmi-panouri",
    "convertizoare-frecventa-industriale"
  ],
  "rohde-schwarz": [
    "echipamente-testare"
  ],
  "rollix": [
    "rulmenti-industriali"
  ],
  "rollon": [
    "actuatoare-electrice"
  ],
  "ross-controls": [
    "valve-pneumatice"
  ],
  "rossi": [
    "motoreductoare-industriale",
    "servomotoare-industriale"
  ],
  "roten": [
    "garnituri-simering"
  ],
  "rotex-automation": [
    "actuatoare-electrice"
  ],
  "rothe-erde": [
    "rulmenti-industriali"
  ],
  "roto-pumps": [
    "pompe-surub-excentric-industriale"
  ],
  "rotronic": [
    "senzori-temperatura"
  ],
  "rovatti": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "rud-ketten": [
    "lanturi-industriale"
  ],
  "ruhrpumpen": [
    "pompe-centrifugale-industriale"
  ],
  "rulmeca": [
    "motoreductoare-industriale"
  ],
  "saer-elettropompe": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "safi": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali",
    "clapete-retinere-industriale"
  ],
  "saint-gobain-pam": [
    "robineti-fluture-industriali"
  ],
  "salami": [
    "pompe-hidraulice",
    "distribuitoare-hidraulice"
  ],
  "salmson": [
    "pompe-centrifugale-industriale",
    "grupuri-pompare-industriale"
  ],
  "samson": [
    "robineti-reglare-industriali"
  ],
  "santerno": [
    "convertizoare-frecventa-industriale"
  ],
  "sanyo-denki": [
    "servomotoare-industriale",
    "ventilatoare-axiale-industriale"
  ],
  "sarasin-rsbd": [
    "supape-siguranta-industriale"
  ],
  "savino-barbera": [
    "pompe-centrifugale-industriale",
    "agitatoare"
  ],
  "schiebel-antriebstechnik": [
    "actuatoare-electrice"
  ],
  "schischek": [
    "actuatoare-electrice"
  ],
  "schmalz": [
    "pompe-vid-industriale"
  ],
  "schneider": [
    "convertizoare-frecventa-industriale",
    "plc-controllere",
    "hmi-panouri",
    "relee-industriale"
  ],
  "schneider-electric": [
    "plc-controllere",
    "hmi-panouri",
    "convertizoare-frecventa",
    "intrerupatoare-automate"
  ],
  "schrack": [
    "contactoare-relee",
    "intrerupatoare-automate",
    "protectii-electrice"
  ],
  "schubert-salzer": [
    "robineti-reglare-industriali"
  ],
  "schurter": [
    "protectii-electrice"
  ],
  "scigrip": [
    "adezivi-industriali"
  ],
  "seepex": [
    "pompe-surub-excentric-industriale"
  ],
  "seipee": [
    "motoare-asincrone-industriale",
    "motoare-atex-industriale",
    "motoare-monofazate-industriale"
  ],
  "seko": [
    "pompe-dozatoare-industriale"
  ],
  "semperit": [
    "benzi-transportoare",
    "furtunuri-racorduri"
  ],
  "seneca": [
    "plc-controllere"
  ],
  "senqcia": [
    "lanturi-industriale"
  ],
  "sensidyne": [
    "analizoare"
  ],
  "sera": [
    "pompe-dozatoare-industriale"
  ],
  "servomech": [
    "actuatoare-electrice"
  ],
  "sew": [
    "motoreductoare-industriale",
    "convertizoare-frecventa-industriale",
    "servomotoare-industriale"
  ],
  "sewerin": [
    "analizoare"
  ],
  "shell-lubricants": [
    "uleiuri-hidraulice",
    "unsori-industriale",
    "uleiuri-transmisie"
  ],
  "siba": [
    "protectii-electrice"
  ],
  "siemens": [
    "motoare-asincrone-industriale",
    "convertizoare-frecventa-industriale",
    "plc-controllere",
    "hmi-panouri"
  ],
  "siemens-electrical": [
    "intrerupatoare-automate",
    "protectii-electrice",
    "contactoare-relee",
    "tablouri-electrice"
  ],
  "siemens-instrumentation": [
    "debitimetre",
    "senzori-presiune",
    "traductoare-nivel",
    "analizoare"
  ],
  "sigma-group": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "sika": [
    "adezivi-industriali"
  ],
  "sipos-aktorik": [
    "actuatoare-electrice"
  ],
  "siti": [
    "motoare-asincrone-industriale"
  ],
  "skf": [
    "rulmenti-industriali",
    "garnituri-simering"
  ],
  "skf-lubrication": [
    "unsori-industriale"
  ],
  "smc": [
    "cilindri-pneumatici",
    "valve-pneumatice"
  ],
  "snap-on": [
    "scule-mana"
  ],
  "sola": [
    "masura-dimensionala"
  ],
  "solcon-igel": [
    "relee-industriale"
  ],
  "solinst": [
    "traductoare-nivel"
  ],
  "sonflow": [
    "schimbatoare-placi-brazate-industriale",
    "schimbatoare-placi-demontabile-industriale"
  ],
  "sor-controls-group": [
    "senzori-presiune",
    "senzori-temperatura",
    "traductoare-nivel"
  ],
  "soudal": [
    "adezivi-industriali"
  ],
  "spectrex": [
    "analizoare"
  ],
  "speroni": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "spirax-sarco": [
    "oale-condens-industriale",
    "robineti-reglare-industriali"
  ],
  "spirax-sarco-thermal": [
    "oale-condens-industriale",
    "robineti-reglare-industriali",
    "schimbatoare-placi-brazate-industriale"
  ],
  "spp-pumps": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "spx-flow": [
    "pompe-dozatoare-industriale",
    "schimbatoare-placi-demontabile-industriale",
    "agitatoare"
  ],
  "stahlwille": [
    "scule-mana"
  ],
  "stanley": [
    "scule-mana"
  ],
  "starrett": [
    "masura-dimensionala"
  ],
  "staubli-fluid-connectors": [
    "furtunuri-racorduri"
  ],
  "stauff": [
    "filtre-hidraulice",
    "furtunuri-racorduri"
  ],
  "steel-o-brien-manufacturing": [
    "pompe-centrifugale-industriale"
  ],
  "stenner": [
    "pompe-dozatoare-industriale"
  ],
  "stm-spa": [
    "motoreductoare-industriale",
    "motoare-asincrone-industriale"
  ],
  "straub": [
    "cuplaje-mecanice"
  ],
  "stucchi": [
    "furtunuri-racorduri"
  ],
  "suco": [
    "senzori-presiune"
  ],
  "sulzer": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale",
    "suflante-roots-industriale",
    "agitatoare"
  ],
  "sumitomo": [
    "motoreductoare-industriale",
    "motoare-asincrone-industriale"
  ],
  "summit-pump": [
    "pompe-centrifugale-industriale"
  ],
  "sundyne": [
    "pompe-centrifugale-industriale"
  ],
  "sunfab": [
    "pompe-hidraulice"
  ],
  "swagelok": [
    "robineti-bila-industriali",
    "robineti-reglare-industriali"
  ],
  "swep": [
    "schimbatoare-placi-brazate-industriale"
  ],
  "systemair": [
    "ventilatoare-axiale-industriale",
    "ventilatoare-centrifugale-industriale"
  ],
  "tapflo": [
    "pompe-centrifugale-industriale"
  ],
  "te-connectivity": [
    "contactoare-relee",
    "senzori-presiune"
  ],
  "teadit": [
    "garnituri-simering"
  ],
  "teco": [
    "motoare-monofazate-industriale",
    "motoare-asincrone-industriale"
  ],
  "teledyne-gas-and-flame-detection": [
    "analizoare"
  ],
  "telwin": [
    "echipamente-sudura"
  ],
  "termostroj": [
    "cazane-industriale"
  ],
  "tesa": [
    "masura-dimensionala"
  ],
  "testo": [
    "analizoare",
    "senzori-temperatura",
    "manometre"
  ],
  "thomson-industries": [
    "actuatoare-electrice"
  ],
  "timken": [
    "rulmenti-industriali",
    "lanturi-industriale"
  ],
  "tlv": [
    "oale-condens-industriale",
    "robineti-reglare-industriali"
  ],
  "tolomatic": [
    "cilindri-pneumatici",
    "actuatoare-electrice"
  ],
  "tone": [
    "scule-mana"
  ],
  "toray-membrane": [
    "elemente-filtrante"
  ],
  "torishima": [
    "pompe-centrifugale-industriale"
  ],
  "toshiba-international-corporation": [
    "motoare-asincrone-industriale",
    "convertizoare-frecventa-industriale",
    "motoare-atex-industriale"
  ],
  "totalenergies-lubrifianti": [
    "uleiuri-hidraulice"
  ],
  "trafag": [
    "senzori-presiune"
  ],
  "trane": [
    "chillere-industriale",
    "sisteme-climatizare"
  ],
  "trelleborg": [
    "garnituri-simering"
  ],
  "trico-corporation": [
    "filtre-ulei"
  ],
  "tsubaki": [
    "lanturi-industriale"
  ],
  "tsurumi": [
    "pompe-submersibile-industriale"
  ],
  "ttv": [
    "robineti-fluture-industriali"
  ],
  "tunkers": [
    "cilindri-pneumatici"
  ],
  "turck": [
    "module-io",
    "senzori-presiune",
    "senzori-temperatura"
  ],
  "tuthill": [
    "suflante-roots-industriale",
    "pompe-vid-suflante"
  ],
  "tyco": [
    "robineti-fluture-industriali",
    "clapete-retinere-industriale"
  ],
  "ufi-filters": [
    "filtre-ulei",
    "filtre-hidraulice"
  ],
  "unitronics": [
    "plc-controllere",
    "hmi-panouri"
  ],
  "univer": [
    "cilindri-pneumatici",
    "valve-pneumatice"
  ],
  "uvex": [
    "protectie-munca"
  ],
  "vaccon": [
    "pompe-vid-industriale"
  ],
  "vacuubrand": [
    "pompe-vid-industriale"
  ],
  "vag": [
    "robineti-fluture-industriali",
    "clapete-retinere-industriale"
  ],
  "vaisala": [
    "senzori-presiune",
    "senzori-temperatura",
    "analizoare"
  ],
  "val-matic": [
    "clapete-retinere-industriale",
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "valcor-engineering": [
    "pompe-dozatoare-industriale"
  ],
  "valpres": [
    "robineti-bila-industriali"
  ],
  "valsteam-adca": [
    "oale-condens-industriale",
    "robineti-reglare-industriali"
  ],
  "valvitalia": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali",
    "clapete-retinere-industriale"
  ],
  "van-der-graaf": [
    "motoreductoare-industriale"
  ],
  "vanton-pump": [
    "pompe-centrifugale-industriale"
  ],
  "varisco": [
    "pompe-centrifugale-industriale"
  ],
  "varvel": [
    "motoreductoare-industriale"
  ],
  "vega": [
    "traductoare-nivel",
    "senzori-presiune"
  ],
  "veichi": [
    "convertizoare-frecventa-industriale"
  ],
  "veljan": [
    "pompe-hidraulice"
  ],
  "vem": [
    "motoare-atex-industriale",
    "motoare-asincrone-industriale"
  ],
  "victaulic": [
    "robineti-fluture-industriali",
    "robineti-bila-industriali",
    "clapete-retinere-industriale"
  ],
  "viessmann": [
    "cazane-industriale"
  ],
  "vir-valvoindustria": [
    "robineti-bila-industriali",
    "robineti-fluture-industriali"
  ],
  "vogtlin-instruments": [
    "debitimetre"
  ],
  "volt-motor": [
    "motoare-asincrone-industriale"
  ],
  "voss-fluid": [
    "furtunuri-racorduri",
    "distribuitoare-hidraulice",
    "senzori-presiune",
    "senzori-temperatura"
  ],
  "vulcan-seals": [
    "garnituri-simering"
  ],
  "wago": [
    "contactoare-relee",
    "plc-controllere",
    "module-io"
  ],
  "waircom": [
    "cilindri-pneumatici",
    "valve-pneumatice",
    "filtre-aer"
  ],
  "walchem": [
    "pompe-dozatoare-industriale"
  ],
  "walker-filtration": [
    "filtre-aer",
    "uscatoare-aer",
    "separatoare"
  ],
  "walrus-pump": [
    "pompe-centrifugale-industriale"
  ],
  "walterscheid": [
    "cuplaje-mecanice"
  ],
  "walther-prazision": [
    "furtunuri-racorduri"
  ],
  "walvoil": [
    "distribuitoare-hidraulice"
  ],
  "wandfluh": [
    "distribuitoare-hidraulice"
  ],
  "wanner-engineering": [
    "pompe-dozatoare-industriale"
  ],
  "warex-valve": [
    "robineti-fluture-industriali",
    "robineti-bila-industriali"
  ],
  "warner-electric": [
    "cuplaje-mecanice"
  ],
  "waterous": [
    "pompe-centrifugale-industriale"
  ],
  "watlow": [
    "senzori-temperatura"
  ],
  "watts": [
    "clapete-retinere-industriale",
    "cazane-industriale"
  ],
  "wd-40": [
    "spray-tehnice"
  ],
  "weber-hydraulik": [
    "cilindri-hidraulici"
  ],
  "weg": [
    "motoare-asincrone-industriale"
  ],
  "weicon": [
    "adezivi-industriali",
    "spray-tehnice",
    "unsori-industriale"
  ],
  "weidmuller-electric": [
    "protectii-electrice",
    "contactoare-relee"
  ],
  "weintek": [
    "hmi-panouri",
    "module-io"
  ],
  "weir-minerals": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "weishaupt": [
    "arzatoare"
  ],
  "wera": [
    "scule-mana"
  ],
  "wieland-electric": [
    "relee-industriale"
  ],
  "wiha": [
    "scule-mana",
    "scule-electrice"
  ],
  "wika": [
    "manometre",
    "senzori-presiune",
    "senzori-temperatura"
  ],
  "williamson": [
    "senzori-temperatura"
  ],
  "wilo": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "wilo-hvac": [
    "pompe-centrifugale-industriale",
    "grupuri-pompare-industriale"
  ],
  "winters-instruments": [
    "manometre"
  ],
  "wippermann": [
    "lanturi-industriale"
  ],
  "witzenmann": [
    "furtunuri-racorduri"
  ],
  "worthington-creyssensac": [
    "compresoare-industriale"
  ],
  "wpil": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale"
  ],
  "wurth-chimice": [
    "spray-tehnice",
    "adezivi-industriali"
  ],
  "xylem": [
    "pompe-centrifugale-industriale",
    "pompe-submersibile-industriale",
    "schimbatoare-placi-brazate-industriale",
    "analizoare"
  ],
  "yaskawa": [
    "servomotoare-industriale",
    "convertizoare-frecventa-industriale"
  ],
  "yokogawa": [
    "senzori-presiune",
    "debitimetre",
    "analizoare",
    "scada"
  ],
  "yoshitake": [
    "oale-condens-industriale",
    "robineti-reglare-industriali"
  ],
  "zapi-group": [
    "module-io"
  ],
  "zehnder-pumpen": [
    "pompe-submersibile-industriale"
  ],
  "zeiss-industrial-metrology": [
    "masura-dimensionala"
  ],
  "zero-max": [
    "cuplaje-mecanice"
  ],
  "ziehl-abegg": [
    "ventilatoare-axiale-industriale",
    "ventilatoare-centrifugale-industriale"
  ],
  "zkl": [
    "rulmenti-industriali"
  ],
  "zoeller-pump-company": [
    "pompe-submersibile-industriale"
  ]
};

// Brands (simple slugs) that make a given product type, in the order they were classified.
export function getBrandsForProductType(productTypeSlug) {
  return Object.keys(BRAND_PRODUCT_TYPES).filter((slug) => BRAND_PRODUCT_TYPES[slug].includes(productTypeSlug));
}

export function getProductTypesForBrand(simpleSlug) {
  return BRAND_PRODUCT_TYPES[simpleSlug] || [];
}
