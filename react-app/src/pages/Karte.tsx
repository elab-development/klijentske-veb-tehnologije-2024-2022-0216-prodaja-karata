
import NavBar from '../components/NavBar'
import Futer from '../components/Futer'
import './css/Karte.css'
import EventList from '../components/KarteLista'

function Karte() {

  return (
    <div>
      <div className="navBar1">
        <NavBar />
      </div>

      <h1 className = 'naslovKarte'>Karte</h1>

      <div className = 'karteApi'>
        <div>
        <EventList />
        </div>
      </div>

      <div className = 'futer'>
        <Futer />

      </div>
    </div>
  )
}

export default Karte
