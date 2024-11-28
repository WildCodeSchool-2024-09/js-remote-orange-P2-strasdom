import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ReservationProvider } from "../../context/ReservationContext";
import TableauReservations from "./tableauReservations/TableauReservations";

const BackOffice = () => {
  const navigate = useNavigate();

  const handleRetourAppClick = () => {
    navigate("/"); // Naviguer vers la route racine où le composant App est rendu
  };

  return (
    <ReservationProvider>
      <Header />
      <div>
        <h1>Back Office</h1>
        <button type="button" onClick={handleRetourAppClick}>
          Retour à l'App
        </button>
        <TableauReservations />
      </div>
      <Footer />
    </ReservationProvider>
  );
};

export default BackOffice;
