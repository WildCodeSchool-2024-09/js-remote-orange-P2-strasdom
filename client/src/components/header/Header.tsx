import CTARecapServices from "../header/ctaRecapServices/ctaRecapServices";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content-left">
        <img src="/pictures/logo.jpg" className="logo" alt="logo" />
      </div>
      <div className="header-content-center">
        <h1 className="mainTitle">STRASDOM</h1>
        <div className="header-content-center-bottom">
          <li>
            <a
              href="client/src/components/serviceModule/servicesmodules.css"
              className="menu"
            >
              Nos services
            </a>
            <a
              href="client/src/components/company/Company.tsx"
              className="menu"
            >
              Notre société
            </a>
            <a
              href="client/src/components/references/References.tsx"
              className="menu"
            >
              Nos références
            </a>
          </li>
        </div>
      </div>
      <div className="header-content-right">
        <CTARecapServices />
      </div>
    </div>
  );
}

export default Header;
