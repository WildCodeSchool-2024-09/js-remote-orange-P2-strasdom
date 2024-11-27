import { useEffect } from "react";
import { useBasket } from "../../../context/BasketContext";
import "../../../App.css";

interface RecapitulatifServicesProps {
  onServicesChange: (
    services: { id: number; nom: string; tarif_horaire: number }[], // Déclaration de la fonction onServicesChange pour mettre à jour les services sélectionnés
  ) => void;
}

const RecapitulatifServices = ({
  onServicesChange,
}: RecapitulatifServicesProps) => {
  const { basket, setBasket } = useBasket();

  useEffect(() => {
    onServicesChange(basket);
  }, [basket, onServicesChange]); // Mettre à jour les services sélectionnés

  const removeService = (id: number) => {
    setBasket(basket.filter((service) => service.id !== id)); // Retirer le service du panier
  };

  const totalTarifHoraire = basket.reduce(
    (total, service) => total + service.tarif_horaire, // Ajouter le tarif horaire du service au total
    0,
  );

  return (
    <div className="container">
      <div className="card">
        <h1>Étape 1</h1>
        <h2>Récapitulatif des services</h2>
        <ul>
          {basket.map((service) => (
            <li key={service.id}>
              {service.nom} - {service.tarif_horaire}€/h
              <button type="button" onClick={() => removeService(service.id)}>
                × {/* Bouton pour retirer le service Retirer */}
              </button>
            </li>
          ))}
        </ul>
        <h3>Tarif Horaire: {totalTarifHoraire}€</h3>
      </div>
    </div>
  );
};

export default RecapitulatifServices;
