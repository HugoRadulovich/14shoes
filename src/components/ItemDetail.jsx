import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import Checkout  from './Checkout'
import './ItemDetail.css';
import { CartContext } from './CartContext';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"


const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const tes = useContext(CartContext);

    const onAdd = (cantidad) => {
        Toastify({

            text: `Se agrego ${cantidad} al carrito`,
            
            duration: 3000,
            style: {
                    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(127,129,130,1) 100%)"
            },
            
            }).showToast()
        
        setItemCount(cantidad);
        tes.addToCart(item,cantidad);
        
        
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