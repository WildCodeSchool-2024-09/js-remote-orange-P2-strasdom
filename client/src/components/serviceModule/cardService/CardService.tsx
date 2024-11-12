// import React from "react";
// import DataAPI from "../../API/api";
import BasketAddModule from "../basketAddModule/BasketAddModule";
import "./cardservice.css";

type Service = {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
};

type Props = {
  services: Service[];
};

function CardService({ services }: Props) {
  return (
    <div>
      {services.map((service) => (
        <div key={service.id} className="card">
          <h2>Service: {service.nom}</h2>
          <p>Description: {service.description}</p>
          <p>Tarif: {service.tarif_horaire} €/h</p>
          <button type="button" id="plusButton">
            -1
          </button>
          <button type="button" id="minusButton">
            +1
          </button>
          <p>Disponibilité: {service.disponibilite ? "Oui" : "Non"}</p>
          <BasketAddModule />
        </div>
      ))}
    </div>
  );
}

export default CardService;
