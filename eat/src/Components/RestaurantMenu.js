import React, { useState, useEffect } from "react";
import Shimmarui from "./Shimmarui";
import { useParams } from "react-router-dom";
import "../Style/RestaurantMenu.css";
import Itemlist from './Itemlist';

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const { res_id } = useParams(); // Use res_id instead of resId

  useEffect(() => {
    if (res_id) {
      fetchMenu(res_id);
    }
  }, [res_id]);

  const fetchMenu = async (restaurantId) => {
    try {
      const response = await fetch(`http://localhost:8000/restaurant/${restaurantId}`);
      const json1 = await response.json();
  
      console.log('API Response:', json1);
  
      if (json1.error) {
        console.error(json1.error);
        setResinfo(null);
      } else {
        setResinfo(json1);
      }
  
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResinfo(null);
    }
  };
  
  if (resInfo == null) {
    return <Shimmarui />;
  }

  return (
    <>
   
      <div className="menu">
      <h1>{resInfo.name}</h1>
        <Itemlist menuInfo={resInfo.categories} />
      </div>
    </>
  );
};

export default RestaurantMenu;
