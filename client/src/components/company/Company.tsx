// import React from "react";

import "./company.css";

function Company() {
  return (
    <div className="containerAboutUS">
      <div className="company__text">
        <div className="company__logo">
          <img src="/pictures/logo.jpg" id="logo" alt="logo" />
        </div>
        <h2 className="company__title">A PROPOS DE NOUS</h2>
        <p className="company__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          natus consequuntur molestiae commodi suscipit culpa dolorem rerum
          architecto odit unde esse sed quam illo, temporibus, ducimus mollitia,
          animi expedita? Quas.
        </p>
        <div className="map">
          <img src="/pictures/map.png" className="map" alt="map" />
        </div>
        <button type="button" className="button">
          Contactez-nous
        </button>
      </div>
    </div>
  );
}

export default Company;
