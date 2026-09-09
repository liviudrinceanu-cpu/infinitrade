'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const btn = {
  display: 'inline-block',
  padding: '0.75rem 1.25rem',
  borderRadius: 8,
  fontWeight: 600,
  textDecoration: 'none',
  border: '1px solid #1a5276',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default function Error({ error, reset }) {
  useEffect(() => {
    // Surfaces in Vercel runtime logs; keep the digest so it can be correlated.
    console.error('[app/error]', error?.digest || '', error?.message || error);
  }, [error]);

  return (
    <main
      id="main-content"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
      }}
    >
      <div style={{ maxWidth: 560, textAlign: 'center' }}>
        <p style={{ fontSize: '4rem', fontWeight: 600, margin: 0, color: '#1a5276', lineHeight: 1 }}>500</p>
        <h1 style={{ fontSize: '1.5rem', margin: '0.75rem 0 1rem' }}>A apărut o eroare temporară</h1>
        <p style={{ color: '#636363', lineHeight: 1.6, margin: 0 }}>
          Ne pare rău. Poți reîncerca sau ne poți contacta direct la{' '}
          <a href="tel:+40371232404" style={{ color: '#1a5276', fontWeight: 600 }}>0371 232 404</a>.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => reset()} style={{ ...btn, background: '#1a5276', color: '#fff' }}>
            Reîncearcă
          </button>
          <Link href="/" style={{ ...btn, background: '#fff', color: '#1a5276' }}>Pagina principală</Link>
          <Link href="/contact" style={{ ...btn, background: '#fff', color: '#1a5276' }}>Contact</Link>
        </div>
      </div>
    </main>
  );
}
