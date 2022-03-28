import 'bootstrap/dist/css/bootstrap.min.css';
import carrito from '../carrito.png'

const CardWidget = () => {
    return (
        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src={carrito} width="25px" height="25px"/>
        <span id="cantidad" className="badge bg-secondary m-2">4</span>
      </button>
    )
}

export default CardWidget;