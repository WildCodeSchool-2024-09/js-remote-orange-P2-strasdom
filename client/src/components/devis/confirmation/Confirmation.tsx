import "./Confirmation.css";

interface ConfirmationProps {
  userInfo: string;
  selectedServices: { id: number; nom: string; tarif_horaire: number }[];
  totalWeeklyPrice: number;
}

const Confirmation = ({
  userInfo,
  selectedServices,
  totalWeeklyPrice,
}: ConfirmationProps) => {
  return (
    <div>
      <h1>Confirmation</h1>
      <h2>Récapitulatif de la commande</h2>
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
    </div>
  );
};

export default Confirmation;
