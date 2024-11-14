import "./Confirmation.css";
import { useReservation } from "../../../context/ReservationContext";

interface ConfirmationProps {
  // Déclaration de l'interface ConfirmationProps pour les propriétés du composant Confirmation
  userInfo: string; // Déclaration des informations utilisateur
  selectedServices: { id: number; nom: string; tarif_horaire: number }[]; // Déclaration des services sélectionnés
  totalWeeklyPrice: number; // Déclaration du prix total hebdomadaire
  onConfirm: () => void; // Déclaration de la fonction onConfirm pour gérer la confirmation
}

const Confirmation = ({
  // Déclaration du composant Confirmation
  userInfo,
  selectedServices,
  totalWeeklyPrice, // Récupérer les informations utilisateur, les services sélectionnés et le prix total hebdomadaire
  onConfirm, // Récupérer la fonction onConfirm
}: ConfirmationProps) => {
  const { addReservation } = useReservation();

  const handleConfirm = () => {
    addReservation({ id: 0, userInfo, selectedServices, totalWeeklyPrice }); // Include ID
    onConfirm(); // Appeler la fonction onConfirm après confirmation
  };

  return (
    <div className="Coordonneesmodule">
      <div className="card">
        <h1>Confirmation</h1>
        <h2>Récapitulatif de la commande</h2>
        <div>
          <h3>Vos informations:</h3>
          <p>{userInfo}</p>
        </div>
        <div>
          <h3>Services sélectionnés:</h3>
          <ul>
            {selectedServices.map((service) => (
              <li key={service.id}>
                {service.nom} - {service.tarif_horaire}€/h
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Prix total à la semaine:</h3>
          <p>{totalWeeklyPrice}€</p>
        </div>
        <button type="button" id="button" onClick={handleConfirm}>
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
