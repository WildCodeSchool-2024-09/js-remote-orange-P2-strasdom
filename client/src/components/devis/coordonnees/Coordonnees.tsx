import { useState } from "react";
import "./Coordonnees.css";

interface CoordonneesProps {
  // Déclaration de l'interface CoordonneesProps pour les propriétés du composant Coordonnees
  onUserInfoChange: (info: string) => void;
}

const Coordonnees = ({ onUserInfoChange }: CoordonneesProps) => {
  // Déclaration du composant Coordonnees
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // Déclaration de la fonction handleSubmit pour gérer la soumission du formulaire
    e.preventDefault();
    const userInfo = `Nom: ${name}, Email: ${email}, Téléphone: ${phone}, Adresse: ${address}`; // Créer une chaîne d'informations utilisateur
    onUserInfoChange(userInfo);
  };

  return (
    <div className="Coordonneesmodule">
      <div className="card">
        <h1>Étape 3</h1>
        <h2>Vos informations</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nom:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // Mettre à jour le nom
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Mettre à jour l'email
              />
            </label>
          </div>
          <div>
            <label>
              Téléphone:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} // Mettre à jour le téléphone
              />
            </label>
          </div>
          <div>
            <label>
              Adresse:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)} // Mettre à jour l'adresse
              />
            </label>
          </div>
          <button type="submit" id="button" >Soumettre</button>{" "}
          {/* Bouton pour soumettre le
          formulaire */}
        </form>
      </div>
    </div>
  );
};

export default Coordonnees;
