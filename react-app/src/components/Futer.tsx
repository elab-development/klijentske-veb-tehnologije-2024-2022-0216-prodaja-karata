import logo from '../assets/Ostalo/Logo.png'
import fejs from '../assets/Ikonice/Facebook.png'
import tviter from '../assets/Ikonice/Tviter.png'
import linkedin from '../assets/Ikonice/linkedin.png'
import { Link } from 'react-router-dom'
import '../components/Futer.css'


function Futer() {
  return (
    <div className = 'kontenjer'>
        <div className = 'prviDeo'>
         <p><img src = {logo} alt = "logo"  /></p>
         <p className = 'tekstLevo'> TicketHub je globalna samouslužna platforma za prodaju 
            karata koja omogućava svakome da kreira, deli, pronađe i prisustvuje događajima koji podstiču 
            njihove strasti i obogaćuju njihove živote. </p>

        <p> 
            <Link to = 'https://www.facebook.com/login/'><img src = {fejs} alt = 'facebook' className = 'img1'/> </Link>
            <Link to = 'https://x.com/home'><img src  = {tviter} alt = 'img1' className = 'img1'/> </Link>
            <Link to ='https://www.linkedin.com/login'><img src = {linkedin} alt='img1' className = 'img1'/></Link>
        </p>
        </div>

        <div className = 'drugiDeo'>
            
            <ul>
                <li>TicketHub</li>
                <li><Link to ='/home'> Pocetna</Link></li>
                <li><Link to = '/karte'>Karte</Link></li>
                <li><Link to = '/kontakt'>Kontakt</Link></li>
            </ul>

        </div>

        <div className = 'treciDeo'>
            <p>Ostani Informisan</p>
            <p>Pridruzi se mailing listi i budi informisan o svim dogadjajima u buducnosti</p>
            
            <div className="forma">
            <input type="email" placeholder="Unesi e-mail ovde..." />
            <button type="submit" className="dugmence">Prijavi se</button>
          
            </div>

        </div>
       
      
    </div>
  )
}

export default Futer
