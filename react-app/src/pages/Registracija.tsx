import '../pages/css/Registracija.css'

const Registracija = () => {
  return (
    <div className="kontenjer">
      <h2>Registrujte se</h2>
      <form className="forma">
        <input type="text" placeholder="Ime" />
        <input type="text" placeholder="Prezime" />
        <input type="text" placeholder="Datum Rodjenja" />
        <input type="text" placeholder="Drzava" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Lozinka" />
        <button type="submit" className="submit-button">
          Registrujte se
        </button>
      </form>
    </div>
  );
};

export default Registracija;