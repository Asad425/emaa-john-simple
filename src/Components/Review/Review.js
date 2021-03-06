import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import image from '../../images/giphy.gif';
const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false);
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const handleRemoveItem = (productKey) => {
        
        const newCart = cart.filter(pd =>pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        
        const cartProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key === key);
           product.quantity = savedCart[key];
           return product; 
        });

        setCart(cartProducts);
       

    },[])

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={image} alt="a"/>
    } 

    return (

        <div className="twin-container">
            <div className="products-container">               
            {
                cart.map(pd => <ReviewItem handleRemoveItem ={handleRemoveItem} key={pd.key} product={pd}></ReviewItem>)
            }   
            {
              thankYou
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="order-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;