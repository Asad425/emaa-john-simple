import React from 'react';

const ReviewItem = (props) => {
    console.log("LLLLL",props);
    const {name,quantity} = props.product;

    const reviewItemStyle ={
        borderBottom: '1px solid lightgrey',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px',
    }

    return (
        <div style={reviewItemStyle}>
            <h3 className="info-container">{name}</h3>
            <p>Quantity: {quantity.length}</p>
         
        </div>
    );
};

export default ReviewItem;