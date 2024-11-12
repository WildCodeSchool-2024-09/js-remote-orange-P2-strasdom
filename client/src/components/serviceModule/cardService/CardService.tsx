// import React from "react";
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

const CardService: React.FC<Props> = ({ services }) => {
  return (
    <div>
      {services.map((service) => (
        <div key={service.id} className="card">
          <h2>Service: {service.nom}</h2>
          <p>Description: {service.description}</p>
          <p>Tarif: {service.tarif_horaire} €/h</p>
          <p>Disponibilité: {service.disponibilite ? "Oui" : "Non"}</p>
        </div>
      ))}
    </div>
  );
};

export default CardService;
