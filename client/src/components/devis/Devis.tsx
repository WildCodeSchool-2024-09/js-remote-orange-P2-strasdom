// import React from "react";
import { useState } from "react";
import Confirmation from "./confirmation/Confirmation";
import Coordonnees from "./coordonnees/Coordonnees";
import DevisPerso from "./devisPerso/DevisPerso";
import RecapitulatifServices from "./recapitulatifServices/RecapitulatifServices";
import RetourIndex from "./retourIndex/RetourIndex";

function Devis() {
  const [step, setStep] = useState<number>(1);

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function renderStepContent(step: number) {
    switch (step) {
      case 1:
        return <RecapitulatifServices />;
      case 2:
        return <DevisPerso />;
      case 3:
        return <Coordonnees />;
      case 4:
        return <Confirmation />;
      case 5:
        return <RetourIndex />;
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
