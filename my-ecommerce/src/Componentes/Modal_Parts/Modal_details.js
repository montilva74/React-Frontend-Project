import React, { useState,useParams } from 'react';
import productos from "./../../Api/products.json";
import { Container, Row } from 'react-bootstrap';

const Modal_details = () => {

    const [ tallaSeleccionada ,setTallaSeleccionada ] = useState();
    const [ colorSeleccionado, setColorSeleccionado] = useState();
    const { idProducto } = useParams();
    const producto = productos.find( p => p.id === parseInt(idProducto) )


    return (
      <>
        <Container>
          <Row>
            <div className='col-7'> 
                <img alt="imagen detalle" src={producto.image}/>
            </div>
            <div className="col-5">
                <h2>{producto.nombre}</h2>
                <div>
                  <ul> <span className=''> Tallas disponibles: </span>
                      { producto.sizes.map( size =><li onClick={() => setTallaSeleccionada(size) } key={size} 
                                          className={ tallaSeleccionada === size ? "talla-selec" : ""}> {size} </li>)
                      }
                  </ul> 
                </div>
                <div>
                  <ul> <span className=''> Color disponibles</span>
                      { producto.colors.map( color =><li onClick={() => setColorSeleccionado(color) } key={color} 
                                          className={ colorSeleccionado === color ? "color-selec" : ""}> {color} </li>)
                      }
                  </ul>
                </div>
                    
                <p>${producto.price}</p>
                <button onClick={()=>{}}>Agregar al carrito de compras</button>

            </div>
          </Row>
        </Container>
      </>
    )  
  }

export default Modal_details