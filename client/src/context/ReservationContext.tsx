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
  addReservation: (reservation: Reservation) => void; // Ajout ID pour Reservation
  getReservationById: (id: number) => Reservation | undefined; // Ajout de la fonction getReservationById
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
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [reservationId, setReservationId] = useState<number>(1); // Initialisation reservation

  const addReservation = (reservation: Reservation) => {
    const newReservation = { ...reservation, id: reservationId };
    setReservations((prev) => [...prev, newReservation]);
    setReservationId((prev) => prev + 1); // Incrément reservationId
  };

  const getReservationById = (id: number) => {
    return reservations.find((reservation) => reservation.id === id); // Récupérer la réservation par ID
  };

  return (
    <ReservationContext.Provider
      value={{ reservations, addReservation, getReservationById }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
