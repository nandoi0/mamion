import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'


function App() {
  return ( <div className="App">
      <NavBar></NavBar>
      <QuantityPicker></QuantityPicker>
      <label>{1+2}</label>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>);

};


export default App; 