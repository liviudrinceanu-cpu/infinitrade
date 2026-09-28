// v27 (D-2026-09-27, audit pe roluri B2B): pagini dedicate rolurilor din
// comitetul de cumpărare al unei firme mari (achiziții, mentenanță,
// proiecte/CAPEX). Sursă unică pentru /achizitii, /mentenanta, /proiecte și
// pentru secțiunea de pe prima pagină (RoleEntry).
//
// REGULI: doar fapte confirmate (date ONRC din company.js, termene din
// leadTimes, ISO = certificare ÎN CURS până la emiterea certificatului).
// Fără clienți numiți, fără cifre de performanță, fără „partener/autorizat”.
// Când proprietarul confirmă termene de plată standard, persoane de contact
// numite sau certificatul ISO, se actualizează AICI (și în company.js).

import { companyInfo, companyContact, clientReferences, publicClientReferences, publicProcurementStats } from './company';
import { siteStats } from './siteStats';

const phone = '+40 371 232 404';
const phoneHref = 'tel:+40371232404';
const od = companyInfo.officialData;

export const roleContact = {
  phone,
  phoneHref,
  hours: 'luni–vineri, 08:00–16:30',
  person: companyContact,
};

export const DELIVERY_TERMS_TEXT =
  'de regulă CPT (Incoterms® 2020): transportul până la adresa dumneavoastră este plătit de noi, iar riscul trece la predarea mărfii către transportator; la cerere, livrăm DAP; condiția exactă depinde de volum, cantitate, termenul de livrare și de contract sau de specificul comenzii și se scrie în fiecare ofertă';

export const PAYMENT_TERMS_TEXT = 'de regulă 30–60 de zile pentru clienții cu contract';

export const LEAD_TIME_TEXT =
  '24–72 h pentru reperele aflate în stocul nostru sau în stoc extern; produsele fabricate la comandă, de regulă 1–4 săptămâni; raritățile, echipamentele și sistemele complexe pot depăși 4 săptămâni, în funcție de producător și de rezervarea capacității lui de producție';

export const LEAD_TIME_START =
  'Termenul curge de la plata avansului, comanda fermă, semnarea contractului sau, după caz, înscrierea noastră ca furnizor.';

