
import React from 'react';
import { fotoNovios, nombre } from '../../img';
import "./style.css";

const Header = () => {
  
    return (
      <div className='header' style={{ backgroundImage: `url(${fotoNovios})` }}>
        <img className='headerLogo' src={nombre}></img>
      </div>
    );
  };
  
  export default Header;