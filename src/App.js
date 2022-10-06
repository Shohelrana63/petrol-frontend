import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Supplier from './components/supplier/Supplier';
import Services from './components/services/Services';

function App() {
  return (
    <>
     <Header/>
     <Navbar/>
     <Banner/>
     <Supplier/>
     <Services/>
    </>
  );
}

export default App;
