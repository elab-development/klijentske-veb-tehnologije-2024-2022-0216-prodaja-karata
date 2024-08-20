import NavBar from "../components/NavBar";
//import { BrowserRouter,Routes, Route } from 'react-router-dom'
/*import homeSlika from '../assets/Ostalo/Pozadina pocetna.png';*/
import '../pages/css/Home.css';

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

        <div>

        </div>
        
      </div>
      </div>
  )
}

export default Home
