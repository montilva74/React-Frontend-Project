import React from 'react';
import "./Ordenar.css";

export default function Ordenar() {
  return (
    <div className='ordenar'><p>Ordenar por</p>
    <select>
    <option value="precio">Precio</option>
    <option value="nombre">Nombre</option>
    </select>
    </div>
  )
}
