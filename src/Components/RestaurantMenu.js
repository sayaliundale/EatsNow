import { useState, useEffect } from "react";
import Shimmarui from "./Shimmarui";
import { MenuAPI } from "../Utils/Constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    try {
      const data = await fetch(MenuAPI + resId);
      const json = await data.json();

      setResinfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) {
    return <Shimmarui />;
  }

  const restaurantInfo =
    resInfo?.data?.cards[0]?.card?.card?.info || {};
  const menuCards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];

  return (
    <>
      <div className="menu" style={{ padding: "5rem 6rem" }}>
        <h1>{restaurantInfo.name}</h1>

        <ul>
          <li>Cuisines : {restaurantInfo.cuisines?.join(" , ")}</li>
          <li>Cost for Two : {restaurantInfo.costForTwoMessage}</li>
          <li>AvgRating : {restaurantInfo.avgRating}</li>
        </ul>

        <br/>
        <ol style={{ listStyle: "initial" }}>
          <h2>Menu :</h2>
          <br/>
              {menuCards.map((item) => (
              <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default RestaurantMenu;
