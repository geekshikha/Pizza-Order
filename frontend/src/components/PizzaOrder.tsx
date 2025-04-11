import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { ORDER_PIZZA } from "@/graphql/mutations";
import { PIZZAS } from "@/graphql/queries";
import { Pizza, OrderPizzaResponse } from "@/types/type";
import { usePizza } from "@/context/PizzaContext";
import PizzaCard from "./PizzaCard";
import PizzaDetails from "./PizzaDetails";

interface PizzasQueryResponse {
  availablePizzas: Pizza[];
}

const PizzaOrder = () => {
  const { data: pizzasData, loading: pizzaLoading } =
    useQuery<PizzasQueryResponse>(PIZZAS);

  const pizzas = pizzasData?.availablePizzas ?? [];

  const [orderPizza, { data, error, loading: mutationLoading, reset }] =
    useMutation<OrderPizzaResponse, { type: string }>(ORDER_PIZZA);

  const { setPizza } = usePizza();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const debouncedHandleOrder = useCallback(
    debounce(async (type: string, selectedPizza: Pizza) => {
      try {
        setPizza(selectedPizza);
        await orderPizza({ variables: { type } });
      } catch (error) {
        console.error(error);
      }
    }, 500),
    [orderPizza, setPizza]
  );

  useEffect(() => {
    if (data) {
      setShowConfirmation(true);
      const timer = setTimeout(() => {
        setShowConfirmation(false);
        setPizza(null);
        reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [data, reset, setPizza]);

  if (pizzaLoading)
    return <p className="text-center mt-10">Loading pizzas...</p>;

  return (
    <div className="relative min-h-screen">
      <div className="max-w-4xl mx-auto m-10 p-4">
        <div className="mb-8">
          <PizzaDetails />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-16 transition-all duration-300 ${
            showConfirmation ? "blur-sm" : ""
          }`}
        >
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onOrder={() => debouncedHandleOrder(pizza.name, pizza)}
              disabled={mutationLoading}
            />
          ))}
        </div>

        {showConfirmation && data && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm w-full">
              <p className="text-green-600 font-bold text-xl">
                ✅ Order ID: {data.orderPizza.id}
              </p>
            </div>
          </div>
        )}

        <div className="md:col-span-3 mt-4 text-center">
          {mutationLoading && (
            <p className="text-blue-500 font-bold text-center">
              Placing your order...
            </p>
          )}
          {error && <p className="text-red-500">❌ {error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default PizzaOrder;
