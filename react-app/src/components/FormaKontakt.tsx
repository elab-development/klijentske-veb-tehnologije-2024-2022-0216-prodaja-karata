import ReusableForma from './ReusableForma'

function FormaKontakt() {
    const handleSubmit = (podaci: Record<string, string>) => {
      console.log(podaci);
      };

    const elementi = [
        {
            id: "email",
            type: "email",
            label: "E-mail",
        },
        {
            id: "name",
            type:"name",
            label: "Pitanje",
        }
    ]
  return (
    <div>
        <ReusableForma polja={elementi} onSubmit={handleSubmit} submitButtonText='Posalji upit'/>
    </div>
    
  )
}

export default FormaKontakt
