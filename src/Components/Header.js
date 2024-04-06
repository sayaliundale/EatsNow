import React, { useState, useEffect } from 'react';
import "../Style/Header.css";
import Logo from "../Imgs/Logo.png";
import Parcel from "../Imgs/parcel-bag.png";
import user from "../Imgs/user.png";
import more from "../Imgs/more.png"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../Utils/cartSlice';

const Header = () => {
    const [login, setLogout] = useState("Login");
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    const cartItemsRedux = useSelector((store) => store.cart.items);
    
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            dispatch(setItems(savedCartItems));
        }
    }, [dispatch]);

    const calculateTotalItems = () => {
        const totalReduxItems = cartItemsRedux.reduce((total, item) => total + item.quantity, 0);
        return totalReduxItems;
    };
    
    return (
        <>
            <div className="header">
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={showMenu ? "right-responsive" : "right"}>

                    <div className="nav-items">
                        <ul>
                            <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
                            <li><Link to="/aboutus" style={{ textDecoration: "none", color: "inherit" }}>About us</Link></li>
                            <li><Link to="/contactus" style={{ textDecoration: "none", color: "inherit" }}>Contact us</Link></li>
                        </ul>
                    </div>

                    <div className="login">
                            <button onClick={() => setLogout(login === "Login" ? "Logout" : "Login")}>{login}</button>
                            <img src={user} alt="user-img" />
                    </div>

                    <div className="cart">
                        <Link to="/path">
                            <img src={Parcel} alt="Parcel-img" />
                            <p>{calculateTotalItems()}</p>
                        </Link>
                    </div>

                    <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                       <img src={more} alt="Hamburger-menu" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;
