import RolePage, { roleMetadata } from '@/components/RolePage';
import { roles } from '@/data/roles';

export const metadata = roleMetadata(roles.proiecte);

export default function Page() {
  return <RolePage role={roles.proiecte} />;
}
