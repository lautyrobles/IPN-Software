import React from 'react'
import './Presentacion.css'
import hero from '../assets/hero.jpg' // reemplaza por tu imagen hero
import { Link, Element } from 'react-scroll';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Presentacion = () => {

  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <section id="home" className="presentacion section">
      <div className="container present-grid">
        <div className="hero-copy" data-aos='fade-in'>
          <h1>Diseñamos la presencia digital que las organizaciones requieren</h1>
          <p className="lead" data-aos='fade-in'>
            Somos <strong>IPN</strong>, una Software Factory que busca dar impulso y desarrollo a negocios y organizaciones politicas: diseño profesional, estrategia de contenido y optimización para campañas y crecimiento.
          </p>
          <div className="hero-actions" data-aos='fade-in'>

            <Link to="trabajos" smooth="true" duration={1000}>
            <a className="cta" href="#trabajos">Nuestro trabajo</a>
            </Link>
            <Link to="contacto" smooth="true" duration={1000}>
            <a className="cta-ghost" href="#contact">Contactar</a>
            </Link>


          </div>

          <div className="stats" data-aos='fade-in'>
            <div className="stat">
              <div className="stat-num">100+</div>
              <div className="stat-label">Propuestas entregadas</div>
            </div>
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Campañas impulsadas</div>
            </div>
            <div className="stat">
              <div className="stat-num">140</div>
              <div className="stat-label">Regiones</div>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-image" data-aos='fade-left'>
            <img src={hero} alt="Hero IPN" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentacion