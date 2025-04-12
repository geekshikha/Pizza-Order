/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pizza } from './pizza.model';

@Injectable()
export class PizzaService {
  constructor(private readonly prisma: PrismaService) {}

  private getImagePath(type: string): string {
    console.log('Getting image path for type:', type);
    const imageMap: Record<string, string> = {
      Margherita: '/images/margherita.jpg',
      Pepperoni: '/images/pepperoni.jpg',
      Veggie: '/images/veggie.jpg',
    };
    const path = imageMap[type] || '/images/default.jpg';
    console.log('Selected image path:', path);
    return path;
  }

  async getPizzas(): Promise<Pizza[]> {
    const pizzas = await (this.prisma as any).pizza.findMany({
      take: 3,
      orderBy: {
        name: 'desc',
      },
      distinct: ['name'],
    });
    console.log('Raw pizzas from DB:', pizzas);
    return pizzas.map((pizza: any) => {
      const imagePath = this.getImagePath(pizza.type as string);

      return {
        id: pizza.id,
        type: pizza.type,
        name: pizza.name,
        image: imagePath,
      };
    });
  }

  async createPizza(data: {
    name: string;
    type: string;
    image: string;
  }): Promise<Pizza> {
    const imagePath = this.getImagePath(data.type);
    const pizza = await (this.prisma as any).pizza.create({
      data: {
        name: data.name,
        type: data.type,
        image: imagePath, // Save the generated image path
      },
    });

    return {
      id: pizza.id,
      type: pizza.type,
      name: pizza.name,
      image: imagePath,
    };
  }
}
