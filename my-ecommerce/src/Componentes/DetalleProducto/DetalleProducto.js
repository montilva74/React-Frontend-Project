import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import productos from "./../../Api/products.json";
import "./DetalleProducto.css"

const DetalleProducto = () => {

    const { idProducto } = useParams();
    const producto = productos.find( p => p.id === parseInt(idProducto) )

    const [colorSeleccionado, setColorSeleccionado] = useState()
    const [tallaSeleccionada, setTallaSeleccionada] = useState()

    return (
        <>
            <Container className='mt-10'>
                <Row>
                    <div className="col-7 text-center">
                        <img className='img-fluid mt-5' src={producto.image} alt="producto"/>
                    </div>
                    <div className="col-5">
                        <div className='nombre_producto'> {producto.nombre} </div>
                        <div className='precio_producto'> $ {producto.price} </div>
                        <div className='lista_colores'>
                            <ul> <span className='titulo_lista'>Colores</span>
                            { producto.colors.map( color =>
                                <li onClick={() => setColorSeleccionado(color) } key={color} 
                                    className={ colorSeleccionado === color ? "color-selec" : ""}> {color} </li>
                            ) }
                            </ul>
                        </div>
                        <div className='lista_tallas'>
                            <ul> <span className=''> Tallas </span>
                            { producto.sizes.map( size =>
                                <li onClick={() => setTallaSeleccionada(size) } key={size} 
                                    className={ tallaSeleccionada === size ? "talla-selec" : ""}> {size} </li>
                            ) }
                            </ul>
                        </div>
                        <div>
                            <button className='agregar_button' onClick={() => {}}>AGREGAR AL CARRITO</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default DetalleProducto