import styles from './StatsCard.module.css';

export default function StatsCard({ title, value, change, icon, color = 'primary' }) {
  const isPositive = change >= 0;

  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.valueRow}>
          <span className={styles.value}>{value}</span>
          {change !== undefined && (
            <span className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
              {isPositive ? '+' : ''}{change}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
