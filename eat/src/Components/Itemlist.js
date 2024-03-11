import React from 'react';
import "../Style/RestaurantMenu.css";
import { addItem, removeItem } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';

const Itemlist = ({ menuInfo }) => {
  const dispatch = useDispatch();

  const AddItem = (item) => {
    // Dispatch action to add item to the cart
    dispatch(addItem(item));
  }

  const RemoveItem = (item) => {
    // Dispatch action to remove item from the cart
    dispatch(removeItem(item));
  }

  return (
    <>
      <div className="accordion">

        {menuInfo?.itemcards?.map((itemcard, index) => (

          <div key={index} className="itemcard">

            <div className='item'>
              <h3>{itemcard?.card.name}</h3>
              <p>{itemcard?.card?.description}</p>
              <p>Price - Rs.{itemcard?.card?.price}</p>
            </div>

            <div className="item-img">
              <img src={itemcard.card.img} alt={itemcard?.card?.name} />
              <p className="addtocart">
                <span onClick={() => AddItem(itemcard?.card)}> + </span>Add
                <span onClick={() => RemoveItem(itemcard.card)}>-</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Itemlist;
