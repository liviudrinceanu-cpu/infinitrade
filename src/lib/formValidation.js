// v33 (28.09.2026, cerința proprietarului): o singură sursă pentru validarea
// formularelor. Același cod rulează în pagină (/contact, formularul de pe
// paginile de categorie, /admin/echipa) și pe server (/api/contact,
// /api/admin/users), deci pagina nu poate accepta ce refuză serverul.
// Fără dependențe: se importă și din componente client, și din rute API.
// Mesajele sunt în română și spun ce trebuie corectat.

// Exemplele din câmpuri trebuie să treacă validarea exact cum sunt scrise
// (testat în scripts/test-form-validation.mjs). Numărul de telefon este un
// exemplu fictiv, nu al unei persoane reale.
export const PLACEHOLDERS = {
  name: 'Ion Popescu',
  email: 'nume@firma.ro',
  phone: '0712 345 678',
  company: 'Numele companiei',
};

const ok = (value) => ({ ok: true, value });
const fail = (error) => ({ ok: false, error });

// --- Telefon --------------------------------------------------------------
// Acceptă: cifre, spații, puncte, cratime, paranteze, bare și „+” la început.
// România: 10 cifre cu 0 în față, sau +40 / 0040 urmat de 9 cifre
// (și forma „+40 (0)712…”). Internațional: + sau 00, apoi 8–15 cifre.
// Serverul salvează doar cifrele: 0712345678 sau +40712345678 / +4930….
const PHONE_CHARS = /^\+?[\d\s.\-()/]+$/;
const PHONE_HELP = 'Telefonul poate conține doar cifre, spații, puncte, cratime, paranteze și + la început (ex. 0712 345 678 sau +40 712 345 678).';

export function checkPhone(raw) {
  const s = String(raw ?? '').trim();
  if (!s) return ok('');
  if (!PHONE_CHARS.test(s)) return fail(PHONE_HELP);
  let digits = s.replace(/\D/g, '');
  let international = s.startsWith('+');
  if (!international && digits.startsWith('00')) {
    international = true;
    digits = digits.slice(2);
  }
  if (international) {
    if (!digits) return fail(PHONE_HELP);
    if (digits.startsWith('0')) {
      return fail('După + (sau 00) urmează prefixul țării, fără 0 (ex. +40 712 345 678 pentru România, +49 30 1234 5678 pentru Germania).');
    }
    if (digits.startsWith('40')) {
      let national = digits.slice(2);
      if (national.length === 10 && national.startsWith('0')) national = national.slice(1); // „+40 (0)712 …”
      if (national.length < 9) {
        return fail(`Numărul pare incomplet: după +40 urmează 9 cifre, iar dumneavoastră ați scris ${national.length} (ex. +40 712 345 678).`);
      }
      if (national.length > 9) {
        return fail(`Numărul are prea multe cifre: după +40 urmează 9 cifre, iar dumneavoastră ați scris ${national.length} (ex. +40 712 345 678).`);
      }
      return ok(`+40${national}`);
    }
    if (digits.length < 8) {
      return fail(`Numărul internațional pare incomplet: are ${digits.length} cifre cu prefixul țării, iar un număr valid are între 8 și 15 (ex. +49 30 1234 5678).`);
    }
    if (digits.length > 15) {
      return fail(`Numărul internațional are prea multe cifre (${digits.length}); maximum 15, cu prefixul țării.`);
    }
    return ok(`+${digits}`);
  }
  if (!digits.startsWith('0')) {
    return fail('Numerele din România încep cu 0 (ex. 0712 345 678). Pentru un număr din străinătate, începeți cu + sau 00 (ex. +49 30 1234 5678).');
  }
  if (digits.length < 10) {
    return fail(`Numărul pare incomplet: are ${digits.length} cifre, iar un număr din România are 10 (ex. 0712 345 678).`);
  }
  if (digits.length > 10) {
    return fail(`Numărul are ${digits.length} cifre, iar un număr din România are 10 (ex. 0712 345 678). Pentru un număr din străinătate, începeți cu + sau 00.`);
  }
  return ok(digits);
}

