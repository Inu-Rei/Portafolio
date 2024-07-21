import React from 'react';
import '../styles/Portafolio.css';
import project1Image from '../assets/images/project1.png'; // Agrega tu imagen
import project2Image from '../assets/images/project2.png'; // Agrega tu imagen
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
          <a href="https://github.com/Inu-Rei/ProyectoUnidad7" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          <div className="tech-icons">
            <img src={reactIcon} alt="React" className="tech-icon" />
            <img src={htmlIcon} alt="HTML" className="tech-icon" />
            <img src={cssIcon} alt="CSS" className="tech-icon" />
            <img src={bootstrapIcon} alt="Bootstrap" className="tech-icon" />
          </div>
          <div className="project-description">
            <h3>Descripción de mi primer proyecto</h3>
            <p>
              Aplicación web en React y Bootstrap para gestionar y explorar personajes de una serie específica. Utiliza react-router-dom para el enrutamiento y hooks (useState, useEffect, useContext, useParams, useNavigate) para manejar el estado. Incluye un formulario básico con validación y redirección post-inicio de sesión. Muestra información detallada de personajes y usa parámetros de URL para cargar datos específicos, garantizando una navegación fluida y una experiencia interactiva.
            </p>
          </div>
        </div>

        <div className="project-card">
          <a href="https://proyecto-final-udistrital-pokemon.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={project2Image} alt="Proyecto 2" className="project-image" />
          </a>
          <a href="https://github.com/Inu-Rei/PokedexReact.git" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          <div className="tech-icons">
            <img src={reactIcon} alt="React" className="tech-icon" />
            <img src={htmlIcon} alt="HTML" className="tech-icon" />
            <img src={cssIcon} alt="CSS" className="tech-icon" />
            <img src={bootstrapIcon} alt="Bootstrap" className="tech-icon" />
          </div>
          <div className="project-description">
            <h3>Descripción del segundo proyecto</h3>
            <p>
              Este proyecto es una aplicación web de gestión de Pokémon desarrollada con React y Bootstrap. Utiliza react-router-dom para el enrutamiento y varios hooks (useState, useEffect, useContext, useParams, useNavigate) para el manejo del estado y la navegación. Incluye un sistema de inicio de sesión con validación y redirección, así como rutas privadas protegidas que aseguran que solo los usuarios autenticados puedan acceder a ciertas páginas. La aplicación cuenta con un filtro de Pokémon por tipo mediante checkboxes y muestra una lista de Pokémon con detalles detallados y navegación dinámica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
