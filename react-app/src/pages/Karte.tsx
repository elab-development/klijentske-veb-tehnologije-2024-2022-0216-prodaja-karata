
import NavBar from '../components/NavBar'
import Futer from '../components/Futer'
import './css/Karte.css'
import KarteLista from '../components/KarteLista'
import ReusableDugme from '../components/ReusableDugme'
import { useState, useEffect } from 'react'
import Dogadjaj from '../models/Dogadjaj'

import Paginacija from '../components/Paginacija'


interface APIOdgovor { 
  _embedded?: {
    events: Dogadjaj[];
  };
}

function Karte() {
  const [filter, setFilter] = useState<string | null>(null);

  const [sviDogadjaji, setsviDogadjaji] = useState<Dogadjaj[]>([]);
  
  const [trenutnoStrana, settrenutnoStrana] = useState(1);
  const dogadjajiPoStrani = 8;

  const handleFilter = (filteri: string) => {
    setFilter(filteri === filter ? null : filteri);
    settrenutnoStrana(1);
  };

  useEffect(() => {
    const fetchsviDogadjaji = async () => {
      const kategorije = ['sport', 'music', 'theatre', 'circus'];
      let sviDogadjaji: Dogadjaj[] = [];
      
      for (const kategorija of kategorije) {
        if (!filter || filter === kategorija) {
          const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${kategorija}&apikey=bCrG6hlnlrk4XKQSPfG4InLG75ryLCJG`;
          const odg = await fetch(url);
          const podaci: APIOdgovor = await odg.json();
          if (podaci._embedded?.events) {
            sviDogadjaji = [...sviDogadjaji, ...podaci._embedded.events];
          }
        }
      }
      setsviDogadjaji(sviDogadjaji);
    }; fetchsviDogadjaji(); }, [filter]);

  const indexPoslednjeg = trenutnoStrana * dogadjajiPoStrani;
  const indexPrvog = indexPoslednjeg - dogadjajiPoStrani;
  const trenutnoDogadjaja = sviDogadjaji.slice(indexPrvog, indexPoslednjeg);

  const paginiraj = (brojStrana: number) => settrenutnoStrana(brojStrana);

  return (
    <div className='stranicaKarte'>
      <div className="navBar1">
        <NavBar />
      </div>
      <h1 className='naslovKarte'>Karte</h1>
      <div className='searchiFiler'>
        <div className='dugmeFilter'>
          <ReusableDugme text='Sport' onClick={() => handleFilter('sport')}/>
          <ReusableDugme text='Muzika' onClick={() => handleFilter('music')}/>
          <ReusableDugme text='Pozoriste' onClick={() => handleFilter('theatre')}/>
          <ReusableDugme text='Cirkus' onClick={() => handleFilter('circus')}/>
        </div>
      </div>
      <div className='karteApi'>
        <KarteLista dogadjaji={trenutnoDogadjaja} />
      </div>
      <Paginacija
        dogadjajiPoStrani={dogadjajiPoStrani}
        ukupnoDogadjaja={sviDogadjaji.length}
        paginiraj={paginiraj}
        trenutnoNaStrani={trenutnoStrana}
      />
      <div className='futer'>
        <Futer />
      </div>
    </div>
  )
}

export default Karte