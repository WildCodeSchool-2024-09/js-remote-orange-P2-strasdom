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
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Footer</h1>
        </div>
        <div className="footer-content-right">
          <h1>Footer</h1>
          <button type="button" onClick={navigateToBackOffice}>
            Go to BackOffice
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
