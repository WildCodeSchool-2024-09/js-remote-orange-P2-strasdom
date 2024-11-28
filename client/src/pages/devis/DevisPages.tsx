import Devis from "../../components/devis/Devis";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./devisPages.css";

function DevisPages() {
  return (
    <div className="legals-page">
      <Header />
      <div className="legals-container">
        <Devis />
      </div>
      <Footer />
    </div>
  );
}

export default DevisPages;
