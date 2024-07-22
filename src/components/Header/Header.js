
import React from 'react';
import { fotoNovios, nombre } from '../../assets';
import "./style.css";
import Cancion from '../Cancion/Cancion';

const Header = () => {
    return (
      <div className='header' style={{ backgroundImage: `url(${fotoNovios})` }}>
        
        <img alt='logo' className='headerLogo' src={nombre}></img>
        <Cancion/>
      </div>
    );
  };
  
  export default Header;