import { Injectable } from '@nestjs/common';
import { Pizza } from './pizza.model';

@Injectable()
export class PizzaService {
  orderPizza(type: string): Pizza {
    return {
      id: type,
      type,
      name: type,
      image: type,
    };
  }
}
