import "./DevisPerso.css";
import { useCallback, useEffect, useState } from "react";
import { useBasket } from "../../../context/BasketContext";

interface DevisPersoProps {
  onPriceChange: (price: number) => void;
}

const DevisPerso = ({ onPriceChange }: DevisPersoProps) => {
  const [surface, setSurface] = useState(0);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [serviceHours, setServiceHours] = useState<{ [key: number]: number }>(
    {},
  );
  const { basket } = useBasket();

  const SUNDAY_SURCHARGE = 1.6;

  const handleHoursChange = (serviceId: number, increment: number) => {
    setServiceHours((prev) => ({
      ...prev,
      [serviceId]: Math.max(0, (prev[serviceId] || 0) + increment),
    }));
  };

  const handleDayChange = (day: string) => {
    setSelectedDays((prevDays) => {
      if (prevDays.includes(day)) {
        return prevDays.filter((d) => d !== day);
      }
      return [...prevDays, day];
    });
  };

  const handleSurfaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Number.parseInt(event.target.value) || 0);
    setSurface(value);
  };

  const calculateDailyRate = useCallback(
    (serviceRate: number, serviceId: number) => {
      return serviceRate * (serviceHours[serviceId] || 0);
    },
    [serviceHours],
  );

  const calculateWeeklyRate = useCallback(
    (serviceRate: number, serviceId: number) => {
      return selectedDays.reduce((total, day) => {
        const dailyRate = calculateDailyRate(serviceRate, serviceId);
        return (
          total + (day === "Sunday" ? dailyRate * SUNDAY_SURCHARGE : dailyRate)
        );
      }, 0);
    },
    [selectedDays, calculateDailyRate],
  );

  const calculateTotalWeeklyRate = useCallback(() => {
    return basket.reduce((total, service) => {
      return total + calculateWeeklyRate(service.tarif_horaire, service.id);
    }, 0);
  }, [basket, calculateWeeklyRate]);

  const calculateTotalDailyRate = useCallback(() => {
    return basket.reduce((total, service) => {
      return total + calculateDailyRate(service.tarif_horaire, service.id);
    }, 0);
  }, [basket, calculateDailyRate]);

  useEffect(() => {
    onPriceChange(calculateTotalWeeklyRate());
  }, [onPriceChange, calculateTotalWeeklyRate]);

  return (
    <div className="containerDevis">
      <div className="cardDevis">
        <div
          className="w3-container w3-green w3-round-xlarge"
          id="progressBar"
          style={{ width: "50%" }}
        >
          2/4
        </div>
        <h1>ETAPE 2/4</h1>
        <div className="surface-input">
          <label>
            Surface de la maison (m²):
            <input
              type="number"
              min="0"
              value={surface}
              onChange={handleSurfaceChange}
              placeholder="Surface en m²"
              className="surface-field"
            />
          </label>
        </div>
        <div className="days-selection">
          {[
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
            "Dimanche",
          ].map((day) => (
            <label key={day} className="day-checkbox">
              <input
                type="checkbox"
                checked={selectedDays.includes(day)}
                onChange={() => handleDayChange(day)}
              />
              {day}
            </label>
          ))}
        </div>
        <div className="services-list">
          {basket.map((service) => (
            <div key={service.id} className="service-item">
              <h3>{service.nom}</h3>
              <p>Tarif horaire: {service.tarif_horaire}€/h</p>
              <div className="hours-control">
                <button
                  type="button"
                  className="hours-button"
                  onClick={() => handleHoursChange(service.id, -1)}
                >
                  -1h
                </button>
                <span>{serviceHours[service.id] || 0}h</span>
                <button
                  type="button"
                  className="hours-button"
                  onClick={() => handleHoursChange(service.id, 1)}
                >
                  +1h
                </button>
              </div>
              <p>
                Total journalier:{" "}
                {calculateDailyRate(service.tarif_horaire, service.id)}€/jour
              </p>
              <p>
                Total hebdomadaire:{" "}
                {calculateWeeklyRate(service.tarif_horaire, service.id)}
                €/semaine
              </p>
            </div>
          ))}
        </div>
        <div className="total-summary">
          <h3>Récapitulatif des totaux</h3>
          <p>
            Total journalier de tous les services: {calculateTotalDailyRate()}
            €/jour
          </p>
          <p>
            Total hebdomadaire de tous les services:{" "}
            {calculateTotalWeeklyRate()}€/semaine
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevisPerso;
