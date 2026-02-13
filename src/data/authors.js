// Infinitrade Romania - Author Bios for E-E-A-T SEO
// Last updated: 2026-01-24 - V52 E-E-A-T Enhancement

export const authors = [
  {
    id: 'echipa-tehnica',
    name: 'Echipa Tehnica Infinitrade',
    role: 'Departament Tehnic',
    experience: '15+ ani experienta colectiva',
    bio: 'Echipa noastra de ingineri specializati in echipamente industriale ofera consultanta tehnica pentru pompe, robineti, motoare si sisteme termice. Certificati de producatori precum Grundfos, Siemens si Alfa Laval.',
    certifications: ['Grundfos Academy', 'Siemens Partner Program', 'Alfa Laval Certified', 'ABB Authorized'],
    expertise: ['pompe industriale', 'motoare electrice', 'automatizari', 'eficienta energetica'],
    image: '/team/echipa-tehnica.jpg'
  },
  {
    id: 'adrian-ionescu',
    name: 'A.I.',
    role: 'Director Tehnic',
    experience: '20+ ani',
    bio: 'Expert in dimensionare sisteme pompare si eficienta energetica industriala. A coordonat proiecte pentru rafinarii, centrale electrice si fabrici de procesare. A inceput ca inginer de aplicatii in 2003 si a crescut odata cu compania.',
    certifications: ['Grundfos Academy', 'KSB Certified Engineer'],
    expertise: ['pompe centrifugale', 'sisteme pompare', 'eficienta energetica', 'petrochimie'],
    image: '/team/adrian-ionescu.jpg'
  },
  {
    id: 'mihai-radu',
    name: 'M.R.',
    role: 'Inginer Aplicatii Electrice',
    experience: '15+ ani',
    bio: 'Specialist in selectare si dimensionare motoare electrice industriale, convertizoare de frecventa si sisteme de actionare pentru industria grea. A lucrat anterior la un integrator de automatizari inainte de a se alatura echipei in 2012.',
    certifications: ['Siemens Certified', 'ABB Partner', 'SEW Academy'],
    expertise: ['motoare electrice', 'convertizoare frecventa', 'automatizari industriale', 'motoare ATEX'],
    image: '/team/mihai-radu.jpg'
  },
  {
    id: 'cristina-pop',
    name: 'C.P.',
    role: 'Specialist Armaturi Industriale',
    experience: '12+ ani',
    bio: 'Expert in selectare robineti si supape pentru aplicatii critice: sisteme de abur, instalatii sub presiune, procese chimice. Lucreaza cu instalatori si proiectanti din toata tara pentru solutii de armaturi.',
    certifications: ['Spirax Sarco Certified', 'ARI Armaturen Partner'],
    expertise: ['robineti industriali', 'supape siguranta', 'sisteme abur', 'oale condens'],
    image: '/team/cristina-pop.jpg'
  },
  {
    id: 'radu-stanescu',
    name: 'R.S.',
    role: 'Specialist Suflante și Compresoare',
    experience: '13+ ani',
    bio: 'Expert in suflante canal lateral, Roots si centrifugale. A dimensionat sisteme de aerare pentru zeci de statii de epurare si linii de transport pneumatic. Inainte de Infinitrade, a lucrat in service la Becker Romania.',
    certifications: ['Becker Certified', 'FPZ Partner', 'Aerzen Training'],
    expertise: ['suflante industriale', 'compresoare', 'vid industrial', 'transport pneumatic'],
    image: '/team/radu-stanescu.jpg'
  },
  {
    id: 'dan-munteanu',
    name: 'D.M.',
    role: 'Inginer Proiectare Termică',
    experience: '11+ ani',
    bio: 'Specialist in dimensionare schimbatoare de caldura si sisteme termice industriale. A proiectat sisteme de recuperare caldura pentru fabrici din industria alimentara si chimica. Absolvent Politehnica Timisoara, sectia Energetica.',
    certifications: ['Alfa Laval Certified', 'Kelvion Partner', 'SWEP Training'],
    expertise: ['schimbatoare caldura', 'transfer termic', 'recuperare energie', 'procese termice'],
    image: '/team/dan-munteanu.jpg'
  },
  {
    id: 'elena-vasile',
    name: 'E.V.',
    role: 'Inginer Service și Mentenanță',
    experience: '9+ ani',
    bio: 'Coordoneaza echipa de service si programele de mentenanta preventiva. A implementat sisteme de monitorizare predictiva la clienti din industria alimentara si energetica. Stie ce se defecteaza si de ce.',
    certifications: ['Grundfos Service Partner', 'Wilo Certified', 'SKF Reliability'],
    expertise: ['mentenanta preventiva', 'diagnosticare vibratii', 'service pompe', 'training clienti'],
    image: '/team/elena-vasile.jpg'
  }
];

export const getAuthorById = (id) => authors.find(a => a.id === id) || authors[0];
export const defaultAuthor = authors[0];
