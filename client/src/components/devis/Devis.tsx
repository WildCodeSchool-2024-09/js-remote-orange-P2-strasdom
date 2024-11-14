import { useState } from "react";
import Confirmation from "./confirmation/Confirmation";
import Coordonnees from "./coordonnees/Coordonnees";
import DevisPerso from "./devisPerso/DevisPerso";
import RecapitulatifServices from "./recapitulatifServices/RecapitulatifServices";
import RetourIndex from "./retourIndex/RetourIndex";
import "./Devis.css";

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
          <RecapitulatifServices onServicesChange={handleSelectedServices} /> // Appel du composant RecapitulatifServices avec la fonction handleSelectedServices
        );
      case 2:
        return <DevisPerso onPriceChange={handleTotalWeeklyPrice} />; // Appel du composant DevisPerso avec la fonction handleTotalWeeklyPrice pour mettre à jour le prix total hebdomadaire
      case 3:
        return <Coordonnees onUserInfoChange={handleUserInfo} />; // Appel du composant Coordonnees avec la fonction handleUserInfo pour mettre à jour les informations utilisateur
      case 4:
        return (
          <Confirmation // Appel du composant Confirmation avec les informations utilisateur, les services sélectionnés et le prix total hebdomadaire pour confirmer le devis
            userInfo={userInfo}
            selectedServices={selectedServices}
            totalWeeklyPrice={totalWeeklyPrice}
            onConfirm={() => setStep(5)} // Passer à l'étape 5 après confirmation
          />
        );
      case 5:
        return (
          <RetourIndex // Appel du composant RetourIndex pour revenir à la page d'accueil après confirmation du devis
            userInfo={userInfo}
            selectedServices={selectedServices}
            totalWeeklyPrice={totalWeeklyPrice}
          />
        );
      default:
        return null; // Retourner null par défaut si l'étape n'est pas définie pour éviter les erreurs
    }
  }

  return (
    <div className="devis-container">
      <div className="step-content">{renderStepContent(step)}</div>
      <div className="navigation-buttons">
        {step !== 1 && step !== 5 && (
          <button type="button" onClick={prevStep}>
            Précédent
          </button>
        )}
        {step !== 4 && step !== 5 && (
          <button type="button" onClick={nextStep}>
            Suivant
          </button>
        )}
      </div>
    </div>
  );
}

export default Devis;
