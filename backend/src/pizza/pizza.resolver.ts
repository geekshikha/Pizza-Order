import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Pizza } from './pizza.model';
import { pizzaList } from '../data/pizza';

@Resolver()
export class PizzaResolver {
  @Query(() => [Pizza])
  availablePizzas(): Pizza[] {
    return pizzaList;
  }

  @Mutation(() => Pizza)
  orderPizza(@Args('type') type: string): Pizza {
    const selected = pizzaList.find((p) => p.name === type);
    if (!selected) {
      throw new Error('Invalid pizza type');
    }

    return {
      id: selected.id,
      type: selected.name,
      name: selected.name,
      image: selected.image,
    };
  }
}
