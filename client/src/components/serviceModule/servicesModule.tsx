import { useEffect, useState } from "react";
import CardService from "../serviceModule/cardService/CardService";
import "./ServiceModule.css";

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

  useEffect(() => {
    fetch("https://api-strasdom.vercel.app/items", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="containerService">
      <h1 className="title" id="ourServices">
        Nos services
      </h1>
      <div className="containerCard">
        {services.map((service) => (
          <CardService key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServiceModule;
