import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { csrfProtection, validateContentType } from '@/lib/csrf';
import { checkName, checkEmail, passwordProblems } from '@/lib/formValidation';

// Valid roles (must match Prisma enum)
const VALID_ROLES = ['ADMIN', 'SALES'];

// UUID regex pattern for ID validation
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// v33: regula parolei vine din src/lib/formValidation.js (aceeași în pagină).
const validatePassword = passwordProblems;

export async function GET(request) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'Neautorizat: autentificați-vă din nou ca administrator.' }, { status: 401 });
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        _count: {
          select: {
            quoteRequests: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ error: 'Eroare la încărcarea datelor', users: [] }, { status: 500 });
  }
}

export async function POST(request) {
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

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Neautorizat: autentificați-vă din nou ca administrator.' }, { status: 401 });
    }

    const body = await request.json();
    const { password, role } = body;
    const nameCheck = checkName(body.name);
    const emailCheck = checkEmail(body.email);
    const missing = [nameCheck, emailCheck].filter((r) => !r.ok).map((r) => r.error);
    if (!password) missing.push('Completați parola.');
    if (missing.length) {
      return NextResponse.json({ error: missing.join(' ') }, { status: 400 });
    }
    const name = nameCheck.value;
    const email = emailCheck.value;

    // Validate role if provided
    if (role && !VALID_ROLES.includes(role)) {
      return NextResponse.json(
        { error: `Rol invalid. Trebuie să fie unul dintre: ${VALID_ROLES.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate password strength
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      return NextResponse.json(
        { error: passwordErrors.join(' ') },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Un utilizator cu acest email există deja' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: role || 'SALES',
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Failed to create user:', error);
    return NextResponse.json({ error: 'Eroare la crearea utilizatorului' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    // CSRF Protection
    const csrfError = csrfProtection(request);
    if (csrfError) return csrfError;

    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Neautorizat: autentificați-vă din nou ca administrator.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Lipsește identificatorul utilizatorului.' }, { status: 400 });
    }

    // Validate ID format (UUID)
    if (!UUID_PATTERN.test(id)) {
      return NextResponse.json({ error: 'Identificatorul utilizatorului nu este valid.' }, { status: 400 });
    }

    // Prevent deleting own account
    if (id === session.user.id) {
      return NextResponse.json(
        { error: 'Nu poți șterge propriul cont' },
        { status: 400 }
      );
    }

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete user:', error);
    return NextResponse.json({ error: 'Eroare la ștergerea utilizatorului' }, { status: 500 });
  }
}
