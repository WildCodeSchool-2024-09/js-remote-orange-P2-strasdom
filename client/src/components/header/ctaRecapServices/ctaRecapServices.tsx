import { useState } from "react";
import { useBasket } from "../../../context/BasketContext";
import RecapitulatifServices from "../../devis/recapitulatifServices/RecapitulatifServices";
import "./ctaRecapServices.css";

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
      <div className="basketArea">
        <button type="button" className="basketbutton" onClick={handleClick}>
          <div className="basketKPI">{basket.length}</div>
        </button>
      </div>
      {launchRecapServices && (
        <RecapitulatifServices onServicesChange={() => {}} />
      )}
    </div>
  );
}

export default CTARecapServices;
