export interface Pizza {
  id: number;
  name: string;
  type: string;
  image: string;
}

export interface OrderPizzaResponse {
  orderPizza: Pizza;
}

export interface PizzaCardProps {
  pizza: Pizza;
  onOrder: (type: string, pizza: Pizza) => void;
  disabled: boolean;
}
