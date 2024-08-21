import '../pages/css/Registracija.css'
import NavBar from '../components/NavBar';
import Futer from '../components/Futer';
import FormaRegistracija from '../components/FormaRegistracija';

const Registracija = () => {
  return (
    <div className="registracijaStrana">
      
      <div className="navBar1">
        <NavBar />
      </div>
      <h1 className = 'naslovRegistracija'>Registrujte se</h1>

      <div className = 'kontenjerRegistracija'>
          
          <FormaRegistracija />
      </div>


      <div className = 'futer'>
          <Futer />
        </div>
    </div>
  );
};

export default Registracija;