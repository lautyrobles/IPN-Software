import React from 'react';
import styles from './IPNNegocios.module.css';
import negocio1 from '/src/assets/negocio1.png';
import negocio2 from '/src/assets/negocio2.png';
import negocio3 from '/src/assets/negocio3.png';
import mainNegocios from '/src/assets/main-negocios.jpg';
import { Link } from 'react-scroll';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const IPNNegocios = ( { onMoreInfo } ) => {

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section id='servicios' className={styles.section}>
      <div className={styles.header}>
        <div className={styles.textContent} data-aos='fade-in'>
          <h2>IPN Negocios</h2>
          <p>
            Nos especializamos en el desarrollo de software profesional para emprendimientos 
            y empresas. Creamos plataformas digitales modernas, seguras y escalables, 
            ayudándote a posicionar tu negocio online con soluciones de front y back end 
            totalmente personalizadas.
          </p>
  <Link
    to="cotizacion"
    smooth={true}
    duration={1000}
    offset={-80} // ajustá si necesitás compensar el alto del navbar
    className={styles.linkButton}
  >
          <button data-aos='fade-up' className={styles.button}>
    Solicitar
    </button>
  </Link>

        </div>
        <img data-aos='fade-right' src={mainNegocios} alt="IPN Negocios" className={styles.mainImage} />
        </div>

      <div className={styles.cardsContainer}>
        <div data-aos='fade-right' className={styles.card}>
          <img src={negocio1} alt="E-commerce" />
          <h3>E-Commerce</h3>
          <p>Tiendas online con pasarela de pago y gestión de productos.</p>
        </div>
        <div data-aos='fade-up' className={styles.card}>
          <img src={negocio2} alt="Aplicaciones de servicio" />
          <h3>Aplicaciones de Servicio</h3>
          <p>Desarrollos para gimnasios, remiserías, turnos y más.</p>
        </div>
        <div data-aos='fade-left' className={styles.card}>
          <img src={negocio3} alt="Portfolios profesionales" />
          <h3>Portfolios Profesionales</h3>
          <p>Diseños elegantes para mostrar tu marca o trabajo personal.</p>
        </div>
      </div>
    </section>
  );
};

export default IPNNegocios;