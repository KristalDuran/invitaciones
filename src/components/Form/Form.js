import React, { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import Switch from "react-switch";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css'
import { MdOutlineCancel } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Form = () => {
    const [invitados, setInvitados] = useState([]);
    const [name, setName] = useState('');
    const [compania, setCompania] = useState([]);
    const [asistencia, setAsistencia] = useState(true);
    const [confirmar, setConfirmar] =useState(false);
    const [disabledConfirm, setDisabledConfirm] = useState(false);
    const [confirmarEliminado, setconfirmarEliminado] = useState(false);
    const [options, setOptions] = useState([]);
    const [eliminado ,setEliminado] = useState('')
    const [final, setFinal] = useState(false);

    useEffect(() => {
      getInvitados();
    }, [])

    const getInvitados = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "invitados"));
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() });
        });
        setInvitados(usersData);
        const lista = usersData?.filter((e) => e.confirmado === false);
        setOptions(lista?.map((e) => e.nombre))
      } catch (error) {
        console.error("Error obteniendo documentos: ", error);
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setDisabledConfirm(true);
        await addDoc(collection(db, 'confirmacion'), {
          name,
          compania,
          asistencia
        });
        const invitado = invitados.find((e) => e.nombre === name)
        const refe = doc(db, "invitados", invitado.id);
        await updateDoc(refe, {confirmado: true});
        getInvitados();
        setFinal(true);
        setConfirmar(false);
      } catch (error) {
        console.error('Error guardando los datos: ', error);
      }
    };
  
    const onSelectPerson = (option) => {
      invitados?.map((elemento) => {
          if(elemento.nombre === option.value) { 
            setName(elemento.nombre)
            setCompania(elemento.acompañantes)
          }
          return elemento
      })
    }

    return (
      <div className='form'>
        <Dropdown options={options || []} onChange={onSelectPerson} value={name} placeholder="Selecciona tu nombre" />
        {compania?.length > 0 && compania?.map((elemento)=> 
          <div className='formAcompanante'>
            <p className='formAcompananteNombre'>{elemento}</p>
            <MdOutlineCancel onClick={()=>{setconfirmarEliminado(true); setEliminado(elemento)}}/>
            {confirmarEliminado &&
              <>
                <div className="overlay"></div>
                <div className="confirmation-message">
                    <p>Hola {name}, ¿estás seguro que quiers eliminiar de tu lista de acompañante a {eliminado}?</p>
                    <button className='button cancelar' onClick={()=>setconfirmarEliminado(false)}>Cancelar</button>
                    <button className='button' onClick={() => setCompania(compania.filter((e) => e !== eliminado))}>Eliminar</button>
                </div>
              </>
            }
          </div>)}
        <div className='formRow'>
          <p className='formAsistencia'>Asistiras:</p>
          <Switch className='formSwitch' onChange={() => setAsistencia(!asistencia)} checked={asistencia} uncheckedIcon checkedIcon offColor='#A3A3A3' onColor='#5D795B'/>
        </div>
        <button className='button' onClick={()=>{setConfirmar(!confirmar);}}>Confirmar</button>
        {
          confirmar &&
          <div className='center'>
            <div className="overlay2"></div>
            <div className="confirmation-message">
                <p>Hola {name}, ¿estás seguro que quierse confirmar que {asistencia? `asistiras ${compania.length > 0 ? `con ${compania.length} ${compania.length > 1 ? `acompañantes`:`acompañante`}` : ``}`: 'no asistiras'} a nuestra boda?</p>
                <button className='button cancelar' onClick={()=>setConfirmar(false)}>Cancelar</button>
                <button className='button' disabled={disabledConfirm} onClick={handleSubmit}>Confirmar</button>
            </div>
          </div>
        }
        {final &&
          <div className='center'>
            <div className="overlay2"></div>
            <div className="confirmation-message">
                <IoClose className='close' onClick={()=>{setFinal(false); setCompania([]); setName('')}}/>
                <p>{asistencia ? `Gracias por confirmar tu asistencia para ${compania.length+1} ${compania.length > 0 ? 'personas' : 'persona'}. ¡Nos vemos el 12 de Octubre!`: 'Lamentamos que no nos puedas acompañar, si cambias de opinión no dudes en hacernoslo saber.'}</p>
            </div>
          </div>
        }
      </div>
    );
  };
  
  export default Form;