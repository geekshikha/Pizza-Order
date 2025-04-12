import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PizzaService } from './pizza.service';
import { Pizza } from './pizza.model';

@Resolver(() => Pizza)
export class PizzaResolver {
  constructor(private readonly pizzaService: PizzaService) {}

  @Query(() => [Pizza])
  async availablePizzas(): Promise<Pizza[]> {
    return this.pizzaService.getPizzas();
  }

  @Mutation(() => Pizza)
  orderPizza(@Args('type') type: string): Promise<Pizza> {
    return this.pizzaService.createPizza({
      name: type,
      type: type,
      image: type,
    });
  }
}
