import React, {useState} from 'react';
import "./style.scss";
import Counter from './counter';

const Checkout = () => {
    const [count, setCount] = useState();
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    const totalPrice = (storedProducts.map((prod) => Number(prod.price)*prod.quantity)).reduce((partialSum, a) => partialSum + a, 0);

    return (
        <div className="checkout-cart">
            <div className="card cart">
            {storedProducts.map((elem,index) => (
                    <div className="cart-items" key={index}>
                        <div className='text-area'>
                        <span className='name'>{elem.name}</span>
                        <span className='price'>{elem.price}₺</span>
                        </div>
                        <Counter quantity={elem.quantity} setCount={setCount} />
                    </div>
                ))}
            </div>
            <div className="card cart">
            <div className='price-texts'>
                <span className='total-price'>Total Price:</span>
                <span className='price-val'>{totalPrice}₺</span> 
            </div>  
            <button className='checkout-btn'>Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;