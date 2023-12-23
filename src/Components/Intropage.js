import React from 'react'
import "../Style/Intropage.css";
import Roti from "../Imgs/Roti.jpg";
import Pasta from "../Imgs/Pasta.jpg";

const Intropage = () => {
  return (
    <>
      <div className="main">
        <div className="intro-left">
          <div className="intro-text">
            <p id="first-p"  > Life's too short</p>
            <p id="second-p"> to cook, <span style={{ color: "orange" }}>let's eat !</span></p>
            <p id="order-now">Order now and conquer your cravings</p>
            <p>
              <div className="search">
                <input type="text" placeholder="Search your Favourite Reatraunt and Food" />
                <p><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" fill="#404040"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></p>
              </div>
            </p>
          </div>

        </div>
        <div className="intro-right">
          <img src={Roti} alt="Roti" className="roti-img" />
          <img src={Pasta} alt="Pasta" className="pasta-img" />
        </div>
      </div>
    </>
  )
}

export default Intropage;