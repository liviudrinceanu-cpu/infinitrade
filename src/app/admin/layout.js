import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Sidebar from '@/components/admin/Sidebar';
import SessionProvider from '@/components/admin/SessionProvider';
import styles from './admin.module.css';

export const metadata = {
  title: 'Admin Dashboard - Infinitrade',
  description: 'Panoul de administrare Infinitrade',
  robots: 'noindex, nofollow',
};

export default async function AdminLayout({ children }) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';

  // Login page doesn't need sidebar
  if (pathname === '/admin/login' || pathname.includes('/admin/login')) {
    return <SessionProvider>{children}</SessionProvider>;
  }

  const session = await auth();

  // If no session, middleware will redirect - just render children
  if (!session) {
    return <SessionProvider>{children}</SessionProvider>;
  }

  return (
    <SessionProvider>
      <div className={styles.layout}>
        <Sidebar user={session.user} />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}
