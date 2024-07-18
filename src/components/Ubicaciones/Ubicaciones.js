
import React from 'react';
import "./style.css";

const Ubicaciones = () => {
  
    return (
      <div className='ubicacion'>
        <h1 className='title'>¡Nos casamos!</h1>
        <p className='mensaje'>Y queremos compartir este momento tan especial contigo</p>
        <h3 className='subtitle'>Ceremonia</h3>
        <p className='informacion'>Templo católico, Parroquia San Rafael Arcangel, Zarcero</p>
        <div className='row'>
            <div className='hora'>2:00p.m</div>
            <a className='button' href='https://maps.app.goo.gl/Joq15w1AR115HKa96' target='blank'>Ubicación</a>
        </div>
        <h3 className='subtitle'>Fiesta</h3>
        <p className='informacion'>Salón de eventos Río, Zapote, Zarcero</p>
        <div className='row'>
            <div className='hora'>3:00p.m</div>
            <a className='button' href='https://maps.app.goo.gl/NxTyRgFLMHVgFMW56' target='blank'>Ubicación</a>
        </div>
      </div>
    );
  };
  
  export default Ubicaciones;