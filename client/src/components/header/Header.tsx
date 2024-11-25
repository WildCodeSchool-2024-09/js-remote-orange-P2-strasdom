import CTARecapServices from "./ctaRecapServices/ctaRecapServices";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/pictures/logo.jpg" className="logo" alt="Strasdom logo" />
      <h1 className="mainTitle">STRASDOM</h1>
      <CTARecapServices />
    </header>
  );
}

export default Header;
