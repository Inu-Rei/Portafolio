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
          <p>Diploma en Desarrollo Web Full Stack.</p>
          <a href="/diplomas/diploma1.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma2} alt="Diploma Front-End" className="diploma-image" />
          </div>
          <p>Diploma en Desarrollo Front-End.</p>
          <a href="/diplomas/diploma2.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma3} alt="Diploma Back-End" className="diploma-image" />
          </div>
          <p>Diploma en Desarrollo Back-End.</p>
          <a href="/diplomas/diploma3.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma4} alt="Diploma Python" className="diploma-image" />
          </div>
          <p>Diploma en Python.</p>
          <a href="/diplomas/diploma4.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma5} alt="Diploma Django" className="diploma-image" />
          </div>
          <p>Diploma en Django.</p>
          <a href="/diplomas/diploma5.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma6} alt="Diploma React" className="diploma-image" />
          </div>
          <p>Diploma en React.</p>
          <a href="/diplomas/diploma6.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma7} alt="Diploma JavaScript" className="diploma-image" />
          </div>
          <p>Diploma en JavaScript.</p>
          <a href="/diplomas/diploma7.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma8} alt="Diploma HTML/CSS" className="diploma-image" />
          </div>
          <p>Diploma en HTML y CSS.</p>
          <a href="/diplomas/diploma8.pdf" download className="download-button">Descargar Diploma</a>
        </div>
        <div className="diploma-card">
          <div className="diploma-image-container">
            <img src={diploma9} alt="Diploma Full Stack" className="diploma-image" />
          </div>
          <p>Diploma en Desarrollo Full Stack.</p>
          <a href="/diplomas/diploma9.pdf" download className="download-button">Descargar Diploma</a>
        </div>
      </div>
    </div>
  );
};

export default Educacion;
