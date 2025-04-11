import { createContext, useContext, useState, ReactNode } from "react";
import { Pizza } from "@/types/type";

interface PizzaContextType {
  pizza: Pizza | null;
  setPizza: (pizza: Pizza | null) => void;
}

const PizzaContext = createContext<PizzaContextType | undefined>(undefined);

export const PizzaProvider = ({ children }: { children: ReactNode }) => {
  const [pizza, setPizza] = useState<Pizza | null>(null);

  return (
    <PizzaContext.Provider value={{ pizza, setPizza }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => {
  const context = useContext(PizzaContext);
  if (!context) throw new Error("usePizza must be used within a PizzaProvider");
  return context;
};
