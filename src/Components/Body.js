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
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json1 = await data.json();
      setRestofList(json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRest(json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      //here also we'll set the all restarunt data in setFilteredRest aslo, so whenever we'will search second time only update the setFilterRest everytime so problem is solved

    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (resofList?.length === 0) {
    return <Shimmarui />;
  }

  return (
    <>
      <div className="body">
        <div className="rating">
          <div className="search-filter">
            <h2>Search Filter</h2>
          </div>

          <p className="searchfunc">
          <input className="searchRest" type="text" placeholder="Search your fav Restaurant" value={searchText}
            onChange={(e) => setSearchtext(e.target.value)} />

            <span  onClick={() => {
              const filterRest = resofList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilterRest(filterRest);
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" fill="#404040"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            </span></p>


            <button id="btn" onClick={() => {
            const setTopRest = resofList.filter((res) => res.info.avgRating > 4);
              console.log(setTopRest);
              setTop(setTopRest); }}>
             4 star restaurnt
          </button>

        </div>

        <div className="container">
        {top.length > 0 && top?.map((restaurant) => (
            <RestCard key={restaurant.info.id} resData={restaurant} />
          ))}

          {top.length === 0 && filterRestaurant?.map((restaurant) => (
            <RestCard key={restaurant.info.id} resData={restaurant} />
          ))}

        </div>
      </div>
    </>
  );
};

export default Body;