import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const f = fakeData.slice(0,10);
    const [products, setProducts] = useState(f);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const previousCart = productKey.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    },[])


    const handleAddCart = (product) =>{
        const productToBeAddedKey = product.key;
        const sameProduct = cart.find(pd=>pd.key === productToBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count =sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key!==productToBeAddedKey);
            newCart = [...others,sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className='twin-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.key} showAddToCart ={true} handleAddCart={handleAddCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review"><button className="order-button">Review Cart</button></Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;