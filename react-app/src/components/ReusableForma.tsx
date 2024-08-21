import React, { useState } from "react";
import ReusableDugme from "./ReusableDugme";
import "./ReusableFroma.css";

interface Polje {
  id: string;
  type: string;
  label: string;
}

interface PoljePorps {
  fields: Polje[];
  onSubmit: (formData: Record<string, string>) => void;
  submitButtonText: string;
}

const Forma: React.FC<PoljePorps> = ({
  fields,
  onSubmit,
  submitButtonText,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.id} className="box">
          <label htmlFor={field.id} className="naziv">
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.id}
            onChange={handleChange}
            value={formData[field.id] || ""}
          />
        </div>
      ))}
      <div>
        {" "}
        <ReusableDugme text={submitButtonText} onClick={() => {}} />
      </div>
    </form>
  );
};

export default Forma;
