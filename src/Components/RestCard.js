import React from "react";
import Star from "../Imgs/Greenstar.png"

const RestCard = (props) => {
    const { resData } = props;
    // Destructure 'resData' from the 'props' object
    const { res_img, cusines, name, rating,del_time } = resData
    // Destructure properties from 'resData?.info' (using optional chaining to avoid errors if 'resData' or 'info' is undefined)

    return (
        <>
            <div className="rest-card">
                <img src={res_img} alt="restaurant-img" />
                <div className="rest-info">
                    <h3>{name}</h3>
                    <p>{cusines}</p>
                    <p>
                        {rating}
                        <img src={Star} alt="star" style={{ width: "1.2rem", marginLeft: "0.5rem", marginTop: "0.7rem" }} />
                        <p>{del_time}</p>
                    </p>
                </div>
            </div>

        </>
    )
};

export default RestCard;