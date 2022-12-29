import React from 'react'

const CartItem = ({data, delFromCart}) => {
  let {id,price,sizes,colors, image,name,quantity}=data;
  
  return (
    <div>
      <h2>{name}</h2>
      <h2>{image}</h2>
      <h2>{sizes}</h2>
      <h2>{colors}</h2>
      <h1>${price}.00 x {quantity}= ${price * quantity}.00</h1>
      <br/>
      <button class="btn btn-dark" onClick={()=>delFromCart(id)}>Sacar</button>
      <br/>
      <button class="btn btn-dark" onClick={()=>delFromCart(id,true)}>Vaciar</button>
      <br/>
    </div>
  )
}

export default CartItem