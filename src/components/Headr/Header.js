import React from 'react';
import logo from '../../images/ema logo.png'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav><a href="/shop">shop</a>
            <a href="/review">Order Review</a>
            <a href="maneg">Manage Invantorys</a>
            </nav>
        </div>
    );
};

export default Header;