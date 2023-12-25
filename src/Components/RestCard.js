import React from "react";
import { CDNURL } from "../Utils/Constants";


const RestCard = (props) => {
    const { resData } = props;
     // Destructure 'resData' from the 'props' object
    const { cloudinaryImageId, cuisines, name, avgRating, sla } = resData?.info
    //// Destructure properties from 'resData?.info' (using optional chaining to avoid errors if 'resData' or 'info' is undefined)

    return (
        <>
            <div className="rest-card">
                <img src={CDNURL + cloudinaryImageId} alt="rest-img" />
                <div className="rest-info">
                    <h3>{name}</h3>
                    <p>{cuisines.join(",")}</p>
                    <p>{avgRating}</p>
                    <p>{sla?.deliveryTime} mins</p>
                </div>

            </div>
        </>
    )
};

export default RestCard;