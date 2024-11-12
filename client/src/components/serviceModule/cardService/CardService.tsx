import type React from "react";
import { useEffect, useState } from "react";

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

const basket: Service[] = [];

const CardService: React.FC<Props> = ({ services }) => {
  const [servicesWithHours, setServicesWithHours] =
    useState<Service[]>(services);

  useEffect(() => {
    setServicesWithHours(services);
  }, [services]);

  const handleAddHour = (id: number) => {
    setServicesWithHours((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? { ...service, numberOfHours: service.numberOfHours + 1 }
          : service,
      ),
    );
  };

  const handleRemoveHour = (id: number) => {
    setServicesWithHours((prevServices) =>
      prevServices.map((service) =>
        service.id === id && service.numberOfHours > 0
          ? { ...service, numberOfHours: service.numberOfHours - 1 }
          : service,
      ),
    );
  };

  const handleAddToBasket = (service: Service) => {
    basket.push(service);
  };

  return (
    <div>
      {servicesWithHours.map((service) => (
        <div key={service.id} className="card">
          <h2>Service: {service.nom}</h2>
          <p>Description: {service.description}</p>
          <p>Tarif: {service.tarif_horaire} €/h</p>
          <p>Disponibilité: {service.disponibilite ? "Oui" : "Non"}</p>
          <p>Nombre d'heures: {service.numberOfHours}</p>
          <button
            type="button"
            className="button"
            id="AddingButton"
            onClick={() => handleAddHour(service.id)}
          >
            Ajouter une heure
          </button>
          <button
            type="button"
            className="button"
            id="DeleteButton"
            onClick={() => handleRemoveHour(service.id)}
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
