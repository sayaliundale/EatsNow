import React, { useEffect, useState } from 'react';
import "../Style/Body.css";
import RestCard from './RestCard';
import Shimmarui from './Shimmarui';

const Body = () => {
  const [resofList, setRestofList] = useState([]);
  const [filterRestaurant, setFilterRest] = useState([]);
  //Again created it to solve the problem when u search in first you'll  get result but 
  //second time u'll go it will not search 
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json1 = await data.json();
      setRestofList(json1?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRest(json1?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //here also we'll set the all restarunt data in setFilteredRest aslo, so whenever we'will search second time only update the setFilterRest everytime so problem is solved

    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (resofList.length === 0) {
    return <Shimmarui />;
  }

  return (
    <>
      <div className="body">
        <div className="rating">
          <button id="btn" onClick={() => fetchdata()}>
            Top rated restaurants
          </button>

          <p><input type="text" value={searchText}
            onChange={(e) => setSearchtext(e.target.value)} />

            <button onClick={() => {
              const filterRest = resofList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilterRest(filterRest);
            }}>
              Search</button></p>

        </div>

        <div className="container">

          {filterRestaurant.map((restaurant) => (
            <RestCard key={restaurant.info.id} resData={restaurant} />
          ))}

        </div>
      </div>
    </>
  );
};

export default Body;
