import React, { useState } from 'react';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Switch from "react-switch";
import './style.css'

const Form = () => {
    const [name, setName] = useState('');
    const [compania, setCompania] = useState('');
    const [asistencia, setAsistencia] = useState(true);
    const [confirmar, setConfirmar] =useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, 'confirmacion'), {
          name,
          compania,
          asistencia
        });
        alert(`${asistencia? `Gracias por confirmar tu asistencia para ${parseInt(compania)+1} ${parseInt(compania) > 0 ? 'personas' : 'persona'}. ¡Nos vemos el 12 de Octubre!`: 'Lamentamos que no nos puesdas acompañar este día, si cambias de opinion no dudes en hacernoslo saber.'}`)
        setConfirmar(false)
        clearInput(setName)
        clearInput(setCompania)
        setAsistencia(true)
      } catch (error) {
        console.error('Error guardando los datos: ', error);
      }
    };
  
    const handleInputChange = (event, fun) => {
      fun(event.target.value);
    };
  
    const clearInput = (fun) => {
      fun('');
    };

    return (
      <div className='form'>
        {
          confirmar &&
          <>
            <div id="overlay" class="overlay"></div>
            <div id="confirmationMessage" class="confirmation-message">
                <p>Hola {name}, ¿estás seguro que quierse confirmar que {asistencia? `asistiras con ${compania} acompañantes`: 'no asistiras'} a nuestra boda?</p>
                <button className='button cancelar' onClick={()=>setConfirmar(false)}>Cancelar</button>
                <button className='button' onClick={handleSubmit}>Confirmar</button>
            </div>
          </>
        }
        <div className='formColumn'>
          <p className='formDetalle'>Nombre</p>
          <input 
            className='formInput'
            placeholder='Tu nombre'
            value={name}
            onChange={(e) => handleInputChange(e, setName)}/>
        </div>
        <div className='formColumn'>
          <p className='formDetalle'>Acompañantes</p>
          <input
            className='formInput'
            type='number'
            placeholder='Cantidad de acompañantes'
            value={compania}
            onChange={(e) => handleInputChange(e, setCompania)}/>
        </div>
        <div className='formRow'>
          <p className='formAsistencia'>Asistiras:</p>
          <Switch className='formSwitch' onChange={() =>setAsistencia(!asistencia)} checked={asistencia} uncheckedIcon checkedIcon offColor='#A3A3A3' onColor='#5D795B'/>
        </div>
        <button className='button' onClick={()=>{setConfirmar(!confirmar); compania === '' && setCompania(0)}}>Enviar</button>
      </div>
    );
  };
  
  export default Form;