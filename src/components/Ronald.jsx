// src/components/Ronald.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Ronald.css';

const Ronald = () => {
  return (
    <div className="intro-container">
      <h1 className="title">Ronald Fabian Ramos Sierra</h1>
      <p>Bienvenido a mi portafolio como desarrollador web</p>
      <p>Si quieres ponerte en contacto conmigo, escríbeme a <a href="mailto:ronaldramossierra@hotmail.com">ronaldramossierra@hotmail.com</a></p>
      <a href="/cv/mi-cv.pdf" download className="download-cv">Descargar mi CV</a>

      <div className="social-icons">
        <a href="https://www.facebook.com/DOGELEMENT" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/ronaldfabianramos/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/ronald-fabian-ramos-sierra-5b5223258/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Ronald;
