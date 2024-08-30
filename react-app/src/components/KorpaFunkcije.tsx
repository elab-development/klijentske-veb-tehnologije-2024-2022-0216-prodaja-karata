import { createContext, useState, useContext } from 'react';
import Dogadjaj from '../models/Dogadjaj';
import KorpaFunkcijeInterfejs from '../models/KorpaFunkcijeIntefejs';
import ElementUKorpi from '../models/ElementUKorpi';


const KorpaKontekst = createContext<KorpaFunkcijeInterfejs | undefined>(undefined);

export const KorpaProvajder: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stavkeUKorpi, postaviStavkeUKorpi] = useState<ElementUKorpi[]>([]);
  const dodajUKorpu = (stavka: Dogadjaj) => {
    postaviStavkeUKorpi(prethodneStavke => {
      const postojecaStavka = prethodneStavke.find(stavkaUKorpi => stavkaUKorpi.id === stavka.id);
      if (postojecaStavka) {
        return prethodneStavke.map(stavkaUKorpi =>
          stavkaUKorpi.id === stavka.id ? { ...stavkaUKorpi, broj: stavkaUKorpi.broj + 1 } : stavkaUKorpi
        );
      }
      return [...prethodneStavke, { ...stavka, broj: 1 }];
    });
  };

  const izbaciIzKorpe = (stavkaId: string) => {
    postaviStavkeUKorpi(prethodneStavke => prethodneStavke.filter(stavka => stavka.id !== stavkaId));
  };

  const povecajKolicinu = (stavkaId: string) => {
    postaviStavkeUKorpi(prethodneStavke =>
      prethodneStavke.map(stavka =>
        stavka.id === stavkaId ? { ...stavka, broj: stavka.broj + 1 } : stavka
      )
    );
  };

  const smanjiKolicinu = (stavkaId: string) => {
    postaviStavkeUKorpi(prethodneStavke =>
      prethodneStavke.map(stavka =>
        stavka.id === stavkaId && stavka.broj > 1
          ? { ...stavka, broj: stavka.broj - 1 }
          : stavka
      ).filter(stavka => stavka.broj > 0)
    );
  };

  return (
    <KorpaKontekst.Provider value={{ ElementiUKorpi: stavkeUKorpi, dodajUKorpu, izbaciIzKorpe, povecaj: povecajKolicinu, smanji: smanjiKolicinu }}>
      {children}
    </KorpaKontekst.Provider>
  );
};

export const useCart = () => {
  const kontekst = useContext(KorpaKontekst);
  if (kontekst === undefined) {
     throw new Error('Greska');
  }

  return kontekst;
};