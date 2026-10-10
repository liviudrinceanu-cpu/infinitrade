'use client';

import Link from 'next/link';
import styles from './AuthorBox.module.css';

// Generează culori consistente pentru avatare bazat pe nume
function getAvatarColor(name) {
  const colors = [
    '#1a5f7a', // albastru închis
    '#2d6a4f', // verde închis
    '#7c3aed', // violet
    '#c2410c', // portocaliu închis
    '#0891b2', // cyan
    '#4338ca', // indigo
    '#b91c1c', // roșu închis
    '#0d9488', // teal
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function AuthorBox({ author }) {
  if (!author) return null;

  // Nu afișa pentru "Echipa Tehnica" generic
  if (author.id === 'echipa-tehnica') {
    return (
      <div className={styles.authorBox}>
        <div className={styles.teamBox}>
          <div className={styles.teamIcon}>👥</div>
          <div className={styles.teamInfo}>
            <span className={styles.teamLabel}>Scris de</span>
            <span className={styles.teamName}>Echipa Tehnică Infinitrade</span>
            <p className={styles.teamBio}>
              {author.bio}
            </p>
            <Link href="/echipa" className={styles.teamLink}>
              Cum lucrează echipa →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.authorBox}>
      <div className={styles.authorHeader}>
        <span className={styles.label}>Despre autor</span>
      </div>
      <div className={styles.authorContent}>
        <div
          className={styles.avatar}
          style={{ backgroundColor: getAvatarColor(author.name) }}
        >
          {getInitials(author.name)}
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>{author.name}</h4>
          <p className={styles.role}>{author.role}</p>
          {author.experience && <p className={styles.experience}>{author.experience} experiență</p>}
          <p className={styles.bio}>{author.bio}</p>

          {author.certifications && author.certifications.length > 0 && (
            <div className={styles.certifications}>
              {author.certifications.slice(0, 3).map((cert, idx) => (
                <span key={idx} className={styles.certTag}>{cert}</span>
              ))}
            </div>
          )}

          <Link href="/echipa" className={styles.profileLink}>
            Vedeți profilul complet →
          </Link>
        </div>
      </div>
    </div>
  );
}
