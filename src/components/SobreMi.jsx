import React from 'react';
import '../styles/style.css';

function SobreMi() {
  return (
    <div className="about-me">
      <h2>Sobre Mi Carrera</h2>
      <p>
        Mi carrera comenzó en el campo de la administración de empresas, con un enfoque en ventas. Sin embargo, al descubrir la programación, me di cuenta de que había encontrado mi verdadera pasión. Desde entonces, he dedicado los últimos dos años al estudio intensivo de la programación, abarcando tanto el front-end como el back-end.
      </p>

      <h2>Educación y Desarrollo Profesional</h2>
      <ul>
        <li>Estudio en el Servicio Nacional de Aprendizaje (SENA).</li>
        <li>Desarrollo intensivo en front-end y back-end.</li>
        <li>Compromiso con el aprendizaje continuo y profesional.</li>
      </ul>

      <h2>Contacto</h2>
      <p>
        Estoy abierto a nuevas oportunidades y colaboraciones. Si deseas ponerte en contacto conmigo para discutir proyectos, oportunidades laborales o cualquier consulta, no dudes en escribirme a: <br></br>
        <a href="mailto:ronaldramossierra@hotmail.com">ronaldramossierra@hotmail.com</a>
      </p>

      <p>
        Mira mi perfil en <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
  );
}

export default SobreMi;
