import Futer from "../components/Futer"
import NavBar from "../components/NavBar"
import './css/Profil.css'

function Profil() {

    const sacuvaniPodaci = JSON.parse(sessionStorage.getItem('registracijaPodaci') || '{}');

  return (
    <div className="stranaProfil">
        <div className = 'navBar1'>
            <NavBar />
        </div>

        <div className ='info'>
            <h1 className="profilNaslov">
            Profil
            </h1>

            <div className = 'kontenjeri'>
                
                <div className="infoOKorisniku">
                    <p className="nazivi"><strong>Ime: {sacuvaniPodaci.name}</strong> </p>
                    <p className="nazivi"><strong>Prezime: {sacuvaniPodaci.surname}</strong> </p>
                    <p className="nazivi"><strong>E-mail: {sacuvaniPodaci.email}</strong> </p>
                    <p className="nazivi"><strong>Država: {sacuvaniPodaci.country}</strong> </p>
                </div>

                <div className = 'istorijaKupovine'>
                    <p className = 'unutarIstorije'> Trenutno nema nicega</p>
                </div>

            </div>
        </div>

        <div className="futer">
            <Futer />
        </div>
      
    </div>
  )
}

export default Profil
