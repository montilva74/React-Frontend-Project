import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import logo from "./logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faMoon, faRightFromBracket, faSun } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ title, isDarkMode, toggleDarkMode }) => {

    const navigate = useNavigate()

    const cart = JSON.parse(localStorage.getItem("cart"))
    const prodCount = localStorage.getItem("cartNumber")

    const [showSubmenu, setShowSubmenu] = useState(false)
    const [category, setCategory] = useState(null)
    const [cartNumber, setCartNumber] = useState(prodCount)

    useEffect(() => {
        setCartNumber(localStorage.getItem("cartNumber"))
        return () => { }
    }, [])


    const showCategory = (category) => {
        setShowSubmenu(true)
        setCategory(category)
    }

    const localUserName = localStorage.getItem("userName")

    const userLogout = () => {
        localStorage.removeItem("userName")
        window.location.reload(false);
    }

    const [searchText, setSearchText] = useState("")
    const searchProducts = () => {
        navigate(`/buscador/${searchText}`)
    }
    const onEnterKey = (event) => {
        if (event.key === 'Enter') {
            searchProducts()
        }
    }

    return (
        <>
            <div className="grayborder">
                <div className="container container-fluid pt-3 pb-4 d-none d-sm-block">
                    <div className='row'>
                        <div className="menu-register d-flex justify-content-end">
                            <button className='darkbutton' onClick={() => toggleDarkMode(!isDarkMode)}>
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                                {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
                            </button>

                            {!localUserName &&
                                <>
                                    <a className="ml-1 px-2 menu_sublink" href="/register"> REGISTRO </a>
                                    <a className="mr-1 px-2 menu_sublink" href="/login"> INICIAR SESION </a>
                                </>
                            }
                            {localUserName &&
                                <>
                                    <span className='user_name'> Bienvenido, {localUserName} </span>
                                    <FontAwesomeIcon
                                        className='logout_button'
                                        icon={faRightFromBracket}
                                        onClick={() => userLogout()} />
                                </>
                            }
                        </div>
                    </div>
                    <div className="row clearfix mt-3">
                        <div className='col-2'>
                            <a href='/'>
                                <img className="rounded float-start logo" src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className=' sub-category col-7 mt-2'>
                            <div>
                                <a className="menu_category" href="/categories/hombres" onMouseEnter={() => showCategory("men")}  > HOMBRES     </a>
                                <a className="menu_category" href="/categories/mujeres" onMouseEnter={() => showCategory("women")}> MUJERES     </a>
                                <a className="menu_category" href="/categories/niños" onMouseEnter={() => showCategory("kids")} > NIÑOS       </a>
                                <a className="menu_category text-danger" href="/descuentos"> DESCUENTOS  </a>
                            </div>
                        </div>
                        <div className='col-3 mt-2 d-flex justify-content-end'>

                        <div className="search_control">
                            <input
                                type="text"
                                placeholder="¿Que estas buscando?"
                                id="example-search-input"
                                onChange={ (e) => setSearchText(e.target.value)}
                                onKeyUp={ (e) => onEnterKey(e) } />
                            <span>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                        </div>
                        <div>
                            <a className='cart_link' href="/cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                                {cartNumber > 0 &&
                                    <span className='cart_number'> {cartNumber} </span>
                                }
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='container d-none d-sm-block'>
                    <div className='row position-relative'>
                        {showSubmenu &&
                            <div className="submenu" onMouseLeave={() => setShowSubmenu(false)}>

                                {category === "men" &&
                                    <ul>
                                        <li><a href="/categories/hombres/pantalones">Pantalones</a>  </li>
                                        <li><a href="/categories/hombres/remeras">Remeras</a>    </li>
                                        <li><a href="/categories/hombres/zapatillas">Zapatillas</a>       </li>
                                        <li><a href="/categories/hombres/bermudas">Bermudas</a>  </li>
                                    </ul>
                                }

                                {category === "women" &&
                                    <ul>
                                        <li><a href="/categories/mujeres/remeras">Remera</a>          </li>
                                        <li><a href="/categories/mujeres/buzos">Buzos</a>          </li>
                                        <li><a href="/categories/mujeres/ropa_interior">Ropa Interior</a></li>
                                        <li><a href="/categories/mujeres/pantalones">Pantalones</a></li>
                                    </ul>
                                }

                                {category === "kids" &&
                                    <ul>
                                        <li><a href="/categories/niños/pantalones">Pantalones</a>         </li>
                                        <li><a href="/categories/niños/buzos">Buzos</a>          </li>
                                        <li><a href="/categories/niños/trajes_de_baño">Trajes de Baño</a>         </li>
                                    </ul>
                                }

                            </div>
                        }
                    </div>
                </div>
                <div className='d-block d-sm-none bg-dark mobile-menu'>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4 mb-1">
                        <div className='d-flex justify-content-end'>
                            <a className="ml-1 px-2 menu_sublink" href="/register">     REGISTRO        </a>
                            <a className="mr-1 px-2 menu_sublink" href="/login">        INICIAR SESION  </a>
                            <button className='darkbutton' onClick={() => toggleDarkMode(!isDarkMode)}>
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                                {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
                            </button>
                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <a className="menu_category" href="/categories/hombres">    HOMBRES         </a>
                            <a className="menu_category" href="/categories/mujeres">    MUJERES         </a>
                            <a className="menu_category" href="/categories/niños">      NIÑOS           </a>
                            <a className='cart_link mt-0' href="/cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                                {cartNumber  > 0 &&
                                    <span className='cart_number d-flex justify-content-center'> {cartNumber} </span>
                                }
                            </a>
                        </div>
                    </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <a href='/'>
                            <img className="rounded float-start logo" src={logo} alt="logo" />
                        </a>
                    </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar