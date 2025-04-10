import { Injectable } from '@nestjs/common';
import { Pizza } from './pizza.model';

@Injectable()
export class PizzaService {
  orderPizza(type: string): Pizza {
    return {
      id: Math.random().toString(36).substring(2, 9),
      type,
      status: 'Ordered',
    };
  }
}
