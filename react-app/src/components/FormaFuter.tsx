import ReusableForma from '../components/ReusableForma'
import '../components/Futer.css'

function FormaFuter() {

    const polje = [{id: "dugme", type: "submit", label:''}]

    
  return (
    <div className = 'forma'>
      <ReusableForma fields={polje} onSubmit={()=>{}} submitButtonText='Prijavi se'/>
    </div>
  )
}

export default FormaFuter
