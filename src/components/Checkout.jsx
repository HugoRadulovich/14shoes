import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Checkout = () => {

    return(
        <Link to="/Cart">
            <button type="button" className="btn btn-dark m-2 p-2">CHECK OUT</button>
        </Link>
        
    )
}

export default Checkout;