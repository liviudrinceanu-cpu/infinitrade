import { Resend } from 'resend';

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

MESAJUL CLIENTULUI:
${formData.message}

Răspunde în română, structurat și profesional. Pentru estimările de preț, folosește intervale realiste bazate pe piața din România/Europa pentru echipamente industriale. Dacă nu poți identifica produse specifice, menționează acest lucru și oferă estimări generale bazate pe categoria selectată.

Format răspuns:
📋 REZUMAT CERERE:
[rezumat]

🏭 PRODUSE IDENTIFICATE:
[lista produse cu branduri dacă sunt menționate]

💰 ESTIMARE PREȚURI (EUR):
[produs 1]: [preț min] - [preț max] EUR
[produs 2]: [preț min] - [preț max] EUR
...
📊 TOTAL ESTIMAT: [sumă min] - [sumă max] EUR

💡 OBSERVAȚII PENTRU VÂNZĂRI:
[observații relevante, întrebări de clarificare sugerate]`;

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
    console.error('Claude API error:', error);
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
    const formData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return Response.json(
        { error: 'Câmpurile Nume, Email și Mesaj sunt obligatorii.' },
        { status: 400 }
      );
    }

    // Analyze request with Claude AI
    const aiAnalysis = await analyzeRequestWithClaude(formData);

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
        <p><span class="label">Nume:</span> ${formData.name}</p>
        <p><span class="label">Email:</span> <a href="mailto:${formData.email}">${formData.email}</a></p>
        <p><span class="label">Telefon:</span> ${formData.phone || 'Nespecificat'}</p>
        <p><span class="label">Companie:</span> ${formData.company || 'Nespecificată'}</p>
        <p><span class="label">Categorie:</span> ${formData.category || 'Nespecificată'}</p>
      </div>
      
      <div class="section">
        <h2>📝 Mesajul Clientului</h2>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      </div>
      
      <div class="ai-analysis">
        <h2>🤖 Analiză AI & Estimare Costuri</h2>
        <div>${aiAnalysis.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    
    <div class="footer">
      <p>Această solicitare a fost trimisă de pe <strong>infinitrade.ro</strong></p>
      <p>Răspunde direct la emailul clientului: ${formData.email}</p>
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
Nume: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone || 'Nespecificat'}
Companie: ${formData.company || 'Nespecificată'}
Categorie: ${formData.category || 'Nespecificată'}

───────────────────────────────────────────────────
📝 MESAJUL CLIENTULUI
───────────────────────────────────────────────────
${formData.message}

───────────────────────────────────────────────────
🤖 ANALIZĂ AI & ESTIMARE COSTURI
───────────────────────────────────────────────────
${aiAnalysis}

═══════════════════════════════════════════════════
Răspunde direct la: ${formData.email}
═══════════════════════════════════════════════════
    `;

    // Send email via Resend
    const resendClient = getResend();
    
    if (!resendClient) {
      console.error('Resend not configured');
      return Response.json(
        { error: 'Serviciul de email nu este configurat.' },
        { status: 500 }
      );
    }

    const { data, error } = await resendClient.emails.send({
      from: 'Infinitrade.ro <noreply@infinitrade.ro>',
      to: ['liviu.drinceanu@infinitrade-romania.ro'],
      subject: `[Infinitrade.ro] Nouă solicitare de ofertă - ${formData.name}${formData.company ? ' (' + formData.company + ')' : ''}`,
      html: emailHtml,
      text: emailText,
      reply_to: formData.email,
    });

    if (error) {
      console.error('Resend error:', error);
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
    console.error('API error:', error);
    return Response.json(
      { error: 'Eroare internă. Vă rugăm încercați din nou.' },
      { status: 500 }
    );
  }
}
