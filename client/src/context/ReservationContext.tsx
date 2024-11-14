import { createContext, useContext, useState } from "react";

interface Reservation {
  id: number; // Add ID to Reservation interface
  userInfo: string;
  selectedServices: { id: number; nom: string; tarif_horaire: number }[];
  totalWeeklyPrice: number;
}

interface ReservationContextProps {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void; // Update addReservation to include ID
  getReservationById: (id: number) => Reservation | undefined; // Add getReservationById method
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
  const [reservationId, setReservationId] = useState<number>(1); // Initialize reservationId

  const addReservation = (reservation: Reservation) => {
    const newReservation = { ...reservation, id: reservationId };
    setReservations((prev) => [...prev, newReservation]);
    setReservationId((prev) => prev + 1); // Increment reservationId
  };

  const getReservationById = (id: number) => {
    return reservations.find((reservation) => reservation.id === id);
  };

  return (
    <ReservationContext.Provider
      value={{ reservations, addReservation, getReservationById }}
    >
      {children}
    </ReservationContext.Provider>
  );
}; // Création du composant ReservationProvider pour fournir le contexte ReservationContext
