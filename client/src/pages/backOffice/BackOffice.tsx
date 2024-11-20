import { ReservationProvider } from "../../context/ReservationContext"; // Import ReservationProvider
import TableauReservations from "./tableauReservations/TableauReservations";

const BackOffice = () => {
  return (
    <ReservationProvider>
      <div>
        <h1>Back Office</h1>
        <TableauReservations />
      </div>
    </ReservationProvider>
  );
};

export default BackOffice;
