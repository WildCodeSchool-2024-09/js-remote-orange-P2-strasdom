import { useState } from "react";
import { useBasket } from "../../../context/BasketContext";
import RecapitulatifServices from "../../devis/recapitulatifServices/RecapitulatifServices";
import "./ctarecapservices.css";

function CTARecapServices() {
  const [launchRecapServices, setLaunchRecapServices] = useState(false);
  const { basket } = useBasket();

  const handleClick = () => {
    setLaunchRecapServices((prev) => !prev);
  };

  return (
    <div className="ctaBasket">
      <a className="callbutton" href="tel:+33711223344" title="Appelez-nous">
        Tel
      </a>
      <button type="button" className="basketbutton" onClick={handleClick}>
        {basket.length}
      </button>
      {launchRecapServices && (
        <RecapitulatifServices onServicesChange={() => {}} />
      )}
    </div>
  );
}

export default CTARecapServices;
