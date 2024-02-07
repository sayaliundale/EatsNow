import React, { useState } from 'react'
import "../Style/RestaurantMenu.css";
import Itemlist from './Itemlist';

const RestaurantCategory = ({ data }) => {

  const [showItems, setshowitems] = useState(false);
  const clickhandle = () =>{
   
      setshowitems(!showItems);
  
  }
  return (

    <div className="accordion">
      <div className="acc-head">
        <h5 onClick={clickhandle}>{data.title} ({data.itemCards.length})<span ></span></h5>
       {showItems && <Itemlist items={data.itemCards}/>}
      </div>
    </div>

  )
}

export default RestaurantCategory