// Pure, environment-agnostic helpers.
//
// IMPORTANT: this module is imported by client components (Header.js), so it must
// never pull in server-only or DOM-emulating dependencies. HTML sanitisation lives
// in '@/lib/sanitize' (server-side, sanitize-html) for exactly that reason - the
// previous isomorphic-dompurify import here loaded jsdom on every server render and
// crashed the not-found path (and ISR revalidation) on Vercel with ERR_REQUIRE_ESM.

// Debounce function
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Strip all HTML tags and decode nothing - plain text only.
export function sanitizeText(text) {
  if (typeof text !== 'string') return '';
  return text.replace(/<[^>]*>/g, '').replace(/[<>]/g, '');
}

// Safe JSON-LD serialization (prevents XSS in structured data)
export function safeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}

// Format phone number
export function formatPhone(phone) {
  if (!phone) return '';
  return phone.replace(/\D/g, '').replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
}

// Error logger (only in development)
export function logError(error, context = '') {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context}]`, error);
  }
  // In production, send to error tracking service
  // Example: Sentry.captureException(error, { tags: { context } });
}
