import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../Utils/cartSlice'; // Import your removeItem action

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const incrementCount = (item) => {
        // Dispatch an action to increase quantity for this item
    };

    const decrementCount = (item) => {
        if (item.quantity > 1) {
            // Dispatch an action to decrease quantity for this item
        } else {
            // If quantity is 1, remove the item from cart
            dispatch(removeItem(item.id));
        }
    };

    const calculateTotal = () => {
        // Calculate total only if cartItems and items array are not null or undefined
        if (cartItems && cartItems.items) {
            return cartItems.items.reduce((total, item) => {
                // Check if both item.price and item.quantity are valid numbers
                if (typeof item.price === 'number' && typeof item.quantity === 'number') {
                    return total + item.price * item.quantity;
                } else {
                    return total;
                }
            }, 0);
        } else {
            return 0;
        }
    };

    return (
        <div className="cartpage">
            <div className="accordion1">
                {cartItems?.items?.map((item, index) => (
                    <div key={index} className="itemcard">
                        <div className='item'>
                            <h3>{item?.name}</h3>
                            <p>{item?.description}</p>
                            <p>Price - Rs.{item?.price}</p>
                        </div>

                        <div className="item-img">
                            <img src={item?.img} alt="img" />
                            <div className="addtocart">
                                <span onClick={() => incrementCount(item)}>+</span>
                                <span>{item.quantity}</span>
                                <span onClick={() => decrementCount(item)}>-</span>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <h3>Total1 : Rs. {calculateTotal()}</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;
