import { useNavigate } from "react-router-dom";
import { useReservation } from "../../../context/ReservationContext";
import "./TableauReservation.css"; // Import the CSS file

const TableauReservations = () => {
  const { reservations } = useReservation();
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/detailReservation/${id}`);
  };

  return (
    <div>
      <h2>Tableau des Réservations</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Prix Total</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr
              key={reservation.id}
              onClick={() => handleRowClick(reservation.id)}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleRowClick(reservation.id);
                }
              }}
              tabIndex={0}
            >
              <td data-label="ID">{reservation.id}</td>
              <td data-label="Nom">{reservation.userInfo.name}</td>
              <td data-label="Email">{reservation.userInfo.email}</td>
              <td data-label="Téléphone">{reservation.userInfo.phone}</td>
              <td data-label="Adresse">{reservation.userInfo.address}</td>
              <td data-label="Prix Total">{reservation.totalWeeklyPrice}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableauReservations;
