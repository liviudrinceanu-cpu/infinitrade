// Minimal test endpoint for contact API
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Step 1: Parse JSON
    const formData = await request.json();

    // Step 2: Check env vars
    const envCheck = {
      hasDatabase: !!process.env.DATABASE_URL,
      hasResend: !!process.env.RESEND_API_KEY,
      hasAnthropic: !!process.env.ANTHROPIC_API_KEY,
    };

    // Step 3: Try loading modules one by one
    const modules = {
      zod: false,
      rateLimit: false,
      utils: false,
      config: false,
      csrf: false,
      db: false,
      resend: false,
      anthropic: false,
    };

    try {
      const { z } = await import('zod');
      modules.zod = true;
    } catch (e) {
      modules.zodError = e.message;
    }

    try {
      const { rateLimit, getClientIP } = await import('@/lib/rateLimit');
      modules.rateLimit = true;
    } catch (e) {
      modules.rateLimitError = e.message;
    }

    try {
      const { sanitizeHtml } = await import('@/lib/utils');
      modules.utils = true;
    } catch (e) {
      modules.utilsError = e.message;
    }

    try {
      const { config } = await import('@/lib/config');
      modules.config = true;
    } catch (e) {
      modules.configError = e.message;
    }

    try {
      const { csrfProtection, validateContentType } = await import('@/lib/csrf');
      modules.csrf = true;
    } catch (e) {
      modules.csrfError = e.message;
    }

    try {
      const { prisma } = await import('@/lib/db');
      modules.db = true;
    } catch (e) {
      modules.dbError = e.message;
    }

    try {
      const { Resend } = await import('resend');
      modules.resend = true;
    } catch (e) {
      modules.resendError = e.message;
    }

    try {
      const Anthropic = (await import('@anthropic-ai/sdk')).default;
      modules.anthropic = true;
    } catch (e) {
      modules.anthropicError = e.message;
    }

    return Response.json({
      status: 'ok',
      received: {
        name: formData.name,
        email: formData.email,
      },
      envCheck,
      modules,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    return Response.json({
      status: 'error',
      error: error.message,
      stack: error.stack,
    }, { status: 500 });
  }
}
