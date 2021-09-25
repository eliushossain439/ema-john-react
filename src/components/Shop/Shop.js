import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // event handler
    const eventHandler = () => {

    }
    return (
        <div className="shop-container container mt-3">
            <div className="product-container ">
                {
                    products.map(product =>
                        < Product
                            product={product}
                            key={product.key}
                            handler={eventHandler}
                        />
                    )
                }
            </div>
            <div className="cart-container">
                thsi is cart container
            </div>
        </div>
    );
};

export default Shop;