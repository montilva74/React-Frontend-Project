import React, { Component } from 'react';
import './Modal_Footer.css';
import image  from '../../Imagenes/logogithub.png';
import image2 from '../../Imagenes/mail.png';

export default class ModalFooter extends Component {
    
   
  render() {
    return (
    <div>
        <div className="Modal_Footer__container">
            <h2 className="Modal_Footer__titulo">La gente detras de Team8</h2>
            <ul className="Modal_Footer__ul">
                <li className="Modal_Footer__li">
                    <img className="Modal_img__alba" alt=""/>
                    <p className="Modal_Footer__text">Alba Montilva</p>
                    <a href="mailto:albamontilva@gmail.com"><img src={image2} alt="mail" className="Modal_Footer__icon"/></a><a href='https://github.com/montilva74' target='_blank' rel='noreferrer'><img alt="" src={image} /></a>
                </li>
                <li className="Modal_Footer__li">
                    <img className="Modal_img__marce" alt=""/>
                    <p className="Modal_Footer__text">Marcela Ojeda</p>
                    <a href="mailto:claroscuro@gmail.com"><img src={image2} alt="mail" className="Modal_Footer__icon" /></a>
                    <a href='https://github.com/MARCELAOJEDA' target='_blank' rel='noreferrer' >
                    <img alt="" src={image} />
                    </a>
                </li>
                <li className="Modal_Footer__li">
                    <img className="Modal_img__ary" alt=""/>
                    <p className="Modal_Footer__text">Ariel Perrone</p>
                    <a href="mailto:aruperrone@gmail.com"><img src={image2} alt="mail" className="Modal_Footer__icon" /></a><a href='https://github.com/arielperrone' target='_blank' rel='noreferrer'><img src={image} alt='logogithub'/></a>
                </li>
            </ul>
            <div className='Modal_Footer__divInferior'>
                <p className="Modal_Footer__text">Github del proyecto</p>
                <a className="Modal_Footer__divInferior_a" href='https://github.com/montilva74/React-Frontend-Project' target='_blank' rel='noreferrer' >
                    <img src={image} alt="gihub" /> 
                </a>

            </div>
        </div>
        
    </div>


    )
  }
}
