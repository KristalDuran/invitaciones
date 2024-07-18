// src/components/Form.js
import React, { useState } from 'react';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { FormControl, FormLabel , Input} from '@chakra-ui/react';
import Switch from "react-switch";
import './style.css'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [asistencia, setAsistencia] = useState(true);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          name,
          email
        });
        alert('Datos guardados correctamente con ID: ' + docRef.id);
        setName('');
        setEmail('');
      } catch (error) {
        console.error('Error guardando los datos: ', error);
      }
    };
  
    return (
      <div className='form'>
        <div className='formColumn'>
          <p className='formDetalle'>Nombre</p>
          <input className='formInput' placeholder='Tu nombre'/>
        </div>
        <div className='formColumn'>
          <p className='formDetalle'>Acompañantes</p>
          <input className='formInput' type='number' placeholder='Cantidad de acompañantes'/>
        </div>
        <div className='formRow'>
          <p className='formAsistencia'>Asistiras:</p>
          <Switch className='formSwitch' onChange={() =>setAsistencia(!asistencia)} checked={asistencia} uncheckedIcon checkedIcon offColor='#A3A3A3' onColor='#5D795B'/>
        </div>
        <button className='button'>Enviar</button>
      </div>
    );
  };
  
  export default Form;