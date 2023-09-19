import React from 'react';
import { useState } from 'react';
import './encuesta.css';
function Encuestas({ encuestas }) {
    const [seleccion, setSeleccion] = useState({});

    const handleSelect = (opcion,id) => {
        const newSeleccion = {...seleccion};    
        if(newSeleccion[id]===opcion){
            delete newSeleccion[id];
        }else{
            newSeleccion[id] = opcion
        }
        setSeleccion(newSeleccion);
    }
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul className='preguntas'>
                {encuestas.map(encuesta => (
                    <li key={encuesta.id}>{encuesta.pregunta}
                    <ul className='opciones'>
                        {encuesta.opciones.map(opcion => (
                            <li key={opcion} onClick={()=>handleSelect(opcion,encuesta.id)} className={seleccion[encuesta.id] === opcion? 'seleccionado' : ''}>{opcion}</li>
                        ))}
                    </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Encuestas;