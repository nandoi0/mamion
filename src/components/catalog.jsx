import './catalog.css';
import Product from './product';
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

const Catalog = () => {

    let [product, setProduct] = useState([]);

    const loadCatalog = async () =>{
        let service = new DataService();
        let data = await service.getCatalog();
        setProduct(data);
    };

    useEffect( () =>{
        loadCatalog();
    }, []);


    return (<div className='catalog'>
        <div className='header'>
        <h1>Mami Avion Menu</h1>
        </div>
        <div className='prod-len'>
        <h2>We have {product.length} products</h2>
        {product.map(
            (prod) => (<Product key={prod._id} data={prod}/>)  )}
        </div>
    
    </div>);
};

export default Catalog;