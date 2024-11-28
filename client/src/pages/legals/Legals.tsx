import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./legals.css";

function Legals() {
  return (
    <div className="legals-page">
      <Header />
      <div className="legals-container">
        <div className="legals-card">
          <h1>copyright</h1>
          <p>© Strasdom 2024. Tous droits réservés.</p>
          <br />
          <p>
            Les contenus publiés sur ce site, y compris, mais sans s’y limiter,
            les textes, images, graphiques, logos, et vidéos, sont protégés par
            les lois sur le droit d'auteur et ne peuvent être utilisés,
            reproduits, distribués, ou transmis sans l'autorisation écrite
            préalable de votre équipe de développeurs dévoués.
          </p>
          <br />

          <p>
            Pour toute demande d’autorisation ou d’information, veuillez nous
            contacter à : strasdom@strasbourg.fr.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Legals;
