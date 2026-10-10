import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { csrfProtection, validateContentType } from '@/lib/csrf';
import { isValidId } from '@/lib/ids';
import { isAdmin, requestScope, canAccessRequest } from '@/lib/adminAccess';

// Force dynamic rendering (uses auth headers)
export const dynamic = 'force-dynamic';

// Pagination limits
const MIN_PAGE = 1;
const MAX_PAGE = 10000;
const MIN_LIMIT = 1;
const MAX_LIMIT = 100;
const DEFAULT_LIMIT = 10;

// Valid status values for filtering
const VALID_STATUSES = ['NEW', 'IN_PROGRESS', 'QUOTE_SENT', 'COMPLETED', 'CANCELLED'];

/**
 * Parse and validate integer with bounds
 */
function parseIntWithBounds(value, defaultValue, min, max) {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) return defaultValue;
  return Math.min(max, Math.max(min, parsed));
}

export async function GET(request) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);

    // Parse pagination with bounds validation
    const page = parseIntWithBounds(searchParams.get('page'), 1, MIN_PAGE, MAX_PAGE);
    const limit = parseIntWithBounds(searchParams.get('limit'), DEFAULT_LIMIT, MIN_LIMIT, MAX_LIMIT);

    // Sanitize search input (limit length, trim)
    const rawSearch = searchParams.get('search') || '';
    const search = rawSearch.trim().slice(0, 100); // Max 100 chars for search

    // Validate status filter
    const rawStatus = searchParams.get('status') || '';
    const status = VALID_STATUSES.includes(rawStatus) ? rawStatus : '';

    const skip = (page - 1) * limit;

    const where = { ...requestScope(session) };

    if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { client: { name: { contains: search, mode: 'insensitive' } } },
        { client: { email: { contains: search, mode: 'insensitive' } } },
        { client: { company: { contains: search, mode: 'insensitive' } } },
      ];
    }

    const [requests, total] = await Promise.all([
      prisma.quoteRequest.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          client: true,
          assignedTo: {
            select: { id: true, name: true, email: true },
          },
        },
      }),
      prisma.quoteRequest.count({ where }),
    ]);

    return NextResponse.json({
      requests,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Failed to fetch requests:', error);
    return NextResponse.json(
      { error: 'Eroare la încărcarea datelor', requests: [], total: 0, page: 1, totalPages: 0 },
      { status: 500 }
    );
  }
}

// v51: ștergere în bloc din listă — body { ids: string[] } (1–100 de ID-uri
// cuid/UUID). Doar ADMIN; comunicările se șterg în cascadă (schema Prisma).
const MAX_BULK_DELETE = 100;

export async function DELETE(request) {
  try {
    const csrfError = csrfProtection(request);
    if (csrfError) return csrfError;

    const contentTypeResult = validateContentType(request);
    if (!contentTypeResult.valid) {
      return NextResponse.json({ error: contentTypeResult.error }, { status: 400 });
    }

    const session = await auth();
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json().catch(() => null);
    const ids = Array.isArray(body?.ids) ? [...new Set(body.ids)] : [];
    if (ids.length === 0 || ids.length > MAX_BULK_DELETE || !ids.every(isValidId)) {
      return NextResponse.json({ error: `Trimiteți între 1 și ${MAX_BULK_DELETE} ID-uri valide.` }, { status: 400 });
    }

    const result = await prisma.quoteRequest.deleteMany({ where: { id: { in: ids } } });
    return NextResponse.json({ success: true, deleted: result.count });
  } catch (error) {
    console.error('Error bulk-deleting quote requests:', error);
    return NextResponse.json({ error: 'Cererile nu au putut fi șterse.' }, { status: 500 });
  }
}
