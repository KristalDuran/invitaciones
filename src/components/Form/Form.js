import React, { useState } from 'react';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Switch from "react-switch";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css'
import { MdOutlineCancel } from "react-icons/md";
import { invitados } from '../../assets';

const Form = () => {
    const [name, setName] = useState('');
    const [compania, setCompania] = useState([]);
    const [asistencia, setAsistencia] = useState(true);
    const [confirmar, setConfirmar] =useState(false);

    const options = invitados.invitados.map((elemento) => elemento.Nombre);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, 'confirmacion'), {
          name,
          compania,
          asistencia
        });
        alert(`${asistencia? `Gracias por confirmar tu asistencia para ${compania.length+1} ${compania.length > 0 ? 'personas' : 'persona'}. ¡Nos vemos el 12 de Octubre!`: 'Lamentamos que no nos puedas acompañar este día, si cambias de opinion no dudes en hacernoslo saber.'}`)
        setConfirmar(false)
        setName('')
        setCompania([])
        setAsistencia(true)
      } catch (error) {
        console.error('Error guardando los datos: ', error);
      }
    };
  
    const onSelectPerson = (option) => {
      invitados.invitados.map((elemento) => {
          if(elemento.Nombre === option.value) { 
            setName(elemento.Nombre)
            setCompania(elemento.Acompañantes)
          }
          return elemento
      })
    }

    return (
      <div className='form'>
        {
          confirmar &&
          <>
            <div id="overlay" class="overlay"></div>
            <div id="confirmationMessage" class="confirmation-message">
                <p>Hola {name}, ¿estás seguro que quierse confirmar que {asistencia? `asistiras ${compania.length > 0 ? `con ${compania.length} ${compania.length > 1 ? `acompañantes`:`acompañante`}` : ``}`: 'no asistiras'} a nuestra boda?</p>
                <button className='button cancelar' onClick={()=>setConfirmar(false)}>Cancelar</button>
                <button className='button' onClick={handleSubmit}>Confirmar</button>
            </div>
          </>
        }
        <Dropdown options={options} onChange={onSelectPerson} placeholder="Selecciona tu nombre" />
        {compania.map((elemento)=> <div className='formAcompanante'><p className='formAcompananteNombre'>{elemento}</p> <MdOutlineCancel onClick={()=>setCompania(compania.filter((e) => e !== elemento))}/></div>)}
        <div className='formRow'>
          <p className='formAsistencia'>Asistiras:</p>
          <Switch className='formSwitch' onChange={() =>setAsistencia(!asistencia)} checked={asistencia} uncheckedIcon checkedIcon offColor='#A3A3A3' onColor='#5D795B'/>
        </div>
        <button className='button' onClick={()=>{setConfirmar(!confirmar);}}>Confirmar</button>
      </div>
    );
  };
  
  export default Form;