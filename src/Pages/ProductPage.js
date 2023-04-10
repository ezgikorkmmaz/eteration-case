import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';
import Checkout from '../Components/Checkout';

const ProductPage = () => {
    const location = useLocation();
    const selectedProduct = location.state.product;

  return (
      <div className="product-container">
        <div className='product-deatils-card'>
            <img src={selectedProduct.image}/>
            <div className="product-information">
            <span className='prod-name'>{selectedProduct.name}</span>
            <span className='prod-price'>{selectedProduct.price}₺</span>
            <button className='add-btn'>Add to Cart</button>
            <span className='prod-desc'>{selectedProduct.description}</span>
            </div>
        </div>
        <Checkout />
      </div>
  );
}

export default ProductPage;