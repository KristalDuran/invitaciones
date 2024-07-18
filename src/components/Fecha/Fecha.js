
import React, { useEffect, useState } from 'react';
import { calendar } from '../../img';
import "./style.css";

const Fecha = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [seg, setSeg] = useState(0);

  useEffect(() => {
    updateTime()
    setInterval(updateTime, 600);
  });
  
  const updateTime = () => {
    // Obtener la fecha y hora actuales
    const now = new Date();

    // Fecha objetivo para el 12 de octubre a las 2 PM
    let targetDate = new Date(now.getFullYear(), 9, 12, 14, 0, 0); // Mes 9 es octubre
    if (now > targetDate) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const diffToOctober = targetDate - now;

    // Cálculo de tiempo restante hasta el 12 de octubre a las 2 PM
    setDays(Math.floor(diffToOctober / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((diffToOctober % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinuts(Math.floor((diffToOctober % (1000 * 60 * 60)) / (1000 * 60)));
    setSeg(Math.floor((diffToOctober % (1000 * 60)) / 1000));
  }

  const onClickCalendar = () => {
    window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Edwin%20Y%20Kristal&dates=20241012T140000Z/20241012T150000Z&details=No%20olvides%20tu%20mejor%20sonrisa.&location=Zarcero,%20Alajuela&ctz=America/Costa_Rica", '_blank');
  }

  return (
    <div className='fecha'>
      <div className='cuadro'></div>
      <div className='faltan'>
          <p className='titleFecha'>Faltan</p>
          <div className='tiempo'>
              <div className='detalle'>
                <p className='dias'>{days}</p>
                <p className='letra'>Días</p>
              </div>
              <div className='detalle'>
                <p className='dias'>{hours}</p>
                <p className='letra'>Horas</p>
              </div>
              <div className='detalle'>
                <p className='dias'>{minuts}</p>
                <p className='letra'>Mins.</p>
              </div>
              <div className='detalle'>
                <p className='dias'>{seg}</p>
                <p className='letra'>Segs.</p>
              </div>
          </div>
      </div>
      <div className='calendario'>
          <p className='mes'>Octubre</p>
          <img alt='calendar' src={calendar} />
      </div>
      <p className='fechaexacta'>12.10.24</p>
      <button className='boton' onClick={onClickCalendar}>Agregar a calendario</button>
    </div>
  );
};
  
  export default Fecha;