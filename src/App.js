import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Supplier from './components/supplier/Supplier';
import Services from './components/services/Services';
import Company from './components/company/Company';
import PartnerLogo from './components/partnerLogo/PartnerLogo';

function App() {
  return (
    <>
     <Header/>
     <Navbar/>
     <Banner/>
     <Supplier/>
     <Services/>
     <Company/>
     <PartnerLogo/>
    </>
  );
}

export default App;
