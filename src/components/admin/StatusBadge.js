import styles from './StatusBadge.module.css';

const statusConfig = {
  NEW: {
    label: 'Nouă',
    color: 'blue',
  },
  IN_PROGRESS: {
    label: 'În lucru',
    color: 'yellow',
  },
  QUOTE_SENT: {
    label: 'Ofertă trimisă',
    color: 'purple',
  },
  COMPLETED: {
    label: 'Finalizată',
    color: 'green',
  },
  CANCELLED: {
    label: 'Anulată',
    color: 'red',
  },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || { label: status, color: 'gray' };

  return (
    <span className={`${styles.badge} ${styles[config.color]}`}>
      {config.label}
    </span>
  );
}
