import { usePizza } from "@/context/PizzaContext";

const PizzaDetails = () => {
  const { pizza } = usePizza();

  if (!pizza) {
    return (
      <p className="text-center text-red-500 text-2xl font-bold">
        No pizza selected
      </p>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-red-500 text-2xl font-bold text-center mb-4">
        Hurray! {pizza.name} Pizza is on the way!{" "}
      </h2>
    </div>
  );
};

export default PizzaDetails;
