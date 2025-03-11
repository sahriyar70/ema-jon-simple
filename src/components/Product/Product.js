import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';


const Product = (peops) => {
    console.log(peops)
    return (
        <div className='product'>
            <div>
                <img src={peops.pdcts.img} alt="" />

            </div>
            <div>
                <h3 className='product-name'>{peops.pdcts.name} </h3>
                <br />
                <p><small>by:{peops.pdcts.seller} </small></p>
                <p>$:{peops.pdcts.price} </p>
                <br />
                <p>stock:{peops.pdcts.stock} </p>
                <button className='mai-butten' onClick={()=> peops.handelAddproduct(peops.Product)}> <FontAwesomeIcon icon={faShoppingCart}/> add to card</button>
            </div>

               
        </div>
    );
};

export default Product;