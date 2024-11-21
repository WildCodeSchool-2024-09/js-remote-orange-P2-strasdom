import { useState } from "react";
import { useReservation } from "../../../context/ReservationContext";
import "./TableauReservation.css"; // Import the CSS file

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Reservation {
  id: number;
  userInfo: UserInfo;
  selectedServices: { id: number; nom: string; tarif_horaire: number }[];
  totalWeeklyPrice: number;
}

const TableauReservations = () => {
  const { reservations, updateReservation, deleteReservation } =
    useReservation();

  const [editingReservation, setEditingReservation] =
    useState<Reservation | null>(null);

  const handleEditClick = (reservation: Reservation) => {
    setEditingReservation(reservation);
  };

  const handleSaveClick = () => {
    if (editingReservation) {
      updateReservation(editingReservation);
      setEditingReservation(null);
    }
  };

  const handleDeleteClick = (id: number) => {
    deleteReservation(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingReservation) {
      const { name, value } = e.target;
      const [field, index] = name.split("-");
      if (field === "serviceName" || field === "serviceTarif") {
        const updatedServices = [...editingReservation.selectedServices];
        const serviceIndex = Number.parseInt(index, 10);
        if (field === "serviceName") {
          updatedServices[serviceIndex].nom = value;
        } else if (field === "serviceTarif") {
          updatedServices[serviceIndex].tarif_horaire =
            Number.parseFloat(value);
        }
        setEditingReservation({
          ...editingReservation,
          selectedServices: updatedServices,
        });
      } else {
        setEditingReservation({
          ...editingReservation,
          userInfo: {
            ...editingReservation.userInfo,
            [name]: value,
          },
        });
      }
    }
  };

  const handleEmailClick = (reservation: Reservation) => {
    const subject = `Détails de la Réservation ID: ${reservation.id}`;
    const body = `
      Nom: ${reservation.userInfo.name}
      Email: ${reservation.userInfo.email}
      Téléphone: ${reservation.userInfo.phone}
      Adresse: ${reservation.userInfo.address}
      Services:
      ${reservation.selectedServices.map((service) => `${service.nom} - ${service.tarif_horaire}€/h`).join("\n")}
      Prix Total: ${reservation.totalWeeklyPrice}€
    `;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
            <th>Services</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td data-label="ID">{reservation.id}</td>
              <td data-label="Nom">
                {editingReservation?.id === reservation.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editingReservation.userInfo.name}
                    onChange={handleChange}
                  />
                ) : (
                  reservation.userInfo.name
                )}
              </td>
              <td data-label="Email">
                {editingReservation?.id === reservation.id ? (
                  <input
                    type="email"
                    name="email"
                    value={editingReservation.userInfo.email}
                    onChange={handleChange}
                  />
                ) : (
                  reservation.userInfo.email
                )}
              </td>
              <td data-label="Téléphone">
                {editingReservation?.id === reservation.id ? (
                  <input
                    type="tel"
                    name="phone"
                    value={editingReservation.userInfo.phone}
                    onChange={handleChange}
                  />
                ) : (
                  reservation.userInfo.phone
                )}
              </td>
              <td data-label="Adresse">
                {editingReservation?.id === reservation.id ? (
                  <input
                    type="text"
                    name="address"
                    value={editingReservation.userInfo.address}
                    onChange={handleChange}
                  />
                ) : (
                  reservation.userInfo.address
                )}
              </td>
              <td data-label="Prix Total">{reservation.totalWeeklyPrice}€</td>
              <td data-label="Services">
                <ul>
                  {reservation.selectedServices.map((service, index) => (
                    <li key={service.id}>
                      {editingReservation?.id === reservation.id ? (
                        <>
                          <input
                            type="text"
                            name={`serviceName-${index}`}
                            value={
                              editingReservation.selectedServices[index].nom
                            }
                            onChange={handleChange}
                          />
                          <input
                            type="number"
                            name={`serviceTarif-${index}`}
                            value={
                              editingReservation.selectedServices[index]
                                .tarif_horaire
                            }
                            onChange={handleChange}
                          />
                        </>
                      ) : (
                        `${service.nom} - ${service.tarif_horaire}€/h`
                      )}
                    </li>
                  ))}
                </ul>
              </td>
              <td data-label="Actions">
                {editingReservation?.id === reservation.id ? (
                  <button type="button" onClick={handleSaveClick}>
                    Sauvegarder
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => handleEditClick(reservation)}
                    >
                      Modifier
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteClick(reservation.id)}
                    >
                      Supprimer
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEmailClick(reservation)}
                    >
                      Envoyer par Email
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableauReservations;
