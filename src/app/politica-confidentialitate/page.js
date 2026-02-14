import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { config } from '@/lib/config';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Politica de Confidențialitate',
  description: 'Politica de confidențialitate și protecția datelor personale. Informații despre prelucrarea datelor conform GDPR.',
  alternates: {
    canonical: `${config.site.url}/politica-confidentialitate`,
  },
};

export default function ConfidentialitatePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Politica de Confidențialitate</h1>
          <p className={styles.lastUpdated}>Ultima actualizare: Ianuarie 2026</p>

          <section>
            <h2>1. Introducere</h2>
            <p>
              <strong>Driatheli Group SRL</strong> (operator al brandului Infinitrade Romania) 
              se angajează să protejeze confidențialitatea datelor dumneavoastră personale. 
              Această politică descrie modul în care colectăm, folosim și protejăm informațiile 
              pe care ni le furnizați.
            </p>
          </section>

          <section>
            <h2>2. Operatorul de Date</h2>
            <p>
              Operatorul de date cu caracter personal este:<br />
              <strong>Driatheli Group SRL</strong><br />
              Adresa: Calea Lugojului nr.47/B, Hala nr. 3, Ghiroda, Timiș, România<br />
              Email: secretariat@infinitrade-romania.ro
            </p>
          </section>

          <section>
            <h2>3. Date Personale Colectate</h2>
            <p>Colectăm următoarele categorii de date personale:</p>
            <ul>
              <li><strong>Date de identificare:</strong> nume, prenume, funcție</li>
              <li><strong>Date de contact:</strong> adresă email, număr de telefon, adresă poștală</li>
              <li><strong>Date ale companiei:</strong> denumire societate, CUI, nr. registrul comerțului</li>
              <li><strong>Date tehnice:</strong> adresă IP, tip browser, date de navigare</li>
            </ul>
          </section>

          <section>
            <h2>4. Scopul Prelucrării</h2>
            <p>Datele dumneavoastră sunt prelucrate pentru:</p>
            <ul>
              <li>Răspunderea la solicitările de ofertă</li>
              <li>Întocmirea documentelor comerciale (oferte, facturi, contracte)</li>
              <li>Comunicarea privind produsele și serviciile noastre</li>
              <li>Îmbunătățirea serviciilor oferite</li>
              <li>Respectarea obligațiilor legale</li>
            </ul>
          </section>

          <section>
            <h2>5. Temeiul Legal</h2>
            <p>Prelucrarea datelor se realizează în baza:</p>
            <ul>
              <li>Consimțământului dumneavoastră (Art. 6(1)(a) GDPR)</li>
              <li>Executării unui contract (Art. 6(1)(b) GDPR)</li>
              <li>Interesului legitim (Art. 6(1)(f) GDPR)</li>
              <li>Obligațiilor legale (Art. 6(1)(c) GDPR)</li>
            </ul>
          </section>

          <section>
            <h2>6. Perioada de Stocare</h2>
            <p>
              Datele personale sunt păstrate pe perioada necesară îndeplinirii scopurilor 
              pentru care au fost colectate, precum și pentru respectarea obligațiilor legale 
              (de exemplu, documente contabile - 10 ani).
            </p>
          </section>

          <section>
            <h2>7. Drepturile Dumneavoastră</h2>
            <p>Conform GDPR, aveți următoarele drepturi:</p>
            <ul>
              <li><strong>Dreptul de acces</strong> - să obțineți confirmarea prelucrării datelor</li>
              <li><strong>Dreptul la rectificare</strong> - să corectați datele inexacte</li>
              <li><strong>Dreptul la ștergere</strong> - să solicitați ștergerea datelor</li>
              <li><strong>Dreptul la restricționare</strong> - să limitați prelucrarea</li>
              <li><strong>Dreptul la portabilitate</strong> - să primiți datele în format structurat</li>
              <li><strong>Dreptul la opoziție</strong> - să vă opuneți prelucrării</li>
              <li><strong>Dreptul de a depune plângere</strong> - la ANSPDCP</li>
            </ul>
          </section>

          <section>
            <h2>8. Securitatea Datelor</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea 
              datelor personale împotriva accesului neautorizat, pierderii sau distrugerii.
            </p>
          </section>

          <section>
            <h2>9. Transferul Datelor</h2>
            <p>
              Nu transferăm datele dumneavoastră personale către terți, cu excepția 
              situațiilor în care acest lucru este necesar pentru furnizarea serviciilor 
              solicitate sau când legea o impune.
            </p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>
              Pentru exercitarea drepturilor sau întrebări privind protecția datelor, 
              ne puteți contacta la:<br />
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
