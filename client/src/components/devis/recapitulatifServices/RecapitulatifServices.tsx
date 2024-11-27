import { useEffect } from "react";
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
  };

  return (
    <div className="Coordonneesmodule">
      <div className="w3-light-grey w3-round-xlarge">
        <div
          className="w3-container w3-green w3-round-xlarge"
          style={{ width: "25%" }}
        >
          1/4
        </div>
        <h1>ETAPE 1/4</h1>
        <h2 className="titleh2">Récapitulatif des services</h2>
        <ul className="recapservices">
          {basket.map((service) => (
            <li key={service.id}>
              {service.nom} - {service.tarif_horaire}€/h
              <button type="button" onClick={() => removeService(service.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
        <h3>Tarif Horaire: {totalTarifHoraire}€</h3>
      </div>
      <button type="button" id="buttonDevis" onClick={handleButtonClick}>
        Simuler votre devis
      </button>
    </div>
  );
};

export default RecapitulatifServices;
