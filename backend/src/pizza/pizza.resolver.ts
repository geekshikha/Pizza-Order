import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PizzaService } from './pizza.service';
import { Pizza } from './pizza.model';

@Resolver(() => Pizza)
export class PizzaResolver {
  constructor(private readonly pizzaService: PizzaService) {}

  // Add a Query (e.g., get a default pizza)
  @Query(() => Pizza)
  async getPizza(): Promise<Pizza> {
    return {
      id: 'default-id',
      type: 'Margherita',
      status: 'Ordered',
    };
  }

  @Mutation(() => Pizza)
  async orderPizza(
    @Args('type', { type: () => String }) type: string,
  ): Promise<Pizza> {
    return this.pizzaService.orderPizza(type);
  }
}
