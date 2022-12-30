import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import productos from "./../../Api/products.json";
import "./DetalleProducto.css"

const DetalleProducto = () => {

    const { idProducto } = useParams();
    const producto = productos.find(p => p.id === parseInt(idProducto))

    const [colorSeleccionado, setColorSeleccionado] = useState()
    const [tallaSeleccionada, setTallaSeleccionada] = useState()
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState()
    const [mensaje, setMensaje] = useState()

    const addToCart = (event, product) => {
        setMensaje(null)
        if (product.id != null && product.talla != null && product.color != null && product.cantidad > 0) {

            // Tomar los productos del LS
            let cart = JSON.parse(localStorage.getItem("cart"))
            if (cart == null) {
                cart = []
            }

            // Chequear si existe el elemento con talla y color
            const existe = cart.find(item => item.id === product.id && item.talla === product.talla && item.color === product.color)


            if (!existe) {

                // Agregar el producto al cart
                cart = [...cart, product]
                localStorage.setItem("cart", JSON.stringify(cart))

                // Actualizar la cantidad de productos
                const prodCount = cart.reduce((suma, item) => suma + parseInt(item.cantidad), 0);
                localStorage.setItem("cartNumber", prodCount)
                window.location.reload(false);

            } else {
                setMensaje("El producto ya esta agregado al carrito")
            }

        } else {
            setMensaje("Debes seleccionar talla, color y cantidad")
        }
    }

    return (
        <Container className="mt-10 detalle-producto">
            <Row>
                <Col xs={12} md={7} className="text-center">
                    <img className="img-fluid mt-5" src={producto.image} alt="producto" />
                </Col>
                <Col xs={12} md={5}>
                    <div className="nombre_producto"> {producto.nombre} </div>
                    <div className="precio_producto"> $ {producto.price} </div>
                    <div className="lista_colores">
                        <ul>
                            <span className="titulo_lista">Colores</span>
                            {producto.colors.map((color) => (
                                <li
                                    onClick={() => setColorSeleccionado(color)}
                                    key={color}
                                    className={colorSeleccionado === color ? "color-selec" : ""}
                                >
                                    {color}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lista_tallas">
                        <ul>
                            <span className=""> Tallas </span>
                            {producto.sizes.map((size) => (
                                <li
                                    onClick={() => setTallaSeleccionada(size)}
                                    key={size}
                                    className={tallaSeleccionada === size ? "talla-selec" : ""}
                                >
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lista_tallas">
                        <input
                            className="mb-2 w-25"
                            style={{ color: "black" }}
                            type="number"
                            onChange={(event) => setCantidadSeleccionada(event.target.value)}
                            min={0}
                            max={12}
                        />
                    </div>
                    <div>
                        <button
                            className="agregar_button"
                            onClick={(event) =>
                                addToCart(event, {
                                    id: producto.id,
                                    talla: tallaSeleccionada,
                                    color: colorSeleccionado,
                                    cantidad: cantidadSeleccionada,
                                })
                            }
                        >
                            AGREGAR AL CARRITO
                        </button>
                        {mensaje && (
                            <div className="mt-1 text-danger"> {mensaje} </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DetalleProducto;