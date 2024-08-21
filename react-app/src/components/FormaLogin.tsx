
import ReusableForma from "./ReusableForma";

const FormaLogin: React.FC = () => {
  
  const handleSubmit = (podaci: Record<string, string>) => {
    console.log("Uneti podaci:", podaci);
  };

  const polja = [
    {
      id: "email",
      type: "email",
      label: "E-mail",
    },
    {
      id: "password",
      type: "password",
      label: "Lozinka",
    },
  ];

  return (
    <div className="loginContainer">
      <ReusableForma
        fields={polja}
        onSubmit={handleSubmit}
        submitButtonText="Prijavi se"
      />
    </div>
  );
};

export default FormaLogin;
