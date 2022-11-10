import React from 'react'

const Login = () => {
    return (
    <div>
    <div className="container text-center">
    <div className="row justify-content-center">
    <div className="col-xs-12 col-sm-6 col-md-8">
    <div className="wrapper text-center">
    <form className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <input type="text" className="form-control m-2" name="username" placeholder="Email Address" required="" autoFocus="" />
        <input type="password" className="form-control m-2" name="password" placeholder="Password" required=""/>
        <label className="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
        </label>
        <button className="btn btn-m btn-primary btn-block m-2" type="submit">Login</button>
        </form>
        </div>
        </div>
        </div>
    </div></div>
    )
}

export default Login;
