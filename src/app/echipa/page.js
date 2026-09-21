'use client';

import { authors } from '@/data/authors';
import { config } from '@/lib/config';
import { safeJsonLd } from '@/lib/utils';
import styles from './echipa.module.css';
import Link from 'next/link';
import Script from 'next/script';
import { siteStats } from '@/data/siteStats';
import { companyInfo } from '@/data/products';

// Generează culori consistente pentru avatare bazat pe nume
function getAvatarColor(name) {
  const colors = [
    '#1a5f7a', // albastru închis
    '#2d6a4f', // verde închis
    '#7c3aed', // violet
    '#c2410c', // portocaliu închis
    '#0891b2', // cyan
    '#4338ca', // indigo
    '#b91c1c', // roșu închis
    '#0d9488', // teal
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function EchipaPage() {
  // Filtrăm echipa tehnică generică, afișăm doar persoanele reale
  const teamMembers = authors.filter(a => a.id !== 'echipa-tehnica');

  // Generate Person JSON-LD for each team member (E-E-A-T enhancement)
  const generatePersonSchema = (member) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${config.site.url}/echipa#${member.id}`,
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    knowsAbout: member.expertise || [],
    worksFor: {
      '@type': 'Organization',
      name: 'Infinitrade Romania',
      url: config.site.url,
    },
    hasCredential: (member.certifications || []).map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: cert,
    })),
  });

  const teamSchemas = teamMembers.map(generatePersonSchema);

  return (
    <>
      {/* E-E-A-T: Person structured data for all team members - JSON is safe from static data */}
      {teamSchemas.map((schema, index) => (
        <Script
          key={index}
          id={`person-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
          strategy="beforeInteractive"
        />
      ))}
      <main id="main-content" className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Acasă</Link>
            <span>/</span>
            <span>Echipa</span>
          </nav>
          <h1>Echipa Noastră</h1>
          <p className={styles.heroDescription}>
            Nu suntem o corporație cu departamente anonime. Suntem o echipă de ingineri
            care chiar înțeleg ce vindem. Când suni pentru consultanță, vorbești cu
            oameni care au fost pe șantiere, au dimensionat instalații și au văzut
            ce funcționează în condiții reale.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <h2>De Ce Contează Cine Îți Vinde</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🎯</div>
              <h3>Consultanță Reală</h3>
              <p>
                Nu citim din catalog - dimensionăm pe baza experienței. Știm ce merge
                în petrochimie, ce rezistă în alimentar, ce suportă în minerit.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🔧</div>
              <h3>Suport Post-Vânzare</h3>
              <p>
                Când ai o problemă, vorbești cu aceiași oameni care ți-au recomandat
                echipamentul. Nu cu un call center care nu știe ce ai cumpărat.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📚</div>
              <h3>Expertiză Certificată</h3>
              <p>
                Echipa noastră are certificări de la Grundfos, Siemens, ABB, Alfa Laval
                și alți producători. Nu vindem ce nu cunoaștem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2>Cunoaște Echipa</h2>
          <p className={styles.teamIntro}>
            Aceștia sunt oamenii cu care vei interacționa. Fiecare are specialitatea
            lui și poate răspunde la întrebări tehnice concrete.
          </p>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <article key={member.id} className={styles.memberCard}>
                <div
                  className={styles.avatar}
                  style={{ backgroundColor: getAvatarColor(member.name) }}
                >
                  {getInitials(member.name)}
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <p className={styles.experience}>{member.experience} experiență</p>
                  <p className={styles.bio}>{member.bio}</p>

                  {member.certifications && member.certifications.length > 0 && (
                    <div className={styles.certifications}>
                      <strong>Certificări:</strong>
                      <ul>
                        {member.certifications.map((cert, idx) => (
                          <li key={idx}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.expertise && member.expertise.length > 0 && (
                    <div className={styles.expertise}>
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{siteStats.years}</span>
              <span className={styles.statLabel}>Ani de activitate Infinitrade</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{companyInfo.industries.length}</span>
              <span className={styles.statLabel}>Industrii acoperite</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{siteStats.brands}</span>
              <span className={styles.statLabel}>Branduri cu pagină proprie</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ai Întrebări Tehnice?</h2>
          <p>
            Nu trebuie să știi exact ce ai nevoie. Spune-ne problema și găsim împreună soluția.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryBtn}>
              Contactează-ne
            </Link>
            <a href="tel:+40371232404" className={styles.secondaryBtn}>
              📞 +40 371 232 404
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
