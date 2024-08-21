import Futer from "../components/Futer";
import NavBar from "../components/NavBar";
//import { BrowserRouter,Routes, Route } from 'react-router-dom'
/*import homeSlika from '../assets/Ostalo/Pozadina pocetna.png';*/
import '../pages/css/Home.css';
import ljudi from '../assets/Ostalo/Vektor na pocetnoj.png'
import partneri from '../assets/Ostalo/Partneri.png'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className = 'homePage'>
      <NavBar />

      <div className = 'tekstNaStrani'>
        <h1 className = 'naslovGlavni'>
        Kupite Karte Lako i Brzo - Vaš Ulaz u Svet Zabave!
        </h1>

        <p className = 'tekstGlavni'> 
        Dobrodošli na našu platformu za prodaju karata, gde vaše iskustvo započinje jednim klikom! Bilo da ste ljubitelj koncerata, pozorišnih predstava,muzeja ili sportskih dogadjaja ovde ćete pronaci sve što vam treba. Naša jednostavna i sigurna platforma omogućava vam da brzo i lako pronadjete i kupite karte za omiljene dogadjaje. Pridružite se hiljadama zadovoljnih korisnika i osigurajte svoje
        mesto za nezaboravne trenutke. Kupovina karata nikada nije bila lakša!
        </p>
        </div>

        <div className = 'registracija'>
          <div className = 'slika'>
            <img src = {ljudi} alt = 'ljudi'/>
          </div>

          <div className="kontenjerTekstIDugme">
            <h2 className="registracijaNaslov">Još niste napravili nalog?</h2>
            <p className="registracijaOpis">Registrujte se brzo i lako klikom na dugme</p>
             <Link to = '/registracija'><button className="registracijaDugme">Registruj se</button> </Link>
      </div>
        </div>

        <div className = 'partneri'>
          <h1 className ='partneriNaslov'>Nasi partneri</h1>
          <img src = {partneri} alt = 'partneri'/>
        </div>

        <div className = 'futer'>
          <Futer />
        </div>
        
      
      </div>
  )
}

export default Home
