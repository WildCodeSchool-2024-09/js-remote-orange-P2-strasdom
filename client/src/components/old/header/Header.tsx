// import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-content-left">
          <figure>
            {/* <image src="../public/pictures/logo.jpg" alt="logo"/> */}
          </figure>
        </div>
        <div className="header-content-center">
          <h1>STRASDOM</h1>
          <div className="header-content-right">
            <h1>CAT BUTTON</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
