import { React, useState, useContext } from 'react';
import "../Style/Header.css";
import Logo from "../Imgs/Logo.png";
import { Link } from 'react-router-dom';
import userContext from '../Utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [login, setLogout] = useState("Login");
    const [showMenu, setShowMenu] = useState(false);
    const {loggedInUser} = useContext(userContext);
    console.log(loggedInUser);

    //subscribing the store
    const cartItems = useSelector((store)=> store.cart.items)

    return (
        <>
            <div className="header">
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={showMenu ? "right-responsive" : "right"}>
                    {/* <div className="right"> */}
                    <div className="nav-items">
                        <ul>
                            <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
                            <li><Link to="/aboutus" style={{ textDecoration: "none", color: "inherit" }}>About us</Link></li>
                            <li><Link to="/contactus" style={{ textDecoration: "none", color: "inherit" }}>Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="login">
                        <ul>
                            <button onClick={() => setLogout(login === "Login" ? "Logout" : "Login")}>{login}</button>
                            <li><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512" style={{ marginTop: "0.1rem" }}>
                                <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                            </svg></li>
                        </ul>
                    </div>
                    <div className="cart"> <Link to="/path">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                    ({cartItems.length} items)</Link></div>
                    
                {/* <div>{loggedInUser}</div> */}
                    <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;
