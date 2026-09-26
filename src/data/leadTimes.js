// v16 (D-2026-09-26): the single source for the lead-time wording on the
// category pages (hero stat, "Cât durează livrarea" card, home category
// cards, Open Graph image). Owner decision 26.09: 24–72 h when the part is in
// stock in Romania or at a European stockist; factory orders usually 2–4
// weeks; OEM, customised or made-to-specification execution can take longer
// and is confirmed in the offer. Kept tiny and dependency-free: it is
// imported by client components.

export const CATEGORY_LEAD_TIME = {
  headline: '24–72 h',
  headlineLabel: 'Livrare din stoc',
  stock: 'Livrare în 24–72 h când reperul este pe stoc în România sau la un depozit din Europa.',
  factory: 'Comenzile din fabrică durează de regulă 2–4 săptămâni.',
  special: 'Execuțiile OEM, personalizate sau fabricate special pe specificația dumneavoastră pot depăși 4 săptămâni; termenul exact îl confirmăm în ofertă, după răspunsul producătorului.',
};
