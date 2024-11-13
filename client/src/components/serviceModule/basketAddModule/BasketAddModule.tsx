import type React from "react";
import { useBasket } from "../../../context/BasketContext";
import "./basketaddmodule.css";

const BasketAddModule = ({ service }: { service: Service }) => {
  const { basket, setBasket } = useBasket();

  const handleAddToBasket = (
    service: Service,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setBasket((prevBasket) => [...prevBasket, service]);
  };

  return (
    <div>
      <div className="basketButtonModule">
        <button
          type="button"
          className="button"
          onClick={(event) => handleAddToBasket(service, event)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default BasketAddModule;
