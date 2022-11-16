import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from './products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            {/* <div className='length'>
                <h3>Product: {products.length} items</h3>
            </div> */}
            <div className='shop-container'>
                <div className="product-container">
                    {
                     products.map(product => 
                     <Product 
                        product={product} 
                        key={product.id} 
                        handleCart={handleCart}
                    ></Product>)
                    }
                </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;