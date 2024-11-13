import { useState } from "react";
import DataAPIComponent from "../api";
import CardService from "./cardService/cardService";
import "./servicesmodules.css";

// Définition de l'interface Service pour typer les objets service
interface Service {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
  numberOfHours: number;
}

function ServiceModule() {
  const [services, setServices] = useState<Service[]>([]);
  // Déclaration de l'état services avec useState, initialisé à un tableau vide

  const handleDataFetched = (data: Service[]) => {
    // Fonction de rappel pour mettre à jour l'état services avec les données récupérées
    setServices(data);
  };

  return (
    <div className="container">
      <DataAPIComponent onDataFetched={handleDataFetched} />
      <CardService services={services} />
    </div>
  );
}

export default ServiceModule;
