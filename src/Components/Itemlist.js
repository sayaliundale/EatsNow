import React from 'react';
import "../Style/RestaurantMenu.css";
import { CDNURL } from '../Utils/Constants';

const Itemlist = ({ items }) => {

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
                        <div className='item-img' alt="img">
                                <p>Add +</p>
                            <img src={CDNURL + i.card.info.imageId} />

                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Itemlist