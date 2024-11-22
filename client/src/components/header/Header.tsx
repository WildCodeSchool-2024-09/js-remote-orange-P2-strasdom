import { Link } from "react-router-dom";
import CTARecapServices from "./ctaRecapServices/ctaRecapServices";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/pictures/logo.jpg" className="logo" alt="Strasdom logo" />
      <h1 className="mainTitle">STRASDOM</h1>
      <nav>
        <ul className="nav-menu">
          <li>
            <Link to="/services" className="menu-item">
              Nos services
            </Link>
          </li>
          <li>
            <Link to="/company" className="menu-item">
              Notre société
            </Link>
          </li>
          <li>
            <Link to="/references" className="menu-item">
              Nos références
            </Link>
          </li>
        </ul>
      </nav>
      <CTARecapServices />
    </header>
  );
}

export default Header;
