import { useEffect, useState } from "react";

interface Service {
  id: number;
  nom: string;
  description: string;
  tarif_horaire: number;
  disponibilite: boolean;
}

const DataAPIComponent: React.FC<{
  onDataFetched: (data: Service[]) => void;
}> = ({ onDataFetched }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://api-strasdom.vercel.app/items");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        onDataFetched(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
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
