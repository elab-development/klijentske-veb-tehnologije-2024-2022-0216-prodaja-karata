
import NavBar from "../components/NavBar"
import Futer from "../components/Futer"
import './css/Korpa.css'
import { useCart } from '../components/KorpaFunkcije';
import { useEffect, useState } from 'react';


function Korpa() {
  const { ElementiUKorpi, izbaciIzKorpe, povecaj, smanji } = useCart();
  const [kupon, setKupon] = useState('');
  const [popust, setPopust] = useState(0);

  useEffect(() => {}, [ElementiUKorpi]);

  const[cena, setCena] = useState(0);

  useEffect(() => {
    let novaUkupnaCena = 0;
    for (let i = 0; i < ElementiUKorpi.length; i++) {
      novaUkupnaCena += ElementiUKorpi[i].broj * 30;
    }

   
    setCena(novaUkupnaCena);
  }, [ElementiUKorpi]);

  const primeniPopust = () => {
    if (kupon.toUpperCase() === 'KTEH') {
      const popustIznos = cena * 0.1;
      setPopust(popustIznos);
    } else {
      setPopust(0);
    }
  };



  return (
    <div className="stranicaKorpa">
      <div className="navBar1">
        <NavBar />
      </div>
      <h1 className='naslovKupovina'>Vasa korpa</h1>
    
      <div className='kontenjerKupovina'>
        {ElementiUKorpi.length === 0 ? (
          <p className = 'prazna'>Korpa je prazna</p>
        ) : (
          ElementiUKorpi.map((item) => (
            <div key={item.id} className="kropaSadrzaj">
              <img src={item.images[0].url} alt={item.name} className='dogadjajSlikaKorpa'/>
              <div className='dogadjajKarticaKorpa'>
                <h2 className='dogadjajIme'>{item.name}</h2>
                <p className='dogadjajDatum'>Date: {item.dates.start.localDate}</p>
                <p className='dogadjajVreme'>Time: {item.dates.start.localTime}</p>
                <div className='kvantitet'>
                  <button onClick={() => smanji(item.id)}>-</button>
                  <span>{item.broj}</span>
                  <button onClick={() => povecaj(item.id)}>+</button>
                </div>
                <button onClick={() => izbaciIzKorpe(item.id)}>Ukloni iz korpe</button>
              </div>
            </div>
          ))
        )}
      </div>
      

      <div className = 'racun'>
      <h2 className='naslovRacun'>Total: {cena - popust}€</h2>
      </div>
      <div className="popust">
        <h3>Da li imate kupon za popust?</h3>
        <label>
          <input 
            placeholder="Unesite kod"
            value={kupon}
            onChange={(e) => setKupon(e.target.value)}
          />
        </label>
        <button onClick={primeniPopust}>Primeni popust</button>
      </div>
      <div className="futer">
        <Futer />
      </div>
    </div>
  )
}

export default Korpa;