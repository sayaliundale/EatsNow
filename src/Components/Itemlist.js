import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem} from '../Utils/cartSlice';

const Itemlist = ({ menuInfo }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch the addItem action with the item
    dispatch(addItem(item));
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
