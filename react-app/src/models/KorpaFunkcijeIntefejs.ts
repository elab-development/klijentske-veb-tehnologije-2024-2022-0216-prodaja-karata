
import Dogadjaj from "./Dogadjaj";
import ElementUKorpi from "./ElementUKorpi";

interface KorpaFunkcijeInterfejs {
    ElementiUKorpi: ElementUKorpi[];
    dodajUKorpu: (stavka: Dogadjaj) => void;
    izbaciIzKorpe: (stavkaId: string) => void;
    povecaj: (stavkaId: string) => void;
    smanji: (stavkaId: string) => void;
  }

export default KorpaFunkcijeInterfejs;