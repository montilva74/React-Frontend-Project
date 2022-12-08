import React, { useState } from 'react'

import "./Navbar.css"
import logo from "./logo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({title, isDarkMode, setIsDarkMode}) => {

    const [showSubmenu, setShowSubmenu] = useState(false)
    const [category, setCategory] = useState(null)

    const showCategory = (category) => {
        setShowSubmenu(true)
        setCategory(category)
    }

    return (
        <>
        <div className="grayborder">
        <div className="container container-fluid pt-3 pb-4">
            <div className='row'>
                <div className="menu-register d-flex justify-content-end">
                    <button className='darkbutton' onClick={ () => setIsDarkMode( !isDarkMode )}>
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                        { isDarkMode ? "Modo Claro" : "Modo Oscuro" } 
                    </button>
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
                <div className=' sub-category col-7 mt-2'>
                    <div>
                        <a className="menu_category" href="/categories/hombres" onMouseEnter={() => showCategory("men")}  > HOMBRES     </a>
                        <a className="menu_category" href="/categories/mujeres"    onMouseEnter={() => showCategory("women")}> MUJERES     </a>
                        <a className="menu_category" href="/categories/niños" onMouseEnter={() => showCategory("kids")} > NIÑOS       </a>
                        <a className="menu_category" href="/register"> DESCUENTOS  </a>
                    </div>
                    { showSubmenu &&
                        <div className="submenu" onMouseLeave={() => setShowSubmenu(false)}>

                            { category === "men" &&
                                <ul>
                                    <li><a href="/categories/hombres/pantalones">Pantalones</a>  </li>
                                    <li><a href="/categories/hombres/remeras">Remeras</a>    </li>
                                    <li><a href="/categories/hombres/zapatillas">Zapatillas</a>       </li>
                                    <li><a href="/categories/hombres/bermudas">Bermudas</a>  </li>
                                </ul>
                            }

                            { category === "women" &&
                                <ul>
                                    <li><a href="/categories/mujeres/remeras">Remera</a>          </li>
                                    <li><a href="/categories/mujeres/buzos">Buzos</a>          </li>
                                    <li><a href="/categories/mujeres/ropa_interior">Ropa Interior</a></li>
                                    <li><a href="/categories/mujeres/pantalones">Pantalones</a></li>
                                </ul>
                            }

                            { category === "kids" &&
                                <ul>
                                    <li><a href="/categories/niños/pantalones">Pantalones</a>         </li>
                                    <li><a href="/categories/niños/buzos">Buzos</a>          </li>
                                    <li><a href="/categories/niños/trajes_de_baño">Trajes de Baño</a>         </li>
                                </ul>
                            }

                        </div>
                    }
                </div>
                <div className='col-3 mt-2 d-flex justify-content-end'>

                    <div className="search_control">
                        <input type="text" placeholder="¿Que estas buscando?" id="example-search-input"/>
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