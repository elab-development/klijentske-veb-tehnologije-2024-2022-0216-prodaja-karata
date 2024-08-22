import { useState, useEffect } from 'react';
import Dogadjaj from '../models/Dogadjaj';

interface APIResponse {
  _embedded?: {
    events: Dogadjaj[];
  };
}

function EventList() {
  const [dogadjaj, setDogadjaj] = useState<Dogadjaj[]>([]);
  const [greska, setGreska] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const apiKey = 'bCrG6hlnlrk4XKQSPfG4InLG75ryLCJG';
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}`;

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
     
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dogadjaj.map(dogadjaji => (
          <li key={dogadjaji.id} style={{ marginBottom: '20px' }}>
            <h2>{dogadjaji.name}</h2>
            <p>Date: {dogadjaji.dates.start.localDate}</p>
            <p>Time: {dogadjaji.dates.start.localTime}</p>
            {dogadjaji.images && dogadjaji.images.length > 0 && (
              <img 
                src={dogadjaji.images[0].url} 
                alt={dogadjaji.name} 
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;