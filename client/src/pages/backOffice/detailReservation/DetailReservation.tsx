import { useParams } from "react-router-dom";
import { useReservation } from "../../../context/ReservationContext";
import "./DetailReservation.css";

const DetailReservation = () => {
  const { id } = useParams<{ id: string }>();
  const { getReservationById } = useReservation();
  const reservation = getReservationById(Number(id));

  if (!reservation) {
    return <div>Réservation non trouvée</div>;
  }

  return (
    <div>
      <h2>Détails de la Réservation</h2>
      <p>ID: {reservation.id}</p>
      <p>Nom: {reservation.userInfo.name}</p>
      <p>Email: {reservation.userInfo.email}</p>
      <h3>Services</h3>
      <ul>
        {reservation.selectedServices.map((service) => (
          <li key={service.id}>
            {service.nom} - {service.tarif_horaire}€/h
          </li>
        ))}
      </ul>
      <p>Prix Total: {reservation.totalWeeklyPrice}€</p>
    </div>
  );
};

export default DetailReservation;
