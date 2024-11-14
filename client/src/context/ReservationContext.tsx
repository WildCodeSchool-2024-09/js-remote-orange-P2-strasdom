import { createContext, useContext, useState } from "react";

interface Reservation {
  userInfo: string;
  selectedServices: { id: number; nom: string; tarif_horaire: number }[];
  totalWeeklyPrice: number;
}

interface ReservationContextProps {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
}

const ReservationContext = createContext<ReservationContextProps | undefined>(
  undefined,
);

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

  const addReservation = (reservation: Reservation) => {
    setReservations((prev) => [...prev, reservation]);
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};
