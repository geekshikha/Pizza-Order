import { gql } from "@apollo/client";

export const ORDER_PIZZA = gql`
  mutation OrderPizza($type: String!) {
    orderPizza(type: $type) {
      id
      type
      status
    }
  }
`;
