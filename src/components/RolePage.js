// v27: șablon comun pentru paginile de rol (/achizitii, /mentenanta, /proiecte).
// Server component: fără JavaScript pe client. Datele vin din src/data/roles.js.
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import { roleContact, roleList } from '@/data/roles';
import styles from './RolePage.module.css';

export function roleMetadata(role) {
  const url = `${config.site.url}/${role.slug}`;
  return {
    title: role.metaTitle,
    description: role.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${role.metaTitle} | Infinitrade Romania`,
      description: role.metaDescription,
      url,
      type: 'website',
    },
  };
}

function roleSchema(role) {
  const url = `${config.site.url}/${role.slug}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Acasă', item: config.site.url },
        { '@type': 'ListItem', position: 2, name: role.navLabel, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: role.h1,
      description: role.metaDescription,
      inLanguage: 'ro-RO',
      isPartOf: { '@id': `${config.site.url}/#website` },
      about: { '@id': `${config.site.url}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: role.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
}

export default function RolePage({ role }) {
  const others = roleList.filter((r) => r.slug !== role.slug);
  return (
    <>
      {roleSchema(role).map((schema) => (
        <script key={schema['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      ))}
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Breadcrumbs items={[]} currentPage={role.navLabel} variant="light" />
            <h1>{role.h1}</h1>
            <p className={styles.lead}>{role.lead}</p>
            <div className={styles.heroCtas}>
              <Link href={`/contact?rol=${role.rol}`} className={styles.ctaPrimary}>
                Solicitați ofertă
              </Link>
              <a href={roleContact.phoneHref} className={styles.ctaSecondary}>
                Sunați: {roleContact.phone}
              </a>
            </div>
          </div>
        </section>

        {role.facts && (
          <section className={styles.section}>
            <div className={styles.container}>
              <h2>Date de firmă verificabile</h2>
              <dl className={styles.facts}>
                {role.facts.map((f) => (
                  <div key={f.label} className={styles.fact}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              {role.verifyLinks && (
                <p className={styles.verify}>
                  Verificați independent:{' '}
                  {role.verifyLinks.map((l, i) => (
                    <span key={l.url}>
                      {i > 0 && ' · '}
                      <a href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a>
                    </span>
                  ))}
                </p>
              )}
            </div>
          </section>
        )}

        {role.sections.map((s) => (
          <section key={s.title} className={styles.section}>
            <div className={styles.container}>
              <h2>{s.title}</h2>
              {s.intro && <p className={styles.intro}>{s.intro}</p>}
              <ul className={styles.list}>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              {s.download && (
                <p className={styles.download}>
                  <a href={s.download.href} download>{s.download.label}</a>
                </p>
              )}
            </div>
          </section>
        ))}

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Întrebări frecvente</h2>
            <div className={styles.faq}>
              {role.faq.map((f) => (
                <div key={f.q} className={styles.faqItem}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>{role.ctaTitle}</h2>
              <p>{role.ctaText}</p>
              <div className={styles.heroCtas}>
                <Link href={`/contact?rol=${role.rol}`} className={styles.ctaPrimary}>
                  Deschideți formularul de cerere
                </Link>
                <a href={roleContact.phoneHref} className={styles.ctaSecondary}>
                  {roleContact.phone} ({roleContact.hours})
                </a>
              </div>
              {roleContact.person && (
                <p className={styles.person}>
                  Persoană de contact pentru companii: <strong>{roleContact.person.name}</strong>
                  {' · '}
                  <a href={`mailto:${roleContact.person.email}`}>{roleContact.person.email}</a>
                </p>
              )}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Vedeți și</h2>
            <ul className={styles.related}>
              {role.related.map((r) => (
                <li key={r.href}><Link href={r.href}>{r.label}</Link></li>
              ))}
              {others.map((r) => (
                <li key={r.slug}><Link href={`/${r.slug}`}>{r.navLabel}</Link></li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
