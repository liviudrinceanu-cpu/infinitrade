import { z } from 'zod';

// Force dynamic - this route uses runtime features
export const dynamic = 'force-dynamic';

// Lazy imports to prevent build-time/load-time errors in serverless
let rateLimitModule = null;
let configModule = null;
let csrfModule = null;

async function getRateLimitModule() {
  if (!rateLimitModule) {
    rateLimitModule = await import('@/lib/rateLimit');
  }
  return rateLimitModule;
}

async function getConfigModule() {
  if (!configModule) {
    configModule = await import('@/lib/config');
  }
  return configModule;
}

async function getCsrfModule() {
  if (!csrfModule) {
    csrfModule = await import('@/lib/csrf');
  }
  return csrfModule;
}

// Simple HTML sanitization that works in serverless (no JSDOM dependency)
function sanitizeHtmlSimple(html) {
  if (typeof html !== 'string') return '';
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Lazy imports to prevent build-time errors
let prisma = null;
let Resend = null;

async function getPrisma() {
  if (!prisma) {
    try {
      const { prisma: prismaClient } = await import('@/lib/db');
      prisma = prismaClient;
    } catch (e) {
      console.error('Failed to load Prisma:', e);
      return null;
    }
  }
  return prisma;
}

async function getResendClass() {
  if (!Resend) {
    try {
      const resendModule = await import('resend');
      Resend = resendModule.Resend;
    } catch (e) {
      console.error('Failed to load Resend:', e);
      return null;
    }
  }
  return Resend;
}

// Lazy initialization - only create clients when needed
let resendClient = null;
let anthropic = null;

async function getResend() {
  if (!resendClient && process.env.RESEND_API_KEY) {
    const ResendClass = await getResendClass();
    if (ResendClass) {
      resendClient = new ResendClass(process.env.RESEND_API_KEY);
    }
  }
  return resendClient;
}

async function getAnthropic() {
  if (!anthropic && process.env.ANTHROPIC_API_KEY) {
    const Anthropic = (await import('@anthropic-ai/sdk')).default;
    anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }
  return anthropic;
}

// Industrial equipment price database (approximate market prices in EUR)
const priceDatabase = {
  // Pompe
  'pompa': { min: 500, max: 15000, avg: 3000 },
  'pompe': { min: 500, max: 15000, avg: 3000 },
  'grundfos': { min: 800, max: 20000, avg: 4000 },
  'wilo': { min: 600, max: 18000, avg: 3500 },
  'ksb': { min: 1000, max: 25000, avg: 5000 },
  'lowara': { min: 500, max: 12000, avg: 2500 },
  'ebara': { min: 600, max: 15000, avg: 3000 },
  'pompa centrifugala': { min: 800, max: 20000, avg: 4000 },
  'pompa submersibila': { min: 1000, max: 15000, avg: 3500 },
  'pompa dozatoare': { min: 300, max: 5000, avg: 1500 },
  'pompa vid': { min: 1500, max: 25000, avg: 8000 },
  
  // Robineti
  'robinet': { min: 100, max: 5000, avg: 800 },
  'robineti': { min: 100, max: 5000, avg: 800 },
  'supapa': { min: 150, max: 3000, avg: 600 },
  'supape': { min: 150, max: 3000, avg: 600 },
  'ari armaturen': { min: 200, max: 8000, avg: 1500 },
  'spirax sarco': { min: 150, max: 6000, avg: 1200 },
  'danfoss': { min: 100, max: 4000, avg: 800 },
  'oala condens': { min: 100, max: 2000, avg: 400 },
  'supapa siguranta': { min: 200, max: 3000, avg: 700 },
  
  // Motoare
  'motor': { min: 300, max: 20000, avg: 2500 },
  'motoare': { min: 300, max: 20000, avg: 2500 },
  'siemens': { min: 500, max: 25000, avg: 4000 },
  'sew': { min: 600, max: 20000, avg: 3500 },
  'abb': { min: 500, max: 22000, avg: 3800 },
  'motor electric': { min: 300, max: 15000, avg: 2000 },
  'servomotor': { min: 800, max: 10000, avg: 3000 },
  'motoreductor': { min: 500, max: 12000, avg: 2500 },
  'convertizor frecventa': { min: 400, max: 15000, avg: 2000 },
  
  // Schimbatoare caldura
  'schimbator': { min: 500, max: 30000, avg: 5000 },
  'schimbatoare': { min: 500, max: 30000, avg: 5000 },
  'alfa laval': { min: 800, max: 40000, avg: 8000 },
  'kelvion': { min: 700, max: 35000, avg: 7000 },
  'swep': { min: 400, max: 15000, avg: 3000 },
  'racitor ulei': { min: 300, max: 8000, avg: 1500 },
  'garnituri': { min: 50, max: 2000, avg: 300 },
  
  // Suflante
  'suflanta': { min: 800, max: 25000, avg: 5000 },
  'suflante': { min: 800, max: 25000, avg: 5000 },
  'ventilator': { min: 300, max: 15000, avg: 2000 },
  'ventilatoare': { min: 300, max: 15000, avg: 2000 },
  'becker': { min: 1000, max: 20000, avg: 5000 },
  'fpz': { min: 800, max: 18000, avg: 4000 },
  'compresor': { min: 1500, max: 30000, avg: 8000 },
  
  // Piese schimb
  'piese': { min: 50, max: 3000, avg: 500 },
  'garnitura': { min: 20, max: 500, avg: 100 },
  'rotor': { min: 200, max: 5000, avg: 1000 },
  'rulment': { min: 30, max: 800, avg: 150 },
};

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă minim 2 caractere').max(100, 'Numele este prea lung'),
  email: z.string().email('Email invalid'),
  phone: z.string().max(20, 'Număr de telefon prea lung').optional(),
  company: z.string().max(200, 'Numele companiei este prea lung').optional(),
  category: z.string().max(100).optional(),
  message: z.string().min(10, 'Mesajul trebuie să aibă minim 10 caractere').max(5000, 'Mesajul este prea lung'),
  cartItems: z.array(z.object({
    type: z.string(),
    name: z.string(),
    category: z.string().optional(),
  })).optional(),
  website: z.string().optional(), // honeypot field
  _t: z.number().optional(), // form load timestamp
});

