
import KarteLista from './KarteLista';
import Dogadjaj from '../models/Dogadjaj';

interface RezultatiPretrageProps {
  dogadjaji: Dogadjaj[];
}

function RezultatiPretrage({ dogadjaji }: RezultatiPretrageProps) {
  return (
    <div className="rezPretrage">
      <KarteLista dogadjaji={dogadjaji.slice(0, 3)} />
    </div>
  );
}

export default RezultatiPretrage;