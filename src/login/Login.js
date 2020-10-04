import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const login = event => {
        event.preventDefault();   
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(e => alert(e));
    }

    return (
    <div className="login">
        <Link to="/">
            <img className="login__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
                alt="amazon-logo" />
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <button className="login__signInButton" type="submit" onClick={login}>Sign In</button>
            </form>

            <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
    )
}

export default Login
