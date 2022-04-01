import './navBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import store from "../context/storeContext";
import { useContext } from 'react';



const NavBar = () => {
  const cart = useContext(store).cart;
    return (
    
    
    <div className='navBar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/navBar">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">Catalog</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to="/cart">Cart</Link>
        </li>
          </ul>
        
      <form className="d-flex">
        Cart: {cart.length}
      </form>
    </div>
  </div>
</nav>
        
    </div>
    
    );
};

export default NavBar;