export const roles = {
  achizitii: {
    slug: 'achizitii',
    rol: 'achizitii',
    navLabel: 'Pentru achiziții',
    cardTitle: 'Achiziții',
    cardText: 'Date de firmă verificabile, documente pentru înscrierea ca furnizor, e-Factura, termene scrise în ofertă.',
    icon: 'FileCheck',
    metaTitle: 'Pentru achiziții: documente de furnizor',
    metaDescription:
      'Pentru departamentele de achiziții: date de firmă verificabile, documente pentru înscrierea ca furnizor, RO e-Factura, SEAP, termene de livrare scrise în ofertă.',
    h1: 'Pentru departamentul de achiziții',
    lead: `Infinitrade Romania (Driatheli Group SRL) furnizează echipamente industriale și piese de schimb din 2009, cu depozit în Ghiroda (Timiș) și ${siteStats.brands} de branduri cu pagină proprie. Pe această pagină găsiți datele de firmă, documentele pentru înscrierea ca furnizor și condițiile în care lucrăm, ca să ne puteți verifica înainte de primul contact.`,
    facts: [
      { label: 'Denumire', value: 'Driatheli Group SRL (marca Infinitrade Romania)' },
      { label: 'CUI', value: od.cui },
      { label: 'Nr. Reg. Com.', value: od.regCom },
      { label: 'Înființare', value: '11 noiembrie 2009' },
      { label: 'Sediu și depozit', value: 'Calea Lugojului 47/B, Hala 3, Ghiroda, Timiș 307200' },
      { label: 'TVA', value: 'plătitor de TVA; facturi prin RO e-Factura' },
      { label: 'Achiziții publice', value: `înregistrat în SEAP / SICAP; peste ${publicProcurementStats.count} de achiziții atribuite (${publicProcurementStats.period})` },
      { label: `Cifră de afaceri ${od.revenueYear}`, value: '16,5 mil. lei (≈ 3,3 mil. €), date publice' },
      { label: 'Angajați', value: `${od.employees} (date publice ${od.revenueYear})` },
      { label: 'Termen de plată', value: 'de regulă 30–60 de zile pentru clienții cu contract' },
      { label: 'Condiție de livrare', value: 'de regulă CPT (Incoterms® 2020): transport plătit de noi până la adresa dumneavoastră; DAP la cerere' },
      { label: 'ISO 9001', value: 'certificare în curs; publicăm certificatul la emitere' },
      { label: 'Contact comercial', value: `${companyContact.name}, ${companyContact.email}` },
    ],
    verifyLinks: [
      { name: 'termene.ro — date ONRC și financiare', url: 'https://termene.ro/firma/26209397-DRIATHELI-GROUP-SRL' },
      { name: 'e-licitatie.ro — contracte publice (căutare după CUI)', url: 'https://www.e-licitatie.ro/pub' },
      { name: 'sicap.ai — istoricul achizițiilor publice Driatheli Group', url: publicProcurementStats.sourceUrl },
    ],
    sections: [
      {
        title: 'Ce documente primiți pentru înscrierea ca furnizor?',
        intro: 'Le trimitem la cerere, de regulă în aceeași zi lucrătoare sau în următoarea:',
        items: [
          'Certificat constatator ONRC recent și certificat de înregistrare fiscală.',
          'Datele bancare pe document cu antetul firmei.',
          'Formularele dumneavoastră de calificare completate: cod de conduită pentru furnizori, declarații anti-mită, GDPR, conflict de interese, sancțiuni internaționale.',
          'Înscrierea în portalul de furnizori pe care îl folosiți (de exemplu SAP Ariba, SupplyOn sau un portal propriu).',
          'Stadiul certificării ISO 9001 (în curs) și, după emitere, copia certificatului.',
        ],
      },
      {
        title: 'Cum arată o ofertă de la noi?',
        items: [
          'Pentru fiecare poziție: producătorul, codul exact, cantitatea, termenul de livrare și condiția de livrare.',
          'Dacă propunem un echivalent sau un succesor al unui reper scos din fabricație, îl marcăm explicit, cu diferențele față de codul cerut.',
          `Termene: ${LEAD_TIME_TEXT}. ${LEAD_TIME_START}`,
          'Documentele care însoțesc livrarea: declarația de conformitate a producătorului, fișa tehnică și, unde este cazul, certificatele ATEX sau SIL și certificatul de origine.',
          'Condiția de livrare: de regulă CPT (Incoterms® 2020): transportul până la adresa dumneavoastră este plătit de noi, iar riscul trece la predarea mărfii către transportator. La cerere, livrăm DAP. Condiția exactă depinde de volum, cantitate, termenul de livrare și de contract sau de specificul comenzii și se scrie în ofertă.',
          'Termen de plată: de regulă 30–60 de zile pentru clienții cu contract, scris în ofertă sau în contract, în limitele Legii nr. 72/2013 privind combaterea întârzierii în executarea obligațiilor de plată.',
        ],
      },
      {
        title: 'Conformitate și etică în afaceri',
        items: [
          'Respectăm legislația anticorupție (Legea nr. 78/2000): nu oferim și nu acceptăm avantaje care pot influența o decizie de achiziție.',
          'Respectăm regulile de concurență (Legea concurenței nr. 21/1996) și păstrăm confidențialitatea ofertelor, prețurilor și datelor tehnice primite de la clienți.',
          'Prelucrăm datele personale conform Regulamentului (UE) 2016/679 (GDPR), după politica de confidențialitate publicată pe site.',
          'Verificăm ca produsele și destinațiile de livrare să nu intre sub sancțiunile internaționale aplicabile în Uniunea Europeană.',
          'Semnăm codul de conduită și declarațiile de conformitate cerute de client la înscrierea ca furnizor.',
        ],
      },
      {
        title: 'Companii cu care lucrăm',
        items: [
          `Industrie, energie și infrastructură: ${clientReferences.join(', ')}.`,
          `Achiziții publice (date publice SEAP): ${publicClientReferences.join(', ')}.`,
          `În total, peste ${publicProcurementStats.count} de achiziții publice atribuite firmei noastre prin SEAP în perioada ${publicProcurementStats.period}, verificabile public.`,
          'Pentru o referință dintr-o industrie anume, vă punem în legătură cu un client cu o aplicație similară, cu acordul acestuia.',
        ],
      },
      {
        title: 'Comenzi repetitive și contracte-cadru',
        items: [
          'Pentru reperele cumpărate constant (garnituri, rulmenți, filtre, piese de uzură) putem stabili o listă de repere cu prețuri și termene convenite pe o perioadă, ca să nu cereți ofertă la fiecare comandă.',
          'Pentru achizițiile publice, ofertăm atât pentru achiziții directe (sub 270.120 lei fără TVA la produse și servicii), cât și pentru proceduri.',
        ],
      },
    ],
    faq: [
      {
        q: 'Sunteți certificați ISO 9001?',
        a: 'Certificarea ISO 9001 este în curs. Nu afișăm certificatul până nu este emis; după emitere îl publicăm cu numărul, organismul de certificare și perioada de valabilitate și îl trimitem la cerere.',
      },
      {
        q: 'Emiteți facturi prin RO e-Factura?',
        a: 'Da. Facturile către firme se emit prin sistemul RO e-Factura, obligatoriu pentru tranzacțiile între firme din România.',
      },
      {
        q: 'Completați chestionarele de calificare și codul nostru de conduită?',
        a: 'Da. Trimiteți-ne documentele de înscriere sau invitația din portalul de furnizori; le completăm și vi le returnăm semnate, împreună cu certificatul constatator ONRC.',
      },
      {
        q: 'Ce termen de plată acceptați?',
        a: 'Pentru clienții cu contract, de regulă 30–60 de zile. Termenul exact se scrie în ofertă sau în contract, în limitele Legii nr. 72/2013.',
      },
      {
        q: 'Cine plătește transportul?',
        a: 'De regulă noi, până la adresa dumneavoastră: condiția uzuală este CPT (Incoterms® 2020), adică transportul este plătit de noi, iar riscul trece la predarea mărfii către transportator. La cerere, livrăm DAP (riscul pe drum rămâne al nostru). Condiția exactă depinde de volum, cantitate, termenul de livrare și de contract sau de specificul comenzii și se scrie în fiecare ofertă.',
      },
      {
        q: 'Cum ne verificăm furnizorul înainte de prima comandă?',
        a: 'CUI-ul RO26209397 și numărul de înregistrare J35/2901/2009 se verifică în registrele publice (ONRC, ANAF). Contractele publice atribuite se pot căuta pe e-licitatie.ro după CUI.',
      },
      {
        q: 'Cât durează până primim oferta?',
        a: 'De regulă în aceeași zi lucrătoare sau în următoarea. Pentru liste lungi sau echipamente configurate, vă spunem la primirea cererii când trimitem oferta completă.',
      },
    ],
    ctaTitle: 'Trimiteți cererea sau documentele de înscriere',
    ctaText: 'Folosiți formularul de ofertă (puteți atașa lista de repere sau formularele de calificare) ori sunați-ne.',
    related: [
      { href: '/certificari', label: 'Certificări și documente' },
      { href: '/ghid-achizitii-seap', label: 'Ghid pentru achiziții SEAP' },
      { href: '/despre-noi', label: 'Despre Infinitrade Romania' },
      { href: '/brand', label: 'Toate brandurile' },
    ],
  },

  mentenanta: {
    slug: 'mentenanta',
    rol: 'mentenanta',
    navLabel: 'Pentru mentenanță',
    cardTitle: 'Mentenanță',
    cardText: 'Piese după codul de pe plăcuță sau după poză, succesori pentru repere scoase din fabricație, livrare din stoc în 24–72 h.',
    icon: 'Wrench',
    metaTitle: 'Pentru mentenanță: piese după cod',
    metaDescription:
      'Pentru echipele de mentenanță: piese de schimb după codul sau poza plăcuței, succesori pentru repere scoase din fabricație, livrare din stoc în 24–72 h.',
    h1: 'Pentru echipele de mentenanță',
    lead: 'Trimiteți codul de pe plăcuță, o poză a plăcuței sau codul piesei, iar noi identificăm reperul în documentația producătorului și vă spunem disponibilitatea și termenul. Reperele aflate pe stoc se livrează în 24–72 h; din fabrică, de regulă în 1–4 săptămâni.',
    sections: [
      {
        title: 'Ce rezolvăm pentru mentenanță',
        items: [
          'Identificarea reperului după plăcuța de identificare, după codul piesei sau după documentația echipamentului.',
          'Piese de schimb originale: garnituri mecanice, rotoare, rulmenți, kituri de reparație, filtre, piese de uzură.',
          'Repere scoase din fabricație: căutăm succesorul indicat de producător sau un echivalent tehnic, marcat explicit în ofertă, cu diferențele de montaj și de parametri.',
          'Liste de piese pentru opririle planificate și reviziile anuale: trimiteți lista din timp și primiți o singură ofertă, cu termen pe fiecare poziție.',
          'Documentele piesei: fișă tehnică, declarație de conformitate, certificat ATEX acolo unde este cazul.',
        ],
      },
      {
        title: 'Ce date să trimiteți',
        items: [
          'O poză clară a întregii plăcuțe de identificare (JPG, PNG sau PDF, până la 3 MB, direct în formular).',
          'Producătorul, codul sau seria echipamentului și, dacă îl aveți, codul piesei.',
          'Ce s-a defectat și cantitatea necesară.',
          'Dacă echipamentul oprește producția și până când aveți nevoie de piesă.',
          'Adresa de livrare.',
        ],
      },
      {
        title: 'Urgențe',
        items: [
          `Dacă o defecțiune oprește producția, sunați-ne la ${phone} (${'luni–vineri, 08:00–16:30'}) și spuneți de la început că este o urgență.`,
          'Vă spunem termenul realist: din stocul nostru din Ghiroda, din stoc extern sau direct de la producător, cu transportul potrivit.',
        ],
      },
    ],
    faq: [
      {
        q: 'Pot trimite doar o poză a plăcuței?',
        a: 'Da. Atașați poza în formularul de cerere (JPG, PNG sau PDF, până la 3 MB). Din plăcuță identificăm producătorul, modelul și, de regulă, reperele de schimb.',
      },
      {
        q: 'Ce faceți dacă piesa nu se mai fabrică?',
        a: 'Căutăm succesorul indicat de producător sau un echivalent tehnic. În ofertă marcăm explicit că nu este codul original și scriem diferențele de montaj și de parametri, ca să puteți decide.',
      },
      {
        q: 'Cât durează livrarea unei piese?',
        a: `${LEAD_TIME_TEXT.charAt(0).toUpperCase()}${LEAD_TIME_TEXT.slice(1)}. ${LEAD_TIME_START} Termenul exact se scrie în ofertă.`,
      },
      {
        q: 'Puteți pregăti piesele pentru o oprire planificată?',
        a: 'Da. Trimiteți lista de piese cu câteva săptămâni înainte de oprire; primiți o ofertă pe poziții și livrăm înainte de data opririi, în termenul scris în ofertă.',
      },
    ],
    ctaTitle: 'Trimiteți codul sau poza plăcuței',
    ctaText: 'Formularul acceptă poze și PDF-uri. Pentru urgențe, sunați-ne.',
    related: [
      { href: '/brand', label: 'Caută după brand' },
      { href: '/blog/mentenanta-preventiva-pompe-industriale', label: 'Mentenanța preventivă a pompelor' },
      { href: '/blog/garnituri-mecanice-ghid-complet', label: 'Garnituri mecanice: ghid' },
      { href: '/componente-mecanice', label: 'Componente mecanice și rulmenți' },
    ],
  },

  proiecte: {
    slug: 'proiecte',
    rol: 'proiecte',
    navLabel: 'Pentru proiecte (CAPEX)',
    cardTitle: 'Proiecte și investiții',
    cardText: 'Ofertă unică pe lista de echipamente, documente de conformitate pentru dosar, termene scrise pe fiecare poziție.',
    icon: 'Building2',
    metaTitle: 'Pentru proiecte și investiții (CAPEX)',
    metaDescription:
      'Pentru proiecte și investiții: ofertă unică pe lista de echipamente (Excel sau PDF), documente CE, ATEX și SIL pentru dosar, termene scrise pe fiecare poziție.',
    h1: 'Pentru proiecte și investiții (CAPEX)',
    lead: 'Pentru o linie nouă, o modernizare sau un proiect finanțat din fonduri europene ori PNRR, trimiteți lista de echipamente (Excel sau PDF) și primiți o ofertă unică pe poziții, cu producătorul, codul, termenul de livrare și documentele de conformitate pentru fiecare poziție.',
    sections: [
      {
        title: 'Ce primiți pentru un proiect',
        items: [
          'O singură ofertă pentru toată lista, chiar dacă pozițiile sunt de la producători și categorii diferite (pompe, robineți, motoare, automatizări, instrumentație).',
          'Termen de livrare scris pe fiecare poziție și, la nevoie, livrări etapizate după graficul proiectului.',
          'Documentele pentru dosar: fișe tehnice, declarații de conformitate CE, certificate ATEX sau SIL unde este cazul, certificate de origine și de garanție ale producătorului.',
          'Variante tehnice comparabile de la producători diferiți, când specificația permite.',
          'Sprijin la caietul de sarcini: parametri tehnici realiști și specificații formulate pe performanță, ca să primiți oferte comparabile.',
        ],
      },
      {
        title: 'Cum arată lista care se ofertează cel mai repede',
        intro: 'Descărcați șablonul Excel sau trimiteți lista în formatul dumneavoastră. Coloanele utile:',
        items: [
          'Număr poziție și denumirea echipamentului.',
          'Producătorul preferat (sau „oricare, cu specificația de mai jos”).',
          'Codul sau modelul, dacă există.',
          'Parametrii principali (de exemplu debit, presiune, putere, DN, PN, material, clasa de protecție, zona ATEX).',
          'Cantitatea și termenul dorit.',
          'Documentele cerute pentru poziția respectivă.',
        ],
        download: { href: '/sabloane/lista-echipamente-infinitrade.xlsx', label: 'Descărcați șablonul Excel (listă de echipamente)' },
      },
      {
        title: 'Proiecte cu finanțare publică',
        items: [
          'Pentru proiectele finanțate din fonduri europene sau PNRR pregătim documentele cerute de dosar și respectăm termenele scrise în ofertă.',
          'Pentru achizițiile publice, vedeți ghidul SEAP: coduri CPV, proceduri și documentele pe care le pregătim.',
        ],
      },
    ],
    faq: [
      {
        q: 'În ce format trimit lista de echipamente?',
        a: 'Excel, CSV sau PDF, atașat direct în formularul de cerere (până la 3 MB). Puteți folosi șablonul nostru Excel sau formatul dumneavoastră.',
      },
      {
        q: 'Puteți oferta echipamente de la producători diferiți într-o singură ofertă?',
        a: `Da. Avem ${siteStats.brands} de branduri cu pagină proprie în 16 categorii; o listă mixtă primește o singură ofertă, cu termen pe fiecare poziție.`,
      },
      {
        q: 'Livrați etapizat, după graficul proiectului?',
        a: 'Da. Scrieți în cerere etapele și datele de livrare dorite; termenele pe poziții se stabilesc în ofertă.',
      },
      {
        q: 'Ce documente de conformitate primim?',
        a: 'Documentele emise de producător pentru fiecare echipament: declarația de conformitate CE, fișa tehnică și, unde este cazul, certificatul ATEX, certificatul SIL și certificatul de origine.',
      },
    ],
    ctaTitle: 'Trimiteți lista de echipamente',
    ctaText: 'Atașați lista (Excel, CSV sau PDF) în formular; primiți o ofertă unică pe poziții.',
    related: [
      { href: '/ghid-achizitii-seap', label: 'Ghid pentru achiziții SEAP' },
      { href: '/studii-de-caz', label: 'Ghiduri de aplicație' },
      { href: '/industrii', label: 'Industrii' },
      { href: '/blog/tendinte-echipamente-industriale-2026', label: 'Reglementări UE pentru echipamente' },
    ],
  },
};

export const roleList = [roles.achizitii, roles.mentenanta, roles.proiecte];

// Opțiunile câmpului „rol” din formular stau în roleOptions.js (modul mic,
// importat de pagina client /contact fără textele paginilor de rol).
export { ROLE_OPTIONS } from './roleOptions';
