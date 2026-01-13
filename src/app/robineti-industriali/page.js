import CategoryPage from '@/components/CategoryPage';

export const metadata = {
  title: 'Robineți Industriali Romania | ARI Armaturen, Spirax Sarco | Infinitrade',
  description: 'Distribuitor robineți industriali România. Robineți ARI Armaturen, Spirax Sarco, Danfoss. Supape siguranță, oale condens, robineți reglare. Livrare rapidă 24-72h.',
  keywords: 'robineti industriali, ari armaturen, spirax sarco, supape siguranta, oale condens, robineti bila, robineti fluture, valve industriale, robineti reglare',
  alternates: {
    canonical: 'https://infinitrade.ro/robineti-industriali',
  },
  openGraph: {
    title: 'Robineți Industriali Romania | Distribuitor Autorizat | Infinitrade',
    description: 'Distribuitor robineți ARI Armaturen, Spirax Sarco, Danfoss. Supape siguranță, oale condens.',
    url: 'https://infinitrade.ro/robineti-industriali',
    type: 'website',
  },
};

export default function RobinetiIndustrialiPage() {
  return <CategoryPage slug="robineti-industriali" />;
}
