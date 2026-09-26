import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';
import styles from '../legal.module.css';

export const metadata = {
  title: 'GDPR - Protecția Datelor',
  description: 'Informații GDPR și drepturile dumneavoastră conform Regulamentului (UE) 2016/679 privind protecția datelor personale.',
  alternates: {
    canonical: `${config.site.url}/gdpr`,
  },
  openGraph: {
    title: 'GDPR - Protecția Datelor | Infinitrade Romania',
    description: 'Informații GDPR și drepturile dumneavoastră conform Regulamentului (UE) 2016/679 privind protecția datelor personale.',
    url: `${config.site.url}/gdpr`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function GDPRPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <div className={styles.container}>
          <h1>GDPR - Protecția Datelor Personale</h1>
          <p className={styles.lastUpdated}>Ultima actualizare: Ianuarie 2026</p>

          <section>
            <h2>Angajamentul Nostru</h2>
            <p>
              <strong>Driatheli Group SRL</strong>, operator al brandului Infinitrade Romania, 
              se angajează să respecte prevederile Regulamentului (UE) 2016/679 privind 
              protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu 
              caracter personal și privind libera circulație a acestor date (GDPR).
            </p>
          </section>

          <section>
            <h2>Drepturile Dumneavoastră conform GDPR</h2>
            
            <div className={styles.rightCard}>
              <h3>📋 Dreptul de Acces (Art. 15)</h3>
              <p>
                Aveți dreptul de a obține confirmarea prelucrării datelor dumneavoastră 
                și de a accesa o copie a acestora, precum și informații despre scopul 
                prelucrării și categoriile de date prelucrate.
              </p>
            </div>

            <div className={styles.rightCard}>
              <h3>✏️ Dreptul la Rectificare (Art. 16)</h3>
              <p>
                Aveți dreptul de a solicita rectificarea datelor inexacte sau completarea 
                datelor incomplete care vă privesc.
              </p>
            </div>

            <div className={styles.rightCard}>
              <h3>🗑️ Dreptul la Ștergere (Art. 17)</h3>
              <p>
                Aveți dreptul de a solicita ștergerea datelor personale ("dreptul de a fi uitat"), 
                în anumite condiții prevăzute de lege.
              </p>
            </div>

            <div className={styles.rightCard}>
              <h3>⏸️ Dreptul la Restricționare (Art. 18)</h3>
              <p>
                Aveți dreptul de a solicita restricționarea prelucrării în cazurile 
                prevăzute de regulament.
              </p>
            </div>

            <div className={styles.rightCard}>
              <h3>📦 Dreptul la Portabilitate (Art. 20)</h3>
              <p>
                Aveți dreptul de a primi datele personale într-un format structurat, 
                utilizat în mod curent și care poate fi citit automat.
              </p>
            </div>

            <div className={styles.rightCard}>
              <h3>✋ Dreptul la Opoziție (Art. 21)</h3>
              <p>
                Aveți dreptul de a vă opune prelucrării datelor personale în scopuri 
                de marketing direct sau pe baza interesului legitim.
              </p>
            </div>

            <div className={styles.rightCard}>
              <h3>⚖️ Dreptul de a Depune Plângere</h3>
              <p>
                Aveți dreptul de a depune plângere la Autoritatea Națională de Supraveghere 
                a Prelucrării Datelor cu Caracter Personal (ANSPDCP):<br />
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
                  www.dataprotection.ro
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2>Cum să Vă Exercitați Drepturile</h2>
            <p>
              Pentru a vă exercita oricare dintre drepturile de mai sus, vă rugăm să ne 
              contactați prin una din următoarele modalități:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> secretariat@infinitrade-romania.ro
              </li>
              <li>
                <strong>Adresă poștală:</strong> Driatheli Group SRL, Calea Lugojului nr.47/B, 
                Hala nr. 3, Ghiroda, Timiș, România
              </li>
            </ul>
            <p>
              Vom răspunde cererii dumneavoastră în termen de maximum 30 de zile de la 
              primirea acesteia.
            </p>
          </section>

          <section>
            <h2>Măsuri de Securitate</h2>
            <p>
              Am implementat măsuri tehnice și organizatorice adecvate pentru a asigura 
              un nivel de securitate corespunzător riscurilor, inclusiv:
            </p>
            <ul>
              <li>Criptarea conexiunii (HTTPS/SSL)</li>
              <li>Acces restricționat la datele personale</li>
              <li>Backup regulat al datelor</li>
              <li>Instruirea personalului privind protecția datelor</li>
            </ul>
          </section>

          <section>
            <h2>Responsabil Protecția Datelor</h2>
            <p>
              Pentru orice întrebări sau solicitări privind protecția datelor personale, 
              vă rugăm să ne contactați:<br /><br />
              <strong>Driatheli Group SRL</strong><br />
              Email: secretariat@infinitrade-romania.ro<br />
              Adresa: Calea Lugojului nr.47/B, Hala nr. 3, Ghiroda, Timiș
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
