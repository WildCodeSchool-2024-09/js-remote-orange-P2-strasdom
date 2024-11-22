import CTARecapServices from "../header/ctaRecapServices/ctaRecapServices";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src="/pictures/logo.jpg" className="logo" alt="logo" />
      <h1 className="mainTitle">STRASDOM</h1>
      <li>
        <a
          href="client/src/components/serviceModule/servicesmodules.css"
          className="menu"
        >
          Nos services
        </a>
        <a href="client/src/components/company/Company.tsx" className="menu">
          Notre société
        </a>
        <a
          href="client/src/components/references/References.tsx"
          className="menu"
        >
          Nos références
        </a>
      </li>
      <CTARecapServices />
    </div>
  );
}

export default Header;
