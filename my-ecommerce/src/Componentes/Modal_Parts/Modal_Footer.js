import React, { Component } from 'react';
import './Modal_Footer.css'

export default class ModalFooter extends Component {
  render() {
    return (
    <div>
        <div className="Modal_Footer__container">
            <h2 className="Modal_Footer__titulo">La gente detras de Team8</h2>
            <ul className="Modal_Footer__ul">
                <li className="Modal_Footer__li">
                    <img src="" alt="Foto" />
                    <p className="Modal_Footer__text">Alba Montilva</p>
                    <a href="mailto:albamontilva@gmail.com"><img src="" alt="mail" className="Modal_Footer__icon"/></a><a href="https://github.com/montilva74"><img src="" alt="github" className="Modal_Footer__icon" /></a>
                </li>
                <li className="Modal_Footer__li">
                    <img src="" alt="Foto" />
                    <p className="Modal_Footer__text">Marcela Ojeda</p>
                    <a href="mailto:claroscuro@gmail.com"><img src="" alt="mail" className="Modal_Footer__icon" /></a><a href="https://github.com/MARCELAOJEDA"><img src="" alt="github" className="Modal_Footer__icon" /></a>
                </li>
                <li className="Modal_Footer__li">
                    <img src="" alt="Foto" />
                    <p className="Modal_Footer__text">Ariel Perrone</p>
                    <a href="mailto:aruperrone@gmail.com"><img src="" alt="mail" className="Modal_Footer__icon" /></a><a href="https://github.com/arielperrone"><img src="" alt="github" className="Modal_Footer__icon" /></a>
                </li>
            </ul>
            <div className='Modal_Footer__divInferior'>
                <p className="Modal_Footer__li">Github del proyecto</p>
                <a href='https://github.com/montilva74/React-Frontend-Project'>
                    <img src="" alt="gihub" /> 
                </a>

            </div>
        </div>
    </div>
    )
  }
}
