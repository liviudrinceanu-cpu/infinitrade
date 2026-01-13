import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Politica Cookies | Infinitrade Romania',
  description: 'Informații despre utilizarea cookie-urilor pe site-ul Infinitrade Romania',
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Politica de Utilizare a Cookie-urilor</h1>
          <p className={styles.lastUpdated}>Ultima actualizare: Ianuarie 2026</p>

          <section>
            <h2>1. Ce sunt Cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe 
              dispozitivul dumneavoastră (computer, telefon mobil, tabletă) atunci când 
              vizitați un site web. Acestea permit site-ului să vă recunoască dispozitivul 
              și să rețină anumite informații despre vizita dumneavoastră.
            </p>
          </section>

          <section>
            <h2>2. Tipuri de Cookie-uri Utilizate</h2>
            
            <h3>2.1 Cookie-uri Strict Necesare</h3>
            <p>
              Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot 
              fi dezactivate. Includ cookie-uri pentru:
            </p>
            <ul>
              <li>Menținerea sesiunii de navigare</li>
              <li>Memorarea preferințelor de confidențialitate</li>
            </ul>

            <h3>2.2 Cookie-uri de Performanță</h3>
            <p>
              Aceste cookie-uri ne ajută să înțelegem cum este utilizat site-ul nostru, 
              permițându-ne să îl îmbunătățim. Colectează informații anonime despre:
            </p>
            <ul>
              <li>Paginile vizitate</li>
              <li>Timpul petrecut pe site</li>
              <li>Erorile întâmpinate</li>
            </ul>

            <h3>2.3 Cookie-uri Funcționale</h3>
            <p>
              Aceste cookie-uri permit site-ului să rețină alegerile dumneavoastră 
              (cum ar fi limba preferată) pentru a vă oferi o experiență personalizată.
            </p>
          </section>

          <section>
            <h2>3. Cookie-uri Terțe Părți</h2>
            <p>
              Site-ul nostru poate utiliza servicii de la terți care plasează propriile 
              cookie-uri. Acestea includ:
            </p>
            <ul>
              <li><strong>Google Analytics</strong> - pentru analiză statistică</li>
              <li><strong>Vercel Analytics</strong> - pentru monitorizarea performanței</li>
            </ul>
          </section>

          <section>
            <h2>4. Gestionarea Cookie-urilor</h2>
            <p>
              Puteți controla și/sau șterge cookie-urile după preferințe. Majoritatea 
              browserelor vă permit să:
            </p>
            <ul>
              <li>Vedeți ce cookie-uri sunt stocate și să le ștergeți individual</li>
              <li>Blocați cookie-urile de la terți</li>
              <li>Blocați cookie-urile de la anumite site-uri</li>
              <li>Blocați toate cookie-urile</li>
              <li>Ștergeți toate cookie-urile când închideți browserul</li>
            </ul>
            <p>
              <strong>Atenție:</strong> Dezactivarea cookie-urilor poate afecta 
              funcționalitatea site-ului.
            </p>
          </section>

          <section>
            <h2>5. Setări Browser</h2>
            <p>Pentru a gestiona cookie-urile, accesați setările browserului:</p>
            <ul>
              <li><strong>Chrome:</strong> Setări → Confidențialitate și securitate → Cookie-uri</li>
              <li><strong>Firefox:</strong> Opțiuni → Confidențialitate → Istoric</li>
              <li><strong>Safari:</strong> Preferințe → Confidențialitate</li>
              <li><strong>Edge:</strong> Setări → Confidențialitate → Cookie-uri</li>
            </ul>
          </section>

          <section>
            <h2>6. Modificări</h2>
            <p>
              Ne rezervăm dreptul de a modifica această politică de cookie-uri în orice 
              moment. Orice modificare va fi publicată pe această pagină.
            </p>
          </section>

          <section>
            <h2>7. Contact</h2>
            <p>
              Pentru întrebări despre utilizarea cookie-urilor, ne puteți contacta la:<br />
              Email: secretariat@infinitrade-romania.ro
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
