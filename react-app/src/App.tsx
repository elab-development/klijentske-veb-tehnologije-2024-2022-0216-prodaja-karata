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
import { KorpaProvajder } from './components/KorpaFunkcije'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function VratiNaVrh() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <>
    <KorpaProvajder>
      <BrowserRouter>
        <VratiNaVrh />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path ='/karte' element={<Karte />} />
          <Route path = '/login' element={<Login />} />
          <Route path = '/korpa' element={<Korpa />} />
          <Route path = '/profil' element ={<Profil />} />
          <Route path ='/registracija' element={<Registracija/>} />
        </Routes>
      </BrowserRouter>
      </KorpaProvajder>
    </>
  )
}

export default App
