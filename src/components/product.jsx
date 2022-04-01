import './product.css';
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react';
import store from './../context/storeContext';



const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

   const addProdToCart = useContext(store).addProdToCart;

    const onQuantityChange = (value) =>{
        console.log("Quantity changed: ", value);
        setQuantity(value);
    };

    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);

    };

    const addProduct = () => {
            //add prod to context state
            let cartProd = {...props.data};
            cartProd.quantity = quantity;

            addProdToCart(cartProd);
    };
    return (
        <div className='product'>
            <img src={"/images/"+props.data.image} alt="product img"></img>
            <h2>{props.data.title}</h2>

        <div className='price-total'>
        <label className='price'>Price: ${props.data.price}</label>
        <label className='total'>Total: ${getTotal()}</label>
        </div>
        
        <div className='add-btn'>
        <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
        <button onClick={addProduct} className="btn btn-sm btn-info btn-add">Add</button>
        </div>
    </div>);
};

export default Product;