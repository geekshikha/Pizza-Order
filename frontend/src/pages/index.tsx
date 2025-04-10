import { useMutation } from "@apollo/client";
import { ORDER_PIZZA } from "../graphql/mutations";
import { usePizza } from "@context/PizzaContext";

export default function Home() {
  const { pizza, setPizza, ordered, setOrdered } = usePizza();
  const [orderPizza] = useMutation(ORDER_PIZZA);

  const handleOrder = async () => {
    try {
      const { data } = await orderPizza({ variables: { type: "Pepperoni" } });
      setPizza(data.orderPizza); // Set pizza details
      setOrdered(true); // Mark as ordered
    } catch (error) {
      console.error("Error ordering pizza:", error);
    }
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen gap-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="backdrop-blur-sm bg-white/30 p-8 rounded-xl">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          🍕 Love At First Bite
        </h1>
        <div className="p-6 text-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
            onClick={handleOrder}
            disabled={ordered}
            style={{ cursor: ordered ? "not-allowed" : "pointer" }}
          >
            {ordered ? "Hurray! Pizza is on the way!" : "Order Now"}
            {pizza && (
              <p className="mt-4">
                Pizza: {pizza.type}, Status: {pizza.status}
              </p>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
