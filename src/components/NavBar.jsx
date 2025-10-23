import React, { useState } from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="ipn-nav">
      <div className="container nav-inner">
        {/* Marca */}
        <div className="brand">
          <Link className="cursor-pointer" to="home" smooth="true" duration={1200}>
            <img src={logo} alt="IPN logo" />
          </Link>

          <Link className="cursor-pointer" to="home" smooth="true" duration={1200}>
            <div className="brand-text">
              <span className="brand-acro">IPN</span>
              <span className="brand-sub">Software</span>
            </div>
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menú principal */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link className="cursor-pointer" to="home" smooth duration={1000} onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
          <Link className="cursor-pointer" to="servicios" smooth duration={1000} onClick={() => setMenuOpen(false)}>
            Servicios
          </Link>
          <Link className="cursor-pointer" to="trabajos" smooth duration={1000} onClick={() => setMenuOpen(false)}>
            Nosotros
          </Link>
          <Link className="cursor-pointer" to="equipo" smooth duration={1000} onClick={() => setMenuOpen(false)}>
            Equipo
          </Link>
          <Link className="cursor-pointer" to="contacto" smooth duration={1000} onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>

          {/* Botón Cotización dentro del menú móvil */}
          <Link
            className="cursor-pointer nav-cta-mobile"
            to="cotizacion"
            smooth
            duration={1000}
            onClick={() => setMenuOpen(false)}
          >
            <span className="btn-primary display">Cotización</span>
          </Link>
        </nav>

        {/* Botón Cotización desktop */}
        <div className="nav-cta">
          <Link className="cursor-pointer" to="cotizacion" smooth duration={1000} onClick={() => setMenuOpen(false)}>
            <span className="btn-primary">Cotización</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NavBar