/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.css";


export default (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");
    
    const auth = getAuth();

    
    const createUserInFirebase = async () => {
    
    createUserWithEmailAndPassword(auth, fname, lname, email, password, rpassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        alert("Enter a valid Email");
        console.log(errorMessage)
        alert("Enter a password longer than six digits")
    });
  };

    return (
        <> 
    <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h1 className="title_login">
                                <span className="base" data-ui-id="page-title-wrapper">
                                Crear una nueva cuenta cliente
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="title_register2">
                            <span>
                                Información Personal
                            </span>
                        </div>
                        <div>
                            <form className="form">
                                <div className="register_date">
                                    <label htmlFor="nombre">
                                        Nombre <span className="requerido">*</span>{" "}
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="text" name="nombre" required onChange={(ev) => setEmail(ev.target.value)} />
                                </div>
                                <div className="register_date">
                                    <label htmlFor="apellido">
                                        Apellido <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="text" name="apellido" required onChange={(ev) => setPassword(ev.target.value)}/>
                                </div>
                                <div className="register_date">
                                    <label htmlFor="fecha">
                                        Fecha de Nacimiento <span className="requerido">*</span>
                                    </label>
                                    <div className="register_date">
                                    <input type="date" name="fecha" id="input-fecha"/>
                                </div>
                                </div>
                                <div className="register_date">
                                    <label htmlFor="DNI">
                                        DNI <span className="requerido">*</span>
                                    </label>
                                    <div className="register_date">
                                    <input type="DNI" name="DNI" required onChange={(ev) => setPassword(ev.target.value)}/>
                                </div>
                                </div>
                                <div className="register_date">
                                    <label htmlFor="correo">
                                        Correo Electrónico <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="correo" name="correo" required onChange={(ev) => setPassword(ev.target.value)}/>
                                </div>
                                <div className="register_date">
                                    <label htmlFor="correo">
                                        Repetir Correo Electrónico <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="correo" name="correo" required onChange={(ev) => setPassword(ev.target.value)}/>
                                </div>
                                <div className="register_date">
                                    <label htmlFor="password">
                                        Contraseña <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="password" name="password" required onChange={(ev) => setPassword(ev.target.value)}/>
                                </div>
                                <div className="register_date">
                                    <label htmlFor="password">
                                        Repetir contraseña <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="password" name="password" required onChange={(ev) => setPassword(ev.target.value)}/>
                                </div>
                                <div className="register_date">
                                    <button className="primary" onClick={    createUserWithEmailAndPassword(auth, fname, lname, email, password, rpassword)}>CREAR USUARIO</button>
                                    <a href="/Login" className="secondary">
                                        <span>¿Ya estás registrado?</span>
                                    </a>
                                </div>
                                <div className="mt-3 requerido">* Campos requeridos</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
};