import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import carrito from '../carrito.png'
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";

const CardWidget = () => {

  const test = useContext(CartContext);

    return (
      <Link to="/Cart">
         <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src={carrito} width="25px" height="25px"/>
        <span id="cantidad" className="badge bg-secondary m-2">{test.calcItems()}</span>
      </button>
      </Link>
       
    )
}

export default CardWidget;