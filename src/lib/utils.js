import DOMPurify from 'isomorphic-dompurify';

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

// Sanitize HTML using DOMPurify (secure against XSS)
export function sanitizeHtml(html) {
  if (typeof html !== 'string') return '';

  // Configure DOMPurify to allow safe HTML for emails
  const config = {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'br', 'p', 'ul', 'ol', 'li', 'span'],
    ALLOWED_ATTR: ['href', 'class'],
    ALLOW_DATA_ATTR: false,
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'style'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur'],
  };

  return DOMPurify.sanitize(html, config);
}

// Sanitize HTML for content rendering (blog, case studies, etc.)
// Allows more tags but still prevents XSS
export function sanitizeContentHtml(html) {
  if (typeof html !== 'string') return '';

  const config = {
    ALLOWED_TAGS: [
      'b', 'i', 'em', 'strong', 'a', 'br', 'p', 'ul', 'ol', 'li', 'span',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'sup', 'sub', 'mark'
    ],
    ALLOWED_ATTR: ['href', 'class', 'id', 'target', 'rel'],
    ALLOW_DATA_ATTR: false,
    ADD_ATTR: ['target'], // Allow target attribute
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'style', 'svg', 'math'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onsubmit', 'onchange'],
  };

  return DOMPurify.sanitize(html, config);
}

// Sanitize plain text (strip all HTML)
export function sanitizeText(text) {
  if (typeof text !== 'string') return '';
  return DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });
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
