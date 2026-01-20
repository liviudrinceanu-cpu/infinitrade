import './globals.css'
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { QuoteCartProvider } from '@/context/QuoteCartContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { config } from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata = {
  metadataBase: new URL(config.site.url),
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
    google: config.verification.google,
  },
  alternates: {
    canonical: config.site.url,
  },
  category: 'business',
}

// Schema.org JSON-LD for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Infinitrade Romania',
  legalName: 'Driatheli Group SRL',
  url: config.site.url,
  logo: `${config.site.url}/logo-header.png`,
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
      telephone: `+40-${config.site.phone.replace(/\s/g, '-')}`,
      contactType: 'sales',
      email: config.site.email.sales,
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
  '@id': `${config.site.url}/#business`,
  name: 'Infinitrade Romania',
  image: `${config.site.url}/logo-header.png`,
  url: config.site.url,
  telephone: `+40-${config.site.phone.replace(/\s/g, '-')}`,
  email: config.site.email.sales,
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

// Skip to content styles (inline for performance)
const skipLinkStyles = `
  .skip-to-content {
    position: absolute;
    top: -40px;
    left: 0;
    background: #0990db;
    color: white;
    padding: 8px 16px;
    z-index: 10000;
    transition: top 0.3s;
    text-decoration: none;
    font-weight: 500;
    border-radius: 0 0 4px 0;
  }
  .skip-to-content:focus {
    top: 0;
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: skipLinkStyles }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0990db" />
        <meta name="geo.region" content="RO-TM" />
        <meta name="geo.placename" content="Ghiroda, Timis" />
        <link rel="canonical" href={config.site.url} />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        {/* Google Analytics */}
        {config.analytics.gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${config.analytics.gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Salt la conținut
        </a>
        <ErrorBoundary>
          <QuoteCartProvider>
            {children}
          </QuoteCartProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
