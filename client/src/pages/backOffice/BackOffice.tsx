import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ReservationProvider } from "../../context/ReservationContext";
import TableauReservations from "./tableauReservations/TableauReservations";
import "./BackOffice.css";

const BackOffice = () => {
  return (
    <ReservationProvider>
      <Header />
      <div className="back-office-container">
        <h1>Back Office</h1>
        <TableauReservations />
      </div>
      <Footer />
    </ReservationProvider>
  );
};

export default BackOffice;
