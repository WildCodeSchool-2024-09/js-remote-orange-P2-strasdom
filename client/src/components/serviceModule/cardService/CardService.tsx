import type React from "react";
import { useEffect, useState } from "react";
import BasketAddModule from "../basketAddModule/BasketAddModule";
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

  useEffect(() => {
    setServicesWithHours(services);
  }, [services]);

  const handleAddHour = (
    id: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setServicesWithHours((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? { ...service, numberOfHours: service.numberOfHours + 1 }
          : service,
      ),
    );
  };

  const handleRemoveHour = (
    id: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setServicesWithHours((prevServices) =>
      prevServices.map((service) =>
        service.id === id && service.numberOfHours > 0
          ? { ...service, numberOfHours: service.numberOfHours - 1 }
          : service,
      ),
    );
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
            onClick={(event) => handleAddHour(service.id, event)}
          >
            Ajouter une heure
          </button>
          <button
            type="button"
            className="button"
            id="DeleteButton"
            onClick={(event) => handleRemoveHour(service.id, event)}
          >
            Retirer une heure
          </button>
          <BasketAddModule service={service} />
        </div>
      ))}
    </div>
  );
};

export default CardService;
