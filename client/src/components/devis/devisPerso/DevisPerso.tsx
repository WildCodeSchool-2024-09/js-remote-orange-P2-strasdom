import { useState } from "react";
import "./DevisPerso.css";
import DataAPI from "../DataAPI";

const DevisPerso = () => {
  const [surface, setSurface] = useState(0);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [startDate, setStartDate] = useState("");

  const handleDayChange = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const calculatePrice = () => {
    const basePrice =
      DataAPI.reduce(
        (total: number, service: { tarif_horaire: number }) =>
          total + service.tarif_horaire,
        0,
      ) / DataAPI.length; // Calculer le prix horaire moyen des services
    const surfaceCoefficient = 1.1; // Exemple de coefficient pour la surface
    const sundaySurcharge = 1.6; // Majoration de 60% pour le dimanche

    let price = basePrice * surfaceCoefficient ** surface;
    if (selectedDays.includes("Dimanche")) {
      price *= sundaySurcharge;
    }
    return price;
  };

  return (
    <div>
      <h1>Étape 2</h1>
      <h2>Renseignez-nous</h2>
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
        <h3>Prix estimé: {calculatePrice()}€</h3>
      </div>
    </div>
  );
};

export default DevisPerso;
