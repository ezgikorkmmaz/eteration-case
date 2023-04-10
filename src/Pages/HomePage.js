import React, {useState, useEffect} from 'react';
import Checkout from '../Components/Checkout';
import Filter from '../Components/Filter';
import ShoppingCards from '../Components/ShoppingCards';
import './style.scss';

const HomePage = () => {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  useEffect(() => {
    const dataFetch = async () => {
        const data = await (
          await fetch(' https://5fc9346b2af77700165ae514.mockapi.io/products')
        ).json();
        setProducts(data);
        setFilteredProducts(data);
      };
      dataFetch();
}, []);

  return (
      <div className="menu-container">
      <Filter products={products} setFilteredProducts={setFilteredProducts} />
      <ShoppingCards products={filteredProducts} />
      <Checkout />
      </div>
  );
}

export default HomePage;
