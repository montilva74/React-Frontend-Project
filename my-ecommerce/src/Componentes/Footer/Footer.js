import React, { useState } from "react";
import './Footer.css';
import Team8 from './team8.png'
import Modal from '../Modal/Modal'
import ModalFooter from "../Modal_Parts/Modal_Footer";
import tarjeta_mercado from "../../Imagenes/TarjetasImagenes/mercadopago.png";
import tarjeta_visa from "../../Imagenes/TarjetasImagenes/visa.png";
import tarjeta_master from "../../Imagenes/TarjetasImagenes/mastercard.png";
import tarjeta_amex from "../../Imagenes/TarjetasImagenes/amex.png";
import tarjeta_dinners from "../../Imagenes/TarjetasImagenes/diners.png";
import tarjeta_cabal from "../../Imagenes/TarjetasImagenes/cabal.png";
import tarjeta_shopping from "../../Imagenes/TarjetasImagenes/tarjetashopping.png";
import tarjeta_argencard from "../../Imagenes/TarjetasImagenes/argencard.png";
import tarjeta_naranja from "../../Imagenes/TarjetasImagenes/naranja.png";
import logo_face from "../../Imagenes/facelog.png";
import logo_inst from "../../Imagenes/instalogo.png";
import logo_twitter from "../../Imagenes/twitterlogo.png";
import logo_yt from "../../Imagenes/Youtube-Logo.png";

const Footer = () => 
{
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }
   
    return(
        <>
            <div className="Footer_div_main">
                <div className="Footer_div_superior">
                    <section className="Footer_section_1">
                        <h2>Suscribite</h2>
                        <div className="Footer_div_newsletter">
                            <input id="Footer_input" type="mail"/>
                            <button className="Footer_button" >Suscribite</button>
                        </div>
                        <h2>Seguinos</h2>
                        <img alt="redes sociales" src={logo_face} className="logo_soc" />
                        <img alt="redes sociales" src={logo_inst} className="logo_soc" />
                        <img alt="redes sociales" src={logo_twitter} className="logo_soc" />
                        <img alt="redes sociales" src={logo_yt} className="logo_soc"/>
                    </section>
                    <section className="Footer_section_2">
                        <h2>De nosotros</h2>
                        <p>Tiendas</p>
                        <p>F&Q</p>
                        <p>Envios y retiros</p>
                        <p>Promociones de bancos</p>
                        <p>Terminos y condiciones</p>
                        <p>Boton de cancelación</p>
                        <p>Para reclamos dirigirse aqui</p>
                    </section>
                    <section className="Footer_section_3">
                        <h2>Menu</h2>
                        <p>Hombres</p>
                        <p>Mujer</p>
                        <p>Niños</p>
                        <p>Ventas</p>
                    </section>
                </div>
                <div className="Footer__tarjetas">
                    <img alt="" src={tarjeta_mercado} />
                    <img alt="" src={tarjeta_visa} />
                    <img alt="" src={tarjeta_master} />
                    <img alt="" src={tarjeta_amex} />
                    <img alt="" src={tarjeta_dinners} />
                    <img alt="" src={tarjeta_cabal} />
                    <img alt="" src={tarjeta_shopping} />
                    <img alt="" src={tarjeta_argencard} />
                    <img alt="" src={tarjeta_naranja} />
                </div>

                <div className='Footer__box'>
                    <p className="Paragraph">Store Fashion Clothes&copy; hecho por</p>
                    <button className='Footer_Modal__btn' id='boton_modal' onClick={toggle}>
                        <img className="Team8Img" src={Team8} alt='team8' id='boton_modal' />
                    </button>
                    <Modal active={active} toggle={toggle}>
                        <ModalFooter/>
                    </Modal>
                </div>
            </div>
        </>  
    )
}
export default Footer;