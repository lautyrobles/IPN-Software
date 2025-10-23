import React from 'react'
import './Trabajos.css'
import t1 from '../assets/trabajo1.jpg'
import t2 from '../assets/trabajo2.jpg'
import t3 from '../assets/trabajo3.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const trabajos = [
  {img: t1, title: "FitSEO", desc: "Aplicación fitness que integra en una sola plataforma la salud, el bienestar y la autogestión"},
  {img: t2, title: "Sistema de Gestión", desc: "Preparada para manejar grandes volúmenes de datos de la manera más eficiente"},
  {img: t3, title: "MinePet", desc: "Sistema para E-Commerce de mascotas con una interfaz fluida y agradable a la vista"},
]

const Trabajos = () => {

        useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <section id="trabajos" className="trabajos section">
      <div className="container">
        <div className="section-header">
          <h2 data-aos='fade-in'>Nuestro trabajo</h2>
          <p data-aos='fade-in' className="sub">Proyectos recientes en los que hemos trabajado.</p>
        </div>

        <div className="cards">
          {trabajos.map((t, i) => (
            <article data-aos='fade-up' className="card" key={i}>
              <div className="card-media">
                <img src={t.img} alt={t.title}/>
              </div>
              <div className="card-body">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trabajos