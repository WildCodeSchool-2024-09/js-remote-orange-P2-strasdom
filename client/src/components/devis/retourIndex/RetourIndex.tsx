import "./RetourIndex.css";

interface RetourIndexProps {
  // Déclaration de l'interface RetourIndexProps
  userInfo: string;
  selectedServices: { id: number; nom: string; tarif_horaire: number }[]; // Déclaration des services sélectionnés
  totalWeeklyPrice: number;
}

const RetourIndex = ({
  // Déclaration du composant RetourIndex
  userInfo,
  selectedServices,
  totalWeeklyPrice,
}: RetourIndexProps) => {
  // Récupérer les informations utilisateur, les services sélectionnés et le prix total hebdomadaire
  const handlePrint = () => {
    // Déclaration de la fonction handlePrint pour imprimer le devis
    window.print();
  };

  const handleReturnToIndex = () => {
    // Déclaration de la fonction handleReturnToIndex pour revenir à la page d'accueil
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Confirmation</h1>
      <h2>Merci pour votre confiance, voici le devis imprimable</h2>
      <div>
        <h3>Vos informations</h3>
        <p>{userInfo}</p>
      </div>
      <div>
        <h3>Services sélectionnés</h3>
        <ul>
          {selectedServices.map(
            (
              service, // Afficher les services sélectionnés
            ) => (
              <li key={service.id}>
                {service.nom} - {service.tarif_horaire}€/h
              </li>
            ),
          )}
        </ul>
      </div>
      <div>
        <h3>Prix total à la semaine</h3>
        <p>{totalWeeklyPrice}€</p>
      </div>
      <button type="button" onClick={handlePrint}>
        Imprimer le devis
      </button>
      <button type="button" onClick={handleReturnToIndex}>
        Retour à l'index
      </button>
    </div>
  );
};

export default RetourIndex;
