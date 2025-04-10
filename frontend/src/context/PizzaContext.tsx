import { createContext, useContext, useState, ReactNode } from "react";

interface Pizza {
  id: string;
  type: string;
  status: string;
}

interface PizzaContextType {
  pizza: Pizza | null;
  setPizza: (pizza: Pizza | null) => void;
  ordered: boolean;
  setOrdered: (ordered: boolean) => void;
}

const PizzaContext = createContext<PizzaContextType | undefined>(undefined);

export const PizzaProvider = ({ children }: { children: ReactNode }) => {
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const [ordered, setOrdered] = useState<boolean>(false);

  return (
    <PizzaContext.Provider value={{ pizza, setPizza, ordered, setOrdered }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => {
  const context = useContext(PizzaContext);
  if (!context) throw new Error("usePizza must be used within a PizzaProvider");
  return context;
};
