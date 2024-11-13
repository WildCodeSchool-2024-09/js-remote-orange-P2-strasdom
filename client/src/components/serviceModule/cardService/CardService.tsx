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
    setBasket((prevBasket) => {
      if (prevBasket.some((item) => item.id === service.id)) {
        alert("Service déjà ajouté"); // Show alert if the service is already in the basket
        return prevBasket; // If the service is already in the basket, return the current basket
      }
      return [...prevBasket, service]; // Otherwise, add the service to the basket
    });
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
