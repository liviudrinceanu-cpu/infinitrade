import { config } from '@/lib/config';

export const metadata = {
  title: 'Echipa Noastră | Ingineri Certificați',
  description: 'Echipa Infinitrade: ingineri cu 60+ ani experiență cumulată, certificați Grundfos, Siemens, ABB. Consultanță tehnică pentru pompe, motoare.',
  keywords: ['echipa infinitrade', 'ingineri echipamente industriale', 'consultanță tehnică', 'experți pompe', 'specialiști motoare electrice'],
  openGraph: {
    title: 'Echipa Infinitrade | Ingineri Specializați',
    description: 'Cunoaște inginerii care te vor ajuta să alegi echipamentul potrivit.',
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Echipa Infinitrade Romania',
      }
    ],
  },
  alternates: {
    canonical: `${config.site.url}/echipa`,
  },
};

export default function EchipaLayout({ children }) {
  return children;
}
