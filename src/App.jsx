import React from 'react'
import NavBar from './components/NavBar'
import Presentacion from './components/Presentacion'
import Trabajos from './components/Trabajos'
import Equipo from './components/Equipo'
import IPNNegocios from './components/IPNNegocios'
import IPNPolitica from './components/IPNPolitica'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Cotizacion from './components/Cotizacion';

function App() {
  return (
      <div className='App-wrapper'>  
          <NavBar />
          <main>
          <Presentacion />
          <IPNNegocios />
          <IPNPolitica />
          <Trabajos />
          <Cotizacion />
          <Equipo />
          <Contact/>
          </main>
          <Footer />
      </div>

  )
}

export default App
