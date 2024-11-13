import { useState } from "react";
import { ServicesProvider } from "../../context/ServicesContext";
import Confirmation from "./confirmation/Confirmation";
import Coordonnees from "./coordonnees/Coordonnees";
import DevisPerso from "./devisPerso/DevisPerso";
import RecapitulatifServices from "./recapitulatifServices/RecapitulatifServices";
import RetourIndex from "./retourIndex/RetourIndex";
// import 'Devis.css';

function Devis() {
  // Déclaration du composant Devis
  const [step, setStep] = useState<number>(1);
  const [userInfo, setUserInfo] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<
    { id: number; nom: string; tarif_horaire: number }[]
  >([]);
  const [totalWeeklyPrice, setTotalWeeklyPrice] = useState<number>(0);

  function nextStep() {
    // Déclaration de la fonction nextStep pour passer à l'étape suivante
    setStep(step + 1);
  }

  function prevStep() {
    // Déclaration de la fonction prevStep pour revenir à l'étape précédente
    setStep(step - 1);
  }

  function handleUserInfo(info: string) {
    // Déclaration de la fonction handleUserInfo pour mettre à jour les informations utilisateur
    setUserInfo(info);
  }

  function handleSelectedServices(
    // Déclaration de la fonction handleSelectedServices pour mettre à jour les services sélectionnés
    services: { id: number; nom: string; tarif_horaire: number }[],
  ) {
    setSelectedServices(services); // Mettre à jour les services sélectionnés
  }

  function handleTotalWeeklyPrice(price: number) {
    // Déclaration de la fonction handleTotalWeeklyPrice pour mettre à jour le prix total hebdomadaire
    setTotalWeeklyPrice(price);
  }

  function renderStepContent(step: number) {
    // Déclaration de la fonction renderStepContent récapitulant les étapes du devis
    switch (step) {
      case 1:
        return (
          <RecapitulatifServices onServicesChange={handleSelectedServices} />
        ); // Récupérer les services sélectionnés
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
    <ServicesProvider>
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
    </ServicesProvider>
  );
}

export default Devis;
