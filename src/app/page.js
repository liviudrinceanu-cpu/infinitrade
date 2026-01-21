import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    absolute: 'Infinitrade Romania | Distribuitor Echipamente Industriale',
  },
  description: 'Distribuitor autorizat echipamente industriale în România. Furnizor SEAP/SICAP. Pompe Grundfos, Wilo, KSB. Robineți ARI Armaturen. Motoare Siemens, ABB. Livrare 24-72h.',
  keywords: [
    'furnizor SEAP', 'furnizor SICAP', 'echipamente industriale SEAP', 'licitatie echipamente industriale',
    'achizitii publice pompe', 'achizitii publice echipamente', 'fonduri europene echipamente',
    'distribuitor echipamente industriale', 'echipamente industriale romania',
    'pompe industriale', 'pompe grundfos', 'pompe wilo', 'pompe ksb',
    'robineti industriali', 'ari armaturen', 'spirax sarco',
    'motoare electrice', 'motoare siemens', 'motoare abb',
    'schimbatoare caldura', 'alfa laval', 'suflante industriale'
  ],
  alternates: {
    canonical: 'https://infinitrade.ro',
  },
  openGraph: {
    title: 'Infinitrade Romania | Furnizor SEAP Echipamente Industriale Premium',
    description: 'Distribuitor autorizat și furnizor SEAP pentru pompe, robineți, motoare electrice în România. Branduri premium: Grundfos, Wilo, Siemens, ABB, Alfa Laval. Documentație licitații.',
    url: 'https://infinitrade.ro',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Categories />
        <Features />
      </main>
      <Footer />
    </>
  );
}
