
import NavBar from '../components/NavBar'
import Futer from '../components/Futer'
import './css/Karte.css'
import KarteLista from '../components/KarteLista'
import ReusableDugme from '../components/ReusableDugme'
import { useState } from 'react'



function Karte() {

  const [filter, setFilter] = useState<string | null>(null);

  const handleFilter = (filteri: string) => {
    setFilter(filteri === filter ? null : filteri);
  };


  return (
    <div className = 'stranicaKarte'>
      <div className="navBar1">
        <NavBar />
      </div>

      <h1 className = 'naslovKarte'>Karte</h1>

      <div className = 'searchiFiler'>
         <div className='dugmeFilter'>
            <ReusableDugme text='Sport' onClick={() => handleFilter('sport')}/>
            <ReusableDugme text='Muzika'onClick={() => handleFilter('music')}/>
            <ReusableDugme text='Pozoriste' onClick={() => handleFilter('theatre')}/>
            <ReusableDugme text='Cirkus' onClick={() => handleFilter('circus')}/>
         </div>
         
      </div>

      <div className='karteApi'>
        <div>
          {(!filter || filter === 'sport') && <KarteLista klasa='sport' />}
          {(!filter || filter === 'music') && <KarteLista klasa='music' />}
          {(!filter || filter === 'theatre') && <KarteLista klasa='theatre' />}
          {(!filter || filter === 'circus') && <KarteLista klasa='circus' />}
        </div>
      </div>

      <div className = 'futer'>
        <Futer />

      </div>
    </div>
  )
}

export default Karte
