import type React from "react";
import { useBasket } from "../../../context/BasketContext";
import "../../../App.css";

type Service = {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
  numberOfHours: number;
};

type Props = {
  service: Service;
};

const CardService: React.FC<Props> = ({ service }) => {
  const { basket, setBasket, removeFromBasket } = useBasket();

  const handleAddOrRemoveFromBasket = () => {
    if (basket.some((item) => item.id === service.id)) {
      removeFromBasket(service.id);
    } else {
      setBasket((prevBasket) => [...prevBasket, service]);
    }
  };

  return (
    <div className="cardService">
      <h2>Service: {service.nom}</h2>
      <p className="description">Description: {service.description}</p>
      <p className="tarif">Tarif: {service.tarif_horaire} €/h</p>
      <p className="disponibilité">
        Disponibilité: {service.disponibilite ? "Oui" : "Non"}
      </p>
      <button
        type="button"
        className="button"
        id="AddOrRemoveFromBasket"
        onClick={handleAddOrRemoveFromBasket}
      >
        {basket.some((item) => item.id === service.id)
          ? "Retirer du panier"
          : "Ajouter au panier"}
      </button>
    </div>
  );
};

export default CardService;
