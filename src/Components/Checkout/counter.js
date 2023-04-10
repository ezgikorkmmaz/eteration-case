import React, {useState} from 'react';
import "./style.scss";

const Checkout = ({quantity, setCount}) => {
    const incrementVal = () => {
        setCount(quantity + 1);
    };

    const decrementVal = () => {
        if(quantity > 0){
            setCount(quantity - 1);
        } else {
            setCount(quantity);
        }
    };

    return (
        <div className="counter">
           <button className='btn' onClick={decrementVal}>-</button>
           <span className='value-of-count'>{quantity}</span>
           <button className='btn' onClick={incrementVal}>+</button>
        </div>
    );
};

export default Checkout;