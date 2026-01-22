import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { csrfProtection, validateContentType } from '@/lib/csrf';

// Valid status values (must match Prisma enum)
const VALID_STATUSES = ['NEW', 'IN_PROGRESS', 'QUOTE_SENT', 'COMPLETED', 'CANCELLED'];

// Valid category values
const VALID_CATEGORIES = [
  'pompe-industriale',
  'robineti-industriali',
  'motoare-electrice',
  'schimbatoare-caldura',
  'suflante-ventilatoare',
  'altele'
];

export async function GET(request, { params }) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    const quoteRequest = await prisma.quoteRequest.findUnique({
      where: { id },
      include: {
        client: true,
        assignedTo: {
          select: { id: true, name: true, email: true },
        },
        communications: {
          orderBy: { createdAt: 'desc' },
          include: {
            user: {
              select: { id: true, name: true },
            },
          },
        },
      },
    });

    if (!quoteRequest) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(quoteRequest);
  } catch (error) {
    console.error('Failed to fetch request:', error);
    return NextResponse.json({ error: 'Eroare la încărcarea datelor' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
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

    const body = await request.json();
    const { status, assignedToId, category } = body;

    const userRole = session.user.role;
    const userId = session.user.id;

    // RBAC: Check if user has permission to update this request
    // ADMIN can update any request, SALES can only update requests assigned to them
    if (userRole !== 'ADMIN') {
      const existingRequest = await prisma.quoteRequest.findUnique({
        where: { id },
        select: { assignedToId: true }
      });

      if (!existingRequest) {
        return NextResponse.json({ error: 'Request not found' }, { status: 404 });
      }

      // SALES users can only update requests assigned to them
      if (existingRequest.assignedToId !== userId) {
        return NextResponse.json({
          error: 'Nu aveți permisiunea să modificați această cerere'
        }, { status: 403 });
      }

      // SALES users cannot reassign requests
      if (assignedToId !== undefined) {
        return NextResponse.json({
          error: 'Nu aveți permisiunea să reasignați cereri'
        }, { status: 403 });
      }
    }

    const updateData = {};

    // Validate status enum
    if (status) {
      if (!VALID_STATUSES.includes(status)) {
        return NextResponse.json({
          error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`
        }, { status: 400 });
      }
      updateData.status = status;
    }

    // Validate assignedToId (must be string or null) - only ADMIN can change this
    if (assignedToId !== undefined && userRole === 'ADMIN') {
      if (assignedToId !== null && typeof assignedToId !== 'string') {
        return NextResponse.json({ error: 'Invalid assignedToId format' }, { status: 400 });
      }
      updateData.assignedToId = assignedToId || null;
    }

    // Validate category
    if (category !== undefined) {
      if (category !== null && !VALID_CATEGORIES.includes(category)) {
        return NextResponse.json({
          error: `Invalid category. Must be one of: ${VALID_CATEGORIES.join(', ')}`
        }, { status: 400 });
      }
      updateData.category = category;
    }

    const quoteRequest = await prisma.quoteRequest.update({
      where: { id },
      data: updateData,
      include: {
        client: true,
        assignedTo: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    // Add status change communication if status was updated
    if (status) {
      await prisma.communication.create({
        data: {
          quoteRequestId: id,
          type: 'STATUS_CHANGE',
          content: `Status schimbat în: ${status}`,
          userId: session.user.id,
        },
      });
    }

    return NextResponse.json(quoteRequest);
  } catch (error) {
    console.error('Failed to update request:', error);
    return NextResponse.json({ error: 'Eroare la actualizare' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    // CSRF Protection
    const csrfError = csrfProtection(request);
    if (csrfError) return csrfError;

    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    // Validate ID format (UUID)
    if (!id || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    await prisma.quoteRequest.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete request:', error);
    return NextResponse.json({ error: 'Eroare la ștergere' }, { status: 500 });
  }
}
