// v27: valorile câmpului „rol” din formularul de cerere (pagina client
// /contact și validarea din /api/contact). Modul mic, fără alte importuri.
export const ROLE_OPTIONS = [
  { value: 'achizitii', label: 'Achiziții / aprovizionare' },
  { value: 'mentenanta', label: 'Mentenanță' },
  { value: 'proiecte', label: 'Proiecte / investiții (CAPEX)' },
  { value: 'inginerie', label: 'Inginerie / proiectare' },
  { value: 'calitate', label: 'Calitate / HSE' },
  { value: 'management', label: 'Management / finanțe' },
  { value: 'altul', label: 'Alt rol' },
];

export const ROLE_VALUES = ROLE_OPTIONS.map((o) => o.value);
export const roleLabel = (v) => (ROLE_OPTIONS.find((o) => o.value === v) || {}).label || '';
