import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';

export const metadata = {
  title: {
    absolute: 'Infinitrade Romania | Distribuitor Echipamente Industriale 2026',
  },
  description: 'Distribuitor echipamente industriale România. Furnizor SEAP/SICAP. Pompe Grundfos, Wilo. Robineți ARI, Spirax Sarco. Motoare Siemens, ABB. Livrare 24-72h.',
  keywords: [
    // Main keywords 2026
    'furnizor SEAP 2026', 'furnizor SICAP', 'echipamente industriale SEAP', 'licitatie echipamente industriale',
    'achizitii publice pompe 2026', 'achizitii publice echipamente', 'fonduri europene echipamente', 'PNRR echipamente industriale',
    'distribuitor echipamente industriale romania', 'echipamente industriale romania 2026',
    // Pompe keywords
    'pompe industriale romania', 'pompe industriale pret', 'furnizor SEAP pompe',
    'pompe grundfos romania distribuitor', 'pompe wilo romania', 'pompe ksb romania',
    'pompe centrifugale industriale', 'pompe submersibile SEAP',
    // Robineti keywords
    'robineti industriali romania', 'robineti cu bila industriali', 'furnizor SEAP robineti',
    'ari armaturen romania', 'spirax sarco romania', 'oale condens spirax sarco',
    'supape siguranta industriale', 'robineti fluture industriali',
    // Motoare keywords
    'motoare electrice industriale', 'motoare siemens romania', 'motoare abb romania distribuitor',
    'sew eurodrive romania', 'convertizoare frecventa pret', 'furnizor SEAP motoare electrice',
    'motoare ATEX zona 1', 'motoreductoare industriale',
    // Schimbatoare caldura keywords
    'schimbatoare caldura industriale', 'alfa laval romania distribuitor', 'kelvion romania',
    'garnituri schimbator caldura', 'furnizor SEAP schimbatoare caldura',
    // Suflante keywords
    'suflante industriale romania', 'suflante becker pret', 'ventilatoare industriale',
    'furnizor SEAP suflante', 'pompe vid industriale', 'suflante fpz romania',
    // Purchase intent
    'distribuitor autorizat echipamente industriale', 'catalog echipamente industriale 2026',
    'pret pompe industriale', 'oferta echipamente industriale',
  ],
  alternates: {
    canonical: config.site.url,
  },
  openGraph: {
    title: 'Infinitrade Romania | Furnizor SEAP Echipamente Industriale 2026',
    description: 'Distribuitor autorizat și furnizor SEAP 2026 pentru pompe Grundfos, Wilo, KSB, robineți ARI Armaturen, Spirax Sarco, motoare Siemens, ABB, SEW în România. Documentație licitații SEAP/SICAP.',
    url: config.site.url,
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
