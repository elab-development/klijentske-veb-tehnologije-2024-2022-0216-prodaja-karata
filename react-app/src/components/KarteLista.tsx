import { useState, useEffect } from 'react';
import Dogadjaj from '../models/Dogadjaj';
import '../components/KartaLista.css';

interface APIResponse {
  _embedded?: {
    events: Dogadjaj[];
  };
}

interface KarteListaProps {
  klasa: string;
}

function KarteLista({ klasa }: KarteListaProps) {


  const [dogadjaj, setDogadjaj] = useState<Dogadjaj[]>([]);
  const [greska, setGreska] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, [klasa]);

  const fetchEvents = async () => {
    const apiKey = 'bCrG6hlnlrk4XKQSPfG4InLG75ryLCJG';
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${klasa}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Greska');
      }
      const data: APIResponse = await response.json();
      setDogadjaj(data._embedded?.events || []);
    } catch (greska) {
      setGreska('Greska ' + (greska as Error).message);
    }
  };


  if (greska) return <div>{greska}</div>;

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }} className='listaCela'>
        {dogadjaj.map(dogadjaji => (
          <li key={dogadjaji.id} style={{ marginBottom: '20px' }} className='stavkaListe'>
            {dogadjaji.images && dogadjaji.images.length > 0 && (
              <img
                src={dogadjaji.images[0].url}
                alt={dogadjaji.name}
                style={{ maxWidth: '300px', height: 'auto' }}
                className='dogadjajSlika'
              />
            )}
            <div className='ispodSlike'>
              <h2 className='dogadjajIme'>{dogadjaji.name}</h2>
              <p className='dogadjajDatum'>Date: {dogadjaji.dates.start.localDate}</p>
              <p className='dogadjajVreme'>Time: {dogadjaji.dates.start.localTime}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KarteLista;
