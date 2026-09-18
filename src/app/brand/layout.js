import { brandCount } from '@/data/siteStats';

export const metadata = {
  title: 'Branduri Industriale | Furnizor SEAP',
  description: `Furnizăm branduri industriale: Grundfos, Wilo, Siemens, ABB, Alfa Laval — ${brandCount} de branduri cu pagină proprie. Piese originale, livrare rapidă.`,
  keywords: 'branduri industriale, distribuitor industrial, grundfos romania, wilo romania, siemens romania, abb romania',
};

export default function BrandLayout({ children }) {
  return children;
}
