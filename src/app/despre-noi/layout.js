export const metadata = {
  title: 'Despre Noi | Distribuitor Echipamente Industriale din 2009 | Infinitrade Romania',
  description: 'Infinitrade Romania - distribuitor autorizat echipamente industriale din 2009. Peste 500 branduri, 800+ clienți industriali, 300+ furnizori globali. ISO 9001:2015, furnizor SEAP.',
  keywords: 'despre infinitrade, distribuitor echipamente industriale, driatheli group, furnizor industrial romania, iso 9001',
  alternates: {
    canonical: 'https://infinitrade.ro/despre-noi',
  },
  openGraph: {
    title: 'Despre Infinitrade Romania | Distribuitor Echipamente Industriale',
    description: 'Partener strategic pentru industria românească din 2009. 500+ branduri, livrare 24-72h.',
    url: 'https://infinitrade.ro/despre-noi',
    type: 'website',
  },
};

// AboutPage JSON-LD schema
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://infinitrade.ro/despre-noi#webpage',
  name: 'Despre Infinitrade Romania',
  description: 'Infinitrade Romania - distribuitor autorizat echipamente industriale din 2009.',
  url: 'https://infinitrade.ro/despre-noi',
  isPartOf: {
    '@id': 'https://infinitrade.ro/#website'
  },
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://infinitrade.ro/#organization',
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
