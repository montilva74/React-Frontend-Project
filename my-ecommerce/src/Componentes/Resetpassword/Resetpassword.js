import React, { useState } from 'react'
import "./Resetpassword.css";

export default function Resetpassword() {
    
    const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <div>
                            <h1 className="title_recovery">
                                <span className="base" data-ui-id="page-title-wrapper">
                                    ¿Olvidaste tu contraseña?
                                </span>{" "}
                            </h1>
                            <div className="pa_recovery">
                            <p>
                            Por favor introduzca su dirección de correo electrónico para recibir un enlace de restablecimiento de contraseña.
                            </p>
                        </div>
                        </div>
                        <div className="l_recovery">
                                    <label htmlFor="email">
                                        Correo Eléctronico <span className="requerido">*</span>{" "}
                                    </label>
                                </div>
                                <div className="l_recovery">
                                    <input type="email" name="email"/>
                                </div>
                                <div className="mt-3 requerido">* Campos requeridos</div>
                                <div className="l_recovery">
                                <button type="button" className="primary l_recovery_button w-full" onClick={() => setMostrarRespuesta(true)}>RESTABLECER CONTRASEÑA</button>
                        </div>
                        {
                            mostrarRespuesta &&
                            <div className="alert alert-success alert_s" role="alert"><p>Si hay una cuenta asociada recibirá un correo electrónico con un enlace para restablecer tu contraseña.</p></div>
                        }
                    </div>
                </div>
            </div>
  )
}


