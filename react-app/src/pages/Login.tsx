import React from "react";
import ReusableForma from "../components/ReusableForma";
import "../pages/css/Login.css";

const LoginForm: React.FC = () => {
  const handleSubmit = (formData: { [key: string]: string }) => {
    // Handle form submission here
    console.log(formData);
  };

  const loginFields = [
    { id: "email", type: "email", label: "E-mail" },
    { id: "sifra", type: "password", label: "lozinka" },
  ];

  return (
    <div>
      <div className="loginContainer">
        <ReusableForma
          fields={loginFields}
          submitButtonText="Login"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default LoginForm;
