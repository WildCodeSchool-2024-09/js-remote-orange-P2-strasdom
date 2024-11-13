import { useState } from "react";
import DataAPIComponent from "../api";
import BasketAddModule from "./basketaddmodule/basketaddmodule";
import CardService from "./cardService/cardService";
import "./servicesmodules.css";

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

  const handleDataFetched = (data: Service[]) => {
    setServices(data);
  };

  return (
    <div className="container">
      <DataAPIComponent onDataFetched={handleDataFetched} />
      <CardService services={services} />
      <BasketAddModule />
    </div>
  );
}

export default ServiceModule;
