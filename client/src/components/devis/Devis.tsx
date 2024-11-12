import { useState } from "react";
import Confirmation from "./confirmation/Confirmation";
import Coordonnees from "./coordonnees/Coordonnees";
import DevisPerso from "./devisPerso/DevisPerso";
import RecapitulatifServices from "./recapitulatifServices/RecapitulatifServices";
import RetourIndex from "./retourIndex/RetourIndex";

function Devis() {
  const [step, setStep] = useState<number>(1);
  const [userInfo, setUserInfo] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<
    { id: number; nom: string; tarif_horaire: number }[]
  >([]);
  const [totalWeeklyPrice, setTotalWeeklyPrice] = useState<number>(0);

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function handleUserInfo(info: string) {
    setUserInfo(info);
  }

  function handleSelectedServices(
    services: { id: number; nom: string; tarif_horaire: number }[],
  ) {
    setSelectedServices(services);
  }

  function handleTotalWeeklyPrice(price: number) {
    setTotalWeeklyPrice(price);
  }

  function renderStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <RecapitulatifServices onServicesChange={handleSelectedServices} />
        );
      case 2:
        return <DevisPerso onPriceChange={handleTotalWeeklyPrice} />;
      case 3:
        return <Coordonnees onUserInfoChange={handleUserInfo} />;
      case 4:
        return (
          <Confirmation
            userInfo={userInfo}
            selectedServices={selectedServices}
            totalWeeklyPrice={totalWeeklyPrice}
          />
        );
      case 5:
        return (
          <RetourIndex
            userInfo={userInfo}
            selectedServices={selectedServices}
            totalWeeklyPrice={totalWeeklyPrice}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="devis-container">
      <div className="step-content">{renderStepContent(step)}</div>
      <div className="navigation-buttons">
        {step !== 1 && (
          <button type="button" onClick={prevStep}>
            Précédent
          </button>
        )}
        {step !== 5 && (
          <button type="button" onClick={nextStep}>
            Suivant
          </button>
        )}
      </div>
    </div>
  );
}

export default Devis;
