import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from './db';

// Simple in-memory rate limiter for login attempts
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

function checkLoginRateLimit(email: string): { allowed: boolean; remainingTime?: number } {
  const now = Date.now();
  const attempts = loginAttempts.get(email);

  if (!attempts) {
    return { allowed: true };
  }

  // Reset if lockout period has passed
  if (now - attempts.lastAttempt > LOCKOUT_DURATION) {
    loginAttempts.delete(email);
    return { allowed: true };
  }

  if (attempts.count >= MAX_LOGIN_ATTEMPTS) {
    const remainingTime = Math.ceil((LOCKOUT_DURATION - (now - attempts.lastAttempt)) / 1000);
    return { allowed: false, remainingTime };
  }

  return { allowed: true };
}

function recordLoginAttempt(email: string, success: boolean): void {
  const now = Date.now();

  if (success) {
    loginAttempts.delete(email);
    return;
  }

  const attempts = loginAttempts.get(email);
  if (attempts) {
    attempts.count += 1;
    attempts.lastAttempt = now;
  } else {
    loginAttempts.set(email, { count: 1, lastAttempt: now });
  }
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

        // Check rate limit before processing
        const rateLimit = checkLoginRateLimit(email);
        if (!rateLimit.allowed) {
          throw new Error(`Prea multe încercări. Încercați din nou în ${rateLimit.remainingTime} secunde.`);
        }

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          recordLoginAttempt(email, false);
          return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          recordLoginAttempt(email, false);
          return null;
        }

        // Clear attempts on successful login
        recordLoginAttempt(email, true);

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
