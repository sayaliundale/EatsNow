import { useState, useEffect } from "react"
import Shimmarui from "./Shimmarui";


const RestaurantMenu = () => {
    const [resInfo, setResinfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.8761653&lng=75.3433139&restaurantId=74105&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();
        console.log(json);
        setResinfo(json);
    }
    if (resInfo === null) {
        return <Shimmarui />;
    }

    const { name, cuisines, costForTwoMessage, avgRating } =
        resInfo?.data?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <>
            <div className="menu" style={{ padding: "5rem 6rem" }}>
                <h1>{name}</h1>

                <ul>
                    <li>Cuisines : {cuisines.join(" , ")} </li>
                    <li>Cost for Two : {costForTwoMessage}</li>
                    <li>AvgRating : {avgRating}</li>
                </ul>
                
                <br />
                <ol style={{ listStyle: "initial" }}>
                    <h2>Menu :</h2>
                    <br />
                    {itemCards.map((item) => 
                    <li key={item.card.info.id}>
                            {item.card.info.name} - Rs.{item.card.info.price / 100}
                    </li>)};

                </ol>
            </div>
        </>
    );



}
export default RestaurantMenu