import { useState } from "react";
import RecapitulatifServices from "../../devis/recapitulatifServices/RecapitulatifServices";
import "./ctaRecapServices.css";

function CTARecapServices() {
  const [launchRecapServices, setLaunchRecapServices] = useState(false);

  const handleClick = () => {
    setLaunchRecapServices((prev) => !prev);
  };

  return (
    <div className="cta-container">
      <img
        src="/pictures/call_button.png"
        className="button-img"
        alt="callButton"
      />
      <button type="button" className="button-basket" onClick={handleClick}>
        <img src="/pictures/basket_button.png" alt="BasketPics" />
      </button>
      {launchRecapServices && (
        <RecapitulatifServices onServicesChange={() => {}} />
      )}
    </div>
  );
}

export default CTARecapServices;
