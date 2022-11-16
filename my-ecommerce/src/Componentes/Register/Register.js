/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
        <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="well well-sm">
                <form className="form-horizontal" method="post">
                    <fieldset>
                        <legend className="text-center header">Sign up</legend>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="fname" name="name" type="text" placeholder="First Name" className="form-control" onChange={ (ev)=> setFname(ev.target.value) }
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="lname" name="name" type="text" placeholder="Last Name" className="form-control"
                                onChange={ (ev)=> setLname(ev.target.value) }/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="email" name="email" type="text" placeholder="Email Address" className="form-control"
                                    onChange={ (ev)=> setEmail(ev.target.value) }
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="password" name="password" type="text" placeholder="Password" className="form-control"
                                onChange={ (ev)=> setPassword(ev.target.value) }/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                            <div className="col-md-8">
                                <input id="rpassword" name="password" type="text" placeholder="Repeat password" className="form-control" onChange={ (ev)=> setRpassword(ev.target.value) }/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-12 text-center">
                                <button type="button" className="btn btn-primary btn-lg" onClick={createUserInFirebase}>Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
    )
};