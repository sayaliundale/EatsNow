import React from "react";
import Itemlist from "./Itemlist";
import { useSelector } from "react-redux";
import "../Style/RestaurantMenu.css";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    return (
        <>
            <div className="cartpage">
                <Itemlist items={cartItems} />
            </div>
        </>
    )

}
export default Cart;
