import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';

export const revalidate = 3600;

export const metadata = {
  title: {
    absolute: 'Infinitrade Romania | Distribuitor Echipamente Industriale',
  },
  description: 'Distribuitor echipamente industriale România. Furnizor SEAP/SICAP. Pompe Grundfos, Wilo. Robineți ARI, Spirax Sarco. Motoare Siemens, ABB. Livrare 24-72h.',
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
