import { useNavigate } from "react-router-dom";
import CTARecapServices from "./ctaRecapServices/ctaRecapServices";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <img
        src="/pictures/logo.jpg"
        className="logo"
        alt="Strasdom logo"
        onClick={handleLogoClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleLogoClick();
          }
        }}
        style={{ cursor: "pointer" }} // Ajouter un style de curseur pour indiquer que l'image est cliquable
      />
      <h1 className="mainTitle">STRASDOM</h1>
      <nav>
        <ul className="nav-menu" />
      </nav>
      <CTARecapServices />
    </header>
  );
}

export default Header;
