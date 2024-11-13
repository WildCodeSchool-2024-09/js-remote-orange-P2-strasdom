import { useState } from "react";
import DataAPIComponent from "../api";
import CardService from "../serviceModule/cardService/CardService";
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
    <div className="container" id="serviceModule">
      <DataAPIComponent onDataFetched={handleDataFetched} />
      <CardService services={services} />
    </div>
  );
}

export default ServiceModule;
