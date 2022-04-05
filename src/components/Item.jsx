import 'bootstrap/dist/css/bootstrap.min.css';


export default function Item({ item }){
    return (
      <div class=" ms-5 card w-75">
      <img src={item.img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">${item.nombre}</h5>
        <p class="card-text">USD$: ${item.precio}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button id={item.id} class ='btnCompra btn btn-dark'>Comprar</button>
        </div>
      </div>
    </div>

    );
};
