import Slika from '../models/Slika'
import '../models/Dogadjaj.css'

interface Dogadjaj {
    id: string;
    name: string;
    images: Slika[];
    dates: {
      start: {
        localDate: string;
        localTime: string;
      };
    };
  }

export default Dogadjaj;