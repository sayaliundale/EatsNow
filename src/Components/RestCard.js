import React from "react";
import Logo from "../Imgs/Logo.png"


const RestCard = (props) => {
    const {resName, cuisines, stars}= props.resData;
    
    return (
        <>
            <div className="rest-card">
                <img src={Logo} alt="Food-img" />
                <div className="rest-info">
                    <h3>{resName}</h3>
                    <p>{cuisines}</p>
                    <p>{stars}</p>
                    <p>34 min</p>
                </div>

            </div>
        </>
    )
};

export default RestCard;