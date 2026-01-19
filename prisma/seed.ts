import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@infinitrade.ro' },
    update: {},
    create: {
      email: 'admin@infinitrade.ro',
      name: 'Administrator',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('Created admin user:', admin.email);

  // Create a sales user
  const salesPassword = await bcrypt.hash('vanzari123', 12);

  const sales = await prisma.user.upsert({
    where: { email: 'vanzari@infinitrade.ro' },
    update: {},
    create: {
      email: 'vanzari@infinitrade.ro',
      name: 'Echipa Vânzări',
      password: salesPassword,
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
