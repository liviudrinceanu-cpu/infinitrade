import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

function validatePassword(password: string, name: string): void {
  if (!password) {
    throw new Error(`${name} environment variable is required`);
  }
  if (password.length < 12) {
    throw new Error(`${name} must be at least 12 characters long`);
  }
  if (!/[A-Z]/.test(password)) {
    throw new Error(`${name} must contain at least one uppercase letter`);
  }
  if (!/[a-z]/.test(password)) {
    throw new Error(`${name} must contain at least one lowercase letter`);
  }
  if (!/[0-9]/.test(password)) {
    throw new Error(`${name} must contain at least one number`);
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    throw new Error(`${name} must contain at least one special character`);
  }
}

async function main() {
  console.log('Seeding database...');

  // Get credentials from environment variables
  const adminPassword = process.env.ADMIN_SEED_PASSWORD;
  const salesPassword = process.env.SALES_SEED_PASSWORD;

  if (!adminPassword || !salesPassword) {
    console.error('\n⚠️  SECURITY ERROR: Missing required environment variables');
    console.error('Please set the following in your .env file:');
    console.error('  ADMIN_SEED_PASSWORD=<strong-password-min-12-chars>');
    console.error('  SALES_SEED_PASSWORD=<strong-password-min-12-chars>');
    console.error('\nPassword requirements:');
    console.error('  - Minimum 12 characters');
    console.error('  - At least one uppercase letter');
    console.error('  - At least one lowercase letter');
    console.error('  - At least one number');
    console.error('  - At least one special character (!@#$%^&* etc.)\n');
    process.exit(1);
  }

  // Validate password strength
  try {
    validatePassword(adminPassword, 'ADMIN_SEED_PASSWORD');
    validatePassword(salesPassword, 'SALES_SEED_PASSWORD');
  } catch (error) {
    console.error('\n⚠️  SECURITY ERROR:', (error as Error).message);
    process.exit(1);
  }

  // Create admin user
  const hashedAdminPassword = await bcrypt.hash(adminPassword, 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@infinitrade.ro' },
    update: {},
    create: {
      email: 'admin@infinitrade.ro',
      name: 'Administrator',
      password: hashedAdminPassword,
      role: 'ADMIN',
    },
  });

  console.log('Created admin user:', admin.email);

  // Create a sales user
  const hashedSalesPassword = await bcrypt.hash(salesPassword, 12);

  const sales = await prisma.user.upsert({
    where: { email: 'vanzari@infinitrade.ro' },
    update: {},
    create: {
      email: 'vanzari@infinitrade.ro',
      name: 'Echipa Vânzări',
      password: hashedSalesPassword,
      role: 'SALES',
    },
  });

  console.log('Created sales user:', sales.email);

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
