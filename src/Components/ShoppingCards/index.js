import React, {useState, useEffect} from 'react';
import "./style.scss";
import Pagination from '../Pagination/Pagination';

const ShoppingCards = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);
    const nPages = Math.ceil(products?.length / productsPerPage)

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
              await fetch(' https://5fc9346b2af77700165ae514.mockapi.io/products')
            ).json();
            setProducts(data);
            setLoading(false);
          };
      
          dataFetch();
        // fetch(' https://5fc9346b2af77700165ae514.mockapi.io/products')
        //     .then(response => response.json())
        //     .then(data => setProducts(data));
            
    }, []);

    return (
        <>
        {!loading && (
        <div className="cards-container"> 
        {currentProducts?.map((prod) => 
            <div className="cards-columns">
                <div className="shopping-cards">
                    <img src={prod.image} alt=""/>
                    <span>{prod.price}</span>
                    <span>{prod.name}</span>
                    <button>Add to Cart</button>
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
        )}
        </>
    );
};

export default ShoppingCards;