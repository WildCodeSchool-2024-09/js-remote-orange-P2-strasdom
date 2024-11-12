import "./RetourIndex.css";

interface RetourIndexProps {
  userInfo: string;
  selectedServices: { id: number; nom: string; tarif_horaire: number }[];
  totalWeeklyPrice: number;
}

const RetourIndex = ({
  userInfo,
  selectedServices,
  totalWeeklyPrice,
}: RetourIndexProps) => {
  const handlePrint = () => {
    window.print();
  };

  const handleReturnToIndex = () => {
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
          {selectedServices.map((service) => (
            <li key={service.id}>
              {service.nom} - {service.tarif_horaire}€/h
            </li>
          ))}
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
