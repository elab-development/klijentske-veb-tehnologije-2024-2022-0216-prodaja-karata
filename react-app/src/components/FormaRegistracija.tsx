
import ReusableForma from "./ReusableForma";
import { useState } from "react";

function FormaRegistracija() {
  const [daLiJeRegistrovan, setRegistrovan] = useState(false);

    const handleSubmit = (podaci: Record<string, string>) => {

        sessionStorage.setItem('registracijaPodaci', JSON.stringify(podaci));

        setRegistrovan(true);
        alert("Uspešno ste se registrovali!");
      };

    const polja = [
        {
          id: "name",
          type: "name",
          label: "Ime",
        },
        {
          id: "surname",
          type: "name",
          label: "Prezime",
        },
        {
            id: "birthday",
            type: "date",
            label: "Datum Rodjenja"
        },
        {
            id: "country",
            type: "name",
            label: "Drzava"
        },
        {
            id: "email",
            type: "email",
            label: "E-mail",
          },
          {
            id: "password",
            type: "password",
            label: "Lozinka",
          }
      ];

  return (
    <div>
      {daLiJeRegistrovan ? (
        <p>Uspešno ste se registrovali! Hvala vam.</p>
      ) : (
        <ReusableForma polja={polja} onSubmit={handleSubmit} submitButtonText='Registrujte se'/>
      )}
    </div>
  )
}

export default FormaRegistracija
