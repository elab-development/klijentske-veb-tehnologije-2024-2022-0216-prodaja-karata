// Korpa.tsx
import NavBar from "../components/NavBar"
import Futer from "../components/Futer"
import './css/Korpa.css'
import { useCart } from '../components/KorpaFunkcije';
import { useEffect } from 'react';

function Korpa() {
  const { ElementiUKorpi, izbaciIzKorpe, povecaj, smanji } = useCart();

  useEffect(() => {}, [ElementiUKorpi]);

  return (
    <div>
      <div className="navBar1">
        <NavBar />
      </div>
      <h1 className='naslovKupovina'>Vasa korpa</h1>
      <div className='kontenjerKupovina'>
        {ElementiUKorpi.length === 0 ? (
          <p>Korpa je prazna</p>
        ) : (
          ElementiUKorpi.map((item) => (
            <div key={item.id} className="korpaItem">
              <img src={item.images[0].url} alt={item.name} className='dogadjajSlika'/>
              <div className='itemDetails'>
                <h2 className='dogadjajIme'>{item.name}</h2>
                <p className='dogadjajDatum'>Date: {item.dates.start.localDate}</p>
                <p className='dogadjajVreme'>Time: {item.dates.start.localTime}</p>
                <div className='quantityControl'>
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
      <div className="futer">
        <Futer />
      </div>
    </div>
  )
}

export default Korpa;