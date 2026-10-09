// v50: identificatorii din baza de date sunt cuid (prisma/schema.prisma,
// @default(cuid()), ex. „clx2k3…”, 25 de caractere), nu UUID. Verificarea veche
// accepta doar UUID, deci schimbarea statusului, asignarea, comunicările și
// ștergerea din panoul de administrare erau respinse cu 400. Acceptăm ambele.
const CUID = /^c[a-z0-9]{20,32}$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isValidId(id) {
  return typeof id === 'string' && (CUID.test(id) || UUID.test(id));
}
