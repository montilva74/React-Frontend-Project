import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const auth = getAuth();

  const loginInFirebase = async () => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        alert("Enter the correct Email")
        console.log(errorMessage)
        alert("Enter the correct password")
    });
  }

  return (
    <div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-6 col-md-8">
            <div className="wrapper text-center">
              <form className="form-signin">
              <img src="../../../Api" className="rounded mx-auto" alt="logo"/>
                <h3 className="form-signin-heading mt-5">Please login</h3>
                <input
                  type="email"
                  className="form-control m-2"
                  name="username"
                  placeholder="Email Address"
                  required=""
                  autoFocus=""
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <input
                  type="password"
                  className="form-control m-2"
                  name="password"
                  placeholder="Password"
                  required=""
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                <label className="checkbox">
                  <input
                    type="checkbox"
                    value="remember-me"
                    id="rememberMe"
                    name="rememberMe"
                  />{" "}
                  Remember me
                </label>
                <button
                  className="btn btn-m btn-primary btn-block m-2"
                  type="button" 
                >
                  Crear Cuenta
                </button>
                <button
                  className="btn btn-m btn-primary btn-block m-2"
                  type="button"
                  onClick={loginInFirebase}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
