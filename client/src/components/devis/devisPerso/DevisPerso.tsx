import { useCallback, useEffect, useState } from "react";
import "../../../App.css";

// Add interface for service structure
interface Service {
  tarif_horaire: number;
  // Add other properties if needed
}

// Update import with type annotation
import services from "../../serviceModule/servicesModule";
const servicesArray: Service[] = Array.isArray(services) ? services : [];

interface DevisPersoProps {
  onPriceChange: (price: number) => void;
}

const DevisPerso = ({ onPriceChange }: DevisPersoProps) => {
  const [surface, setSurface] = useState(0);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [startDate, setStartDate] = useState("");

  const calculatePrice = useCallback(() => {
    const basePrice =
      servicesArray.reduce(
        (total: number, service: Service) => total + service.tarif_horaire,
        0,
      ) / (servicesArray.length || 1); // Prevent division by zero
    const sundaySurcharge = 1.6;

    let price = (surface / 20) * basePrice;
    if (selectedDays.includes("Dimanche")) {
      price *= sundaySurcharge;
    }
    return Number.parseFloat(price.toFixed(2));
  }, [surface, selectedDays]);

  const calculateWeeklyPrice = useCallback(() => {
    const dailyPrice = calculatePrice();
    const numberOfDays = selectedDays.length;
    return Number.parseFloat((dailyPrice * numberOfDays).toFixed(2));
  }, [calculatePrice, selectedDays]);

  useEffect(() => {
    onPriceChange(calculateWeeklyPrice());
  }, [calculateWeeklyPrice, onPriceChange]);

  useEffect(() => {
    onPriceChange(calculateWeeklyPrice());
  }, [calculateWeeklyPrice, onPriceChange]);

  const handleDayChange = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  return (
    <div className="containerDevis">
      <div className="cardDevis">
        <h1>Étape 2</h1>
        <h2>Renseignez-nous</h2>
        <div className="cardDevis-header">
          <div>
            <label>
              Surface (m²):
              <input
                type="number"
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
              />
            </label>
          </div>
          <div>
            <h3>Fréquence</h3>
            {[
              "Lundi",
              "Mardi",
              "Mercredi",
              "Jeudi",
              "Vendredi",
              "Samedi",
              "Dimanche",
            ].map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  value={day}
                  checked={selectedDays.includes(day)}
                  onChange={() => handleDayChange(day)}
                />
                {day}
              </label>
            ))}
          </div>
          <div>
            <h3>Plage horaire</h3>
            <label>
              Début:
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </label>
            <label>
              Fin:
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </label>
          </div>
          <div>
            <h3>Date de démarrage</h3>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <h3>Prix estimé par jour: {calculatePrice()}€</h3>
            <h3>Prix estimé par semaine: {calculateWeeklyPrice()}€</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevisPerso;
