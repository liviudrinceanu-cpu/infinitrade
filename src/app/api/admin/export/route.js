import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

// Force dynamic rendering (uses auth headers)
export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const isStats = searchParams.get('stats') === 'true';
    const days = searchParams.get('days');

    let dateFilter = {};
    if (days && days !== 'all') {
      const parsedDays = parseInt(days, 10);
      // Validate days parameter bounds (1-365)
      if (isNaN(parsedDays) || parsedDays < 1 || parsedDays > 365) {
        return NextResponse.json(
          { error: 'Invalid days parameter. Must be between 1 and 365.' },
          { status: 400 }
        );
      }
      const daysAgo = new Date();
      daysAgo.setDate(daysAgo.getDate() - parsedDays);
      dateFilter = { createdAt: { gte: daysAgo } };
    }

    if (isStats) {
      // Return statistics
      const [
        total,
        newCount,
        inProgressCount,
        quoteSentCount,
        completedCount,
        cancelledCount,
        uniqueClients,
        estimates,
        byCategory,
      ] = await Promise.all([
        prisma.quoteRequest.count({ where: dateFilter }),
        prisma.quoteRequest.count({ where: { ...dateFilter, status: 'NEW' } }),
        prisma.quoteRequest.count({ where: { ...dateFilter, status: 'IN_PROGRESS' } }),
        prisma.quoteRequest.count({ where: { ...dateFilter, status: 'QUOTE_SENT' } }),
        prisma.quoteRequest.count({ where: { ...dateFilter, status: 'COMPLETED' } }),
        prisma.quoteRequest.count({ where: { ...dateFilter, status: 'CANCELLED' } }),
        prisma.quoteRequest.groupBy({
          by: ['clientId'],
          where: dateFilter,
        }),
        prisma.quoteRequest.aggregate({
          where: dateFilter,
          _sum: {
            estimatedMin: true,
            estimatedMax: true,
          },
        }),
        prisma.quoteRequest.groupBy({
          by: ['category'],
          where: dateFilter,
          _count: true,
        }),
      ]);

      const categoryStats = {};
      byCategory.forEach((item) => {
        const cat = item.category || 'General';
        categoryStats[cat] = item._count;
      });

      return NextResponse.json({
        total,
        new: newCount,
        inProgress: inProgressCount,
        quoteSent: quoteSentCount,
        completed: completedCount,
        cancelled: cancelledCount,
        uniqueClients: uniqueClients.length,
        totalEstimatedMin: estimates._sum.estimatedMin || 0,
        totalEstimatedMax: estimates._sum.estimatedMax || 0,
        byStatus: {
          NEW: newCount,
          IN_PROGRESS: inProgressCount,
          QUOTE_SENT: quoteSentCount,
          COMPLETED: completedCount,
          CANCELLED: cancelledCount,
        },
        byCategory: categoryStats,
      });
    }

    // Export as CSV
    const requests = await prisma.quoteRequest.findMany({
      where: dateFilter,
      orderBy: { createdAt: 'desc' },
      include: {
        client: true,
        assignedTo: {
          select: { name: true },
        },
      },
    });

    const statusLabels = {
      NEW: 'Nouă',
      IN_PROGRESS: 'În lucru',
      QUOTE_SENT: 'Ofertă trimisă',
      COMPLETED: 'Finalizată',
      CANCELLED: 'Anulată',
    };

    // Build CSV
    const headers = [
      'ID',
      'Data',
      'Client',
      'Email',
      'Telefon',
      'Companie',
      'Categorie',
      'Status',
      'Asignat la',
      'Estimare Min (EUR)',
      'Estimare Max (EUR)',
      'Mesaj',
    ];

    const escapeCSV = (str) => {
      if (!str) return '';
      const escaped = str.toString().replace(/"/g, '""');
      return escaped.includes(',') || escaped.includes('\n') || escaped.includes('"')
        ? `"${escaped}"`
        : escaped;
    };

    const rows = requests.map((req) => [
      req.id.slice(-8),
      new Date(req.createdAt).toLocaleString('ro-RO'),
      escapeCSV(req.client.name),
      escapeCSV(req.client.email),
      escapeCSV(req.client.phone || ''),
      escapeCSV(req.client.company || ''),
      escapeCSV(req.category || 'General'),
      statusLabels[req.status] || req.status,
      escapeCSV(req.assignedTo?.name || ''),
      req.estimatedMin || '',
      req.estimatedMax || '',
      escapeCSV(req.message.replace(/\n/g, ' ')),
    ]);

    const csv = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    // Add BOM for Excel UTF-8 support
    const csvWithBOM = '\uFEFF' + csv;

    return new NextResponse(csvWithBOM, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="cereri-infinitrade-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Failed to export data:', error);
    return NextResponse.json({ error: 'Eroare la exportarea datelor' }, { status: 500 });
  }
}
