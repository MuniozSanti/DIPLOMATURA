import './App.css';
import './styles/responsive.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ProductosPage from './pages/ProductosPage';
import ContactoPage from './pages/ContactoPage';
import AblandadoresPage from './pages/AblandadoresPage';
import BombasPage from './pages/BombasPage';
import JardineriaPage from './pages/JardineriaPage';
import PiletaPage from './pages/PiletaPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<NosotrosPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="Ablandadores" element={<AblandadoresPage />} />
          <Route path="Bombas" element={<BombasPage />} />
          <Route path="jardineria" element={<JardineriaPage />} />
          <Route path="Pileta" element={<PiletaPage />} />
        </Routes>      
      </BrowserRouter>

       <Footer/>
    </div>
  );
}

export default App;
