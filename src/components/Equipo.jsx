import React from 'react'
import './Equipo.css'
import p1 from '../assets/team1.jpeg'
import p2 from '../assets/team2.jpeg'
import p3 from '../assets/team3.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const team = [
  {img: p1, name: "Jonathan Araujo", role: "Desarrollador Back End", bio: "Estratega político, especialista en desarrololo Back End.", url: "https://www.linkedin.com/in/jonathan-araujo-750634181/"},
  {img: p2, name: "Lautaro Robles", role: "Desarrollador Front End", bio: "Diseño y experiencia en plataformas de campaña.", url: "https://lautyroblesportfolio.vercel.app/"},
  {img: p3, name: "Gonzalo Sanchez", role: "Desarrollador Front End", bio: "Accesibilidad, diseño e integración de procesos empresariales", url: "https://portfolio-mr6y.vercel.app/"},
]

const Equipo = () => {

          useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);

  return (
    <section id="equipo" className="equipo section">
      <div className="container">
        <h2 data-aos='fade-in' className="center">Nuestro equipo</h2>
        <p data-aos='fade-in' className="center sub">Profesionales con experiencia en desarrollo de Software, comunicación y crecimiento.</p>

        <div data-aos='fade-up' className="team-grid">
          {team.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="avatar">
                <img src={m.img} alt={m.name} />
              </div>
              <div className="team-body">
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p className="bio">{m.bio}</p>
                <a className="portfolio-btn" href={m.url} target="_blank" rel="noreferrer">Conocer más</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipo