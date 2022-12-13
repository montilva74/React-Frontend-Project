import { TYPES } from "../Acciones/CarritoA"

export function CarritoR (state,action){ //recibe estado y un objeto q va a contener las acciones (type)y el payload(valor q se va a modificar)
    switch(action.type){
                        case TYPES.ADD_TO_CARD:
                            {
                            let newItem=state.productos.find(
                            productos =>productos.id===action.payload);
// console.log(newProducto);
                            let itemEnCarrito=state.cart.find(item=>(item.id===newItem))
//preguntamos si en el carrito ya tenemos ese prodcto, de ser asi contamos con quantity
                                return itemEnCarrito ? {
// spread operator = (…), este es un operador q nos permite copiar una parte o la totalidad de un elemento array o un objeto 
                                        ...state,
                                        cart:state.cart.map((item)=>item.id===newItem.id ? 
                                        {...item, quantity:item.quantity+ 1}:item
                                        ),
                                }:{                    
                                        ...state,cart:[...state.cart,{...newItem,quantity:1}], //hago una copia de lo q tengo y agrego
                                }
                            }
                        case TYPES.REMOVE_ONE_FROM_CART:{
                            let itemToDelete=state.cart.find(item=>item.id===action.payload);
                                return itemToDelete.quantity >1 ? {
                                        ...state,//hacemos una copia del estado
                                      cart:state.cart.map((item)=>item.id ===action.payload ? // si coincide el tem con el q recibimos de payload
                                      {...item,quantity:item.quantity-1} //le restamos 1 a quantity
                                      :item) // sino retomamos el elemento
                                }:{
                                     ...state, //hacemos una copia del estado
                                    cart:state.cart.filter((item)=>item.id !== action.payload),
                                };
                            }
                        case TYPES.REMOVE_ONE_FROM_CART:{
                            return {
                                    ...state, //hacemos una copia del estado
                                    cart:state.cart.filter((item)=>item.id !== action.payload),                    
                                    };
                            }
                        case TYPES.CLEAR_CART: 
                             return CarritoR1Estado // devuelve el estado inicial
                        default: 
                                return state;
                        };
};

export const CarritoR1Estado={
    productos : [
        /* 
        {"id": "numero_del_id",
        "category": "categoria",
        "price": "precio",
        "sizes": ["talle", "talle", "talle"],
        "colors": ["color1", "color2"],
        "image": "./assets/foto.jpg",
        "nombre": "nombre_de_la_prenda",
        "tipo": "tipo"
        },
        */
{"id": "1",
"category": "mujer",
"price": "100",
"sizes": ["1", "2", "3"],
"colors": ["blanco", "negro"],
"image": "./assets/foto.jpg",
"nombre": "pantalon",
"tipo": "invierno"
},
{"id": "2",
"category": "hombre",
"price": "200",
"sizes": ["1", "2","3"],
"colors": ["blanco", "negro"],
"image": "./assets/foto.jpg",
"nombre": "pantalon",
"tipo": "invierno"
},
{"id": "3",
"category": "niño",
"price": "300",
"sizes": ["1", "2","3"],
"colors": ["blanco", "negro"],
"image": "./assets/foto.jpg",
"nombre": "pantalon",
"tipo": "invierno"
},
], cart:[],
};