// --- Nume și companie -----------------------------------------------------
// Litere (inclusiv diacritice), cifre, spații și semnele din numele de firme
// . , - ' & ( ) /. Respinge doar ce nu are nicio literă sau are alte semne.
const NAME_CHARS = /^[\p{L}\p{M}\p{N}\s.,'’&()/-]+$/u;
const COMPANY_CHARS = /^[\p{L}\p{M}\p{N}\s.,'’&()/"„”“«»+-]+$/u;
const HAS_LETTER = /\p{L}/u;

function badChars(s, allowed) {
  const out = [];
  for (const ch of s) {
    if (!allowed.test(ch) && !out.includes(ch)) out.push(ch);
  }
  return out;
}

function checkNameLike(raw, { label, emptyMessage, required, min, max, allowed, allowedText }) {
  const s = String(raw ?? '').trim().replace(/\s+/g, ' ');
  if (!s) return required ? fail(emptyMessage) : ok('');
  if (s.length < min) return fail(`${label} trebuie să aibă cel puțin ${min} caractere.`);
  if (s.length > max) return fail(`${label} este prea lung: maximum ${max} de caractere.`);
  if (!allowed.test(s)) {
    const shown = badChars(s, new RegExp(`^${allowed.source.slice(1, -2)}$`, 'u')).join(' ');
    return fail(`${label} conține caractere nepermise: ${shown}. Sunt permise literele, cifrele, spațiile și semnele ${allowedText}`);
  }
  if (!HAS_LETTER.test(s)) return fail(`${label} trebuie să conțină cel puțin o literă.`);
  return ok(s);
}

export function checkName(raw) {
  return checkNameLike(raw, {
    label: 'Numele',
    emptyMessage: 'Completați numele (ex. Ion Popescu).',
    required: true,
    min: 2,
    max: 100,
    allowed: NAME_CHARS,
    allowedText: ". , - ' & ( ) /",
  });
}

export function checkCompany(raw) {
  return checkNameLike(raw, {
    label: 'Numele companiei',
    emptyMessage: '',
    required: false,
    min: 2,
    max: 200,
    allowed: COMPANY_CHARS,
    allowedText: ". , - ' & ( ) / + și ghilimele",
  });
}

// --- E-mail ---------------------------------------------------------------
// Fără lookbehind în regex (Safari mai vechi de 16.4 nu îl înțelege).
const EMAIL_LOCAL = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
const EMAIL_DOMAIN = /^(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;

export function checkEmail(raw) {
  const s = String(raw ?? '').trim();
  if (!s) return fail('Completați adresa de e-mail (ex. nume@firma.ro).');
  if (/\s/.test(s)) return fail('Adresa de e-mail nu poate conține spații (ex. nume@firma.ro).');
  const at = s.lastIndexOf('@');
  if (at < 1) return fail('Adresa de e-mail trebuie să conțină „@” și numele dinaintea lui (ex. nume@firma.ro).');
  const domain = s.slice(at + 1);
  if (!domain) return fail('După „@” lipsește domeniul firmei (ex. nume@firma.ro).');
  if (!domain.includes('.')) {
    return fail('Adresa de e-mail nu are domeniul complet: lipsește terminația, de ex. „.ro” sau „.com” (ex. nume@firma.ro).');
  }
  const local = s.slice(0, at);
  const localOk = EMAIL_LOCAL.test(local) && !local.startsWith('.') && !local.endsWith('.') && !local.includes('..');
  if (s.length > 254 || local.length > 64 || !localOk || !EMAIL_DOMAIN.test(domain)) {
    return fail('Adresa de e-mail nu este validă. Verificați să nu aibă caractere speciale sau puncte duble (ex. nume@firma.ro).');
  }
  return ok(s);
}

// --- Mesaj ----------------------------------------------------------------
export const MESSAGE_MIN = 10;
export const MESSAGE_MAX = 5000;

export function checkMessage(raw) {
  const s = String(raw ?? '').trim();
  if (!s) return fail('Descrieți solicitarea: produsele, codurile sau cantitățile.');
  if (s.length < MESSAGE_MIN) {
    return fail(`Mesajul este prea scurt: minimum ${MESSAGE_MIN} caractere (acum ${s.length}). Descrieți pe scurt produsele, codurile sau cantitățile.`);
  }
  if (s.length > MESSAGE_MAX) return fail('Mesajul este prea lung: maximum 5.000 de caractere. Puteți atașa lista ca fișier.');
  return ok(s);
}

// --- Formularul de cerere de ofertă ---------------------------------------
export const QUOTE_FIELDS = ['name', 'email', 'phone', 'company', 'message'];
const CHECKS = { name: checkName, email: checkEmail, phone: checkPhone, company: checkCompany, message: checkMessage };

/**
 * Validează câmpurile text ale cererii de ofertă.
 * @returns {{ ok: boolean, values: object, fields: Record<string,string> }}
 *   values = valorile curățate (telefonul doar cu cifre), fields = erori pe câmp.
 */
export function validateQuoteForm(data) {
  const values = {};
  const fields = {};
  for (const key of QUOTE_FIELDS) {
    const r = CHECKS[key](data?.[key]);
    if (r.ok) values[key] = r.value;
    else fields[key] = r.error;
  }
  return { ok: Object.keys(fields).length === 0, values, fields };
}

/** Un singur text cu toate erorile, pentru locurile care nu pot afișa pe câmp. */
export function summarizeFieldErrors(fields) {
  const list = QUOTE_FIELDS.filter((k) => fields[k]).map((k) => fields[k]);
  for (const [k, v] of Object.entries(fields)) if (!QUOTE_FIELDS.includes(k)) list.push(v);
  return list.length ? `Vă rugăm să corectați: ${list.join(' ')}` : '';
}

// --- Parola (utilizatori interni, /admin/echipa) --------------------------
export const PASSWORD_MIN = 12;

export function passwordProblems(password) {
  const p = String(password ?? '');
  const errors = [];
  if (p.length < PASSWORD_MIN) errors.push(`Parola trebuie să aibă minimum ${PASSWORD_MIN} caractere.`);
  if (!/[A-Z]/.test(p)) errors.push('Parola trebuie să conțină cel puțin o literă mare.');
  if (!/[a-z]/.test(p)) errors.push('Parola trebuie să conțină cel puțin o literă mică.');
  if (!/[0-9]/.test(p)) errors.push('Parola trebuie să conțină cel puțin o cifră.');
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(p)) errors.push('Parola trebuie să conțină cel puțin un simbol (ex. ! ? # %).');
  return errors;
}
