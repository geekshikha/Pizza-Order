import { Module } from '@nestjs/common';
import { PizzaResolver } from './pizza.resolver.js';
import { PizzaService } from './pizza.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  providers: [PizzaResolver, PizzaService],
})
export class PizzaModule {}