// --- Bot / Spam Detection ---

/**
 * Calculate Shannon entropy of a string (randomness measure).
 * High entropy = likely random gibberish.
 */
function calculateEntropy(str) {
  if (!str || str.length === 0) return 0;
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let entropy = 0;
  const len = str.length;
  for (const count of Object.values(freq)) {
    const p = count / len;
    entropy -= p * Math.log2(p);
  }
  return entropy;
}

/**
 * Check if a string looks like gibberish based on consonant clusters
 * and lack of vowel patterns typical in real languages (Romanian, English, etc.)
 */
function isGibberish(str) {
  if (!str || str.length < 3) return false;
  const cleaned = str.toLowerCase().replace(/[^a-zA-ZăâîșțĂÂÎȘȚ]/g, '');
  if (cleaned.length < 3) return false;

  // Check consonant-to-vowel ratio
  const vowels = cleaned.match(/[aeiouăâî]/gi) || [];
  const vowelRatio = vowels.length / cleaned.length;
  // Normal Romanian/English text has ~35-45% vowels; below 15% is suspicious
  if (vowelRatio < 0.15 && cleaned.length > 5) return true;

  // Check for long consonant clusters (4+ consecutive consonants is suspicious for names)
  const longClusters = cleaned.match(/[^aeiouăâî]{5,}/gi) || [];
  if (longClusters.length > 0 && cleaned.length < 30) return true;

  // High entropy for short strings is suspicious (random characters)
  const entropy = calculateEntropy(cleaned);
  if (entropy > 4.0 && cleaned.length < 20) return true;

  return false;
}

/**
 * Detect if the submission is likely from a bot/spam.
 * Returns { isSpam: boolean, reason: string }
 */
