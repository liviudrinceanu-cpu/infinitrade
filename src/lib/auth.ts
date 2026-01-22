import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from './db';
import { rateLimit } from './rateLimit';

const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

async function checkLoginRateLimit(email: string): Promise<{ allowed: boolean; remainingTime?: number }> {
  const result = await rateLimit(`login:${email}`, MAX_LOGIN_ATTEMPTS, LOCKOUT_DURATION);

  if (!result.allowed) {
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
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        // Check rate limit before processing (uses Upstash Redis in production)
        const rateLimitResult = await checkLoginRateLimit(email);
        if (!rateLimitResult.allowed) {
          throw new Error(`Prea multe încercări. Încercați din nou în ${rateLimitResult.remainingTime} secunde.`);
        }

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
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
