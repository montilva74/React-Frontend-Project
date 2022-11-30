import React, { useState } from 'react'

import "./Navbar.css"
import logo from "./logo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({title}) => {

    const [showSubmenu, setShowSubmenu] = useState(false)
    const [category, setCategory] = useState(null)

    const showCategory = (category) => {
        setShowSubmenu(true)
        setCategory(category)
    }

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
                                    <li><a href="/">Calzado</a>     </li>
                                    <li><a href="/">Camperas</a>    </li>
                                    <li><a href="/">Camisas</a>     </li>
                                    <li><a href="/">Pantalones</a>  </li>
                                    <li><a href="/">Remeras</a>    </li>
                                    <li><a href="/">Zapatillas</a>       </li>
                                    <li><a href="/">Buzos</a>       </li>
                                    <li><a href="/">Bermudas</a>  </li>
                                </ul>
                            }

                            { category === "women" &&
                                <ul>
                                    <li><a href="/">Remera</a>          </li>
                                    <li><a href="/">Buzos</a>          </li>
                                    <li><a href="/">Musculosa</a>         </li>
                                    <li><a href="/">Ropa Interior</a>   </li>
                                </ul>
                            }

                            { category === "kids" &&
                                <ul>
                                    <li><a href="/">Pantalones</a>         </li>
                                    <li><a href="/">Buzos</a>          </li>
                                    <li><a href="/">Trajes de Baño</a>         </li>
                                </ul>
                            }

                        </div>
                    }
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