function detectSpam(data, formLoadedAt) {
  const reasons = [];
  let score = 0; // 0 = clean, higher = more likely spam

  // 1. Honeypot check - bots fill hidden fields
  if (data.website && data.website.trim().length > 0) {
    return { isSpam: true, reason: 'honeypot', score: 100 };
  }

  // 2. Timing check - form submitted too fast (< 3 seconds)
  if (formLoadedAt) {
    const elapsed = Date.now() - formLoadedAt;
    if (elapsed < 3000) {
      return { isSpam: true, reason: 'too_fast', score: 100 };
    }
    if (elapsed < 5000) {
      score += 30;
      reasons.push('submitted_quickly');
    }
  }

  // 3. Name gibberish check
  if (isGibberish(data.name)) {
    score += 40;
    reasons.push('gibberish_name');
  }

  // 4. Company gibberish check
  if (data.company && data.company.length > 3 && isGibberish(data.company)) {
    score += 30;
    reasons.push('gibberish_company');
  }

  // 5. Message gibberish check
  if (isGibberish(data.message)) {
    score += 40;
    reasons.push('gibberish_message');
  }

  // 6. Message too short and meaningless (just random chars)
  const messageWords = data.message.trim().split(/\s+/);
  if (messageWords.length <= 2) {
    // Check if the 1-2 words are actual words or gibberish
    const allGibberish = messageWords.every(w => isGibberish(w));
    if (allGibberish) {
      score += 35;
      reasons.push('meaningless_message');
    }
  }

  // 7. Name has no spaces (most real names have first + last name)
  //    and name is long random string
  if (data.name.length > 12 && !data.name.includes(' ') && /[A-Z].*[A-Z]/.test(data.name)) {
    // CamelCase random like "vQafAhaRGzNKRngVrc"
    const upperCount = (data.name.match(/[A-Z]/g) || []).length;
    if (upperCount > 3) {
      score += 30;
      reasons.push('random_casing_name');
    }
  }

  // 8. Mixed-case within a single word (real names don't have random uppercase mid-word)
  //    e.g. "putiEHwMeBXVUNkUlpahy" has uppercase letters scattered inside
  const nameParts = data.name.trim().split(/\s+/);
  for (const part of nameParts) {
    if (part.length > 8) {
      // Count case transitions (lower->upper or upper->lower)
      let transitions = 0;
      for (let i = 1; i < part.length; i++) {
        const prevUpper = part[i - 1] === part[i - 1].toUpperCase() && part[i - 1] !== part[i - 1].toLowerCase();
        const currUpper = part[i] === part[i].toUpperCase() && part[i] !== part[i].toLowerCase();
        if (prevUpper !== currUpper) transitions++;
      }
      // Real names have 0-1 transitions (e.g. "Ion" = 1). Gibberish has many.
      if (transitions > 4) {
        score += 35;
        reasons.push('chaotic_casing');
        break;
      }
    }
  }

  // 9. Message is a single "word" with no spaces - very suspicious
  if (messageWords.length === 1 && data.message.trim().length > 8) {
    score += 30;
    reasons.push('single_word_message');
  }

  // 10. Phone number sanity (if provided)
  if (data.phone) {
    const digitsOnly = data.phone.replace(/[\s\-\+\(\)\.]/g, '');
    // Romanian phone: 10 digits starting with 0, or international +40 = 12 chars
    // Allow some international formats too
    if (digitsOnly.length > 0 && (digitsOnly.length < 6 || digitsOnly.length > 15)) {
      score += 20;
      reasons.push('invalid_phone_length');
    }
  }

  // 11. Email from known disposable/spam domains (basic list)
  const disposableDomains = [
    'mailinator.com', 'guerrillamail.com', 'tempmail.com', 'throwaway.email',
    'yopmail.com', 'sharklasers.com', 'guerrillamailblock.com', 'grr.la',
    'dispostable.com', 'trashmail.com', '10minutemail.com', 'maildrop.cc',
  ];
  const emailDomain = (data.email || '').split('@')[1]?.toLowerCase();
  if (emailDomain && disposableDomains.includes(emailDomain)) {
    score += 25;
    reasons.push('disposable_email');
  }

  const isSpam = score >= 60;
  return { isSpam, reason: reasons.join(', '), score };
}

