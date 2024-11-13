import { useEffect, useState } from "react";
import { useServices } from "../../../context/ServicesContext";
import "./RecapitulatifServices.css";

interface RecapitulatifServicesProps {
  onServicesChange: (
    services: { id: number; nom: string; tarif_horaire: number }[],
  ) => void;
}

const RecapitulatifServices = ({
  onServicesChange,
}: RecapitulatifServicesProps) => {
  const { services } = useServices();
  const [basket, setBasket] = useState(services);

  useEffect(() => {
    onServicesChange(basket);
  }, [basket, onServicesChange]);

  const removeService = (id: number) => {
    setBasket(basket.filter((service: { id: number }) => service.id !== id));
  };

  const totalTarifHoraire = basket.reduce(
    (total: number, service: { tarif_horaire: number }) =>
      total + service.tarif_horaire,
    0,
  );

  return (
    <div>
      <h1>Étape 1</h1>
      <h2>Récapitulatif des services</h2>
      <ul>
        {basket.map(
          (service: { id: number; nom: string; tarif_horaire: number }) => (
            <li key={service.id}>
              {service.nom} - {service.tarif_horaire}€/h
              <button type="button" onClick={() => removeService(service.id)}>
                {" "}
                {/* Bouton pour retirer le service Retirer */}
              </button>
            </li>
          ),
        )}
      </ul>
      <h3>Tarif Horaire: {totalTarifHoraire}€</h3>
    </div>
  );
};

export default RecapitulatifServices;
