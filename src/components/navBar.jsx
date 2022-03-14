import './navBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return (<div className='navBar'>
        <nav>
            <ul>
                <li className='list'>
                    <a href="/">Home</a>
                </li>
                <li className='list'>
                   <a href="/"> Catalog</a>
                </li>
                <li className='list'>  
                    <a href="/"> Checkout</a>
                </li>
            </ul>
            </nav>
        
        </div>);
};

export default NavBar;