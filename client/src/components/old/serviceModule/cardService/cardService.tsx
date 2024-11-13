import type React from "react";
import { useEffect, useState } from "react"; // Importation des hooks useEffect et useState de React
import "./cardservice.css"; // Importation du fichier CSS pour les styles

// Définition du type Service pour typer les objets service
type Service = {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
  numberOfHours: number;
};

// Définition du type Props pour typer les propriétés du composant
type Props = {
  services: Service[];
};

// Déclaration d'un tableau pour stocker les services ajoutés au panier
const basket: Service[] = [];

// Définition du composant CardService en utilisant React.FC pour typer les propriétés
const CardService: React.FC<Props> = ({ services }) => {
  // Déclaration de l'état servicesWithHours avec useState, initialisé avec les services passés en props
  const [servicesWithHours, setServicesWithHours] = useState<Service[]>(services);

  // Utilisation de useEffect pour mettre à jour l'état servicesWithHours lorsque les services en props changent
  useEffect(() => {
    setServicesWithHours(services);
  }, [services]);

  // Fonction pour ajouter une heure à un service
  const handleAddHour = (id: number) => {
    setServicesWithHours((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? { ...service, numberOfHours: service.numberOfHours + 1 }
          : service
      )
    );
  };

  // Fonction pour retirer une heure d'un service
  const handleRemoveHour = (id: number) => {
    setServicesWithHours((prevServices) =>
      prevServices.map((service) =>
        service.id === id && service.numberOfHours > 0
          ? { ...service, numberOfHours: service.numberOfHours - 1 }
          : service
      )
    );
  };

  // Fonction pour ajouter un service au panier
  const handleAddToBasket = (service: Service) => {
    basket.push(service);
  };

  return (
    <div>
      {servicesWithHours.map((service) => (
        <div key={service.id} className="card">
          <h2>Service: {service.nom}</h2>
          <p>Description: {service.description}</p>
          <p>Tarif: {service.tarif_horaire} €/h</p>
          <p>Disponibilité: {service.disponibilite ? "Oui" : "Non"}</p>
          <p>Nombre d'heures: {service.numberOfHours}</p>
          <button
            type="button"
            className="button"
            id="AddingButton"
            onClick={() => handleAddHour(service.id)}
          >
            Ajouter une heure
          </button>
          <button
            type="button"
            className="button"
            id="DeleteButton"
            onClick={() => handleRemoveHour(service.id)}
          >
            Retirer une heure
          </button>
          <button
            type="button"
            className="button"
            id="AddToBasket"
            onClick={() => handleAddToBasket(service)}
          >
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardService; // Exportation du composant CardService