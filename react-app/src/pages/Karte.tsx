
import NavBar from '../components/NavBar'
import Futer from '../components/Futer'
import './css/Karte.css'
import KarteListaSport from '../components/KarteListaSport'
import KarteListaMuzika from '../components/KarteListaMuzika'
import ReusableDugme from '../components/ReusableDugme'

function Karte() {

  return (
    <div className = 'stranicaKarte'>
      <div className="navBar1">
        <NavBar />
      </div>

      <h1 className = 'naslovKarte'>Karte</h1>

      <div className = 'searchiFiler'>
         <label className = 'poljeLabel'>
            <input className = 'polje' placeholder='Unesite naziv dogadjaja'/>
         </label>
         <div className='dugmeSearch'>
            <ReusableDugme text='Pretrazi'/>
         </div>
         
      </div>

      <div className = 'karteApi'>
        <div>
        <KarteListaSport />
        <KarteListaMuzika />
        </div>
      </div>

      <div className = 'futer'>
        <Futer />

      </div>
    </div>
  )
}

export default Karte
