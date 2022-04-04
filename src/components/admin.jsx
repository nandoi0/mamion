import './admin.css';
import {useState} from "react";
import DataService from '../services/dataService';

const Admin = () => {
    const[prod, setProd]= useState({})
    const [coupon, setCoupon] = useState({})
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProds, setAllProds] = useState([]);
    

    const handleInputChange = (e) => {
        var copy = {...prod};
        copy[e.target.name] = e.target.value;
        setProd(copy)
    };

    const handleCCChange =(e) => {
        var copy = {...coupon};
        copy[e.target.name] = e.target.value;
        setCoupon(copy);
    };

    const saveProduct = () => {
        console.log(prod);
    

    let service = new DataService();
    service.saveProduct(prod);

    let copy = [...allProds];
    copy.push(prod);
    setAllProds(copy);

    };

    const saveCoupon = () => {
        console.log(coupon);

        let service = new DataService();
        service.saveCouponCode(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);

    };

    return (<div className='admin-page'>
        <div className='admin'>
            <h1 >Admin Page</h1>
        </div>
     

        
        <div className="register">
            <h3>Register new product</h3>

            <div className="my-control">
                <label for="inp-title">Title</label>
                <input onChange={handleInputChange} name="title" type="text" id="inp-title"></input>
            </div>

            <div className="my-control">
                <label for="inp-image">Image:</label>
                <input onChange={handleInputChange} name="image" type="text" id="inp-image"></input>
            </div>

            <div className="my-control">
                <label for="inp-cat">Category:</label>
                <input onChange={handleInputChange} name="category" type="text" id="inp-cat"></input>
            </div>
            <div className="my-control">
                <label for="inp-price">Price:</label>
                <input onChange={handleInputChange} name="price" type="text" id="inp-price"></input>
            </div>
            <div className='my-control'>
                <button onClick={saveProduct} className='btn btn-dark'>Save Product:</button>
            </div>

            <div className='register' id="form">
                <h3>Coupon Codes</h3>
                <div className='my-control'>
                    <label>Code:</label>
                    <input onChange={handleCCChange} name="code" type="text"></input>
                </div>
                <div className='my-control'>
                    <label>Discount:</label>
                    <input onChange={handleCCChange} name="discount" type="text"></input>
                    </div> 

                <div className='my-control'>
                    <button onClick={saveCoupon} className="btn btn-dark">
                        Save Coupon Code
                    </button>
                </div>
                <div className='form'>
                <h3>Coupon Codes</h3>
                <div className='my-control'>
                    <label>Code:</label>
                    <input onChange={handleCCChange} name="code" type="text"></input>
                </div>
                <div className='my-control'>
                    <label>Discount:</label>
                    <input onChange={handleCCChange} name="discount" type="text"></input>
                    </div> 

                <div className='my-control'>
                    <button onClick={saveCoupon} className="btn btn-dark">
                        Save Coupon Code
                    </button>
                </div>
                </div>
              </div>
            </div>

            {allProds.map((prod, index) => (
                <div key={index}>
                    <h5>
                      {prod.title} - ${prod.price}
                    </h5>
                </div>
            ))}


            <div className="coupon-list">
                {allCoupons.map((coupon, index) => (
                 <div key={index}>
                    <label>{coupon.code}</label> - <label>{coupon.discount}</label>
                 </div>
            ))}
        </div>
            
        
       
    
      </div>
    );
};

export default Admin;