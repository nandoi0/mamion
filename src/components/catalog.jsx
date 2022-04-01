import './catalog.css';
import Product from './product';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

const Catalog = () => {

    let [product, setProduct] = useState([]);

    const loadCatalog = () =>{
        let service = new DataService();
        let data = service.getCatalog();
        setProduct(data);
    };

    useEffect( () =>{
        loadCatalog();
    });


    return (<div className='catalog'>
        <div className='internal'>
        <h1>Mami Avion Menu</h1>
        <h2>We have {product.length} products</h2>
        {product.map(
            (prod) => (<Product key={prod._id} data={prod}/>)  )}
        </div>
    
    </div>);
};

export default Catalog;