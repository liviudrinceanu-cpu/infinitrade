// v27: intrări pe roluri pe prima pagină (achiziții / mentenanță / proiecte).
// Server component, fără animații (sub hero, nu trebuie să întârzie LCP).
import Link from 'next/link';
import { FileCheck, Wrench, Building2, ArrowRight } from 'lucide-react';
import { roleList } from '@/data/roles';
import { homeClientReferences, publicProcurementStats } from '@/data/company';
import styles from './RoleEntry.module.css';

const icons = { FileCheck, Wrench, Building2 };

export default function RoleEntry() {
  return (
    <section className={styles.section} aria-labelledby="roluri-titlu" id="roluri">
      <div className={styles.container}>
        <h2 id="roluri-titlu" className={styles.title}>Pentru cine lucrăm</h2>
        <p className={styles.subtitle}>
          Companii industriale și instituții: fiecare departament găsește aici ce îi trebuie
          pentru o decizie, fără să ne sune mai întâi.
        </p>
        <div className={styles.grid}>
          {roleList.map((r) => {
            const Icon = icons[r.icon] || FileCheck;
            return (
              <Link key={r.slug} href={`/${r.slug}`} className={styles.card}>
                <Icon size={28} aria-hidden="true" className={styles.icon} />
                <h3>{r.cardTitle}</h3>
                <p>{r.cardText}</p>
                <span className={styles.more}>
                  {r.navLabel} <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
        <p className={styles.clients}>
          Printre clienții noștri: <strong>{homeClientReferences.join(' · ')}</strong>
          <br />
          Peste {publicProcurementStats.count} de achiziții publice atribuite prin SEAP ({publicProcurementStats.period}),{' '}
          <a href={publicProcurementStats.sourceUrl} target="_blank" rel="noopener noreferrer">verificabile public</a>.
        </p>
      </div>
    </section>
  );
}
