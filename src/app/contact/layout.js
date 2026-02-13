import { config } from '@/lib/config';

// Safe JSON-LD serialization - prevents XSS via script injection
function safeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')
}

export const revalidate = 86400;

export const metadata = {
  title: 'Contact | Solicită Ofertă',
  description: 'Contactează-ne pentru oferte echipamente industriale. Pompe, robineți, motoare. Răspuns în 24h, consultanță gratuită. Tel: +40 371 232 404',
  alternates: {
    canonical: `${config.site.url}/contact`,
  },
  openGraph: {
    title: 'Contact Infinitrade Romania | Solicită Ofertă',
    description: 'Contactează-ne pentru oferte echipamente industriale. Răspuns în 24h.',
    url: `${config.site.url}/contact`,
    type: 'website',
  },
};

// ContactPage JSON-LD schema
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${config.site.url}/contact#webpage`,
  name: 'Contact Infinitrade Romania',
  description: 'Contactează Infinitrade Romania pentru oferte personalizate echipamente industriale.',
  url: `${config.site.url}/contact`,
  isPartOf: {
    '@id': `${config.site.url}/#website`
  },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${config.site.url}/#organization`,
    name: 'Infinitrade Romania',
    logo: `${config.site.url}/logo-header.png`,
    image: `${config.site.url}/logo-header.png`,
    telephone: '+40 371 232 404',
    email: config.site.email.sales,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calea Lugojului, nr.47/B, Hala nr. 3',
      addressLocality: 'Ghiroda',
      addressRegion: 'Timiș',
      postalCode: '307200',
      addressCountry: 'RO'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:30'
    }
  }
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(contactPageSchema) }}
      />
      {children}
    </>
  );
}
