import CategoryPage from '@/components/CategoryPage';

export const metadata = {
  title: 'Pompe Industriale Romania | Distribuitor Grundfos, Wilo, KSB | Infinitrade',
  description: 'Distribuitor autorizat pompe industriale în România. Pompe Grundfos, Wilo, KSB, Lowara, Ebara. Pompe centrifugale, submersibile, dozatoare. Livrare 24-72h. Piese schimb.',
  keywords: 'pompe industriale, pompe industriale romania, distribuitor pompe, pompe grundfos, pompe wilo, pompe ksb, pompe centrifugale, pompe submersibile, pompe dozatoare',
  alternates: {
    canonical: 'https://infinitrade.ro/pompe-industriale',
  },
  openGraph: {
    title: 'Pompe Industriale Romania | Distribuitor Autorizat | Infinitrade',
    description: 'Distribuitor pompe industriale Grundfos, Wilo, KSB, Lowara, Ebara. Livrare rapidă în toată România.',
    url: 'https://infinitrade.ro/pompe-industriale',
    type: 'website',
  },
};

export default function PompeIndustrialePage() {
  return <CategoryPage slug="pompe-industriale" />;
}
