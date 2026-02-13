import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { equipmentCategories } from '@/data/equipmentCategories';
import { config } from '@/lib/config';
import styles from './echipamente.module.css';

export const metadata = {
  title: 'Echipamente Industriale Diverse | Catalog 2026',
  description: 'Catalog complet echipamente industriale: automatizări, senzori, hidraulice, electrice, mecanice, filtre, scule, termice, lubrifianți. Furnizor SEAP.',
  keywords: [
    'echipamente industriale Romania',
    'automatizari industriale',
    'senzori industriali',
    'componente hidraulice',
    'echipamente electrice',
    'filtre industriale',
    'scule profesionale',
    'furnizor SEAP echipamente',
  ],
  alternates: {
    canonical: `${config.site.url}/echipamente-diverse`,
  },
};

export default function EchipamenteDiversePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className={styles.breadcrumbWrapper}>
          <div className={styles.container}>
            <Breadcrumbs items={[]} currentPage="Echipamente Diverse" />
          </div>
        </div>

        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>Echipamente Industriale</h1>
            <p className={styles.heroDescription}>
              Catalog complet de echipamente industriale: automatizari, senzori, componente hidraulice si pneumatice,
              echipamente electrice, mecanice, filtre si multe altele. Peste 130 de branduri internationale.
            </p>
          </div>
        </section>

        <section className={styles.categoriesSection}>
          <div className={styles.container}>
            <div className={styles.categoriesGrid}>
              {equipmentCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className={styles.categoryCard}
                >
                  <div className={styles.categoryCardHeader} style={{ background: category.gradient }}>
                    <h2 className={styles.categoryName}>{category.name}</h2>
                    <span className={styles.categoryBrandCount}>{category.stats.brands} branduri</span>
                  </div>
                  <div className={styles.categoryCardBody}>
                    <p className={styles.categoryDescription}>{category.tagline}</p>
                    <div className={styles.categoryBrands}>
                      {category.brands.filter(b => b.featured).slice(0, 3).map(brand => (
                        <span key={brand.slug} className={styles.brandTag}>{brand.name}</span>
                      ))}
                    </div>
                    <span className={styles.viewMore}>
                      Vezi toate produsele &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
