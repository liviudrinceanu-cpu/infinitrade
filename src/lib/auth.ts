import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from './db';
import { rateLimit } from './rateLimit';

const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

// v19 (audit R1): a bcrypt hash of a random string, compared when the user
// does not exist so the response time does not reveal which e-mails exist.
// v58: același cost (12) ca parolele reale, altfel timpul diferă tot.
const DUMMY_HASH = '$2b$12$75tiDMvkOclYxKQU.vag6ugEgZowml.AhsjZR/DfDlgL3eOZY.JGG';
const MAX_LOGIN_ATTEMPTS_PER_IP = 20;

async function checkLoginRateLimit(email: string, ip?: string | null): Promise<{ allowed: boolean; remainingTime?: number }> {
  // v58: cheia de blocare pe e-mail normalizat (altfel „Admin@…” și „admin@…” erau contoare separate).
  const result = await rateLimit(`login:${email.trim().toLowerCase()}`, MAX_LOGIN_ATTEMPTS, LOCKOUT_DURATION);
  // v19: also limit per client IP, so many e-mails from one source are throttled.
  const ipResult = ip ? await rateLimit(`login-ip:${ip}`, MAX_LOGIN_ATTEMPTS_PER_IP, LOCKOUT_DURATION) : { allowed: true };

  if (!result.allowed || !ipResult.allowed) {
    // Estimate remaining time (15 minutes max)
    return { allowed: false, remainingTime: Math.ceil(LOCKOUT_DURATION / 1000) };
  }

  return { allowed: true };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  trustHost: true,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login',
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, request) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        // Check rate limit before processing (uses Upstash Redis in production)
        const forwarded = (request as Request | undefined)?.headers?.get?.('x-forwarded-for') || '';
        const ip = forwarded.split(',')[0].trim() || null;
        const rateLimitResult = await checkLoginRateLimit(email, ip);
        if (!rateLimitResult.allowed) {
          throw new Error(`Prea multe încercări. Încercați din nou în ${rateLimitResult.remainingTime} secunde.`);
        }

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          await bcrypt.compare(password, DUMMY_HASH);
          return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
});
