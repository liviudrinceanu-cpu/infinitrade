import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Infinitrade Romania | Distribuitor Echipamente Industriale | Pompe, Robineți, Motoare',
  description: 'Distribuitor autorizat echipamente industriale în România. Pompe Grundfos, Wilo, KSB. Robineți ARI Armaturen, Spirax Sarco. Motoare Siemens, ABB. Peste 500 branduri, livrare 24-72h.',
  keywords: 'echipamente industriale, distribuitor pompe, robineti industriali, motoare electrice, schimbatoare caldura, suflante industriale, piese schimb, grundfos, wilo, siemens, abb',
  alternates: {
    canonical: 'https://infinitrade.ro',
  },
  openGraph: {
    title: 'Infinitrade Romania | Distribuitor Echipamente Industriale Premium',
    description: 'Distribuitor autorizat pompe, robineți, motoare electrice în România. Branduri premium: Grundfos, Wilo, Siemens, ABB, Alfa Laval.',
    url: 'https://infinitrade.ro',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Sari la conținut principal
      </a>
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
