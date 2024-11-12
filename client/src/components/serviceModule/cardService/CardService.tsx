import type React from "react";
import { useState } from "react";

import "./cardservice.css";

interface Service {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
}

type Props = {
  services: Service[];
};

const basket: Service[] = [];

const CardService: React.FC<Props> = ({ services }) => {
  const [numberOfHours, setNumberOfHours] = useState<number>(0);

  const handleAddHour = () => {
    setNumberOfHours(numberOfHours + 1);
  };

  const handleRemoveHour = () => {
    if (numberOfHours > 0) {
      setNumberOfHours(numberOfHours - 1);
    }
  };

  const handleAddToBasket = (service: Service) => {
    basket.push(service);
  };

  return (
    <div>
      {services.map((service) => (
        <div key={service.id} className="card">
          <h2>Service: {service.nom}</h2>
          <p>Description: {service.description}</p>
          <p>Tarif: {service.tarif_horaire} €/h</p>
          <p>Disponibilité: {service.disponibilite ? "Oui" : "Non"}</p>
          <p>Nombre d'heures: {numberOfHours}</p>
          <button
            type="button"
            className="button"
            id="AddingButton"
            onClick={handleAddHour}
          >
            Ajouter une heure
          </button>
          <button
            type="button"
            className="button"
            id="DeleteButton"
            onClick={handleRemoveHour}
          >
            Retirer une heure
          </button>
          <button
            type="button"
            className="button"
            id="AddToBasket"
            onClick={() => handleAddToBasket(service)}
          >
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardService;
