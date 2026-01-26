import './globals.css'
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { QuoteCartProvider } from '@/context/QuoteCartContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { config } from '@/lib/config';

// Optimized font loading - only load latin subset with swap display
// This prevents FOIT (Flash of Invisible Text) and improves LCP
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  // Only load weights actually used in the site
  weight: ['400', '500', '600'],
  // Reduce data by excluding unused features
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata = {
  metadataBase: new URL(config.site.url),
  title: {
    default: 'Infinitrade Romania | Distribuitor Pompe, Robineți, Motoare Industriale',
    template: '%s | Infinitrade Romania'
  },
  description: 'Distribuitor autorizat echipamente industriale România. Furnizor înregistrat SEAP/SICAP pentru achiziții publice și licitații. Pompe Grundfos, Wilo, KSB. Robineți ARI Armaturen, Spirax Sarco. Motoare Siemens, SEW, ABB. Documentație completă pentru fonduri europene.',
  keywords: [
    // Main keywords
    'echipamente industriale romania',
    'distribuitor echipamente industriale',
    'furnizor echipamente industriale romania',
    'echipamente industriale pret',
    // SEAP / SICAP / Public Procurement
    'furnizor SEAP',
    'furnizor SICAP',
    'furnizor inregistrat SEAP',
    'echipamente industriale SEAP',
    'pompe industriale SEAP',
    'licitatie echipamente industriale',
    'licitatie pompe industriale',
    'achizitii publice echipamente',
    'achizitii publice pompe',
    'fonduri europene echipamente industriale',
    'PNRR echipamente industriale',
    'documentatie licitatie',
    // Pumps
    'pompe industriale',
    'pompe industriale romania',
    'pompe industriale pret',
    'pompe grundfos',
    'pompe grundfos romania',
    'pompe wilo',
    'pompe wilo romania',
    'pompe ksb',
    'pompe submersibile',
    'pompe centrifugale',
    'pompe dozatoare',
    'pompe de vid',
    // Valves
    'robineti industriali',
    'robineti industriali romania',
    'ari armaturen',
    'spirax sarco',
    'spirax sarco romania',
    'supape siguranta',
    'supape siguranta industriale',
    'oale condens',
    'robineti cu bila',
    'robineti fluture',
    // Motors
    'motoare electrice',
    'motoare electrice industriale',
    'motoare siemens',
    'motoare siemens romania',
    'sew eurodrive',
    'motoare abb',
    'motoare atex',
    'motoreductoare',
    // Heat exchangers
    'schimbatoare caldura',
    'schimbatoare caldura industriale',
    'alfa laval',
    'alfa laval romania',
    'kelvion',
    // Blowers
    'suflante industriale',
    'suflante aerare',
    'ventilatoare industriale',
    'pompe vid industriale',
    // Services
    'piese schimb industriale',
    'piese schimb pompe',
    'service pompe industriale',
    'livrare rapida echipamente',
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
  '@id': `${config.site.url}/#organization`,
  name: 'Infinitrade Romania',
  legalName: 'Driatheli Group SRL',
  url: config.site.url,
  logo: `${config.site.url}/logo-header.png`,
  image: `${config.site.url}/logo-header.png`,
  description: 'Distribuitor autorizat de echipamente industriale în România - pompe, robineți, motoare electrice, schimbătoare de căldură și suflante.',
  foundingDate: '2009-11-11',
  taxID: 'RO26209397',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 16
  },
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
    'Echipamente industriale',
    'Grundfos', 'Wilo', 'KSB', 'Siemens', 'ABB', 'SEW Eurodrive',
    'Alfa Laval', 'Kelvion', 'ARI Armaturen', 'Spirax Sarco',
    'Becker', 'FPZ', 'Endress Hauser', 'Timken', 'NSK'
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

// Schema.org for WebSite with SearchAction (enables sitelink search box in SERP)
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${config.site.url}/#website`,
  name: 'Infinitrade Romania',
  alternateName: 'Infinitrade - Echipamente Industriale',
  url: config.site.url,
  description: 'Distribuitor autorizat de echipamente industriale în România - pompe, robineți, motoare electrice, schimbătoare de căldură și suflante.',
  publisher: {
    '@id': `${config.site.url}/#organization`
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${config.site.url}/brand/{search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  },
  inLanguage: 'ro-RO'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0990db" />
        <meta name="geo.region" content="RO-TM" />
        <meta name="geo.placename" content="Ghiroda, Timis" />

        {/* DNS Prefetch for external resources - improves connection setup time */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preconnect for critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

        {/* Preload critical resources - fetchpriority for LCP */}
        <link rel="preload" href="/logo-header.png" as="image" type="image/png" fetchPriority="high" />

        {/* Inline critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS - prevents layout shift */
          :root{--primary:#0990db;--white:#fff;--black:#23233b;--gray-50:#fbfbfd;--gray-100:#f5f5f7;--gray-200:#e8e8ed;--gray-500:#6e6e73}
          body{margin:0;font-family:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
          .skip-to-content{position:absolute;top:-40px;left:0;background:#0990db;color:white;padding:8px 16px;z-index:10000;transition:top 0.3s;text-decoration:none;font-weight:500;border-radius:0 0 4px 0}
          .skip-to-content:focus{top:0}
        `}} />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
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
