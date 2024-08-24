import React, { useState, useEffect } from "react";
import Futer from "../components/Futer";
import NavBar from "../components/NavBar";
import '../pages/css/Home.css';
import ljudi from '../assets/Ostalo/Vektor na pocetnoj.png'
import partneri from '../assets/Ostalo/Partneri.png'
import { Link } from "react-router-dom";
import SearchResults from "../components/RezultatiPretrage";
import Dogadjaj from "../models/Dogadjaj";

function Home() {
  const [pretrazenPojam, setpretrazenPojam] = useState('');
  const [sviDogadjaji, setSviDogadjaji] = useState<Dogadjaj[]>([]);
  const [prikazaniDogadjaji, setPrikazaniDogadjaji] = useState<Dogadjaj[]>([]);

  useEffect(() => {
    const fetchsviDogadjaji = async () => {
      const kategorije = ['sport', 'music', 'theatre', 'circus'];
      let sviDogadjaji: Dogadjaj[] = [];
      for (const kategorija of kategorije) {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${kategorija}&apikey=bCrG6hlnlrk4XKQSPfG4InLG75ryLCJG`;
        const odg = await fetch(url);
        const podaci = await odg.json();
        if (podaci._embedded?.events) {
          sviDogadjaji = [...sviDogadjaji, ...podaci._embedded.events];
        }
      }
      setSviDogadjaji(sviDogadjaji);
      setPrikazaniDogadjaji(sviDogadjaji.slice(0, 3)); 
    }; fetchsviDogadjaji();}, []);

  useEffect(() => {
    if (pretrazenPojam) {
      const filtrirano = sviDogadjaji.filter(dogadjaj =>
        dogadjaj.name.toLowerCase().includes(pretrazenPojam.toLowerCase())
      );
      setPrikazaniDogadjaji(filtrirano.slice(0, 3));
    } else {
      setPrikazaniDogadjaji(sviDogadjaji.slice(0, 3));
    }
  }, [pretrazenPojam, sviDogadjaji]);

  const handlePretrazivanje = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpretrazenPojam(e.target.value);
  };

  return (
    <div className='homePage'>
      <NavBar />
      <div className='tekstNaStrani'>
        <h1 className='naslovGlavni'>
          Kupite Karte Lako i Brzo - Vaš Ulaz u Svet Zabave!
        </h1>
        <p className='tekstGlavni'>
          Dobrodošli na našu platformu za prodaju karata, gde vaše iskustvo započinje jednim klikom! Bilo da ste ljubitelj koncerata, pozorišnih predstava,muzeja ili sportskih dogadjaja ovde ćete pronaci sve što vam treba. Naša jednostavna i sigurna platforma omogućava vam da brzo i lako pronadjete i kupite karte za omiljene dogadjaje. Pridružite se hiljadama zadovoljnih korisnika i osigurajte svoje
          mesto za nezaboravne trenutke. Kupovina karata nikada nije bila lakša!
        </p>
      </div>
      <div className='blokSearchHome'>
        <div className='searchHome'>
          <label className='poljeLabelHome'>
            <input
              className='poljeHome'
              placeholder='Unesite naziv dogadjaja'
              value={pretrazenPojam}
              onChange={handlePretrazivanje}
            />
          </label>
        </div>
        <div className='pretragaRezultati'>
          <SearchResults dogadjaji={prikazaniDogadjaji} />
        </div>
      </div>
      <div className='registracija'>
        <div className='slika'>
          <img src={ljudi} alt='ljudi'/>
        </div>
        <div className="kontenjerTekstIDugme">
          <h2 className="registracijaNaslov">Još niste napravili nalog?</h2>
          <p className="registracijaOpis">Registrujte se brzo i lako klikom na dugme</p>
          <Link to='/registracija'><button className="registracijaDugme">Registruj se</button></Link>
        </div>
      </div>
      <div className='partneri'>
        <h1 className='partneriNaslov'>Nasi partneri</h1>
        <img src={partneri} alt='partneri'/>
      </div>
      <div className='futerHome'>
        <Futer />
      </div>
    </div>
  )
}

export default Home;
