import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return(
    <div className="home-page">
        <h1>Mami Avion</h1>

        <Link to="/catalog" className="btn btn-outline-danger">
            Check our amazing catalog! <i classs="fa fa-chevron-circle-right" aria-hidden="true">

            </i>
        </Link>
    

  
    </div>

    );

};

export default Home;