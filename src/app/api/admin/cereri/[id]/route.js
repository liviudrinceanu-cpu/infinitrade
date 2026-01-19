import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

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
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    const { status, assignedToId, category } = body;

    const updateData = {};

    if (status) {
      updateData.status = status;
    }

    if (assignedToId !== undefined) {
      updateData.assignedToId = assignedToId || null;
    }

    if (category !== undefined) {
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
    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    await prisma.quoteRequest.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete request:', error);
    return NextResponse.json({ error: 'Eroare la ștergere' }, { status: 500 });
  }
}
