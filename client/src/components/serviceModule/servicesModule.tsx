import { useState } from "react";
import DataAPIComponent from "../api";
import CardService from "../serviceModule/cardService/CardService";
import BasketAddModule from "./basketAddModule/BasketAddModule";
import "./servicesmodules.css";

interface Service {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
}
function ServiceModule() {
  const [services, setServices] = useState<Service[]>([]);

  return (
    <div className="container">
      <DataAPIComponent onDataFetched={setServices} />
      <CardService services={services} />
      <BasketAddModule />
    </div>
  );
}

export default ServiceModule;
