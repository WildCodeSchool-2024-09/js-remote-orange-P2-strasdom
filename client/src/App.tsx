import Company from "./components/company/Company";
import Devis from "./components/devis/Devis";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ReferencesCustomer from "./components/references/References";
import ServiceModule from "./components/serviceModule/servicesModule";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ServiceModule />
      <Devis />
      <Company />
      <ReferencesCustomer />
      <Footer />
    </div>
  );
}

export default App;
