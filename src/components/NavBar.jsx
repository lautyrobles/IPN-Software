import React, { useState, useEffect } from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (window.innerWidth <= 900) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrollea hacia abajo → oculta
          setShowNav(false)
        } else {
          // Scrollea hacia arriba → muestra
          setShowNav(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <header className={`ipn-nav ${showNav ? 'nav-visible' : 'nav-hidden'}`}>
      <div className="container nav-inner">
        {/* Marca */}
        <div className="brand">
          <Link className="cursor-pointer" to="home" smooth="false" duration={0}>
            <img src={logo} alt="IPN logo" />
          </Link>

          <Link className="cursor-pointer" to="home" smooth="false" duration={0}>
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
          <Link className="cursor-pointer" to="home" smooth duration={1500} onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
          <Link className="cursor-pointer" to="servicios" smooth duration={1500} onClick={() => setMenuOpen(false)}>
            Servicios
          </Link>
          <Link className="cursor-pointer" to="trabajos" smooth duration={1500} onClick={() => setMenuOpen(false)}>
            Nosotros
          </Link>
          <Link className="cursor-pointer" to="equipo" smooth duration={1500} onClick={() => setMenuOpen(false)}>
            Equipo
          </Link>
          <Link className="cursor-pointer" to="contacto" smooth duration={1500} onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>

          {/* Botón Cotización dentro del menú móvil */}
          <Link
            className="cursor-pointer nav-cta-mobile"
            to="cotizacion"
            smooth
            duration={1500}
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