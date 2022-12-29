import React, { useState } from 'react'
import productos from "./../../Api/products.json";
import Carro from "./Carro.css"


const Carrito = () => {

    // Obtener arreglo del carrito
    const cart = JSON.parse( localStorage.getItem("cart") )
    // Por cada elemento
    const carrito = cart.map( item => {
        const p = productos.find(p => p.id === item.id)
        return {...p, color: item.color, talla: item.talla, cantidad: item.cantidad}
    })

    const subTotal = carrito.reduce((suma, item) => parseFloat(suma) + parseFloat(item.price * item.cantidad) , 0)


    return (
        <div className="container">
            <div className="row w-100">
                <div className="col-lg-12 col-md-12 col-12">
                    <h3 className="display-5 mb-2 text-center title-cart">Carrito de Compra</h3>
                    <table id="shoppingCart" className="table table-condensed table-responsive">
                        <thead>
                            <tr>
                                <th style={{width:"60%"}}>Producto</th>
                                <th style={{width:"12%"}}>Precio</th>
                                <th style={{width:"10%"}}>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {  carrito.map( item => 
                            <tr>
                                <td data-th="Producto">
                                    <div className="row">
                                        <div className="col-md-3 text-left">
                                            <img src={item.image} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                                        </div>
                                        <div className="col-md-9 text-left mt-sm-2">
                                            <h4> {item.nombre} </h4>
                                            <p className="font-weight-light"> {item.tipo} - {item.color} - {item.talla} </p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Precio"> {item.price} </td>
                                <td data-th="Cantidad">
                                    <input type="number" style={{color: "black"}} className="form-control form-control-lg text-center" value={item.cantidad}/>
                                </td>
                            </tr>
                            )}

                        </tbody>
                    </table>
                    <div className='d-flex justify-content-end subtotal'>
                        <h4>Subtotal:</h4>
                    </div>
                    <div className="d-flex justify-content-end subtotal">
                        
                        <h5>${subTotal.toFixed(2)}</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                    <a href="/" className=" mb-4 b-comprar">Comprar</a>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                    <a className='s' href="/">
                        * Seguir Comprando</a>
                </div>
            </div>
        </div>
    )
}


export default Carrito