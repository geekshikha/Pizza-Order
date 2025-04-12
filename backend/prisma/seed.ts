/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const existingPizzas = await prisma.pizza.count();
  if (existingPizzas === 0) {
    await prisma.pizza.createMany({
      data: [
        {
          name: 'Margherita',
          type: 'Margherita',
          image: '/images/margherita.jpg',
        },
        {
          name: 'Pepperoni',
          type: 'Pepperoni',
          image: '/images/pepperoni.jpg',
        },
        { name: 'Veggie', type: 'Veggie', image: '/images/veggie.jpg' },
      ],
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
