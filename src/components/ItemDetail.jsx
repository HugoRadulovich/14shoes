import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ItemCount from './ItemCount';
import Checkout  from './Checkout'
import './ItemDetail.css';


const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (cantidad) => {
        alert("Usted selecciono " + cantidad + " pares.");
        setItemCount(cantidad);
    }


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
                    {
                    itemCount === 0
                    ?  <ItemCount stock={item.cantidad} initial={1} onAdd={onAdd}></ItemCount>
                    :  <Checkout></Checkout>
                    }
                </div>
                </div>
        
            

        }
        </>
    );
}

export default ItemDetail;