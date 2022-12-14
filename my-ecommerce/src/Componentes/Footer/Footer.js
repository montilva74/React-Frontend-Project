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
    return  <div className='Footer__box'>
                <p className="Paragraph">Store Fashion Clothes&copy; hecho por</p>
                <button className='Footer_Modal__btn' id='boton_modal' onClick={toggle}>
                    <img className="Team8Img" src={Team8} alt='team8' id='boton_modal' onClick={backTop}/>
                </button>
                <Modal active={active} toggle={toggle}>
                    <ModalFooter/>
                </Modal>
            </div>
}
export default Footer;