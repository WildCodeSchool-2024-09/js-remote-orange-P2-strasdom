// import React from "react";
import "./basketaddmodule.css";

const basketdata = ["contenu de votre panier"]; // variable contenant la data du panier. A modifier après avec un context.

function BasketAddModule() {
  return (
    <div>
      <div className="basketButtonModule">
        <button
          type="button"
          className="button"
          onClick={() => basketdata.push}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default BasketAddModule;
