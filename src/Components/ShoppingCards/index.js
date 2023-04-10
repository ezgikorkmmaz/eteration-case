import React, {useState, useEffect} from 'react';
import "./style.scss";
import Pagination from '../Pagination/Pagination';
import { useNavigate } from "react-router-dom";

const ShoppingCards = ({products}) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);
    const nPages = Math.ceil(products?.length / productsPerPage);

    const changeRoute = (product) =>{ 
        navigate(`/product/${product.id}`, { state: {product} });
    }

    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        const newArr = JSON.parse(localStorage.getItem("products") || "[]");
        const ProductExist = cart.find(item => item.id === product.id);
        if (ProductExist) {
            setCart(
                cart.map(item =>
              item.id === product.id
                ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
                : item
            )
          )
        } else {
            setCart([...cart, { 
            ...product, 
            quantity: 1 
          }])
        }
        localStorage.setItem("products", JSON.stringify(cart));
      };

    return (
        <div className="cards-container"> 
        {currentProducts?.map((prod) => 
            <div key={prod.id} className="cards-columns">
                <div className="shopping-cards">
                    <img onClick={() => changeRoute(prod)} src={prod.image} alt=""/>
                    <div className='product-info'>
                        <span className='prod-price'>{prod.price}₺</span>
                        <span>{prod.name}</span>
                    </div>
                    <button onClick={() => handleAddProduct(prod)} className='checkout-btn'>Add to Cart</button>
                </div>
            </div>
            )}
            <div className="pagination-end">
            <Pagination
                nPages = {nPages}
                currentPage = {currentPage} 
                setCurrentPage = {setCurrentPage}
            />
            </div>
        </div>
    );
};

export default ShoppingCards;