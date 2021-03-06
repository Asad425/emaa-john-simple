import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link} from 'react-router-dom';



const Product = (props) => {
    
    const {img,name,seller,price,stock,key} =props.product;

    return (
        <div className="product">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div >
                    <h4 className="info-container">
                        <Link to={"/"+key}>{name}</Link>
                    </h4>
                    <p><small>by: {seller} </small></p>
                    <p>${price}</p>
                    <br />
                    <p><small>Only {stock} left in stock. </small></p>
                    {props.showAddToCart && <button onClick={()=>props.handleAddCart(props.product)} className="order-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;