async function analyzeRequestWithClaude(formData) {
  const client = await getAnthropic();
  
  if (!client) {
    return generateBasicAnalysis(formData);
  }

  const prompt = `Ești un expert în echipamente industriale (pompe, robineți, motoare electrice, schimbătoare de căldură, suflante). 

Analizează următoarea cerere de ofertă de la un client și oferă:
1. Un rezumat clar al produselor solicitate
2. Identifică brandurile/producătorii menționați
3. Estimează prețul de piață pentru fiecare produs (în EUR)
4. Calculează un total estimativ
5. Oferă observații utile pentru echipa de vânzări

DATELE CLIENTULUI:
- Nume: ${formData.name}
- Email: ${formData.email}
- Telefon: ${formData.phone || 'Nespecificat'}
- Companie: ${formData.company || 'Nespecificată'}
- Categorie selectată: ${formData.category || 'Nespecificată'}

${formData.cartItems && formData.cartItems.length > 0 ? `PRODUSE DIN COȘ (selectate de client):
${formData.cartItems.map(item => `- ${item.type === 'brand' ? 'Brand' : item.type === 'category' ? 'Categorie' : 'Produs'}: ${item.name}${item.category ? ` (${item.category})` : ''}`).join('\n')}

` : ''}MESAJUL CLIENTULUI:
${formData.message}

${formData.cartItems && formData.cartItems.length > 3 ? `NOTĂ: Clientul a selectat ${formData.cartItems.length} produse. Oferă o estimare sumară pe categorii în loc de detalii pentru fiecare, pentru eficiență.` : ''}

Răspunde în română, structurat și profesional. Pentru estimările de preț, folosește intervale realiste bazate pe piața din România/Europa pentru echipamente industriale. Dacă nu poți identifica produse specifice, menționează acest lucru și oferă estimări generale bazate pe categoria selectată.

Format răspuns:
📋 REZUMAT CERERE:
[rezumat scurt]

🏭 PRODUSE IDENTIFICATE:
[lista produse cu branduri dacă sunt menționate]

💰 ESTIMARE PREȚURI (EUR):
[produs/categorie]: [preț min] - [preț max] EUR
📊 TOTAL ESTIMAT: [sumă min] - [sumă max] EUR

💡 OBSERVAȚII:
[observații scurte și relevante]`;

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    return response.content[0].text;
  } catch (error) {
    // Fallback to basic analysis if Claude fails
    return generateBasicAnalysis(formData);
  }
}

function generateBasicAnalysis(formData) {
  const message = formData.message.toLowerCase();
  let products = [];
  let totalMin = 0;
  let totalMax = 0;

  // Search for keywords in message
  for (const [keyword, prices] of Object.entries(priceDatabase)) {
    if (message.includes(keyword)) {
      products.push({
        name: keyword.charAt(0).toUpperCase() + keyword.slice(1),
        min: prices.min,
        max: prices.max
      });
      totalMin += prices.min;
      totalMax += prices.max;
    }
  }

  if (products.length === 0) {
    // Default estimate based on category
    const categoryPrices = {
      'pompe-industriale': { min: 1000, max: 10000 },
      'robineti-industriali': { min: 500, max: 5000 },
      'motoare-electrice': { min: 800, max: 8000 },
      'schimbatoare-caldura': { min: 1000, max: 15000 },
      'suflante-ventilatoare': { min: 1000, max: 12000 },
    };
    const catPrices = categoryPrices[formData.category] || { min: 500, max: 5000 };
    totalMin = catPrices.min;
    totalMax = catPrices.max;
    products.push({ name: 'Produse din categoria selectată', min: catPrices.min, max: catPrices.max });
  }

  let analysis = `📋 REZUMAT CERERE:\n${formData.message}\n\n`;
  analysis += `🏭 PRODUSE IDENTIFICATE:\n`;
  products.forEach(p => {
    analysis += `- ${p.name}\n`;
  });
  analysis += `\n💰 ESTIMARE PREȚURI (EUR):\n`;
  products.forEach(p => {
    analysis += `- ${p.name}: ${p.min} - ${p.max} EUR\n`;
  });
  analysis += `\n📊 TOTAL ESTIMAT: ${totalMin} - ${totalMax} EUR\n`;
  analysis += `\n💡 OBSERVAȚII:\nAnaliză automată bazată pe cuvinte cheie. Recomandăm verificare manuală pentru estimare precisă.`;

  return analysis;
}

