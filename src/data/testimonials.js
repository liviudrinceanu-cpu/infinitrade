// Testimoniale de la clienți - fără nume companii pentru confidențialitate
// Doar industrie și funcție

export const testimonials = [
  {
    id: 1,
    quote: 'Colaborăm cu Infinitrade de peste 8 ani pentru aprovizionarea cu pompe industriale. Timpul de răspuns și calitatea serviciilor tehnice sunt excelente. Ne-au ajutat să reducem timpul de nefuncționare cu 40%.',
    industry: 'Petrochimie',
    role: 'Director Tehnic',
    rating: 5,
    featured: true,
    yearsClient: 8,
    categories: ['Pompe Industriale'],
  },
  {
    id: 2,
    quote: 'Suportul tehnic oferit la selectarea motoarelor electrice a fost excepțional. Echipa Infinitrade a înțeles perfect cerințele noastre de eficiență energetică și ne-a recomandat soluții IE4 care ne-au redus consumul cu 35%.',
    industry: 'Industrie Alimentară',
    role: 'Manager Producție',
    rating: 5,
    featured: true,
    yearsClient: 5,
    categories: ['Motoare Electrice'],
  },
  {
    id: 3,
    quote: 'Livrare rapidă, produse originale, consultanță profesionistă. Am încercat mai mulți furnizori, dar Infinitrade este singurul care oferă suport tehnic real, nu doar vânzare de produse.',
    industry: 'Tratare Apă',
    role: 'Inginer Șef',
    rating: 5,
    featured: true,
    yearsClient: 6,
    categories: ['Pompe Industriale', 'Robineți Industriali'],
  },
  {
    id: 4,
    quote: 'Partenerul nostru de încredere pentru robineți industriali. Gama de produse ARI Armaturen și Gemü ne acoperă toate nevoile. Prețuri competitive și termene respectate întotdeauna.',
    industry: 'Industrie Chimică',
    role: 'Responsabil Achiziții',
    rating: 5,
    featured: false,
    yearsClient: 4,
    categories: ['Robineți Industriali'],
  },
  {
    id: 5,
    quote: 'Am modernizat întreaga stație de pompare cu echipamente de la Infinitrade. Proiectul a fost livrat la timp, iar suportul post-vânzare este ireproșabil. Recomand cu încredere!',
    industry: 'Energie',
    role: 'Manager Proiect',
    rating: 5,
    featured: false,
    yearsClient: 3,
    categories: ['Pompe Industriale', 'Motoare Electrice'],
  },
  {
    id: 6,
    quote: 'Schimbătoarele de căldură Alfa Laval comandate prin Infinitrade au depășit așteptările. Eficiență termică excelentă și durabilitate. Serviciul de dimensionare oferit gratuit ne-a economisit mult timp.',
    industry: 'HVAC Industrial',
    role: 'Director Operațiuni',
    rating: 5,
    featured: false,
    yearsClient: 7,
    categories: ['Schimbătoare de Căldură'],
  },
  {
    id: 7,
    quote: 'Suflantele Becker și Elmo Rietschle achiziționate pentru linia noastră de producție funcționează impecabil de 4 ani. Zero defecțiuni, zero probleme. Calitate germană la prețuri corecte.',
    industry: 'Automotive',
    role: 'Manager Mentenanță',
    rating: 5,
    featured: false,
    yearsClient: 4,
    categories: ['Suflante și Ventilatoare'],
  },
  {
    id: 8,
    quote: 'Urgențele sunt gestionate exemplar. Am avut o pompă defectă într-o vineri seară și luni dimineața aveam deja piesa de schimb. Acest nivel de reactivitate face diferența în industria noastră.',
    industry: 'Minerit',
    role: 'Supervisor Producție',
    rating: 5,
    featured: true,
    yearsClient: 10,
    categories: ['Pompe Industriale'],
  },
  {
    id: 9,
    quote: 'Consultanța tehnică pentru aplicații speciale este punctul forte al Infinitrade. Ne-au ajutat să găsim soluții pentru medii corozive unde alți furnizori nu au putut oferi nimic.',
    industry: 'Farmaceutic',
    role: 'Inginer Proces',
    rating: 5,
    featured: false,
    yearsClient: 5,
    categories: ['Robineți Industriali', 'Pompe Industriale'],
  },
  {
    id: 10,
    quote: 'Raportul calitate-preț este excelent. Primim întotdeauna mai multe opțiuni pentru fiecare solicitare, de la soluții economice până la cele premium. Transparență totală.',
    industry: 'Construcții',
    role: 'Procurement Manager',
    rating: 5,
    featured: false,
    yearsClient: 2,
    categories: ['Motoare Electrice', 'Pompe Industriale'],
  },
];

// Statistici agregate
export const testimonialStats = {
  totalClients: 800,
  avgRating: 4.9,
  yearsExperience: 30,
  satisfactionRate: 98,
  repeatClients: 92,
  countriesServed: 15,
  industriesServed: 15,
};

// Industrii deservite cu iconuri
export const industriesServed = [
  { name: 'Petrochimie', icon: '🛢️', clients: 120 },
  { name: 'Alimentar', icon: '🏭', clients: 95 },
  { name: 'Tratare Apă', icon: '💧', clients: 85 },
  { name: 'Energie', icon: '⚡', clients: 75 },
  { name: 'Farmaceutic', icon: '💊', clients: 45 },
  { name: 'Chimie', icon: '🧪', clients: 70 },
  { name: 'Minerit', icon: '⛏️', clients: 55 },
  { name: 'Automotive', icon: '🚗', clients: 90 },
  { name: 'Construcții', icon: '🏗️', clients: 65 },
  { name: 'HVAC', icon: '❄️', clients: 50 },
  { name: 'Agricultură', icon: '🌾', clients: 40 },
  { name: 'Naval', icon: '🚢', clients: 25 },
  { name: 'Textile', icon: '🧵', clients: 35 },
  { name: 'Hârtie', icon: '📄', clients: 30 },
  { name: 'Logistică', icon: '📦', clients: 20 },
];

// Helper functions
export const getFeaturedTestimonials = () =>
  testimonials.filter(t => t.featured);

export const getTestimonialsByIndustry = (industry) =>
  testimonials.filter(t => t.industry === industry);

export const getTestimonialsByCategory = (category) =>
  testimonials.filter(t => t.categories.includes(category));

export const getAverageRating = () => {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return (sum / testimonials.length).toFixed(1);
};
