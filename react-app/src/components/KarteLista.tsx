import { useState, useEffect } from 'react';
import Dogadjaj from '../models/Dogadjaj';
import '../components/KartaLista.css';
import ReusableDugme from './ReusableDugme';
import srce from '../assets/Ikonice/666627.png'
import { useCart } from './KorpaFunkcije';

interface APIOdgovor { 
  _embedded?: {
    events: Dogadjaj[];
  };
}

interface KarteListaProps {
  klasa: string;
}

function KarteLista({ klasa }: KarteListaProps) {
  const [dogadjaj, setDogadjaj] = useState<Dogadjaj[]>([]);
  const { dodajUKorpu} = useCart();

  useEffect(() => {fetchEvents();}, [klasa]);

  const fetchEvents = async () => {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${klasa}&apikey=bCrG6hlnlrk4XKQSPfG4InLG75ryLCJG`;
    
      const odg = await fetch(url);
      const data: APIOdgovor = await odg.json();
      setDogadjaj(data._embedded?.events || []);
      
    
  };

  const handleDodaj = (dogadjaji: Dogadjaj) => {
    dodajUKorpu(dogadjaji);
    
  };

  return (
    <div>
      <ul className='listaCela'>
        {dogadjaj.map(dogadjaji => (
          <li key={dogadjaji.id} className='stavkaListe'>
            <img src={dogadjaji.images[0].url} alt={dogadjaji.name} className='dogadjajSlika'/>
            <div className='ispodSlike'>
              <h2 className='dogadjajIme'>{dogadjaji.name}</h2>
              <p className='dogadjajDatum'>Datum: {dogadjaji.dates.start.localDate}</p>
              <p className='dogadjajVreme'>Vreme: {dogadjaji.dates.start.localTime}</p>
            </div>
            <ReusableDugme text='Dodaj u korpu' onClick={() => handleDodaj(dogadjaji)} />
            <button> <img src={srce} className='srce' alt="omiljeni" /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KarteLista;