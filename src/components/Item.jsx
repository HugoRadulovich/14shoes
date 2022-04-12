import 'bootstrap/dist/css/bootstrap.min.css';
import './Vinculos.css'
import { Link } from "react-router-dom";

const Item = ({ item }) =>{

    return (

      <div className="col">
        <div className=" m-3 card h-100">
                <img src={item.img} className="card-img-top" alt="imagen_del_producto"/>
                <div className="card-body">
                  <h5 className="card-title text-center">{item.nombre}</h5>
                  <p className="card-text">USD$: {item.precio}</p>
                  <div className="d-grid gap-2 col-6 mx-auto">
                  <Link to={`/item/${item.id}`} className="vinculo">
                  <button id={item.id} className ='btnCompra btn btn-dark d-grid gap-2 col-6 mx-auto'>Detalles</button>
                  </Link>
            
                  </div>
                  
                </div>
          </div>
          </div>

    );
}

export default Item;