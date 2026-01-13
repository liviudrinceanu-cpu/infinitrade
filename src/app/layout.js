import './globals.css'

export const metadata = {
  metadataBase: new URL('https://infinitrade.ro'),
  title: {
    default: 'Infinitrade Romania | Distribuitor Pompe, Robineți, Motoare Industriale',
    template: '%s | Infinitrade Romania'
  },
  description: 'Distribuitor autorizat echipamente industriale România. Pompe Grundfos, Wilo, KSB. Robineți ARI Armaturen, Spirax Sarco. Motoare Siemens, SEW, ABB. Livrare 24-72h, piese schimb, service.',
  keywords: [
    'echipamente industriale romania',
    'pompe industriale', 'pompe grundfos', 'pompe wilo', 'pompe ksb', 'pompe submersibile', 'pompe centrifugale',
    'robineti industriali', 'ari armaturen', 'spirax sarco', 'supape siguranta', 'oale condens',
    'motoare electrice', 'motoare siemens', 'sew eurodrive', 'motoare abb', 'motoare atex',
    'schimbatoare caldura', 'alfa laval', 'kelvion',
    'suflante industriale', 'ventilatoare', 'pompe vid',
    'piese schimb industriale', 'distribuitor echipamente industriale'
  ],
  authors: [{ name: 'Infinitrade Romania - Driatheli Group SRL' }],
  creator: 'Infinitrade Romania',
  publisher: 'Driatheli Group SRL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo-icon.jpg',
    apple: '/logo-icon.jpg',
    shortcut: '/logo-icon.jpg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Infinitrade Romania | Distribuitor Echipamente Industriale Premium',
    description: 'Distribuitor autorizat pompe, robineți, motoare electrice în România. Branduri premium: Grundfos, Wilo, Siemens, ABB, Alfa Laval. Livrare rapidă 24-72h.',
    url: 'https://infinitrade.ro',
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Infinitrade Romania - Echipamente Industriale',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infinitrade Romania | Echipamente Industriale',
    description: 'Distribuitor pompe, robineți, motoare industriale în România',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://infinitrade.ro',
  },
  category: 'business',
}

// Schema.org JSON-LD for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Infinitrade Romania',
  legalName: 'Driatheli Group SRL',
  url: 'https://infinitrade.ro',
  logo: 'https://infinitrade.ro/logo-header.png',
  description: 'Distribuitor autorizat de echipamente industriale în România - pompe, robineți, motoare electrice, schimbătoare de căldură și suflante.',
  foundingDate: '2009',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calea Lugojului, nr.47/B, Hala nr. 3',
    addressLocality: 'Ghiroda',
    addressRegion: 'Timiș',
    postalCode: '307200',
    addressCountry: 'RO'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+40-XXX-XXX-XXX',
      contactType: 'sales',
      email: 'vanzari@infinitrade-romania.ro',
      availableLanguage: ['Romanian', 'English']
    }
  ],
  sameAs: [],
  areaServed: {
    '@type': 'Country',
    name: 'Romania'
  },
  knowsAbout: [
    'Pompe industriale',
    'Robineți industriali',
    'Motoare electrice',
    'Schimbătoare de căldură',
    'Suflante industriale',
    'Echipamente industriale'
  ]
}

// Schema.org for LocalBusiness
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://infinitrade.ro/#business',
  name: 'Infinitrade Romania',
  image: 'https://infinitrade.ro/logo-header.png',
  url: 'https://infinitrade.ro',
  telephone: '+40-XXX-XXX-XXX',
  email: 'vanzari@infinitrade-romania.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calea Lugojului, nr.47/B, Hala nr. 3',
    addressLocality: 'Ghiroda',
    addressRegion: 'Timiș',
    postalCode: '307200',
    addressCountry: 'RO'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '45.7833',
    longitude: '21.2833'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30'
  },
  priceRange: '$$'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0990db" />
        <meta name="geo.region" content="RO-TM" />
        <meta name="geo.placename" content="Ghiroda, Timis" />
        <link rel="canonical" href="https://infinitrade.ro" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
