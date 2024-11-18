import { useState } from "react";
import "./footer.css";

function Footer() {
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === "Goûter") {
      window.location.href = "/backoffice"; // Navigate to BackOffice tab
    } else {
      alert("La suite au prochain épisode...");
    }
    setShowPasswordDialog(false);
    setPassword("");
  };

  const navigateToBackOffice = () => {
    setShowPasswordDialog(true);
  };

  return (
    <div className="footer-container">
      {showPasswordDialog && (
        <div className="password-dialog">
          <div className="password-dialog-content">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Please enter the password"
            />
            <button type="button" onClick={handlePasswordSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
      <button type="button" id="button" onClick={navigateToBackOffice}>
        Go to BackOffice
      </button>
      <button type="button" id="button">
        About Us
      </button>
      <button type="button" id="button">
        Mentions Légales
      </button>
    </div>
  );
}

export default Footer;
