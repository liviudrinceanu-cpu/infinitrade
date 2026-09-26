// Infinitrade Romania - article byline.
// v19 (D-2026-09-27, audit R1): the six individual "authors" added by the V52
// "E-E-A-T" rewrite (initials, biographies, manufacturer certifications,
// years of experience) were not confirmed by real people and are no longer
// published. Every article is signed by the team; a real, consenting author
// can be added here later with a real name and verifiable details.

export const authors = [
  {
    id: 'echipa-tehnica',
    name: 'Echipa tehnică Infinitrade',
    role: 'Vânzări și suport tehnic',
    bio: 'Articolele sunt scrise de echipa care primește cererile de ofertă: vânzări, suport tehnic la selecție și achiziții. Datele tehnice vin din documentația publică a producătorilor.',
  },
];

// Legacy author ids (e.g. 'author-001', 'adrian-ionescu') resolve to the team.
export const getAuthorById = () => authors[0];
export const defaultAuthor = authors[0];
