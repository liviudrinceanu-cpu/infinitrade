// Simple health check endpoint
export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: {
      hasDatabase: !!process.env.DATABASE_URL,
      hasResend: !!process.env.RESEND_API_KEY,
      hasAnthropic: !!process.env.ANTHROPIC_API_KEY,
      nodeEnv: process.env.NODE_ENV,
    }
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    return Response.json({
      status: 'ok',
      received: body,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return Response.json({
      status: 'error',
      error: error.message,
    }, { status: 400 });
  }
}
