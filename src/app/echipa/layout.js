import { config } from '@/lib/config';

export const metadata = {
  title: 'Echipa | Cum Lucrăm Cererile de Ofertă',
  description: 'Cum lucrează echipa Infinitrade din Ghiroda: vânzări și ofertare, suport tehnic la selecție, achiziții din UE și SUA, depozit și livrare în toată România.',
  openGraph: {
    title: 'Echipa Infinitrade | Cum lucrăm',
    description: 'Ce face fiecare rol din echipă și ce informații ne ajută să răspundem repede la o cerere de ofertă.',
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
