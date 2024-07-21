import React from 'react';
import '../styles/Portafolio.css';
import project1Image from '../assets/images/project1.png'; // Add your image
import project2Image from '../assets/images/project2.png'; // Add your image
import reactIcon from '../assets/icons/react-icon.png';
import htmlIcon from '../assets/icons/html-icon.png';
import cssIcon from '../assets/icons/css-icon.png';
import bootstrapIcon from '../assets/icons/bootstrap-icon.png';

const Portafolio = () => {
  return (
    <div className="portafolio-container">
      <h2 className="title">Mis Proyectos</h2>
      <div className="projects">
        <div className="project-card">
          <a href="https://12-caballeros-dorados.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={project1Image} alt="Proyecto 1" className="project-image" />
          </a>
          <h3>Proyecto 1</h3>
          <a href="https://github.com/Inu-Rei/ProyectoUnidad7" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          <div className="tech-icons">
            <img src={reactIcon} alt="React" className="tech-icon" />
            <img src={htmlIcon} alt="HTML" className="tech-icon" />
            <img src={cssIcon} alt="CSS" className="tech-icon" />
            <img src={bootstrapIcon} alt="Bootstrap" className="tech-icon" />
          </div>
        </div>
        <div className="project-card">
          <a href="https://proyecto-final-udistrital-pokemon.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={project2Image} alt="Proyecto 2" className="project-image" />
          </a>
          <h3>Proyecto 2</h3>
          <a href="https://github.com/Inu-Rei/ProyectoUnidad7" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          <div className="tech-icons">
            <img src={reactIcon} alt="React" className="tech-icon" />
            <img src={htmlIcon} alt="HTML" className="tech-icon" />
            <img src={cssIcon} alt="CSS" className="tech-icon" />
            <img src={bootstrapIcon} alt="Bootstrap" className="tech-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