export async function POST(request) {
  try {
    // Lazy load modules
    const { csrfProtection, validateContentType } = await getCsrfModule();
    const { rateLimit, getClientIP } = await getRateLimitModule();
    const { config } = await getConfigModule();

    // CSRF Protection
    const csrfError = csrfProtection(request);
    if (csrfError) return csrfError;

    // Content-Type validation
    const contentTypeResult = validateContentType(request);
    if (!contentTypeResult.valid) {
      return Response.json({ error: contentTypeResult.error }, { status: 400 });
    }

    // Rate limiting
    const ip = getClientIP(request);
    const rateLimitResult = await rateLimit(ip, config.api.rateLimit.max, config.api.rateLimit.windowMs);

    if (!rateLimitResult.allowed) {
      return Response.json(
        { error: 'Prea multe solicitări. Te rugăm să încerci din nou mai târziu.' },
        {
          status: 429,
          headers: {
            'Retry-After': '900', // 15 minutes
          }
        }
      );
    }

    const formData = await request.json();

    // Validate with Zod
    const validationResult = contactSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      return Response.json(
        { error: errors },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // --- Spam Detection (BEFORE AI analysis to save tokens) ---
    const spamResult = detectSpam(validatedData, validatedData._t);

    if (spamResult.isSpam) {
      console.log(`[SPAM BLOCKED] score=${spamResult.score} reason="${spamResult.reason}" name="${validatedData.name}" email="${validatedData.email}"`);
      // Return success to not reveal to bots that they were caught
      return Response.json({
        success: true,
        message: 'Solicitarea a fost trimisă cu succes!'
      });
    }

    // Log borderline cases for monitoring
    if (spamResult.score > 0) {
      console.log(`[SPAM CHECK] score=${spamResult.score} reason="${spamResult.reason}" name="${validatedData.name}" email="${validatedData.email}"`);
    }

    // Analyze request with Claude AI
    const aiAnalysis = await analyzeRequestWithClaude(validatedData);

    // Extract price estimates from AI analysis
    let estimatedMin = null;
    let estimatedMax = null;
    const totalMatch = aiAnalysis.match(/TOTAL ESTIMAT:\s*(\d[\d\s.,]*)\s*-\s*(\d[\d\s.,]*)\s*EUR/i);
    if (totalMatch) {
      estimatedMin = parseFloat(totalMatch[1].replace(/[\s.,]/g, ''));
      estimatedMax = parseFloat(totalMatch[2].replace(/[\s.,]/g, ''));
    }

    // Save to database (optional - email is the primary delivery)
    const db = await getPrisma();
    if (db) {
      try {
        // Find or create client
        let client = await db.client.findUnique({
          where: { email: validatedData.email },
        });

        if (!client) {
          client = await db.client.create({
            data: {
              email: validatedData.email,
              name: validatedData.name,
              company: validatedData.company || null,
              phone: validatedData.phone || null,
            },
          });
        } else {
          // Update client info if changed
          await db.client.update({
            where: { id: client.id },
            data: {
              name: validatedData.name,
              company: validatedData.company || client.company,
              phone: validatedData.phone || client.phone,
            },
          });
        }

        // Create quote request
        await db.quoteRequest.create({
          data: {
            clientId: client.id,
            category: validatedData.category || null,
            message: validatedData.message,
            productsJson: validatedData.cartItems || null,
            aiAnalysis: aiAnalysis,
            estimatedMin: estimatedMin,
            estimatedMax: estimatedMax,
            status: 'NEW',
          },
        });
      } catch (dbError) {
        // Log error but don't fail the request - email should still be sent
        console.error('Failed to save to database:', dbError);
      }
    } else {
      console.warn('Database not available, skipping save');
    }

    // Sanitize HTML for email (using simple sanitizer that works in serverless)
    const sanitizedName = sanitizeHtmlSimple(validatedData.name);
    const sanitizedCompany = sanitizeHtmlSimple(validatedData.company || '');
    const sanitizedMessage = sanitizeHtmlSimple(validatedData.message);
    const sanitizedAnalysis = sanitizeHtmlSimple(aiAnalysis);

    // Format the email
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #063c69 0%, #0990db 100%); color: white; padding: 24px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 600; }
    .header-meta { display: flex; align-items: center; gap: 12px; margin-top: 10px; }
    .badge { display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; border: 1px solid rgba(255,255,255,0.3); }
    .header-date { opacity: 0.85; font-size: 13px; }
    .content { background: #f8f9fa; padding: 20px; border: 1px solid #e0e0e0; }
    .section { background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; border-left: 4px solid #0990db; }
    .section h2 { margin: 0 0 10px; color: #063c69; font-size: 16px; }
    .section p { margin: 5px 0; }
    .label { font-weight: bold; color: #666; }
    .ai-analysis { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #37c67f; white-space: pre-wrap; }
    .ai-analysis h2 { color: #37c67f; }
    .footer { background: #063c69; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 Nouă Solicitare de Ofertă</h1>
      <div class="header-meta">
        <span class="badge">infinitrade.ro</span>
        <span class="header-date">${new Date().toLocaleString('ro-RO')}</span>
      </div>
    </div>
    
    <div class="content">
      <div class="section">
        <h2>👤 Date Client</h2>
        <p><span class="label">Nume:</span> ${sanitizedName}</p>
        <p><span class="label">Email:</span> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
        <p><span class="label">Telefon:</span> ${validatedData.phone || 'Nespecificat'}</p>
        <p><span class="label">Companie:</span> ${sanitizedCompany || 'Nespecificată'}</p>
        <p><span class="label">Categorie:</span> ${validatedData.category || 'Nespecificată'}</p>
      </div>
      
      <div class="section">
        <h2>📝 Mesajul Clientului</h2>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      </div>
      
      <div class="ai-analysis">
        <h2>🤖 Analiză AI & Estimare Costuri</h2>
        <div>${sanitizedAnalysis.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    
    <div class="footer">
      <p>Această solicitare a fost trimisă de pe <strong>infinitrade.ro</strong></p>
      <p>Răspunde direct la emailul clientului: ${validatedData.email}</p>
    </div>
  </div>
</body>
</html>
    `;

    // Plain text version
    const emailText = `
═══════════════════════════════════════════════════
   NOUĂ SOLICITARE DE OFERTĂ - INFINITRADE.RO
═══════════════════════════════════════════════════

📅 Data: ${new Date().toLocaleString('ro-RO')}
🌐 Sursă: infinitrade.ro

───────────────────────────────────────────────────
👤 DATE CLIENT
───────────────────────────────────────────────────
Nume: ${sanitizedName}
Email: ${validatedData.email}
Telefon: ${validatedData.phone || 'Nespecificat'}
Companie: ${sanitizedCompany || 'Nespecificată'}
Categorie: ${validatedData.category || 'Nespecificată'}

───────────────────────────────────────────────────
📝 MESAJUL CLIENTULUI
───────────────────────────────────────────────────
${validatedData.message}

───────────────────────────────────────────────────
🤖 ANALIZĂ AI & ESTIMARE COSTURI
───────────────────────────────────────────────────
${aiAnalysis}

═══════════════════════════════════════════════════
Răspunde direct la: ${validatedData.email}
═══════════════════════════════════════════════════
    `;

    // Send email via Resend
    const emailClient = await getResend();

    if (!emailClient) {
      return Response.json(
        { error: 'Serviciul de email nu este configurat.' },
        { status: 500 }
      );
    }

    const { data, error } = await emailClient.emails.send({
      from: 'Infinitrade.ro <noreply@infinitrade.ro>',
      to: ['liviu.drinceanu@infinitrade-romania.ro'],
      subject: `[Infinitrade.ro] Nouă solicitare de ofertă - ${sanitizedName}${sanitizedCompany ? ' (' + sanitizedCompany + ')' : ''}`,
      html: emailHtml,
      text: emailText,
      reply_to: validatedData.email,
    });

    if (error) {
      return Response.json(
        { error: 'Eroare la trimiterea emailului. Vă rugăm încercați din nou.' },
        { status: 500 }
      );
    }

    return Response.json({ 
      success: true, 
      message: 'Solicitarea a fost trimisă cu succes!' 
    });

  } catch (error) {
    // Don't expose internal errors in production
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? error.message 
      : 'Eroare internă. Vă rugăm încercați din nou.';
    
    return Response.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
