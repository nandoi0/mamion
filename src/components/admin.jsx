import "./admin.css";
import { useState, useEffect } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [prod, setProd] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProds, setAllProds] = useState([]);

  const handleInputChange = (e) => {
    var copy = { ...prod };
    copy[e.target.name] = e.target.value;
    setProd(copy);
  };

  const handleCCChange = (e) => {
    var copy = { ...coupon };
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

  const saveCoupon = async () => {
    console.log(coupon);

    let fixed = { ...coupon};
    fixed.discount = parseInt(coupon.discount);

    let service = new DataService();
    let resp = await service.saveCouponCode(fixed);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  };

  const loadCoupons = async () => {
    let service = new DataService();
    let all = await service.getCoupons();
    setAllCoupons(all);

  };

  useEffect(() => {
    loadCoupons();
  });

  return (
    <div className="master-div">
    <div className="admin-page">
      <div className="header">
         <h1>Admin Page</h1>
      </div>

      <div className="register">
        <h3>Register new product</h3>

        <div className="my-control">
          <label for="inp-title">Title:</label>
          <input on Change={handleInputChange}name="title" type="text" id="inp-title"></input>
        </div>

        <div className="my-control">
          <label for="inp-image">Image:</label>
          <input onChange={handleInputChange} name="image" type="text" id="inp-image"></input>
        </div>

        <div className="my-control">
          <label for="inp-cat">Category:</label>
          <input onChange={handleInputChange}name="category"type="text"id="inp-cat"></input>
        </div>
        <div className="my-control">
          <label for="inp-price">Price:</label>
          <input onChange={handleInputChange} name="price" type="text"id="inp-price"></input>
        </div>
        <div className="my-control">
          <button onClick={saveProduct} className="btn-A">
            Save Product:
          </button>
        </div>

        {allProds.map((prod, index) => (
          <div key={index}>
            <h5>
              {prod.title} - ${prod.price}
            </h5>
          </div>
        ))}

     
      </div>

      <div className="my-coupon" id="form">
          <h3>Coupon Codes</h3>
          <div className="coupon">
            <label>Code:</label>
            <input onChange={handleCCChange} name="code" type="text"></input>
          </div>
          <div className="coupon">
            <label>Discount:</label>
            <input
              onChange={handleCCChange}
              name="discount"
              type="text"></input>
          </div>

          <div className="my-control">
            <button onClick={saveCoupon} className="btn-A">
              Save Coupon Code:
            </button>
          </div>
        </div>
      </div>

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
