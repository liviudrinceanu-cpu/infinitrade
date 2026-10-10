'use client';

import { useState } from 'react';
import styles from './ClickToLoadMap.module.css';

/**
 * v53: harta Google se încarcă doar la clic. Iframe-ul Google Maps poate seta
 * cookie-uri și trimite adresa IP către Google; până la clic pagina nu face
 * nicio cerere către Google.
 */
export default function ClickToLoadMap({ src, title }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className={styles.iframe}
      />
    );
  }

  return (
    <div className={styles.placeholder}>
      <button type="button" className={styles.button} onClick={() => setLoaded(true)}>
        Afișați harta
      </button>
      <p className={styles.note}>
        Harta e furnizată de Google Maps; la afișare, Google poate seta cookie-uri.
      </p>
    </div>
  );
}
