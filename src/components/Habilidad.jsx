// src/components/Habilidad.jsx
import React from 'react';
import '../styles/Habilidad.css';
import htmlIcon from '../assets/icons/html-icon.png'; // Asegúrate de usar la ruta correcta
import cssIcon from '../assets/icons/css-icon.png';
import jsIcon from '../assets/icons/js-icon.png';
import vscodeIcon from '../assets/icons/vscode-icon.png';
import pythonIcon from '../assets/icons/python-icon.png';
import djangoIcon from '../assets/icons/django-icon.png';
import httpIcon from '../assets/icons/http-icon.png';

const Habilidad = () => {
  return (
    <div className="habilidad-container">
      <h2 className="title">Habilidades</h2>
      <div className="skills">
        <div className="skill">
          <img src={htmlIcon} alt="HTML" className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src={cssIcon} alt="CSS" className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src={jsIcon} alt="JavaScript" className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={vscodeIcon} alt="Visual Studio Code" className="skill-icon" />
          <p>Visual Studio Code</p>
        </div>
      </div>
      <h3>Actualmente aprendiendo:</h3>
      <div className="learning">
        <div className="skill">
          <img src={pythonIcon} alt="Python" className="skill-icon" />
          <p>Python</p>
        </div>
        <div className="skill">
          <img src={djangoIcon} alt="Django" className="skill-icon" />
          <p>Django</p>
        </div>
        <div className="skill">
          <img src={httpIcon} alt="HTTP" className="skill-icon" />
          <p>HTTP</p>
        </div>
      </div>
    </div>
  );
};

export default Habilidad;
