// src/components/Educacion.jsx
import React from 'react';
import '../styles/Educacion.css';

// Las imágenes se deben importar como módulos de JS
import diploma1 from '../assets/images/diploma1.png';
import diploma2 from '../assets/images/diploma2.png';
import diploma3 from '../assets/images/diploma3.png';
import diploma4 from '../assets/images/diploma4.png';
import diploma5 from '../assets/images/diploma5.png';
import diploma6 from '../assets/images/diploma6.png';
import diploma7 from '../assets/images/diploma7.png';
import diploma8 from '../assets/images/diploma8.png';
import diploma9 from '../assets/images/diploma9.png';

const Educacion = () => {
  return (
    <div className="educacion-container">
      <h2 className="title">Educación</h2>
      <div className="diplomas">
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma1} alt="Diploma Desarrollo Web" className="diploma-image" />
          </div>
          <p>Diploma Desarrollo Front End Nivel Basico. 
            30 horas de formación en Habilidades
            Socioemocionales</p>
          <a href="/diplomas/diploma1.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma2} alt="Diploma Front-End" className="diploma-image" />
          </div>
          <p>Desarrollo Front End - Nivel Básico
          con una duración de 125 horas.</p>
          <a href="/diplomas/diploma2.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma3} alt="Diploma Back-End" className="diploma-image" />
          </div>
          <p>Desarrollo Front End - Nivel Intermedio
              formación en Habilidades
              Socioemocionales con una duración de 30 horas.</p>
          <a href="/diplomas/diploma3.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma4} alt="Diploma Python" className="diploma-image" />
          </div>
          <p>Desarrollo Front End - Nivel Intermedio
          con una duración de 125 horas..</p>
          <a href="/diplomas/diploma4.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma5} alt="Diploma Django" className="diploma-image" />
          </div>
          <p>HTML5 Y CSS3 PARTE 4:AVANZANDO EN CSS.</p>
          <a href="/diplomas/diploma5.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma6} alt="Diploma React" className="diploma-image" />
          </div>
          <p>GIT Y GITHUB: CONTROLE Y COMPARTA SU CÓDIGO.</p>
          <a href="/diplomas/diploma6.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma7} alt="Diploma JavaScript" className="diploma-image" />
          </div>
          <p>HTML5 Y CSS3 PARTE 3:TRABAJANDO CON FORMULARIOS Y TABLAS.</p>
          <a href="/diplomas/diploma7.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma8} alt="Diploma HTML/CSS" className="diploma-image" />
          </div>
          <p>HTML5 Y CSS3 PARTE 2:POSICIONAMIENTO, LISTAS Y NAVEGACIÓN.</p>
          <a href="/diplomas/diploma8.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma9} alt="Diploma Full Stack" className="diploma-image" />
          </div>
          <p>HTML5 Y CSS3 PARTE 1: MI PRIMERA PÁGINA WEB.</p>
          <a href="/diplomas/diploma9.pdf" download className="download-button">Descargar Diploma</a>
        </div>
      </div>
    </div>
  );
};

export default Educacion;
