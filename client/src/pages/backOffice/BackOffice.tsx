import { useNavigate } from "react-router-dom";
import { ReservationProvider } from "../../context/ReservationContext"; // Import ReservationProvider
import TableauReservations from "./tableauReservations/TableauReservations";

const BackOffice = () => {
  const navigate = useNavigate();

  const handleRetourAppClick = () => {
    navigate("/"); // Naviguer vers la route racine où le composant App est rendu
  };

  return (
    <ReservationProvider>
      <div>
        <h1>Back Office</h1>
        <button type="button" onClick={handleRetourAppClick}>
          Retour à l'App
        </button>
        <TableauReservations />
      </div>
    </ReservationProvider>
  );
};

export default BackOffice;
