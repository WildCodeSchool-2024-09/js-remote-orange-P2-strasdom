import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../../../context/BasketContext";
import "../../../App.css";

interface RecapitulatifServicesProps {
  onServicesChange: (
    services: { id: number; nom: string; tarif_horaire: number }[],
  ) => void;
}

const RecapitulatifServices = ({
  onServicesChange,
}: RecapitulatifServicesProps) => {
  const { basket, setBasket } = useBasket();
  const navigate = useNavigate();
  const [showHomeButton, setShowHomeButton] = useState(false);

  useEffect(() => {
    onServicesChange(basket);
  }, [basket, onServicesChange]);

  const removeService = (id: number) => {
    setBasket(basket.filter((service) => service.id !== id));
  };

  const totalTarifHoraire = basket.reduce(
    (total, service) => total + service.tarif_horaire,
    0,
  );

  const handleButtonClick = () => {
    navigate("/devis");
    setShowHomeButton(true);
  };

  const handleHomeButtonClick = () => {
    navigate("/");
  };

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
                ×
              </button>
            </li>
          ))}
        </ul>
        <h3>Tarif Horaire: {totalTarifHoraire}€</h3>
        <button type="button" id="buttonDevis" onClick={handleButtonClick}>
          Simuler votre devis
        </button>
        {showHomeButton && (
          <button type="button" id="buttonHome" onClick={handleHomeButtonClick}>
            Retourner à la page d'accueil
          </button>
        )}
      </div>
    </div>
  );
};

export default RecapitulatifServices;
