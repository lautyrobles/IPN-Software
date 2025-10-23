import React from 'react';
import styles from './IPNPolitica.module.css';
import politica1 from '/src/assets/politica1.jpg';
import politica2 from '/src/assets/politica2.png';
import politica3 from '/src/assets/politica3.png';
import mainPolitica from '/src/assets/main-politica.jpg';
import { Link, Element } from 'react-scroll';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const IPNPolitica = () => {

useEffect(() => {
  if (window.innerWidth > 900) {
    AOS.init({
      duration: 800,
      once: true
    });
  }
}, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div data-aos='fade-in' className={styles.textContent}>
          <h2>IPN Política</h2>
          <p>
            Desarrollamos soluciones digitales para campañas políticas, partidos y candidatos. 
            Creamos sitios web, aplicaciones y estrategias de comunicación digital que te ayudan 
            a conectar con el electorado y fortalecer tu imagen pública.
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
        <img data-aos='fade-left' src={mainPolitica} alt="IPN Política" className={styles.mainImage} />
      </div>

      <div className={styles.cardsContainer}>
        <div data-aos='fade-right' className={styles.card}>
          <img src={politica1} alt="Campañas electorales" />
          <h3>Campañas Electorales</h3>
          <p>Desarrollo de plataformas digitales y páginas para candidatos.</p>
        </div>
        <div data-aos='fade-up' className={styles.card}>
          <img src={politica2} alt="Gestión de redes" />
          <h3>Portfolios para candidatos</h3>
          <p>Desarrollo de sitios web para individuos en busca de presencia digital.</p>
        </div>
        <div data-aos='fade-left' className={styles.card}>
          <img src={politica3} alt="Partidos políticos" />
          <h3>Partidos Políticos</h3>
          <p>Portales institucionales con información, propuestas y contacto.</p>
        </div>
      </div>
    </section>
  );
};

export default IPNPolitica;