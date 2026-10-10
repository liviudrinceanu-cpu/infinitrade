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
  openGraph: {
    title: 'Politica de Confidențialitate | Infinitrade Romania',
    description: 'Politica de confidențialitate și protecția datelor personale. Informații despre prelucrarea datelor conform GDPR.',
    url: `${config.site.url}/politica-confidentialitate`,
    siteName: 'Infinitrade Romania',
    locale: 'ro_RO',
    type: 'website',
  },
};

export default function ConfidentialitatePage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <div className={styles.container}>
          <h1>Politica de Confidențialitate</h1>
          <p className={styles.lastUpdated}>Ultima actualizare: Octombrie 2026</p>

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
            <p>
              Prin formularul de cerere de ofertă colectăm: numele, adresa de e-mail, telefonul și
              compania (opțional), rolul dumneavoastră (opțional), categoriile de interes, mesajul,
              produsele adăugate în coșul de cereri și, dacă alegeți, un fișier atașat (listă de repere,
              document sau fotografia plăcuței echipamentului). Vă rugăm să nu includeți în mesaj sau în
              atașament date personale care nu sunt necesare pentru ofertă.
            </p>
          </section>

          <section>
            <h2>4. Scopul Prelucrării</h2>
            <p>Datele dumneavoastră sunt prelucrate pentru:</p>
            <ul>
              <li>Răspunderea la solicitările de ofertă</li>
              <li>Întocmirea documentelor comerciale (oferte, facturi, contracte)</li>
              <li>Comunicarea privind produsele și serviciile noastre</li>
              <li>Îmbunătățirea serviciilor oferite</li>
              <li>Analiza automată a cererilor de ofertă, pentru a stabili ordinea și persoana care vă răspunde (vezi secțiunea 9)</li>
              <li>Prevenirea trimiterilor automate abuzive (spam) prin formular</li>
              <li>Respectarea obligațiilor legale</li>
            </ul>
          </section>

          <section>
            <h2>5. Temeiul Legal</h2>
            <p>Prelucrarea datelor se realizează în baza:</p>
            <ul>
              <li><strong>Cererea de ofertă</strong> și comunicarea legată de ea: demersuri făcute la cererea dumneavoastră înainte de încheierea unui contract și executarea contractului (Art. 6(1)(b) GDPR)</li>
              <li><strong>Analiza automată a cererii, statisticile de vizitare și protecția anti-spam</strong>: interesul nostru legitim de a răspunde rapid și de a ne proteja site-ul (Art. 6(1)(f) GDPR)</li>
              <li><strong>Documentele contabile</strong>: obligația legală (Art. 6(1)(c) GDPR)</li>
              <li><strong>Cookie-urile de analiză (Google Analytics) și comunicările comerciale</strong>, dacă le folosim: consimțământul dumneavoastră (Art. 6(1)(a) GDPR), pe care îl puteți retrage oricând</li>
            </ul>
          </section>

          <section>
            <h2>6. Perioada de Stocare</h2>
            <p>
              Cererile de ofertă se păstrează în sistemul nostru timp de 3 ani de la ultima comunicare,
              apoi se șterg, cu excepția celor care au devenit comenzi: pentru acestea, documentele
              contabile se păstrează 10 ani, conform legii. Adresele IP folosite pentru protecția
              anti-spam se păstrează cel mult 15 minute. Furnizorul de analiză automată a cererilor
              șterge datele primite în cel mult 30 de zile.
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
            <h2>9. Cui transmitem datele</h2>
            <p>
              Datele dumneavoastră sunt accesate de echipa de vânzări Infinitrade. Pentru funcționarea
              site-ului și a formularului folosim următorii furnizori, care prelucrează datele doar în
              numele nostru, pe baza unui contract de prelucrare a datelor:
            </p>
            <ul>
              <li><strong>Vercel Inc.</strong> (SUA) — găzduirea site-ului și statistici de vizitare agregate, fără cookie-uri terțe;</li>
              <li><strong>Supabase</strong> (Supabase Pte. Ltd. și Supabase, Inc.) — baza de date în care se salvează cererile de ofertă;</li>
              <li><strong>Plus Five Five, Inc. („Resend”)</strong> (SUA) — trimiterea cererii pe e-mail către echipa noastră;</li>
              <li><strong>Anthropic, PBC</strong> (SUA) — analiza automată a cererii (rezumat, produse identificate, prioritate). Rezultatul e folosit doar intern, pentru ordinea în care răspundem; nu se iau decizii automate cu efecte juridice asupra dumneavoastră. Datele nu sunt folosite pentru antrenarea modelelor;</li>
              <li><strong>Upstash, Inc.</strong> (SUA) — limitarea numărului de trimiteri pe adresă IP (protecție anti-spam);</li>
              <li><strong>Google LLC</strong> (SUA) — harta de pe pagina de contact, încărcată doar când apăsați „Afișați harta”, și Google Analytics, doar dacă vă exprimați acordul.</li>
            </ul>
            <p>
              Nu vindem datele și nu le transmitem în scop de publicitate. Le putem comunica autorităților
              doar când legea o cere.
            </p>
            <p>
              <strong>Transferuri în afara Spațiului Economic European.</strong> Unii dintre acești
              furnizori prelucrează datele în afara SEE (în special în Statele Unite). Transferurile se fac
              pe baza Cadrului UE–SUA privind protecția datelor (Data Privacy Framework), pentru furnizorii
              certificați (Vercel, Resend, Upstash, Google), și a clauzelor contractuale standard aprobate
              de Comisia Europeană, incluse în contractele de prelucrare (Supabase, Anthropic și, suplimentar,
              ceilalți furnizori). Ne puteți cere informații despre aceste garanții la adresa de mai jos.
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
