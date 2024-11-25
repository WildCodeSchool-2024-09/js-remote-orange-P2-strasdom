import { createContext, useContext, useState } from "react";
import type { UserInfo } from "../components/devis/coordonnees/Coordonnees";

interface Reservation {
  id: number;
  userInfo: UserInfo;
  selectedServices: { id: number; nom: string; tarif_horaire: number }[];
  totalWeeklyPrice: number;
}

interface ReservationContextProps {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
  updateReservation: (reservation: Reservation) => void;
  deleteReservation: (id: number) => void;
  getReservationById: (id: number) => Reservation | undefined;
}

const ReservationContext = createContext<ReservationContextProps | undefined>(
  undefined,
); // Création du contexte ReservationContext

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
};

export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [reservations, setReservations] = useState<Reservation[]>(() => {
    const savedReservations = localStorage.getItem("reservations");
    return savedReservations ? JSON.parse(savedReservations) : [];
  });
  const [reservationId, setReservationId] = useState<number>(() => {
    const savedReservationId = localStorage.getItem("reservationId");
    return savedReservationId ? JSON.parse(savedReservationId) : 1;
  });

  const addReservation = (reservation: Reservation) => {
    const newReservation = { ...reservation, id: reservationId };
    const updatedReservations = [...reservations, newReservation];
    setReservations(updatedReservations);
    setReservationId((prev) => prev + 1);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    localStorage.setItem("reservationId", JSON.stringify(reservationId + 1));
  };

  const updateReservation = (updatedReservation: Reservation) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === updatedReservation.id
        ? updatedReservation
        : reservation,
    );
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  const deleteReservation = (id: number) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== id,
    );
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  const getReservationById = (id: number) => {
    return reservations.find((reservation) => reservation.id === id); // Récupérer la réservation par ID
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        addReservation,
        updateReservation,
        deleteReservation,
        getReservationById,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
