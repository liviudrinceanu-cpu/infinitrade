import CategoryPage from '@/components/CategoryPage';

export const metadata = {
  title: 'Motoare Electrice Industriale Romania | Siemens, SEW, ABB | Infinitrade',
  description: 'Distribuitor motoare electrice industriale România. Motoare Siemens, SEW Eurodrive, ABB, Bonfiglioli. Motoare IE3, ATEX, servomotoare. Livrare 24-72h.',
  keywords: 'motoare electrice, motoare electrice industriale, motoare siemens, sew eurodrive, motoare abb, motoare ie3, motoare atex, servomotoare, motoreductoare, convertizoare frecventa',
  alternates: {
    canonical: 'https://infinitrade.ro/motoare-electrice',
  },
  openGraph: {
    title: 'Motoare Electrice Industriale Romania | Distribuitor Autorizat | Infinitrade',
    description: 'Distribuitor motoare Siemens, SEW Eurodrive, ABB. Motoare IE3, ATEX, servomotoare.',
    url: 'https://infinitrade.ro/motoare-electrice',
    type: 'website',
  },
};

export default function MotoarElectricePage() {
  return <CategoryPage slug="motoare-electrice" />;
}
