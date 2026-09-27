import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RoleEntry from '@/components/RoleEntry';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';

export const revalidate = 3600;

export const metadata = {
  title: {
    absolute: 'Infinitrade Romania | Distribuitor Echipamente Industriale',
  },
  description: 'Distribuitor echipamente industriale în România, furnizor SEAP: pompe Grundfos și Wilo, robineți ARI și Spirax Sarco, motoare Siemens și ABB. Livrare 24–72 h.',
  alternates: {
    canonical: config.site.url,
  },
  openGraph: {
    title: 'Infinitrade Romania | Furnizor SEAP Echipamente Industriale 2026',
    description: 'Furnizor SEAP 2026 pentru pompe Grundfos, Wilo, KSB, robineți ARI Armaturen, Spirax Sarco, motoare Siemens, ABB, SEW în România. Documentație licitații SEAP/SICAP.',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Infinitrade Romania - Furnizor SEAP Echipamente Industriale',
      }
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <RoleEntry />
        <Categories />
        <Features />
      </main>
      <Footer />
    </>
  );
}
