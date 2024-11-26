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
        <ul className="nav-menu">
          <li>
            <a href="./" className="nav-link">
              Accueil
            </a>
          </li>
          <li>
            <a href="./#ourServices" className="nav-link">
              Nos Services
            </a>
          </li>
          <li>
            <a href="./#ourCompany" className="nav-link">
              Notre Société
            </a>
          </li>
          <li>
            <a href="./#ourReferencees" className="nav-link">
              Nos Références
            </a>
          </li>
        </ul>
      </nav>
      <CTARecapServices />
    </header>
  );
}

export default Header;
