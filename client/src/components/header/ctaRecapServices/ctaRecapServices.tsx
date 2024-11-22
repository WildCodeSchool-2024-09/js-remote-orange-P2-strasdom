import { useState } from "react";
import RecapitulatifServices from "../../devis/recapitulatifServices/RecapitulatifServices";
import "../../../App.css";

function CTARecapServices() {
  const [launchRecapServices, setLaunchRecapServices] = useState(false);

  const handleClick = () => {
    setLaunchRecapServices((prev) => !prev);
  };

  return (
    <div className="ctaBasket">
      <img src="/pictures/call_button.png" className="logo" alt="callButton" />
      <button type="button" onClick={handleClick}>
        <img
          src="/pictures/basket_button.png"
          className="logo"
          alt="BasketPics"
        />
      </button>
      {launchRecapServices && (
        <RecapitulatifServices onServicesChange={() => {}} />
      )}
    </div>
  );
}

export default CTARecapServices;
