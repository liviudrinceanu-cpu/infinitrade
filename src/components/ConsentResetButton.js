'use client';

import { CONSENT_RESET_EVENT } from './AnalyticsConsent';

/** v53: pe Politica de cookies — redeschide alegerea pentru Google Analytics. */
export default function ConsentResetButton({ className }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(CONSENT_RESET_EVENT))}
    >
      Modificați acordul pentru cookie-urile de analiză
    </button>
  );
}
