import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Search, Phone, ArrowRight } from 'lucide-react';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Pagina nu a fost gasita | 404',
  description: 'Pagina cautata nu exista. Descopera gama completa de echipamente industriale Infinitrade Romania.',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.errorCode}>404</span>
            <h1 className={styles.title}>Pagina nu a fost gasita</h1>
            <p className={styles.description}>
              Ne pare rau, pagina pe care o cauti nu exista sau a fost mutata.
              Te invitam sa explorezi gama noastra de echipamente industriale.
            </p>

            <div className={styles.suggestions}>
              <h2>Ce poti face:</h2>
              <div className={styles.linksGrid}>
                <Link href="/" className={styles.linkCard}>
                  <Home size={24} />
                  <div>
                    <h3>Pagina principala</h3>
                    <p>Exploreaza toate categoriile de produse</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>

                <Link href="/pompe-industriale" className={styles.linkCard}>
                  <Search size={24} />
                  <div>
                    <h3>Pompe Industriale</h3>
                    <p>Grundfos, Wilo, KSB si altele</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>

                <Link href="/robineti-industriali" className={styles.linkCard}>
                  <Search size={24} />
                  <div>
                    <h3>Robineti Industriali</h3>
                    <p>ARI Armaturen, Spirax Sarco</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>

                <Link href="/contact" className={styles.linkCard}>
                  <Phone size={24} />
                  <div>
                    <h3>Contacteaza-ne</h3>
                    <p>Echipa noastra te poate ajuta</p>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className={styles.categories}>
              <h2>Categorii populare:</h2>
              <div className={styles.categoryLinks}>
                <Link href="/pompe-industriale">Pompe Industriale</Link>
                <Link href="/robineti-industriali">Robineti Industriali</Link>
                <Link href="/motoare-electrice">Motoare Electrice</Link>
                <Link href="/schimbatoare-caldura">Schimbatoare Caldura</Link>
                <Link href="/suflante-ventilatoare">Suflante si Ventilatoare</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
