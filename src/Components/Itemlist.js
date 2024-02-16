import React from 'react';
import "../Style/RestaurantMenu.css";
import { addItem, removeItem } from '../Utils/cartSlice';
import { CDNURL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';

const Itemlist = ({ items }) => {
    const dispatch = useDispatch();

    const AddItems = (i) => {
        //dispatch action
        dispatch(addItem(i));
    }

    const RemoveItem = (i) => {
        dispatch(removeItem(i));
    }

    return (
        <>
            <div className="itemlist">
                {items.map((i) => (
                    <div className="data-item" key={i.card.info.id}>
                        <div className='item'>
                            <p>{i.card.info.name} - Rs. {i.card.info.price ? i.card.info.price / 100 :
                                i.card.info.defaultprice}</p>
                            <p>{i.card.info.description}</p>

                        </div>
                        <div className="item-img" >
                            <img src={CDNURL + i.card.info.imageId}  alt="Image"/>
                            <p className="addtocart">
                                <span onClick={() => AddItems(i)}> + </span>Add
                                <span onClick={() => RemoveItem(i)}> -</span>
                            </p>

                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Itemlist