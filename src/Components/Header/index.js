import React from 'react';
import { SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "./style.scss";

const Header = () => {
    return (
        <div className="header">
            <span className='title'>Eteration</span>
            <Input
                className="search-bar"
                type="text"
                placeholder="Search"
                prefix={<SearchOutlined />}
                //    onChange={handleChange}
                //    value={searchInput} 
            />
            <div className='account-info'>
            <ShoppingOutlined />   
            <span className='card-info'>117.00</span>
            <UserOutlined />
            <span>Kerem</span>
            </div>
        </div>
    );
};

export default Header;