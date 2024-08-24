import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

interface NavClan{
    to: string;
    label: string;
    icon? : string;
    className?: string;

}

interface NavProps{
    logo: string;
    elementi: NavClan[];
}

const NavigacijaReusable: React.FC<NavProps> = ({ logo, elementi}) => {
  return (
    <div className = 'navbar'>
        <Link to = '/home'> <img src = {logo} alt = 'logo' className = 'Logo'/></Link>
        <ul>
            {elementi.map((element,index) =>(
                <li key = {index} className = {element.className}>
                    <Link to = {element.to}>
                        {element.icon ? <img src = {element.icon} className ='Korpica' alt = {element.label} /> : element.label}  
                    </Link>
                </li>
            )
            )}
        </ul>
      
    </div>
  )
}

export default NavigacijaReusable
