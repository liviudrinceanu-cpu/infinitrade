import './globals.css'
import { Inter } from 'next/font/google';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { QuoteCartProvider } from '@/context/QuoteCartContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { config } from '@/lib/config';

// Dynamically import WebVitals to avoid SSR (client-only component)
const WebVitals = dynamic(() => import('@/components/WebVitals'), { ssr: false });

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

// Safe JSON-LD serialization - prevents XSS via script injection
function safeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
}

export const metadata = {
  metadataBase: new URL(config.site.url),
  title: {
    default: 'Infinitrade Romania | Distribuitor Pompe, Robineți, Motoare Industriale',
    template: '%s | Infinitrade Romania'
  },
  description: 'Distribuitor autorizat echipamente industriale Romania. Furnizor SEAP/SICAP. Pompe Grundfos, Wilo. Robineti ARI, Spirax Sarco. Motoare Siemens, ABB. Livrare 24-72h.',
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
    url: config.site.url,
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
    languages: {
      'ro-RO': config.site.url,
      'x-default': config.site.url,
    },
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
  ],
  sameAs: [
    'https://www.linkedin.com/company/infinitrade-romania',
    'https://termene.ro/firma/26209397-DRIATHELI-GROUP-SRL',
    'https://www.risco.ro/verifica-firma/driatheli-group-cui-26209397',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '15',
  }
}

// Schema.org for LocalBusiness
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'WholesaleStore'],
  '@id': `${config.site.url}/#business`,
  parentOrganization: { '@id': `${config.site.url}/#organization` },
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
  areaServed: [
    { '@type': 'Country', name: 'România' },
    { '@type': 'City', name: 'București' },
    { '@type': 'City', name: 'Cluj-Napoca' },
    { '@type': 'City', name: 'Timișoara' },
    { '@type': 'City', name: 'Iași' },
    { '@type': 'City', name: 'Constanța' },
    { '@type': 'City', name: 'Craiova' },
    { '@type': 'City', name: 'Brașov' },
    { '@type': 'City', name: 'Galați' },
    { '@type': 'City', name: 'Ploiești' },
    { '@type': 'City', name: 'Oradea' },
    { '@type': 'City', name: 'Arad' },
    { '@type': 'City', name: 'Sibiu' },
  ],
  priceRange: '$$'
}

// Schema.org for WebSite (removed SearchAction as there's no search functionality)
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
  inLanguage: 'ro-RO'
}

// Schema.org for Services offered
const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${config.site.url}/#service-consultanta`,
      name: 'Consultanță Tehnică Echipamente Industriale',
      description: 'Consultanță tehnică gratuită pentru selecția echipamentelor industriale: pompe, robineți, motoare electrice, schimbătoare de căldură. Dimensionare, specificații tehnice, bugetare.',
      serviceType: 'Consultanță Tehnică',
      provider: { '@id': `${config.site.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'România' },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${config.site.url}/contact`,
        servicePhone: '+40 371 232 404',
      },
    },
    {
      '@type': 'Service',
      '@id': `${config.site.url}/#service-instalare`,
      name: 'Instalare și Punere în Funcțiune',
      description: 'Servicii profesionale de instalare și punere în funcțiune echipamente industriale. Pompe, sisteme de pompare, robineți industriali, motoare electrice.',
      serviceType: 'Instalare',
      provider: { '@id': `${config.site.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'România' },
    },
    {
      '@type': 'Service',
      '@id': `${config.site.url}/#service-mentenanta`,
      name: 'Service și Mentenanță Echipamente Industriale',
      description: 'Service autorizat pentru pompe Grundfos, Wilo, KSB, motoare Siemens, ABB. Mentenanță preventivă, reparații, piese de schimb originale.',
      serviceType: 'Service și Mentenanță',
      provider: { '@id': `${config.site.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'România' },
    },
  ]
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
          dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
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
        <WebVitals />
        <ErrorBoundary>
          <QuoteCartProvider>
            {children}
          </QuoteCartProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
