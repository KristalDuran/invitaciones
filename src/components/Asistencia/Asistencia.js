
import React, { useState } from 'react';
import { nombre } from '../../img';
import Form from '../Form/Form';
import "./style.css";

const Asistencia = () => {
  
    return (
      <div className='asistencia'>
        <h2  className='asistenciaTitle'>Asistencia</h2>
        <p className='asistenciaInfo'>Saber que estarás con nosotros este día tan especial es muy importante, por esto no olvides confirmar tu asitencia antes del <b>15 de Septiembre.</b></p>
        <Form />
        <p className='regalo'>Tu presencia es lo más importante para nosotros, pero si gustas darnos algún regalo preferimos el mismo en efectivo.</p>
        <p className='despedida'>Te esperamos con tu mejor sonrisa.</p>
        <p>Edwin y Kristal</p>
      </div>
    );
  };
  
  export default Asistencia;