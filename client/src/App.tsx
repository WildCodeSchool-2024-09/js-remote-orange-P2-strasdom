import Company from "./components/company/Company";
import Devis from "./components/devis/Devis";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ReferencesCustomer from "./components/references/References";
import ServiceModule from "./components/serviceModule/servicesModule";
import { BasketProvider } from "./context/BasketContext";
import "./App.css";

function App() {
  return (
    <BasketProvider>
      <Header />
      <ServiceModule />
      <Devis />
      <ReferencesCustomer />
      <Company />
      <Footer />
    </BasketProvider>
  );
}

export default App;
