import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="ipn-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-brand">IPN</div>
          <p>Impulso Político & Negocios — Empresa de software</p>
          <p className="muted">© {new Date().getFullYear()} IPN. Todos los derechos reservados.</p>
        </div>

        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#trabajos">Nuestros trabajos</a></li>
            <li><a href="#equipo">Equipo</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <p>contacto@ipnsoftware.com</p>
          <p>+54 263 4380152 </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer