import './cart.css';
import { useContext } from 'react';
import store from "../context/storeContext";
import ProductInCart from './productInCart';

const Cart = () =>{

    let {cart, addProdToCart} = useContext(store);

    return(
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className='cart-item-box'>
                <h4>Here are the items you have chosen so far</h4>
            </div>
            
            <h3>Let's finish the order.</h3>
            <h5>Are you ready to pay for th {cart.length} itemd in cart?</h5>

            <div className='products'>
                {cart.map((prod) => (
                  <ProductInCart key={prod._id} data={prod}></ProductInCart>
                ))}
            </div>
        </div>

    );

};

export default Cart;