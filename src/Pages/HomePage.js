import React, {useState, useEffect} from 'react';
import Checkout from '../Components/Checkout';
import Filter from '../Components/Filter';
import ShoppingCards from '../Components/ShoppingCards';
import './style.scss';

const HomePage = ({searchInput}) => {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [searchParam] = useState(["name"]);

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
  
useEffect(() => {
  const filteredData = products.filter((item) => {
    return searchParam.some((newItem) => {
        return (
            item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(searchInput.toLowerCase()) > -1
        );
    });
});
  setFilteredProducts(filteredData);
}, [searchInput, searchParam, products]);

  return (
      <div className="menu-container">
      <Filter products={filteredProducts} setFilteredProducts={setFilteredProducts} />
      <ShoppingCards products={filteredProducts} />
      <Checkout />
      </div>
  );
}

export default HomePage;
