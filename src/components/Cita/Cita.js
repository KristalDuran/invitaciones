
import React from 'react';
import "./style.css";
import { anillosBoda } from '../../assets';

const Cita = () => {
  
    return (
      <div className='cita'>
        <p className='texto'>
            El amor es comprensivo y servicial; 
            el amor nada sabe de envidias, de jactancias, ni de orgullos. 
            No es grosero, no es egoísta, 
            no pierde los estribos, no es rencoroso.
            <p>1 Corintios 13: 4-5</p></p>
        
        <img className='anillos' alt='anillos' src={anillosBoda} />
      </div>
    );
  };
  
  export default Cita;