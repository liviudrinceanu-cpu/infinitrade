import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { csrfProtection, validateContentType } from '@/lib/csrf';

// Valid communication types (must match Prisma CommType enum)
const VALID_TYPES = ['NOTE', 'EMAIL_SENT', 'CALL', 'STATUS_CHANGE'];

// Content length limits
const MAX_CONTENT_LENGTH = 10000;
const MIN_CONTENT_LENGTH = 1;

export async function POST(request, { params }) {
  try {
    // CSRF Protection
    const csrfError = csrfProtection(request);
    if (csrfError) return csrfError;

    // Content-Type validation
    const contentTypeResult = validateContentType(request);
    if (!contentTypeResult.valid) {
      return NextResponse.json({ error: contentTypeResult.error }, { status: 400 });
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Validate ID format (UUID)
    if (!id || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    // Verify the quote request exists
    const quoteRequest = await prisma.quoteRequest.findUnique({
      where: { id },
      select: { id: true }
    });

    if (!quoteRequest) {
      return NextResponse.json({ error: 'Quote request not found' }, { status: 404 });
    }

    const body = await request.json();
    const { type, content } = body;

    // Validate required fields
    if (!type || !content) {
      return NextResponse.json(
        { error: 'Type and content are required' },
        { status: 400 }
      );
    }

    // Validate type enum
    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${VALID_TYPES.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate content type
    if (typeof content !== 'string') {
      return NextResponse.json(
        { error: 'Content must be a string' },
        { status: 400 }
      );
    }

    // Validate content length
    const trimmedContent = content.trim();
    if (trimmedContent.length < MIN_CONTENT_LENGTH) {
      return NextResponse.json(
        { error: 'Content cannot be empty' },
        { status: 400 }
      );
    }

    if (trimmedContent.length > MAX_CONTENT_LENGTH) {
      return NextResponse.json(
        { error: `Content exceeds maximum length of ${MAX_CONTENT_LENGTH} characters` },
        { status: 400 }
      );
    }

    const communication = await prisma.communication.create({
      data: {
        quoteRequestId: id,
        type,
        content: trimmedContent,
        userId: session.user.id,
      },
      include: {
        user: {
          select: { id: true, name: true },
        },
      },
    });

    return NextResponse.json(communication);
  } catch (error) {
    console.error('Failed to create communication:', error);
    return NextResponse.json(
      { error: 'Eroare la salvarea comunicării' },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Validate ID format (UUID)
    if (!id || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    const communications = await prisma.communication.findMany({
      where: { quoteRequestId: id },
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { id: true, name: true },
        },
      },
    });

    return NextResponse.json(communications);
  } catch (error) {
    console.error('Failed to fetch communications:', error);
    return NextResponse.json(
      { error: 'Eroare la încărcarea comunicărilor', communications: [] },
      { status: 500 }
    );
  }
}
