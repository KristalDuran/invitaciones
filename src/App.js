import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Cita from './components/Cita/Cita';
import Ubicaciones from './components/Ubicaciones/Ubicaciones';
import Fecha from './components/Fecha/Fecha';
import Asistencia from './components/Asistencia/Asistencia';

function App() {
  return (
    <div className="App">
      <Header />
      <Cita />
      <Ubicaciones />
      <Fecha />
      <Asistencia />
    </div>
  );
}

export default App;
