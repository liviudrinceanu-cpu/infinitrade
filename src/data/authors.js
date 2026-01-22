// Infinitrade Romania - Author Bios for E-E-A-T SEO
// Last updated: 2026-01-22

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
    name: 'Adrian Ionescu',
    role: 'Director Tehnic',
    experience: '20+ ani',
    bio: 'Expert in dimensionare sisteme pompare si eficienta energetica industriala. A coordonat proiecte pentru rafinarii, centrale electrice si fabrici de procesare.',
    certifications: ['Grundfos Academy', 'KSB Certified Engineer'],
    expertise: ['pompe centrifugale', 'sisteme pompare', 'eficienta energetica', 'petrochimie'],
    image: '/team/adrian-ionescu.jpg'
  },
  {
    id: 'mihai-radu',
    name: 'Mihai Radu',
    role: 'Inginer Aplicatii Electrice',
    experience: '15+ ani',
    bio: 'Specialist in selectare si dimensionare motoare electrice industriale, convertizoare de frecventa si sisteme de actionare pentru industria grea.',
    certifications: ['Siemens Certified', 'ABB Partner', 'SEW Academy'],
    expertise: ['motoare electrice', 'convertizoare frecventa', 'automatizari industriale', 'motoare ATEX'],
    image: '/team/mihai-radu.jpg'
  },
  {
    id: 'cristina-pop',
    name: 'Cristina Pop',
    role: 'Specialist Armaturi Industriale',
    experience: '12+ ani',
    bio: 'Expert in selectare robineti si supape pentru aplicatii critice: sisteme de abur, instalatii sub presiune, procese chimice.',
    certifications: ['Spirax Sarco Certified', 'ARI Armaturen Partner'],
    expertise: ['robineti industriali', 'supape siguranta', 'sisteme abur', 'oale condens'],
    image: '/team/cristina-pop.jpg'
  }
];

export const getAuthorById = (id) => authors.find(a => a.id === id) || authors[0];
export const defaultAuthor = authors[0];
