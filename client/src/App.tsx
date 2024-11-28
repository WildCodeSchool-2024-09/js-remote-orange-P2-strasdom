import Company from "./components/company/Company";
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
      <Company />
      <ReferencesCustomer />
      <Footer />
    </div>
  );
}

export default App;
