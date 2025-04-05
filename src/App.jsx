import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Info from './Components/Info/Info'
import Proyectos from './Components/Proyectos/Proyectos'
import Skills from './Components/Skills/Skills'
import Contacto from './Components/Contacto/Contacto'

function App() {  
  return (
    <>
    
      <NavBar/>
      <Info/>
      <Proyectos/>
      <Skills/>
    </>
  )
}

export default App
