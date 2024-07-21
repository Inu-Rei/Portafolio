import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/style.css';
import Ronald from './components/Ronald';
import SobreMi from './components/SobreMi';
import Portafolio from './components/Portafolio';
import Educacion from './components/Educacion';
import Habilidad from './components/Habilidad';
import Contacto from './components/Contacto';
import fotoPerfil from './image/foto_perfil.jpg'; // Importa la imagen correctamente

function App() {
  return (
    <Router>
      <div className="app">
        <div className="sidebar">
          <img src={fotoPerfil} alt="Foto de Perfil" />
          <ul>
            <li><Link to="/">Ronald</Link></li>
            <li><Link to="/sobre-mi">Sobre Mí</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li> {/* Corregido: Etiqueta de enlace cerrada correctamente */}
            <li><Link to="/educacion">Educación</Link></li>
            <li><Link to="/habilidad">Habilidad</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Ronald />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/educacion" element={<Educacion />} />
            <Route path="/habilidad" element={<Habilidad />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
