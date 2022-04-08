import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return(
<div className="home-page">
        
    <div className="header">
       <h1>Mami Avion</h1>
      

      <div className="catalog-a">
        <h3>Link to Catalog below!</h3>

        <div className="cat-link">
            <Link to="/catalog" className="btn-b">
              Check our amazing catalog! <i classs="fa fa-chevron-circle-right" aria-hidden="true">

             </i>
            </Link>
            
        
        </div>
      </div>
    </div>
</div>



  
    

    );

};

export default Home;