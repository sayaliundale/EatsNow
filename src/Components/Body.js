import React, { useEffect, useState } from 'react'
import "../Style/Body.css"
import RestCard from './RestCard'
import Shimmarui from './Shimmarui'


const Body = () => {
  const [resofList, setRestofList] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json1 = await data.json();
    //console.log(json1.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    setRestofList(json1?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //beacuse of API structure 
    //?. is optional chaning if json1 is present then we can go for data like this to handles errors
  };

  if(resofList.length===0){
    return <Shimmarui/>;
  }

  return (
    <>
      <div className="body">
        <div className="rating">
          <button id="btn" onClick={() => {
            let filtered = resofList.filter((res) => res.stars > 4.5);
            setRestofList(filtered);
          }}>
            Top rated restaurants</button>
        </div>
        <div className="container">
          {resofList.map((restaurant) => (
            ((console.log(restaurant)), (
              <RestCard key={restaurant.info.id} resData={restaurant} />
            ))
          ))}
        </div>

      </div>
    </>
  )
}

export default Body