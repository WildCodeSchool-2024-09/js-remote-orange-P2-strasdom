import { useState } from "react";
import "./Coordonnees.css";

interface CoordonneesProps {
  onUserInfoChange: (info: string) => void;
}

const Coordonnees = ({ onUserInfoChange }: CoordonneesProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userInfo = `Nom: ${name}, Email: ${email}, Téléphone: ${phone}, Adresse: ${address}`;
    onUserInfoChange(userInfo);
  };

  return (
    <div>
      <h1>Étape 3</h1>
      <h2>Vos informations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Téléphone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Adresse:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default Coordonnees;
