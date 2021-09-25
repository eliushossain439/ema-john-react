import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { name, price, img, stock, } = props.product
    return (
        <div className='d-flex'>
            <div><img src={img} alt="" /></div>
            <div className="p-2">
                <p>{name}</p>
                <p>{price}</p>
                <p>stock: {stock}</p>
                <button onClick={() => props.handler()} className="btn btn-warning">Add to card</button>
            </div>
        </div>
    );
};

export default Product;