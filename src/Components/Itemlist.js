import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice';

const Itemlist = ({ menuInfo }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const itemWithQuantity = { ...item, quantity: 1 }; 
    dispatch(addItem(itemWithQuantity));
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...cartItems, itemWithQuantity]; 
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="accordion">
      {menuInfo?.itemcards?.map((item, index) => (
        <div key={index} className="itemcard">
          <div className='item'>
            <h3>{item?.card?.name}</h3>
            <p>{item?.card?.description}</p>
            <p>Price - Rs.{item?.card?.price}</p>
          </div>
          <div className="item-img">
            <img src={item?.card?.img} alt="img" />
            <p className="addtocart">
              <span onClick={() => handleAddItem(item?.card)}> + </span>Add
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
