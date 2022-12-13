import React from "react"


export function Resumen ({subtotal}) {

return <>
    <h1>Resumen</h1>
    <h2>Subtotal ${subtotal}.00</h2>
    <h3>Impuesto $ 0.0</h3>
    <h2>Total de pedido ${subtotal}</h2>

<button class="btn btn-dark"onClick={}>Finalizar Compra</button>
</>
}

