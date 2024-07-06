// src/components/Form.js
import React, { useState } from 'react';
import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    );
  };
  
  export default Form;