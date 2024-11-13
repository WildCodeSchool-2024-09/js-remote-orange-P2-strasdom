import { useEffect, useState } from "react";

interface Service {
  // Définition de l'interface de l'object Service
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
  numberOfHours: number;
}

const DataAPIComponent: React.FC<{
  // Déclarer la variable qui va recevoir les données de l'API
  onDataFetched: (data: Service[]) => void;
}> = ({ onDataFetched }) => {
  const [loading, setLoading] = useState<boolean>(true);
  // Déclarer les variables de chargement
  const [error, setError] = useState<string | null>(null);
  // Déclarer les variables d'erreur

  useEffect(() => {
    // Utiliser useEffect pour appeler l'API
    const fetchServices = async () => {
      try {
        // Essayer de récupérer les données de l'API
        const response = await fetch("https://api-strasdom.vercel.app/items"); // Effectuer une requête GET à l'API pour récupérer les services
        if (!response.ok) {
          // Vérifier si la réponse est correcte
          throw new Error(response.statusText);
        }
        const data = await response.json();
        // Convertir la réponse en JSON

        const servicesWithHours = data.map((service: Service) => ({
          // Ajouter une propriété numberOfHours à chaque service
          ...service,
          numberOfHours: 0,
        }));

        onDataFetched(servicesWithHours);
        // Appeler la fonction onDataFetched avec les services modifiés
      } catch (error) {
        // Gérer les erreurs
        console.error("Error fetching data:", error);
        // Gérer les erreurs en les affichant dans la console et en mettant à jour l'état d'erreur
        setError((error as Error).message);
      } finally {
        // Arrêter l'état de chargement
        setLoading(false);
      }
    };

    fetchServices();
    // Appeler la fonction fetchServices qui est repsonsable de récupérer les données de l'API
  }, [onDataFetched]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return null;
};

export default DataAPIComponent;
