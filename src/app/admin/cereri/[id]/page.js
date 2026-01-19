'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import StatusBadge from '@/components/admin/StatusBadge';
import styles from './detalii.module.css';

const statusOptions = [
  { value: 'NEW', label: 'Nouă' },
  { value: 'IN_PROGRESS', label: 'În lucru' },
  { value: 'QUOTE_SENT', label: 'Ofertă trimisă' },
  { value: 'COMPLETED', label: 'Finalizată' },
  { value: 'CANCELLED', label: 'Anulată' },
];

const commTypeLabels = {
  NOTE: 'Notă',
  EMAIL_SENT: 'Email trimis',
  CALL: 'Apel telefonic',
  STATUS_CHANGE: 'Schimbare status',
};

function formatDate(date) {
  return new Date(date).toLocaleDateString('ro-RO', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function CerereDetaliiPage() {
  const params = useParams();
  const router = useRouter();
  const [request, setRequest] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [showNoteForm, setShowNoteForm] = useState(false);

  useEffect(() => {
    fetchRequest();
    fetchUsers();
  }, [params.id]);

  const fetchRequest = async () => {
    try {
      const res = await fetch(`/api/admin/cereri/${params.id}`);
      const data = await res.json();
      setRequest(data);
    } catch (error) {
      console.error('Failed to fetch request:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const handleStatusChange = async (newStatus) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/cereri/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        fetchRequest();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleAssign = async (userId) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/cereri/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignedToId: userId || null }),
      });

      if (res.ok) {
        fetchRequest();
      }
    } catch (error) {
      console.error('Failed to assign user:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    setSaving(true);
    try {
      const res = await fetch(`/api/admin/cereri/${params.id}/comunicari`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'NOTE',
          content: newNote,
        }),
      });

      if (res.ok) {
        setNewNote('');
        setShowNoteForm(false);
        fetchRequest();
      }
    } catch (error) {
      console.error('Failed to add note:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Se încarcă...</p>
      </div>
    );
  }

  if (!request) {
    return (
      <div className={styles.notFound}>
        <h1>Cerere negăsită</h1>
        <Link href="/admin/cereri">Înapoi la cereri</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/admin/cereri" className={styles.backLink}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Înapoi la cereri
        </Link>
        <div className={styles.headerMain}>
          <div>
            <h1 className={styles.pageTitle}>Cerere #{request.id.slice(-8)}</h1>
            <p className={styles.pageSubtitle}>
              Primită pe {formatDate(request.createdAt)}
            </p>
          </div>
          <StatusBadge status={request.status} />
        </div>
      </header>

      <div className={styles.grid}>
        <div className={styles.mainColumn}>
          {/* Client Info */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Informații Client
            </h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Nume</span>
                <span className={styles.infoValue}>{request.client.name}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a href={`mailto:${request.client.email}`} className={styles.infoLink}>
                  {request.client.email}
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Telefon</span>
                {request.client.phone ? (
                  <a href={`tel:${request.client.phone}`} className={styles.infoLink}>
                    {request.client.phone}
                  </a>
                ) : (
                  <span className={styles.infoEmpty}>Nespecificat</span>
                )}
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Companie</span>
                <span className={styles.infoValue}>
                  {request.client.company || <span className={styles.infoEmpty}>Nespecificată</span>}
                </span>
              </div>
            </div>
          </section>

          {/* Request Message */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Mesajul Clientului
            </h2>
            <div className={styles.messageBox}>
              {request.category && (
                <span className={styles.categoryTag}>{request.category}</span>
              )}
              <p className={styles.messageText}>{request.message}</p>
            </div>
          </section>

          {/* Products */}
          {request.productsJson && request.productsJson.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m7.5 4.27 9 5.15"/>
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                  <path d="m3.3 7 8.7 5 8.7-5"/>
                  <path d="M12 22V12"/>
                </svg>
                Produse Solicitate
              </h2>
              <div className={styles.productsList}>
                {request.productsJson.map((product, idx) => (
                  <div key={idx} className={styles.productItem}>
                    <span className={styles.productType}>
                      {product.type === 'brand' ? 'Brand' : product.type === 'category' ? 'Categorie' : 'Produs'}
                    </span>
                    <span className={styles.productName}>{product.name}</span>
                    {product.category && (
                      <span className={styles.productCategory}>{product.category}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* AI Analysis */}
          {request.aiAnalysis && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2Z"/>
                  <path d="M12 2a10 10 0 0 1 10 10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
                Analiză AI
              </h2>
              <div className={styles.aiAnalysis}>
                <pre>{request.aiAnalysis}</pre>
              </div>
            </section>
          )}

          {/* Communications Timeline */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Timeline Comunicări
              </h2>
              <button
                onClick={() => setShowNoteForm(!showNoteForm)}
                className={styles.addNoteBtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" x2="12" y1="5" y2="19"/>
                  <line x1="5" x2="19" y1="12" y2="12"/>
                </svg>
                Adaugă notă
              </button>
            </div>

            {showNoteForm && (
              <form onSubmit={handleAddNote} className={styles.noteForm}>
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Scrie o notă..."
                  className={styles.noteInput}
                  rows={3}
                />
                <div className={styles.noteActions}>
                  <button
                    type="button"
                    onClick={() => setShowNoteForm(false)}
                    className={styles.cancelBtn}
                  >
                    Anulează
                  </button>
                  <button
                    type="submit"
                    disabled={saving || !newNote.trim()}
                    className={styles.saveBtn}
                  >
                    {saving ? 'Se salvează...' : 'Salvează'}
                  </button>
                </div>
              </form>
            )}

            <div className={styles.timeline}>
              {request.communications && request.communications.length > 0 ? (
                request.communications.map((comm) => (
                  <div key={comm.id} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineHeader}>
                        <span className={styles.timelineType}>
                          {commTypeLabels[comm.type] || comm.type}
                        </span>
                        <span className={styles.timelineDate}>
                          {formatDate(comm.createdAt)}
                        </span>
                      </div>
                      <p className={styles.timelineText}>{comm.content}</p>
                      <span className={styles.timelineUser}>
                        de {comm.user?.name || 'Sistem'}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className={styles.noComms}>Nicio comunicare înregistrată.</p>
              )}
            </div>
          </section>
        </div>

        <div className={styles.sideColumn}>
          {/* Actions */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Acțiuni</h2>

            <div className={styles.actionGroup}>
              <label className={styles.actionLabel}>Status</label>
              <select
                value={request.status}
                onChange={(e) => handleStatusChange(e.target.value)}
                disabled={saving}
                className={styles.actionSelect}
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.actionGroup}>
              <label className={styles.actionLabel}>Asignat la</label>
              <select
                value={request.assignedToId || ''}
                onChange={(e) => handleAssign(e.target.value)}
                disabled={saving}
                className={styles.actionSelect}
              >
                <option value="">Neasignat</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.actionDivider}></div>

            <a
              href={`mailto:${request.client.email}?subject=Re: Solicitare ofertă Infinitrade`}
              className={styles.emailBtn}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Trimite Email
            </a>

            {request.client.phone && (
              <a
                href={`tel:${request.client.phone}`}
                className={styles.callBtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Sună Client
              </a>
            )}
          </section>

          {/* Estimates */}
          {(request.estimatedMin || request.estimatedMax) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Estimare Preț</h2>
              <div className={styles.priceEstimate}>
                <span className={styles.priceMin}>
                  {request.estimatedMin?.toLocaleString('ro-RO')} €
                </span>
                <span className={styles.priceSeparator}>-</span>
                <span className={styles.priceMax}>
                  {request.estimatedMax?.toLocaleString('ro-RO')} €
                </span>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
