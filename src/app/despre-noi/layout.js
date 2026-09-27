import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';

export const revalidate = 86400;

export const metadata = {
  title: 'Despre Noi | Distribuitor din 2009',
  description: 'Infinitrade Romania - distribuitor echipamente industriale din 2009. Branduri cu pagină proprie, livrare 24–72 h din stoc, furnizor înregistrat SEAP.',
  alternates: {
    canonical: `${config.site.url}/despre-noi`,
  },
  openGraph: {
    title: 'Despre Infinitrade Romania | Distribuitor Echipamente Industriale',
    description: 'Furnizor de echipamente industriale și piese de schimb pentru companii din România, din 2009. Livrare 24–72 h din stoc, furnizor SEAP.',
    url: `${config.site.url}/despre-noi`,
    type: 'website',
    images: [
      {
        url: `${config.site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Despre Infinitrade Romania - Distribuitor Echipamente Industriale',
      }
    ],
  },
};

// AboutPage JSON-LD schema
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${config.site.url}/despre-noi#webpage`,
  name: 'Despre Infinitrade Romania',
  description: 'Infinitrade Romania - distribuitor echipamente industriale din 2009.',
  url: `${config.site.url}/despre-noi`,
  isPartOf: {
    '@id': `${config.site.url}/#website`
  },
  mainEntity: { '@type': 'Organization', '@id': `${config.site.url}/#organization` }
};

export default function DespreLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(aboutPageSchema) }}
      />
      {children}
    </>
  );
}
