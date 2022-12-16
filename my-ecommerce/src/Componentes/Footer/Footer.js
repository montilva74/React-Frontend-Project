import React, { useState} from "react";
import './Footer.css';
import Team8 from './team8.png'
import Modal from '../Modal/Modal'
import ModalFooter from "../Modal_Parts/Modal_Footer";

function backTop (){
    window.scrollX(0)
}

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
                    <div className="Footer_div_newsletter"><input id="Footer_input" type="mail"/><button className="Footer_button" >Suscribite</button></div>
                    <h2>Seguinos</h2>

                </section>
                <section className="Footer_section_2"></section>
                <section className="Footer_section_3"></section>


                </div>

                <div className='Footer__box'>
                    <p className="Paragraph">Store Fashion Clothes&copy; hecho por</p>
                    <button className='Footer_Modal__btn' id='boton_modal' onClick={toggle}>
                        <img className="Team8Img" src={Team8} alt='team8' id='boton_modal' onClick={backTop}/>
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