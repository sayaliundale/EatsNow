import React, { useState } from "react";
import "../../Style/Authentication.css";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function registerUser(event) {
        event.preventDefault();
        console.log("Registering user:", name, email, password);
        
        try {
            const response = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, password
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to register user');
            }
            const data = await response.json();
            console.log(data);
            navigate('/login');
            
        } catch (error) {
            console.error("Error registering user:", error);
            setError("Error registering user");
        }
    }
    
    
    return (
        <>
            <form onSubmit={registerUser}>
                <center>
                    <div className="signup">
                        <h2>Register</h2>
                        <label htmlFor="username">Username :</label>
                        <input type="text" id="username" name="username" autoComplete="off"
                            onChange={(e) => setName(e.target.value)} required/>

                        <label htmlFor="username">Eamil :</label>
                        <input type="email" id="email" name="email" autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)} required/>

                        <label htmlFor="username">Password :</label>
                        <input type="password" id="password" name="password" autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)} required/>

                        <button type="submit">Register</button>
                        {error && <p>{error}</p>}
                        <hr />
                        <p>Alredy have account ?
                            <span> <Link to="/login">Login</Link></span>
                        </p>
                        (Click login to get test credentials)
                    </div>
                </center>
            </form>    
        </>
    )
}
export default Signup;
