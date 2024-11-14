import Company from "./components/company/Company";
import Devis from "./components/devis/Devis";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ReferencesCustomer from "./components/references/References";
import ServiceModule from "./components/serviceModule/servicesModule";
import { BasketProvider } from "./context/BasketContext";
import { ReservationProvider } from "./context/ReservationContext";
import "./App.css";

function App() {
  return (
    <BasketProvider>
<<<<<<< HEAD
      <Header />
      <ServiceModule />
      <Devis />
      <ReferencesCustomer />
      <Company />
      <Footer />
=======
      <ReservationProvider>
        <Header />
        <Company />
        <ServiceModule />
        <Devis />
        <References />
        <Footer />
      </ReservationProvider>
>>>>>>> c8eacc919630a921043f9351f35fc540f0bd47aa
    </BasketProvider>
  );
}

export default App;
