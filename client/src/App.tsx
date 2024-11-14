import Company from "./components/company/Company";
import Devis from "./components/devis/Devis";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import References from "./components/references/References";
import ServiceModule from "./components/serviceModule/servicesModule";
import { BasketProvider } from "./context/BasketContext";
import { ReservationProvider } from "./context/ReservationContext";
import "./App.css";

function App() {
  return (
    <BasketProvider>
      <ReservationProvider>
        <Header />
        <Company />
        <ServiceModule />
        <Devis />
        <References />
        <Footer />
      </ReservationProvider>
    </BasketProvider>
  );
}

export default App;
