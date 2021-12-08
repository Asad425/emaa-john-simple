import React from 'react';

const ReviewItem = (props) => {
    
    const {name,quantity,key,price} = props.product;
   ;
    

    const reviewItemStyle ={
        borderBottom: '1px solid lightgrey',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px',
    }

    return (
        <div style={reviewItemStyle}>
            <h3 className="info-container">{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Price: {price}</p>
            <button onClick={() =>props.handleRemoveItem(key)} className="order-button">Remove Item</button>
        </div>
    );
};

export default ReviewItem;