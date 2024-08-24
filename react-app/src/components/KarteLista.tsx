import { useState } from 'react';
import Dogadjaj from '../models/Dogadjaj';
import '../components/KartaLista.css';
import ReusableDugme from './ReusableDugme';
import srce from '../assets/Ikonice/666627.png'
import { useCart } from './KorpaFunkcije';

interface KarteListaProps {
  dogadjaji: Dogadjaj[];
}

function KarteLista({ dogadjaji }: KarteListaProps) {
  const { dodajUKorpu } = useCart();

  const handleDodaj = (dogadjaj: Dogadjaj) => {
    dodajUKorpu(dogadjaj);
  };

  return (
    <div>
      <ul className='listaCela'>
        {dogadjaji.map(dogadjaj => (
          <li key={dogadjaj.id} className='stavkaListe'>
            <img src={dogadjaj.images[0].url} alt={dogadjaj.name} className='dogadjajSlika'/>
            <div className='ispodSlike'>
              <h2 className='dogadjajIme'>{dogadjaj.name}</h2>
              <p className='dogadjajDatum'>Datum: {dogadjaj.dates.start.localDate}</p>
              <p className='dogadjajVreme'>Vreme: {dogadjaj.dates.start.localTime}</p>
            </div>
            <div className = 'dugmeNaDnuKartice'>
              <ReusableDugme text='Dodaj u korpu' onClick={() => handleDodaj(dogadjaj)} />
            </div>
           
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KarteLista;