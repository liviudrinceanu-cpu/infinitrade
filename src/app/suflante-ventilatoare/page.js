import CategoryPage from '@/components/CategoryPage';

export const metadata = {
  title: 'Suflante Industriale și Ventilatoare Romania | Becker, FPZ | Infinitrade',
  description: 'Distribuitor suflante industriale și ventilatoare România. Becker, FPZ, Ziehl Abegg, Gardner Denver. Suflante canal lateral, pompe vid, ventilatoare centrifugale. Livrare 24-72h.',
  keywords: 'suflante industriale, ventilatoare industriale, suflante canal lateral, pompe vid, suflante roots, ventilatoare centrifugale, becker, fpz, ziehl abegg, aerzen',
  alternates: {
    canonical: 'https://infinitrade.ro/suflante-ventilatoare',
  },
  openGraph: {
    title: 'Suflante Industriale și Ventilatoare Romania | Distribuitor | Infinitrade',
    description: 'Distribuitor suflante Becker, FPZ, Ziehl Abegg. Pompe vid, ventilatoare industriale.',
    url: 'https://infinitrade.ro/suflante-ventilatoare',
    type: 'website',
  },
};

export default function SuflanteVentilatoarePage() {
  return <CategoryPage slug="suflante-ventilatoare" />;
}
