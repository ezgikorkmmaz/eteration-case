import React from 'react';
import "./style.scss";
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const FilterCards = ({products, setFilteredProducts}) => {
    const brandsList = ["Apple", "Samsung", "Huawei"];
    const modelList = ["11", "12 Pro", "13 Pro Max"];

    const sortByDate = (dateRange) => {
        const latestToOldest = products?.map(obj => { return { ...obj, date: new Date(obj.createdAt) } })
        .sort((a, b) => b.date - a.date);
        const oldestToLatest = products?.map(obj => { return { ...obj, date: new Date(obj.createdAt) } })
        .sort((a, b) => a.date - b.date);
        if(dateRange === 'oldToNew'){
            setFilteredProducts(oldestToLatest);
        } else if(dateRange === 'newToOld'){
            setFilteredProducts(latestToOldest);
        }
    }

    const sortByPrice = (sortDirection) => {
        const copyArray = [...products];
        copyArray.sort((a, b) => {
            return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
          });
          setFilteredProducts(copyArray);
    }

    return (
        <div className="filter-cards">
            <span className="title">Sort By</span>
            <div className="card sort-by-list">
           <label><input type="radio" name="test" onClick={() => sortByDate("oldToNew")}/>Old to New</label>
           <label><input type="radio" name="test" onClick={() => sortByDate("newToOld")}/>New to Old</label>
           <label><input type="radio" name="test" onClick={() => sortByPrice("desc")}/>Price High to Low</label>
           <label><input type="radio" name="test" onClick={() => sortByPrice("asc")}/>Price Low to High</label>
            </div>
            <span className="title">Brands</span>
            <div className="card checkout">
            <Input
                className="search-bar"
                type="text"
                placeholder="Search"
                prefix={<SearchOutlined />}
            />
            {brandsList.map((elem, index) => (
                    <div className="sort-by-list" key={index}>
                        <input type="checkbox" name="radAnswer" />
                        <span>{elem}</span>
                    </div>
                ))}
            </div>
            <span className="title">Model</span>
            <div className="card checkout">
            <Input
                className="search-bar"
                type="text"
                placeholder="Search"
                prefix={<SearchOutlined />}
            />
            {modelList.map((elem, index) => (
                    <div className="sort-by-list" key={index}>
                        <input type="checkbox" name="radAnswer" />
                        <span>{elem}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterCards;