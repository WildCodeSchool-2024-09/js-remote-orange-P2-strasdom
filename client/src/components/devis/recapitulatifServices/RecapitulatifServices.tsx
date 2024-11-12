import { useState } from "react";
import "./RecapitulatifServices.css";

// Exemple de données pour les services sélectionnés
const initialBasket = [
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

const RecapitulatifServices = () => {
  const [basket, setBasket] = useState(initialBasket);

  const removeService = (id: number) => {
    setBasket(basket.filter((service) => service.id !== id));
  };

  const totalTarifHoraire = basket.reduce(
    (total, service) => total + service.tarif_horaire,
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
              Retirer
            </button>
          </li>
        ))}
      </ul>
      <h3>Tarif Horaire: {totalTarifHoraire}€</h3>
    </div>
  );
};

export default RecapitulatifServices;
