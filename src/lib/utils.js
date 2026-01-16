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

// Sanitize HTML
export function sanitizeHtml(html) {
  if (typeof html !== 'string') return '';
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '');
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
