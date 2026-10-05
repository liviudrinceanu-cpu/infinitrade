import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Add pathname header for layout to read
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  // Skip login page completely
  if (pathname === '/admin/login') {
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  // Skip API auth routes
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

    // v34.3: pe HTTPS, cookie-ul de sesiune se numește „__Secure-authjs.session-token”.
  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET;
  const token =
    (await getToken({ req: request, secret, secureCookie: true })) ||
    (await getToken({ req: request, secret, secureCookie: false }));

  const isLoggedIn = !!token;

  // Protect admin API routes
  if (pathname.startsWith('/api/admin') && !isLoggedIn) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Protect admin routes
  if (pathname.startsWith('/admin') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
