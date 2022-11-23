/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./Register.css";
import { addDoc, collection } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { useNavigate } from 'react-router-dom';

export default (props) => {
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState([])

    const usersCollection = collection(useFirestore(), 'users')
    const navigate = useNavigate();

    const CreateUserInFirebase = async (event) => {

        event.preventDefault()

        // Validar emails
        if (user.email === user.remail) {
            if (user.password === user.rpassword) {
                const payload = {
                    email: user.email,
                    fecha: user.fecha,
                    lastname: user.lname,
                    name: user.fname,
                    password: user.password
                }
                const result = await addDoc(usersCollection, payload)

                navigate('/')

            } else {
                setErrors(["Las contraseñas no coinciden"])
            }
        } else {
            setErrors(["Los emails no coinciden"])
        }
    }

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
                                    <input type="text" name="nombre" required onChange={(ev) => setUser({...user, fname: ev.target.value})} />
                                </div>
                                <div className="register_date">
                                    <label htmlFor="apellido">
                                        Apellido <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="text" name="apellido" required onChange={(ev) => setUser({...user, lname: ev.target.value})} />
                                </div>
                                <div className="register_date">
                                    <label htmlFor="fecha">
                                        Fecha de Nacimiento <span className="requerido">*</span>
                                    </label>
                                    <div className="register_date">
                                        <input type="date" name="fecha" id="input-fecha" onChange={(ev) => setUser({...user, fecha: ev.target.value})} />
                                    </div>
                                </div>
                                <div className="register_date">
                                    <label htmlFor="dni">
                                        DNI <span className="requerido">*</span>
                                    </label>
                                    <div className="register_date">
                                        <input type="dni" name="dni" required onChange={(ev) => setUser({...user, dni: ev.target.value})} />
                                    </div>
                                </div>
                                <div className="register_date">
                                    <label htmlFor="correo">
                                        Correo Electrónico <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="correo" name="correo" required onChange={(ev) => setUser({...user, email: ev.target.value})} />
                                </div>
                                <div className="register_date">
                                    <label htmlFor="correo">
                                        Repetir Correo Electrónico <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="correo" name="correo" required onChange={(ev) => setUser({...user, remail: ev.target.value})} />
                                </div>
                                <div className="register_date">
                                    <label htmlFor="password">
                                        Contraseña <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="password" name="password" required onChange={(ev) => setUser({...user, password: ev.target.value})} />
                                </div>
                                <div className="register_date">
                                    <label htmlFor="password">
                                        Repetir contraseña <span className="requerido">*</span>
                                    </label>
                                </div>
                                <div className="register_date">
                                    <input type="password" name="password" required onChange={(ev) => setUser({...user, rpassword: ev.target.value})} />
                                </div>
                                <div className="register_date">
                                    <button className="primary" onClick={ CreateUserInFirebase }>CREAR USUARIO</button>
                                    <a href="/Login" className="secondary">
                                        <span>¿Ya estás registrado?</span>
                                    </a>
                                </div>
                                <div className="mt-3 requerido">* Campos requeridos</div>
                            </form>
                        </div>
                    </div>
                </div>
                { errors.length > 0 &&
                    <div className="error">
                        <ul>
                            { errors.map( error => <li key={error}> {error} </li> )}
                        </ul>
                    </div>
                }
            </div>
        </>
    )
};