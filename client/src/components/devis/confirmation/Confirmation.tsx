import { useReservation } from "../../../context/ReservationContext";
import type { UserInfo } from "../coordonnees/Coordonnees";
import "./Confirmation.css";

interface ConfirmationProps {
  userInfo: UserInfo;
  selectedServices: { id: number; nom: string; tarif_horaire: number }[];
  totalWeeklyPrice: number;
  onConfirm: () => void;
}

const Confirmation = ({
  userInfo,
  selectedServices,
  totalWeeklyPrice,
  onConfirm,
}: ConfirmationProps) => {
  const { addReservation } = useReservation();

  const handleConfirm = () => {
    const comment = ""; // Vous pouvez initialiser le commentaire ici
    addReservation({
      id: 0,
      userInfo,
      selectedServices,
      totalWeeklyPrice,
      comment,
    }); // Inclure le champ comment
    onConfirm();
  };

  return (
    <div className="Coordonneesmodule">
      <div className="cardmodule">
        <div
          className="w3-container w3-green w3-round-xlarge"
          style={{ width: "100%" }}
        >
          1 --- 2 --- 3 --- 4
        </div>
        <h1>ETAPE 4/4</h1>
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
        <button type="button" className="button" onClick={handleConfirm}>
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
