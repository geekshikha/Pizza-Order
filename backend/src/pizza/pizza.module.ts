import { Module } from '@nestjs/common';
import { PizzaResolver } from './pizza.resolver';
import { PizzaService } from './pizza.service';
import { PrismaModule } from '../../src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PizzaResolver, PizzaService],
})
export class PizzaModule {}
