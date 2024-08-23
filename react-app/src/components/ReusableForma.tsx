import React, { useState } from "react";
import ReusableDugme from "./ReusableDugme";
import "./ReusableFroma.css";

interface Polje {
  id: string;
  type: string;
  label: string;
}

interface PoljePorps {
  polja: Polje[];
  onSubmit: (formData: Record<string, string>) => void;
  submitButtonText: string;
}

const Forma: React.FC<PoljePorps> = ({
  polja,
  onSubmit,
  submitButtonText,
}) => {
  const [podaci, setPodaci] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPodaci({ ...podaci, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(podaci);
  };

  return (
    <form onSubmit={handleSubmit}>
      {polja.map((polje) => (
        <div key={polje.id} className="box">
          <label htmlFor={polje.id} className="naziv">
            {polje.label}
          </label>
          <input
            type={polje.type}
            id={polje.id}
            onChange={handleChange}
            value={podaci[polje.id] || ""}
          />
        </div>
      ))}
      <div className = 'dugmenceNaKraju'>
        {" "}
        <ReusableDugme text={submitButtonText} onClick={() => {}} />
      </div>
    </form>
  );
};

export default Forma;
