import { useState } from "react";
import { useReservation } from "../../../context/ReservationContext";
import Modal from "../Modal";
import "./TableauReservations.css";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (reservation: Reservation) => {
    setEditingReservation(reservation);
    setIsModalOpen(true);
  };

  const handleSaveClick = () => {
    if (editingReservation) {
      updateReservation(editingReservation);
      setEditingReservation(null);
      setIsModalOpen(false);
    }
  };

  const handleDeleteClick = (id: number) => {
    deleteReservation(id);
    setIsModalOpen(false);
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
    <div className="tableau-reservations">
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
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr
              key={reservation.id}
              onClick={() => handleRowClick(reservation)}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleRowClick(reservation);
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
              <td data-label="Services">
                <ul>
                  {reservation.selectedServices.map((service) => (
                    <li key={service.id}>
                      {`${service.nom} - ${service.tarif_horaire}€/h`}
                    </li>
                  ))}
                </ul>
              </td>
              {/* <td data-label="Actions">
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
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {editingReservation && (
          <div>
            <h2>Modifier la Réservation</h2>
            <label>
              Nom:
              <input
                type="text"
                name="name"
                value={editingReservation.userInfo.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={editingReservation.userInfo.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Téléphone:
              <input
                type="tel"
                name="phone"
                value={editingReservation.userInfo.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Adresse:
              <input
                type="text"
                name="address"
                value={editingReservation.userInfo.address}
                onChange={handleChange}
              />
            </label>
            <h3>Services</h3>
            <ul>
              {editingReservation.selectedServices.map((service, index) => (
                <li key={service.id}>
                  <label>
                    Nom:
                    <input
                      type="text"
                      name={`serviceName-${index}`}
                      value={service.nom}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Tarif Horaire:
                    <input
                      type="number"
                      name={`serviceTarif-${index}`}
                      value={service.tarif_horaire}
                      onChange={handleChange}
                    />
                  </label>
                </li>
              ))}
            </ul>
            <button type="button" onClick={handleSaveClick}>
              Sauvegarder
            </button>
            <button
              type="button"
              onClick={() => handleDeleteClick(editingReservation.id)}
            >
              Supprimer
            </button>
            <button
              type="button"
              onClick={() => handleEmailClick(editingReservation)}
            >
              Envoyer par Email
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TableauReservations;
