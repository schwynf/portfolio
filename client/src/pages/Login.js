import React, { useEffect, useState } from "react";
import axios from "axios"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(email + password)
        if (email && password) {
            axios.post("/login", { email: email, password: password }).then(({ data }) => {
                console.log(data)
                if (data.user) {
                    window.location.href = "/"
                }
            }).catch((error) => { console.log(error) })
        }
    };

    return (
        <>
            <div className="row mt-5 login-container">
                <aside className="col-sm-4"></aside>
                <div className="col-sm-4">
                    <div className="card">
                        <article className="card-body">
                            <h3 className="text-center">Log in</h3>
                            <form>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input onChange={event => setEmail(event.target.value)} name="email" className="form-control" placeholder="Email" type="email" value={email}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input onChange={event => setPassword(event.target.value)} name="password" className="form-control" placeholder="**********" type="password" value={password}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button disabled={!(email && password)} onClick={handleFormSubmit} type="submit" className="btn btn-primary btn-block"> Login </button>
                                </div>
                                <p className="text-center">Need an account? <a href="/signup">Sign Up</a></p>
                            </form>
                        </article>
                    </div>
                </div>
                <aside className="col-sm-4"></aside>
            </div>
        </>
    )
}

export default Login;



