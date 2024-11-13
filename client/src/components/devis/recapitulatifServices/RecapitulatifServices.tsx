import { useEffect, useState } from "react";
import "./RecapitulatifServices.css";

interface RecapitulatifServicesProps {
  onServicesChange: (
    services: { id: number; nom: string; tarif_horaire: number }[], // Déclaration de la fonction onServicesChange pour mettre à jour les services sélectionnés
  ) => void;
}

// Services test data
const initialBasket = [
  // Initialisation du panier de services
  {
    id: 1,
    nom: "Aide à Domicile",
    tarif_horaire: 20,
  },
  {
    id: 2,
    nom: "Accompagnement aux Courses",
    tarif_horaire: 15,
  },
];

const RecapitulatifServices = ({
  onServicesChange,
}: RecapitulatifServicesProps) => {
  const [basket, setBasket] = useState(initialBasket); // Initialisation du panier de services

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
    <div>
      <h1>Étape 1</h1>
      <h2>Récapitulatif des services</h2>
      <ul>
        {basket.map((service) => (
          <li key={service.id}>
            {service.nom} - {service.tarif_horaire}€/h
            <button type="button" onClick={() => removeService(service.id)}>
              {" "}
              {/* Bouton pour retirer le service Retirer */}
            </button>
          </li>
        ))}
      </ul>
      <h3>Tarif Horaire: {totalTarifHoraire}€</h3>
    </div>
  );
};

export default RecapitulatifServices;
