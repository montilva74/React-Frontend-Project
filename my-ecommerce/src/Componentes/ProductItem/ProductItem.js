import React from 'react';
import "./ProductItem.css";

//Este componente muestra el producto(imagen, nombre, precio)
export default function ProductItem({id, img, name, precio, category}) {

  return (
    <a href='/producto/id' className='product_a'>
        <div className='product'>
            <div className="product_image">
                <img src={img} alt="producto"/>
            </div>
            <div className='product_name'>
                <a href='/'> { name.substring(0, 20) } </a>
            </div>
            <div className='product_price'>
                ${precio}
            </div>
        </div>
    </a>
  )
}
