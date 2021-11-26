import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = Math.round(cart.reduce((total, prd) => total + prd.price,0));

    let shipping = 0;
    if(totalPrice>15){
        shipping = 5.99;
    }
    else if(totalPrice>40){
        shipping = 2.99;
    }

    const tax = totalPrice/100;
    return (
        
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Vat: {tax}</p>
            <p>Total: {totalPrice+shipping+tax}</p>
        </div>
    );
};

export default Cart;