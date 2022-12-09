import React from 'react';
import "./Ordenar.css";

export default function Ordenar({setOrdenarPor}) {

  return (
    <div className='ordenar'>
      <p>Ordenar por</p>
      <select onChange={ (event) => setOrdenarPor(event.target.value)} >
        <option value="">Seleccione una opcion...</option>
        <option value="precio">Menor Precio</option>
        <option value="nombre">Alfabeticamente [A-Z]</option>
      </select>
    </div>
  )
}
