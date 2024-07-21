import React from 'react';
import '../styles/style.css';
import emailIcon from '../assets/icons/email-icon.png'; // Asegúrate de que la ruta sea correcta
import whatsappIcon from '../assets/icons/whatsapp-icon.png'; // Asegúrate de que la ruta sea correcta
import linkedinIcon from '../assets/icons/linkedin-icon.png'; // Asegúrate de que la ruta sea correcta

function Contacto() {
  return (
    <div className="contact">
      <h1 className="contact-title">Contáctame</h1>
      <div className="contact-info">
        <div className="contact-item">
          <img src={emailIcon} alt="Email" className="contact-icon" />
          <div>
            <h2>Email</h2>
            <p><a href="mailto:ronaldramossierra@hotmail.com">ronaldramossierra@hotmail.com</a></p>
          </div>
        </div>
        <div className="contact-item">
          <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
          <div>
            <h2>WhatsApp</h2>
            <p><a href="tel:+573194863001">+57 3194863001</a></p>

          </div>
        </div>
        <div className="contact-item">
          <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          <div>
            <h2>LinkedIn</h2>
            <p><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
      </div>
      <footer className="contact-footer">
        <p>Este sitio fue desarrollado en React con HTML, CSS, JavaScript.</p>
      </footer>
    </div>
  );
}

export default Contacto;
