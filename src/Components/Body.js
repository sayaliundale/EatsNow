import React, { useState } from 'react'
import "../Style/Body.css"
import RestCard from './RestCard'
import originalResofList from '../Utils/Mockdata'


// const getd = async() =>{
//     let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json();
//     console.log(json.cards[5].card.card.gridElements.infoWithStyle.restaurants);
//     //setListofRestaurant()
// };


const Body = () => {
  
const [resofList, setRestofList] = useState(originalResofList);
  return (
    <>
      <div className="body">
        <div className="rating">
        <button id="btn" onClick={()=>{
          let filtered = resofList.filter((res)=> res.stars>4.5); 
          setRestofList(filtered);
          }}>
          Top rated restaurants</button>
        </div>
        <div className="container">

         
          {resofList.map((restaurant) => (

            <RestCard key={restaurant.id} resData={restaurant} />
            //As we are using map function so key is imp here to uniquelly asign values 
            //as map function taking the arg restraunt so we'll pass it as object to key and resData new prop is created which which map all restraunts info 
          ))}

        </div>
      </div>
    </>
  )
}

export default Body