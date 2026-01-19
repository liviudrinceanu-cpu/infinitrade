'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import StatusBadge from '@/components/admin/StatusBadge';
import styles from '../admin.module.css';

const statusOptions = [
  { value: '', label: 'Toate statusurile' },
  { value: 'NEW', label: 'Nouă' },
  { value: 'IN_PROGRESS', label: 'În lucru' },
  { value: 'QUOTE_SENT', label: 'Ofertă trimisă' },
  { value: 'COMPLETED', label: 'Finalizată' },
  { value: 'CANCELLED', label: 'Anulată' },
];

function formatDate(date) {
  return new Date(date).toLocaleDateString('ro-RO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function CereriPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRequests();
  }, [search, statusFilter, page]);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
      });

      if (search) params.append('search', search);
      if (statusFilter) params.append('status', statusFilter);

      const res = await fetch(`/api/admin/cereri?${params}`);
      const data = await res.json();

      if (data.requests) {
        setRequests(data.requests);
        setTotalPages(data.totalPages || 1);
      }
    } catch (error) {
      console.error('Failed to fetch requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setPage(1);
  };

  return (
    <div>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Cereri de Ofertă</h1>
        <p className={styles.pageSubtitle}>
          Gestionează toate solicitările de ofertă primite de pe site.
        </p>
      </header>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Caută după nume, email sau companie..."
          value={search}
          onChange={handleSearchChange}
          className={styles.filterInput}
        />
        <select
          value={statusFilter}
          onChange={handleStatusChange}
          className={styles.filterSelect}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.section}>
        {loading ? (
          <div className={styles.emptyState}>
            <p>Se încarcă...</p>
          </div>
        ) : requests.length > 0 ? (
          <>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Companie</th>
                  <th>Categorie</th>
                  <th>Status</th>
                  <th>Asignat</th>
                  <th>Data</th>
                  <th>Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
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
                      {request.client.company || '-'}
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
                      {request.assignedTo?.name || '-'}
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

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className={styles.pageBtn}
                >
                  Anterior
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`${styles.pageBtn} ${p === page ? styles.active : ''}`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className={styles.pageBtn}
                >
                  Următor
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.emptyState}>
            <svg className={styles.emptyIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" x2="16.65" y1="21" y2="16.65"/>
            </svg>
            <h3 className={styles.emptyTitle}>Nicio cerere găsită</h3>
            <p className={styles.emptyText}>
              {search || statusFilter
                ? 'Încearcă să modifici filtrele de căutare.'
                : 'Cererile de ofertă de pe site vor apărea aici.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
