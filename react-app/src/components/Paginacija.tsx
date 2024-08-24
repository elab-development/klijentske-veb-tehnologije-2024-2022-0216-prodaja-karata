import React from 'react';
import './Paginacija.css';

interface PaginacijaProps {
  dogadjajiPoStrani: number;
  ukupnoDogadjaja: number;
  paginiraj: (brojStrane: number) => void;
  trenutnoNaStrani: number;
}

const Paginacija: React.FC<PaginacijaProps> = ({ dogadjajiPoStrani, ukupnoDogadjaja, paginiraj, trenutnoNaStrani }) => {
  const brojStrana = [];

  for (let i = 1; i <= Math.ceil(ukupnoDogadjaja / dogadjajiPoStrani); i++) {
    brojStrana.push(i);
  }

  return (
    <nav className="paginacija">
      <ul>
        {brojStrana.map(broj => (
          <li key={broj} >
            <a onClick={() => paginiraj(broj)} >
              {broj}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginacija;