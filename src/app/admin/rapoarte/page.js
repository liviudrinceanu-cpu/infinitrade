'use client';

import { useState, useEffect } from 'react';
import styles from './rapoarte.module.css';

const statusLabels = {
  NEW: 'Nouă',
  IN_PROGRESS: 'În lucru',
  QUOTE_SENT: 'Ofertă trimisă',
  COMPLETED: 'Finalizată',
  CANCELLED: 'Anulată',
};

export default function RapoartePage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('30');
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    fetchStats();
  }, [dateRange]);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/export?stats=true&days=${dateRange}`);
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      const res = await fetch(`/api/admin/export?days=${dateRange}`);
      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cereri-infinitrade-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error('Failed to export:', error);
      alert('Eroare la export. Te rugăm să încerci din nou.');
    } finally {
      setExporting(false);
    }
  };

  const getStatusPercentage = (count) => {
    if (!stats?.total || stats.total === 0) return 0;
    return Math.round((count / stats.total) * 100);
  };

  return (
    <div>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Rapoarte</h1>
          <p className={styles.pageSubtitle}>
            Statistici și exporturi pentru cereri de ofertă.
          </p>
        </div>
        <div className={styles.headerActions}>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className={styles.dateSelect}
          >
            <option value="7">Ultimele 7 zile</option>
            <option value="30">Ultimele 30 zile</option>
            <option value="90">Ultimele 90 zile</option>
            <option value="365">Ultimul an</option>
            <option value="all">Toate</option>
          </select>
          <button
            onClick={handleExport}
            disabled={exporting}
            className={styles.exportBtn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            {exporting ? 'Se exportă...' : 'Export CSV'}
          </button>
        </div>
      </header>

      {loading ? (
        <div className={styles.loading}>Se încarcă...</div>
      ) : stats ? (
        <>
          {/* Overview Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                </svg>
              </div>
              <div className={styles.statContent}>
                <span className={styles.statValue}>{stats.total}</span>
                <span className={styles.statLabel}>Total Cereri</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.success}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className={styles.statContent}>
                <span className={styles.statValue}>{stats.completed}</span>
                <span className={styles.statLabel}>Finalizate</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.warning}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className={styles.statContent}>
                <span className={styles.statValue}>{stats.inProgress}</span>
                <span className={styles.statLabel}>În Lucru</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.info}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className={styles.statContent}>
                <span className={styles.statValue}>{stats.uniqueClients}</span>
                <span className={styles.statLabel}>Clienți Unici</span>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {/* Status Breakdown */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Distribuție pe Status</h2>
              <div className={styles.statusList}>
                {Object.entries(stats.byStatus || {}).map(([status, count]) => (
                  <div key={status} className={styles.statusItem}>
                    <div className={styles.statusInfo}>
                      <span className={styles.statusLabel}>{statusLabels[status] || status}</span>
                      <span className={styles.statusCount}>{count}</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={`${styles.progressFill} ${styles[status.toLowerCase()]}`}
                        style={{ width: `${getStatusPercentage(count)}%` }}
                      ></div>
                    </div>
                    <span className={styles.statusPercent}>{getStatusPercentage(count)}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Top Categorii</h2>
              {stats.byCategory && Object.keys(stats.byCategory).length > 0 ? (
                <div className={styles.categoryList}>
                  {Object.entries(stats.byCategory)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 10)
                    .map(([category, count]) => (
                      <div key={category} className={styles.categoryItem}>
                        <span className={styles.categoryName}>
                          {category || 'General'}
                        </span>
                        <span className={styles.categoryCount}>{count}</span>
                      </div>
                    ))}
                </div>
              ) : (
                <p className={styles.noData}>Nicio categorie înregistrată.</p>
              )}
            </div>
          </div>

          {/* Estimated Values */}
          {stats.totalEstimatedMin > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Valoare Estimată Totală</h2>
              <div className={styles.estimateBox}>
                <span className={styles.estimateValue}>
                  {stats.totalEstimatedMin?.toLocaleString('ro-RO')} € - {stats.totalEstimatedMax?.toLocaleString('ro-RO')} €
                </span>
                <p className={styles.estimateNote}>
                  Bazat pe estimările AI pentru toate cererile din perioada selectată.
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={styles.error}>Nu s-au putut încărca datele.</div>
      )}
    </div>
  );
}
