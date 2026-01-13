import CategoryPage from '@/components/CategoryPage';

export const metadata = {
  title: 'Schimbătoare de Căldură Romania | Alfa Laval, Kelvion, SWEP | Infinitrade',
  description: 'Distribuitor schimbătoare de căldură România. Alfa Laval, Kelvion, SWEP, Danfoss. Schimbătoare plăci brazate, demontabile, răcitoare ulei. Garnituri, piese schimb.',
  keywords: 'schimbatoare caldura, schimbatoare placi, alfa laval, kelvion, swep, danfoss, racitoare ulei, schimbatoare brazate, garnituri schimbatoare, transfer termic',
  alternates: {
    canonical: 'https://infinitrade.ro/schimbatoare-caldura',
  },
  openGraph: {
    title: 'Schimbătoare de Căldură Romania | Distribuitor Autorizat | Infinitrade',
    description: 'Distribuitor schimbătoare Alfa Laval, Kelvion, SWEP. Garnituri, plăci schimb, service.',
    url: 'https://infinitrade.ro/schimbatoare-caldura',
    type: 'website',
  },
};

export default function SchimbatoareCalduraPage() {
  return <CategoryPage slug="schimbatoare-caldura" />;
}
