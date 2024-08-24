
import ReusableForma from "./ReusableForma";

const FormaLogin: React.FC = () => {
  
  const handleSubmit = (podaci: Record<string, string>) => {
   console.log(podaci);
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
    <div >
      <ReusableForma
        polja={polja}
        onSubmit={handleSubmit}
        submitButtonText="Prijavi se"
      />
    </div>
  );
};

export default FormaLogin;
