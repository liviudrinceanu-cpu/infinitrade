import sanitizeHtmlLib from 'sanitize-html';

// Server-side HTML sanitisation (sanitize-html: htmlparser2-based, no jsdom).
// Keep this module out of client components - import it only from server
// components / route handlers.

// Sanitize HTML for emails - a small, safe tag set.
export function sanitizeHtml(html) {
  if (typeof html !== 'string') return '';
  return sanitizeHtmlLib(html, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'br', 'p', 'ul', 'ol', 'li', 'span'],
    allowedAttributes: { a: ['href'], span: ['class'], p: ['class'] },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    disallowedTagsMode: 'discard',
  });
}

// Sanitize HTML for content rendering (blog, case studies, etc.)
// Allows more tags but still prevents XSS.
export function sanitizeContentHtml(html) {
  if (typeof html !== 'string') return '';
  return sanitizeHtmlLib(html, {
    allowedTags: [
      'b', 'i', 'em', 'strong', 'a', 'br', 'p', 'ul', 'ol', 'li', 'span',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'sup', 'sub', 'mark',
    ],
    allowedAttributes: {
      '*': ['class', 'id'],
      a: ['href', 'target', 'rel'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    disallowedTagsMode: 'discard',
    // Keep external links safe when target=_blank is present.
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: attribs.target === '_blank'
          ? { ...attribs, rel: 'noopener noreferrer' }
          : attribs,
      }),
    },
  });
}
