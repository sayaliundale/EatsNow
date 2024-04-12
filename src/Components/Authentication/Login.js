import React, { useState } from 'react'
import "../../Style/Authentication.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    
async function loginUser(event) {
    event.preventDefault();
        console.log("Loging user:", email, password);
        
        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     email, password
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to register user');
            }
            const data = await response.json();
            console.log(data);
            navigate('/');
            
        } catch (error) {
            console.error("Error registering user:", error);
            setError("Error registering user");
        }
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
                {error && <p>{error}</p>}
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