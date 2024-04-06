import React, { useState } from 'react'
import "../../Style/Authentication.css";
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'applicaton/json'
        },
        body: JSON.stringify({
            email, password
        })
    });

    const data = await response.json();
    console.log(data);
}
    return (
        <>
            <form onSubmit={loginUser}>
            <center> <div className="login-user">
                <h2>Login</h2>
                <label htmlFor="username">Eamil :</label>
                <input type="email" id="email" name="email" autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="username">Password :</label>
                <input type="password" id="password" name="password" autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Login</button>
                <hr />
                <p>Create Account
                    <span> <Link to="/signup">Register</Link></span>
                </p>
                <div class="test-credetionals">
                    <p>Test-email : abc@gmail.com</p>
                    <p>Password : 12345678</p>
                </div>

            </div></center>
            </form>
        </>
    )
}

export default Login