import React from 'react'
import ReusableForma from "./ReusableForma";

function FormaRegistracija() {
    const handleSubmit = (podaci: Record<string, string>) => {
        console.log("Uneti podaci:", podaci);
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
      <ReusableForma fields={polja} onSubmit={handleSubmit} submitButtonText='Registrujte se'/>
    </div>
  )
}

export default FormaRegistracija
