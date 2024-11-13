// import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content-left">
        <figure>
          <img src="/pictures/logo.jpg" className="logo" alt="logo" />
        </figure>
      </div>
      <div className="header-content-center">
        <h1>STRASDOM</h1>
        <ul>
          <li>Nos services</li>
          <li>Notre société</li>
          <li>Nos références</li>
        </ul>
        <div className="header-content-right">
          <h1>DEMANDER UN DEVIS</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
