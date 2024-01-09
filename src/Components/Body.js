import React, { useEffect, useState } from 'react';
import "../Style/Body.css";
import RestCard from './RestCard';
import Shimmarui from './Shimmarui';
import star1 from "../Imgs/star1.png"
import star2 from "../Imgs/star2.png"
import star3 from "../Imgs/star3.png"
import {Link} from "react-router-dom";

const Body = () => {

  const [resofList, setRestofList] = useState([]);
  const [filterRestaurant, setFilterRest] = useState([]);
  //Again created it to solve the problem when u search in first you'll  get result but 
  //second time u'll go it will not search 
  const [searchText, setSearchtext] = useState("");
  const [filterbystar, setFilterByStar] = useState(false);//like flag for checkbox

  useEffect(() => {
    fetchdata();
  }, []);

  const starfilter = (min, max) => {
    if (filterbystar) {
      const starFilter = resofList.filter(
        (res) => res.info.avgRating >= min && res.info.avgRating < max
      );
      setFilterRest(starFilter);
    }
  };

  useEffect(() => {
    if (filterbystar) {
      setFilterRest(resofList);
    } else {
      setFilterRest(resofList);
    }
  }, [filterbystar, resofList]);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json1 = await data.json();
      console.log(json1);
      setRestofList(json1?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRest(json1?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (resofList?.length === 0) {
    return <Shimmarui />;
  }

  return (
    <>
   
   <h2 className="heading">Restaurants with online food delivery in Aurangabad</h2>
      <div className="body">
      
        <div className="rating">

        <div className="search-header">
          <h2>Search Filter</h2>
        </div>

          <div className="serach-filter">
            <p className="searchfunc">
              <input className="searchRest" type="text" placeholder="Search your fav Restaurant" value={searchText}
                onChange={(e) => setSearchtext(e.target.value)} />

              <span onClick={() => {
                const filterRest = resofList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilterRest(filterRest);
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" fill="#404040"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
              </span></p>
            
            <div className="starbutton">
              <p>Filter by Star Rating
              <span><input type="checkbox" checked={filterbystar} onChange={() => setFilterByStar(!filterbystar)} /></span></p>
              <img src={star1} alt="star-img" onClick={() => starfilter(4.5, 5)}/>
              <img src={star2} alt="star-img" onClick={() => starfilter(4, 4.5)} />
              <img src={star3} alt="star-img" onClick={() => starfilter(3.5, 4)} />
            </div>

          </div>
        </div>

        <div className="container">
          {filterRestaurant?.map((restaurant) => (
          <Link  key={restaurant.info.id} 
          to={"restaurants/"+ restaurant.info.id}>  <RestCard resData={restaurant} /></Link> 
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
