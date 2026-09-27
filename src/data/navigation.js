// v20: header navigation, split out of products.js so the Header (a client
// component on every page) doesn't bundle the category/brand data.
// Short labels in the top bar are deliberate (space); mega-menu labels match
// the real category names.

// Primary navigation - product categories
export const navigation = [
  { name: 'Pompe Industriale', href: '/pompe-industriale' },
  { name: 'Robineți Industriali', href: '/robineti-industriali' },
  { name: 'Motoare Electrice', href: '/motoare-electrice' },
  { name: 'Schimbătoare Căldură', href: '/schimbatoare-caldura' },
  { name: 'Suflante Industriale', href: '/suflante-ventilatoare' },
  {
    name: 'Resurse',
    href: '/blog',
    isDropdown: true,
    children: [
      { name: 'Pentru achiziții', href: '/achizitii', description: 'Date de firmă, documente de furnizor, e-Factura' },
      { name: 'Pentru mentenanță', href: '/mentenanta', description: 'Piese după cod sau poza plăcuței' },
      { name: 'Pentru proiecte (CAPEX)', href: '/proiecte', description: 'Ofertă pe listă de echipamente' },
      { name: 'Ghid Achiziții SEAP', href: '/ghid-achizitii-seap', description: 'Coduri CPV și proceduri licitații' },
      { name: 'Blog Tehnic', href: '/blog', description: 'Ghiduri și articole tehnice' },
      { name: 'Ghiduri de aplicație', href: '/studii-de-caz', description: 'Cum abordăm tehnic proiectele' },
      { name: 'Referințe clienți', href: '/testimoniale', description: 'Cum obțineți referințe' },
      { name: 'Întrebări Frecvente', href: '/faq', description: 'Răspunsuri la întrebări comune' },
      { name: 'Industrii Deservite', href: '/industrii', description: 'Soluții pe verticale industriale' },
      { name: 'Ghid Comparativ', href: '/ghid-comparativ', description: 'Comparații branduri și produse' },
      { name: 'Branduri din SUA', href: '/branduri-sua', description: 'Producători americani, import la comandă' },
      { name: 'Certificări', href: '/certificari', description: 'Certificări și documente' },
      { name: 'Echipa', href: '/echipa', description: 'Cum lucrăm cererile de ofertă' },
    ]
  },
];

// Secondary navigation - info pages (centered below)
export const secondaryNavigation = [
  { name: 'Acasă', href: '/' },
  {
    name: 'Branduri & Echipamente',
    href: '/echipamente-diverse',
    isRedHighlight: true,
    isMegaMenu: true,
    children: [
      { name: 'Automatizări Industriale', href: '/automatizari-industriale', description: 'PLC, HMI, SCADA, actuatoare' },
      { name: 'Senzori și Instrumentație', href: '/senzori-instrumentatie', description: 'Presiune, temperatură, debit' },
      { name: 'Componente Hidraulice și Pneumatice', href: '/componente-hidraulice-pneumatice', description: 'Cilindri, distribuitoare, pompe' },
      { name: 'Echipamente Electrice și Automatizare', href: '/echipamente-electrice', description: 'Întrerupătoare, contactoare, VFD' },
      { name: 'Componente Mecanice și Transmisii', href: '/componente-mecanice', description: 'Rulmenți, curele, garnituri' },
      { name: 'Filtre și Consumabile Industriale', href: '/filtre-consumabile', description: 'Filtre hidraulice, aer, ulei' },
      { name: 'Scule și Instrumente de Măsură', href: '/scule-instrumente', description: 'Scule electrice, măsură' },
      { name: 'Echipamente Termice și Climatizare', href: '/echipamente-termice', description: 'Chillere, cazane, arzătoare' },
      { name: 'Lubrifianți și Chimice Industriale', href: '/lubrifianti-chimice', description: 'Uleiuri, unsori, adezivi' },
      { name: 'Echipamente Auxiliare și Protecție', href: '/echipamente-auxiliare', description: 'Protecție, curățenie, dozare' },
      { name: 'Aparate de Măsură și Testare', href: '/aparate-masura-testare', description: 'Multimetre, calibratoare, testere PRAM' },
      { name: 'Branduri din SUA', href: '/branduri-sua', description: 'Producători americani, pe categorii și industrii' },
    ]
  },
  { name: 'Despre Noi', href: '/despre-noi' },
  { name: 'Contact', href: '/contact' },
];
