// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../Utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const incrementCount = (itemIndex) => {
    dispatch(incrementQuantity(itemIndex));
  };

  const decrementCount = (itemIndex) => {
    dispatch(decrementQuantity(itemIndex));
  };

  return (
    <div className="cartpage">
      <div className="accordion1">
        {cartItems.map((item, index) => (
          <div key={index} className="itemcard">
            <div className='item'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price - Rs.{item.price}</p>
            </div>

            <div className="item-img">
              <img src={item.img} alt="img" />
              <div className="addtocart">
                <span onClick={() => incrementCount(index)}>+</span>
                <span>{item.quantity}</span>
                <span onClick={() => decrementCount(index)}>-</span>
              </div>
            </div>
          </div>
        ))}
        <div className="total">
          <h3>Total : Rs. { }</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
