import { Module } from '@nestjs/common';
import { PizzaResolver } from './pizza.resolver';
import { PizzaService } from './pizza.service';

@Module({
  providers: [PizzaResolver, PizzaService],
})
export class PizzaModule {}
