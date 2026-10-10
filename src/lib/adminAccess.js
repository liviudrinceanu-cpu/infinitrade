// v63 (decizie proprietar 10.10.2026): contul SALES vede doar cererile asignate
// lui și nu exportă; ADMIN vede tot. Aceleași reguli în API și în dashboard.
export function isAdmin(session) {
  return session?.user?.role === 'ADMIN';
}

/** Filtrul Prisma pentru cererile pe care le poate vedea utilizatorul. */
export function requestScope(session) {
  return isAdmin(session) ? {} : { assignedToId: session?.user?.id ?? '__none__' };
}

/** true dacă utilizatorul poate vedea/modifica cererea dată. */
export function canAccessRequest(session, quoteRequest) {
  return isAdmin(session) || (quoteRequest?.assignedToId && quoteRequest.assignedToId === session?.user?.id);
}
