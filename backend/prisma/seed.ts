/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const pizzas = [
    { name: 'Margherita', type: 'Margherita', image: '/images/margherita.jpg' },
    { name: 'Pepperoni', type: 'Pepperoni', image: '/images/pepperoni.jpg' },
    { name: 'Veggie', type: 'Veggie', image: '/images/veggie.jpg' },
  ];

  for (const pizza of pizzas) {
    await prisma.pizza.upsert({
      where: { name: pizza.name }, // Assumes `name` is unique
      update: {}, // No updates needed for seeding
      create: {
        name: pizza.name,
        type: pizza.type,
        image: pizza.image,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
