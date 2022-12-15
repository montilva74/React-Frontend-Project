import React, { Component } from 'react'
import './PagoYenvio.css'

let lugar = document.getElementById('Compra_div_instrucciones_id');
function explanation (num){
    let frase; 
    switch(num) {
        case 0:
            frase = '"Nombre de la persona que recibe"';
            break
        case 1:
            frase = '"Apellido de la persona que recibe"';
            break
        case 2:
            frase = '"Calle y número"';
            break
        case 3:
            frase = '"Ciudad del receptor"';
            break
        case 4:
            frase = '"Codigo postal de la ciudad"';
            break
            case 5:
            frase = '"Fecha en que le gustaria que fuese entregado"';
            break
            default: 
            frase = "tranqui"
        }
            return lugar.innerText = frase;
            
};

// funcion de prueba
function mostrarGuardado (event){
    event.preventDefault();
    let textoComprobacion = "";
    let inputNombre2 = inputNombre.value;
    let inputApellido2 = inputApellido.value;
    let inputDireccion2 = inputDireccion.value;
    let inputLocalidad2 = inputLocalidad.value;
    let inputCp2 = inputCp.value;
    let inputEntrega2 = inputEntrega.value;

    textoComprobacion = `Tu compra sera entregada a ${inputNombre2} ${inputApellido2} el dia ${inputEntrega2} en la calle ${inputDireccion2} de la localidad de codigo postal: ${inputCp2}.` 
    return console.log(textoComprobacion)
}

function pagarYseguir (event) {
    event.preventDefault();
    antes.setAttribute('class','Comprar_ocultar');
    despues.removeAttibute('class','Comprar_ocultar')

};

let inputNombre = document.getElementById('input_nombre');
let inputApellido = document.getElementById('input_apellido');
let inputDireccion = document.getElementById('input_direccion');
let inputLocalidad = document.getElementById('input_localidad');
let inputCp = document.getElementById('input_cp');
let inputEntrega = document.getElementById('input_entrega');
let botonGuardar = document.getElementById('btn_guardar');
botonGuardar.addEventListener('click', mostrarGuardado);

let antes = document.getElementsByClassName('Compras_antes');
let despues = document.getElementsByClassName('Comprar_despues');


export default class Compra extends Component {
    render(){
    return(
        
        <Compra>
            <div className="Compra_div_contenedor">
                <div className="Compra_PanelIzquierdo">
                    <div className="Compra_antes">
                    <section className="Compra_section_datosDelEnvio">
                        <h5 className="Compras_h3_titulos">Ingresa los datos para el envio</h5>
                        <fieldset className="Compra_fieldset">
                            <form action="" method="post" className="Compra_form_datos">
                                <p className="Compra_p_textos">Nombre  <span className="Requerido">*</span></p>
                                <input type="text" id="input_nombre" onclick={explanation(0)} />
                                <p className="Compra_p_textos">Apellido  <span className="Requerido">*</span></p>
                                <input type="text" id="input_apellido" onclick={explanation(1)} />
                                <p className="Compra_p_textos">Dirección  <span className="Requerido">*</span></p>
                                <input type="text" id="input_direccion" onclick={explanation(2)} />
                                <p className="Compra_p_textos">Localidad  <span className="Requerido">*</span></p>
                                <input type="text" id="input_localidad" onclick={explanation(3)} />
                                <p className="Compra_p_textos">Codigo Postal  <span className="Requerido">*</span></p>
                                <input type="text" id="input_cp" onclick={explanation(4)} />
                                <p className="Compra_p_textos">Fecha deseable de entrega  <span className="Requerido">*</span></p>
                                <input type="date" id="input_entrega" onclick={explanation(5)} />
                                <button id="btn_guardar" className="Compra_boton_datos">Guardar</button>
                            </form>
                        </fieldset>
                    </section>
                    <section className="Compra_section_datosDePago">
                        <h5 className="Compras_h3_titulos">Seleciona tu tarjeta</h5>
                        <fieldset>
                            <form action="" method="post">
                                <div className="Compras_div_tarjetas">
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="mercadopago" />
                                        <input value="mercadopago" name="tarjetas" type="radio" />
                                    </div>
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="visa" />
                                        <input value="visa" name="tarjetas" type="radio" />
                                    </div>
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="master" />
                                        <input value="master" name="tarjetas" type="radio" />
                                    </div>
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="amex" />
                                        <input value="amex" name="tarjetas" type="radio" />
                                    </div>
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="dinners" />
                                        <input value="dinners" name="tarjetas" type="radio" />
                                    </div>
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="cabal" />
                                        <input value="cabal" name="tarjetas" type="radio" />
                                    </div>
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="naranja" />
                                        <input value="naranja" name="tarjetas" type="radio" />
                                    </div>
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="shopping" />
                                        <input value="shopping" name="tarjetas" type="radio" />
                                    </div>
                                    <div className="Compra_div_seleccion">
                                        <img src="" alt="nativa" />
                                        <input value="nativa" name="tarjetas" type="radio" />
                                    </div>
                                </div>
                                <button className="Compra_btn_pago">Proceder a pagar</button>
                            </form>
                        </fieldset>
                    </section>
                </div>
                <div className="Compra_despues">
                    <h5 className="Compras_h3_titulos">Datos de la entrega</h5>
                    <fieldset>
                        <p className="Compras_node"></p>
                    </fieldset>
                    <h5 className="Compras_h3_titulos">Datos del pago</h5>
                    <fieldset>
                        <p className="Compras_node"></p>
                    </fieldset>
                </div>
                </div>
                <div className="Compra_PanelDerecho">
                    <div className="Compra_div_instrucciones">
                        <p id="Compra_div_instrucciones_id"></p>
                    </div>
                    <div className="Compras_div_resumen">
                        <h5 className="Compras_h3_titulos">El contenido de tu carrito</h5>
                        <fieldset>
                            <div className="Compras_div_contenidoCarrito"></div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </Compra>   
        
    )
}
}