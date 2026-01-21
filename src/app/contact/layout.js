export const metadata = {
  title: 'Contact | Solicită Ofertă',
  description: 'Contactează-ne pentru oferte echipamente industriale. Pompe, robineți, motoare. Răspuns în 24h, consultanță gratuită. Tel: 0371 232 404',
  keywords: 'contact infinitrade, oferta pompe, oferta robineti, echipamente industriale romania, distribuitor autorizat',
  alternates: {
    canonical: 'https://infinitrade.ro/contact',
  },
  openGraph: {
    title: 'Contact Infinitrade Romania | Solicită Ofertă',
    description: 'Contactează-ne pentru oferte echipamente industriale. Răspuns în 24h.',
    url: 'https://infinitrade.ro/contact',
    type: 'website',
  },
};

// ContactPage JSON-LD schema
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://infinitrade.ro/contact#webpage',
  name: 'Contact Infinitrade Romania',
  description: 'Contactează Infinitrade Romania pentru oferte personalizate echipamente industriale.',
  url: 'https://infinitrade.ro/contact',
  isPartOf: {
    '@id': 'https://infinitrade.ro/#website'
  },
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://infinitrade.ro/#organization',
    name: 'Infinitrade Romania',
    logo: 'https://infinitrade.ro/logo-header.png',
    image: 'https://infinitrade.ro/logo-header.png',
    telephone: '+40-371-232-404',
    email: 'vanzari@infinitrade.ro',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
