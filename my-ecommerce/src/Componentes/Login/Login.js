import React, { useState } from "react";
import { useFirestore } from "reactfire";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
const Register = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState();
    const navigate = useNavigate();

    const usersCollection = collection(useFirestore(), 'users');

    const LoginInFirebase = async (e) => {

        e.preventDefault()

        const q = query(usersCollection, where("email", "==", email), where("password", "==", password) );
        const result = await getDocs(q);
        
        if ( result.docs && result.docs.length > 0) {
            // Existe un registro con esos datos
            const user = result.docs[0].data();
            navigate('/')
        } else {
            console.log("Usuario no Registrado")
            setLogin(false)
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h1 className="title_login">
                                <span className="base" data-ui-id="page-title-wrapper">
                                    Acceso del cliente
                                </span>{" "}
                            </h1>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="title_2">
                            <strong role="heading" aria-level="2">
                                Clientes registrados
                            </strong>
                        </div>
                        <div className="pa">
                            <p>
                                Si tiene una cuenta, inice sesión con su dirección de correo
                                electrónico
                            </p>
                        </div>
                        <div>
                            <form className="form">
                                <div className="login_date">
                                    <label htmlFor="email">
                                        Correo Eléctronico <span className="requerido">*</span>{" "}
                                    </label>
                                </div>
                                <div className="login_date">
                                    <input type="email" name="email" required onChange={(ev) => setEmail(ev.target.value)} />
                                </div>
                                <div className="login_date">
                                    <label htmlFor="password">
                                        Contraseña <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="login_date">
                                    <input type="password" name="password" required onChange={(ev) => setPassword(ev.target.value)}/>
                                </div>
                                <div className="login_date">
                                    <button className="primary" onClick={LoginInFirebase}>INICIAR SESIÓN</button>
                                    <Link to={"/resetpassword"}><span>¿Olvidaste tu contraseña?</span></Link>
                                </div>
                                <div className="mt-3 requerido">* Campos requeridos</div>
                                { login === false &&
                                    <div className="alert alert-danger pa" role="alert">
                                        Usuario o Contraseña incorrecta. Verifique sus datos e intente de nuevo
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                    <div className="col-5 offset-1">
                        <div className="title_2">
                            <strong role="heading" aria-level="2">
                                Nuevos Clientes
                            </strong>
                        </div>
                        <div className="pa">
                            <p>
                                ¿Primera vez? Registrate en pocos segundos y sigue la compra. Podés
                                acceder a beneficios exclusivos
                            </p>
                        </div>
                        <div className="login_date">
                            <Link to={"/register"}>
                                <button className="primary">CREAR CUENTA</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Register