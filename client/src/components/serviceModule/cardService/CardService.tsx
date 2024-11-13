import type React from "react";
import { useEffect, useState } from "react";
import { useBasket } from "../../../context/BasketContext";
import "./cardservice.css";

type Service = {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
  numberOfHours: number;
};

type Props = {
  services: Service[];
};

const CardService: React.FC<Props> = ({ services }) => {
  const [servicesWithHours, setServicesWithHours] =
    useState<Service[]>(services);
  const { setBasket } = useBasket();

  useEffect(() => {
    setServicesWithHours(services);
  }, [services]);

  const handleAddToBasket = (service: Service) => {
    setBasket((prevBasket) => [...prevBasket, service]);
  };

  return (
    <div>
      {servicesWithHours.map((service) => (
        <div key={service.id} className="cardService">
          <h2>Service: {service.nom}</h2>
          <p>Description: {service.description}</p>
          <p>Tarif: {service.tarif_horaire} €/h</p>
          <p>Disponibilité: {service.disponibilite ? "Oui" : "Non"}</p>
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
