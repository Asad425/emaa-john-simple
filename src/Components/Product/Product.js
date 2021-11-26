import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';



const Product = (props) => {
    
    const {img,name,seller,price,stock} =props.product;

    return (
        <div className="product">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="info-container">
                    <h4>{name}</h4>
                    <p><small>by: {seller} </small></p>
                    <p>${price}</p>
                    <br />
                    <p><small>Only {stock} left in stock. </small></p>
                    <button onClick={()=>props.handleAddCart(props.product)} className="order-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;