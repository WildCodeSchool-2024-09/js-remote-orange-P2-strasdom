// import React from "react";
import DataAPI from "../API/api";
import CardService from "../serviceModule/cardService/CardService";
// import BasketAddModule from "./basketAddModule/BasketAddModule";
import "./servicesmodules.css";

function ServiceModule() {
  return (
    <div className="container">
      <CardService services={DataAPI} />
    </div>
  );
}

export default ServiceModule;
