import React, { Component, useEffect, useState } from 'react';
import productos from "./../../Api/products.json";

export class Modal_details extends Component {



  render() {
    return (
      <div>
        <div className='Imagen'> 
            <img alt="imagen detalle" src={productos.image}/>
        </div>
        <div>
            <h2>{productos.nombre}</h2>
            <p>Descripcion: </p>
            <p>Talles disponibles: </p>
            <ul>
                {productos.sizes.map((producto) => <div>{producto}</div>)}
            </ul>
           
            <p>Colores disponibles: </p>
            <div className='Nono_color' />
            
            <p>{productos.price}</p>
            <button>Comprar</button>

        </div>
      </div>
    )
  }
}
