import type React from "react";
import { createContext, useContext, useState } from "react";

interface Service {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
  numberOfHours: number;
}

interface BasketContextProps {
  basket: Service[];
  setBasket: React.Dispatch<React.SetStateAction<Service[]>>;
  removeFromBasket: (id: number) => void;
}

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<Service[]>([]);

  const removeFromBasket = (id: number) => {
    setBasket((prevBasket) =>
      prevBasket.filter((service) => service.id !== id),
    );
  };

  return (
    <BasketContext.Provider value={{ basket, setBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
