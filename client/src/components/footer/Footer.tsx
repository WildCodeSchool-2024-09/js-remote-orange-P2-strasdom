import "./footer.css";

function Footer() {
  const navigateToBackOffice = () => {
    const password = prompt("Please enter the password:");
    if (password === "Goûter") {
      window.location.href = "/backoffice"; // Navigate to BackOffice tab
    } else {
      alert("C'est pas l'heure");
    }
  };

  return (
    <div className="footer-container">
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
