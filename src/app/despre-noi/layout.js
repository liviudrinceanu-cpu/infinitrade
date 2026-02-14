import { config } from '@/lib/config';

export const revalidate = 86400;

export const metadata = {
  title: 'Despre Noi | Distribuitor din 2009',
  description: 'Infinitrade Romania - distribuitor echipamente industriale din 2009. 500+ branduri, 800+ clienți industriali. ISO 9001:2015, furnizor SEAP.',
  alternates: {
    canonical: `${config.site.url}/despre-noi`,
  },
  openGraph: {
    title: 'Despre Infinitrade Romania | Distribuitor Echipamente Industriale',
    description: 'Partener strategic pentru industria românească din 2009. 500+ branduri, livrare 24-72h.',
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
  mainEntity: {
    '@type': 'Organization',
    '@id': `${config.site.url}/#organization`,
    name: 'Infinitrade Romania',
    legalName: 'Driatheli Group SRL',
    foundingDate: '2009',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50
    },
    areaServed: {
      '@type': 'Country',
      name: 'Romania'
    },
    knowsAbout: [
      'Pompe industriale',
      'Robineți industriali',
      'Motoare electrice',
      'Schimbătoare de căldură',
      'Suflante industriale'
    ]
  }
};

export default function DespreLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {children}
    </>
  );
}
