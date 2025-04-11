import { gql } from "@apollo/client";

export const PIZZAS = gql`
  query AvailablePizzas {
    availablePizzas {
      id
      type
      name
      image
    }
  }
`;
