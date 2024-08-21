import React from "react";
import "../pages/css/Login.css";
import NavBar from "../components/NavBar";
import Futer from "../components/Futer";
import FormaLogin from "../components/FormaLogin";

const LoginForm: React.FC = () => {
  return (
    <div>
      <div className="navBar1">
        <NavBar />
      </div>

      <div>
        <h1 className="naslovLogin">Prijavite se</h1>
        <FormaLogin />
      </div>

      <div className="futerLogin">
        <Futer />
      </div>
    </div>
  );
};

export default LoginForm;
