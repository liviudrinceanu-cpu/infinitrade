import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request, { params }) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  const { type, content } = body;

  if (!type || !content) {
    return NextResponse.json(
      { error: 'Type and content are required' },
      { status: 400 }
    );
  }

  const communication = await prisma.communication.create({
    data: {
      quoteRequestId: id,
      type,
      content,
      userId: session.user.id,
    },
    include: {
      user: {
        select: { id: true, name: true },
      },
    },
  });

  return NextResponse.json(communication);
}

export async function GET(request, { params }) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

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
}
