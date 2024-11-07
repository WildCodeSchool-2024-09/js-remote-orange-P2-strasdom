// import React from "react";
import "./basketmodule.css";

function BasketModule() {
  return (
    <div>
      <div className="container">
        <div className="basket-module">
          <div className="basket-module__text">
            <h2 className="basket-module__title">Votre panier</h2>
            <p className="basket-module__description">
              Vous n'avez pas d'articles dans votre panier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketModule;
