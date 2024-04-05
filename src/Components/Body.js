import React, { useEffect, useState } from 'react';
import "../Style/Body.css";
import RestCard from './RestCard';
import Shimmarui from './Shimmarui';
import star1 from "../Imgs/star1.png"
import star2 from "../Imgs/star2.png"
import star3 from "../Imgs/star3.png"
import { Link } from "react-router-dom";
import search from "../Imgs/search.png"

const Body = () => {

  const [resofList, setRestofList] = useState([]);
  const [filterRestaurant, setFilterRest] = useState([]);
  //Again created it to solve the problem when u search in first you'll  get result but 
  //second time u'll go it will not search 
  const [searchText, setSearchtext] = useState("");
  const [filterbystar, setFilterByStar] = useState(false);//like flag for checkbox
  const [isVegOnly, setIsVegOnly] = useState(false);


  useEffect(() => {
    fetchdata();
  }, []);

  const starfilter = (min, max) => {
    if (filterbystar) {
      const starFilter = resofList.filter(
        (res) => res.rating >= min && res.rating < max
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
      const data = await fetch("http://localhost:8000/restaurant");
      const json1 = await data.json();
      setRestofList(json1);
      setFilterRest(json1);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleSwitch = () => {
    setIsVegOnly(prevState => !prevState);
    if (!isVegOnly) {
      const vegRestaurants = resofList.filter(restaurant => restaurant.veg === "true");
      setFilterRest(vegRestaurants);
    } else {
      setFilterRest(resofList);
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
              <input
                className="searchRest" type="text" placeholder="Search your fav Restaurant"
                value={searchText} onChange={(e) => setSearchtext(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const filterRest = resofList.filter((res) =>
                      res?.name?.includes(searchText)
                    );
                    setFilterRest(filterRest);
                  }
                }}
              />

              <span onClick={() => {
                const filterRest = resofList.filter((res) =>
                  res?.name?.includes(searchText));
                setFilterRest(filterRest);
              }}>
                <img src={search} alt="search-icon" />
              </span></p>

            <div className="starbutton">
              <p>Filter by Star Rating
                <span><input type="checkbox" checked={filterbystar} onChange={() => setFilterByStar(!filterbystar)} /></span></p>
              <img src={star1} alt="star-img" onClick={() => starfilter(4.5, 5)} />
              <img src={star2} alt="star-img" onClick={() => starfilter(4, 4.5)} />
              <img src={star3} alt="star-img" onClick={() => starfilter(3.5, 4)} />
            </div>

          </div>
          <div className="veg-only">
            <p>Veg only</p>
            <div className={`toggle-switch ${isVegOnly ? 'active' : ''}`} onClick={toggleSwitch}>
              <input type="checkbox" checked={isVegOnly} readOnly />
              <div className="slider"></div>
              <div className={`symbol ${isVegOnly ? 'active' : ''}`}>
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {filterRestaurant?.map((restaurant) => (
            <Link key={restaurant.res_id}
              to={"restaurant/" + restaurant.res_id}>
              <RestCard resData={restaurant} /></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;