'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import styles from './AnalyticsConsent.module.css';

const STORAGE_KEY = 'infinitrade-analytics-consent';
export const CONSENT_RESET_EVENT = 'infinitrade:consent-reset';

function readConsent() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value) {
  try {
    if (value) window.localStorage.setItem(STORAGE_KEY, value);
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // stocare indisponibilă (navigare privată): alegerea ține doar pe pagina curentă
  }
}

// La refuz sau la retragerea acordului ștergem cookie-urile GA puse anterior
// (_ga, _ga_<ID>, _gid), pe domeniul curent și pe domeniul părinte.
function clearGaCookies() {
  try {
    const host = window.location.hostname;
    const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`];
    for (const part of document.cookie.split(';')) {
      const name = part.split('=')[0].trim();
      if (!/^(_ga|_gid|_gat)/.test(name)) continue;
      for (const d of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`;
      }
    }
  } catch {
    // fără acces la cookie-uri: nimic de șters
  }
}

/**
 * v53: Google Analytics se încarcă DOAR după acordul vizitatorului (cookie-uri
 * de analiză). Fără `gaId` configurat, componenta nu afișează nimic. Vercel Web
 * Analytics nu folosește cookie-uri și nu depinde de acest acord.
 */
export default function AnalyticsConsent({ gaId }) {
  const [consent, setConsent] = useState(null); // null = încă necitit
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
    const onReset = () => {
      clearGaCookies();
      writeConsent(null);
      setConsent(null);
    };
    window.addEventListener(CONSENT_RESET_EVENT, onReset);
    return () => window.removeEventListener(CONSENT_RESET_EVENT, onReset);
  }, []);

  if (!gaId || !ready) return null;

  const choose = (value) => {
    if (value === 'denied') clearGaCookies();
    writeConsent(value);
    setConsent(value);
  };

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}
      {consent !== 'granted' && consent !== 'denied' && (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Acord pentru cookie-uri de analiză">
          <p className={styles.text}>
            Folosim Google Analytics, cu cookie-uri, ca să vedem ce pagini sunt utile. Îl pornim doar cu acordul
            dumneavoastră. Detalii în <Link href="/politica-cookies">Politica de cookies</Link>.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.secondary} onClick={() => choose('denied')}>
              Refuz
            </button>
            <button type="button" className={styles.primary} onClick={() => choose('granted')}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
