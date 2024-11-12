// import React from "react";
import "./basketmodule.css";

const basketdata = ["contenu de votre panier"]; // variable contenant la data du panier. A modifier après avec un context.

function BasketModule() {
  return (
    <div>
      <div className="container">
        <h2 className="basket-module">Votre panier</h2>
        <p>{basketdata[0]}</p>
      </div>
    </div>
  );
}

export default BasketModule;
