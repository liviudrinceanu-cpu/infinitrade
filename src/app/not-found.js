import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Search, Phone, ArrowRight } from 'lucide-react';
import styles from './not-found.module.css';

export const metadata = {
  title: { absolute: 'Pagina nu a fost găsită (404) | Infinitrade Romania' },
  description: 'Pagina căutată nu există. Descoperiți gama completă de echipamente industriale Infinitrade Romania.',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.errorCode}>404</span>
            <h1 className={styles.title}>Pagina nu a fost găsită</h1>
            <p className={styles.description}>
              Ne pare rău, pagina pe care o căutați nu există sau a fost mutată.
              Vă invităm să explorați gama noastră de echipamente industriale.
            </p>

            <div className={styles.suggestions}>
              <h2>Ce puteți face:</h2>
              <div className={styles.linksGrid}>
                <Link href="/" className={styles.linkCard}>
                  <Home size={24} />
                  <div>
                    <h3>Pagina principală</h3>
                    <p>Explorați toate categoriile de produse</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>

                <Link href="/pompe-industriale" className={styles.linkCard}>
                  <Search size={24} />
                  <div>
                    <h3>Pompe Industriale</h3>
                    <p>Grundfos, Wilo, KSB și altele</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>

                <Link href="/robineti-industriali" className={styles.linkCard}>
                  <Search size={24} />
                  <div>
                    <h3>Robineți Industriali</h3>
                    <p>ARI Armaturen, Spirax Sarco</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>

                <Link href="/contact" className={styles.linkCard}>
                  <Phone size={24} />
                  <div>
                    <h3>Contactați-ne</h3>
                    <p>Echipa noastră vă poate ajuta</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className={styles.categories}>
              <h2>Categorii populare:</h2>
              <div className={styles.categoryLinks}>
                <Link href="/pompe-industriale">Pompe Industriale</Link>
                <Link href="/robineti-industriali">Robineți Industriali</Link>
                <Link href="/motoare-electrice">Motoare Electrice</Link>
                <Link href="/schimbatoare-caldura">Schimbătoare Căldură</Link>
                <Link href="/suflante-ventilatoare">Suflante și Ventilatoare</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
