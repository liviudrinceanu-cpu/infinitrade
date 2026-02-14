import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Termeni și Condiții',
  description: 'Termeni și condiții de utilizare a site-ului. Reguli privind comenzile, livrarea și garanția echipamentelor industriale.',
  alternates: {
    canonical: `${config.site.url}/termeni-si-conditii`,
  },
};

export default function TermeniPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Termeni și Condiții</h1>
          <p className={styles.lastUpdated}>Ultima actualizare: Ianuarie 2026</p>

          <section>
            <h2>1. Informații Generale</h2>
            <p>
              Prezentul document stabilește termenii și condițiile de utilizare a site-ului
              <strong> infinitrade.ro</strong>, operat de <strong>Driatheli Group SRL</strong>,
              cu sediul în Ghiroda, Calea Lugojului nr.47/B, Hala nr. 3, Județul Timiș, România,
              înregistrată la Registrul Comerțului sub nr. J35/2901/2009, CUI RO26209397.
            </p>
            <p>
              Brandul comercial utilizat este <strong>Infinitrade Romania</strong>.
            </p>
          </section>

          <section>
            <h2>2. Obiectul Activității</h2>
            <p>
              Infinitrade Romania este un distribuitor de echipamente industriale. Site-ul 
              nostru este unul de prezentare a produselor și serviciilor oferite, nu un 
              magazin online cu vânzare directă.
            </p>
            <p>
              Produsele prezentate pe site sunt oferite spre vânzare în urma solicitărilor 
              de ofertă trimise de clienți. Vânzările se realizează:
            </p>
            <ul>
              <li>Către persoane juridice (B2B) - cu contract comercial</li>
              <li>Către persoane fizice - cu plata prin transfer bancar și/sau contract</li>
            </ul>
          </section>

          <section>
            <h2>3. Prețuri și Ofertare</h2>
            <p>
              Prețurile produselor nu sunt afișate pe site. Pentru a obține o ofertă de preț, 
              vă rugăm să ne contactați prin formularul de contact sau la adresele de email 
              disponibile pe site.
            </p>
            <p>
              Ofertele de preț sunt valabile pentru perioada specificată în documentul de 
              ofertă și pot fi supuse modificărilor în funcție de condițiile pieței și 
              disponibilitatea produselor.
            </p>
          </section>

          <section>
            <h2>4. Livrare și Transport</h2>
            <p>
              Condițiile de livrare, termenele și costurile de transport sunt stabilite 
              individual pentru fiecare comandă și sunt comunicate în oferta de preț.
            </p>
          </section>

          <section>
            <h2>5. Garanție și Service</h2>
            <p>
              Produsele comercializate beneficiază de garanția producătorului. Detaliile 
              privind perioada și condițiile de garanție sunt specificate în documentele 
              care însoțesc produsele.
            </p>
          </section>

          <section>
            <h2>6. Proprietate Intelectuală</h2>
            <p>
              Conținutul site-ului (texte, imagini, logo-uri, grafice) este proprietatea 
              Driatheli Group SRL sau a partenerilor săi și este protejat de legislația 
              privind drepturile de autor.
            </p>
          </section>

          <section>
            <h2>7. Limitarea Răspunderii</h2>
            <p>
              Driatheli Group SRL nu își asumă răspunderea pentru eventualele erori sau 
              omisiuni în informațiile prezentate pe site. Imaginile produselor au caracter 
              informativ și pot diferi de produsele reale.
            </p>
          </section>

          <section>
            <h2>8. Modificări ale Termenilor</h2>
            <p>
              Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
              Modificările intră în vigoare la data publicării pe site.
            </p>
          </section>

          <section>
            <h2>9. Legea Aplicabilă</h2>
            <p>
              Acești termeni și condiții sunt guvernați de legislația română. Orice litigiu 
              va fi soluționat de instanțele competente din România.
            </p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>
              Pentru orice întrebări referitoare la acești termeni și condiții, ne puteți 
              contacta la:
            </p>
            <ul>
              <li>Email: secretariat@infinitrade-romania.ro</li>
              <li>Adresa: Calea Lugojului nr.47/B, Hala nr. 3, Ghiroda, Timiș</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
