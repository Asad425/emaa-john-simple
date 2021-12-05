import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const f = fakeData.slice(0,10);
    const [products, setProducts] = useState(f);
    const [cart, setCart] = useState([]);

    const handleAddCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
        const count =newCart.filter(pd=>pd.key === product.key);
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.key} showAddToCart ={true} handleAddCart={handleAddCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;