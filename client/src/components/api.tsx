// import { useEffect, useState } from "react";

// interface Service {
//   id: number;
//   nom: string;
//   description: string;
//   tarif_horaire: number;
//   disponibilite: boolean;
//   numberOfHours: number;
// }

// const DataAPIComponent = () => {
//   const [annonces, setAnnonces] = useState<Service[]>([]);

//   useEffect(() => {
//     fetch("https://api-strasdom.vercel.app/items", {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => setAnnonces(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Nombre d'annonces: {Service}</h1>
//     </div>
//   );
// };

// export default DataAPIComponent;
