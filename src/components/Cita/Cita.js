
import React from 'react';
import "./style.css";
import { anillosBoda } from '../../img';

const Cita = () => {
  
    return (
      <div className='cita'>
        <p className='texto'>
            El amor es paciente, es bondadoso. 
            El amor no es envidioso ni jactancioso 
            ni orgulloso. No se comporta con rudeza, 
            no es egoísta, no se enoja fácilmente, no guarda rencor.
            <p>1 Corintios 13:4-5</p></p>
        
        <img className='anillos' alt='anillos' src={anillosBoda} />
      </div>
    );
  };
  
  export default Cita;