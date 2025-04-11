import Image from "next/image";
import React from "react";
import { PizzaCardProps } from "@/types/type";

// Use React.memo to prevent unnecessary re-renders
const PizzaCard = React.memo(({ pizza, onOrder, disabled }: PizzaCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={() => !disabled && onOrder(pizza.name, pizza)}
    >
      <Image
        src={pizza.image}
        alt={pizza.type}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
        priority
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center">{pizza.type}</h2>
      </div>
    </div>
  );
});

// Set displayName for React DevTools and ESLint
PizzaCard.displayName = "PizzaCard";

export default PizzaCard;
