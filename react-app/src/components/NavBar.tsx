import React from 'react';
import logo from '../assets/Ostalo/Logo.png';
import korpica from '../assets/Ikonice/Korpa.png';
import NavigacijaReusable from './NavigacijaReusable';

const NavBar: React.FC = () => {
  const el = [
    { to: '/home', label: 'Pocetna' },
    { to: '/karte', label: 'Karte' },
    { label: 'Profil' },
    { to: '/kontakt', label: 'Kontakt' },
    { to: '/login', label: 'Login', className: 'Login' },
    { to: '/korpa', label: 'Korpa', icon: korpica }
  ];

  return <NavigacijaReusable logo={logo} elementi={el} />;
};

export default NavBar;
