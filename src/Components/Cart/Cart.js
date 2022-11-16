import React from 'react';
import  './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.03).toFixed(2));

    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected item: {cart.length}</p>
            <p>Price: $ {total}</p>
            <p>Shipping Charge: $ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <h5>Grand Total: $ {grandTotal}</h5>
        </div>
    );
};

export default Cart;