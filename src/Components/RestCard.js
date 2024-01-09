import React from "react";
import { CDNURL } from "../Utils/Constants";
import Star from "../Imgs/Greenstar.png"


const RestCard = (props) => {
    const { resData } = props;
    // Destructure 'resData' from the 'props' object
    const { cloudinaryImageId, cuisines, name, avgRating, sla } = resData?.info
    // Destructure properties from 'resData?.info' (using optional chaining to avoid errors if 'resData' or 'info' is undefined)

    return (
        <>
            <div className="rest-card">
                <img src={CDNURL + cloudinaryImageId} alt="rest-img" />
                <div className="rest-info">
                    <h3>{name || "Default Name"}</h3>
                    <p>{cuisines ? cuisines.join(" , ") : "No cuisines available"}</p>
                    <p>
                        {avgRating}
                        <img src={Star} alt="star" style={{ width: "1.2rem", marginLeft: "0.5rem", marginTop: "0.7rem" }} />
                        <span>{sla?.deliveryTime ? `${sla.deliveryTime} mins` : "N/A"}</span>
                    </p>
                </div>
            </div>

        </>
    )
};

export default RestCard;