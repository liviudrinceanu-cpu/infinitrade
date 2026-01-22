import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { csrfProtection } from '@/lib/csrf';

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

    const where = {};

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
