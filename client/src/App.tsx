// import React from "react";
import Company from "./components/company/Company";
import Devis from "./components/devis/Devis";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ReferencesCustomer from "./components/references/References";
import ServiceModule from "./components/serviceModule/servicesModule";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ServiceModule />
      <ReferencesCustomer />
      <Company />
      <Devis />
      <Footer />
    </>
  );
}

export default App;
