
const ProductItem({data,addToCart})=> {
                let {id,category,price,sizes,colors, image,nombre,tipo} =data;
 
    return (
        <div>
            <h2>{nombre}</h2>
            <h2>{image}</h2>
            <h2>{sizes}</h2>
            <h2>{colors}</h2>
            <h1>${price}.00</h1>
            <button onClick={()=>addToCart(id)}>Agregar</button>
        </div>
        )

};
export default ProductItem;