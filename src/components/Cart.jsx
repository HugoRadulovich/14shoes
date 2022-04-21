import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'

const Cart = () => {
    const test = useContext(CartContext);

    return(
        <>
        <p className="cartTitulo">Carrito</p>
        <div className="cartBtnEliminarTodo">
        <button onClick={test.removeList} type="button" className="btn btn-dark">Eliminar Todo</button>
        </div>
        
        {
            test.CartList.length > 0 && (
                
                    test.CartList.map(item =>
                        <>
                        <hr></hr>
                        <div className="cartBody">
                            <div className="cartImg">
                            <img src={item.img} alt="" />
                            </div>

                            <div className='cartText'>
                            <p><b>Producto: </b>{item.nombre}</p>
                            <p><b>Cantidad: </b>{item.cantidad}</p>
                            <div>
                            <p><b>Precio: </b>USD${item.precio}</p>
                            </div>
                            <button onClick={() => test.deleteItem(item.id)} type="button" class="btn btn-dark">Eliminar</button>
                            </div>
                        </div>
                       
                        
                        
                        </>)
                
                
            )
        }
        </>
        
        
    )
}

export default Cart;