import { useReservation } from "../../../context/ReservationContext";
import type { UserInfo } from "../coordonnees/Coordonnees";
import "./Confirmation.css";

interface ConfirmationProps {
  // Déclaration de l'interface ConfirmationProps pour les propriétés du composant Confirmation
  userInfo: UserInfo; // Déclaration des informations utilisateur
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
      <div className="cardmodule">
        <div
          className="w3-container w3-green w3-round-xlarge"
          style={{ width: "100%" }}
        >
          4/4
        </div>
        <h1>ETAPE 3/4</h1>
        <h1>Confirmation</h1>
        <div>
          <h2>Vos informations:</h2>
          <p>Nom: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Téléphone: {userInfo.phone}</p>
          <p>Adresse: {userInfo.address}</p>
        </div>
        <div>
          <h2>Services sélectionnés:</h2>
          <ul className="recapService">
            {selectedServices.map((service) => (
              <li key={service.id}>
                {service.nom} - {service.tarif_horaire}€/h
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Prix total à la semaine:</h2>
          <p>{totalWeeklyPrice}€</p>
        </div>
        <button
          type="button"
          className="button"
          id="button"
          onClick={handleConfirm}
        >
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
