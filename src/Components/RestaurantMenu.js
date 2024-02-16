import { useState, useEffect } from "react";
import Shimmarui from "./Shimmarui";
import { MenuAPI } from "../Utils/Constants";
import { useParams } from "react-router-dom";
import "../Style/RestaurantMenu.css";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

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
  

  const categories = resInfo?.data?.cards[2]?.groupedCard?.
    cardGroupMap?.REGULAR?.cards.filter((c) =>
      c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
console.log(categories)
  return (
    <>
      <div className="menu">
        <h1>{restaurantInfo.name}</h1>
        <p>
          <h3>Cuisines: {restaurantInfo.cuisines?.join(" , ")} - {restaurantInfo.costForTwo / 100}</h3>
        </p>
        <br />

        {categories && categories.map((category) => (
          <RestaurantCategory
            data={category.card?.card}
            key={category.card?.card?.title} 
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;