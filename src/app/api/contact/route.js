import { Resend } from 'resend';
import { z } from 'zod';
import { rateLimit, getClientIP } from '@/lib/rateLimit';
import { sanitizeHtml } from '@/lib/utils';
import { config } from '@/lib/config';
import { prisma } from '@/lib/db';
import { csrfProtection, validateContentType } from '@/lib/csrf';

// Lazy initialization - only create clients when needed
let resend = null;
let anthropic = null;

function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
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
});

async function analyzeRequestWithClaude(formData) {
  const client = await getAnthropic();

  if (!client) {
    return generateBasicAnalysis(formData);
  }

  // Add timeout to prevent Vercel function timeout (max 10s for API call)
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('AI analysis timeout')), 8000)
  );

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
    const apiCallPromise = client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    // Race between API call and timeout
    const response = await Promise.race([apiCallPromise, timeoutPromise]);

    return response.content[0].text;
  } catch (error) {
    // Fallback to basic analysis if Claude fails or times out
    console.warn('Claude AI analysis failed, using basic analysis:', error.message);
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
    const rateLimitResult = rateLimit(ip, config.api.rateLimit.max, config.api.rateLimit.windowMs);
    
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

    // Save to database
    try {
      // Find or create client
      let client = await prisma.client.findUnique({
        where: { email: validatedData.email },
      });

      if (!client) {
        client = await prisma.client.create({
          data: {
            email: validatedData.email,
            name: validatedData.name,
            company: validatedData.company || null,
            phone: validatedData.phone || null,
          },
        });
      } else {
        // Update client info if changed
        await prisma.client.update({
          where: { id: client.id },
          data: {
            name: validatedData.name,
            company: validatedData.company || client.company,
            phone: validatedData.phone || client.phone,
          },
        });
      }

      // Create quote request
      await prisma.quoteRequest.create({
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

    // Sanitize HTML for email
    const sanitizedName = sanitizeHtml(validatedData.name);
    const sanitizedCompany = sanitizeHtml(validatedData.company || '');
    const sanitizedMessage = sanitizeHtml(validatedData.message);
    const sanitizedAnalysis = sanitizeHtml(aiAnalysis);

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
    const resendClient = getResend();
    
    if (!resendClient) {
      return Response.json(
        { error: 'Serviciul de email nu este configurat.' },
        { status: 500 }
      );
    }

    const { data, error } = await resendClient.emails.send({
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
    // Log error for debugging
    console.error('Contact API Error:', error);

    // Don't expose internal errors in production
    const errorMessage = process.env.NODE_ENV === 'development'
      ? error.message
      : 'Eroare internă. Vă rugăm încercați din nou sau contactați-ne direct la email.';

    return Response.json(
      { error: errorMessage, success: false },
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Ensure OPTIONS request returns proper CORS headers
export async function OPTIONS(request) {
  return Response.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
