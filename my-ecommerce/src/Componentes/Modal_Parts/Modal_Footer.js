import React, { Component } from 'react';
import './Modal_Footer.css';
import image  from '../../Imagenes/logogithub.png';

export default class ModalFooter extends Component {
    abrirPagina(url){
        let win = window.open(url, 'blank');
        win.focus()
    };
  render() {
    return (
    <div>
        <div className="Modal_Footer__container">
            <h2 className="Modal_Footer__titulo">La gente detras de Team8</h2>
            <ul className="Modal_Footer__ul">
                <li className="Modal_Footer__li">
                    <img className="Modal_img__alba" alt=""/>
                    <p className="Modal_Footer__text">Alba Montilva</p>
                    <a href="mailto:albamontilva@gmail.com"><img alt="mail" className="Modal_Footer__icon"/></a><button onclick={this.abrirPagina("https://github.com/montilva74")}><img alt="" src={image} /></button>
                </li>
                <li className="Modal_Footer__li">
                    <img className="Modal_img__marce" alt=""/>
                    <p className="Modal_Footer__text">Marcela Ojeda</p>
                    <a href="mailto:claroscuro@gmail.com"><img src="" alt="mail" className="Modal_Footer__icon" /></a>
                    <button onclick={this.abrirPagina("https://github.com/MARCELAOJEDA")}>
                    <img alt="" src={image} />
                    </button>
                </li>
                <li className="Modal_Footer__li">
                    <img className="Modal_img__ary" alt=""/>
                    <p className="Modal_Footer__text">Ariel Perrone</p>
                    <a href="mailto:aruperrone@gmail.com"><img src="" alt="mail" className="Modal_Footer__icon" /></a><button onclick={this.abrirPagina('https://github.com/arielperrone')}><img src={image} alt='logogithub'/></button>
                </li>
            </ul>
            <div className='Modal_Footer__divInferior'>
                <p className="Modal_Footer__li">Github del proyecto</p>
                <button onclick={this.abrirPagina('https://github.com/montilva74/React-Frontend-Project')}>
                    <img src={image} alt="gihub" /> 
                </button>

            </div>
        </div>
    </div>
    )
  }
}
