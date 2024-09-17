import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

const Products =()=>{
 const {data,cart,setCart}=useContext(dataContext);
 const buyProducts = (product) => {
    setCart([...cart, product]);
  };
return data.map((product)=>{
    return (
<div className='card'key={product.id}>
    <img src={product.image} alt=""/>
    <h3>{product.nombre}</h3>
    <h4>{product.price}</h4>
    <button onClick={() => buyProducts(product)}>Comprar</button>
    
</div>
    );
});
};
export default Products;