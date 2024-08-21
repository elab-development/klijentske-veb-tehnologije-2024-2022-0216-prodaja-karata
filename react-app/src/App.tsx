//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import NavBar from './components/NavBar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Kontakt from './pages/Kontakt'
import Profil from './pages/Profil'
import Karte from './pages/Karte'
import Login from './pages/Login'
import Korpa from './pages/Korpa'
import Registracija from './pages/Registracija'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path = '/profil' element={<Profil />} />
          <Route path ='/karte' element={<Karte />} />
          <Route path = '/login' element={<Login />} />
          <Route path = '/korpa' element={<Korpa />} />
          <Route path ='/registracija' element={<Registracija/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
