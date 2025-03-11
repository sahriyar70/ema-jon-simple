import React from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {

    const handelAddproduct = (product)=> {
        console.log('dhfjdj',product)
    }


    const pdct = [ {
        "key": "B002RL8IYK",
        "category": "laptop",
        "name": "3M Gold Privacy Filter for 17\" Widescreen Laptop (16:10) (GF170W1B)",
        "seller": "3M",
        "wholePrice": "68",
        "priceFraction": "36",
        "stock": 36,
        "star": 3,
        "starCount": 3245,
        "img": "https://images-na.ssl-images-amazon.com/images/I/415oziPFA0L._AC_US218_.jpg",
        "url": "https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_electronics_sr_pg1_1?ie=UTF8&adId=A03956601N6RBLKGAP4W1&url=https%3A%2F%2Fwww.amazon.com%2F3M-Privacy-Filter-Widescreen-Laptop%2Fdp%2FB002RL8IYK%2Fref%3Dsr_1_1%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124890%26sr%3D1-1-spons%26keywords%3Dlaptop%26psc%3D1&qualifier=1499124889&id=6267744216991374&widgetName=sp_atf",
        "features": [
            {
                "description": "Display Size",
                "value": "17 inches"
            },
            {
                "description": "Hardware Platform",
                "value": "PC"
            }
        ],
        "price": 68.36,
        "shipping": 7.99
    }]

    return (
        <div className='shop-container'>
           <div className="product-containar">
            
             {
                pdct.map(pd=> <Product
                    handelAddproduct ={handelAddproduct}
                     pdcts={pd} 
                >
                    
                </Product>)
             }
            
           </div>
           <div className="card-containar">
            <h2>this card</h2>
           </div>
        </div>
    );
};

export default Shop;