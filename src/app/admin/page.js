import Link from 'next/link';
import { prisma } from '@/lib/db';
import StatsCard from '@/components/admin/StatsCard';
import StatusBadge from '@/components/admin/StatusBadge';
import styles from './admin.module.css';

async function getStats() {
  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);

    const [
      totalRequests,
      newRequests,
      inProgressRequests,
      completedRequests,
      lastMonthRequests,
      previousMonthRequests,
      recentRequests,
    ] = await Promise.all([
      prisma.quoteRequest.count(),
      prisma.quoteRequest.count({ where: { status: 'NEW' } }),
      prisma.quoteRequest.count({ where: { status: 'IN_PROGRESS' } }),
      prisma.quoteRequest.count({ where: { status: 'COMPLETED' } }),
      prisma.quoteRequest.count({
        where: { createdAt: { gte: thirtyDaysAgo } },
      }),
      prisma.quoteRequest.count({
        where: {
          createdAt: { gte: sixtyDaysAgo, lt: thirtyDaysAgo },
        },
      }),
      prisma.quoteRequest.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          client: true,
          assignedTo: true,
        },
      }),
    ]);

    const change = previousMonthRequests > 0
      ? Math.round(((lastMonthRequests - previousMonthRequests) / previousMonthRequests) * 100)
      : 0;

    return {
      totalRequests,
      newRequests,
      inProgressRequests,
      completedRequests,
      change,
      recentRequests,
      error: null,
    };
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    return {
      totalRequests: 0,
      newRequests: 0,
      inProgressRequests: 0,
      completedRequests: 0,
      change: 0,
      recentRequests: [],
      error: 'Nu s-a putut conecta la baza de date. Verifică configurația.',
    };
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('ro-RO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Dashboard</h1>
        <p className={styles.pageSubtitle}>
          Bine ai venit! Iată un rezumat al activității.
        </p>
      </header>

      {stats.error && (
        <div className={styles.errorBanner}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>{stats.error}</span>
        </div>
      )}

      <div className={styles.statsGrid}>
        <StatsCard
          title="Total Cereri"
          value={stats.totalRequests}
          change={stats.change}
          color="primary"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            </svg>
          }
        />
        <StatsCard
          title="Cereri Noi"
          value={stats.newRequests}
          color="accent"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
          }
        />
        <StatsCard
          title="În Lucru"
          value={stats.inProgressRequests}
          color="warning"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          }
        />
        <StatsCard
          title="Finalizate"
          value={stats.completedRequests}
          color="success"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          }
        />
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Cereri Recente</h2>
          <Link href="/admin/cereri" className={styles.sectionLink}>
            Vezi toate
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>

        {stats.recentRequests.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Client</th>
                <th>Categorie</th>
                <th>Status</th>
                <th>Data</th>
                <th>Acțiuni</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentRequests.map((request) => (
                <tr key={request.id}>
                  <td>
                    <div className={styles.clientInfo}>
                      <span className={styles.clientName}>
                        {request.client.name}
                      </span>
                      <span className={styles.clientEmail}>
                        {request.client.email}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={styles.categoryTag}>
                      {request.category || 'General'}
                    </span>
                  </td>
                  <td>
                    <StatusBadge status={request.status} />
                  </td>
                  <td>
                    <span className={styles.dateTime}>
                      {formatDate(request.createdAt)}
                    </span>
                  </td>
                  <td>
                    <Link
                      href={`/admin/cereri/${request.id}`}
                      className={styles.actionBtn}
                    >
                      Vezi
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.emptyState}>
            <svg className={styles.emptyIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
              <path d="M10 9H8"/>
              <path d="M16 13H8"/>
              <path d="M16 17H8"/>
            </svg>
            <h3 className={styles.emptyTitle}>Nicio cerere încă</h3>
            <p className={styles.emptyText}>
              Cererile de ofertă de pe site vor apărea aici.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
