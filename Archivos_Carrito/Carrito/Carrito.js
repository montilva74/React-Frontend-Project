import React from 'react'
import {useReducer } from 'react'
import CartItem from '../CartItem';
import ProductItem2 from '../ProductItem';
import {CarritoR,CarritoR1Estado} from "../../Reducers/CarritoR";
import { TYPES } from '../../Acciones/CarritoA';

const Carrito = () => {
      const [state,dispatch]=useReducer (CarritoR,CarritoR1Estado);
      // Destructuramos, ver CarritoR
      const {productos,cart}=state;
  
      const addToCart =(id)=>{
            console.log(id);
            dispatch({type:TYPES.ADD_TO_CART, payload:id});
                            };
      const delFromCart=(id,all=false)=>{
            console.log(id, all);
            if(all) dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
            else
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART,payload:id})
                                        }
      const clearCart =()=>{
            dispatch({type:TYPES.CLEAR_CART});
                            };
return (
    <div>
        <h1>Carrito de compras</h1>
        <h2>Productos</h2>
        {/* Renderizo los productos */}
        <article className="box grid-responsive">
                {productos.map((productos)=>{
                <ProductItem2 key= {productos.id}
                data={productos} 
                addToCard={addToCart}/>
                                              }) 
          }
        </article>

        <h3>Carrito</h3>
        <article className='box'>
          <button onClick={clearCart}>Vaciar Carrito</button>
          {
            cart.map((item,index) =>(
            <CartItem key={index} data={item} delFromCart={delFromCart}/>
            ))
          }
        </article>
    </div>
  );
};
export default Carrito