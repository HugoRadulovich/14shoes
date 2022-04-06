import 'bootstrap/dist/css/bootstrap.min.css';


const Item = ({ item }) =>{

    return (

     
      <div className="col-md-4">
        <div className=" m-3 card w-100">
                <img src={item.img} className="card-img-top" alt="imagen_del_producto"/>
                <div className="card-body">
                  <h5 className="card-title text-center">{item.nombre}</h5>
                  <p className="card-text">USD$: {item.precio}</p>
                  <div className="d-grid gap-2 col-6 mx-auto">
                  <button id={item.id} className ='btnCompra btn btn-dark'>Comprar</button>
                  </div>
                  
                </div>
          </div>
          </div>

    );
}

export default Item;