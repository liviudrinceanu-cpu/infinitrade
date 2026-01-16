'use client';

import { Component } from 'react';
import Link from 'next/link';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error, { extra: errorInfo });
    } else {
      console.error('ErrorBoundary caught:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: '#f5f5f7'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center',
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 8px 40px rgba(35, 35, 59, 0.12)'
          }}>
            <AlertCircle size={48} style={{ color: '#ff2800', marginBottom: '20px' }} />
            <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px', color: '#23233b' }}>
              Ceva nu a mers bine
            </h1>
            <p style={{ color: '#6e6e73', marginBottom: '24px', lineHeight: 1.6 }}>
              Ne pare rău, a apărut o eroare neașteptată. Te rugăm să încerci din nou sau să revii mai târziu.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  background: '#0990db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '980px',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '16px'
                }}
              >
                <RefreshCw size={18} />
                Reîncearcă
              </button>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  background: 'transparent',
                  color: '#0990db',
                  border: '1.5px solid #0990db',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '16px'
                }}
              >
                <Home size={18} />
                Acasă
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
