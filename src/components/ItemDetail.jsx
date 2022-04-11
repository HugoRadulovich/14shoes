import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {



    return (
        <>
        {
            <div className="prop">
                <img src={item.img} alt="" />
                <div className="container">
                <h2>{item.nombre}</h2>
                    <p>{item.descripcion}</p>
                    <h3>USD$ {item.precio}</h3>
                    <h6>Stock: {item.cantidad} unidades</h6>
                    <ItemCount stock={item.cantidad} initial={1}></ItemCount>
                </div>
                </div>
        
            

        }
        </>
    );
}

export default ItemDetail;