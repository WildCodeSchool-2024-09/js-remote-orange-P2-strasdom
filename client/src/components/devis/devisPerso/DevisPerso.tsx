import { useCallback, useEffect, useState } from "react";
import "../../../App.css";
import DataAPI from "../DataAPI";

interface DevisPersoProps {
  // Déclaration de l'interface DevisPersoProps pour les propriétés du composant DevisPerso
  onPriceChange: (price: number) => void; // Déclaration de la fonction onPriceChange pour mettre à jour le prix
}

const DevisPerso = ({ onPriceChange }: DevisPersoProps) => {
  // Déclaration du composant DevisPerso
  const [surface, setSurface] = useState(0); // Initialisation de la surface
  const [selectedDays, setSelectedDays] = useState<string[]>([]); // Initialisation des jours sélectionnés
  const [startTime, setStartTime] = useState("00:00"); // Initialisation de l'heure de début
  const [endTime, setEndTime] = useState("00:00"); // Initialisation de l'heure de fin
  const [startDate, setStartDate] = useState(""); // Initialisation de la date de démarrage

  const calculatePrice = useCallback(() => {
    // Déclaration de la fonction calculatePrice pour calculer le prix
    const basePrice = // Déclaration de la constante basePrice pour le prix de base
      DataAPI.reduce(
        (
          total: number,
          service: { tarif_horaire: number }, // Réduire les services pour calculer le prix horaire moyen
        ) => total + service.tarif_horaire, // Ajouter le tarif horaire du service au total
        0,
      ) / DataAPI.length; // Calculer le prix horaire moyen des services
    const sundaySurcharge = 1.6; // Majoration de 60% pour le dimanche

    let price = (surface / 20) * basePrice; // Calculer le prix en fonction de la surface et du prix horaire moyen
    if (selectedDays.includes("Dimanche")) {
      price *= sundaySurcharge; // Appliquer la majoration pour le dimanche
    }
    return Number.parseFloat(price.toFixed(2)); // Arrondir au centième
  }, [surface, selectedDays]);

  const calculateWeeklyPrice = useCallback(() => {
    // Déclaration de la fonction calculateWeeklyPrice pour calculer le prix hebdomadaire
    const dailyPrice = calculatePrice();
    const numberOfDays = selectedDays.length;
    return Number.parseFloat((dailyPrice * numberOfDays).toFixed(2)); // Arrondir au centième
  }, [calculatePrice, selectedDays]);

  useEffect(() => {
    // Déclaration de l'effet useEffect pour mettre à jour le prix
    onPriceChange(calculateWeeklyPrice());
  }, [calculateWeeklyPrice, onPriceChange]); // Mettre à jour le prix hebdomadaire

  const handleDayChange = (day: string) => {
    // Déclaration de la fonction handleDayChange pour gérer le changement de jour
    setSelectedDays(
      (prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day], // Ajouter ou retirer le jour sélectionné
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
                  checked={selectedDays.includes(day)} // Vérifier si le jour est sélectionné
                  onChange={() => handleDayChange(day)} // Appeler la fonction handleDayChange
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
                onChange={(e) => setStartTime(e.target.value)} // Mettre à jour l'heure de début
              />
            </label>
            <label>
              Fin:
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)} // Mettre à jour l'heure de fin
              />
            </label>
          </div>
          <div>
            <h3>Date de démarrage</h3>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)} // Mettre à jour la date de démarrage
            />
          </div>
          <div>
            <h3>Prix estimé par jour: {calculatePrice()}€</h3>{" "}
            {/* Afficher le prix
        estimé par jour */}
            <h3>Prix estimé par semaine: {calculateWeeklyPrice()}€</h3>{" "}
            {/* Afficher
        le prix estimé par semaine */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevisPerso;
