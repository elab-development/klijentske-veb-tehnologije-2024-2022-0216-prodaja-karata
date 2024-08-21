import NavBar from "../components/NavBar";
//import { BrowserRouter,Routes, Route } from 'react-router-dom'
import FormaKontakt from "../components/FormaKontakt";
import Futer from "../components/Futer";
import './css/Kontakt.css'

function Kontakt() {
  return (
    <div className = 'kontaktStranica'>
      <div className="navBar1">
        <NavBar />
      </div>

      <h1 className = 'kontaktNaslov'> Kontaktirajte nas</h1>

      <div className = 'formaKontakt'>
        <FormaKontakt />
      </div>

      <div className = 'futer'>
        <Futer />

      </div>
    </div>
  )
}

export default Kontakt

