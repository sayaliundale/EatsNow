import React, { useState, useEffect } from 'react';
import "../Style/Intropage.css";
import Roti from "../Imgs/Roti.jpg";
import Pasta from "../Imgs/Pasta.jpg";
import Body from './Body';
import Food from "../Imgs/Food_Delivery_System-.png";
import useOnline from '../Utils/useOnline';
import { useNavigate } from 'react-router-dom';

const Intropage = () => {
  const [signupSession, setSignupSession] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenSignup = sessionStorage.getItem('hasSeenSignup');
    if (!hasSeenSignup) {
      const timer = setTimeout(() => {
        setSignupSession(true);
        sessionStorage.setItem('hasSeenSignup', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const onlineStatus = useOnline();

  if (onlineStatus === false) {
    return (
      <div className="onlineStatus">
        <p>Offline   {'🔴'}</p>
      </div>
    );
  }

  if (signupSession) {
    navigate("/register");
  }

  return (
    <>
      <div className="main">
        <div className="intro-left">
          <div className="intro-text">
            <p id="first-p"> Life's too short</p>
            <p id="second-p"> to cook, <span style={{ color: "orange" }}>let's eat !</span></p>
            <p id="order-now">Order now and conquer your cravings</p>
            <img src={Food} alt="Food-delivery" />
          </div>
        </div>
        <div className="intro-right">
          <img src={Roti} alt="Roti" className="roti-img" />
          <img src={Pasta} alt="Pasta" className="pasta-img" />
        </div>
      </div>
      <Body />
    </>
  );
};

export default Intropage;
