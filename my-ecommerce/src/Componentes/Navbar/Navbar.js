import React from 'react'

import "./Navbar.css"
import logo from "./logo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({title}) => {

    return (
        <>
        <div className="grayborder">
        <div className="container container-fluid mt-2 pt-3 pb-4">
            <div className='row'>
                <div className="d-flex flex-row-reverse">
                    <a className="ml-1 px-2 menu_sublink" href="/register"> REGISTRO </a>
                    <a className="mr-1 px-2 menu_sublink" href="/login"> INICIAR SESION </a>
                </div>
            </div>
             <div className="row clearfix mt-3">
                <div className='col-2'>
                    <a href='/'>
                        <img className="rounded float-start logo" src={logo}  alt="logo"/>
                    </a>
                </div>
                <div className='col-7 mt-2'>
                    <a className="menu_category" href="/register"> HOMBRES     </a>
                    <a className="menu_category" href="/login">    MUJERES     </a>
                    <a className="menu_category" href="/register"> NIÑOS       </a>
                    <a className="menu_category" href="/register"> DESCUENTOS  </a>
                </div>
                <div className='col-3 mt-2 d-flex justify-content-end'>

                    <div className="search_control">
                        <input type="text" placeholder="¿Que estas buscando?" id="example-search-input" />
                        <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </div>
                    <div>
                        <a className='cart_link' href="/cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                    </div>
                </div>
             </div>
        </div>
        </div>
        </>
    )
}

export default Navbar