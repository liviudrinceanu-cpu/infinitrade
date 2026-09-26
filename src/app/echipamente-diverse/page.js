import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { equipmentCategories as rawEquipmentCategories } from '@/data/equipmentCategories';
import { allCategoriesUnified } from '@/data/allBrandsIndex';

// v14: render the merged categories (extension + secondary memberships), so a
// category fed only by the extension shows its real brands and count.
const equipmentCategories = rawEquipmentCategories.map((c) => allCategoriesUnified.find((u) => u.slug === c.slug) || c);
// v20: distinct brands across the merged categories (the old equipmentBrandsTotal
// counted only the hand-typed lists).
const equipmentBrandsTotal = new Set(
  equipmentCategories.flatMap((c) => c.brands.map((b) => String(b.name).toLowerCase()))
).size;
import { config } from '@/lib/config';
import styles from './echipamente.module.css';

export const metadata = {
  openGraph: {
    title: 'Echipamente Industriale Diverse | Infinitrade Romania',
    description: 'Catalog de echipamente industriale pe categorii: automatizări, senzori, hidraulică, echipamente electrice, componente mecanice, filtre, scule. Furnizor SEAP.',
    url: `${config.site.url}/echipamente-diverse`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
  title: 'Echipamente Industriale Diverse',
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
              Catalog complet de echipamente industriale: automatizări, senzori, componente hidraulice și pneumatice,
              echipamente electrice, mecanice, filtre și multe altele. {equipmentBrandsTotal} branduri internaționale.
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
                    <span className={styles.categoryBrandCount}>{category.brands.length} branduri</span>
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
